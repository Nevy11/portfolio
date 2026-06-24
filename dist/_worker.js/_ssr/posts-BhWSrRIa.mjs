import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as fetchPosts } from "./posts-CU6GJX_P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/posts-BhWSrRIa.js
var $$splitComponentImporter = () => import("./posts-kbDu2GSC.mjs");
var Route = createFileRoute("/posts")({
	loader: async () => fetchPosts(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
