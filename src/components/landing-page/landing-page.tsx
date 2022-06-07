import { Component, Element, Prop, h } from "@stencil/core";
import { ResponsiveContainer } from "@ionic-internal/ionic-ds";

@Component({
  tag: "landing-page",
  styleUrl: "landing-page.scss",
})
export class LandingPage {
  @Element() el!: Element;

  @Prop() query = "";
  @Prop() data: any;

  render() {
    return (
      <main>
        <div class="wrapper">
          <ResponsiveContainer>
            <div class="content">
              <h1>Open source icons.<br /><span>Lovingly hand-crafted.</span></h1>
              <p class="lead">Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG. Completely open source, MIT licensed and built by <a href="https://ionic.io">Ionic</a>.</p>
            </div>
          </ResponsiveContainer>
          <icon-list query={this.query} data={this.data}></icon-list>
        </div>

        <footer-bar version={this.data.version}></footer-bar>
      </main>
    );
  }
}
