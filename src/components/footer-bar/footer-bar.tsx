import { Component, h, Prop } from "@stencil/core";
import { ResponsiveContainer } from "@ionic-internal/sites-shared";

@Component({
  tag: "footer-bar",
  styleUrl: "footer-bar.scss",
})
export class FooterBar {
  @Prop() version: string;

  render() {
    const cheatsheetUrl = `https://unpkg.com/ionicons@${this.version}/dist/cheatsheet.html`;
    return (
      <footer>
        <ResponsiveContainer>
          <div class="footer__open-source">
            <a
              href="http://ionicframework.com/"
              title="IonicFramework.com"
              rel="noopener"
            >
              <img
                src="/ionicons/assets/img/ionic-os-logo.png"
                alt="Ionic Open Source Logo"
              />
            </a>
            <p>
              Released under <span id="mit">MIT License</span> | Copyright @{" "}
              {new Date().getFullYear()}
            </p>
          </div>

          <div class="footer-menu">
            <a href={cheatsheetUrl} target="_blank" rel="noopener noreferrer">
              Cheatsheet
            </a>
            <a
              href="https://github.com/ionic-team/ionicons/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              Release Notes
            </a>
            <a href="/ionicons/v1">v1</a>
            <a href="/ionicons/v2">v2</a>
            <a href="https://ionicframework.com/docs/v3/ionicons/">v3</a>
            <a href="/ionicons/v4">v4</a>
            <a href="https://ionicframework.com/">Ionic Framework</a>
          </div>
        </ResponsiveContainer>
      </footer>
    );
  }
}
