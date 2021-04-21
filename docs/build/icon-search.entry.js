import { r as registerInstance, k as createEvent, e as Build, h } from './index-93b10a2a.js';

const iconSearchCss = "icon-search .search-input{position:relative}icon-search .search-input input{width:100%;font-weight:400;font-family:\"Eina\";font-size:16px;border:0;outline:0;border-radius:6px;box-sizing:border-box;display:block;-webkit-appearance:none;vertical-align:middle}icon-search .search-input__clear{transition:background 0.3s, opacity 0.3s;position:absolute;top:50%;transform:translateY(-50%);right:16px;width:22px;height:22px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--color-pale-sky);opacity:0;background-color:var(--color-catskill-white);border-radius:100px}icon-search .search-input__clear svg{width:16px;height:16px}icon-search .search-input__clear--active{opacity:0.8}icon-search .search-input__clear--active:hover{opacity:1;background-color:#e3e9f3}icon-search .search-input--small .search-input__clear{width:18px;height:18px;background-color:#e3e9f3;right:12px}icon-search .search-input--small .search-input__clear svg{width:14px;height:14px}icon-search .search-input--small .search-input__clear--active:hover{background-color:#dce3f0}icon-search .search-input__icon svg{color:var(--color-heather);position:absolute;height:20px;width:20px;top:50%;transform:translateY(-50%);left:16px}icon-search .search-input--small .search-input__icon svg{width:16px;height:16px;left:8px}icon-search .search-input--small input{font-size:13px;line-height:18px;padding:10px;padding-left:30px;padding-right:30px;background-color:#f6f7f9;height:39px;text-indent:0}icon-search .search-input--large input{transition:box-shadow 0.3s;font-size:16px;line-height:22px;padding:20px;padding-left:50px;padding-right:50px;background-color:white;box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}icon-search .search-input--large input:focus{box-shadow:0px 6px 12px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}icon-search .search-input--large:before{font-size:22px;left:20px}icon-search .search-input input::placeholder{color:var(--color-heather)}";

const IconSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hasSearched = createEvent(this, "hasSearched", 7);
        this.query = '';
        this.size = 'small';
        this.autoFocus = 'none';
        this.showClearCtrl = false;
        this.handleKeyUp = (e) => {
            if (e.keyCode === 27) {
                this.handleClear();
                return;
            }
        };
        this.handleInput = (e) => {
            const value = e.target.value;
            this.hasSearched.emit(value);
        };
    }
    watchQuery() {
        this.showClearCtrl = (this.query.length > 0) ? true : false;
    }
    componentDidLoad() {
        if (Build.isBrowser) {
            this.searchRef && this.searchRef.focus();
        }
    }
    handleClear() {
        this.hasSearched.emit('');
    }
    componentWillLoad() {
        this.watchQuery();
    }
    render() {
        return (h("div", { class: `search-input search-input--${this.size}` }, h("i", { class: "search-input__icon" }, h("svg", null, h("use", { xlinkHref: `#search-outline` }))), h("input", { ref: e => this.searchRef = e, type: "text", placeholder: "Search icons...", value: this.query, onKeyUp: this.handleKeyUp, onInput: this.handleInput, autofocus: this.autoFocus === 'autofocus' ? 'autofocus' : '' }), h("i", { class: {
                'search-input__clear': true,
                'search-input__clear--active': this.showClearCtrl,
            }, onClick: this.handleClear.bind(this) }, h("svg", null, h("use", { xlinkHref: `#close-outline` })))));
    }
    static get watchers() { return {
        "query": ["watchQuery"]
    }; }
};
IconSearch.style = iconSearchCss;

export { IconSearch as icon_search };
