import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ionicons-site',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://ionic.io/ionicons/v4/',
      prerenderConfig: 'prerender.config.js',
      copy: [
        { src: '../node_modules/ionicons/dist/css/ionicons.min.css', dest: './css/ionicons.min.css' },
        { src: '../node_modules/ionicons/dist/ionicons/', dest: './ionicons/' },
        { src: '../node_modules/ionicons/dist/ionicons.js', dest: './ionicons.js' },
        { src: '../node_modules/ionicons/dist/cheatsheet.html', dest: './cheatsheet.html' },
        { src: '../node_modules/ionicons/dist/ionicons/data.json', dest: './data.json' },
        { src: '../node_modules/ionicons/dist/fonts/', dest: './fonts/' },

        { src: '../archived/v1/', dest: '../v1/' },
        { src: '../archived/v2/', dest: '../v2/' },
        { src: './index.html', dest: './usage/index.html' },
        { src: './test', dest: './test' },
      ]
    }
  ],
  globalStyle: 'src/global/style.css'
};
