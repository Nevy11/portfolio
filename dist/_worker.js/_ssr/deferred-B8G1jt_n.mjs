import { r as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, y as Await } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./deferred-o1rEzSOM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/deferred-B8G1jt_n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Deferred() {
	const [count, setCount] = (0, import_react.useState)(0);
	const { deferredStuff, deferredPerson, person } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-testid": "regular-person",
				children: [
					person.name,
					" - ",
					person.randomNumber
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Loading person..." }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Await, {
					promise: deferredPerson,
					children: (data) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-testid": "deferred-person",
						children: [
							data.name,
							" - ",
							data.randomNumber
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Loading stuff..." }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Await, {
					promise: deferredStuff,
					children: (data) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						"data-testid": "deferred-stuff",
						children: data
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Count: ", count] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setCount(count + 1),
				children: "Increment"
			}) })
		]
	});
}
//#endregion
export { Deferred as component };
