import { r as registerInstance, h, j as Host } from './index-93b10a2a.js';

const disqusCommentsCss = ":host{display:block}";

const DisqusComments = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.setScriptEl = (el) => {
            this.targetEl = el;
        };
    }
    componentDidLoad() {
        var _a;
        const script = `
    var disqus_config = function () {
      this.page.url = '${this.url}';  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = '${this.siteId}'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://${this.siteId}.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
    `;
        this.scriptEl = document.createElement('script');
        this.scriptEl.type = 'text/javascript';
        this.scriptEl.innerHTML = script;
        (_a = this.targetEl) === null || _a === void 0 ? void 0 : _a.appendChild(this.scriptEl);
        const disqusScript = document.createElement('script');
        disqusScript.id = 'dsq-count-scr';
        disqusScript.async = true;
        disqusScript.src = `//${this.siteId}.disqus.com/count.js`;
        this.disqusScriptEl = disqusScript;
        document.body.appendChild(disqusScript);
    }
    componentDidUnload() {
        var _a, _b, _c, _d;
        (_b = (_a = this.scriptEl) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.scriptEl);
        (_d = (_c = this.disqusScriptEl) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.removeChild(this.disqusScriptEl);
    }
    render() {
        return (h(Host, null, h("div", { id: "disqus_thread" }), h("div", { ref: (e) => this.setScriptEl(e) }), h("noscript", null, "Please enable JavaScript to view the", ' ', h("a", { href: "https://disqus.com/?ref_noscript" }, "comments powered by Disqus."))));
    }
};
DisqusComments.style = disqusCommentsCss;

export { DisqusComments as disqus_comments };
