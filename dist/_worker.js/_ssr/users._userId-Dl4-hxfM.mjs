import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./users._userId-DW7YduLd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users._userId-Dl4-hxfM.js
var import_jsx_runtime = require_jsx_runtime();
function UserComponent() {
	const user = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-xl font-bold underline",
				children: user.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm",
				children: user.email
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `/api/users/${user.id}`,
				className: "text-blue-800 hover:text-blue-600 underline",
				children: "View as JSON"
			}) })
		]
	});
}
//#endregion
export { UserComponent as component };
