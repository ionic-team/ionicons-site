import { r as registerInstance, h } from './index-8a519d96.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
    return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  }
	}, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

(function(self) {

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

const browserPolyfill = /*#__PURE__*/Object.freeze({
	__proto__: null
});

var prismicJavascript_min = createCommonjsModule(function (module, exports) {
!function(t,e){"object"=='object'&&"object"=='object'?module.exports=e(browserPolyfill):"function"==typeof undefined&&undefined.amd?undefined("PrismicJS",["cross-fetch/polyfill"],e):"object"=='object'?exports.PrismicJS=e(browserPolyfill):t.PrismicJS=e(t["cross-fetch/polyfill"]);}("undefined"!=typeof self?self:commonjsGlobal,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=20)}([function(t,e,n){"use strict";e.a=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})};},function(t,e,n){"use strict";e.__esModule=!0,e.createPreviewResolver=function(t,e,n){return {token:t,documentId:e,resolve:function(r,o,i){return e&&n?n(e,{ref:t}).then(function(t){if(t){var e=r(t);return i&&i(null,e),e}return i&&i(null,o),o}):Promise.resolve(o)}}};},function(t,e,n){"use strict";var r=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t};e.__esModule=!0;var o=n(5),i=n(4),u=n(6),a=n(12),s=n(1);e.PREVIEW_COOKIE="io.prismic.preview",e.EXPERIMENT_COOKIE="io.prismic.experiment";var f=function(){function t(t,e,n){this.data=t,this.masterRef=t.refs.filter(function(t){return t.isMasterRef})[0],this.experiments=new o.Experiments(t.experiments),this.bookmarks=t.bookmarks,this.httpClient=e,this.options=n,this.refs=t.refs,this.tags=t.tags,this.types=t.types,this.languages=t.languages;}return t.prototype.form=function(t){var e=this.data.forms[t];return e?new i.SearchForm(e,this.httpClient):null},t.prototype.everything=function(){var t=this.form("everything");if(!t)throw new Error("Missing everything form");return t},t.prototype.master=function(){return this.masterRef.ref},t.prototype.ref=function(t){var e=this.data.refs.filter(function(e){return e.label===t})[0];return e?e.ref:null},t.prototype.currentExperiment=function(){return this.experiments.current()},t.prototype.query=function(t,n,r){void 0===r&&(r=function(){});var o="function"==typeof n?{options:{},callback:n}:{options:n||{},callback:r},i=o.options,u=o.callback,s=this.everything();for(var f in i)s=s.set(f,i[f]);if(!i.ref){var c="";this.options.req?c=this.options.req.headers.cookie||"":"undefined"!=typeof window&&window.document&&(c=window.document.cookie||"");var l=a.default.parse(c),p=l[e.PREVIEW_COOKIE],h=this.experiments.refFromCookie(l[e.EXPERIMENT_COOKIE]);s=s.ref(p||h||this.masterRef.ref);}return t&&s.query(t),s.submit(u)},t.prototype.queryFirst=function(t,e,n){var o="function"==typeof e?{options:{},callback:e}:{options:r({},e)||{},callback:n||function(){}},i=o.options,u=o.callback;return i.page=1,i.pageSize=1,this.query(t,i).then(function(t){var e=t&&t.results&&t.results[0];return u(null,e),e}).catch(function(t){throw u(t),t})},t.prototype.getByID=function(t,e,n){var o=e?r({},e):{};return o.lang||(o.lang="*"),this.queryFirst(u.default.at("document.id",t),o,n)},t.prototype.getByIDs=function(t,e,n){var o=e?r({},e):{};return o.lang||(o.lang="*"),this.query(u.default.in("document.id",t),o,n)},t.prototype.getByUID=function(t,e,n,o){var i=n?r({},n):{};if("*"===i.lang)throw new Error("FORDIDDEN. You can't use getByUID with *, use the predicates instead.");return i.page||(i.page=1),this.queryFirst(u.default.at("my."+t+".uid",e),i,o)},t.prototype.getSingle=function(t,e,n){var o=e?r({},e):{};return this.queryFirst(u.default.at("document.type",t),o,n)},t.prototype.getBookmark=function(t,e,n){var r=this.data.bookmarks[t];return r?this.getByID(r,e,n):Promise.reject("Error retrieving bookmarked id")},t.prototype.getPreviewResolver=function(t,e){return s.createPreviewResolver(t,e,this.getByID.bind(this))},t.prototype.previewSession=function(t,e,n,r){var o=this;return console.warn("previewSession function is deprecated in favor of getPreviewResolver function."),new Promise(function(i,u){o.httpClient.request(t,function(a,s){if(a)r&&r(a),u(a);else if(s){if(s.mainDocument)return o.getByID(s.mainDocument,{ref:t}).then(function(t){if(t){var o=e(t);r&&r(null,o),i(o);}else r&&r(null,n),i(n);}).catch(u);r&&r(null,n),i(n);}});})},t}();e.default=f;},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2),o=n(11);function i(t){return t.indexOf("?")>-1?"&":"?"}var u=function(){function t(t,e){if(this.options=e||{},this.url=t,this.options.accessToken){var n="access_token="+this.options.accessToken;this.url+=i(t)+n;}this.options.routes&&(this.url+=i(t)+"routes="+encodeURIComponent(JSON.stringify(this.options.routes))),this.apiDataTTL=this.options.apiDataTTL||5,this.httpClient=new o.default(this.options.requestHandler,this.options.apiCache,this.options.proxyAgent,this.options.timeoutInMs);}return t.prototype.get=function(t){var e=this;return this.httpClient.cachedRequest(this.url,{ttl:this.apiDataTTL}).then(function(n){var o=new r.default(n,e.httpClient,e.options);return t&&t(null,o),o}).catch(function(e){throw t&&t(e),e})},t}();e.default=u;},function(t,e,n){"use strict";e.__esModule=!0;var r=function(){function t(t,e){this.id=t,this.api=e,this.fields={};}return t.prototype.set=function(t,e){return this.fields[t]=e,this},t.prototype.ref=function(t){return this.set("ref",t)},t.prototype.query=function(t){return this.set("q",t)},t.prototype.pageSize=function(t){return this.set("pageSize",t)},t.prototype.fetch=function(t){return console.warn("Warning: Using Fetch is deprecated. Use the property `graphQuery` instead."),this.set("fetch",t)},t.prototype.fetchLinks=function(t){return console.warn("Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead."),this.set("fetchLinks",t)},t.prototype.graphQuery=function(t){return this.set("graphQuery",t)},t.prototype.lang=function(t){return this.set("lang",t)},t.prototype.page=function(t){return this.set("page",t)},t.prototype.after=function(t){return this.set("after",t)},t.prototype.orderings=function(t){return this.set("orderings",t)},t.prototype.url=function(){var e=this;return this.api.get().then(function(n){return t.toSearchForm(e,n).url()})},t.prototype.submit=function(e){var n=this;return this.api.get().then(function(r){return t.toSearchForm(n,r).submit(e)})},t.toSearchForm=function(t,e){var n=e.form(t.id);if(n)return Object.keys(t.fields).reduce(function(e,n){var r=t.fields[n];return "q"===n?e.query(r):"pageSize"===n?e.pageSize(r):"fetch"===n?e.fetch(r):"fetchLinks"===n?e.fetchLinks(r):"graphQuery"===n?e.graphQuery(r):"lang"===n?e.lang(r):"page"===n?e.page(r):"after"===n?e.after(r):"orderings"===n?e.orderings(r):e.set(n,r)},n);throw new Error("Unable to access to form "+t.id)},t}();e.LazySearchForm=r;var o=function(){function t(t,e){for(var n in this.httpClient=e,this.form=t,this.data={},t.fields)t.fields[n].default&&(this.data[n]=[t.fields[n].default]);}return t.prototype.set=function(t,e){var n=this.form.fields[t];if(!n)throw new Error("Unknown field "+t);var r=""===e||void 0===e?null:e,o=this.data[t]||[];return o=n.multiple?r?o.concat([r]):o:r?[r]:o,this.data[t]=o,this},t.prototype.ref=function(t){return this.set("ref",t)},t.prototype.query=function(t){if("string"==typeof t)return this.query([t]);if(Array.isArray(t))return this.set("q","["+t.join("")+"]");throw new Error("Invalid query : "+t)},t.prototype.pageSize=function(t){return this.set("pageSize",t)},t.prototype.fetch=function(t){console.warn("Warning: Using Fetch is deprecated. Use the property `graphQuery` instead.");var e=Array.isArray(t)?t.join(","):t;return this.set("fetch",e)},t.prototype.fetchLinks=function(t){console.warn("Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead.");var e=Array.isArray(t)?t.join(","):t;return this.set("fetchLinks",e)},t.prototype.graphQuery=function(t){return this.set("graphQuery",t)},t.prototype.lang=function(t){return this.set("lang",t)},t.prototype.page=function(t){return this.set("page",t)},t.prototype.after=function(t){return this.set("after",t)},t.prototype.orderings=function(t){return t?this.set("orderings","["+t.join(",")+"]"):this},t.prototype.url=function(){var t=this.form.action;if(this.data){var e=t.indexOf("?")>-1?"&":"?";for(var n in this.data)if(this.data.hasOwnProperty(n)){var r=this.data[n];if(r)for(var o=0;o<r.length;o++)t+=e+n+"="+encodeURIComponent(r[o]),e="&";}}return t},t.prototype.submit=function(t){return this.httpClient.cachedRequest(this.url()).then(function(e){return t&&t(null,e),e}).catch(function(e){throw t&&t(e),e})},t}();e.SearchForm=o;},function(t,e,n){"use strict";e.__esModule=!0;var r=function(){function t(t){this.data={},this.data=t;}return t.prototype.id=function(){return this.data.id},t.prototype.ref=function(){return this.data.ref},t.prototype.label=function(){return this.data.label},t}();e.Variation=r;var o=function(){function t(t){this.data={},this.data=t,this.variations=(t.variations||[]).map(function(t){return new r(t)});}return t.prototype.id=function(){return this.data.id},t.prototype.googleId=function(){return this.data.googleId},t.prototype.name=function(){return this.data.name},t}();e.Experiment=o;var i=function(){function t(t){t&&(this.drafts=(t.drafts||[]).map(function(t){return new o(t)}),this.running=(t.running||[]).map(function(t){return new o(t)}));}return t.prototype.current=function(){return this.running.length>0?this.running[0]:null},t.prototype.refFromCookie=function(t){if(!t||""===t.trim())return null;var e=t.trim().split(" ");if(e.length<2)return null;var n=e[0],r=parseInt(e[1],10),o=this.running.filter(function(t){return t.googleId()===n&&t.variations.length>r})[0];return o?o.variations[r].ref():null},t}();e.Experiments=i;},function(t,e,n){"use strict";e.__esModule=!0;var r="at",o="not",i="missing",u="has",a="any",s="in",f="fulltext",c="similar",l="number.gt",p="number.lt",h="number.inRange",d="date.before",y="date.after",m="date.between",g="date.day-of-month",v="date.day-of-month-after",w="date.day-of-month-before",b="date.day-of-week",_="date.day-of-week-after",k="date.day-of-week-before",I="date.month",T="date.month-before",E="date.month-after",O="date.year",A="date.hour",x="date.hour-before",M="date.hour-after",P="geopoint.near";function j(t){if("string"==typeof t)return '"'+t+'"';if("number"==typeof t)return t.toString();if(t instanceof Date)return t.getTime().toString();if(Array.isArray(t))return "["+t.map(function(t){return j(t)}).join(",")+"]";if("boolean"==typeof t)return t.toString();throw new Error("Unable to encode "+t+" of type "+typeof t)}var q={near:function(t,e,n,r){return "["+P+"("+t+", "+e+", "+n+", "+r+")]"}},R={before:function(t,e){return "["+d+"("+t+", "+j(e)+")]"},after:function(t,e){return "["+y+"("+t+", "+j(e)+")]"},between:function(t,e,n){return "["+m+"("+t+", "+j(e)+", "+j(n)+")]"},dayOfMonth:function(t,e){return "["+g+"("+t+", "+e+")]"},dayOfMonthAfter:function(t,e){return "["+v+"("+t+", "+e+")]"},dayOfMonthBefore:function(t,e){return "["+w+"("+t+", "+e+")]"},dayOfWeek:function(t,e){return "["+b+"("+t+", "+j(e)+")]"},dayOfWeekAfter:function(t,e){return "["+_+"("+t+", "+j(e)+")]"},dayOfWeekBefore:function(t,e){return "["+k+"("+t+", "+j(e)+")]"},month:function(t,e){return "["+I+"("+t+", "+j(e)+")]"},monthBefore:function(t,e){return "["+T+"("+t+", "+j(e)+")]"},monthAfter:function(t,e){return "["+E+"("+t+", "+j(e)+")]"},year:function(t,e){return "["+O+"("+t+", "+e+")]"},hour:function(t,e){return "["+A+"("+t+", "+e+")]"},hourBefore:function(t,e){return "["+x+"("+t+", "+e+")]"},hourAfter:function(t,e){return "["+M+"("+t+", "+e+")]"}},S={gt:function(t,e){return "["+l+"("+t+", "+e+")]"},lt:function(t,e){return "["+p+"("+t+", "+e+")]"},inRange:function(t,e,n){return "["+h+"("+t+", "+e+", "+n+")]"}};e.default={at:function(t,e){return "["+r+"("+t+", "+j(e)+")]"},not:function(t,e){return "["+o+"("+t+", "+j(e)+")]"},missing:function(t){return "["+i+"("+t+")]"},has:function(t){return "["+u+"("+t+")]"},any:function(t,e){return "["+a+"("+t+", "+j(e)+")]"},in:function(t,e){return "["+s+"("+t+", "+j(e)+")]"},fulltext:function(t,e){return "["+f+"("+t+", "+j(e)+")]"},similar:function(t,e){return "["+c+'("'+t+'", '+e+")]"},date:R,dateBefore:R.before,dateAfter:R.after,dateBetween:R.between,dayOfMonth:R.dayOfMonth,dayOfMonthAfter:R.dayOfMonthAfter,dayOfMonthBefore:R.dayOfMonthBefore,dayOfWeek:R.dayOfWeek,dayOfWeekAfter:R.dayOfWeekAfter,dayOfWeekBefore:R.dayOfWeekBefore,month:R.month,monthBefore:R.monthBefore,monthAfter:R.monthAfter,year:R.year,hour:R.hour,hourBefore:R.hourBefore,hourAfter:R.hourAfter,number:S,gt:S.gt,lt:S.lt,inRange:S.inRange,near:q.near,geopoint:q};},function(t,e,n){"use strict";(function(t){var r=n(0),o=setTimeout;function i(){}function u(t){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(t,this);}function a(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,u._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value);}catch(t){return void f(e.promise,t)}s(e.promise,r);}else (1===t._state?s:f)(e.promise,t._value);})):t._deferreds.push(e);}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof u)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void l(function(t,e){return function(){t.apply(e,arguments);}}(n,e),t)}t._state=1,t._value=e,c(t);}catch(e){f(t,e);}}function f(t,e){t._state=2,t._value=e,c(t);}function c(t){2===t._state&&0===t._deferreds.length&&u._immediateFn(function(){t._handled||u._unhandledRejectionFn(t._value);});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null;}function l(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t));},function(t){n||(n=!0,f(e,t));});}catch(t){if(n)return;n=!0,f(e,t);}}u.prototype.catch=function(t){return this.then(null,t)},u.prototype.then=function(t,e){var n=new this.constructor(i);return a(this,new function(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n;}(t,e,n)),n},u.prototype.finally=r.a,u.all=function(t){return new u(function(e,n){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var o=r.length;function i(t,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var a=u.then;if("function"==typeof a)return void a.call(u,function(e){i(t,e);},n)}r[t]=u,0==--o&&e(r);}catch(t){n(t);}}for(var u=0;u<r.length;u++)i(u,r[u]);})},u.resolve=function(t){return t&&"object"==typeof t&&t.constructor===u?t:new u(function(e){e(t);})},u.reject=function(t){return new u(function(e,n){n(t);})},u.race=function(t){return new u(function(e,n){for(var r=0,o=t.length;r<o;r++)t[r].then(e,n);})},u._immediateFn="function"==typeof t&&function(e){t(e);}||function(t){o(t,0);},u._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t);},e.a=u;}).call(this,n(18).setImmediate);},function(t,e,n){"use strict";e.__esModule=!0;var r=function(){function t(t){this.options=t||{};}return t.prototype.request=function(t,e){!function(t,e,n){var r,o={headers:{Accept:"application/json"}};e&&e.proxyAgent&&(o.agent=e.proxyAgent);var i=fetch(t,o);(e.timeoutInMs?Promise.race([i,new Promise(function(n,o){r=setTimeout(function(){return o(new Error(t+" response timeout"))},e.timeoutInMs);})]):i).then(function(e){return clearTimeout(r),~~(e.status/100!=2)?e.text().then(function(){var n=new Error("Unexpected status code ["+e.status+"] on URL "+t);throw n.status=e.status,n}):e.json().then(function(t){var r=e.headers.get("cache-control"),o=r?/max-age=(\d+)/.exec(r):null,i=o?parseInt(o[1],10):void 0;n(null,t,e,i);})}).catch(function(t){clearTimeout(r),n(t);});}(t,this.options,e);},t}();e.DefaultRequestHandler=r;},function(t,e,n){"use strict";function r(t){this.size=0,this.limit=t,this._keymap={};}e.__esModule=!0,e.MakeLRUCache=function(t){return new r(t)},r.prototype.put=function(t,e){var n={key:t,value:e};if(this._keymap[t]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size===this.limit)return this.shift();this.size++;},r.prototype.shift=function(){var t=this.head;return t&&(this.head.newer?(this.head=this.head.newer,this.head.older=void 0):this.head=void 0,t.newer=t.older=void 0,delete this._keymap[t.key]),console.log("purging ",t.key),t},r.prototype.get=function(t,e){var n=this._keymap[t];if(void 0!==n)return n===this.tail?e?n:n.value:(n.newer&&(n===this.head&&(this.head=n.newer),n.newer.older=n.older),n.older&&(n.older.newer=n.newer),n.newer=void 0,n.older=this.tail,this.tail&&(this.tail.newer=n),this.tail=n,e?n:n.value)},r.prototype.find=function(t){return this._keymap[t]},r.prototype.set=function(t,e){var n,r=this.get(t,!0);return r?(n=r.value,r.value=e):(n=this.put(t,e))&&(n=n.value),n},r.prototype.remove=function(t){var e=this._keymap[t];if(e)return delete this._keymap[e.key],e.newer&&e.older?(e.older.newer=e.newer,e.newer.older=e.older):e.newer?(e.newer.older=void 0,this.head=e.newer):e.older?(e.older.newer=void 0,this.tail=e.older):this.head=this.tail=void 0,this.size--,e.value},r.prototype.removeAll=function(){this.head=this.tail=void 0,this.size=0,this._keymap={};},"function"==typeof Object.keys?r.prototype.keys=function(){return Object.keys(this._keymap)}:r.prototype.keys=function(){var t=[];for(var e in this._keymap)t.push(e);return t},r.prototype.forEach=function(t,e,n){var r;if(!0===e?(n=!0,e=void 0):"object"!=typeof e&&(e=this),n)for(r=this.tail;r;)t.call(e,r.key,r.value,this),r=r.older;else for(r=this.head;r;)t.call(e,r.key,r.value,this),r=r.newer;},r.prototype.toString=function(){for(var t="",e=this.head;e;)t+=String(e.key)+":"+e.value,(e=e.newer)&&(t+=" < ");return t};},function(t,e,n){"use strict";e.__esModule=!0;var r=n(9),o=function(){function t(t){void 0===t&&(t=1e3),this.lru=r.MakeLRUCache(t);}return t.prototype.isExpired=function(t){var e=this.lru.get(t,!1);return !!e&&(0!==e.expiredIn&&e.expiredIn<Date.now())},t.prototype.get=function(t,e){var n=this.lru.get(t,!1);n&&!this.isExpired(t)?e(null,n.data):e&&e(null);},t.prototype.set=function(t,e,n,r){this.lru.remove(t),this.lru.put(t,{data:e,expiredIn:n?Date.now()+1e3*n:0}),r&&r(null);},t.prototype.remove=function(t,e){this.lru.remove(t),e&&e(null);},t.prototype.clear=function(t){this.lru.removeAll(),t&&t(null);},t}();e.DefaultApiCache=o;},function(t,e,n){"use strict";e.__esModule=!0;var r=n(10),o=n(8),i=function(){function t(t,e,n,i){this.requestHandler=t||new o.DefaultRequestHandler({proxyAgent:n,timeoutInMs:i}),this.cache=e||new r.DefaultApiCache;}return t.prototype.request=function(t,e){this.requestHandler.request(t,function(t,n,r,o){t?e&&e(t,null,r,o):n&&e&&e(null,n,r,o);});},t.prototype.cachedRequest=function(t,e){var n=this,r=e||{};return new Promise(function(e,o){!function(e){var o=r.cacheKey||t;n.cache.get(o,function(i,u){i||u?e(i,u):n.request(t,function(t,i,u,a){if(t)e(t,null);else {var s=a||r.ttl;s&&n.cache.set(o,i,s,e),e(null,i);}});});}(function(t,n){t&&o(t),n&&e(n);});})},t}();e.default=i;},function(t,e,n){"use strict";e.__esModule=!0;var r=decodeURIComponent;e.default={parse:function(t,e){if("string"!=typeof t)throw new TypeError("argument str must be a string");var n={},o=e||{},i=t.split(/; */),u=o.decode||r;return i.forEach(function(t){var e=t.indexOf("=");if(!(e<0)){var r=t.substr(0,e).trim(),o=t.substr(++e,t.length).trim();'"'==o[0]&&(o=o.slice(1,-1)),void 0==n[r]&&(n[r]=function(t,e){try{return e(t)}catch(e){return t}}(o,u));}}),n}};},function(t,e,n){"use strict";e.__esModule=!0;var r=n(4),o=n(3),i=n(1),u=function(){function t(t,e){this.api=new o.default(t,e);}return t.prototype.getApi=function(){return this.api.get()},t.prototype.everything=function(){return this.form("everything")},t.prototype.form=function(t){return new r.LazySearchForm(t,this.api)},t.prototype.query=function(t,e,n){return this.getApi().then(function(r){return r.query(t,e,n)})},t.prototype.queryFirst=function(t,e,n){return this.getApi().then(function(r){return r.queryFirst(t,e,n)})},t.prototype.getByID=function(t,e,n){return this.getApi().then(function(r){return r.getByID(t,e,n)})},t.prototype.getByIDs=function(t,e,n){return this.getApi().then(function(r){return r.getByIDs(t,e,n)})},t.prototype.getByUID=function(t,e,n,r){return this.getApi().then(function(o){return o.getByUID(t,e,n,r)})},t.prototype.getSingle=function(t,e,n){return this.getApi().then(function(r){return r.getSingle(t,e,n)})},t.prototype.getBookmark=function(t,e,n){return this.getApi().then(function(r){return r.getBookmark(t,e,n)})},t.prototype.previewSession=function(t,e,n,r){return this.getApi().then(function(o){return o.previewSession(t,e,n,r)})},t.prototype.getPreviewResolver=function(t,e){var n=this;return i.createPreviewResolver(t,e,function(t){return n.getApi().then(function(e){return e.getByID(t)})})},t.getApi=function(t,e){return new o.default(t,e).get()},t}();e.DefaultClient=u;},function(t,e,n){"use strict";var r,o=n(6),i=n(5),u=n(13),a=n(3),s=n(2);!function(t){function e(t,e){return u.DefaultClient.getApi(t,e)}t.experimentCookie=s.EXPERIMENT_COOKIE,t.previewCookie=s.PREVIEW_COOKIE,t.Predicates=o.default,t.Experiments=i.Experiments,t.Api=a.default,t.client=function(t,e){return new u.DefaultClient(t,e)},t.getApi=e,t.api=function(t,n){return e(t,n)};}(r||(r={})),t.exports=r;},function(e,n){e.exports=t;},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i;}catch(t){n=i;}try{r="function"==typeof clearTimeout?clearTimeout:u;}catch(t){r=u;}}();var s,f=[],c=!1,l=-1;function p(){c&&s&&(c=!1,s.length?f=s.concat(f):l=-1,f.length&&h());}function h(){if(!c){var t=a(p);c=!0;for(var e=f.length;e;){for(s=f,f=[];++l<e;)s&&s[l].run();l=-1,e=f.length;}s=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t);}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t);}}function d(t,e){this.fun=t,this.array=e;}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new d(t,e)),1!==f.length||c||a(h);},d.prototype.run=function(){this.fun.apply(null,this.array);},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return []},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return "/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0};},function(t,e,n){(function(t){!function(e,n){"use strict";if(!e.setImmediate){var r,o=1,i={},u=!1,a=e.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(e);s=s&&s.setTimeout?s:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){c(e);});}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1;},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&c(+n.data.slice(t.length));};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),r=function(n){e.postMessage(t+n,"*");};}():e.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){c(t.data);},r=function(e){t.port2.postMessage(e);};}():a&&"onreadystatechange"in a.createElement("script")?function(){var t=a.documentElement;r=function(e){var n=a.createElement("script");n.onreadystatechange=function(){c(e),n.onreadystatechange=null,t.removeChild(n),n=null;},t.appendChild(n);};}():r=function(t){setTimeout(c,0,t);},s.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var u={callback:t,args:e};return i[o]=u,r(o),o++},s.clearImmediate=f;}function f(t){delete i[t];}function c(t){if(u)setTimeout(c,0,t);else {var e=i[t];if(e){u=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r);}}(e);}finally{f(t),u=!1;}}}}}("undefined"==typeof self?"undefined"==typeof commonjsGlobal?this:commonjsGlobal:self);}).call(this,n(16));},function(t,e,n){var r="undefined"!=typeof commonjsGlobal&&commonjsGlobal||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e;}e.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close();},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id);},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e;},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1;},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout();},e));},n(17),e.setImmediate="undefined"!=typeof self&&self.setImmediate||"undefined"!=typeof commonjsGlobal&&commonjsGlobal.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||"undefined"!=typeof commonjsGlobal&&commonjsGlobal.clearImmediate||this&&this.clearImmediate;},function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(0),i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof commonjsGlobal)return commonjsGlobal;throw new Error("unable to locate global object")}();i.Promise?i.Promise.prototype.finally||(i.Promise.prototype.finally=o.a):i.Promise=r.a;},function(t,e,n){n(19),n(15),t.exports=n(14);}])});
});

const Prismic = unwrapExports(prismicJavascript_min);
var prismicJavascript_min_1 = prismicJavascript_min.PrismicJS;

var prismicDom_min = createCommonjsModule(function (module, exports) {
!function(e,t){"object"=='object'&&"object"=='object'?module.exports=t():"function"==typeof undefined&&undefined.amd?undefined("PrismicDOM",[],t):"object"=='object'?exports.PrismicDOM=t():e.PrismicDOM=t();}("undefined"!=typeof self?self:commonjsGlobal,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1);},function(e,t,n){var r=n(2),o=n(3);e.exports={Link:r,Date:o};},function(e,t,n){e.exports={url:function(e,t){if(e&&[e.link_type,e._linkType,e.linkType].some((function(e){return e&&["Document","Link.Document","Link.document"].includes(e)}))&&t&&"function"==typeof t){var n=t(e);if(n)return n}return e&&e.url?e.url:""}};},function(e,t){e.exports=function(e){if(!e)return null;var t=24==e.length?"".concat(e.substring(0,22),":").concat(e.substring(22,24)):e;return new Date(t)};}]);},function(e,t,n){e.exports=n(2);},function(e,t,n){var r=n(0),o=n(3),i=r.Date,u=r.Link;e.exports={Date:i,Link:u,RichText:o};},function(e,t,n){var r=n(4),o=n(0).Link,i=n(5),u=r.Elements;function c(e,t,n,r,c){switch(t){case u.heading1:return l("h1",n,c);case u.heading2:return l("h2",n,c);case u.heading3:return l("h3",n,c);case u.heading4:return l("h4",n,c);case u.heading5:return l("h5",n,c);case u.heading6:return l("h6",n,c);case u.paragraph:return l("p",n,c);case u.preformatted:return function(e){return "<pre".concat(a(e),">").concat(i(e.text),"</pre>")}(n);case u.strong:return l("strong",n,c);case u.em:return l("em",n,c);case u.listItem:case u.oListItem:return l("li",n,c);case u.list:return l("ul",n,c);case u.oList:return l("ol",n,c);case u.image:return function(e,t){var n=t.linkTo?o.url(t.linkTo,e):null,r=t.linkTo&&t.linkTo.target?'target="'.concat(t.linkTo.target,'" rel="noopener"'):"",i=[t.label||"","block-img"],u='<img src="'.concat(t.url,'" alt="').concat(t.alt||"",'" copyright="').concat(t.copyright||"",'">');return '\n    <p class="'.concat(i.join(" "),'">\n      ').concat(n?"<a ".concat(r,' href="').concat(n,'">').concat(u,"</a>"):u,"\n    </p>\n  ")}(e,n);case u.embed:return function(e){return '\n    <div data-oembed="'.concat(e.oembed.embed_url,'"\n      data-oembed-type="').concat(e.oembed.type,'"\n      data-oembed-provider="').concat(e.oembed.provider_name,'"\n      ').concat(a(e),">\n          \n      ").concat(e.oembed.html,"\n    </div>\n  ")}(n);case u.hyperlink:return function(e,t,n){var r=t.data.target?'target="'.concat(t.data.target,'" rel="noopener"'):"";return "<a ".concat(r,' href="').concat(o.url(t.data,e),'">').concat(n.join(""),"</a>")}(e,n,c);case u.label:return function(e,t){return "<span ".concat(a(e.data),">").concat(t.join(""),"</span>")}(n,c);case u.span:return function(e){return e?i(e).replace(/\n/g,"<br />"):""}(r);default:return ""}}function a(e){return e.label?' class="'.concat(e.label,'"'):""}function l(e,t,n){return "<".concat(e).concat(a(t),">").concat(n.join(""),"</").concat(e,">")}e.exports={asText:function(e,t){return r.asText(e,t)},asHtml:function(e,t,n){return r.serialize(e,c.bind(null,t),n).join("")},Elements:u};},function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){var r=n(3);e.exports=function(e){return function t(n){return 0===arguments.length||r(n)?t:e.apply(this,arguments)}};},function(e,t,n){var r=n(0),o=n(3);e.exports=function(e){return function t(n,i){switch(arguments.length){case 0:return t;case 1:return o(n)?t:r((function(t){return e(n,t)}));default:return o(n)&&o(i)?t:o(n)?r((function(t){return e(t,i)})):o(i)?r((function(t){return e(n,t)})):e(n,i)}}};},function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.PRIORITIES=t.NODE_TYPES=void 0;var i={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"};t.NODE_TYPES=i;var u=(o(r={},i.heading1,4),o(r,i.heading2,4),o(r,i.heading3,4),o(r,i.heading4,4),o(r,i.heading5,4),o(r,i.heading6,4),o(r,i.paragraph,3),o(r,i.preformatted,5),o(r,i.strong,6),o(r,i.em,6),o(r,i.oList,1),o(r,i.list,1),o(r,i.listItem,1),o(r,i.oListItem,1),o(r,i.image,1),o(r,i.embed,1),o(r,i.hyperlink,3),o(r,i.label,4),o(r,i.span,7),r);t.PRIORITIES=u;},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(12)),o=d(n(15)),i=d(n(16)),u=d(n(17)),c=d(n(21)),a=d(n(7)),l=n(23),f=n(2),s=n(8);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function h(e){return function(e,t){return t.reduce((function(e,t){var n=(0,c.default)(e);if(n){if(n.some((function(e){return e.isParentOf(t)})))return (0,u.default)(e).concat([n.concat(t)]);var r=(0,c.default)(n);return r&&function(e,t){return e.end>=t.start}(r,t)?(0,u.default)(e).concat([n.concat(t)]):e.concat([[t]])}return [[t]]}),[])}(0,(0,i.default)([function(e,t){return e.start-t.start},function(e,t){return e.end-t.end}],e))}function y(e){if(0===e.length)throw new Error("Unable to elect node on empty list");var t=function(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(e.sort((function(e,t){if(e.isParentOf(t))return -1;if(t.isParentOf(e))return 1;var n=f.PRIORITIES[e.type]-f.PRIORITIES[t.type];return 0===n?e.text.length-t.text.length:n})));return {elected:t[0],others:t.slice(1)}}function v(e,t,n){if(t.length>0)return function(e,t,n){return t.reduce((function(r,o,i){var u=[],c=0===i&&o.start>n.lower,a=i===t.length-1&&n.upper>o.end;if(c){var l=new s.TextNode(n.lower,o.start,e.slice(n.lower,o.start));u=u.concat(l);}else {var f=t[i-1];if(f&&o.start>f.end){var d=e.slice(f.end,o.start),p=new s.TextNode(f.end,o.start,d);u=u.concat(p);}}if(u=u.concat(o),a){var h=new s.TextNode(o.end,n.upper,e.slice(o.end,n.upper));u=u.concat(h);}return r.concat(u)}),[])}(e,m(e,t),n);var r=e.slice(n.lower,n.upper);return [new s.TextNode(n.lower,n.upper,r)]}function m(e,t){var n=h((0,o.default)((function(e){return e.start}),t)).map(y),i=(0,r.default)(n.map((function(t){return function(e,t){var n=t.others.reduce((function(n,r){var o=n.inner,i=n.outer,u=function(e,t,n){return n.start<t.start?{inner:s.SpanNode.slice(n,t.start,n.end,e),outer:s.SpanNode.slice(n,n.start,t.start,e)}:n.end>t.end?{inner:s.SpanNode.slice(n,n.start,t.end,e),outer:s.SpanNode.slice(n,t.end,n.end,e)}:{inner:n}}(e,t.elected,r);return {inner:o.concat(u.inner),outer:u.outer?i.concat(u.outer):i}}),{inner:[],outer:[]}),r=n.inner,o=n.outer;return [t.elected.setChildren(v(e,r,t.elected.boundaries()))].concat(m(e,o))}(e,t)})));return (0,o.default)((function(e){return e.start}),i)}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);}var t,n;return t=e,(n=[{key:"fromRichText",value:function(e){return {key:(0,a.default)(),children:e.reduce((function(e,t,n){if(l.RichTextBlock.isEmbedBlock(t.type)||l.RichTextBlock.isImageBlock(t.type))return e.concat(new s.BlockNode(t.type,t));var r=function(e){var t=e.spans.map((function(t){var n=e.text.slice(t.start,t.end);return new s.SpanNode(t.start,t.end,t.type,n,[],t)})),n={lower:0,upper:e.text.length};return v(e.text,t,n)}(t),o=e[e.length-1];if(l.RichTextBlock.isListItem(t.type)&&o&&o instanceof s.ListBlockNode){var i=new s.ListItemBlockNode(t,r),c=o.addChild(i);return (0,u.default)(e).concat(c)}if(l.RichTextBlock.isOrderedListItem(t.type)&&o&&o instanceof s.OrderedListBlockNode){var a=new s.OrderedListItemBlockNode(t,r),f=o.addChild(a);return (0,u.default)(e).concat(f)}if(l.RichTextBlock.isListItem(t.type)){var d=new s.ListItemBlockNode(t,r),p=new s.ListBlockNode(l.RichTextBlock.emptyList(),[d]);return e.concat(p)}if(l.RichTextBlock.isOrderedListItem(t.type)){var h=new s.OrderedListItemBlockNode(t,r),y=new s.OrderedListBlockNode(l.RichTextBlock.emptyOrderedList(),[h]);return e.concat(y)}return e.concat(new s.BlockNode(t.type,t,r))}),[])}}}])&&p(t,n),e}();t.default=b;},function(e,t){e.exports=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};},function(e,t){e.exports=function(e){return "[object String]"===Object.prototype.toString.call(e)};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(new Date).getTime();return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}))};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ListBlockNode=t.OrderedListBlockNode=t.OrderedListItemBlockNode=t.ListItemBlockNode=t.BlockNode=t.TextNode=t.SpanNode=t.Node=void 0;var r,o=(r=n(7))&&r.__esModule?r:{default:r},i=n(2);function u(e){return (u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function l(e,t){return !t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return (f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t);}(e,t);}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var p=function e(t,n,r){d(this,e),this.key=(0,o.default)(),this.type=t,this.element=n,this.children=r;};t.Node=p;var h=function(e){function t(e,n,r,o,i,u){var c;return d(this,t),(c=l(this,f(t).call(this,r,u,i))).start=e,c.end=n,c.text=o,c.children=i,c}return s(t,p),a(t,[{key:"boundaries",value:function(){return {lower:this.start,upper:this.end}}},{key:"isParentOf",value:function(e){return this.start<=e.start&&this.end>=e.end}},{key:"setChildren",value:function(e){return new t(this.start,this.end,this.type,this.text,e,this.element)}}],[{key:"slice",value:function(e,n,r,o){return new t(n,r,e.type,o.slice(n,r),e.children,e.element)}}]),t}();t.SpanNode=h;var y=function(e){function t(e,n,r){d(this,t);var o={type:i.NODE_TYPES.span,start:e,end:n,text:r};return l(this,f(t).call(this,e,n,i.NODE_TYPES.span,r,[],o))}return s(t,h),t}();t.TextNode=y;var v=function(e){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return d(this,t),l(this,f(t).call(this,e,n,r))}return s(t,p),t}();t.BlockNode=v;var m=function(e){function t(e,n){return d(this,t),l(this,f(t).call(this,i.NODE_TYPES.listItem,e,n))}return s(t,v),t}();t.ListItemBlockNode=m;var b=function(e){function t(e,n){return d(this,t),l(this,f(t).call(this,i.NODE_TYPES.oListItem,e,n))}return s(t,v),t}();t.OrderedListItemBlockNode=b;var g=function(e){function t(e,n){return d(this,t),l(this,f(t).call(this,i.NODE_TYPES.oList,e,n))}return s(t,v),a(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.OrderedListBlockNode=g;var x=function(e){function t(e,n){return d(this,t),l(this,f(t).call(this,i.NODE_TYPES.list,e,n))}return s(t,v),a(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.ListBlockNode=x;},function(e,t,n){e.exports=n(10);},function(e,t,n){"use strict";var r=c(n(11)),o=c(n(4)),i=c(n(24)),u=n(2);function c(e){return e&&e.__esModule?e:{default:e}}e.exports={asText:r.default,asTree:o.default.fromRichText,serialize:i.default,Elements:u.NODE_TYPES};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var n="string"==typeof t?t:" ";return e.map((function(e){return e.text})).join(n)};},function(e,t,n){var r=n(0)(n(13)(!0));e.exports=r;},function(e,t,n){var r=n(14);e.exports=function(e){return function t(n){for(var o,i,u,c=[],a=0,l=n.length;a<l;){if(r(n[a]))for(u=0,i=(o=e?t(n[a]):n[a]).length;u<i;)c[c.length]=o[u],u+=1;else c[c.length]=n[a];a+=1;}return c}};},function(e,t,n){var r=n(0),o=n(5),i=n(6),u=r((function(e){return !!o(e)||!!e&&"object"==typeof e&&!i(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1))}));e.exports=u;},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){var r=e(t),o=e(n);return r<o?-1:r>o?1:0}))}));e.exports=r;},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){for(var r=0,o=0;0===r&&o<e.length;)r=e[o](t,n),o+=1;return r}))}));e.exports=r;},function(e,t,n){var r=n(18)(0,-1);e.exports=r;},function(e,t,n){var r=n(19),o=n(20)(r("slice",(function(e,t,n){return Array.prototype.slice.call(n,e,t)})));e.exports=o;},function(e,t,n){var r=n(5);e.exports=function(e,t){return function(){var n=arguments.length;if(0===n)return t();var o=arguments[n-1];return r(o)||"function"!=typeof o[e]?t.apply(this,arguments):o[e].apply(o,Array.prototype.slice.call(arguments,0,n-1))}};},function(e,t,n){var r=n(0),o=n(1),i=n(3);e.exports=function(e){return function t(n,u,c){switch(arguments.length){case 0:return t;case 1:return i(n)?t:o((function(t,r){return e(n,t,r)}));case 2:return i(n)&&i(u)?t:i(n)?o((function(t,n){return e(t,u,n)})):i(u)?o((function(t,r){return e(n,t,r)})):r((function(t){return e(n,u,t)}));default:return i(n)&&i(u)&&i(c)?t:i(n)&&i(u)?o((function(t,n){return e(t,n,c)})):i(n)&&i(c)?o((function(t,n){return e(t,u,n)})):i(u)&&i(c)?o((function(t,r){return e(n,t,r)})):i(n)?r((function(t){return e(t,u,c)})):i(u)?r((function(t){return e(n,t,c)})):i(c)?r((function(t){return e(n,u,t)})):e(n,u,c)}}};},function(e,t,n){var r=n(22)(-1);e.exports=r;},function(e,t,n){var r=n(1),o=n(6),i=r((function(e,t){var n=e<0?t.length+e:e;return o(t)?t.charAt(n):t[n]}));e.exports=i;},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RichTextBlock=void 0;var r=n(2);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.text=n,this.spans=r;}var t,n;return t=e,(n=[{key:"isEmbedBlock",value:function(e){return e===r.NODE_TYPES.embed}},{key:"isImageBlock",value:function(e){return e===r.NODE_TYPES.image}},{key:"isList",value:function(e){return e===r.NODE_TYPES.list}},{key:"isOrderedList",value:function(e){return e===r.NODE_TYPES.oList}},{key:"isListItem",value:function(e){return e===r.NODE_TYPES.listItem}},{key:"isOrderedListItem",value:function(e){return e===r.NODE_TYPES.oListItem}},{key:"emptyList",value:function(){return {type:r.NODE_TYPES.list,spans:[],text:""}}},{key:"emptyOrderedList",value:function(){return {type:r.NODE_TYPES.oList,spans:[],text:""}}}])&&o(t,n),e}();t.RichTextBlock=i;},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(4))&&r.__esModule?r:{default:r},i=n(8);t.default=function(e,t,n){return o.default.fromRichText(e).children.map((function(e,r){return function(e,t,n,r){return function e(n,o){var u=n instanceof i.SpanNode?n.text:null,c=n.children.reduce((function(t,n,r){return t.concat([e(n,r)])}),[]);return r&&r(n.type,n.element,u,c,o)||t(n.type,n.element,u,c,o)}(e,n)}(e,t,r,n)}))};}]);},function(e,t,n){"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var r=/["'&<>]/;e.exports=function(e){var t,n=""+e,o=r.exec(n);if(!o)return n;var i="",u=0,c=0;for(u=o.index;u<n.length;u++){switch(n.charCodeAt(u)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}c!==u&&(i+=n.substring(c,u)),c=u+1,i+=t;}return c!==u?i+n.substring(c,u):i};}])}));
});

const PrismicDOM = unwrapExports(prismicDom_min);
var prismicDom_min_1 = prismicDom_min.PrismicDOM;

const announcementBarCss = "@charset \"UTF-8\";announcement-bar{background:#F8FAFC;box-shadow:0 1px 0px 0 rgba(0, 20, 56, 0.06);position:relative;z-index:999;padding:6px 0 7px;text-align:center;color:#73849A}announcement-bar .container{position:relative;font-size:11px;line-height:1.8em;font-weight:400;letter-spacing:-0.01em;display:flex;flex-wrap:wrap;justify-content:center;align-content:center}announcement-bar .container:before,announcement-bar .container:after{display:none}announcement-bar p{display:inline;margin:4px 0 0;color:#73849A}announcement-bar strong{font-weight:600;color:#020814}announcement-bar a{background-color:var(--color-dodger-blue);color:#fff;border-radius:16px;margin-left:12px;padding:6px 8px 5px;font-weight:600;font-size:9px;line-height:1em;text-decoration:none;text-transform:uppercase;vertical-align:0;white-space:pre;letter-spacing:0.02em;transition:0.2s background-color, 0.2s box-shadow}announcement-bar a::after{font-family:\"Ionicons\";content:\"\";margin-left:3px}announcement-bar a:hover{background-color:--color-dodger-blue-light;box-shadow:0 1px 2px rgba(0, 0, 0, 0.1)}@media (max-width: 768px){announcement-bar{display:none}}.announcement-bar--studio{background-color:#0B0C10;background-image:url(\"https://ionicframework.com/img/products/studio/preheader-bg-2.png\");background-repeat:no-repeat;background-size:1224px 49px;background-position:center;color:#B2BECD;padding:10px 0 12px}.announcement-bar--studio .container{font-size:13px}.announcement-bar--studio .container>div{display:flex;align-items:center;justify-content:center}.announcement-bar--studio .container>div::before{display:block;content:\"\";background-image:url(\"https://ionicframework.com/img/products/studio/studio-logo.svg\");width:78px;height:21px;margin-right:24px}.announcement-bar--studio .container p{margin-bottom:0;color:#b2becd}.announcement-bar--studio a{font-size:11px;padding:10px;margin-left:24px}.announcement-bar--studio a:hover{background-color:#5290ff}";

class AnnouncementBar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.apiURL = 'https://ionicframeworkcom.prismic.io/api/v2';
        this.getLatest();
    }
    async getLatest() {
        const api = await Prismic.getApi(this.apiURL);
        const single = await api.getSingle('ionicons_announcement_bar');
        // console.log(single)
        this.data = single.data;
    }
    render() {
        if (!this.data || Object.keys(this.data).length === 0)
            return;
        return (h("nav", { class: this.data.theme === 'Studio' ? 'announcement-bar--studio' : '' }, h("div", { class: "container" }, h("div", { innerHTML: PrismicDOM.RichText.asHtml(this.data.text) }), h("a", { href: this.data.link.url, target: "_blank" }, this.data.button_text))));
    }
}
AnnouncementBar.style = announcementBarCss;

export { AnnouncementBar as announcement_bar };
