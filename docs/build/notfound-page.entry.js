import { r as registerInstance, h } from './index-b94df3cd.js';
import './_commonjsHelpers-23c0f84c.js';
import './index-1b23b0a5.js';
import './Button-5903c6ca.js';
import { R as ResponsiveContainer } from './index-f9c24548.js';

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
