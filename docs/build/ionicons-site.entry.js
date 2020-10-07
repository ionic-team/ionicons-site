import { r as registerInstance, h } from './index-b94df3cd.js';

const ioniconsSiteCss = "stencil-router>div{height:100%}";

const IoniconsSite = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.data = {
            version: undefined,
            icons: []
        };
        this.query = '';
        this.isHeaderSearchVisible = false;
    }
    handleScroll() {
        requestAnimationFrame(this.checkScroll.bind(this));
    }
    searchHandler(event) {
        this.query = event.detail;
    }
    toggleHandler(event) {
        this.isHeaderSearchVisible = (event.detail === 'show') ? true : false;
    }
    componentWillLoad() {
        return this.loadData();
    }
    async loadData() {
        const res = await fetch('/ionicons.json');
        const json = await res.json();
        this.data = json;
        let dat = [];
        json.icons.forEach((icon) => {
            if (!icon.name.includes('-outline') && !icon.name.includes('-sharp') && !dat.find((o) => o.name === icon.name)) {
                dat.push({
                    name: icon.name,
                    icons: [icon.name],
                    tags: icon.tags
                });
            }
        });
        insertVariants('-outline');
        insertVariants('-sharp');
        function insertVariants(variantSuffix) {
            json.icons.forEach((icon) => {
                if (icon.name.includes('logo-'))
                    return;
                if (icon.name.includes(variantSuffix)) {
                    const baseName = icon.name.replace(variantSuffix, '');
                    const datIndex = dat.findIndex((icon => icon.name === baseName));
                    if (datIndex < 0)
                        return;
                    dat[datIndex].icons.push(icon.name);
                }
            });
        }
        this.data.icons = dat;
    }
    checkScroll() {
        // show/hide header searchbar
        const headerSearchEl = document.querySelector('header .search-input');
        const bodySearchEl = document.querySelector('icon-list .search-input');
        if (!bodySearchEl || !headerSearchEl) {
            return;
        }
        const headerInput = headerSearchEl.querySelector('input');
        const bodyInput = bodySearchEl.querySelector('input');
        if (bodySearchEl.getBoundingClientRect().top < (bodySearchEl.scrollHeight / 2)) {
            if (this.isHeaderSearchVisible)
                return;
            this.isHeaderSearchVisible = true;
            if (bodyInput === document.activeElement)
                headerInput.focus();
        }
        else {
            if (!this.isHeaderSearchVisible)
                return;
            this.isHeaderSearchVisible = false;
            if (headerInput === document.activeElement)
                bodyInput.focus();
        }
    }
    render() {
        return (h("site-root", null, h("site-platform-bar", { productName: "Ionicons" }), h("header-bar", { version: this.data.version, query: this.query, isSearchVisible: this.isHeaderSearchVisible }), h("stencil-router", null, h("stencil-router-scroll-top", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "landing-page", exact: true, componentProps: { 'query': this.query, 'data': this.data } }), h("stencil-route", { url: "/usage", component: "usage-page", componentProps: { 'data': this.data } }), h("stencil-route", { component: "notfound-page" }))))));
    }
};
IoniconsSite.style = ioniconsSiteCss;

export { IoniconsSite as ionicons_site };
