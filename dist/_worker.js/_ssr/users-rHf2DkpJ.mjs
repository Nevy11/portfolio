import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users-rHf2DkpJ.js
var $$splitComponentImporter = () => import("./users-Dt7Bbx-4.mjs");
var Route = createFileRoute("/users")({
	loader: async () => {
		const res = await fetch("/api/users");
		if (!res.ok) throw new Error("Unexpected status code");
		return await res.json();
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
