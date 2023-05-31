export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","styles/dark.css","styles/light.css","styles/stylesheet.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-72086eed.js","imports":["_app/immutable/start-72086eed.js","_app/immutable/chunks/index-c4baf36c.js","_app/immutable/chunks/singletons-de3a7191.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js'),
			() => import('./nodes/32.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/abort",
				pattern: /^\/abort\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/abort/_server.ts.js')
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/observers",
				pattern: /^\/api\/observers\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/observers/_server.ts.js')
			},
			{
				id: "/apply",
				pattern: /^\/apply\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/banshare",
				pattern: /^\/banshare\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/calendar",
				pattern: /^\/calendar\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/command-data",
				pattern: /^\/command-data\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/command-data/_server.ts.js')
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/featured",
				pattern: /^\/featured\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/fetch-invite",
				pattern: /^\/fetch-invite\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/fetch-invite/_server.ts.js')
			},
			{
				id: "/fetch",
				pattern: /^\/fetch\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/fetch/_server.ts.js')
			},
			{
				id: "/info/akasha",
				pattern: /^\/info\/akasha\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/info/banshares",
				pattern: /^\/info\/banshares\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/info/definitions-organization",
				pattern: /^\/info\/definitions-organization\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/info/directory",
				pattern: /^\/info\/directory\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/info/discord",
				pattern: /^\/info\/discord\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/info/discord/embeds",
				pattern: /^\/info\/discord\/embeds\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/info/discord/permission-list",
				pattern: /^\/info\/discord\/permission-list\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/info/discord/permissions",
				pattern: /^\/info\/discord\/permissions\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/info/discord/webhooks",
				pattern: /^\/info\/discord\/webhooks\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/info/global",
				pattern: /^\/info\/global\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/info/hq",
				pattern: /^\/info\/hq\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/info/other-bots",
				pattern: /^\/info\/other-bots\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			},
			{
				id: "/info/other-bots/banhammer",
				pattern: /^\/info\/other-bots\/banhammer\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 21 },
				endpoint: null
			},
			{
				id: "/info/other-bots/daedalus",
				pattern: /^\/info\/other-bots\/daedalus\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 22 },
				endpoint: null
			},
			{
				id: "/info/other-bots/ruin-hunter",
				pattern: /^\/info\/other-bots\/ruin-hunter\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 23 },
				endpoint: null
			},
			{
				id: "/info/partner-list",
				pattern: /^\/info\/partner-list\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 24 },
				endpoint: null
			},
			{
				id: "/info/procedures",
				pattern: /^\/info\/procedures\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 25 },
				endpoint: null
			},
			{
				id: "/info/quickstart",
				pattern: /^\/info\/quickstart\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 26 },
				endpoint: null
			},
			{
				id: "/info/rules",
				pattern: /^\/info\/rules\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 27 },
				endpoint: null
			},
			{
				id: "/info/staff-link",
				pattern: /^\/info\/staff-link\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 28 },
				endpoint: null
			},
			{
				id: "/info/voting",
				pattern: /^\/info\/voting\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 29 },
				endpoint: null
			},
			{
				id: "/join",
				pattern: /^\/join\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 30 },
				endpoint: null
			},
			{
				id: "/observation-faq",
				pattern: /^\/observation-faq\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 31 },
				endpoint: null
			},
			{
				id: "/partners",
				pattern: /^\/partners\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 32 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
