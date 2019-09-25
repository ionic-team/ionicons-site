import { r as registerInstance, h, c as getElement } from './core-2191ed9d.js';

const LandingPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.query = '';
    }
    render() {
        return (h("main", null, h("div", { class: "wrapper" }, h("div", { class: "container" }, h("div", { class: "content" }, h("h1", null, "Beautifully crafted open source icons"), h("p", { class: "lead" }, "Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG and web font. Completely open source, MIT licensed and built by the ", h("a", { href: "https://ionicframework.com/" }, "Ionic Framework"), " team."))), h("icon-list", { query: this.query, data: this.data })), h("footer-bar", null)));
    }
    get el() { return getElement(this); }
    static get style() { return "landing-page {\n  height: 100%;\n}\nlanding-page h1,\nlanding-page .lead {\n  text-align: center;\n}\nlanding-page .lead {\n  margin-bottom: 40px;\n}"; }
};

export { LandingPage as landing_page };
