import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as fetchPost } from "./posts-CU6GJX_P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/posts_._postId.deep-L1UwU1Fu.js
var $$splitComponentImporter = () => import("./posts_._postId.deep-jUyA5JDl.mjs");
var $$splitErrorComponentImporter = () => import("./posts_._postId.deep-a_3CMs52.mjs");
var Route = createFileRoute("/posts_/$postId/deep")({
	loader: async ({ params: { postId } }) => fetchPost({ data: postId }),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
