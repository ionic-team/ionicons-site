import { Component, h, Host } from "@stencil/core";
import { ResponsiveContainer } from "@ionic-internal/ionic-ds";

@Component({
  tag: "announcement-bar",
  styleUrl: "announcement-bar.scss",
})
export class AnnouncementBar {
  render() {
    const bgPath = '/ionicons/assets/img/components/announcement-bar/bg-ioniconf-2023.png';
    const imgPath = '/ionicons/assets/img/components/announcement-bar/img-ioniconf-2023.png';

    return (
      <Host class="announcement-bar">
        <img
          class="bg"
          src={bgPath}
          width="1800"
          height="72"
          alt="ioniconf background"
        />
        <a href="https://ionic.io/ioniconf" target="_blank" class="wrapper">
          <nav>
            <ResponsiveContainer>
              <img
                src={imgPath}
                width="199"
                height="46"
                alt="ioniconf logo"
              />
              <p>Join the community in Austin, TX. October 10-11, 2023.</p>
              <button>
                Get tickets today
              </button>
            </ResponsiveContainer>
          </nav>
        </a>
      </Host>
    );
  }
}
