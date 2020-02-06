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
      dir: 'docs',
      serviceWorker: null,
      baseUrl: 'https://ionicons.com/',
      prerenderConfig: 'prerender.config.js',
      copy: [
        { src: '../node_modules/ionicons/dist/ionicons/', dest: './ionicons/' },
        { src: '../node_modules/ionicons/dist/ionicons.js', dest: './ionicons.js' },
        { src: '../node_modules/ionicons/dist/cheatsheet.html', dest: './cheatsheet.html' },
        { src: '../node_modules/ionicons/dist/ionicons.json', dest: './ionicons.json' },
        { src: '../node_modules/ionicons/dist/ionicons.symbols.svg', dest: './ionicons.symbols.svg' },

        { src: '../archived/v1/', dest: './v1/' },
        { src: '../archived/v2/', dest: './v2/' },
        { src: '../archived/v4/', dest: './v4/' },
        { src: './index.html', dest: './usage/index.html' },
        { src: './test', dest: './test' },
        { src: './CNAME', dest: './CNAME' },
      ]
    }
  ],
  globalStyle: 'src/global/style.css'
};
