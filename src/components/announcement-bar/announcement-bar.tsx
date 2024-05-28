import { Component, h, Host } from "@stencil/core";
// import Prismic from "prismic-javascript";
// import PrismicDOM from "prismic-dom";
import { ResponsiveContainer } from "@ionic-internal/ionic-ds";
// import { slugify } from "../../global/common";

@Component({
  tag: "announcement-bar",
  styleUrl: "announcement-bar.scss",
})
export class AnnouncementBar {
  apiURL = "https://ionicframeworkcom.prismic.io/api/v2";

  // @State() data: any;

  // componentWillLoad() {
  //   Build.isBrowser && this.getLatest();
  // }

  // async getLatest() {
  //   const api = await Prismic.getApi(this.apiURL);
  //   const single = await api.getSingle("announcement_bar");
  //   this.data = single.data;
  // }

  render() {
    // const theme = slugify(this.data?.theme);
    // const assetPath = `/ionicons/assets/img/components/announcement-bar/bg-${theme}.png`;

    return (
      <Host
        class="announcement-bar"
        // style={{
        //   "--asset-path": `url('${assetPath}')`,
        // }}
      >
        <a
          href="https://www.outsystems.com/?utm_source=ionic&utm_medium=referral&utm_campaign=ionic-referral&utm_term=none&utm_content=other&utm_campaignteam=digital-mktg&utm_partner=none"
          target="_blank"
          rel="noopener"
          class="wrapper"
        >
          <nav>
            <ResponsiveContainer>
              {/* {this.data.left_image.url && (
                  <img
                    src={this.data.left_image.url}
                    width={this.data.left_image.dimensions.width / 2}
                    height={this.data.left_image.dimensions.height / 2}
                    alt={this.data.left_image.alt}
                  />
                )} */}
              <p>
                An <strong>OutSystems</strong> Company →
              </p>
              {/* <button>
                  {this.data.button_text}{" "}
                  <span style={{ letterSpacing: "0" }}>-&gt;</span>
                </button> */}
            </ResponsiveContainer>
          </nav>
        </a>
      </Host>
    );
  }
}
