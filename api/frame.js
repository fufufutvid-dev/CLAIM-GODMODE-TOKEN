// Vercel Serverless Function for Farcaster Frame
export default function handler(req, res) {
  const baseUrl = 'https://claim-godmode-token.vercel.app';
  
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CLAIM TOKEN $GODMODE - FREE MINT</title>
  
  <!-- Farcaster Frame Meta Tags -->
  <meta property="fc:frame" content="vNext">
  <meta property="fc:frame:image" content="${baseUrl}/og.png">
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1">
  <meta property="fc:frame:button:1" content="🚀 MINT NOW">
  <meta property="fc:frame:button:1:action" content="link">
  <meta property="fc:frame:button:1:target" content="${baseUrl}/app.html">
  <meta property="fc:frame:post_url" content="${baseUrl}/api/frame">
  
  <!-- Open Graph -->
  <meta property="og:title" content="CLAIM TOKEN $GODMODE - FREE MINT">
  <meta property="og:description" content="Mint $GODMODE tokens on Base Mainnet. 1B total supply, 50x max per user!">
  <meta property="og:image" content="${baseUrl}/og.png">
  
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
      padding: 50px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      max-width: 600px;
    }
    h1 {
      font-size: 48px;
      background: linear-gradient(135deg, #ffd700, #ffed4e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
      margin-bottom: 30px;
    }
    a {
      display: inline-block;
      padding: 15px 40px;
      background: linear-gradient(135deg, #ffd700, #ffed4e);
      color: #000;
      text-decoration: none;
      border-radius: 12px;
      font-weight: bold;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>$GODMODE</h1>
    <p>FREE MINT ON BASE MAINNET</p>
    <p>1B Supply • 50x Max • 45K Per Mint</p>
    <a href="/app.html">🚀 Launch Mint App</a>
  </div>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}