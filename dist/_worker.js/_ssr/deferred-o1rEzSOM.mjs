import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-D75-wYbG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/deferred-o1rEzSOM.js
var $$splitComponentImporter = () => import("./deferred-B8G1jt_n.mjs");
var personServerFn = createServerFn({ method: "GET" }).validator((d) => d).handler(createSsrRpc("f76e8f8721c12c8547a3ced6a10916f5b5076c1a10dcbeaa607360ce419d0a48"));
var slowServerFn = createServerFn({ method: "GET" }).validator((d) => d).handler(createSsrRpc("fc3988c64f434639dfd4eab3f926b87ee39cc0c14f65b4d0e852c7fd73279a3b"));
var Route = createFileRoute("/deferred")({
	loader: async () => {
		return {
			deferredStuff: new Promise((r) => setTimeout(() => r("Hello deferred!"), 2e3)),
			deferredPerson: slowServerFn({ data: "Tanner Linsley" }),
			person: await personServerFn({ data: "John Doe" })
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
