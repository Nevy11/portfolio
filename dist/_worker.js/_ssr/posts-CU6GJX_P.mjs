import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-D75-wYbG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/posts-CU6GJX_P.js
var fetchPost = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("0029094260fc8f554fa3ac223696de0e9591567ec6420250e896c91244c812c5"));
var fetchPosts = createServerFn().handler(createSsrRpc("cbb8ca69048418e62742f2c511faa56326b80ace384144a35bb3e0bf5e8124be"));
//#endregion
export { fetchPosts as n, fetchPost as t };
