import { r as registerInstance, h, c as getElement } from './core-2191ed9d.js';

const LandingPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectedIcon = '';
        this.selectedIconType = 'default';
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
        return (h("div", { class: "icon-list" }, h("div", { class: "icon-list__search container--small" }, h("icon-search", { query: this.query, size: "large", autofocus: "autofocus" })), results.icon.length ?
            h("div", { class: "icon-list__wrapper" }, h("div", { class: "icon-list__header-bar" }, h("div", { class: "container--small" }, h("h4", null, "App icons"), h("ul", { class: "toggle" }, h("li", { class: `toggle__item ${(this.selectedIconType === 'default') ? 'active' : ''}`, onClick: ev => this.handleToggleClick(ev, 'default') }, "Default"), h("li", { class: `toggle__item ${(this.selectedIconType === 'outline') ? 'active' : ''}`, onClick: ev => this.handleToggleClick(ev, 'outline') }, "Outline"), h("li", { class: `toggle__item ${(this.selectedIconType === 'sharp') ? 'active' : ''}`, onClick: ev => this.handleToggleClick(ev, 'sharp') }, "Sharp")))), h("div", { class: "container--small" }, h("div", { class: "icon-results" }, results.icon.map(icon => (h("span", { class: `icon-results__cell ${(this.selectedIcon === icon.name) ? 'active' : ''}`, onClick: (ev) => this.handleIconClick(ev, icon.name), onMouseEnter: (ev) => this.handleIconMouseEnter(ev), onMouseLeave: (ev) => this.handleIconMouseLeave(ev) }, h("svg", null, h("use", { xlinkHref: `#${icon.name + typeSuffix}` }))))))))
            : '', results.logo.length ?
            h("div", { class: "icon-list__wrapper" }, h("div", { class: "icon-list__header-bar" }, h("div", { class: "container--small" }, h("h4", null, "Logos"))), h("div", { class: "container--small" }, h("div", { class: "icon-results" }, results.logo.map(icon => (h("span", { class: `icon-results__cell ${(this.selectedIcon === icon.name) ? 'active' : ''}`, onClick: (ev) => this.handleIconClick(ev, icon.name), onMouseEnter: (ev) => this.handleIconMouseEnter(ev), onMouseLeave: (ev) => this.handleIconMouseLeave(ev) }, h("svg", null, h("use", { xlinkHref: `#${icon.name}` }))))))))
            : '', (!results.icon.length && !results.logo.length) ?
            h("div", { class: "icon-results--empty container--small" }, h("h2", null, "No results for \"", this.query, "\""), h("p", null, "Not finding an icon that you want? ", h("a", { href: "https://github.com/ionic-team/ionicons/issues" }, "File an issue"), " and suggest a new icon."))
            : '', h("toast-bar", { selectedIcon: selectedIcon, selectedIconType: this.selectedIconType, typeSuffix: typeSuffix })));
    }
    get el() { return getElement(this); }
    static get style() { return "icon-list .icon-list {\n  margin-bottom: 100px;\n}\nicon-list .icon-list__search + .icon-list__wrapper {\n  padding-top: 90px;\n}\nicon-list .icon-list__header-bar {\n  -webkit-transition: -webkit-box-shadow 0.6s;\n  transition: -webkit-box-shadow 0.6s;\n  transition: box-shadow 0.6s;\n  transition: box-shadow 0.6s, -webkit-box-shadow 0.6s;\n  margin-bottom: 14px;\n  height: 52px;\n  background-color: #fff;\n  -webkit-box-shadow: 0;\n  box-shadow: 0;\n  z-index: 99;\n}\nicon-list .icon-list__header-bar.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 58px;\n  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);\n}\nicon-list .icon-list__header-bar .container--small {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\nicon-list .icon-list__header-bar h4 {\n  margin-top: 21px;\n  margin-bottom: 0;\n}\nicon-list .icon-results {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));\n  grid-auto-rows: minmax(70px, auto);\n  grid-gap: 0.5em;\n  padding-bottom: 60px;\n  margin-left: -20px;\n  margin-right: -20px;\n}\nicon-list .icon-results__cell,\nicon-list .icon-results .ion {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\nicon-list .icon-results__cell {\n  -webkit-transition: background-color 0.4s;\n  transition: background-color 0.4s;\n  cursor: pointer;\n  border-radius: 8px;\n  border: 2px solid transparent;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(236, 240, 246, 0.4);\n}\nicon-list .icon-results__cell svg {\n  width: 32px;\n  height: 32px;\n  color: #373737;\n}\nicon-list .icon-results__cell:not(.active).mouseOver {\n  -webkit-animation-name: shadowIn;\n  animation-name: shadowIn;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\@-webkit-keyframes shadowIn {\n  from {\n    -webkit-box-shadow: 0;\n    box-shadow: 0;\n  }\n  to {\n    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\n  }\n}\n\@keyframes shadowIn {\n  from {\n    -webkit-box-shadow: 0;\n    box-shadow: 0;\n  }\n  to {\n    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\n  }\n}\nicon-list .icon-results__cell:not(.active).mouseOff,\nicon-list .icon-results__cell.active {\n  -webkit-animation-name: shadowOut;\n  animation-name: shadowOut;\n  -webkit-animation-duration: 0.6s;\n  animation-duration: 0.6s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\nicon-list .icon-results__cell.active {\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n}\n\@-webkit-keyframes shadowOut {\n  from {\n    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\n  }\n  to {\n    -webkit-box-shadow: 0;\n    box-shadow: 0;\n  }\n}\n\@keyframes shadowOut {\n  from {\n    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\n  }\n  to {\n    -webkit-box-shadow: 0;\n    box-shadow: 0;\n  }\n}\nicon-list .icon-results__cell.active {\n  background-color: var(--color-catskill-white);\n  cursor: default;\n}\nicon-list .icon-results--empty {\n  text-align: center;\n  padding-top: 70px;\n}\nicon-list .icon-results--empty h2 {\n  margin-top: 0;\n}\nicon-list .toggle {\n  list-style-type: none;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: -4px;\n  position: relative;\n  bottom: -3px;\n  margin-top: 18px;\n}\nicon-list .toggle__item {\n  -webkit-transition: opacity 0.3s, padding-bottom 0.1s;\n  transition: opacity 0.3s, padding-bottom 0.1s;\n  opacity: 0.5;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-dodger-blue);\n  border-bottom: 2px solid transparent;\n}\nicon-list .toggle__item:not(.active) {\n  cursor: pointer;\n}\nicon-list .toggle__item:hover,\nicon-list .toggle__item.active {\n  opacity: 1;\n}\nicon-list .toggle__item.active {\n  border-bottom: 2px solid var(--color-dodger-blue);\n  padding-bottom: 2px;\n}\nicon-list .toggle__item + .toggle__item {\n  margin-left: 20px;\n}\nicon-list .icon-list__header-bar.sticky .toggle__item {\n  padding-bottom: 11px;\n}\n\@media screen and (max-width: 768px) {\n  icon-list .icon-results {\n    margin-left: 0;\n    margin-right: 0;\n  }\n  icon-list .icon-list__search + .icon-list__wrapper {\n    padding-top: 40px;\n  }\n}\n\@media screen and (max-width: 560px) {\n  icon-list .icon-results__cell:not(.active).mouseOver,\nicon-list .icon-results__cell:not(.active).mouseOff,\nicon-list .icon-results__cell.active {\n    -webkit-animation-name: none;\n    animation-name: none;\n    -webkit-box-shadow: 0;\n    box-shadow: 0;\n  }\n}"; }
};

export { LandingPage as icon_list };
