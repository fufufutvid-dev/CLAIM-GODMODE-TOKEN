// api/frame.js - Vercel Serverless Function for Farcaster Frame
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const baseUrl = 'https://claim-godmode-token.vercel.app';

  // HTML with Farcaster Frame meta tags
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CLAIM TOKEN $GODMODE - FREE MINT</title>

    <!-- Farcaster Frame Meta Tags -->
    <meta property="fc:frame" content="vNext">
    <meta property="fc:frame:image" content="${baseUrl}/og.png">
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1">
    <meta property="fc:frame:button:1" content="🚀 MINT NOW">
    <meta property="fc:frame:button:1:action" content="link">
    <meta property="fc:frame:button:1:target" content="${baseUrl}/app">
    <meta property="fc:frame:post_url" content="${baseUrl}/api/frame">

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="CLAIM TOKEN $GODMODE - FREE MINT">
    <meta property="og:description" content="Mint $GODMODE tokens on Base Mainnet. 1B total supply, 50x max per user!">
    <meta property="og:image" content="${baseUrl}/og.png">
    <meta property="og:url" content="${baseUrl}">
    <meta name="twitter:card" content="summary_large_image">

    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 50px 20px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
        }
        .container {
            max-width: 600px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            padding: 40px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        h1 {
            font-size: 56px;
            font-weight: 900;
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
        }
        .subtitle {
            font-size: 24px;
            margin-bottom: 30px;
            opacity: 0.9;
        }
        .stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin: 30px 0;
        }
        .stat {
            background: rgba(255, 255, 255, 0.15);
            padding: 20px;
            border-radius: 12px;
        }
        .stat-label {
            font-size: 12px;
            opacity: 0.8;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .stat-value {
            font-size: 24px;
            font-weight: 700;
            color: #ffd700;
            margin-top: 8px;
        }
        .launch-btn {
            display: inline-block;
            padding: 18px 50px;
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            color: #000;
            text-decoration: none;
            border-radius: 12px;
            font-weight: 700;
            font-size: 20px;
            margin-top: 20px;
            transition: all 0.3s;
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
        }
        .launch-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 215, 0, 0.6);
        }
        @media (max-width: 600px) {
            h1 { font-size: 42px; }
            .stats { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>$GODMODE</h1>
        <p class="subtitle">FREE MINT ON BASE MAINNET</p>
        
        <div class="stats">
            <div class="stat">
                <div class="stat-label">Total Supply</div>
                <div class="stat-value">1B</div>
            </div>
            <div class="stat">
                <div class="stat-label">Max Per User</div>
                <div class="stat-value">50x</div>
            </div>
            <div class="stat">
                <div class="stat-label">Per Mint</div>
                <div class="stat-value">45K</div>
            </div>
        </div>

        <a href="/app" class="launch-btn">🚀 LAUNCH MINT APP</a>
        
        <p style="margin-top: 30px; font-size: 14px; opacity: 0.7;">
            Contract: 0xfe0b...1305<br>
            Network: Base Mainnet
        </p>
    </div>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
