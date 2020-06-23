import { r as registerInstance, h, g as getElement } from './index-8a519d96.js';

const landingPageCss = "landing-page{height:100%}landing-page h1,landing-page .lead{text-align:center}landing-page .lead{margin-bottom:40px}";

class LandingPage {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.query = '';
    }
    render() {
        return (h("main", null, h("div", { class: "wrapper" }, h("div", { class: "container" }, h("div", { class: "content" }, h("h1", null, "Beautifully crafted open source icons"), h("p", { class: "lead" }, "Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG and web font. Completely open source, MIT licensed and built by the ", h("a", { href: "https://ionicframework.com/" }, "Ionic Framework"), " team."))), h("icon-list", { query: this.query, data: this.data })), h("footer-bar", null)));
    }
    get el() { return getElement(this); }
}
LandingPage.style = landingPageCss;

export { LandingPage as landing_page };
