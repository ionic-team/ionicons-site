import { r as registerInstance, h } from './index-8a519d96.js';

const notfoundPageCss = "notfound-page{text-align:center;height:100%}notfound-page h1{max-width:500px}notfound-page a{font-weight:600}";

class NotFoundPage {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("main", null, h("div", { class: "container" }, h("h1", null, "Woops! We can't find the page your looking for."), h("p", null, "Head on back to the ", h("stencil-route-link", { url: "/", class: "block" }, "Icons page"), ".")), h("footer-bar", null)));
    }
}
NotFoundPage.style = notfoundPageCss;

export { NotFoundPage as notfound_page };
