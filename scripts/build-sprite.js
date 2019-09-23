const fs = require('fs-extra');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const htmlFilePath = path.join(srcDir, 'index-template.html');
const symbolsFilePath = path.join(rootDir, 'node_modules', 'ionicons', 'dist', 'ionicons.symbols.svg');

async function buildSprite() {
  try {
    const sprite = await fs.readFile(symbolsFilePath, 'utf8');
    const html = (await fs.readFile(htmlFilePath, 'utf8'))
      .replace(/{{svgSprite}}/g, sprite)

    await fs.writeFile(`${srcDir}/index.html`, html);
  } catch (err) {
    console.error(err)
  }
}

buildSprite();
