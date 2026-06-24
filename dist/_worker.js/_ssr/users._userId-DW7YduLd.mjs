import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users._userId-DW7YduLd.js
var $$splitNotFoundComponentImporter = () => import("./users._userId-CqJgeTC8.mjs");
var $$splitComponentImporter = () => import("./users._userId-Dl4-hxfM.mjs");
var $$splitErrorComponentImporter = () => import("./users._userId-DNvZtVSX.mjs");
var Route = createFileRoute("/users/$userId")({
	loader: async ({ params: { userId } }) => {
		try {
			const res = await fetch("/api/users/" + userId);
			if (!res.ok) throw new Error("Unexpected status code");
			return await res.json();
		} catch {
			throw new Error("Failed to fetch user");
		}
	},
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
