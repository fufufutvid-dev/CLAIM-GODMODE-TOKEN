// api/frame.js - Vercel Serverless Function for Farcaster Frame
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const baseUrl = 'https://claim-godmode-token.vercel.app';

  // Handle POST request from frame button
  if (req.method === 'POST') {
    // Redirect to mint app
    const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta property="fc:frame" content="vNext">
    <meta property="fc:frame:image" content="${baseUrl}/og.png">
    <meta property="fc:frame:button:1" content="🚀 OPEN MINT APP">
    <meta property="fc:frame:button:1:action" content="link">
    <meta property="fc:frame:button:1:target" content="${baseUrl}/app">
</head>
<body>
    <script>window.location.href = '${baseUrl}/app';</script>
</body>
</html>`;
    
    res.status(200).send(html);
    return;
  }

  // HTML with Farcaster Frame meta tags for GET request
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CLAIM TOKEN $GODMODE - FREE MINT</title>

    <!-- Farcaster Frame Meta Tags - CRITICAL ORDER -->
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
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="CLAIM TOKEN $GODMODE - FREE MINT">
    <meta name="twitter:description" content="Mint $GODMODE tokens on Base Mainnet. 1B total supply, 50x max per user!">
    <meta name="twitter:image" content="${baseUrl}/og.png">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .container {
            max-width: 600px;
            width: 100%;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            padding: 50px 40px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            text-align: center;
        }
        
        h1 {
            font-size: 64px;
            font-weight: 900;
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
            text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
        }
        
        .subtitle {
            font-size: 24px;
            margin-bottom: 40px;
            opacity: 0.95;
            font-weight: 600;
        }
        
        .stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin: 40px 0;
        }
        
        .stat {
            background: rgba(255, 255, 255, 0.15);
            padding: 25px 15px;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .stat-label {
            font-size: 12px;
            opacity: 0.8;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }
        
        .stat-value {
            font-size: 28px;
            font-weight: 700;
            color: #ffd700;
        }
        
        .launch-btn {
            display: inline-block;
            padding: 20px 60px;
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            color: #000;
            text-decoration: none;
            border-radius: 16px;
            font-weight: 700;
            font-size: 22px;
            margin-top: 30px;
            transition: all 0.3s;
            box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .launch-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(255, 215, 0, 0.6);
        }
        
        .contract-info {
            margin-top: 40px;
            font-size: 13px;
            opacity: 0.7;
            line-height: 1.8;
        }
        
        .contract-info strong {
            color: #ffd700;
            opacity: 1;
        }
        
        .frame-notice {
            margin-top: 30px;
            padding: 20px;
            background: rgba(255, 215, 0, 0.1);
            border: 1px solid rgba(255, 215, 0, 0.3);
            border-radius: 12px;
            font-size: 14px;
        }
        
        @media (max-width: 600px) {
            h1 { font-size: 48px; }
            .subtitle { font-size: 18px; }
            .stats { grid-template-columns: 1fr; }
            .container { padding: 35px 25px; }
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
        
        <div class="frame-notice">
            💡 <strong>Viewing in Farcaster?</strong><br>
            Click the "🚀 MINT NOW" button above the image to start minting!
        </div>
        
        <div class="contract-info">
            <strong>Contract:</strong> 0xfe0b...1305<br>
            <strong>Network:</strong> Base Mainnet (Chain ID: 8453)<br>
            <strong>Mint Price:</strong> 0.00012 ETH + gas
        </div>
    </div>
</body>
</html>`;

  res.status(200).send(html);
}
