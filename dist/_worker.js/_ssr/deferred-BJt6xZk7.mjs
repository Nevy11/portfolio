import { r as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-CN-evIEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/deferred-BJt6xZk7.js
var personServerFn_createServerFn_handler = createServerRpc({
	id: "f76e8f8721c12c8547a3ced6a10916f5b5076c1a10dcbeaa607360ce419d0a48",
	name: "personServerFn",
	filename: "src/routes/deferred.tsx"
}, (opts) => personServerFn.__executeServer(opts));
var personServerFn = createServerFn({ method: "GET" }).validator((d) => d).handler(personServerFn_createServerFn_handler, ({ data: name }) => {
	return {
		name,
		randomNumber: Math.floor(Math.random() * 100)
	};
});
var slowServerFn_createServerFn_handler = createServerRpc({
	id: "fc3988c64f434639dfd4eab3f926b87ee39cc0c14f65b4d0e852c7fd73279a3b",
	name: "slowServerFn",
	filename: "src/routes/deferred.tsx"
}, (opts) => slowServerFn.__executeServer(opts));
var slowServerFn = createServerFn({ method: "GET" }).validator((d) => d).handler(slowServerFn_createServerFn_handler, async ({ data: name }) => {
	await new Promise((r) => setTimeout(r, 1e3));
	return {
		name,
		randomNumber: Math.floor(Math.random() * 100)
	};
});
//#endregion
export { personServerFn_createServerFn_handler, slowServerFn_createServerFn_handler };
