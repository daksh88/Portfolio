const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const publicDir = path.join(__dirname, '../public');
  const files = await fs.readdir(publicDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(publicDir, file);
      const outputPath = path.join(publicDir, `optimized-${file}`);

      await sharp(inputPath)
        .resize(800, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/, '.webp'));

      console.log(`Optimized: ${file}`);
    }
  }
}

optimizeImages().catch(console.error);