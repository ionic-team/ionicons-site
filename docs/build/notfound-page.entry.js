import { r as registerInstance, h } from './core-2191ed9d.js';

const NotFoundPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("main", null, h("div", { class: "container" }, h("h1", null, "Woops! We can't find the page your looking for."), h("p", null, "Head on back to the ", h("stencil-route-link", { url: "/", class: "block" }, "Icons page"), ".")), h("footer-bar", null)));
    }
    static get style() { return "notfound-page {\n  text-align: center;\n  height: 100%;\n}\nnotfound-page h1 {\n  max-width: 500px;\n}\nnotfound-page a {\n  font-weight: 600;\n}"; }
};

export { NotFoundPage as notfound_page };
