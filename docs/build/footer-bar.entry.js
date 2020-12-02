import { r as registerInstance, h } from './index-b94df3cd.js';
import './_commonjsHelpers-23c0f84c.js';
import './index-1b23b0a5.js';
import './Button-5903c6ca.js';
import { R as ResponsiveContainer } from './index-f9c24548.js';

const footerBarCss = "footer-bar footer{width:100%;background:var(--color-white-lilac);flex:0 0 8em;}footer-bar .ui-container{display:flex;justify-content:space-between;align-items:center;padding-top:40px;padding-bottom:40px}footer-bar img{width:50%}footer-bar p{margin-top:0;margin-bottom:0;color:var(--color-cadet-blue);font-size:10px;letter-spacing:0}footer-bar .footer-menu a{transition:color 0.3s;font-size:11px;font-weight:600;text-decoration:none;color:var(--color-gull-gray)}footer-bar .footer-menu a:hover{color:var(--color-shark)}footer-bar .footer-menu a+a{margin-left:18px}@media screen and (max-width: 768px){footer-bar .ui-container{flex-direction:column-reverse;text-align:center}footer-bar .footer-menu{margin-bottom:36px}}";

const FooterBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const cheatsheetUrl = `https://unpkg.com/ionicons@${this.version}/dist/cheatsheet.html`;
        return (h("footer", null, h(ResponsiveContainer, null, h("div", { class: "footer__open-source" }, h("a", { href: "http://ionicframework.com/", title: "IonicFramework.com", rel: "noopener" }, h("img", { src: "/assets/img/ionic-os-logo.png", alt: "Ionic Open Source Logo" })), h("p", null, "Released under ", h("span", { id: "mit" }, "MIT License"), " | Copyright @", " ", new Date().getFullYear())), h("div", { class: "footer-menu" }, h("a", { href: cheatsheetUrl, target: "_blank", rel: "noopener noreferrer" }, "Cheatsheet"), h("a", { href: "https://github.com/ionic-team/ionicons/releases", target: "_blank", rel: "noopener noreferrer" }, "Release Notes"), h("a", { href: "/v1" }, "v1"), h("a", { href: "/v2" }, "v2"), h("a", { href: "https://ionicframework.com/docs/v3/ionicons/" }, "v3"), h("a", { href: "/v4/" }, "v4"), h("a", { href: "https://ionicframework.com/" }, "Ionic Framework")))));
    }
};
FooterBar.style = footerBarCss;

export { FooterBar as footer_bar };
