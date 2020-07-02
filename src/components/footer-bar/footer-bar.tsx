import { Component, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/sites-shared';

@Component({
  tag: 'footer-bar',
  styleUrl: 'footer-bar.scss'
})
export class FooterBar {
  render() {
    return(
      <footer>
        <ResponsiveContainer>
          <div class="footer__open-source">
            <a href="http://ionicframework.com/"
              title="IonicFramework.com"
              rel="noopener">
              <img
                src="/assets/img/ionic-os-logo.png"
                alt="Ionic Open Source Logo" />
            </a>
            <p>
              Released under <span id="mit">MIT License</span> | Copyright @ {(new Date()).getFullYear()}
            </p>
          </div>

          <div class="footer-menu">
            <a href="cheatsheet.html">Cheatsheet</a>
            <a href="/v1">v1</a>
            <a href="/v2">v2</a>
            <a href="https://ionicframework.com/docs/v3/ionicons/">v3</a>
            <a href="/v4/">v4</a>
            <a href="https://ionicframework.com/">Ionic Framework</a>
          </div>
        </ResponsiveContainer>
      </footer>
    );
  }
}
