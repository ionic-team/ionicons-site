import { h, r as registerInstance, j as Host } from './index-93b10a2a.js';
import './_commonjsHelpers-8f072dc7.js';
import './Button-36d57e33.js';
import { a as Card, H as Heading, G as Grid, C as Col } from './index-5421a3d1.js';
import { P as Prismic } from './prismic-javascript.min-e8451ed1.js';
import { P as PrismicDom } from './prismic-dom.min-c7c2ccaa.js';

var ResourceType;
(function (ResourceType) {
    ResourceType["Article"] = "Article";
    ResourceType["Blog"] = "Blog";
    ResourceType["Book"] = "Book";
    ResourceType["CaseStudy"] = "Case Study";
    ResourceType["CustomerInterview"] = "Customer Interview";
    ResourceType["Course"] = "Course";
    ResourceType["Learning"] = "Learning";
    ResourceType["Doc"] = "Doc";
    ResourceType["Guide"] = "Guide";
    ResourceType["Podcast"] = "Podcast";
    ResourceType["Tutorial"] = "Tutorial";
    ResourceType["Video"] = "Video";
    ResourceType["Whitepaper"] = "Whitepaper";
    ResourceType["Webinar"] = "Webinar";
})(ResourceType || (ResourceType = {}));
var ResourceSource;
(function (ResourceSource) {
    ResourceSource["Prismic"] = "prismic";
})(ResourceSource || (ResourceSource = {}));

const Client = (endpoint, req = null) => Prismic.client(endpoint, createClientOptions(req, null));
const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {};
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
    return Object.assign(Object.assign({}, reqOption), accessTokenOption);
};
const prismicDocToResource = (doc) => {
    return {
        id: doc.uid,
        title: doc.data.title || null,
        description: doc.data.tagline || null,
        tags: doc.tags || [],
        publishDate: doc.first_publication_date || null,
        updatedDate: doc.last_publication_date || null,
        type: prismicTypeToResourceType(doc.type),
        authors: getAuthorsForPrismicDoc(doc),
        metaImage: getImage(doc.data.meta_image),
        heroImage: getImage(doc.data.hero_image || doc.data.cover_image),
        source: ResourceSource.Prismic,
        doc,
    };
};
const getImage = (imageObj) => (imageObj && imageObj.url ? imageObj.url : '');
const getAuthorsForPrismicDoc = (doc) => {
    var _a, _b;
    if (!doc.data.hosts && !doc.data.author) {
        return [];
    }
    if (doc.type === 'webinar') {
        return doc.data.hosts.map((h) => {
            var _a, _b;
            return ({
                name: h.name || '',
                title: h.title || '',
                link: ((_a = h.profile_link) === null || _a === void 0 ? void 0 : _a.url) || '',
                avatar: ((_b = h.photo) === null || _b === void 0 ? void 0 : _b.url) || '',
            });
        });
    }
    else if (doc.data.author && doc.data.author.length) {
        return doc.data.author.map((a) => {
            var _a, _b;
            return ({
                name: a.name || '',
                title: a.title || '',
                link: ((_a = a.author_url) === null || _a === void 0 ? void 0 : _a.url) || '',
                avatar: ((_b = a.photo) === null || _b === void 0 ? void 0 : _b.url) || '',
            });
        });
    }
    else if (doc.data.author) {
        return [
            {
                name: doc.data.author.name || '',
                title: doc.data.author.title || '',
                link: ((_a = doc.data.author.author_url) === null || _a === void 0 ? void 0 : _a.url) || '',
                avatar: ((_b = doc.data.author.photo) === null || _b === void 0 ? void 0 : _b.url) || '',
            },
        ];
    }
    return [];
};
const prismicTypeToResourceType = (type) => ({
    article: ResourceType.Article,
    book: ResourceType.Book,
    blog: ResourceType.Blog,
    case_study: ResourceType.CaseStudy,
    course: ResourceType.Course,
    customer_story: ResourceType.CustomerInterview,
    learning: ResourceType.Learning,
    doc: ResourceType.Doc,
    guide: ResourceType.Guide,
    podcast: ResourceType.Podcast,
    tutorial: ResourceType.Tutorial,
    video: ResourceType.Video,
    webinar: ResourceType.Webinar,
    whitepaper: ResourceType.Whitepaper,
}[type]);
const resourceTypeToPrismicType = (type) => ({
    [ResourceType.Article]: 'article',
    [ResourceType.Blog]: 'blog',
    [ResourceType.Book]: 'book',
    [ResourceType.CaseStudy]: 'case_study',
    [ResourceType.Course]: 'course',
    [ResourceType.CustomerInterview]: 'customer_story',
    [ResourceType.Doc]: 'doc',
    [ResourceType.Learning]: 'learning',
    [ResourceType.Guide]: 'guide',
    [ResourceType.Podcast]: 'podcast',
    [ResourceType.Tutorial]: 'tutorial',
    [ResourceType.Video]: 'video',
    [ResourceType.Webinar]: 'webinar',
    [ResourceType.Whitepaper]: 'whitepaper',
}[type]);
function linkResolver(doc) {
    // Define the url depending on the document type
    if (doc.type === 'article') {
        return '/resources/articles/' + doc.uid;
    }
    else if (doc.type === 'case_study') {
        return '/resources/case-studies/' + doc.uid;
    }
    else if (doc.type === 'customer_story') {
        return '/resources/customer-interviews/' + doc.uid;
    }
    else if (doc.type === 'enterprise_blog_post') {
        return '/enterprise/blog/' + doc.uid;
    }
    else if (doc.type === 'integration') {
        return '/integrations/' + doc.uid;
    }
    else if (doc.type === 'podcast') {
        return '/resources/podcasts/' + doc.uid;
    }
    else if (doc.type === 'thank_you') {
        return '/thank-you/' + doc.uid;
    }
    else if (doc.type === 'video') {
        return '/resources/videos/' + doc.uid;
    }
    else if (doc.type === 'webinar') {
        return '/resources/webinars/' + doc.uid;
    }
    else if (doc.type === 'whitepaper') {
        return '/resources/whitepapers/' + doc.uid;
    }
    // Default to homepage
    return '/';
}
const resourceTypeToPath = (type) => ({
    [ResourceType.Article]: 'articles',
    [ResourceType.Blog]: 'blogs',
    [ResourceType.Book]: 'blogs',
    [ResourceType.CaseStudy]: 'case-studies',
    [ResourceType.Course]: 'courses',
    [ResourceType.CustomerInterview]: 'customer-interviews',
    [ResourceType.Doc]: 'docs',
    [ResourceType.Learning]: 'learning',
    [ResourceType.Guide]: 'guides',
    [ResourceType.Podcast]: 'podcasts',
    [ResourceType.Tutorial]: 'tutorials',
    [ResourceType.Video]: 'videos',
    [ResourceType.Webinar]: 'webinars',
    [ResourceType.Whitepaper]: 'whitepapers',
}[type]);

const ResourceAuthorItem = ({ author, byline, singleLine = false, className, key }) => {
    return author ? (h("a", { href: author.link, target: "_blank", rel: "noopener", key: key, class: `
        ${byline ? `resource-author-item--byline` : ''}
        ${singleLine ? `resource-author-item--single-line` : ''}
        ${className ? className : ''}
        resource-author-item
      `, "aria-label": `Author information - ${author.name}` },
        h("div", { class: "resource-author" },
            h("img", { loading: 'lazy', class: "author-avatar", src: author.avatar, alt: author.name }),
            h("div", { class: "author-info" },
                h("div", { class: "author-name" }, author.name),
                author.title ? h("div", { class: "author-title" }, author.title) : null)))) : null;
};

const IONICFRAMEWORK_URL = 'https://ionicframework.com';
const getResourcesUrl = () => `/resources/`;
/**
 * Get the path for the given resource type. For example ResourceType.Articles
 * will be at /articles
 * @param type
 */
const getResourceTypeUrl = (type) => {
    const pathType = resourceTypeToPath(type);
    return `${IONICFRAMEWORK_URL}${getResourcesUrl()}${pathType}`;
};
/**
 * Get the full path to the given resource
 * @param record
 */
const getResourceUrl = (resource) => {
    const pr = resource;
    // If the resource has an external content url, use that
    if (pr.doc.data.content_url && pr.doc.data.content_url.url) {
        return PrismicDom.Link.url(pr.doc.data.content_url, linkResolver);
        //return pr.doc.data.content_url;
    }
    switch (resource.type) {
        case ResourceType.Article:
        case ResourceType.Webinar:
        case ResourceType.CaseStudy:
        case ResourceType.CustomerInterview:
        case ResourceType.Whitepaper:
            return `${getResourceTypeUrl(resource.type)}/${resource.id}`;
        case ResourceType.Video:
            return getVideoUrl(resource);
        default:
            return `${getResourceTypeUrl(resource.type)}/${resource.id}`;
    }
};
const getVideoUrl = (resource) => {
    const pr = resource;
    if (pr.doc.data.wistia_id) {
        return `https://ionicpro.wistia.com/medias/${pr.doc.data.wistia_id}`;
    }
    else if (pr.doc.data.youtube_id) {
        return `https://www.youtube.com/watch?v=${pr.doc.data.youtube_id}`;
    }
    return '';
};

const ResourceMeta = ({ resource }) => {
    var _a;
    return (h("div", { class: "resource-meta" },
        h("div", { class: "type" }, resource.type),
        h("div", { class: "tags" }, (_a = resource.tags) === null || _a === void 0 ? void 0 : _a.map((t, i) => [h("span", null, t), i < resource.tags.length - 1 ? h(Sep, null) : null]))));
};
const Sep = () => h("span", { class: "sep" });

const ResourceCard = (props) => {
    if (props.hero) {
        return h(StandardResourceCard, Object.assign({}, props));
    }
    switch (props.resource.type) {
        case ResourceType.Whitepaper:
            return h(WhitepaperResourceCard, Object.assign({}, props));
        default:
            return h(StandardResourceCard, Object.assign({}, props));
    }
};
const StandardResourceCard = ({ resource, headingLevel = 3, showAuthor = true, showImage = true, showDescription = true, metaTop = false, key, }) => (h(Card, { embelish: false, class: `resource-card${metaTop ? ` resource-card--meta-top` : ''}`, key: key },
    metaTop && h(ResourceMeta, { resource: resource }),
    showImage && (h("a", { href: getResourceUrl(resource), class: "resource-card__image" },
        h(HeroImage, { resource: resource }))),
    !metaTop && h(ResourceMeta, { resource: resource }),
    h("div", { class: "resource-card__content" },
        h("a", { href: getResourceUrl(resource) },
            h(Heading, { level: headingLevel }, resource.title)),
        showDescription && h("p", null, resource.description)),
    showAuthor && h(ResourceAuthorItem, { author: resource.authors[0] })));
const WhitepaperResourceCard = (props) => {
    const r = props.resource;
    return (h(Card, { embelish: false, class: `resource-card resource-card--ad`, key: props.key },
        h("a", { href: getResourceUrl(props.resource) },
            h(Heading, { level: 3 }, r.doc.data.ad || r.title),
            h(HeroImage, { resource: props.resource }))));
};
const HeroImage = ({ resource }) => (h("img", { loading: 'lazy', class: "resource-card__featured-image", src: resource.heroImage, alt: resource.title }));

const moreResourcesCss = ".sc-more-resources-h{display:block}.resource-meta.sc-more-resources{display:flex;flex-direction:row;letter-spacing:var(--letter-spacing-5);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.resource-meta.sc-more-resources .type.sc-more-resources{font-weight:500;font-size:10px;color:var(--c-carbon-900);text-transform:uppercase;margin-right:24px}@media (max-width: 768px){.resource-meta.sc-more-resources .type.sc-more-resources{margin-right:0}}.resource-meta.sc-more-resources .tags.sc-more-resources{color:var(--c-indigo-600);font-size:10px;text-transform:uppercase}.resource-meta.sc-more-resources .tags.sc-more-resources span.sc-more-resources{display:inline-block}.resource-meta.sc-more-resources .tags.sc-more-resources .sep.sc-more-resources{display:inline-block;height:11px;width:1px;margin:0 6px -2px;background:var(--c-indigo-300)}@media (max-width: 768px){.resource-meta.sc-more-resources{flex-direction:column;gap:8px}}.resource-card.sc-more-resources{display:flex;flex-direction:column;height:100%}.resource-card.sc-more-resources a.sc-more-resources{color:var(--c-carbon-900)}.resource-card.sc-more-resources h1.sc-more-resources,.resource-card.sc-more-resources h2.sc-more-resources,.resource-card.sc-more-resources h3.sc-more-resources,.resource-card.sc-more-resources h4.sc-more-resources,.resource-card.sc-more-resources h5.sc-more-resources{margin-top:0}.resource-card.sc-more-resources p.sc-more-resources{color:var(--c-indigo-900);font-size:16px;line-height:160%}.resource-card.sc-more-resources .resource-meta.sc-more-resources{margin-bottom:12px}.resource-card__content.sc-more-resources{flex:1}.resource-card--meta-top.sc-more-resources .resource-meta.sc-more-resources{margin-bottom:24px}.resource-card__image.sc-more-resources{display:block;overflow:hidden;margin-bottom:24px;line-height:0}.resource-card__featured-image.sc-more-resources{max-width:100%;transition:200ms transform cubic-bezier(0.32, 0.72, 0, 1)}.resource-card__featured-image.sc-more-resources:hover{transform:scale(1.05)}.resource-card--ad.sc-more-resources{background:var(--c-indigo-200);padding:30px}.resource-author-item.sc-more-resources .resource-author.sc-more-resources{display:grid;grid-template-columns:32px 1fr;column-gap:8px}.resource-author-item.sc-more-resources .author-info.sc-more-resources{display:flex;flex-direction:column;justify-content:center}.resource-author-item.sc-more-resources .author-avatar.sc-more-resources{max-height:32px;border-radius:100%}.resource-author-item.sc-more-resources .author-name.sc-more-resources{font-size:14px;color:var(--c-carbon-900)}.resource-author-item.sc-more-resources .author-title.sc-more-resources{font-size:12px;color:var(--c-indigo-600)}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources{display:block;line-height:32px}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources .author-name.sc-more-resources{display:inline-block;vertical-align:middle;font-size:16px;color:var(--c-indigo-700)}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources .author-name.sc-more-resources:after{content:\", \"}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources .author-title.sc-more-resources{display:inline-block;vertical-align:middle;font-size:16px;margin-left:2px;color:var(--c-indigo-700)}";

const MoreResources = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showAuthor = false;
        this.showDescription = true;
        this.prismicEndpoint = 'https://ionicframeworkcom.cdn.prismic.io/api/v2';
    }
    async componentWillLoad() {
        const client = Client(this.prismicEndpoint);
        const requests = this.resources.map(r => client.getByUID(r.type, r.uid, null));
        try {
            this.docs = await (await Promise.all(requests)).map(d => prismicDocToResource(d));
        }
        catch (e) {
            console.error('Unable to load more resources', e);
        }
    }
    render() {
        const { showAuthor, showDescription } = this;
        return (h(Host, null, h(Grid, null, this.docs.map(d => (h(Col, { md: 4, sm: 4, xs: 12, cols: 12, key: d.id }, h(ResourceCard, { resource: d, showDescription: showDescription, showAuthor: showAuthor })))))));
    }
};
MoreResources.style = moreResourcesCss;

export { MoreResources as more_resources };
