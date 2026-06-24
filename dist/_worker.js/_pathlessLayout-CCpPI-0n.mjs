import { b as require_jsx_runtime, f as Outlet } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_pathlessLayout-CCpPI-0n.js
var import_jsx_runtime = require_jsx_runtime();
function LayoutComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b",
			children: "I'm a layout"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })]
	});
}
//#endregion
export { LayoutComponent as component };
