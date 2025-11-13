import { ethers } from "ethers";

// ABI mint function only
const ABI = [
  "function mint(uint256 mintCount) external payable",
  "function totalMintCount() view returns (uint256)",
  "function userMintCount(address) view returns (uint256)",
  "function remainingMintsForUser(address) view returns (uint256)"
];

const CONTRACT = "0xfe0b0148A535ab66F83e19756A20A0b9fCAF1305";
const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");

const contract = new ethers.Contract(CONTRACT, ABI, provider);

const MINT_PRICE = ethers.parseEther("0.00012");

export default async function handler(req, res) {
  const { type, amount = "1", txHash } = req.query;
  const mintCount = parseInt(amount);

  // Default frame image (update meta tags dynamically if needed)
  const baseMeta = `
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://YOUR_DOMAIN.vercel.app/og.png" />
    <meta property="fc:frame:post_url" content="https://YOUR_DOMAIN.vercel.app/api/frame" />
  `;

  if (type === "info") {
    const total = await contract.totalMintCount();
    return res.json({ minted: Number(total) });
  }

  if (type === "tx") {
    // Generate calldata
    const iface = new ethers.Interface(ABI);
    const calldata = iface.encodeFunctionData("mint", [mintCount]);

    const txData = {
      chainId: "eip155:8453", // Base Mainnet
      method: "eth_sendTransaction",
      params: {
        abi: ABI,
        to: CONTRACT,
        data: calldata,
        value: (MINT_PRICE * BigInt(mintCount)).toString(),
      },
    };

    res.setHeader("Content-Type", "text/html");
    res.send(`
      <!DOCTYPE html>
      <html>
        ${baseMeta}
        <meta property="fc:frame:button:1" content="Confirm Mint ${mintCount}x" />
        <meta property="fc:frame:button:1:action" content="tx" />
        <meta property="fc:frame:button:1:target" content="https://YOUR_DOMAIN.vercel.app/api/frame?type=tx&amount=${mintCount}" />
        <meta property="fc:frame:button:1:post_url" content="https://YOUR_DOMAIN.vercel.app/api/frame?type=success&amount=${mintCount}&tx=${Date.now()}" />
      </html>
    `);
    return;
  }

  if (type === "success") {
    // Auto-cast success message
    const autoCast = `
      I just claimed ${ (45000 * mintCount).toLocaleString() } $GODMODE tokens! 🚀
      Free mint on Base via Farcaster Mini App
      https://YOUR_DOMAIN.vercel.app
    `;

    res.setHeader("Content-Type", "text/html");
    res.send(`
      <!DOCTYPE html>
      <html>
        ${baseMeta}
        <meta property="fc:frame:image" content="https://YOUR_DOMAIN.vercel.app/success.png" />
        <meta property="fc:frame:button:1" content="Share Cast" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:input:text" content="${autoCast}" />
      </html>
    `);
    return;
  }

  // Default frame
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html>
      ${baseMeta}
      <meta property="fc:frame:intent" content="mint" />
      <meta property="fc:frame:button:1" content="FREE MINT $GODMODE" />
      <meta property="fc:frame:button:1:action" content="tx" />
      <meta property="fc:frame:button:1:target" content="https://YOUR_DOMAIN.vercel.app/api/frame?type=tx" />
      <meta property="fc:frame:button:1:post_url" content="https://YOUR_DOMAIN.vercel.app/api/frame?type=success" />
    </html>
  `);
}
