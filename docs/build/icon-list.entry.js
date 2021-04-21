import { r as registerInstance, h, i as getElement } from './index-93b10a2a.js';

const iconListCss = "icon-list .icon-list{margin-bottom:100px}icon-list .icon-list__search+.icon-list__wrapper{padding-top:90px}icon-list .icon-list__header-bar{transition:box-shadow 0.6s;margin-bottom:14px;height:52px;background-color:#fff;box-shadow:0;z-index:99}icon-list .icon-list__header-bar.sticky{position:sticky;top:58px;box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.06)}icon-list .icon-list__header-bar .container--small{display:flex;justify-content:space-between}icon-list .icon-list__header-bar h4{margin-top:21px;margin-bottom:0}icon-list .icon-results{display:grid;grid-template-columns:repeat(auto-fill, minmax(70px, 1fr));grid-auto-rows:minmax(70px, auto);grid-gap:0.5em;padding-bottom:60px;margin-left:-20px;margin-right:-20px}icon-list .icon-results__cell,icon-list .icon-results .ion{display:inline-flex;align-items:center;justify-content:center}icon-list .icon-results__cell{transition:background-color 0.4s;cursor:pointer;border-radius:8px;border:2px solid transparent;box-sizing:border-box;-webkit-tap-highlight-color:rgba(236, 240, 246, 0.4)}icon-list .icon-results__cell svg{width:32px;height:32px;color:#373737}icon-list .icon-results__cell:not(.active).mouseOver{animation-name:shadowIn;animation-duration:0.3s;animation-fill-mode:forwards}@keyframes shadowIn{from{box-shadow:0}to{box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}}icon-list .icon-results__cell:not(.active).mouseOff,icon-list .icon-results__cell.active{animation-name:shadowOut;animation-duration:0.6s;animation-fill-mode:forwards}icon-list .icon-results__cell.active{animation-duration:0.3s}@keyframes shadowOut{from{box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}to{box-shadow:0}}icon-list .icon-results__cell.active{background-color:var(--color-catskill-white);cursor:default}icon-list .icon-results--empty{text-align:center;padding-top:70px}icon-list .icon-results--empty h2{margin-top:0}icon-list .toggle{list-style-type:none;display:flex;margin-right:-4px;position:relative;bottom:-3px;margin-top:18px}icon-list .toggle__item{transition:opacity 0.3s, padding-bottom 0.1s;opacity:0.5;text-decoration:none;font-size:13px;font-weight:600;color:var(--color-dodger-blue);border-bottom:2px solid transparent}icon-list .toggle__item:not(.active){cursor:pointer}icon-list .toggle__item:hover,icon-list .toggle__item.active{opacity:1}icon-list .toggle__item.active{border-bottom:2px solid var(--color-dodger-blue);padding-bottom:2px}icon-list .toggle__item+.toggle__item{margin-left:20px}icon-list .icon-list__header-bar.sticky .toggle__item{padding-bottom:11px}@media screen and (max-width: 768px){icon-list .icon-results{margin-left:0;margin-right:0}icon-list .icon-list__search+.icon-list__wrapper{padding-top:40px}}@media screen and (max-width: 560px){icon-list .icon-results__cell:not(.active).mouseOver,icon-list .icon-results__cell:not(.active).mouseOff,icon-list .icon-results__cell.active{animation-name:none;box-shadow:0}}";

const LandingPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectedIcon = '';
        this.selectedIconType = 'outline';
        this.isHeaderSearchVisible = false;
        this.query = '';
    }
    escListener(ev) {
        if (ev.code === 'Escape' && this.selectedIcon.length)
            this.selectedIcon = '';
    }
    handleBodyClicked() {
        if (this.selectedIcon.length)
            this.selectedIcon = '';
    }
    handleClearToast() {
        this.selectedIcon = '';
    }
    handleScroll() {
        requestAnimationFrame(this.checkScroll.bind(this));
    }
    checkScroll() {
        const headerBars = this.el.querySelectorAll('.icon-list__header-bar');
        for (let i = 0; i < headerBars.length; i++) {
            const bar = headerBars[i];
            if (bar.getBoundingClientRect().top < 67) {
                bar.classList.add('sticky');
            }
            else {
                bar.classList.remove('sticky');
            }
        }
    }
    filterIcons() {
        const search = this.query.trim().toLowerCase();
        const results = {
            icon: [],
            logo: []
        };
        this.data.icons.forEach((iconData) => {
            if (search === '' || iconData.tags.some((t) => t.indexOf(search) > -1)) {
                const iconType = iconData.name.substr(0, iconData.name.indexOf('-'));
                switch (iconType) {
                    case 'logo':
                        results['logo'].push({ name: iconData.name });
                        break;
                    default:
                        results['icon'].push({ name: iconData.name });
                        return;
                }
            }
        });
        return results;
    }
    handleIconMouseEnter(ev) {
        ev.target.classList.remove('mouseOff');
        ev.target.classList.add('mouseOver');
    }
    handleIconMouseLeave(ev) {
        ev.target.classList.remove('mouseOver');
        ev.target.classList.add('mouseOff');
    }
    handleIconClick(ev, name) {
        ev.stopPropagation();
        this.selectedIcon = name;
    }
    handleToggleClick(ev, type) {
        ev.stopPropagation();
        this.selectedIconType = type;
    }
    render() {
        const results = this.filterIcons();
        const selectedIcon = this.data.icons.find(o => o.name === this.selectedIcon);
        let typeSuffix;
        switch (this.selectedIconType) {
            case 'outline':
                typeSuffix = '-outline';
                break;
            case 'sharp':
                typeSuffix = '-sharp';
                break;
            default:
                typeSuffix = '';
        }
        if (!results.icon.length && !results.logo.length && this.isHeaderSearchVisible)
            document.documentElement.scrollTop = 0;
        return (h("div", { class: "icon-list" }, h("div", { class: "icon-list__search container--small" }, h("icon-search", { query: this.query, size: "large", autoFocus: "autofocus" })), results.icon.length ?
            h("div", { class: "icon-list__wrapper" }, h("div", { class: "icon-list__header-bar" }, h("div", { class: "container--small" }, h("h4", null, "App icons"), h("ul", { class: "toggle" }, h("li", { class: `toggle__item ${(this.selectedIconType === 'outline') ? 'active' : ''}`, onClick: ev => this.handleToggleClick(ev, 'outline') }, "Outline"), h("li", { class: `toggle__item ${(this.selectedIconType === 'filled') ? 'active' : ''}`, onClick: ev => this.handleToggleClick(ev, 'filled') }, "Filled"), h("li", { class: `toggle__item ${(this.selectedIconType === 'sharp') ? 'active' : ''}`, onClick: ev => this.handleToggleClick(ev, 'sharp') }, "Sharp")))), h("div", { class: "container--small" }, h("div", { class: "icon-results" }, results.icon.map(icon => (h("span", { class: `icon-results__cell ${(this.selectedIcon === icon.name) ? 'active' : ''}`, onClick: (ev) => this.handleIconClick(ev, icon.name), onMouseEnter: (ev) => this.handleIconMouseEnter(ev), onMouseLeave: (ev) => this.handleIconMouseLeave(ev) }, h("svg", null, h("use", { xlinkHref: `#${icon.name + typeSuffix}` }))))))))
            : '', results.logo.length ?
            h("div", { class: "icon-list__wrapper" }, h("div", { class: "icon-list__header-bar" }, h("div", { class: "container--small" }, h("h4", null, "Logos"))), h("div", { class: "container--small" }, h("div", { class: "icon-results" }, results.logo.map(icon => (h("span", { class: `icon-results__cell ${(this.selectedIcon === icon.name) ? 'active' : ''}`, onClick: (ev) => this.handleIconClick(ev, icon.name), onMouseEnter: (ev) => this.handleIconMouseEnter(ev), onMouseLeave: (ev) => this.handleIconMouseLeave(ev) }, h("svg", null, h("use", { xlinkHref: `#${icon.name}` }))))))))
            : '', (!results.icon.length && !results.logo.length) ?
            h("div", { class: "icon-results--empty container--small" }, h("h2", null, "No results for \"", this.query, "\""), h("p", null, "Not finding an icon that you want? ", h("a", { href: "https://github.com/ionic-team/ionicons/issues" }, "File an issue"), " and suggest a new icon."))
            : '', h("toast-bar", { selectedIcon: selectedIcon, selectedIconType: this.selectedIconType, typeSuffix: typeSuffix, version: this.data.version })));
    }
    get el() { return getElement(this); }
};
LandingPage.style = iconListCss;

export { LandingPage as icon_list };
