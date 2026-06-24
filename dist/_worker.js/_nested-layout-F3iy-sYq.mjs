import { b as require_jsx_runtime, f as Outlet, g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_nested-layout-F3iy-sYq.js
var import_jsx_runtime = require_jsx_runtime();
function LayoutComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "I'm a nested layout" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2 border-b",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/route-a",
				activeProps: { className: "font-bold" },
				children: "Go to route A"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/route-b",
				activeProps: { className: "font-bold" },
				children: "Go to route B"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	] });
}
//#endregion
export { LayoutComponent as component };
