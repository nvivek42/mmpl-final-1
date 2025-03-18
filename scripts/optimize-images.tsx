import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs';

const sourceDir = path.join(process.cwd(), 'public/image/industries');
const outputDir = path.join(process.cwd(), 'public/image/industries/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Initialize blur placeholders file
fs.writeFileSync(`${outputDir}/blur-placeholders.json`, '{\n');

const sizes = [
  { width: 640, height: 480, suffix: 'sm' },
  { width: 768, height: 576, suffix: 'md' },
  { width: 1024, height: 768, suffix: 'lg' }
];

async function optimizeImages() {
  try {
    const files = await glob(`${sourceDir}/*.{jpg,jpeg,png}`);
    
    for (const file of files) {
      const filename = path.basename(file, path.extname(file));
      
      // Generate optimized versions
      for (const size of sizes) {
        const outputPath = path.join(outputDir, `${filename}-${size.suffix}.webp`);
        await sharp(file)
          .resize(size.width, size.height, { fit: 'cover' })
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Generated ${outputPath}`);
      }
      
      // Generate blur placeholder
      const blurBuffer = await sharp(file)
        .resize(20, 20, { fit: 'cover' })
        .webp({ quality: 20 })
        .toBuffer();
      
      const blurDataURL = `data:image/webp;base64,${blurBuffer.toString('base64')}`;
      
      // Append to JSON file
      fs.appendFileSync(
        `${outputDir}/blur-placeholders.json`,
        `  "${filename}": "${blurDataURL}"${files.indexOf(file) === files.length - 1 ? '' : ','}\n`
      );
    }
    
    // Close JSON file
    fs.appendFileSync(`${outputDir}/blur-placeholders.json`, '}\n');
    console.log('Image optimization complete!');
    
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();