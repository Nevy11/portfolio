globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs").then((n) => n.o)) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_0tPQiA = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_0tPQiA
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function createNitroApp() {
	const hooks = void 0;
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		{
			const routeRules = getRouteRules(method, pathname);
			event.context.routeRules = routeRules?.routeRules;
			if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		}
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	for (const rule of Object.values(routeRules)) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/android-chrome-192x192.png": {
		"type": "image/png",
		"etag": "\"750c-oU2mem0jjZ8XbVMelLzRr7WdVPI\"",
		"mtime": "2026-06-24T08:00:16.831Z",
		"size": 29964,
		"path": "../android-chrome-192x192.png"
	},
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"6a6e-DDBGYLGi+sElNLs2+1QICHz5lS4\"",
		"mtime": "2026-06-24T08:00:16.831Z",
		"size": 27246,
		"path": "../apple-touch-icon.png"
	},
	"/android-chrome-512x512.png": {
		"type": "image/png",
		"etag": "\"1aad7-TxqzM3JFMTytpE8GX+/4lMPNyzQ\"",
		"mtime": "2026-06-24T08:00:16.831Z",
		"size": 109271,
		"path": "../android-chrome-512x512.png"
	},
	"/favicon-16x16.png": {
		"type": "image/png",
		"etag": "\"340-GSBMkU3R13NnICO2UG+wPm8sJhM\"",
		"mtime": "2026-06-24T08:00:16.831Z",
		"size": 832,
		"path": "../favicon-16x16.png"
	},
	"/favicon-32x32.png": {
		"type": "image/png",
		"etag": "\"843-o7V/FkCz36zCpGs0pydBZ+gbsCw\"",
		"mtime": "2026-06-24T08:00:16.831Z",
		"size": 2115,
		"path": "../favicon-32x32.png"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"3c2e-R2UvDwRFCsnzRE8fcnOLMp5+Svo\"",
		"mtime": "2026-06-24T08:00:16.831Z",
		"size": 15406,
		"path": "../favicon.ico"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"5e3-23JXQ+bzISswdmRT9DhqqHtr9xM\"",
		"mtime": "2026-06-24T08:00:16.831Z",
		"size": 1507,
		"path": "../favicon.png"
	},
	"/site.webmanifest": {
		"type": "application/manifest+json",
		"etag": "\"168-OLZYaPbcgi7SF/odatSUJ7DocfI\"",
		"mtime": "2026-06-24T08:00:16.831Z",
		"size": 360,
		"path": "../site.webmanifest"
	},
	"/assets/PostError-DWTbX6pB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-v4VIRVpZ+NoA4K4zTJYy9iC4pl4\"",
		"mtime": "2026-06-24T08:00:15.768Z",
		"size": 162,
		"path": "../assets/PostError-DWTbX6pB.js"
	},
	"/assets/_nested-layout-DglEDpD2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21c-L0MfSG6bWWVbJY/geLZNH+t3Pko\"",
		"mtime": "2026-06-24T08:00:15.768Z",
		"size": 540,
		"path": "../assets/_nested-layout-DglEDpD2.js"
	},
	"/assets/_pathlessLayout-BSujM3_b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"125-Oek8A8Z1SbV9ZvvHxg/uvFpqH8s\"",
		"mtime": "2026-06-24T08:00:15.768Z",
		"size": 293,
		"path": "../assets/_pathlessLayout-BSujM3_b.js"
	},
	"/assets/app-D8VfKU2k.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"677a-cWcZm3An11aciD6IUIx+Bm8k64c\"",
		"mtime": "2026-06-24T08:00:15.771Z",
		"size": 26490,
		"path": "../assets/app-D8VfKU2k.css"
	},
	"/assets/createServerFn-Clu0_Wt0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a34-zrbaDDFRoIAsAA6GWTNclQxjQ6Q\"",
		"mtime": "2026-06-24T08:00:15.768Z",
		"size": 35380,
		"path": "../assets/createServerFn-Clu0_Wt0.js"
	},
	"/assets/deferred-Djnm8yyf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ba-iGKbZYcJ5gZb8ROci2TMA6YIIBg\"",
		"mtime": "2026-06-24T08:00:15.768Z",
		"size": 954,
		"path": "../assets/deferred-Djnm8yyf.js"
	},
	"/assets/jsx-runtime-DGeXAQPT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ab-mgnSm9dUpwL2+z7tKxJ2MsN0fOM\"",
		"mtime": "2026-06-24T08:00:15.768Z",
		"size": 939,
		"path": "../assets/jsx-runtime-DGeXAQPT.js"
	},
	"/assets/link-BdUDA3sm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1eb4-ftYksoglJz95NzCCCP/iy+ZowH8\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 7860,
		"path": "../assets/link-BdUDA3sm.js"
	},
	"/assets/index-DsV18TT0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"40175-iM6jcBghOKgwpOXgl3uyKamMwfI\"",
		"mtime": "2026-06-24T08:00:15.762Z",
		"size": 262517,
		"path": "../assets/index-DsV18TT0.js"
	},
	"/assets/matchContext-B7exsrUO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e7-bTiMvcudDkO4qS2YfMrbBVqyA60\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 743,
		"path": "../assets/matchContext-B7exsrUO.js"
	},
	"/assets/posts-CRuKh2lx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b8-iX8BWJu+yZWlqwZ5xSQjd8ymw84\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 696,
		"path": "../assets/posts-CRuKh2lx.js"
	},
	"/assets/posts._postId-DbvWOMRX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"50-Fov9dGvxk2Kxf/SfVsUSM8CY4yg\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 80,
		"path": "../assets/posts._postId-DbvWOMRX.js"
	},
	"/assets/posts._postId-bpOn1hes.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-dOQ2bV2b5NedG/fPqOL3YO/rPQ0\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 174,
		"path": "../assets/posts._postId-bpOn1hes.js"
	},
	"/assets/posts._postId-pl8ugNiQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23f-bO3EMKOVV9dpy4fdSwGfHji8hoo\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 575,
		"path": "../assets/posts._postId-pl8ugNiQ.js"
	},
	"/assets/posts.index-lu8zzLlY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f-CXbzGs5tXeLQZ7CGbz4dVttCDo4\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 143,
		"path": "../assets/posts.index-lu8zzLlY.js"
	},
	"/assets/posts_._postId.deep-B3Tek35_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ec-vcN/uzWir0ufoJLkgSs9Ra7S0ng\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 492,
		"path": "../assets/posts_._postId.deep-B3Tek35_.js"
	},
	"/assets/posts_._postId.deep-DbvWOMRX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"50-Fov9dGvxk2Kxf/SfVsUSM8CY4yg\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 80,
		"path": "../assets/posts_._postId.deep-DbvWOMRX.js"
	},
	"/assets/qss-CuvTgpZA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d-p9mdHbVvjisMjOtlVfpG3OYUXKE\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 397,
		"path": "../assets/qss-CuvTgpZA.js"
	},
	"/assets/react-3W8R1pOO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d67-k/jMp8fiUtK0ff0w41r7/zWi1Jo\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 7527,
		"path": "../assets/react-3W8R1pOO.js"
	},
	"/assets/route-a-MlRElEKG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87-TbdNcVYuumvJP7WgHeBYzzNEqE4\"",
		"mtime": "2026-06-24T08:00:15.769Z",
		"size": 135,
		"path": "../assets/route-a-MlRElEKG.js"
	},
	"/assets/route-b-czbcD774.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87-fCVQmkg+eQhXvo5EDXBTI0AL5/0\"",
		"mtime": "2026-06-24T08:00:15.770Z",
		"size": 135,
		"path": "../assets/route-b-czbcD774.js"
	},
	"/assets/routes-nNG-fjKv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f8c-yZs3kos1aTvwxRtUZO9LkUEzV1I\"",
		"mtime": "2026-06-24T08:00:15.770Z",
		"size": 12172,
		"path": "../assets/routes-nNG-fjKv.js"
	},
	"/assets/users-C9YIvTGn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2af-TtBdsQ4SgjIusKi3Q8LA3Pv5YDk\"",
		"mtime": "2026-06-24T08:00:15.770Z",
		"size": 687,
		"path": "../assets/users-C9YIvTGn.js"
	},
	"/assets/useStore-D40c3x5w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ac4-EaqHIpld8pXcuLiZkB7Nw+7nH6c\"",
		"mtime": "2026-06-24T08:00:15.770Z",
		"size": 19140,
		"path": "../assets/useStore-D40c3x5w.js"
	},
	"/assets/users._userId-1rsICL1k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f0-FTKrfLttHlQ6n+pPPBNg/zQuK8E\"",
		"mtime": "2026-06-24T08:00:15.770Z",
		"size": 496,
		"path": "../assets/users._userId-1rsICL1k.js"
	},
	"/assets/users._userId-DUUMvj-W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-rdvQWxtG8z3JSgihZV3TkrRT1uk\"",
		"mtime": "2026-06-24T08:00:15.770Z",
		"size": 174,
		"path": "../assets/users._userId-DUUMvj-W.js"
	},
	"/assets/users._userId-skI_HIQ1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b7-INkeQc0cDwzVnLZoDIk2xd5SBPU\"",
		"mtime": "2026-06-24T08:00:15.770Z",
		"size": 183,
		"path": "../assets/users._userId-skI_HIQ1.js"
	},
	"/assets/users.index-DfnkP4Uw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10b-L56KyGbOF7nJ74icKZOk62oUe/o\"",
		"mtime": "2026-06-24T08:00:15.770Z",
		"size": 267,
		"path": "../assets/users.index-DfnkP4Uw.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-pages.mjs
var nitroApp = useNitroApp();
var cloudflare_pages_default = {
	async fetch(cfReq, env, context) {
		augmentReq(cfReq, {
			env,
			context
		});
		const url = new URL(cfReq.url);
		if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfReq);
		return nitroApp.fetch(cfReq);
	},
	scheduled(event, env, context) {}
};
//#endregion
export { cloudflare_pages_default as default };
