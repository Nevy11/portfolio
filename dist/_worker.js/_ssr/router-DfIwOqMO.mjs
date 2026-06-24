import { N as redirect, _ as useRouter, b as require_jsx_runtime, c as HeadContent, d as createRouter, g as Link, h as createRootRoute, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as ErrorComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getRequestHeaders, n as createMiddleware } from "./ssr.mjs";
import { t as Route$12 } from "./deferred-o1rEzSOM.mjs";
import { t as Route$13 } from "./posts-BhWSrRIa.mjs";
import { t as Route$14 } from "./posts._postId-TX3mFRWz.mjs";
import { t as NotFound } from "./NotFound-Dl6IYNxn.mjs";
import { t as Route$15 } from "./posts_._postId.deep-L1UwU1Fu.mjs";
import { t as createLucideIcon } from "./createLucideIcon-Cg9NeU7a.mjs";
import { t as Route$16 } from "./users-rHf2DkpJ.mjs";
import { t as Route$17 } from "./users._userId-DW7YduLd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DfIwOqMO.js
var import_jsx_runtime = require_jsx_runtime();
function DefaultCatchBoundary({ error }) {
	const router = useRouter();
	const isRoot = useLocation({ select: (location) => location.pathname === "/" });
	console.error("DefaultCatchBoundary Error:", error);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorComponent, { error }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2 items-center flex-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					router.invalidate();
				},
				className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
				children: "Try Again"
			}), isRoot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
				children: "Home"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
				onClick: (e) => {
					e.preventDefault();
					window.history.back();
				},
				children: "Go Back"
			})]
		})]
	});
}
var app_default = "/assets/app-D8VfKU2k.css";
var seo = ({ title, description, keywords, image }) => {
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			name: "keywords",
			content: keywords
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		},
		{
			name: "twitter:creator",
			content: "@tannerlinsley"
		},
		{
			name: "twitter:site",
			content: "@tannerlinsley"
		},
		{
			name: "og:type",
			content: "website"
		},
		{
			name: "og:title",
			content: title
		},
		{
			name: "og:description",
			content: description
		},
		...image ? [
			{
				name: "twitter:image",
				content: image
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "og:image",
				content: image
			}
		] : []
	];
};
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]);
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Terminal = createLucideIcon("terminal", [["path", {
	d: "M12 19h8",
	key: "baeox8"
}], ["path", {
	d: "m4 17 6-6-6-6",
	key: "1yngyt"
}]]);
var Github = ({ className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "none",
	className,
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" })
});
var Linkedin = ({ className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	className,
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "2",
			y: "9",
			width: "4",
			height: "12"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "4",
			cy: "4",
			r: "2"
		})
	]
});
var Route$11 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			...seo({
				title: "Nevy | Senior Frontend Engineer & UI/UX Designer",
				description: `Portfolio of Nevy - Architecting secure systems and intelligent interfaces.`
			})
		],
		links: [
			{
				rel: "stylesheet",
				href: app_default
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest",
				color: "#020617"
			},
			{
				rel: "icon",
				href: "/favicon.ico"
			}
		],
		scripts: [{
			src: "/customScript.js",
			type: "text/javascript"
		}]
	}),
	errorComponent: DefaultCatchBoundary,
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-slate-950 text-slate-200 font-sans antialiased min-h-screen flex flex-col selection:bg-emerald-500/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-1.5 bg-emerald-500/10 rounded-md border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "w-5 h-5 text-emerald-400" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold text-lg tracking-tight text-white",
								children: ["Nevy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-emerald-400",
									children: ".dev"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex items-center gap-6 text-sm font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "text-slate-400 hover:text-white transition-colors",
									activeProps: { className: "text-white" },
									activeOptions: { exact: true },
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#projects",
									className: "text-slate-400 hover:text-white transition-colors",
									children: "Projects"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://github.com/Nevy11",
									target: "_blank",
									rel: "noreferrer",
									className: "text-slate-400 hover:text-white transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-5 h-5" })
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "border-t border-slate-800 bg-slate-950/50 py-8 mt-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-slate-500",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Nevy. All rights reserved. Building secure & scalable systems."
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-slate-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://github.com/Nevy11",
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-emerald-400 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-emerald-400 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-emerald-400 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4" })
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var Route$10 = createFileRoute("/redirect")({ beforeLoad: () => {
	throw redirect({ to: "/posts" });
} });
var Route$9 = createFileRoute("/customScript.js")({ server: { handlers: { GET: () => {
	return new Response("console.log(\"Hello from customScript.js!\")", { headers: { "Content-Type": "application/javascript" } });
} } } });
var $$splitComponentImporter$6 = () => import("../_pathlessLayout-CCpPI-0n.mjs");
var Route$8 = createFileRoute("/_pathlessLayout")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./routes-BM67U3QY.mjs");
var Route$7 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./users.index-DaiHTr72.mjs");
var Route$6 = createFileRoute("/users/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./posts.index-HwbbsNBt.mjs");
var Route$5 = createFileRoute("/posts/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var userLoggerMiddleware = createMiddleware().server(async ({ next }) => {
	console.info("In: /users");
	console.info("Request Headers:", getRequestHeaders());
	const result = await next();
	result.response.headers.set("x-users", "true");
	console.info("Out: /users");
	return result;
});
var testParentMiddleware = createMiddleware().server(async ({ next }) => {
	console.info("In: testParentMiddleware");
	const result = await next();
	result.response.headers.set("x-test-parent", "true");
	console.info("Out: testParentMiddleware");
	return result;
});
var testMiddleware = createMiddleware().middleware([testParentMiddleware]).server(async ({ next }) => {
	console.info("In: testMiddleware");
	const result = await next();
	result.response.headers.set("x-test", "true");
	console.info("Out: testMiddleware");
	return result;
});
var Route$4 = createFileRoute("/api/users")({ server: {
	middleware: [testMiddleware, userLoggerMiddleware],
	handlers: { GET: async ({ request }) => {
		console.info("GET /api/users @", request.url);
		console.info("Fetching users... @", request.url);
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
		if (!res.ok) throw new Error("Failed to fetch users");
		const list = (await res.json()).slice(0, 10);
		return Response.json(list.map((u) => ({
			id: u.id,
			name: u.name,
			email: u.email
		})));
	} }
} });
var $$splitComponentImporter$2 = () => import("../_nested-layout-F3iy-sYq.mjs");
var Route$3 = createFileRoute("/_pathlessLayout/_nested-layout")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var Route$2 = createFileRoute("/api/users/$userId")({ server: { handlers: { GET: async ({ params, request }) => {
	console.info(`Fetching users by id=${params.userId}... @`, request.url);
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/users/" + params.userId);
		if (!res.ok) throw new Error("Failed to fetch user");
		const user = await res.json();
		return Response.json({
			id: user.id,
			name: user.name,
			email: user.email
		});
	} catch (e) {
		console.error(e);
		return Response.json({ error: "User not found" }, { status: 404 });
	}
} } } });
var $$splitComponentImporter$1 = () => import("./route-b-DlYh_Qlw.mjs");
var Route$1 = createFileRoute("/_pathlessLayout/_nested-layout/route-b")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./route-a-CDBFvAvf.mjs");
var Route = createFileRoute("/_pathlessLayout/_nested-layout/route-a")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var UsersRoute = Route$16.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => Route$11
});
var RedirectRoute = Route$10.update({
	id: "/redirect",
	path: "/redirect",
	getParentRoute: () => Route$11
});
var PostsRoute = Route$13.update({
	id: "/posts",
	path: "/posts",
	getParentRoute: () => Route$11
});
var DeferredRoute = Route$12.update({
	id: "/deferred",
	path: "/deferred",
	getParentRoute: () => Route$11
});
var CustomScriptDotjsRoute = Route$9.update({
	id: "/customScript.js",
	path: "/customScript.js",
	getParentRoute: () => Route$11
});
var PathlessLayoutRoute = Route$8.update({
	id: "/_pathlessLayout",
	getParentRoute: () => Route$11
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var UsersIndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => UsersRoute
});
var PostsIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => PostsRoute
});
var UsersUserIdRoute = Route$17.update({
	id: "/$userId",
	path: "/$userId",
	getParentRoute: () => UsersRoute
});
var PostsPostIdRoute = Route$14.update({
	id: "/$postId",
	path: "/$postId",
	getParentRoute: () => PostsRoute
});
var ApiUsersRoute = Route$4.update({
	id: "/api/users",
	path: "/api/users",
	getParentRoute: () => Route$11
});
var PathlessLayoutNestedLayoutRoute = Route$3.update({
	id: "/_nested-layout",
	getParentRoute: () => PathlessLayoutRoute
});
var PostsPostIdDeepRoute = Route$15.update({
	id: "/posts_/$postId/deep",
	path: "/posts/$postId/deep",
	getParentRoute: () => Route$11
});
var ApiUsersUserIdRoute = Route$2.update({
	id: "/$userId",
	path: "/$userId",
	getParentRoute: () => ApiUsersRoute
});
var PathlessLayoutNestedLayoutRouteBRoute = Route$1.update({
	id: "/route-b",
	path: "/route-b",
	getParentRoute: () => PathlessLayoutNestedLayoutRoute
});
var PathlessLayoutNestedLayoutRouteChildren = {
	PathlessLayoutNestedLayoutRouteARoute: Route.update({
		id: "/route-a",
		path: "/route-a",
		getParentRoute: () => PathlessLayoutNestedLayoutRoute
	}),
	PathlessLayoutNestedLayoutRouteBRoute
};
var PathlessLayoutRouteChildren = { PathlessLayoutNestedLayoutRoute: PathlessLayoutNestedLayoutRoute._addFileChildren(PathlessLayoutNestedLayoutRouteChildren) };
var PathlessLayoutRouteWithChildren = PathlessLayoutRoute._addFileChildren(PathlessLayoutRouteChildren);
var PostsRouteChildren = {
	PostsPostIdRoute,
	PostsIndexRoute
};
var PostsRouteWithChildren = PostsRoute._addFileChildren(PostsRouteChildren);
var UsersRouteChildren = {
	UsersUserIdRoute,
	UsersIndexRoute
};
var UsersRouteWithChildren = UsersRoute._addFileChildren(UsersRouteChildren);
var ApiUsersRouteChildren = { ApiUsersUserIdRoute };
var rootRouteChildren = {
	IndexRoute,
	PathlessLayoutRoute: PathlessLayoutRouteWithChildren,
	CustomScriptDotjsRoute,
	DeferredRoute,
	PostsRoute: PostsRouteWithChildren,
	RedirectRoute,
	UsersRoute: UsersRouteWithChildren,
	ApiUsersRoute: ApiUsersRoute._addFileChildren(ApiUsersRouteChildren),
	PostsPostIdDeepRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		defaultPreload: "intent",
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}),
		scrollRestoration: true
	});
}
//#endregion
export { getRouter };
