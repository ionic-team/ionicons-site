import { r as registerInstance, h, i as getElement } from './index-b94df3cd.js';
import './_commonjsHelpers-23c0f84c.js';
import './index-1b23b0a5.js';
import './Button-5903c6ca.js';
import { R as ResponsiveContainer } from './index-f9c24548.js';

const landingPageCss = "landing-page{height:100%}landing-page h1,landing-page .lead{text-align:center}landing-page .lead{margin-bottom:40px}";

const LandingPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.query = "";
    }
    render() {
        return (h("main", null, h("div", { class: "wrapper" }, h(ResponsiveContainer, null, h("div", { class: "content" }, h("h1", null, "Beautifully crafted open source icons"), h("p", { class: "lead" }, "Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG and web font. Completely open source, MIT licensed and built by the", " ", h("a", { href: "https://ionicframework.com/" }, "Ionic Framework"), " team."))), h("icon-list", { query: this.query, data: this.data })), h("footer-bar", { version: this.data.version })));
    }
    get el() { return getElement(this); }
};
LandingPage.style = landingPageCss;

export { LandingPage as landing_page };
