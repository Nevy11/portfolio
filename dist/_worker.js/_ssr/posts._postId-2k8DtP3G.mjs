import { b as require_jsx_runtime, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./posts._postId-TX3mFRWz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/posts._postId-2k8DtP3G.js
var import_jsx_runtime = require_jsx_runtime();
function PostComponent() {
	const post = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-xl font-bold underline",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm",
				children: post.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/posts/$postId/deep",
				params: { postId: String(post.id) },
				activeProps: { className: "text-black font-bold" },
				className: "inline-block py-1 text-blue-800 hover:text-blue-600",
				children: "Deep View"
			})
		]
	});
}
//#endregion
export { PostComponent as component };
