import { b as require_jsx_runtime, f as Outlet, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./users-rHf2DkpJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users-Dt7Bbx-4.js
var import_jsx_runtime = require_jsx_runtime();
function UsersComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-2 flex gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc pl-4",
				children: [...Route.useLoaderData(), {
					id: "i-do-not-exist",
					name: "Non-existent User",
					email: ""
				}].map((user) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "whitespace-nowrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/users/$userId",
							params: { userId: String(user.id) },
							className: "block py-1 text-blue-800 hover:text-blue-600",
							activeProps: { className: "text-black font-bold" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: user.name })
						})
					}, user.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		]
	});
}
//#endregion
export { UsersComponent as component };
