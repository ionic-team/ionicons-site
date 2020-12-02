import { r as registerInstance, k as createEvent, h, i as getElement } from './index-b94df3cd.js';
import './_commonjsHelpers-23c0f84c.js';
import './index-1b23b0a5.js';
import './Button-5903c6ca.js';
import { R as ResponsiveContainer } from './index-f9c24548.js';

const toastBarCss = "toast-bar .toast-bar{position:fixed;padding:12px 0;left:0;bottom:0;width:100%;transform:translateY(100%)}toast-bar .toast-bar.isVisible{animation-name:slideIn;animation-duration:0.6s;animation-timing-function:var(--easeOutExpo);animation-fill-mode:forwards;opacity:1}@keyframes slideIn{from{transform:translateY(100%)}to{transform:translateY(0%)}}toast-bar .toast-bar.isHidden{animation-name:slideOut;animation-duration:0.4s;animation-timing-function:var(--easeOutExpo);animation-fill-mode:forwards}@keyframes slideOut{0%{opacity:1;transform:translateY(0%)}99%{opacity:1}100%{opacity:0;transform:translateY(100%)}}toast-bar .toast-bar.preload{opacity:0}toast-bar .toast-bar--inner{background-color:var(--color-shark);height:80px;border-radius:15px;padding:0 20px 0 30px;color:#fff;display:flex;align-items:center;box-shadow:0px 16px 32px 0px rgba(0, 0, 0, 0.1), 0px 8px 16px 0px rgba(0, 0, 0, 0.08)}toast-bar .toast-bar--inner h4{color:#fff;margin:0;white-space:nowrap;margin-right:30px}toast-bar .toast-bar__details{flex:1 0 auto;display:flex;align-items:flex-end;justify-content:flex-end}toast-bar .toast-bar__section-header,toast-bar .toast-bar__section-header>div{display:flex;justify-content:space-between;align-items:center}toast-bar .toast-bar__section-header{height:10px;margin-bottom:7px}toast-bar .toast-bar__section-header h6{display:inline-block}toast-bar .toast-bar__section-header a{transition:border 0.3s;color:var(--color-melrose);font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;text-decoration:none;border-bottom:1px solid transparent}toast-bar .toast-bar__section-header a:hover{border-bottom-color:var(--color-melrose-dark)}toast-bar .toast-bar__section-header i{margin-left:3px}toast-bar .toast-bar__section:not(:first-child){margin-left:20px}toast-bar .toast-bar__section:first-child{position:relative;max-width:none}toast-bar .toast-bar__details code{position:relative;box-sizing:border-box;display:flex;align-items:center;font-size:14px;line-height:14px;height:32px;padding:0 12px;cursor:text;overflow:hidden}@supports (display: grid){toast-bar .toast-bar__section:not(:first-child){flex:0}toast-bar .toast-bar__section:first-child{flex:1}toast-bar .toast-bar__details code{overflow-x:auto}}toast-bar .toast-bar__details code>span{position:absolute;white-space:nowrap}toast-bar .toast-bar__section .confirmation{font-size:11px;font-family:\"Eina\";font-weight:600;color:#aec6ff;display:flex;opacity:0;transform:translateY(5px);margin-left:12px}toast-bar .toast-bar__section .confirmation svg{color:#aec6ff;width:14px;height:14px;margin-right:4px}toast-bar .toast-bar__section.copied .confirmation{animation-name:slideInOut;animation-duration:1.5s;animation-fill-mode:forwards}@keyframes slideInOut{0%{opacity:0;transform:translateY(5px)}10%{opacity:0.9;transform:translateY(0)}90%{opacity:0.9;transform:translateY(0)}100%{opacity:0;transform:translateY(-5px)}}toast-bar .toast-bar__details code:hover .hover-highlight{background-color:#5882b2}@media screen and (max-width: 768px){toast-bar .toast-bar__section:not(:first-child){display:none}}@media screen and (max-width: 540px){toast-bar .toast-bar--inner{padding:16px;flex-direction:column;align-items:flex-start;height:auto}toast-bar .toast-bar--inner h4{margin:0 0 16px}toast-bar .toast-bar__section{max-width:100% !important}toast-bar .toast-bar__details{flex:0 0 auto;width:100%}}";

const ToastBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isSVGDownloading = false;
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
        this.isSVGDownloading = true;
        fetch(ev.currentTarget.href)
            .then(response => {
            if (response.ok) {
                return response.text();
            }
            this.isSVGDownloading = false;
            throw new Error('Unable to fetch icon.');
        })
            .then((svg) => {
            this.isSVGDownloading = false;
            const encodedFile = `data:image/svg+xml,${this.encodeSVG(svg)}`;
            const el = document.createElement('a');
            el.setAttribute('href', encodedFile);
            el.setAttribute('download', `${name}.svg`);
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
            const isLogoName = this.selectedIcon.name.includes('logo-');
            iconAttrName = isLogoName ? this.selectedIcon.name : this.selectedIcon.name + this.typeSuffix;
            snippetLength = (`<ion-icon name="${iconAttrName}"></ion-icon>`.length * 8) + 32;
        }
        return (h("div", { class: `toast-bar ${this.selectedIcon ? 'isVisible' : ''} ${!this.selectedIcon && this.hadIconOnce ? 'isHidden' : ''} ${!this.hadIconOnce ? 'preload' : ''}`, onClick: ev => ev.stopPropagation() }, h(ResponsiveContainer, null, h("div", { class: "toast-bar--inner" }, this.selectedIcon && h("h4", null, iconAttrName), this.selectedIcon &&
            h("div", { class: "toast-bar__details" }, h("div", { class: "toast-bar__section", style: { maxWidth: snippetLength + 'px' } }, h("div", { class: "toast-bar__section-header" }, h("div", null, h("h6", null, "Web component code"), h("span", { class: "confirmation" }, h("i", { class: "ion ion-md-checkmark" }), "Copied")), h("stencil-route-link", { url: `/usage#${iconAttrName}`, onClick: () => this.toggleHeaderSearch.emit('hide') }, "Usage", h("i", { class: "ion ion-ios-arrow-forward" }))), h("code", null, h("span", { class: "hover-highlight", onClick: () => this.handleCodeClick(iconAttrName) }, '<', h("span", { class: "yellow" }, "ion-icon"), "\u00A0", h("span", { class: "orange" }, "name"), '=', h("span", { class: "green" }, `"${iconAttrName}"`), '>', '</', h("span", { class: "yellow" }, "ion-icon"), '>'))), h("div", { class: "toast-bar__section" }, h("div", { class: "btn-group" }, h("div", { class: "btn btn--gray btn--small btn--icon" }, h("svg", null, h("use", { xlinkHref: `#${iconAttrName}` }))), h("a", { class: "btn btn--gray btn--small download-link", href: `https://unpkg.com/ionicons@${this.version}/dist/svg/${iconAttrName}.svg`, onClick: (ev) => this.handleSVGDownload(ev, iconAttrName) }, this.isSVGDownloading
                ? h("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: "loading-animation" }, h("path", { d: "M11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11", stroke: "url(#paint0_angular)" }), h("defs", null, h("radialGradient", { id: "paint0_angular", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(7 7) rotate(90) scale(4)" }, h("stop", { "stop-color": "#96ABDC", "stop-opacity": "0" }), h("stop", { offset: "0.75", "stop-color": "#96ABDC" }))))
                : h("svg", { width: "9px", height: "11px", viewBox: "0 0 9 11", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, h("g", null, h("rect", { fill: "#586980", x: "0", y: "9", width: "9", height: "2", rx: "1" }), h("path", { d: "M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z", id: "arrow", fill: "#96abdc" }))), "SVG"))))))));
    }
    get el() { return getElement(this); }
};
ToastBar.style = toastBarCss;

export { ToastBar as toast_bar };
