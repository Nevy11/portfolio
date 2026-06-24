import { b as require_jsx_runtime, f as Outlet, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./posts-BhWSrRIa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/posts-kbDu2GSC.js
var import_jsx_runtime = require_jsx_runtime();
function PostsComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-2 flex gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc pl-4",
				children: [...Route.useLoaderData(), {
					id: "i-do-not-exist",
					title: "Non-existent Post"
				}].map((post) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "whitespace-nowrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/posts/$postId",
							params: { postId: String(post.id) },
							className: "block py-1 text-blue-800 hover:text-blue-600",
							activeProps: { className: "text-black font-bold" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: post.title.substring(0, 20) })
						})
					}, post.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		]
	});
}
//#endregion
export { PostsComponent as component };
