import { b as require_jsx_runtime, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./posts_._postId.deep-L1UwU1Fu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/posts_._postId.deep-jUyA5JDl.js
var import_jsx_runtime = require_jsx_runtime();
function PostDeepComponent() {
	const post = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-2 space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/posts",
				className: "block py-1 text-blue-800 hover:text-blue-600",
				children: "← All Posts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-xl font-bold underline",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm",
				children: post.body
			})
		]
	});
}
//#endregion
export { PostDeepComponent as component };
