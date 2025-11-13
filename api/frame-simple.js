// api/frame-simple.js - Simplified Farcaster Frame (100% Working)
export default function handler(req, res) {
  const baseUrl = 'https://claim-godmode-token.vercel.app';
  
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>$GODMODE Token - Free Mint</title>
  
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="${baseUrl}/og.png" />
  <meta property="fc:frame:button:1" content="🚀 MINT NOW" />
  <meta property="fc:frame:button:1:action" content="link" />
  <meta property="fc:frame:button:1:target" content="${baseUrl}/app" />
  
  <meta property="og:image" content="${baseUrl}/og.png" />
  <meta property="og:title" content="CLAIM TOKEN $GODMODE - FREE MINT" />
  <meta property="og:description" content="Mint $GODMODE tokens on Base Mainnet. 1B supply, 50x max per user!" />
</head>
<body>
  <h1>$GODMODE Token</h1>
  <p>Click the button to start minting!</p>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
