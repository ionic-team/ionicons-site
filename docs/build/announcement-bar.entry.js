import { r as registerInstance, h } from './index-93b10a2a.js';
import './_commonjsHelpers-8f072dc7.js';
import './index-ff62d206.js';
import './Button-36d57e33.js';
import { R as ResponsiveContainer } from './index-5421a3d1.js';
import { P as Prismic } from './prismic-javascript.min-e8451ed1.js';
import { P as PrismicDom } from './prismic-dom.min-c7c2ccaa.js';

const announcementBarCss = "@charset \"UTF-8\";announcement-bar{background:#F8FAFC;box-shadow:0 1px 0px 0 rgba(0, 20, 56, 0.06);position:relative;z-index:999;padding:6px 0 7px;text-align:center;color:#73849A}announcement-bar .container{position:relative;font-size:11px;line-height:1.8em;font-weight:400;letter-spacing:-0.01em;display:flex;flex-wrap:wrap;justify-content:center;align-content:center}announcement-bar .container:before,announcement-bar .container:after{display:none}announcement-bar p{display:inline;margin:4px 0 0;color:#73849A}announcement-bar strong{font-weight:600;color:#020814}announcement-bar a{background-color:var(--color-dodger-blue);color:#fff;border-radius:16px;margin-left:12px;padding:6px 8px 5px;font-weight:600;font-size:9px;line-height:1em;text-decoration:none;text-transform:uppercase;vertical-align:0;white-space:pre;letter-spacing:0.02em;transition:0.2s background-color, 0.2s box-shadow}announcement-bar a::after{font-family:\"Ionicons\";content:\"\";margin-left:3px}announcement-bar a:hover{background-color:--color-dodger-blue-light;box-shadow:0 1px 2px rgba(0, 0, 0, 0.1)}@media (max-width: 768px){announcement-bar{display:none}}.announcement-bar--studio{background-color:#0B0C10;background-image:url(\"https://ionicframework.com/img/products/studio/preheader-bg-2.png\");background-repeat:no-repeat;background-size:1224px 49px;background-position:center;color:#B2BECD;padding:10px 0 12px}.announcement-bar--studio .container{font-size:13px}.announcement-bar--studio .container>div{display:flex;align-items:center;justify-content:center}.announcement-bar--studio .container>div::before{display:block;content:\"\";background-image:url(\"https://ionicframework.com/img/products/studio/studio-logo.svg\");width:78px;height:21px;margin-right:24px}.announcement-bar--studio .container p{margin-bottom:0;color:#b2becd}.announcement-bar--studio a{font-size:11px;padding:10px;margin-left:24px}.announcement-bar--studio a:hover{background-color:#5290ff}";

const AnnouncementBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.apiURL = 'https://ionicframeworkcom.prismic.io/api/v2';
        this.getLatest();
    }
    async getLatest() {
        const api = await Prismic.getApi(this.apiURL);
        const single = await api.getSingle('ionicons_announcement_bar');
        // console.log(single)
        this.data = single.data;
    }
    render() {
        if (!this.data || Object.keys(this.data).length === 0)
            return;
        return (h("nav", { class: this.data.theme === 'Studio' ? 'announcement-bar--studio' : '' }, h(ResponsiveContainer, null, h("div", { innerHTML: PrismicDom.RichText.asHtml(this.data.text) }), h("a", { href: this.data.link.url, target: "_blank" }, this.data.button_text))));
    }
};
AnnouncementBar.style = announcementBarCss;

export { AnnouncementBar as announcement_bar };
