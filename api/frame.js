export default function handler(req, res) {
  const mintUrl = 'https://claim-godmode-token.vercel.app/';
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://claim-godmode-token.vercel.app/og-image.png" />
        <meta property="fc:frame:button:1" content="🚀 Mint $GODMODE" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="${mintUrl}" />
        <meta property="og:image" content="https://claim-godmode-token.vercel.app/og-image.png" />
      </head>
      <body>
        <h1>GODMODE Token Mint</h1>
      </body>
    </html>
  `);
}