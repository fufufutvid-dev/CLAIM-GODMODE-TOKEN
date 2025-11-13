// Farcaster Frame Webhook Handler
// This handles frame interactions from Farcaster

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { untrustedData, trustedData } = req.body;

    // Log the interaction
    console.log('Frame interaction received:', {
      fid: untrustedData?.fid,
      buttonIndex: untrustedData?.buttonIndex,
      castId: untrustedData?.castId,
    });

    // Button 1 clicked - Launch mint app
    if (untrustedData?.buttonIndex === 1) {
      // Return a frame response that opens the mint app
      return res.status(200).json({
        type: 'frame',
        version: 'vNext',
        image: 'https://claim-godmode-token.vercel.app/og.png',
        buttons: [
          {
            index: 1,
            title: '🚀 Launch Mint App',
            action: 'link',
            target: 'https://claim-godmode-token.vercel.app/mint',
          },
        ],
      });
    }

    // Default response
    return res.status(200).json({
      type: 'frame',
      version: 'vNext',
      image: 'https://claim-godmode-token.vercel.app/og.png',
      buttons: [
        {
          index: 1,
          title: '🚀 Mint Now',
          action: 'link',
          target: 'https://claim-godmode-token.vercel.app/mint',
        },
      ],
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}