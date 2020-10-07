import { g as getRenderingRef, f as forceUpdate, e as Build, h } from './index-b94df3cd.js';
import { c as createCommonjsModule, a as commonjsGlobal, u as unwrapExports } from './_commonjsHelpers-23c0f84c.js';
import { a as applyProps } from './Button-5903c6ca.js';
import { P as Paragraph, H as Heading, B as Blockquote } from './index-f9c24548.js';

var prismicRichtext_min = createCommonjsModule(function (module, exports) {
!function(e,t){"object"=='object'&&"object"=='object'?module.exports=t():"function"==typeof undefined&&undefined.amd?undefined("PrismicRichtext",[],t):"object"=='object'?exports.PrismicRichtext=t():e.PrismicRichtext=t();}("undefined"!=typeof self?self:commonjsGlobal,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){var r=n(3);e.exports=function(e){return function t(n){return 0===arguments.length||r(n)?t:e.apply(this,arguments)}};},function(e,t,n){var r=n(0),o=n(3);e.exports=function(e){return function t(n,i){switch(arguments.length){case 0:return t;case 1:return o(n)?t:r(function(t){return e(n,t)});default:return o(n)&&o(i)?t:o(n)?r(function(t){return e(t,i)}):o(i)?r(function(t){return e(n,t)}):e(n,i)}}};},function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.PRIORITIES=t.NODE_TYPES=void 0;var i={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"};t.NODE_TYPES=i;var u=(o(r={},i.heading1,4),o(r,i.heading2,4),o(r,i.heading3,4),o(r,i.heading4,4),o(r,i.heading5,4),o(r,i.heading6,4),o(r,i.paragraph,3),o(r,i.preformatted,5),o(r,i.strong,6),o(r,i.em,6),o(r,i.oList,1),o(r,i.list,1),o(r,i.listItem,1),o(r,i.oListItem,1),o(r,i.image,1),o(r,i.embed,1),o(r,i.hyperlink,3),o(r,i.label,4),o(r,i.span,7),r);t.PRIORITIES=u;},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(12)),o=d(n(15)),i=d(n(16)),u=d(n(17)),c=d(n(21)),a=d(n(7)),l=n(23),f=n(2),s=n(8);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function h(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e,t){var n=t.others.reduce(function(n,r){var o=n.inner,i=n.outer,u=function(e,t,n){return n.start<t.start?{inner:s.SpanNode.slice(n,t.start,n.end,e),outer:s.SpanNode.slice(n,n.start,t.start,e)}:n.end>t.end?{inner:s.SpanNode.slice(n,n.start,t.end,e),outer:s.SpanNode.slice(n,t.end,n.end,e)}:{inner:n}}(e,t.elected,r);return {inner:o.concat(u.inner),outer:u.outer?i.concat(u.outer):i}},{inner:[],outer:[]}),r=n.inner,o=n.outer;return [t.elected.setChildren(x(e,r,t.elected.boundaries()))].concat(b(e,o))}function v(e){return function(e,t){return t.reduce(function(t,n){var r=(0,c.default)(t);if(r){if(r.some(function(e){return e.isParentOf(n)}))return (0,u.default)(t).concat([r.concat(n)]);var o=(0,c.default)(r);return o&&e(o,n)?(0,u.default)(t).concat([r.concat(n)]):t.concat([[n]])}return [[n]]},[])}(function(e,t){return e.end>=t.start},(0,i.default)([function(e,t){return e.start-t.start},function(e,t){return e.end-t.end}],e))}function m(e){if(0===e.length)throw new Error("Unable to elect node on empty list");var t=h(e.sort(function(e,t){if(e.isParentOf(t))return -1;if(t.isParentOf(e))return 1;var n=f.PRIORITIES[e.type]-f.PRIORITIES[t.type];return 0===n?e.text.length-t.text.length:n}));return {elected:t[0],others:t.slice(1)}}function x(e,t,n){if(t.length>0)return function(e,t,n){return t.reduce(function(r,o,i){var u=[],c=0===i&&o.start>n.lower,a=i===t.length-1&&n.upper>o.end;if(c){var l=new s.TextNode(n.lower,o.start,e.slice(n.lower,o.start));u=u.concat(l);}else {var f=t[i-1];if(f&&o.start>f.end){var d=e.slice(f.end,o.start),p=new s.TextNode(f.end,o.start,d);u=u.concat(p);}}if(u=u.concat(o),a){var h=new s.TextNode(o.end,n.upper,e.slice(o.end,n.upper));u=u.concat(h);}return r.concat(u)},[])}(e,b(e,t),n);var r=e.slice(n.lower,n.upper);return [new s.TextNode(n.lower,n.upper,r)]}function b(e,t){var n=v((0,o.default)(function(e){return e.start},t)).map(m),i=(0,r.default)(n.map(function(t){return y(e,t)}));return (0,o.default)(function(e){return e.start},i)}var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);}var t,n,r;return t=e,r=[{key:"fromRichText",value:function(e){return {key:(0,a.default)(),children:e.reduce(function(e,t,n){if(l.RichTextBlock.isEmbedBlock(t.type)||l.RichTextBlock.isImageBlock(t.type))return e.concat(new s.BlockNode(t.type,t));var r=function(e){var t=e.spans.map(function(t){var n=e.text.slice(t.start,t.end);return new s.SpanNode(t.start,t.end,t.type,n,[],t)}),n={lower:0,upper:e.text.length};return x(e.text,t,n)}(t),o=e[e.length-1];if(l.RichTextBlock.isListItem(t.type)&&o&&o instanceof s.ListBlockNode){var i=new s.ListItemBlockNode(t,r),c=o.addChild(i);return (0,u.default)(e).concat(c)}if(l.RichTextBlock.isOrderedListItem(t.type)&&o&&o instanceof s.OrderedListBlockNode){var a=new s.OrderedListItemBlockNode(t,r),f=o.addChild(a);return (0,u.default)(e).concat(f)}if(l.RichTextBlock.isListItem(t.type)){var d=new s.ListItemBlockNode(t,r),p=new s.ListBlockNode(l.RichTextBlock.emptyList(),[d]);return e.concat(p)}if(l.RichTextBlock.isOrderedListItem(t.type)){var h=new s.OrderedListItemBlockNode(t,r),y=new s.OrderedListBlockNode(l.RichTextBlock.emptyOrderedList(),[h]);return e.concat(y)}return e.concat(new s.BlockNode(t.type,t,r))},[])}}}],(n=null)&&p(t.prototype,n),r&&p(t,r),e}();t.default=g;},function(e,t){e.exports=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};},function(e,t){e.exports=function(e){return "[object String]"===Object.prototype.toString.call(e)};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(new Date).getTime();return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ListBlockNode=t.OrderedListBlockNode=t.OrderedListItemBlockNode=t.ListItemBlockNode=t.BlockNode=t.TextNode=t.SpanNode=t.Node=void 0;var r,o=(r=n(7))&&r.__esModule?r:{default:r},i=n(2);function u(e){return (u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function l(e,t){return !t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return (f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t);}function d(e,t){return (d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var h=function e(t,n,r){p(this,e),this.key=(0,o.default)(),this.type=t,this.element=n,this.children=r;};t.Node=h;var y=function(e){function t(e,n,r,o,i,u){var c;return p(this,t),(c=l(this,f(t).call(this,r,u,i))).start=e,c.end=n,c.text=o,c.children=i,c}return s(t,h),a(t,[{key:"boundaries",value:function(){return {lower:this.start,upper:this.end}}},{key:"isParentOf",value:function(e){return this.start<=e.start&&this.end>=e.end}},{key:"setChildren",value:function(e){return new t(this.start,this.end,this.type,this.text,e,this.element)}}],[{key:"slice",value:function(e,n,r,o){return new t(n,r,e.type,o.slice(n,r),e.children,e.element)}}]),t}();t.SpanNode=y;var v=function(e){function t(e,n,r){p(this,t);var o={type:i.NODE_TYPES.span,start:e,end:n,text:r};return l(this,f(t).call(this,e,n,i.NODE_TYPES.span,r,[],o))}return s(t,y),t}();t.TextNode=v;var m=function(e){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return p(this,t),l(this,f(t).call(this,e,n,r))}return s(t,h),t}();t.BlockNode=m;var x=function(e){function t(e,n){return p(this,t),l(this,f(t).call(this,i.NODE_TYPES.listItem,e,n))}return s(t,m),t}();t.ListItemBlockNode=x;var b=function(e){function t(e,n){return p(this,t),l(this,f(t).call(this,i.NODE_TYPES.oListItem,e,n))}return s(t,m),t}();t.OrderedListItemBlockNode=b;var g=function(e){function t(e,n){return p(this,t),l(this,f(t).call(this,i.NODE_TYPES.oList,e,n))}return s(t,m),a(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.OrderedListBlockNode=g;var O=function(e){function t(e,n){return p(this,t),l(this,f(t).call(this,i.NODE_TYPES.list,e,n))}return s(t,m),a(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.ListBlockNode=O;},function(e,t,n){e.exports=n(10);},function(e,t,n){"use strict";var r=c(n(11)),o=c(n(4)),i=c(n(24)),u=n(2);function c(e){return e&&e.__esModule?e:{default:e}}e.exports={asText:r.default,asTree:o.default.fromRichText,serialize:i.default,Elements:u.NODE_TYPES};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){var n="string"==typeof t?t:" ";return e.map(function(e){return e.text}).join(n)};t.default=r;},function(e,t,n){var r=n(0)(n(13)(!0));e.exports=r;},function(e,t,n){var r=n(14);e.exports=function(e){return function t(n){for(var o,i,u,c=[],a=0,l=n.length;a<l;){if(r(n[a]))for(u=0,i=(o=e?t(n[a]):n[a]).length;u<i;)c[c.length]=o[u],u+=1;else c[c.length]=n[a];a+=1;}return c}};},function(e,t,n){var r=n(0),o=n(5),i=n(6),u=r(function(e){return !!o(e)||!!e&&("object"==typeof e&&(!i(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))});e.exports=u;},function(e,t,n){var r=n(1)(function(e,t){return Array.prototype.slice.call(t,0).sort(function(t,n){var r=e(t),o=e(n);return r<o?-1:r>o?1:0})});e.exports=r;},function(e,t,n){var r=n(1)(function(e,t){return Array.prototype.slice.call(t,0).sort(function(t,n){for(var r=0,o=0;0===r&&o<e.length;)r=e[o](t,n),o+=1;return r})});e.exports=r;},function(e,t,n){var r=n(18)(0,-1);e.exports=r;},function(e,t,n){var r=n(19),o=n(20)(r("slice",function(e,t,n){return Array.prototype.slice.call(n,e,t)}));e.exports=o;},function(e,t,n){var r=n(5);e.exports=function(e,t){return function(){var n=arguments.length;if(0===n)return t();var o=arguments[n-1];return r(o)||"function"!=typeof o[e]?t.apply(this,arguments):o[e].apply(o,Array.prototype.slice.call(arguments,0,n-1))}};},function(e,t,n){var r=n(0),o=n(1),i=n(3);e.exports=function(e){return function t(n,u,c){switch(arguments.length){case 0:return t;case 1:return i(n)?t:o(function(t,r){return e(n,t,r)});case 2:return i(n)&&i(u)?t:i(n)?o(function(t,n){return e(t,u,n)}):i(u)?o(function(t,r){return e(n,t,r)}):r(function(t){return e(n,u,t)});default:return i(n)&&i(u)&&i(c)?t:i(n)&&i(u)?o(function(t,n){return e(t,n,c)}):i(n)&&i(c)?o(function(t,n){return e(t,u,n)}):i(u)&&i(c)?o(function(t,r){return e(n,t,r)}):i(n)?r(function(t){return e(t,u,c)}):i(u)?r(function(t){return e(n,t,c)}):i(c)?r(function(t){return e(n,u,t)}):e(n,u,c)}}};},function(e,t,n){var r=n(22)(-1);e.exports=r;},function(e,t,n){var r=n(1),o=n(6),i=r(function(e,t){var n=e<0?t.length+e:e;return o(t)?t.charAt(n):t[n]});e.exports=i;},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RichTextBlock=void 0;var r=n(2);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.text=n,this.spans=r;}var t,n,i;return t=e,i=[{key:"isEmbedBlock",value:function(e){return e===r.NODE_TYPES.embed}},{key:"isImageBlock",value:function(e){return e===r.NODE_TYPES.image}},{key:"isList",value:function(e){return e===r.NODE_TYPES.list}},{key:"isOrderedList",value:function(e){return e===r.NODE_TYPES.oList}},{key:"isListItem",value:function(e){return e===r.NODE_TYPES.listItem}},{key:"isOrderedListItem",value:function(e){return e===r.NODE_TYPES.oListItem}},{key:"emptyList",value:function(){return {type:r.NODE_TYPES.list,spans:[],text:""}}},{key:"emptyOrderedList",value:function(){return {type:r.NODE_TYPES.oList,spans:[],text:""}}}],(n=null)&&o(t.prototype,n),i&&o(t,i),e}();t.RichTextBlock=i;},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(4))&&r.__esModule?r:{default:r},i=n(8);var u=function(e,t,n){return o.default.fromRichText(e).children.map(function(e,r){return function(e,t,n,r){return function e(n,o){var u=n instanceof i.SpanNode?n.text:null,c=n.children.reduce(function(t,n,r){return t.concat([e(n,r)])},[]),a=r&&r(n.type,n.element,u,c,o);return a||t(n.type,n.element,u,c,o)}(e,n)}(e,t,r,n)})};t.default=u;}])});
});

const PrismicRichTextLib = /*@__PURE__*/unwrapExports(prismicRichtext_min);

var prismicHelpers_min = createCommonjsModule(function (module, exports) {
!function(e,t){"object"=='object'&&"object"=='object'?module.exports=t():"function"==typeof undefined&&undefined.amd?undefined("PrismicHelpers",[],t):"object"=='object'?exports.PrismicHelpers=t():e.PrismicHelpers=t();}("undefined"!=typeof self?self:commonjsGlobal,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1);},function(e,t,n){var r=n(2),o=n(3);e.exports={Link:r,Date:o};},function(e,t,n){e.exports={url:function(e,t){if(e&&[e.link_type,e._linkType,e.linkType].some((function(e){return e&&["Document","Link.Document","Link.document"].includes(e)}))&&t&&"function"==typeof t){var n=t(e);if(n)return n}return e&&e.url?e.url:""}};},function(e,t){e.exports=function(e){if(!e)return null;var t=24==e.length?"".concat(e.substring(0,22),":").concat(e.substring(22,24)):e;return new Date(t)};}])}));
});

const PrismicHelpers = /*@__PURE__*/unwrapExports(prismicHelpers_min);

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = ({ on }) => {
    const elmsToUpdate = new Map();
    if (typeof getRenderingRef === 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        on('dispose', () => {
            elmsToUpdate.clear();
        });
        on('get', (propName) => {
            const elm = getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        });
        on('set', (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        });
        on('reset', () => {
            elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
            cleanupElements(elmsToUpdate);
        });
    }
};

const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    let states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        const unReset = on('reset', () => cb(defaultState[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => subscriptions.forEach((subscription) => {
        if (subscription.set) {
            on('set', subscription.set);
        }
        if (subscription.get) {
            on('get', subscription.get);
        }
        if (subscription.reset) {
            on('reset', subscription.reset);
        }
    });
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    stencilSubscription(map);
    return map;
};

let defaultRouter;
const createRouter = (opts) => {
    var _a;
    const win = window;
    const url = new URL(win.location.href);
    const parseURL = (_a = opts === null || opts === void 0 ? void 0 : opts.parseURL) !== null && _a !== void 0 ? _a : DEFAULT_PARSE_URL;
    const { state, onChange, dispose } = createStore({
        url,
        activePath: parseURL(url)
    }, (newV, oldV, prop) => {
        if (prop === 'url') {
            return newV.href !== oldV.href;
        }
        return newV !== oldV;
    });
    const push = (href) => {
        history.pushState(null, null, href);
        const url = new URL(href, document.baseURI);
        state.url = url;
        state.activePath = parseURL(url);
    };
    const match = (routes) => {
        const { activePath } = state;
        for (let route of routes) {
            const params = matchPath(activePath, route.path);
            if (params) {
                if (route.to != null) {
                    push(route.to);
                    return match(routes);
                }
                else {
                    return { params, route };
                }
            }
        }
        return undefined;
    };
    const navigationChanged = () => {
        const url = new URL(win.location.href);
        state.url = url;
        state.activePath = parseURL(url);
    };
    const Switch = (_, childrenRoutes) => {
        const result = match(childrenRoutes);
        if (result) {
            if (typeof result.route.jsx === 'function') {
                return result.route.jsx(result.params);
            }
            else {
                return result.route.jsx;
            }
        }
    };
    const disposeRouter = () => {
        defaultRouter = undefined;
        win.removeEventListener('popstate', navigationChanged);
        dispose();
    };
    const router = defaultRouter = {
        Switch,
        get url() {
            return state.url;
        },
        get activePath() {
            return state.activePath;
        },
        push,
        onChange: onChange,
        dispose: disposeRouter,
    };
    // Initial update
    navigationChanged();
    // Listen URL changes
    win.addEventListener('popstate', navigationChanged);
    return router;
};
const Route = (props, children) => {
    var _a;
    if ('to' in props) {
        return {
            path: props.path,
            to: props.to,
        };
    }
    if (Build.isDev && props.render && children.length > 0) {
        console.warn('Route: if `render` is provided, the component should not have any childreen');
    }
    return {
        path: props.path,
        id: props.id,
        jsx: (_a = props.render) !== null && _a !== void 0 ? _a : children,
    };
};
const href = (href, router = defaultRouter) => {
    if (Build.isDev && !router) {
        throw new Error('Router must be defined in href');
    }
    return {
        href,
        onClick: (ev) => {
            ev.preventDefault();
            router.push(href);
        },
    };
};
const matchPath = (pathname, path) => {
    if (typeof path === 'string') {
        if (path === pathname) {
            return {};
        }
    }
    else if (typeof path === 'function') {
        const params = path(pathname);
        if (params) {
            return params === true
                ? {}
                : { ...params };
        }
    }
    else {
        const results = path.exec(pathname);
        if (results) {
            path.lastIndex = 0;
            return { ...results };
        }
    }
    return undefined;
};
const DEFAULT_PARSE_URL = (url) => {
    return url.pathname.toLowerCase();
};
const NotFound = () => ({});

/**
 * TS adaption of https://github.com/pillarjs/path-to-regexp/blob/master/index.js
 */
/**
 * Default configs.
 */
const DEFAULT_DELIMITER = '/';
const DEFAULT_DELIMITERS = './';
/**
 * The main path matching regexp utility.
 */
const PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined]
    '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 */
const parse = (str, options) => {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
    var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS;
    var pathEscaped = false;
    var res;
    while ((res = PATH_REGEXP.exec(str)) !== null) {
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        // Ignore already escaped sequences.
        if (escaped) {
            path += escaped[1];
            pathEscaped = true;
            continue;
        }
        var prev = '';
        var next = str[index];
        var name = res[2];
        var capture = res[3];
        var group = res[4];
        var modifier = res[5];
        if (!pathEscaped && path.length) {
            var k = path.length - 1;
            if (delimiters.indexOf(path[k]) > -1) {
                prev = path[k];
                path = path.slice(0, k);
            }
        }
        // Push the current path onto the tokens.
        if (path) {
            tokens.push(path);
            path = '';
            pathEscaped = false;
        }
        var partial = prev !== '' && next !== undefined && next !== prev;
        var repeat = modifier === '+' || modifier === '*';
        var optional = modifier === '?' || modifier === '*';
        var delimiter = prev || defaultDelimiter;
        var pattern = capture || group;
        tokens.push({
            name: name || key++,
            prefix: prev,
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            partial: partial,
            pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
        });
    }
    // Push any remaining characters.
    if (path || index < str.length) {
        tokens.push(path + str.substr(index));
    }
    return tokens;
};
/**
 * Escape a regular expression string.
 */
const escapeString = (str) => {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
};
/**
 * Escape the capturing group by escaping special characters and meaning.
 */
const escapeGroup = (group) => {
    return group.replace(/([=!:$/()])/g, '\\$1');
};
/**
 * Get the flags for a regexp from the options.
 */
const flags = (options) => {
    return options && options.sensitive ? '' : 'i';
};
/**
 * Pull out keys from a regexp.
 */
const regexpToRegexp = (path, keys) => {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: false,
                repeat: false,
                partial: false,
                pattern: null
            });
        }
    }
    return path;
};
/**
 * Transform an array into a regexp.
 */
const arrayToRegexp = (path, keys, options) => {
    var parts = [];
    for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp(path[i], keys, options).source);
    }
    return new RegExp('(?:' + parts.join('|') + ')', flags(options));
};
/**
 * Create a path regexp from string input.
 */
const stringToRegexp = (path, keys, options) => {
    return tokensToRegExp(parse(path, options), keys, options);
};
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
const tokensToRegExp = (tokens, keys, options) => {
    options = options || {};
    var strict = options.strict;
    var end = options.end !== false;
    var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
    var delimiters = options.delimiters || DEFAULT_DELIMITERS;
    var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
    var route = '';
    var isEndDelimited = false;
    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (typeof token === 'string') {
            route += escapeString(token);
            isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
        }
        else {
            var prefix = escapeString(token.prefix || '');
            var capture = token.repeat
                ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*'
                : token.pattern;
            if (keys)
                keys.push(token);
            if (token.optional) {
                if (token.partial) {
                    route += prefix + '(' + capture + ')?';
                }
                else {
                    route += '(?:' + prefix + '(' + capture + '))?';
                }
            }
            else {
                route += prefix + '(' + capture + ')';
            }
        }
    }
    if (end) {
        if (!strict)
            route += '(?:' + delimiter + ')?';
        route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
    }
    else {
        if (!strict)
            route += '(?:' + delimiter + '(?=' + endsWith + '))?';
        if (!isEndDelimited)
            route += '(?=' + delimiter + '|' + endsWith + ')';
    }
    return new RegExp('^' + route, flags(options));
};
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
const pathToRegexp = (path, keys, options) => {
    if (path instanceof RegExp) {
        return regexpToRegexp(path, keys);
    }
    if (Array.isArray(path)) {
        return arrayToRegexp(path, keys, options);
    }
    return stringToRegexp(path, keys, options);
};

let cacheCount = 0;
const patternCache = {};
const cacheLimit = 10000;
// Memoized function for creating the path match regex
const compilePath = (pattern, options) => {
    const cacheKey = `${options.end}${options.strict}`;
    const cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
    const cachePattern = JSON.stringify(pattern);
    if (cache[cachePattern]) {
        return cache[cachePattern];
    }
    const keys = [];
    const re = pathToRegexp(pattern, keys, options);
    const compiledPattern = { re, keys };
    if (cacheCount < cacheLimit) {
        cache[cachePattern] = compiledPattern;
        cacheCount += 1;
    }
    return compiledPattern;
};
const match = (pathname, options = {}) => {
    const { exact = false, strict = false } = options;
    const { re, keys } = compilePath(pathname, { end: exact, strict });
    return (path) => {
        const match = re.exec(path);
        if (!match) {
            return undefined;
        }
        const [url, ...values] = match;
        const isExact = path === url;
        if (exact && !isExact) {
            return undefined;
        }
        return keys.reduce((memo, key, index) => {
            memo[key.name] = values[index];
            return memo;
        }, {});
    };
};

function createScript({ property, src, id }) {
    if (!window) {
        return;
    }
    (function (src, id) {
        var js, fjs = document.getElementsByTagName('script')[0], t = window[property] || {};
        if (document.getElementById(id)) {
            return t;
        }
        js = document.createElement('script');
        js.id = id;
        js.src = src;
        fjs.parentNode.insertBefore(js, fjs);
        t._e = [];
        t.ready = function (f) {
            t._e.push(f);
        };
        return t;
    })(src, id);
}
const embeds = {
    Twitter: {
        property: 'twttr',
        src: 'https://platform.twitter.com/widgets.js',
        id: 'twitter-wjs',
        load: function () {
            if (window && window.twttr) {
                window.twttr.widgets.load();
            }
        },
    },
    Facebook: {
        property: 'FB',
        src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3',
        id: 'fb-wjs',
        load: (ref) => {
            if (window && window.FB) {
                window.FB.XFBML.parse(ref);
            }
        },
    },
    Instagram: {
        property: 'instgrm',
        src: 'https://www.instagram.com/embed.js',
        id: 'insta-wjs',
        load: () => {
            if (window && window.instgrm) {
                window.instgrm.Embeds.process();
            }
        },
    },
};

function slugify(text) {
    if (!text) {
        return '';
    }
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/\.+/g, '-') // Replace periods with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function htmlSerializer(type, element, _content, children) {
    // give headings an ID
    switch (type) {
        case 'heading1':
        case 'heading2':
        case 'heading3':
        case 'heading4':
        case 'heading5':
        case 'heading6':
            const level = parseInt(type[type.length - 1], 10);
            const id = slugify(element.text);
            return (h(Heading, { level: level, id: id }, children));
        case 'paragraph':
            return h(Paragraph, null, children);
        case 'preformatted':
            return (h("pre", null,
                h("code", null, children)));
        // Return null to stick with the default behavior for all other elements
        default:
            return null;
    }
}
function slugifyHeading(children) {
    return children.reduce((id, c) => {
        return id + slugify(c[0]);
    }, '');
}
function serialize(linkResolver, elements, type, element, content, children, index, routerLink = false, router = null) {
    if (elements[type]) {
        return serializeElement(elements[type], type, element, content, children, index);
    }
    const Elements = PrismicRichTextLib.Elements;
    switch (type) {
        case Elements.heading1:
            return serializeStandardTag('h1', element, children, index, { id: slugifyHeading(children) });
        case Elements.heading2:
            return serializeStandardTag('h2', element, children, index, { id: slugifyHeading(children) });
        case Elements.heading3:
            return serializeStandardTag('h3', element, children, index, { id: slugifyHeading(children) });
        case Elements.heading4:
            return serializeStandardTag('h4', element, children, index, { id: slugifyHeading(children) });
        case Elements.heading5:
            return serializeStandardTag('h5', element, children, index, { id: slugifyHeading(children) });
        case Elements.heading6:
            return serializeStandardTag('h6', element, children, index, { id: slugifyHeading(children) });
        case Elements.paragraph:
            return serializeStandardTag('p', element, children, index);
        case Elements.preformatted:
            return serializeStandardTag('pre', element, children, index);
        case Elements.strong:
            return serializeStandardTag('strong', element, children, index);
        case Elements.em:
            return serializeStandardTag('em', element, children, index);
        case Elements.listItem:
            return serializeStandardTag('li', element, children, index);
        case Elements.oListItem:
            return serializeStandardTag('li', element, children, index);
        case Elements.list:
            return serializeStandardTag('ul', element, children, index);
        case Elements.oList:
            return serializeStandardTag('ol', element, children, index);
        case Elements.image:
            return serializeImage(linkResolver, element, index);
        case Elements.embed:
            return serializeEmbed(element, index);
        case Elements.hyperlink:
            return serializeHyperlink(linkResolver, element, children, index, routerLink, router);
        case Elements.label:
            return serializeLabel(element, children, index);
        case Elements.span:
            return serializeSpan(content);
        default:
            return null;
    }
}
function propsWithUniqueKey(props = {}, key) {
    return Object.assign(props, { key });
}
function serializeElement(Element, type, props, _content, children, index) {
    return (h(Element, Object.assign({ key: `element-${type}-${index + 1}` }, props, (type === 'image' ? { src: props.url, url: undefined } : null)), children && children.length ? children : undefined));
}
function serializeStandardTag(Tag, element, children, key, extra = {}) {
    const props = element.label ? Object.assign(extra, { className: element.label }) : extra;
    return h(Tag, Object.assign({}, propsWithUniqueKey(props, key)), children);
}
function serializeHyperlink(linkResolver, element, children, key, routerLink = false, router = null) {
    const targetAttr = element.data.target ? { target: element.data.target } : {};
    const relAttr = element.data.target ? { rel: 'noopener' } : {};
    let href$1 = PrismicHelpers.Link.url(element.data, linkResolver);
    if (element.data.url) {
        const parsed = new URL(element.data.url);
        if (parsed.hostname.indexOf('.') < 0) {
            // Allow relative links
            href$1 = `/${parsed.hostname}${parsed.pathname + parsed.search + parsed.hash}`;
        }
    }
    const props = Object.assign({ href: href$1 }, targetAttr, relAttr);
    if (routerLink) {
        return h("a", Object.assign({}, propsWithUniqueKey(props, key), href(props.href, router)), children);
    }
    else {
        return h("a", Object.assign({}, propsWithUniqueKey(props, key)), children);
    }
}
function serializeLabel(element, children, key) {
    const props = element.data ? Object.assign({}, { className: element.data.label }) : {};
    return h("span", Object.assign({}, propsWithUniqueKey(props, key)), children);
}
function serializeSpan(content) {
    if (content) {
        return content.split('\n').reduce((acc, p) => {
            if (acc.length === 0) {
                return [p];
            }
            else {
                const brIndex = (acc.length + 1) / 2 - 1;
                const br = h("br", Object.assign({}, propsWithUniqueKey({}, brIndex)));
                return acc.concat([br, p]);
            }
        }, []);
    }
    else {
        return null;
    }
}
function serializeImage(linkResolver, element, key) {
    const linkUrl = element.linkTo ? PrismicHelpers.Link.url(element.linkTo, linkResolver) : null;
    const linkTarget = element.linkTo && element.linkTo.target ? { target: element.linkTo.target } : {};
    const relAttr = linkTarget.target ? { rel: 'noopener' } : {};
    const img = h("img", { loading: 'lazy', src: element.url, alt: element.alt || '' });
    return (h("p", Object.assign({}, propsWithUniqueKey({ className: [element.label || '', 'block-img'].join(' ') }, key)), linkUrl ? h("a", Object.assign({}, Object.assign({ href: linkUrl }, linkTarget, relAttr)), img) : img));
}
function serializeEmbed(element, key) {
    if (embeds[element.oembed.provider_name]) {
        createScript(embeds[element.oembed.provider_name]);
    }
    const className = `embed embed-${element.oembed.provider_name.toLowerCase()}`;
    const props = Object.assign({
        'data-oembed': element.oembed.embed_url,
        'data-oembed-type': element.oembed.type,
        'data-oembed-provider': element.oembed.provider_name,
        ref: (ref) => {
            if (embeds[element.oembed.provider_name]) {
                embeds[element.oembed.provider_name].load(ref);
            }
        },
    }, element.label ? { className: `${className} ${element.label}` } : { className });
    const embedHtml = h("div", { innerHTML: element.oembed.html });
    return h("div", Object.assign({}, propsWithUniqueKey(props, key)), embedHtml);
}
const asText = (structuredText) => PrismicRichTextLib.asText(structuredText, null);
const PrismicRichText = (_a, _, utils) => {
    var { richText, linkResolver, htmlSerializerProp = htmlSerializer, routerLink, router } = _a, props = __rest(_a, ["richText", "linkResolver", "htmlSerializerProp", "routerLink", "router"]);
    const serializedChildren = PrismicRichTextLib.serialize(richText, (...args) => serialize.apply(null, [linkResolver, {}, ...args, routerLink, router]), 
    // serialize.bind(null, linkResolver, {}), 
    htmlSerializerProp);
    return utils.map(serializedChildren, Child => {
        Child.vattrs = applyProps(props, Child.vattrs);
        return Child;
    });
};

const SliceNormalText = ({ slice }) => (h(PrismicRichText, { richText: slice.primary.content, htmlSerializer: htmlSerializer }));
const SliceRawHtml = ({ slice }) => (h("div", { class: "prismic-raw-html", innerHTML: slice.primary.html_content.map((c) => c.text).join('') }));
const SliceQuote = ({ slice }) => (h(Blockquote, null,
    h("div", null,
        h(PrismicRichText, { richText: slice.primary.quote })),
    slice.primary.name ? (h("cite", null,
        slice.primary.name,
        h("span", null, slice.primary.description))) : null));
const SliceFloatingImage = ({ slice }) => (h("figure", null,
    h("img", { loading: 'lazy', src: slice.primary.illustration.url, alt: slice.primary.illustration.alt })));
const SliceAd = ({ slice }) => (h("aside", null,
    h("a", { href: slice.primary.link.url, target: slice.primary.link.target }, slice.primary.text[0].text)));
const PrismicBodySlice = ({ slice, key }) => {
    switch (slice.slice_type) {
        case 'normal_text':
            return h(SliceNormalText, { slice: slice, key: key });
        case 'raw_html':
            return h(SliceRawHtml, { slice: slice, key: key });
        case 'quote':
            return h(SliceQuote, { slice: slice, key: key });
        case 'floating_image':
            return h(SliceFloatingImage, { slice: slice, key: key });
        case 'ad':
            return h(SliceAd, { slice: slice, key: key });
    }
    return null;
};

const PrismicContent = ({ content }) => content.map((c, i) => h(PrismicBodySlice, { slice: c, key: i }));

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const PrismicResponsiveImage = (_a) => {
    var { image, loading = 'lazy', params, width, height } = _a, props = __rest$1(_a, ["image", "loading", "params", "width", "height"]);
    const paramString = params ?
        Object.entries(params).reduce((acc, cur) => {
            const regex = new RegExp(`\\?.*${cur[0]}=`);
            if (!image.url.match(regex)) {
                return `${acc}${acc.match(/^\?$/) ? '' : '&'}${cur.join('=')}`;
            }
            return acc;
        }, image.url.match(/\?/) ? '' : '?') : '';
    const imageUrl = new URL(image.url + paramString);
    const dimensions = {
        'width': width ? width : imageUrl.searchParams.get('w'),
        'height': height ? height : imageUrl.searchParams.get('h'),
    };
    return (h("img", Object.assign({}, applyProps(props), { loading: loading, src: `${imageUrl}` }, { 'srcset': image['1x'] ? `${image['1x'].url}${paramString} 1x, ${imageUrl} 2x` : undefined }, dimensions, { alt: image.alt })));
};
