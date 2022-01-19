const fs = require('fs-extra');
const path = require('path');
const archiver = require('archiver');
const https = require('https');
const os = require('os');
const AdmZip = require('adm-zip');


const optimizedWebSvgsDir = path.join(__dirname, '..', 'node_modules', 'ionicons', 'dist', 'svg');

const distZipDir = path.join(__dirname, '..', 'www', 'ionicons');
const distDesignerPackFile = path.join(distZipDir, 'ionicons.designerpack.zip');
const distOptimizedWebFile = path.join(distZipDir, 'ionicons.weboptimized.zip');

console.log(`weboptimized source: ${optimizedWebSvgsDir}`);

fs.ensureDirSync(distZipDir);

const webOptimizeArchive = archiver('zip', {
  zlib: { level: 9 }
});

const output = fs.createWriteStream(distOptimizedWebFile);
output.on('close', () => {
  const svgCount = fs.readdirSync(optimizedWebSvgsDir).length;  
  console.log(`weboptimized created: ${distOptimizedWebFile}, files: ${svgCount}`);
});

webOptimizeArchive.pipe(output);
webOptimizeArchive.directory(optimizedWebSvgsDir, false);
webOptimizeArchive.on('error', (err) => {
  throw err;
});
webOptimizeArchive.finalize();

const masterZipUrl = 'https://codeload.github.com/ionic-team/ionicons/zip/refs/heads/main';
const tmpDownloadZip = path.join(os.tmpdir(), `ionicons.zip`);

console.log(`download ${masterZipUrl} to ${path.dirname(tmpDownloadZip)}`);

const stream = fs.createWriteStream(tmpDownloadZip);
https.get(masterZipUrl, (rsp) => rsp.pipe(stream));
stream.on('finish', zipDesignerPack);

function zipDesignerPack() {
  // extract master repo zip
	const extractZip = new AdmZip(tmpDownloadZip);
  extractZip.extractAllTo(os.tmpdir(), true);

  const srcSvgs = path.join(os.tmpdir(), `ionicons-master`, `src`, `svg`);
  console.log('designerpack source:', srcSvgs);

  const designerPackArchive = archiver('zip', {
    zlib: { level: 9 }
  });

  const output = fs.createWriteStream(distDesignerPackFile);
  output.on('close', () => {
    const svgCount = fs.readdirSync(srcSvgs).length;  
    console.log(`designerpack created: ${distDesignerPackFile}, files: ${svgCount}`);
  });

  designerPackArchive.pipe(output);
  designerPackArchive.directory(srcSvgs, false);
  designerPackArchive.on('error', (err) => {
    throw err;
  });
  designerPackArchive.finalize();
}
