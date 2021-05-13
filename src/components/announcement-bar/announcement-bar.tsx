import { Component, State, h, Build, Host } from "@stencil/core";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import { ResponsiveContainer } from "@ionic-internal/ionic-ds";
import { slugify } from "../../global/common";

@Component({
  tag: "announcement-bar",
  styleUrl: "announcement-bar.scss",
})
export class AnnouncementBar {
  apiURL = "https://ionicframeworkcom.prismic.io/api/v2";

  @State() data: any;

  componentWillLoad() {
    Build.isBrowser && this.getLatest();
  }

  async getLatest() {
    const api = await Prismic.getApi(this.apiURL);
    const single = await api.getSingle("announcement_bar");
    this.data = single.data;
  }

  render() {
    const theme = slugify(this.data?.theme);
    const assetPath = `/ionicons/assets/img/components/announcement-bar/bg-${theme}.png`;

    return (
      <Host
        class="announcement-bar"
        style={{
          "--asset-path": `url('${assetPath}')`,
        }}
      >
        <a href={this.data?.link.url} target="_blank" class="wrapper">
          <nav>
            {this.data && (
              <ResponsiveContainer>
                <div innerHTML={PrismicDOM.RichText.asHtml(this.data.text)} />
                <a href={this.data.link.url} target="_blank" class="button">
                  {this.data.button_text}{" "}
                  <span style={{ letterSpacing: "0" }}>-&gt;</span>
                </a>
              </ResponsiveContainer>
            )}
          </nav>
        </a>
      </Host>
    );
  }
}
