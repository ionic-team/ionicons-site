import { r as registerInstance, e as createEvent, h, c as getElement } from './core-2191ed9d.js';

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
        return (h("header", { class: `${this.isSearchVisible ? 'visible-search' : ''} ${this.isSticky ? 'overlay' : ''}` }, h("div", { class: "container" }, h("div", { class: "logo" }, h("stencil-route-link", { url: "/", exact: true }, h("svg", { width: "32px", height: "32px", viewBox: "0 0 32 32" }, h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, h("g", { id: "icon", "fill-rule": "nonzero" }, h("circle", { id: "circle", fill: "#EAEEF5", cx: "16", cy: "16", r: "16" }), h("circle", { id: "circle_copy", fill: "#B4C1D8", cx: "16", cy: "16", r: "11" }), h("circle", { id: "circle_copy_2", fill: "#647AA1", cx: "16", cy: "16", r: "6" }), h("circle", { id: "circle_copy_3", fill: "#647AA1", cx: "23.5", cy: "8.5", r: "2" })))), "Ionicons"), h("span", { class: "version" }, this.version)), h("icon-search", { query: this.query, size: "small" }), h("nav", null, h("stencil-route-link", { class: "nav__item", url: "/", exact: true, onClick: this.hideNav.bind(this) }, "Icons"), h("stencil-route-link", { class: "nav__item", url: "/usage", onClick: () => {
                this.toggleHeaderSearch.emit('hide');
                this.hideNav();
            } }, "Usage"), h("a", { class: "nav__item", href: "https://github.com/ionic-team/ionicons" }, "GitHub", h("svg", { width: "12px", height: "12px", viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, h("g", { transform: "translate(0,1)" }, h("rect", { id: "bg", fill: "#e3e8f1", x: "0", y: "2", width: "9", height: "9", rx: "1.5" }), h("path", { d: "M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z", id: "arrow", fill: "#A4AEC3" })))), h("span", { class: "close", onClick: this.hideNav.bind(this) }, h("i", { class: "ion ion-md-close" }))), h("a", { class: "btn sm-hide download-link", href: "/ionicons.designerpack.zip", download: `ionicons-${this.version}.designerpack.zip` }, h("svg", { width: "9px", height: "11px", viewBox: "0 0 9 11", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, h("g", null, h("rect", { id: "bg", fill: "#BAC3D1", x: "0", y: "9", width: "9", height: "2", rx: "1" }), h("path", { d: "M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z", id: "arrow", fill: "#94A0B8" }))), "Designer pack"), h("span", { class: "more", onClick: this.showNav.bind(this) }, h("i", { class: "ion ion-md-more" })))));
    }
    get el() { return getElement(this); }
    static get style() { return "header-bar header {\n  -webkit-transition: border 0.6s;\n  transition: border 0.6s;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  z-index: 999;\n  border-bottom: 1px solid transparent;\n  height: 64px;\n}\nheader-bar header.overlay {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\nheader-bar .container,\nheader-bar .logo,\nheader-bar .logo a,\nheader-bar nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\nheader-bar .logo,\nheader-bar nav {\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n}\nheader-bar nav {\n  -ms-flex-align: baseline;\n  align-items: baseline;\n}\nheader-bar icon-search {\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n  -ms-flex: 1;\n  flex: 1;\n  padding-left: 60px;\n  padding-right: 60px;\n  opacity: 0;\n  pointer-events: none;\n}\nheader-bar .visible-search icon-search {\n  opacity: 1;\n  pointer-events: auto;\n}\nheader-bar .container {\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\nheader-bar .logo a {\n  font-weight: 700;\n  font-size: 16px;\n  color: var(--color-shark);\n}\nheader-bar .logo svg {\n  margin-right: 10px;\n}\nheader-bar .logo .version {\n  margin-left: 10px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--color-oslo-gray);\n  background-color: var(--color-catskill-white);\n  border-radius: 4px;\n  padding: 1px 5px;\n  position: relative;\n  top: -2px;\n}\nheader-bar a {\n  text-decoration: none;\n}\nheader-bar nav + .btn,\nheader-bar .nav__item + .nav__item {\n  margin-left: 30px;\n}\nheader-bar .nav__item {\n  font-size: 13px;\n  font-weight: 600;\n}\nheader-bar .nav__item,\nheader-bar .nav__item a {\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n  color: var(--color-pale-sky);\n}\nheader-bar .nav__item:hover,\nheader-bar .nav__item a:not(.link-active):hover {\n  color: var(--color-shark);\n}\nheader-bar .nav__item .link-active {\n  color: var(--color-heather);\n  cursor: default;\n}\nheader-bar .nav__item svg {\n  margin-left: 6px;\n}\nheader-bar .nav__item svg #arrow {\n  -webkit-transition: 0.2s -webkit-transform;\n  transition: 0.2s -webkit-transform;\n  transition: 0.2s transform;\n  transition: 0.2s transform, 0.2s -webkit-transform;\n}\nheader-bar .nav__item:hover svg #arrow {\n  -webkit-transform: translate(1px, -1px);\n  transform: translate(1px, -1px);\n}\nheader-bar .btn svg {\n  margin-right: 6px;\n}\nheader-bar .btn:hover svg #arrow {\n  -webkit-transform: translate(0, 1px);\n  transform: translate(0, 1px);\n}\nheader-bar .more {\n  padding: 0 8px;\n  font-size: 28px;\n  line-height: 28px;\n  color: var(--color-dodger-blue);\n  cursor: pointer;\n  display: none;\n}\nheader-bar nav span.close {\n  display: none;\n  font-size: 28px;\n}\n\@media screen and (max-width: 992px) {\n  header-bar nav > * + * {\n    margin-left: 18px;\n  }\n  header-bar icon-search {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n\@media screen and (max-width: 768px) {\n  header-bar .btn.sm-hide {\n    display: none;\n  }\n  header-bar .more,\nheader-bar .close {\n    cursor: pointer;\n  }\n  header-bar .more {\n    display: block;\n  }\n  header-bar nav + .btn,\nheader-bar .nav__item + .nav__item {\n    margin-left: 0;\n    margin-top: 30px;\n  }\n  header-bar nav {\n    -webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 99999;\n    background-image: linear-gradient(-223deg, #363E49 0%, #1C1E21 100%);\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-align: center;\n    align-items: center;\n    opacity: 0;\n    display: none;\n  }\n  header-bar nav .close {\n    margin: 0;\n    position: absolute;\n    top: 14px;\n    right: 18px;\n    color: #fff;\n    cursor: pointer;\n  }\n  header-bar .nav__item {\n    -webkit-transition: -webkit-transform 0.4s;\n    transition: -webkit-transform 0.4s;\n    transition: transform 0.4s;\n    transition: transform 0.4s, -webkit-transform 0.4s;\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n  header-bar .nav__item,\nheader-bar .nav__item a {\n    font-size: 28px;\n    color: rgba(255, 255, 255, 0.9);\n  }\n  header-bar .nav__item .link-active {\n    color: rgba(255, 255, 255, 0.3);\n  }\n  header-bar .nav__item:hover,\nheader-bar .nav__item a:not(.link-active):hover {\n    color: rgba(255, 255, 255, 0.9);\n  }\n  header-bar .nav__item svg #bg {\n    opacity: 0.2;\n  }\n  header-bar nav.show-mobile-menu {\n    opacity: 1;\n  }\n  header-bar nav.show-mobile-menu .nav__item {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  header-bar nav.show-mobile-menu .close {\n    display: block;\n  }\n  header-bar icon-search {\n    padding-left: 20px;\n    padding-right: 15px;\n  }\n}\n\@media screen and (max-width: 520px) {\n  header-bar .version {\n    display: none;\n  }\n}"; }
};

export { HeaderBar as header_bar };
