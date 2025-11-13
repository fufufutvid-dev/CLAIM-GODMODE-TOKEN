// api/webhook.js - Farcaster Frame Webhook Handler

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle POST request from Farcaster
  if (req.method === 'POST') {
    try {
      const body = req.body;
      
      console.log('Webhook received:', JSON.stringify(body, null, 2));

      // Validate the frame message
      if (!body || !body.untrustedData) {
        return res.status(400).json({ error: 'Invalid frame message' });
      }

      const { untrustedData } = body;
      const { fid, buttonIndex, castId } = untrustedData;

      // Log the interaction
      console.log(`User ${fid} clicked button ${buttonIndex} on cast ${castId?.hash}`);

      // Return a response frame
      return res.status(200).json({
        type: 'frame',
        version: 'vNext',
        image: 'https://claim-godmode-token.vercel.app/preview.png',
        buttons: [
          {
            label: '🚀 MINT $GODMODE',
            action: 'link',
            target: 'https://claim-godmode-token.vercel.app/'
          }
        ]
      });

    } catch (error) {
      console.error('Webhook error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Handle GET request - return frame metadata
  if (req.method === 'GET') {
    return res.status(200).json({
      name: '$GODMODE Token - FREE MINT',
      description: 'Mint $GODMODE tokens on Base Mainnet. 45,000 tokens per mint!',
      image: 'https://claim-godmode-token.vercel.app/preview.png',
      version: 'vNext'
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
