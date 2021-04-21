import { r as registerInstance, h, i as getElement } from './index-93b10a2a.js';
import './_commonjsHelpers-8f072dc7.js';
import './index-ff62d206.js';
import './Button-36d57e33.js';
import { R as ResponsiveContainer } from './index-5421a3d1.js';

const landingPageCss = "landing-page{height:100%}landing-page h1,landing-page .lead{text-align:center;max-width:540px;margin-left:auto;margin-right:auto}landing-page h1 span{color:var(--c-carbon-50)}landing-page .lead{margin-bottom:40px}";

const LandingPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.query = "";
    }
    render() {
        return (h("main", null, h("div", { class: "wrapper" }, h(ResponsiveContainer, null, h("div", { class: "content" }, h("h1", null, "Open source icons.", h("br", null), h("span", null, "Lovingly hand-crafted.")), h("p", { class: "lead" }, "Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG and web font. Completely open source, MIT licensed and built by ", h("a", { href: "https://ionic.io" }, "Ionic"), "."))), h("icon-list", { query: this.query, data: this.data })), h("footer-bar", { version: this.data.version })));
    }
    get el() { return getElement(this); }
};
LandingPage.style = landingPageCss;

export { LandingPage as landing_page };
