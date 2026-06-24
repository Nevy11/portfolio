globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
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
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/android-chrome-192x192.png": {
		"type": "image/png",
		"etag": "\"750c-oU2mem0jjZ8XbVMelLzRr7WdVPI\"",
		"mtime": "2026-06-24T09:28:38.779Z",
		"size": 29964,
		"path": "../public/android-chrome-192x192.png"
	},
	"/android-chrome-512x512.png": {
		"type": "image/png",
		"etag": "\"1aad7-TxqzM3JFMTytpE8GX+/4lMPNyzQ\"",
		"mtime": "2026-06-24T09:28:38.776Z",
		"size": 109271,
		"path": "../public/android-chrome-512x512.png"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"5e3-23JXQ+bzISswdmRT9DhqqHtr9xM\"",
		"mtime": "2026-06-24T09:28:38.778Z",
		"size": 1507,
		"path": "../public/favicon.png"
	},
	"/site.webmanifest": {
		"type": "application/manifest+json",
		"etag": "\"168-OLZYaPbcgi7SF/odatSUJ7DocfI\"",
		"mtime": "2026-06-24T09:28:38.778Z",
		"size": 360,
		"path": "../public/site.webmanifest"
	},
	"/assets/PostError-AMOTnAOu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-Ml4M2r9zuPJcbZ2EG2uJrgsyo1Y\"",
		"mtime": "2026-06-24T09:28:37.558Z",
		"size": 162,
		"path": "../public/assets/PostError-AMOTnAOu.js"
	},
	"/assets/_pathlessLayout-Cv5OwC4u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"125-ztZlixzAuywLPOkDESTz6mZIDBs\"",
		"mtime": "2026-06-24T09:28:37.558Z",
		"size": 293,
		"path": "../public/assets/_pathlessLayout-Cv5OwC4u.js"
	},
	"/assets/_nested-layout-DKEN0FI2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21c-JgLOUmTv1OJKUYLYds0HkiexaQo\"",
		"mtime": "2026-06-24T09:28:37.558Z",
		"size": 540,
		"path": "../public/assets/_nested-layout-DKEN0FI2.js"
	},
	"/assets/_slug-wtKISgMe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"157b-Ezo00mo+MpY8w5u/7rQwUSJvpP0\"",
		"mtime": "2026-06-24T09:28:37.558Z",
		"size": 5499,
		"path": "../public/assets/_slug-wtKISgMe.js"
	},
	"/assets/app-BrFag_x0.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"ba5a-TO1NnEDYfZYulIB1FXTx4tCcHv0\"",
		"mtime": "2026-06-24T09:28:37.560Z",
		"size": 47706,
		"path": "../public/assets/app-BrFag_x0.css"
	},
	"/assets/createServerFn-CMV-x-wn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a2c-Fuu88e/ofT+qHsF7SAc16aHo7QE\"",
		"mtime": "2026-06-24T09:28:37.558Z",
		"size": 35372,
		"path": "../public/assets/createServerFn-CMV-x-wn.js"
	},
	"/assets/deferred-CVSSH9d0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3bf-EWoU/uDW+ql1F/RHuQmlrnH1ORM\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 959,
		"path": "../public/assets/deferred-CVSSH9d0.js"
	},
	"/assets/contact-7_5lYKnW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1557-p80YSV3Y/o5dfiUS6efTtoQqMkI\"",
		"mtime": "2026-06-24T09:28:37.558Z",
		"size": 5463,
		"path": "../public/assets/contact-7_5lYKnW.js"
	},
	"/assets/jsx-runtime-CZcjcDnw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e3-jCOgwIq6oGNLw0tt5XnD3UYp7FI\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 1251,
		"path": "../public/assets/jsx-runtime-CZcjcDnw.js"
	},
	"/assets/link-CDfPJaQt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1eb4-XxNHL8XQoUfnuPaZmH40T6rLzao\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 7860,
		"path": "../public/assets/link-CDfPJaQt.js"
	},
	"/assets/matchContext-DEWQRL4I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be-RHyQwRj9+HGSuuTT1Ah9lEcoFG4\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 190,
		"path": "../public/assets/matchContext-DEWQRL4I.js"
	},
	"/assets/invariant-DEEwAagU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c-eVh/3DMi1s3cxf4N/OJar+ew1jA\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 60,
		"path": "../public/assets/invariant-DEEwAagU.js"
	},
	"/assets/posts-CScQQ35Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b8-mAwfmFqFJPtkEx0EqUQJ2tvbVno\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 696,
		"path": "../public/assets/posts-CScQQ35Z.js"
	},
	"/assets/posts._postId-BJfYNodv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23f-NFFclKzYWzLrhRIrh0JyUUAClwE\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 575,
		"path": "../public/assets/posts._postId-BJfYNodv.js"
	},
	"/assets/posts._postId-Lgnosfd1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-7cSJIAlnJkUtUYuLIWl2ToUFJvo\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 174,
		"path": "../public/assets/posts._postId-Lgnosfd1.js"
	},
	"/assets/posts._postId-mpiUL78n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"50-TM/XLD4QtLDQghVh+xhH69VQX6g\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 80,
		"path": "../public/assets/posts._postId-mpiUL78n.js"
	},
	"/assets/index-TD783NJ2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"604a2-jmT180i+TGX2sGzx2E1qUIBm/UQ\"",
		"mtime": "2026-06-24T09:28:37.553Z",
		"size": 394402,
		"path": "../public/assets/index-TD783NJ2.js"
	},
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"8af07-dyuNidfH3P+3aZ6LYbPDi8KUHDk\"",
		"mtime": "2026-06-24T09:28:38.776Z",
		"size": 569095,
		"path": "../public/apple-touch-icon.png"
	},
	"/favicon-16x16.png": {
		"type": "image/png",
		"etag": "\"8af07-dyuNidfH3P+3aZ6LYbPDi8KUHDk\"",
		"mtime": "2026-06-24T09:28:38.776Z",
		"size": 569095,
		"path": "../public/favicon-16x16.png"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"8af07-dyuNidfH3P+3aZ6LYbPDi8KUHDk\"",
		"mtime": "2026-06-24T09:28:38.778Z",
		"size": 569095,
		"path": "../public/favicon.ico"
	},
	"/favicon-32x32.png": {
		"type": "image/png",
		"etag": "\"8af07-dyuNidfH3P+3aZ6LYbPDi8KUHDk\"",
		"mtime": "2026-06-24T09:28:38.778Z",
		"size": 569095,
		"path": "../public/favicon-32x32.png"
	},
	"/assets/posts.index-DsirAFuH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f-u3VJ+HBjbWHb6gjsVbU4iJ5dEaw\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 143,
		"path": "../public/assets/posts.index-DsirAFuH.js"
	},
	"/assets/posts_._postId.deep-Bsikt7NY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ec-6m7NSf/6XQYFZe5rOSUmmiEWjqA\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 492,
		"path": "../public/assets/posts_._postId.deep-Bsikt7NY.js"
	},
	"/assets/posts_._postId.deep-mpiUL78n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"50-TM/XLD4QtLDQghVh+xhH69VQX6g\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 80,
		"path": "../public/assets/posts_._postId.deep-mpiUL78n.js"
	},
	"/assets/projects-Cn8UhfqG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23f6-qfz5IYX33B3jGTDBZBksi/vmCgI\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 9206,
		"path": "../public/assets/projects-Cn8UhfqG.js"
	},
	"/assets/redirect-C-eRQtnH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22d-XWldT6wFIL00QHpfP609loBAcNQ\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 557,
		"path": "../public/assets/redirect-C-eRQtnH.js"
	},
	"/assets/qss-CuvTgpZA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d-p9mdHbVvjisMjOtlVfpG3OYUXKE\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 397,
		"path": "../public/assets/qss-CuvTgpZA.js"
	},
	"/assets/react-DQyofxZ5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d67-snw2lFMbPwvGE1wpDHfmk1LKcs4\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 7527,
		"path": "../public/assets/react-DQyofxZ5.js"
	},
	"/assets/resume-AXEaHQjW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"253b-u5I6l1FEH27nTQW0W8gAD2A8gYw\"",
		"mtime": "2026-06-24T09:28:37.559Z",
		"size": 9531,
		"path": "../public/assets/resume-AXEaHQjW.js"
	},
	"/assets/route-a-DjRdqc6E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87-CgVUJpdFhvWQ/gL0cXwzucH/w84\"",
		"mtime": "2026-06-24T09:28:37.560Z",
		"size": 135,
		"path": "../public/assets/route-a-DjRdqc6E.js"
	},
	"/assets/route-b-CIBUkufO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87-Aoz/3W4qhpEV3Iu1gqoS6S2UBvw\"",
		"mtime": "2026-06-24T09:28:37.560Z",
		"size": 135,
		"path": "../public/assets/route-b-CIBUkufO.js"
	},
	"/assets/routes-D-kMESXp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"50c8-27WroHC9PtN3HSNb6mPGFGrOOuM\"",
		"mtime": "2026-06-24T09:28:37.560Z",
		"size": 20680,
		"path": "../public/assets/routes-D-kMESXp.js"
	},
	"/assets/useStore-DsUukYHc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4abc-BQF75b2Ek4RRyBtvFeWX0KqfAmU\"",
		"mtime": "2026-06-24T09:28:37.560Z",
		"size": 19132,
		"path": "../public/assets/useStore-DsUukYHc.js"
	},
	"/assets/users-BOTlxJiq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2af-7i2ftP3mDwMf8trhgbz42ZAAjDQ\"",
		"mtime": "2026-06-24T09:28:37.560Z",
		"size": 687,
		"path": "../public/assets/users-BOTlxJiq.js"
	},
	"/assets/users._userId-BMqjoKEu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f0-f1Zyr8FJz57cg6dHKmBDV6SYgdA\"",
		"mtime": "2026-06-24T09:28:37.560Z",
		"size": 496,
		"path": "../public/assets/users._userId-BMqjoKEu.js"
	},
	"/assets/users._userId-CdC8cTKm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-kfuiNIJ6vt5BuCL340QRkZcB0Bs\"",
		"mtime": "2026-06-24T09:28:37.560Z",
		"size": 174,
		"path": "../public/assets/users._userId-CdC8cTKm.js"
	},
	"/assets/users._userId-WtrtRXVp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b7-T+vDtSoIwfZ4Nt5ACHbcGPR6YpQ\"",
		"mtime": "2026-06-24T09:28:37.560Z",
		"size": 183,
		"path": "../public/assets/users._userId-WtrtRXVp.js"
	},
	"/assets/users.index-D2VkAA_Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10b-PQBVUcorJxhIGXf3UAXrCEb4Qbw\"",
		"mtime": "2026-06-24T09:28:37.560Z",
		"size": 267,
		"path": "../public/assets/users.index-D2VkAA_Q.js"
	},
	"/projects/codevia.jpg": {
		"type": "image/jpeg",
		"etag": "\"71be9-hf0XMulPfi8Eu6wUckYt1uAnNFM\"",
		"mtime": "2026-06-24T09:28:38.773Z",
		"size": 465897,
		"path": "../public/projects/codevia.jpg"
	},
	"/projects/sbf.jpg": {
		"type": "image/jpeg",
		"etag": "\"80baf-6L0jhWWwJRcGsihqr8/Yu11fo7k\"",
		"mtime": "2026-06-24T09:28:38.774Z",
		"size": 527279,
		"path": "../public/projects/sbf.jpg"
	},
	"/projects/vault.jpg": {
		"type": "image/jpeg",
		"etag": "\"8d0cd-dxs7cLH813ZhxAvXOCNmbIEN18c\"",
		"mtime": "2026-06-24T09:28:38.774Z",
		"size": 577741,
		"path": "../public/projects/vault.jpg"
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
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
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
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
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
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
