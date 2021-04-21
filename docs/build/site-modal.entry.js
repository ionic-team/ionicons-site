import { r as registerInstance, k as createEvent, h, j as Host } from './index-93b10a2a.js';
import { B as Button } from './Button-36d57e33.js';

const siteModalCss = ":root{--modal-z-index:1100;--modal-backdrop-z-index:1090;--modal-width:768px;--modal-padding:48px;--modal-border-radius:24px}site-modal{display:block;pointer-events:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:var(--modal-z-index)}.modal__backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--modal-backdrop-z-index);transition:opacity 300ms ease-in-out;background-color:#000;opacity:0}.modal__backdrop.in{opacity:0.5}.modal__backdrop.out{opacity:0}.modal__wrap{transition:transform 300ms cubic-bezier(0.32, 0.72, 0, 1);transform:translateY(-120%)}.modal__wrap.in{transform:translate(0%)}.modal__content{pointer-events:auto;max-width:var(--modal-width);margin:76px auto;background:white;position:relative;border-radius:var(--modal-border-radius)}.modal__content .modal__close-button{position:absolute;top:-10px;right:-10px;background:#fff;color:var(--c-carbon-90);padding:0;text-align:center;border:0;border-radius:100%;height:30px;width:30px;box-shadow:var(--elevation-2);outline:0}.modal__content .modal__close-button ion-icon{vertical-align:middle;margin-top:-3px}.modal__body{padding:var(--modal-padding);max-height:calc(100vh - 76px);overflow:auto}.modal__body h1,.modal__body h2,.modal__body h3,.modal__body h4,.modal__body h5{margin-top:0}";

const SiteModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onModalClose = createEvent(this, "modalClose", 7);
        this.open = false;
        this.visible = false;
        this.OPEN_DELAY = 500;
        this.CLOSE_DELAY = 500;
        this.close = () => {
            this.visible = false;
            this.hideBackdrop();
            setTimeout(() => {
                this.open = false;
            }, this.CLOSE_DELAY);
        };
        this.openBackdrop = () => {
            const backdrop = document.createElement('div');
            backdrop.className = 'modal__backdrop';
            document.body.appendChild(backdrop);
            this.initBackdrop(backdrop);
            this.backdropEl = backdrop;
            requestAnimationFrame(() => {
                backdrop.classList.add('in');
            });
        };
        this.hideBackdrop = () => {
            if (!this.backdropEl) {
                return;
            }
            this.backdropEl.classList.add('out');
            setTimeout(() => {
                var _a;
                document.body.removeChild(this.backdropEl);
                this.backdropEl = null;
                this.modalClose && this.modalClose();
                (_a = this.onModalClose) === null || _a === void 0 ? void 0 : _a.emit();
            }, this.CLOSE_DELAY);
        };
        this.checkBackdrop = () => { };
        this.initBackdrop = (el) => {
            el.addEventListener('click', (_e) => {
                this.close();
            });
        };
    }
    componentDidLoad() {
        this.checkBackdrop();
    }
    handleKeyUp(e) {
        if (this.open && e.key === 'Escape') {
            this.close();
        }
    }
    openChanged() {
        if (this.open && !this.backdropEl) {
            this.openBackdrop();
        }
        else if (!this.open && this.backdropEl) {
            this.hideBackdrop();
        }
        requestAnimationFrame(() => {
            this.visible = this.open;
        });
    }
    render() {
        return (h(Host, { style: {
                display: this.open ? 'block' : 'none',
            } }, h("div", { class: `modal__wrap${this.visible ? ` in` : ``}` }, h("div", { class: `modal__content` }, h(Button, { class: "modal__close-button", onClick: this.close }, h("ion-icon", { name: "close" })), h("div", { class: "modal__body" }, h("slot", null))))));
    }
    static get watchers() { return {
        "open": ["openChanged"]
    }; }
};
SiteModal.style = siteModalCss;

export { SiteModal as site_modal };
