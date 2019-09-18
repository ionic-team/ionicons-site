import { r as registerInstance, h } from './core-2191ed9d.js';

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
        const res = await fetch('/data.json');
        const json = await res.json();
        this.data = json;
        this.data.icons = json.icons.map((o) => {
            o.icons = o.icons.reverse();
            o.name = o.icons[0].split('-').slice(1).join('-');
            return o;
        });
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
        return [
            h("header-bar", { version: this.data.version, query: this.query, isSearchVisible: this.isHeaderSearchVisible }),
            h("stencil-router", null, h("stencil-router-scroll-top", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "landing-page", exact: true, componentProps: { 'query': this.query, 'data': this.data } }), h("stencil-route", { url: "/usage", component: "usage-page", componentProps: { 'data': this.data } }), h("stencil-route", { component: "notfound-page" }))))
        ];
    }
    static get style() { return "stencil-router > div {\n  height: 100%;\n}"; }
};

export { IoniconsSite as ionicons_site };
