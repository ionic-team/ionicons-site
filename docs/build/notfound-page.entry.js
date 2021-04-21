import { r as registerInstance, h } from './index-93b10a2a.js';
import './_commonjsHelpers-8f072dc7.js';
import './index-ff62d206.js';
import './Button-36d57e33.js';
import { R as ResponsiveContainer } from './index-5421a3d1.js';

const notfoundPageCss = "notfound-page{text-align:center;height:100%}notfound-page h1{max-width:500px}notfound-page a{font-weight:600}";

const NotFoundPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("main", null, h(ResponsiveContainer, null, h("h1", null, "Woops! We can't find the page your looking for."), h("p", null, "Head on back to the ", h("stencil-route-link", { url: "/", class: "block" }, "Icons page"), ".")), h("footer-bar", null)));
    }
};
NotFoundPage.style = notfoundPageCss;

export { NotFoundPage as notfound_page };
