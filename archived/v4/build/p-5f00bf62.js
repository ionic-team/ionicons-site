let e,t,n=0,s=!1,o=!1,l=!1,i=!1,r=!1;const c=window,a=document,f=(HTMLElement,{t:0,s:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s)}),u=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),$={},d=new WeakMap,p=e=>d.get(e),m=(e,t)=>d.set(t.o=e,t),w=(e,t)=>t in e,h=e=>console.error(e),b=new Map,y=new Map,g=[],v=[],_=[],j=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&f.t?U(S):f.raf(S))},k=(e,t)=>{let n=0,s=0;for(;n<e.length&&(s=performance.now())<t;)try{e[n++](s)}catch(e){h(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},S=()=>{n++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){h(e)}e.length=0})(g);const e=2==(6&f.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;k(v,e),k(_,e),v.length>0&&(_.push(...v),v.length=0),(s=g.length+v.length+_.length>0)?f.raf(S):n=0},U=e=>Promise.resolve().then(e),M=j(g,!1),O=j(v,!0),R={},L=e=>null!=e,x=e=>e.toLowerCase(),C=e=>"object"==(e=typeof e)||"function"===e,E=()=>c.CSS&&c.CSS.supports&&c.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_ionicons_site("./p-aea6ba87.js"),P=async()=>{const e=new RegExp("/ionicons-site(\\.esm)?\\.js($|\\?|#)"),t=Array.from(a.querySelectorAll("script")).find(t=>e.test(t.src)||"ionicons-site"===t.getAttribute("data-namespace")),n=t["data-opts"];{const e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,c.location.href));return T(e.href),window.customElements||await __sc_import_ionicons_site("./p-020f8d73.js"),Object.assign(Object.assign({},n),{resourcesUrl:e.href})}},T=e=>{const t=(()=>`__sc_import_${"ionicons-site".replace(/\s|-/g,"_")}`)();try{c[t]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const s=new Map;c[t]=n=>{const o=new URL(n,e).href;let l=s.get(o);if(!l){const e=a.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${t}.m = m;`],{type:"application/javascript"})),l=new Promise(n=>{e.onload=()=>{n(c[t].m),e.remove()}}),s.set(o,l),a.head.appendChild(e)}return l}}},A="http://www.w3.org/1999/xlink",D=new WeakMap,F=e=>"sc-"+e,W=(e,t,...n)=>{let s,o,l=null,i=!1,r=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!C(l))&&(l=String(l)),i&&r?c[c.length-1].l+=l:c.push(i?{t:0,l}:l),r=i)};if(a(n),t){s=t.key||void 0,o=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,H);const f={t:0,i:e,u:c.length>0?c:null,$:void 0,p:t};return f.h=s,f.g=o,f},q={},H={forEach:(e,t)=>e.map(N).forEach(t),map:(e,t)=>e.map(N).map(t).map(B)},N=e=>({vattrs:e.p,vchildren:e.u,vkey:e.h,vname:e.g,vtag:e.i,vtext:e.l}),B=e=>({t:0,p:e.vattrs,u:e.vchildren,h:e.vkey,g:e.vname,i:e.vtag,l:e.vtext}),V=(e,t,n,s,o,l)=>{if(n!==s)if("class"===t){const t=e.classList;z(n).forEach(e=>t.remove(e)),z(s).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(t.startsWith("on")&&!w(e,t))t=w(e,x(t))?x(t.substring(2)):x(t[2])+t.substring(3),n&&f.rel(e,t,n,!1),s&&f.ael(e,t,s,!1);else{const n=w(e,t),i=C(s);if((n||i&&null!==s)&&!o)try{if(e.tagName.includes("-"))e[t]=s;else{const n=null==s?"":s;e[t]!==n&&(e[t]=n)}}catch(e){}const r=!(!o||t===(t=t.replace(/^xlink\:?/,"")));null==s||!1===s?r?e.removeAttributeNS(A,x(t)):e.removeAttribute(t):(!n||4&l||o)&&!i&&(s=!0===s?"":s.toString(),r?e.setAttributeNS(A,x(t),s):e.setAttribute(t,s))}},z=e=>e?e.split(/\s+/).filter(e=>e):[],G=(e,t,n,s)=>{const o=11===t.$.nodeType&&t.$.host?t.$.host:t.$,l=e&&e.p||R,i=t.p||R;for(s in l)s in i||V(o,s,l[s],void 0,n,t.t);for(s in i)V(o,s,l[s],i[s],n,t.t)},I=(n,s,l)=>{let c,f,u,$=s.u[l],d=0;if(o||(i=!0,"slot"===$.i&&($.t|=$.u?2:1)),L($.l))$.$=a.createTextNode($.l);else if(1&$.t)$.$=a.createTextNode("");else{if(c=$.$=r||"svg"===$.i?a.createElementNS("http://www.w3.org/2000/svg",$.i):a.createElement(2&$.t?"slot-fb":$.i),G(null,$,r="svg"===$.i||"foreignObject"!==$.i&&r),$.u)for(d=0;d<$.u.length;++d)(f=I(n,$,d,c))&&c.appendChild(f);"svg"===$.i?r=!1:"foreignObject"===$.$.tagName&&(r=!0)}return $.$["s-hn"]=t,3&$.t&&($.$["s-sr"]=!0,$.$["s-cr"]=e,$.$["s-sn"]=$.g||"",(u=n&&n.u&&n.u[l])&&u.i===$.i&&n.$&&J(n.$,!1)),$.$},J=(e,n)=>{f.t|=1;const s=e.childNodes;for(let e=s.length-1;e>=0;e--){const o=s[e];o["s-hn"]!==t&&o["s-ol"]&&(Z(o).insertBefore(o,Y(o)),o["s-ol"].remove(),o["s-ol"]=void 0,i=!0),n&&J(o,n)}f.t&=-2},K=(e,t,n,s,o,l)=>{let i,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(;o<=l;++o)s[o]&&(i=I(null,n,o,e))&&(s[o].$=i,r.insertBefore(i,Y(t)))},Q=(e,t,n,s)=>{for(;t<=n;++t)L(e[t])&&(s=e[t].$,oe(e[t],!0),l=!0,s["s-ol"]?s["s-ol"].remove():J(s,!0),s.remove())},X=(e,t)=>e.i===t.i&&("slot"===e.i?e.g===t.g:e.h===t.h),Y=e=>e&&e["s-ol"]||e,Z=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,ee=(e,t)=>{const n=t.$=e.$,s=e.u,o=t.u;let l;r=n&&L(n.parentNode)&&void 0!==n.ownerSVGElement,r="svg"===t.i||"foreignObject"!==t.i&&r,L(t.l)?(l=n["s-cr"])?l.parentNode.textContent=t.l:e.l!==t.l&&(n.textContent=t.l):("slot"===t.i||G(e,t,r),L(s)&&L(o)?((e,t,n,s)=>{let o,l,i=0,r=0,c=0,a=0,f=t.length-1,u=t[0],$=t[f],d=s.length-1,p=s[0],m=s[d];for(;i<=f&&r<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--f];else if(null==p)p=s[++r];else if(null==m)m=s[--d];else if(X(u,p))ee(u,p),u=t[++i],p=s[++r];else if(X($,m))ee($,m),$=t[--f],m=s[--d];else if(X(u,m))"slot"!==u.i&&"slot"!==m.i||J(u.$.parentNode,!1),ee(u,m),e.insertBefore(u.$,$.$.nextSibling),u=t[++i],m=s[--d];else if(X($,p))"slot"!==u.i&&"slot"!==m.i||J($.$.parentNode,!1),ee($,p),e.insertBefore($.$,u.$),$=t[--f],p=s[++r];else{for(c=-1,a=i;a<=f;++a)if(t[a]&&L(t[a].h)&&t[a].h===p.h){c=a;break}c>=0?((l=t[c]).i!==p.i?o=I(t&&t[r],n,c,e):(ee(l,p),t[c]=void 0,o=l.$),p=s[++r]):(o=I(t&&t[r],n,r,e),p=s[++r]),o&&Z(u.$).insertBefore(o,Y(u.$))}i>f?K(e,null==s[d+1]?null:s[d+1].$,n,s,r,d):r>d&&Q(t,i,f)})(n,s,t,o):L(o)?(L(e.l)&&(n.textContent=""),K(n,null,t,o,0,o.length-1)):L(s)&&Q(s,0,s.length-1)),r&&"svg"===t.i&&(r=!1)},te=(e,t,n,s,o,l,i,r)=>{for(s=0,o=(n=e.childNodes).length;s<o;s++)if(1===(t=n[s]).nodeType){if(t["s-sr"])for(i=t["s-sn"],t.hidden=!1,l=0;l<o;l++)if(n[l]["s-hn"]!==t["s-hn"])if(r=n[l].nodeType,""!==i){if(1===r&&i===n[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==n[l].textContent.trim()){t.hidden=!0;break}te(t)}},ne=[],se=e=>{let t,n,s,o,i=e.childNodes,r=i.length,c=0,a=0,f=0;for(r=i.length;c<r;c++){if((t=i[c])["s-sr"]&&(n=t["s-cr"]))for(o=t["s-sn"],a=(s=n.parentNode.childNodes).length-1;a>=0;a--)(n=s[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(ne.some(e=>e.v===n)||(l=!0,n["s-sn"]=o,ne.push({_:t,v:n})));1===t.nodeType&&se(t)}},oe=(e,t)=>{e&&(e.p&&e.p.ref&&e.p.ref(t?null:e.$),e.u&&e.u.forEach(e=>{oe(e,t)}))},le=(e,t,n,s)=>{t.t|=16;const o=t.o,l=()=>ie(e,t,n,o,s);let i;return s&&(t.t|=256,t.j&&(t.j.forEach(([e,t])=>ae(o,e,t)),t.j=null),i=ae(o,"componentWillLoad")),fe(i,()=>O(l))},ie=(n,s,r,c,u)=>{s.t&=-17,n["s-lr"]=!1,u&&((e,t)=>{((e,t)=>{let n=F(t.k),s=y.get(n);if(e=11===e.nodeType?e:a,s)if("string"==typeof s){let t,o=D.get(e=e.head||e);o||D.set(e,o=new Set),o.has(n)||((t=a.createElement("style")).innerHTML=s,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s])})(e.getRootNode(),t)})(n,r),s.t|=4;try{((n,s,r,c)=>{t=x(n.tagName);const u=s.S||{t:0},$=(e=>e&&e.i===q)(c)?c:W(null,null,c);if(r.U&&($.p=$.p||{},r.U.forEach(([e,t])=>$.p[t]=n[e])),$.i=null,$.t|=4,s.S=$,$.$=u.$=n,e=n["s-cr"],o=!1,i=l=!1,ee(u,$),i){se($.$);for(let e=0;e<ne.length;e++){const t=ne[e];if(!t.v["s-ol"]){const e=a.createTextNode("");e["s-nr"]=t.v,t.v.parentNode.insertBefore(t.v["s-ol"]=e,t.v)}}f.t|=1;for(let e=0;e<ne.length;e++){const t=ne[e],n=t._.parentNode;let s=t._.nextSibling,o=t.v["s-ol"];for(;o=o.previousSibling;){let e=o["s-nr"];if(e&&e["s-sn"]===t.v["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){s=e;break}}(!s&&n!==t.v.parentNode||t.v.nextSibling!==s)&&t.v!==s&&n.insertBefore(t.v,s)}f.t&=-2}l&&te($.$),ne.length=0})(n,s,r,c.render&&c.render())}catch(e){h(e)}s.t&=-5,n["s-lr"]=!0,s.t|=2,n["s-rc"].length>0&&(n["s-rc"].forEach(e=>e()),n["s-rc"].length=0),re(n,s)},re=(e,t,n)=>{if(!e["s-al"]){const s=t.o,o=t.M;64&t.t?ae(s,"componentDidUpdate"):(t.t|=64,e.classList.add("hydrated"),ae(s,"componentDidLoad"),t.O(e),o||ce()),o&&((n=o["s-al"])&&(n.delete(e),0===n.size&&(o["s-al"]=void 0,o["s-init"]())),t.M=void 0)}},ce=()=>{a.documentElement.classList.add("hydrated"),f.t|=2},ae=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){h(e)}},fe=(e,t)=>e&&e.then?e.then(t):t(),ue=(e,t,n)=>{if(t.R){e.watchers&&(t.L=e.watchers);const s=Object.entries(t.R),o=e.prototype;if(s.forEach(([e,[s]])=>{(31&s||2&n&&32&s)&&Object.defineProperty(o,e,{get(){return((e,t)=>p(e).C.get(t))(this,e)},set(n){((e,t,n,s)=>{const o=p(this),l=o.P,i=o.C.get(t),r=o.t;if(!((n=((e,t)=>null==e||C(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,s.R[t][0]))===i||8&r&&void 0!==i)&&(o.C.set(t,n),o.o)){if(s.L&&128&r){const e=s.L[t];e&&e.forEach(e=>{try{o.o[e].call(o.o,n,i,t)}catch(e){h(e)}})}2==(22&r)&&le(l,o,s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,s){f.jmp(()=>{const t=n.get(e);this[t]=(null!==s||"boolean"!=typeof this[t])&&s})},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,s])=>{const o=s[1]||e;return n.set(o,e),512&s[0]&&t.U.push([e,o]),o})}}return e},$e=e=>{ae(e,"connectedCallback")},de=(e,t)=>{(t=e["s-cr"]=a.createComment(""))["s-cn"]=!0,e.insertBefore(t,e.firstChild)},pe=(e,t={})=>{const n=[],s=t.exclude||[],o=a.head,l=c.customElements,i=o.querySelector("meta[charset]"),r=a.createElement("style");let $;Object.assign(f,t),f.s=new URL(t.resourcesUrl||"./",a.baseURI).href,t.syncQueue&&(f.t|=4),e.forEach(e=>e[1].forEach(t=>{const o={t:t[0],k:t[1],R:t[2],T:t[3],U:[],L:{}},i=o.k;o.A=e[0],s.includes(i)||l.get(i)||(n.push(i),l.define(i,ue(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,P:e,C:new Map};t.D=new Promise(e=>t.O=e),d.set(e,t)}})(e)}connectedCallback(){$&&(clearTimeout($),$=null),f.jmp(()=>((e,t)=>{if(0==(1&f.t)){const n=p(e);if(t.T&&(n.F=((e,t,n)=>{t.j=t.j||[];const s=n.map(([n,s,o])=>{const l=((e,t)=>8&t?c:32&t?a.body:e)(e,n),i=((e,t)=>n=>{256&e.t?e.o[t](n):e.j.push([t,n])})(t,o),r=(e=>({passive:0!=(1&e),capture:0!=(2&e)}))(n);return f.ael(l,s,i,r),()=>f.rel(l,s,i,r)});return()=>s.forEach(e=>e())})(e,n,t.T)),!(1&n.t)){let s;n.t|=1,s||4&t.t&&de(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!1===t["s-lr"]){n.M=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}t.R&&Object.entries(t.R).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),U(()=>(async(e,t,n,s,o)=>{if(0==(32&t.t)){t.t|=32,(o=(e=>{const t=e.k.replace(/-/g,"_"),n=e.A,s=b.get(n);return s?s[t]:__sc_import_ionicons_site(`./${n}.entry.js`).then(e=>(b.set(n,e),e[t]),h)})(n)).then&&(o=await o),o.isProxied||(n.L=o.watchers,ue(o,n,2),o.isProxied=!0),t.t|=8;try{new o(t)}catch(e){h(e)}t.t&=-9,t.t|=128,$e(t.o);const e=F(n.k);!y.has(e)&&o.style&&((e,t,n)=>{let s=y.get(e);u&&n?(s=s||new CSSStyleSheet).replace(t):s=t,y.set(e,s)})(e,o.style,!!(1&n.t))}const l=t.M,i=()=>le(e,t,n,!0);l&&!1===l["s-lr"]&&l["s-rc"]?l["s-rc"].push(i):i()})(e,n,t))}$e(n.o)}})(this,o))}disconnectedCallback(){f.jmp(()=>(()=>{if(0==(1&f.t)){const e=p(this),t=e.o;e.F&&(e.F(),e.F=void 0),ae(t,"disconnectedCallback"),ae(t,"componentDidUnload")}})())}"s-init"(){const e=p(this);e.o&&re(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=p(e);2&n.t&&le(e,n,t,!1)}})(this,o)}componentOnReady(){return p(this).D}},o,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),f.jmp(()=>$=setTimeout(ce,30))},me=(e,t,n)=>{const s=he(e);return{emit:e=>s.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},we=(e,t)=>t in $?$[t]:"window"===t?c:"document"===t?a:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",f.s);return e.origin!==c.location.origin?e.href:e.pathname})():"queue"===t?{write:O,read:M,tick:{then:e=>U(e)}}:void 0)),he=e=>p(e).P;export{E as a,pe as b,me as c,we as d,he as g,W as h,P as p,m as r};