import { I as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-CN-evIEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/posts-D5R4Oql5.js
var fetchPost_createServerFn_handler = createServerRpc({
	id: "0029094260fc8f554fa3ac223696de0e9591567ec6420250e896c91244c812c5",
	name: "fetchPost",
	filename: "src/utils/posts.tsx"
}, (opts) => fetchPost.__executeServer(opts));
var fetchPost = createServerFn({ method: "POST" }).validator((d) => d).handler(fetchPost_createServerFn_handler, async ({ data }) => {
	console.info(`Fetching post with id ${data}...`);
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${data}`);
	if (!res.ok) {
		if (res.status === 404) throw notFound();
		throw new Error("Failed to fetch post");
	}
	return await res.json();
});
var fetchPosts_createServerFn_handler = createServerRpc({
	id: "cbb8ca69048418e62742f2c511faa56326b80ace384144a35bb3e0bf5e8124be",
	name: "fetchPosts",
	filename: "src/utils/posts.tsx"
}, (opts) => fetchPosts.__executeServer(opts));
var fetchPosts = createServerFn().handler(fetchPosts_createServerFn_handler, async () => {
	console.info("Fetching posts...");
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	if (!res.ok) throw new Error("Failed to fetch posts");
	return (await res.json()).slice(0, 10);
});
//#endregion
export { fetchPost_createServerFn_handler, fetchPosts_createServerFn_handler };
