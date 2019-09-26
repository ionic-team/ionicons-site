import { r as registerInstance, e as createEvent, h, c as getElement } from './core-2191ed9d.js';

const ToastBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hadIconOnce = false;
        this.clearToast = createEvent(this, "clearToast", 7);
        this.toggleHeaderSearch = createEvent(this, "toggleHeaderSearch", 7);
    }
    handleCodeClick(attrName) {
        const codeElParent = this.el.querySelector('.toast-bar__section:first-child');
        const el = document.createElement('textarea');
        el.value = `<ion-icon name="${attrName}"></ion-icon>`;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (this.showCopiedConfirm) {
            window.clearTimeout(this.showCopiedConfirm);
            this.showCopiedConfirm = 0;
        }
        codeElParent.classList.add('copied');
        this.showCopiedConfirm = window.setTimeout(() => {
            codeElParent.classList.remove('copied');
            this.showCopiedConfirm = 0;
        }, 1500);
    }
    componentDidLoad() {
        this.el.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
        this.el.addEventListener('touchend', this.handleTouchEnd.bind(this), false);
    }
    handleTouchStart(ev) {
        if (ev.target.classList.contains('toast-bar--inner')) {
            ev.preventDefault();
            this.touchStartY = ev.changedTouches[0].screenY;
        }
    }
    handleTouchEnd(ev) {
        if (ev.target.classList.contains('toast-bar--inner')) {
            ev.preventDefault();
            this.touchEndY = ev.changedTouches[0].screenY;
            if (this.touchEndY > this.touchStartY) { // swiped down
                this.clearToast.emit();
            }
        }
    }
    handleSVGDownload(ev, name) {
        ev.preventDefault();
        fetch(ev.target.href)
            .then(response => {
            if (response.ok) {
                return response.text();
            }
            else {
                throw new Error('Unable to fetch icon.');
            }
        })
            .then((svg) => {
            const encodedFile = `data:image/svg+xml,${this.encodeSVG(svg)}`;
            const el = document.createElement('a');
            el.setAttribute('href', encodedFile);
            el.setAttribute('download', name);
            el.style.display = 'none';
            document.body.appendChild(el);
            el.click();
            document.body.removeChild(el);
        });
    }
    encodeSVG(data) {
        const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g;
        data = data.replace(/"/g, '\'');
        data = data.replace(/>\s{1,}</g, "><");
        data = data.replace(/\s{2,}/g, " ");
        return data.replace(symbols, encodeURIComponent);
    }
    render() {
        let snippetLength;
        let iconAttrName;
        if (this.selectedIcon) {
            if (!this.hadIconOnce)
                this.hadIconOnce = true;
            iconAttrName = this.selectedIcon.name + this.typeSuffix;
            snippetLength = (`<ion-icon name="${iconAttrName}"></ion-icon>`.length * 8) + 32;
        }
        return (h("div", { class: `toast-bar ${this.selectedIcon ? 'isVisible' : ''} ${!this.selectedIcon && this.hadIconOnce ? 'isHidden' : ''} ${!this.hadIconOnce ? 'preload' : ''}`, onClick: ev => ev.stopPropagation() }, h("div", { class: "container" }, h("div", { class: "toast-bar--inner" }, this.selectedIcon && h("h4", null, iconAttrName), this.selectedIcon &&
            h("div", { class: "toast-bar__details" }, h("div", { class: "toast-bar__section", style: { maxWidth: snippetLength + 'px' } }, h("div", { class: "toast-bar__section-header" }, h("div", null, h("h6", null, "Web component code"), h("span", { class: "confirmation" }, h("i", { class: "ion ion-md-checkmark" }), "Copied")), h("stencil-route-link", { url: `/usage#${iconAttrName}`, onClick: () => this.toggleHeaderSearch.emit('hide') }, "Usage", h("i", { class: "ion ion-ios-arrow-forward" }))), h("code", null, h("span", { class: "hover-highlight", onClick: () => this.handleCodeClick(iconAttrName) }, '<', h("span", { class: "yellow" }, "ion-icon"), "\u00A0", h("span", { class: "orange" }, "name"), '=', h("span", { class: "green" }, `"${iconAttrName}"`), '>', '</', h("span", { class: "yellow" }, "ion-icon"), '>'))), h("div", { class: "toast-bar__section" }, h("div", { class: "btn-group" }, h("div", { class: "btn btn--gray btn--small btn--icon" }, h("svg", null, h("use", { xlinkHref: `#${iconAttrName}` }))), h("a", { class: "btn btn--gray btn--small download-link", href: `https://unpkg.com/ionicons@${this.version}/dist/svg/${iconAttrName}.svg`, onClick: (ev) => this.handleSVGDownload(ev, iconAttrName) }, h("svg", { width: "9px", height: "11px", viewBox: "0 0 9 11", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, h("g", null, h("rect", { fill: "#586980", x: "0", y: "9", width: "9", height: "2", rx: "1" }), h("path", { d: "M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z", id: "arrow", fill: "#96abdc" }))), "SVG"))))))));
    }
    get el() { return getElement(this); }
    static get style() { return "toast-bar .toast-bar {\n  position: fixed;\n  padding: 12px 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  -webkit-transform: translateY(100%);\n  transform: translateY(100%);\n}\ntoast-bar .toast-bar.isVisible {\n  -webkit-animation-name: slideIn;\n  animation-name: slideIn;\n  -webkit-animation-duration: 0.6s;\n  animation-duration: 0.6s;\n  -webkit-animation-timing-function: var(--easeOutExpo);\n  animation-timing-function: var(--easeOutExpo);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  opacity: 1;\n}\n\@-webkit-keyframes slideIn {\n  from {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n  }\n  to {\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n  }\n}\n\@keyframes slideIn {\n  from {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n  }\n  to {\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n  }\n}\ntoast-bar .toast-bar.isHidden {\n  -webkit-animation-name: slideOut;\n  animation-name: slideOut;\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-timing-function: var(--easeOutExpo);\n  animation-timing-function: var(--easeOutExpo);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\@-webkit-keyframes slideOut {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n  }\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n  }\n}\n\@keyframes slideOut {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n  }\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n  }\n}\ntoast-bar .toast-bar.preload {\n  opacity: 0;\n}\ntoast-bar .toast-bar--inner {\n  background-color: var(--color-shark);\n  height: 80px;\n  border-radius: 15px;\n  padding: 0 20px 0 30px;\n  color: #fff;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.1), 0px 8px 16px 0px rgba(0, 0, 0, 0.08);\n  box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.1), 0px 8px 16px 0px rgba(0, 0, 0, 0.08);\n}\ntoast-bar .toast-bar--inner h4 {\n  color: #fff;\n  margin: 0;\n  white-space: nowrap;\n  margin-right: 30px;\n}\ntoast-bar .toast-bar__details {\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\ntoast-bar .toast-bar__section-header,\ntoast-bar .toast-bar__section-header > div {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n}\ntoast-bar .toast-bar__section-header {\n  height: 10px;\n  margin-bottom: 7px;\n}\ntoast-bar .toast-bar__section-header h6 {\n  display: inline-block;\n}\ntoast-bar .toast-bar__section-header a {\n  -webkit-transition: border 0.3s;\n  transition: border 0.3s;\n  color: var(--color-melrose);\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  text-decoration: none;\n  border-bottom: 1px solid transparent;\n}\ntoast-bar .toast-bar__section-header a:hover {\n  border-bottom-color: var(--color-melrose-dark);\n}\ntoast-bar .toast-bar__section-header i {\n  margin-left: 3px;\n}\ntoast-bar .toast-bar__section:not(:first-child) {\n  margin-left: 20px;\n}\ntoast-bar .toast-bar__section:first-child {\n  position: relative;\n  max-width: none;\n}\ntoast-bar .toast-bar__details code {\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 14px;\n  line-height: 14px;\n  height: 32px;\n  padding: 0 12px;\n  cursor: text;\n  overflow: hidden;\n}\n\@supports (display: grid) {\n  toast-bar .toast-bar__section:not(:first-child) {\n    -ms-flex: 0;\n    flex: 0;\n  }\n  toast-bar .toast-bar__section:first-child {\n    -ms-flex: 1;\n    flex: 1;\n  }\n  toast-bar .toast-bar__details code {\n    overflow-x: auto;\n  }\n}\ntoast-bar .toast-bar__details code > span {\n  position: absolute;\n  white-space: nowrap;\n}\ntoast-bar .toast-bar__section .confirmation {\n  font-size: 11px;\n  font-family: \"Eina\";\n  font-weight: 600;\n  color: #aec6ff;\n  display: -ms-flexbox;\n  display: flex;\n  opacity: 0;\n  -webkit-transform: translateY(5px);\n  transform: translateY(5px);\n  margin-left: 12px;\n}\ntoast-bar .toast-bar__section .confirmation svg {\n  color: #aec6ff;\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n}\ntoast-bar .toast-bar__section.copied .confirmation {\n  -webkit-animation-name: slideInOut;\n  animation-name: slideInOut;\n  -webkit-animation-duration: 1.5s;\n  animation-duration: 1.5s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\@-webkit-keyframes slideInOut {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(5px);\n    transform: translateY(5px);\n  }\n  10% {\n    opacity: 0.9;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  90% {\n    opacity: 0.9;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-5px);\n    transform: translateY(-5px);\n  }\n}\n\@keyframes slideInOut {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(5px);\n    transform: translateY(5px);\n  }\n  10% {\n    opacity: 0.9;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  90% {\n    opacity: 0.9;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-5px);\n    transform: translateY(-5px);\n  }\n}\ntoast-bar .toast-bar__details code:hover .hover-highlight {\n  background-color: #5882b2;\n}\n\@media screen and (max-width: 768px) {\n  toast-bar .toast-bar__section:not(:first-child) {\n    display: none;\n  }\n}\n\@media screen and (max-width: 540px) {\n  toast-bar .toast-bar--inner {\n    padding: 16px;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    height: auto;\n  }\n  toast-bar .toast-bar--inner h4 {\n    margin: 0 0 16px;\n  }\n  toast-bar .toast-bar__section {\n    max-width: 100% !important;\n  }\n  toast-bar .toast-bar__details {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: 100%;\n  }\n}"; }
};

export { ToastBar as toast_bar };
