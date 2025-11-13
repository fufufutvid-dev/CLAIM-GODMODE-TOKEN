// Vercel Serverless Function for OG Image
// File: api/og.js

export default async function handler(req, res) {
  // Set headers for image
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=3600');

  // Generate dynamic SVG image
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bgGradient)"/>
      
      <!-- Decorative circles -->
      <circle cx="100" cy="100" r="150" fill="#8B5CF6" opacity="0.2"/>
      <circle cx="1100" cy="530" r="200" fill="#10b981" opacity="0.2"/>
      
      <!-- Main content -->
      <text x="600" y="200" font-family="Arial, sans-serif" font-size="120" font-weight="900" 
            fill="url(#textGradient)" text-anchor="middle">
        ⚡ GODMODE
      </text>
      
      <text x="600" y="280" font-family="Arial, sans-serif" font-size="40" font-weight="600" 
            fill="#FFFFFF" text-anchor="middle" opacity="0.9">
        CLAIM YOUR TOKEN NOW
      </text>
      
      <!-- Badge -->
      <rect x="450" y="310" width="300" height="50" rx="25" fill="#10b981"/>
      <text x="600" y="343" font-family="Arial, sans-serif" font-size="24" font-weight="700" 
            fill="#FFFFFF" text-anchor="middle">
        🎉 FREE MINT AVAILABLE
      </text>
      
      <!-- Stats -->
      <rect x="200" y="400" width="350" height="150" rx="20" fill="#FFFFFF" opacity="0.15"/>
      <text x="375" y="445" font-family="Arial, sans-serif" font-size="18" font-weight="400" 
            fill="#FFFFFF" text-anchor="middle" opacity="0.7">
        TOTAL SUPPLY
      </text>
      <text x="375" y="510" font-family="Arial, sans-serif" font-size="60" font-weight="800" 
            fill="#FFFFFF" text-anchor="middle">
        1B
      </text>
      
      <rect x="650" y="400" width="350" height="150" rx="20" fill="#FFFFFF" opacity="0.15"/>
      <text x="825" y="445" font-family="Arial, sans-serif" font-size="18" font-weight="400" 
            fill="#FFFFFF" text-anchor="middle" opacity="0.7">
        MAX PER USER
      </text>
      <text x="825" y="510" font-family="Arial, sans-serif" font-size="60" font-weight="800" 
            fill="#FFFFFF" text-anchor="middle">
        50x
      </text>
      
      <!-- Footer -->
      <text x="600" y="595" font-family="Arial, sans-serif" font-size="16" 
            fill="#FFFFFF" text-anchor="middle" opacity="0.6">
        Base Mainnet • 0xfe0b...1305
      </text>
    </svg>
  `;

  // Convert SVG to PNG using sharp (if available) or return SVG
  try {
    // If you have sharp installed in your Vercel project:
    // const sharp = require('sharp');
    // const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
    // res.send(pngBuffer);
    
    // For now, return SVG (which works in most cases)
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: 'Failed to generate image' });
  }
}