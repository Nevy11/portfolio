import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as fetchPost } from "./posts-CU6GJX_P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/posts._postId-TX3mFRWz.js
var $$splitNotFoundComponentImporter = () => import("./posts._postId-CbA_r6FL.mjs");
var $$splitComponentImporter = () => import("./posts._postId-2k8DtP3G.mjs");
var $$splitErrorComponentImporter = () => import("./posts._postId-BSDyo0dH.mjs");
var Route = createFileRoute("/posts/$postId")({
	loader: ({ params: { postId } }) => fetchPost({ data: postId }),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
