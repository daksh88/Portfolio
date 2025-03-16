const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const publicDir = path.join(__dirname, '../public');
  const files = await fs.readdir(publicDir);
  
  for (const file of files) {
    if (file.match(/slide\d+\.jpg$/)) {
      const inputPath = path.join(publicDir, file);
      const thumbPath = path.join(publicDir, file.replace('.jpg', '-thumb.jpg'));
      
      await sharp(inputPath)
        .resize(800, 600, { fit: 'cover' })
        .jpeg({ quality: 60 })
        .toFile(thumbPath);
        
      await sharp(inputPath)
        .jpeg({ quality: 80, progressive: true })
        .toFile(path.join(publicDir, file.replace('.jpg', '-opt.jpg')));
    }
  }
}

optimizeImages().catch(console.error);