import { r as registerInstance, k as createEvent, h, i as getElement } from './index-b94df3cd.js';
import './_commonjsHelpers-23c0f84c.js';
import './index-1b23b0a5.js';
import './Button-5903c6ca.js';
import { R as ResponsiveContainer } from './index-f9c24548.js';

const headerBarCss = "header-bar{display:block;position:sticky;z-index:999;top:0}header-bar header{transition:border 0.6s;width:100%;left:0;right:0;background:#fff;border-bottom:1px solid transparent;height:64px}header-bar header.overlay{border-bottom:1px solid rgba(0, 0, 0, 0.05)}header-bar .ui-container,header-bar .logo,header-bar .logo a,header-bar nav{display:flex;align-items:center}header-bar .logo,header-bar nav{flex:0 0 auto}header-bar nav{align-items:baseline}header-bar icon-search{transition:opacity 0.5s;flex:1;padding-left:60px;padding-right:60px;opacity:0;pointer-events:none}header-bar .visible-search icon-search{opacity:1;pointer-events:auto}header-bar .ui-container{justify-content:space-between;padding-top:12px;padding-bottom:12px}header-bar .logo a{font-weight:700;font-size:16px;color:var(--color-shark)}header-bar .logo svg{margin-right:10px}header-bar .logo .version{margin-left:10px;font-size:10px;font-weight:600;color:var(--color-oslo-gray);background-color:var(--color-catskill-white);border-radius:4px;padding:1px 5px;position:relative;top:-2px}header-bar a{text-decoration:none}header-bar nav+.btn,header-bar .nav__item+.nav__item{margin-left:30px}header-bar .nav__item{font-size:13px;font-weight:600}header-bar .nav__item,header-bar .nav__item a{transition:color 0.3s;color:var(--color-pale-sky)}header-bar .nav__item:hover,header-bar .nav__item a:not(.link-active):hover{color:var(--color-shark)}header-bar .nav__item .link-active{color:var(--color-heather);cursor:default}header-bar .nav__item svg{margin-left:6px}header-bar .nav__item svg #arrow{transition:0.2s transform}header-bar .nav__item:hover svg #arrow{transform:translate(1px, -1px)}header-bar .btn svg{margin-right:6px}header-bar .btn:hover svg #arrow{transform:translate(0, 1px)}header-bar .more{padding:0 8px;font-size:28px;line-height:28px;color:var(--color-dodger-blue);cursor:pointer;display:none}header-bar nav span.close{display:none;font-size:28px}@media screen and (max-width: 992px){header-bar nav>*+*{margin-left:18px}header-bar icon-search{padding-left:30px;padding-right:30px}}@media screen and (max-width: 768px){header-bar .btn.sm-hide{display:none}header-bar .more,header-bar .close{cursor:pointer}header-bar .more{display:block}header-bar nav+.btn,header-bar .nav__item+.nav__item{margin-left:0;margin-top:30px}header-bar nav{transition:opacity 0.3s;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:99999;background-image:linear-gradient(-223deg, #363E49 0%, #1C1E21 100%);display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0;display:none}header-bar nav .close{margin:0;position:absolute;top:14px;right:18px;color:#fff;cursor:pointer}header-bar .nav__item{transition:transform 0.4s;transform:translateY(8px)}header-bar .nav__item,header-bar .nav__item a{font-size:28px;color:rgba(255, 255, 255, 0.9)}header-bar .nav__item .link-active{color:rgba(255, 255, 255, 0.3)}header-bar .nav__item:hover,header-bar .nav__item a:not(.link-active):hover{color:rgba(255, 255, 255, 0.9)}header-bar .nav__item svg #bg{opacity:0.2}header-bar nav.show-mobile-menu{opacity:1}header-bar nav.show-mobile-menu .nav__item{transform:translateY(0)}header-bar nav.show-mobile-menu .close{display:block}header-bar icon-search{padding-left:20px;padding-right:15px}}@media screen and (max-width: 520px){header-bar .version{display:none}}";

const HeaderBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isSticky = false;
        this.query = '';
        this.isSearchVisible = false;
        this.toggleHeaderSearch = createEvent(this, "toggleHeaderSearch", 7);
    }
    handleScroll() {
        requestAnimationFrame(this.checkScroll.bind(this));
    }
    handleResize() {
        requestAnimationFrame(() => {
            if (window.innerWidth > 768) {
                const menu = this.el.querySelector('nav');
                menu.style.display = '';
                this.el.classList.remove('show-mobile-menu');
                document.body.classList.remove('no-scroll');
                this.isMobileMenuShown = false;
            }
        });
    }
    checkScroll() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        this.isSticky = (scrollTop > 30);
    }
    showNav() {
        if (this.isMobileMenuShown)
            return;
        this.isMobileMenuShown = true;
        const menu = this.el.querySelector('nav');
        menu.style.display = 'flex';
        setTimeout(() => {
            menu.classList.add('show-mobile-menu');
            document.body.classList.add('no-scroll');
        }, 1);
    }
    hideNav() {
        if (!this.isMobileMenuShown)
            return;
        this.isMobileMenuShown = false;
        const menu = this.el.querySelector('nav');
        menu.classList.remove('show-mobile-menu');
        setTimeout(() => {
            menu.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 300);
    }
    render() {
        return (h("header", { class: `${this.isSearchVisible ? 'visible-search' : ''} ${this.isSticky ? 'overlay' : ''}` }, h(ResponsiveContainer, null, h("div", { class: "logo" }, h("stencil-route-link", { url: "/", exact: true }, h("svg", { width: "32px", height: "32px", viewBox: "0 0 32 32" }, h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, h("g", { id: "icon", "fill-rule": "nonzero" }, h("circle", { id: "circle", fill: "#EAEEF5", cx: "16", cy: "16", r: "16" }), h("circle", { id: "circle_copy", fill: "#B4C1D8", cx: "16", cy: "16", r: "11" }), h("circle", { id: "circle_copy_2", fill: "#647AA1", cx: "16", cy: "16", r: "6" }), h("circle", { id: "circle_copy_3", fill: "#647AA1", cx: "23.5", cy: "8.5", r: "2" })))), "Ionicons"), h("span", { class: "version" }, this.version)), h("icon-search", { query: this.query, size: "small" }), h("nav", null, h("stencil-route-link", { class: "nav__item", url: "/", exact: true, onClick: this.hideNav.bind(this) }, "Icons"), h("stencil-route-link", { class: "nav__item", url: "/usage", onClick: () => {
                this.toggleHeaderSearch.emit('hide');
                this.hideNav();
            } }, "Usage"), h("a", { class: "nav__item", href: "https://github.com/ionic-team/ionicons" }, "GitHub", h("svg", { width: "12px", height: "12px", viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, h("g", { transform: "translate(0,1)" }, h("rect", { id: "bg", fill: "#e3e8f1", x: "0", y: "2", width: "9", height: "9", rx: "1.5" }), h("path", { d: "M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z", id: "arrow", fill: "#A4AEC3" })))), h("span", { class: "close", onClick: this.hideNav.bind(this) }, h("i", { class: "ion ion-md-close" }))), h("a", { class: "btn sm-hide download-link", href: "/ionicons.designerpack.zip", download: `ionicons-${this.version}.designerpack.zip` }, h("svg", { width: "9px", height: "11px", viewBox: "0 0 9 11", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, h("g", null, h("rect", { id: "bg", fill: "#BAC3D1", x: "0", y: "9", width: "9", height: "2", rx: "1" }), h("path", { d: "M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z", id: "arrow", fill: "#94A0B8" }))), "Designer pack"), h("span", { class: "more", onClick: this.showNav.bind(this) }, h("i", { class: "ion ion-md-more" })))));
    }
    get el() { return getElement(this); }
};
HeaderBar.style = headerBarCss;

export { HeaderBar as header_bar };
