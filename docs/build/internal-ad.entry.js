import { r as registerInstance, h } from './index-93b10a2a.js';
import './_commonjsHelpers-8f072dc7.js';
import { P as Prismic } from './prismic-javascript.min-e8451ed1.js';
import { P as PrismicDom } from './prismic-dom.min-c7c2ccaa.js';

const apiURL = 'https://ionicframeworkcom.prismic.io/api/v2';
const cacheLife = 20 * 60 * 1000; // 20 mins
let ads;
let lastFetch = null;
const getLatest = async () => {
    const api = await Prismic.getApi(apiURL);
    const response = await api.query(Prismic.Predicates.at('document.type', 'docs_ad'), {});
    ads = response.results;
    lastFetch = Date.now();
};
const getAd = async () => {
    if (lastFetch === null || (Date.now() - lastFetch) > cacheLife) {
        await getLatest();
    }
    return chooseAdByWeight();
};
const chooseAdByWeight = () => {
    var _a;
    const weightList = []; // Just Checking...
    for (const ad of ads) {
        if (ad['data']) { // Safety
            if (!ad['data'].ad_weight) {
                ad['data'].ad_weight = 1;
            }
            for (let i = 0; i < ad['data'].ad_weight; i++) {
                weightList.push(ad);
            }
        }
    }
    // Probability Fun
    return ((_a = weightList[Math.floor(Math.random() * weightList.length)]) === null || _a === void 0 ? void 0 : _a.data) || null;
};

const trackView = (adId) => {
    hubspotTrack('View', adId);
    googleAnalyticsTrack('View', adId);
};
const trackClick = (adId, event) => {
    const timeForTrackingRequests = 150; // ms
    if (event) {
        event.preventDefault();
    }
    hubspotTrack('Click', adId);
    googleAnalyticsTrack('Click', adId);
    // give tracking request time to complete
    setTimeout(() => {
        const link = hrefClimber(event === null || event === void 0 ? void 0 : event.target);
        if (link.target && link.target.toLowerCase() === '_blank') {
            window.open(link.href);
        }
        else if (link.href) {
            document.location = link.href;
        }
    }, timeForTrackingRequests);
};
const hubspotTrack = (type, adId) => {
    if (!window['_hsq']) {
        console.warn('Unable to track Hubspot event, _hsq not found', type, adId);
        return;
    }
    window['_hsq'].push(['trackEvent', {
            id: `Docs ad - ${type} - ${adId}`
        }]);
};
const googleAnalyticsTrack = (type, adId) => {
    if (!window['gtag']) {
        console.warn('Unable to track Google Analytics event, gtag not found', type, adId);
        return;
    }
    window['gtag']('event', `Docs ad - ${type} - ${adId}`, {
        'event_category': `Docs ad - ${type}`,
        'event_label': adId
    });
};
// recursive function to climb the DOM looking for href tags
const hrefClimber = (el) => {
    if (el['href']) {
        return el;
    }
    else if (el.parentNode) {
        return hrefClimber(el.parentNode);
    }
};

const internalAdCss = "internal-ad{max-width:148px;display:block;margin:48px 0 0}internal-ad p{font-size:13px;line-height:19px;font-weight:400;letter-spacing:0.02em;color:var(--text-color--dark);transition:.2s color}internal-ad a:hover p{color:var(--text-color)}@media (max-width: 1233px){internal-ad{display:none}}";

const InternalAd = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.update();
    }
    async update() {
        this.ad = await getAd();
        if (!this.ad) {
            return;
        }
        // give the page a chance to reflow
        this.timeout = setTimeout(() => {
            trackView(this.ad.ad_id);
        }, 50);
    }
    disconnectedCallback() {
        // if the reflowed page doesn't have an ad, don't fire view events
        clearTimeout(this.timeout);
    }
    render() {
        if (!this.ad || Object.keys(this.ad).length === 0) {
            return;
        }
        return (h("a", { href: this.ad.ad_url.url, target: this.ad.ad_url.target, onClick: e => trackClick(this.ad.ad_id, e) }, h("picture", null, h("source", { media: "(min-width: 37.5em)", src: this.ad.ad_image.url }), h("source", { src: this.ad.ad_image['1x'].url }), h("img", { src: this.ad.ad_image.url, alt: this.ad.ad_image.alt, height: this.ad.ad_image['1x'].dimensions.height, width: this.ad.ad_image['1x'].dimensions.width }), h("p", null, this.ad.ad_image.alt)), h("div", { innerHTML: PrismicDom.RichText.asHtml(this.ad.ad_copy) })));
    }
};
InternalAd.style = internalAdCss;

export { InternalAd as internal_ad };
