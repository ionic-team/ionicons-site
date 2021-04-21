import { h } from './index-93b10a2a.js';
import { a as applyProps } from './Button-36d57e33.js';

const Blockquote = (props, children) => (h("blockquote", Object.assign({}, applyProps(props, { class: 'ui-blockquote' })), children));

const Breadcrumbs = (props, children) => (h("ul", Object.assign({}, applyProps(props, { class: 'ui-breadcrumbs' })), children));

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
const Breakpoint = (_a, children) => {
    var { xs, sm, md, lg, xl, display = 'block' } = _a, props = __rest(_a, ["xs", "sm", "md", "lg", "xl", "display"]);
    const Tag = display === 'inline' ? 'span' : 'div';
    //cascade values up breakpoints
    xs = xs !== undefined ? xs : false;
    sm = sm !== undefined ? sm : xs;
    md = md !== undefined ? md : sm;
    lg = lg !== undefined ? lg : md;
    xl = xl !== undefined ? xl : lg;
    const breakpoints = [['xs', xs], ['sm', sm], ['md', md], ['lg', lg], ['xl', xl]];
    //Combine classes into string based on breakpoint values
    const className = breakpoints.reduce((acc, cur) => `${acc} ${cur[1] ? `ui-breakpoint-${cur[0]}` : ``}`, 'ui-breakpoint');
    return (h(Tag, Object.assign({}, applyProps(props, { class: className }), { style: { '--display': display } }), children));
};

const AnchorButton = (props, children) => h("a", Object.assign({}, applyProps(props, { class: 'ui-button' })), children);

const Card = (props, children) => (h("div", Object.assign({}, applyProps(props, {
    class: `ui-card${props.embelish !== false ? ' ui-card--embelish' : ''}`,
})), children));

const CardContent = (props, children) => (h("div", Object.assign({}, applyProps(props, { class: 'ui-card-content' })), children));

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
const DateTime = (_a) => {
    var { date, format = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    } } = _a, props = __rest$1(_a, ["date", "format"]);
    const formatter = new Intl.DateTimeFormat('en-US', Object.assign({}, format));
    return h("time", Object.assign({}, applyProps(props, { class: 'ui-date' })), formatter.format(date));
};

var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
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
const applyClasses = (cols, xs, sm, md, lg) => {
    const classes = [];
    // General class, doesn't apply column behavior but
    // can be useful for selectors
    classes.push('ui-col');
    if (cols) {
        classes.push(`ui-col-${cols}`);
    }
    else {
        // If no "cols" is specified, add a default 12 to make content go full width
        // in the smallest viewport sizes
        classes.push(`ui-col-12`);
    }
    if (xs) {
        classes.push(`ui-col-xs-${xs}`);
    }
    if (sm) {
        classes.push(`ui-col-sm-${sm}`);
    }
    if (md) {
        classes.push(`ui-col-md-${md}`);
    }
    if (lg) {
        classes.push(`ui-col-lg-${lg}`);
    }
    return classes.join(' ');
};
const Col = (_a, children) => {
    var { cols, xs, sm, md, lg } = _a, props = __rest$2(_a, ["cols", "xs", "sm", "md", "lg"]);
    return (h("div", Object.assign({}, applyProps(props, { class: applyClasses(cols, xs, sm, md, lg) })), children));
};

var __rest$3 = (undefined && undefined.__rest) || function (s, e) {
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
/*
interface GridProps {
  bordered?: boolean;

  xsCols?: number | null;
  smCols?: number | null;
  mdCols?: number | null;
  lgCols?: number | null;

  cols?: number;
  [key: string]: any;
}

const getColClasses = (
  xsCols: number | null,
  smCols: number | null,
  mdCols: number | null,
  lgCols: number | null) => (
    [ ['xs', xsCols], ['sm', smCols], ['md', mdCols], ['lg', lgCols] ].reduce((str, c) => {
      const ct = c[0];
      const cn = c[1];
      if (cn) {
        return `${str} ui-grid-cols-${ct}-${cn}`;
      }
      return str;
    }, '')
  );
*/
const Grid = (_a, children) => {
    var props = __rest$3(_a, []);
    return h("div", Object.assign({}, applyProps(props, { class: `ui-grid` })), children);
};

// import { h } from '@stencil/core';
const listeners = [];
const visible = [];
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((e) => {
        if (e.intersectionRatio > 0) {
            if (visible.indexOf(e.target) < 0) {
                visible.push(e.target);
            }
        }
        else {
            visible.splice(visible.indexOf(e.target), 1);
        }
    });
    listeners.forEach((l) => l({ entries, observer, visible }));
}, { threshold: [0, 1] });
const addListener = (listener) => listeners.push(listener);
const removeListener = (listener) => listeners.splice(listeners.indexOf(listener), 1);
const observe = (el) => el && observer.observe(el);

var __rest$4 = (undefined && undefined.__rest) || function (s, e) {
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
const Heading = (_a, children) => {
    var { level = 3, poster = false, as } = _a, props = __rest$4(_a, ["level", "poster", "as"]);
    const Tag = as ? as : (poster ? 'h1' : `h${level}`);
    const classes = [
        `ui-heading`,
        `${poster ? `ui-poster-${level}` : `ui-heading-${level}`}`
    ];
    return (h(Tag, Object.assign({}, applyProps(props, { class: classes.join(' ') }), { ref: (e) => observe(e) }), children));
};

var __rest$5 = (undefined && undefined.__rest) || function (s, e) {
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
const Paragraph = (_a, children) => {
    var { level = 3, leading = 'body' } = _a, props = __rest$5(_a, ["level", "leading"]);
    const classes = [
        `ui-paragraph`,
        `ui-paragraph-${level}`,
        `ui-paragraph--${leading}`,
    ];
    return (h("p", Object.assign({}, applyProps(props, { class: classes.join(' ') })), children));
};

var __rest$6 = (undefined && undefined.__rest) || function (s, e) {
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
const ResponsiveContainer = (_a, children) => {
    var { as = 'div' } = _a, props = __rest$6(_a, ["as"]);
    const Tag = as;
    return h(Tag, Object.assign({}, applyProps(props, { class: 'ui-container' })), children);
};

var __rest$7 = (undefined && undefined.__rest) || function (s, e) {
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
const Skeleton = (_a, children) => {
    var { animated = true } = _a, props = __rest$7(_a, ["animated"]);
    return (h("div", Object.assign({}, applyProps(props, { class: `ui-skeleton${animated ? ` ui-skeleton--animated` : ``}` })), children));
};

const Text = (props, children) => h("p", Object.assign({}, applyProps(props, { class: 'ui-text' })), children);

var __rest$8 = (undefined && undefined.__rest) || function (s, e) {
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
const ThemeProvider = (_a, children) => {
    var { type = 'base' } = _a, props = __rest$8(_a, ["type"]);
    return (h("div", Object.assign({}, applyProps(props, { class: `ui-theme--${type}` })), children));
};

export { Blockquote as B, Col as C, Grid as G, Heading as H, Paragraph as P, ResponsiveContainer as R, ThemeProvider as T, Card as a, CardContent as b, Breakpoint as c };
