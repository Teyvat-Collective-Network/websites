const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","styles/dark.css","styles/light.css","styles/stylesheet.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-72086eed.js","imports":["_app/immutable/start-72086eed.js","_app/immutable/chunks/index-c4baf36c.js","_app/immutable/chunks/singletons-de3a7191.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-59427183.js'),
			() => import('./chunks/1-60f4bbd6.js'),
			() => import('./chunks/2-4be08dbe.js'),
			() => import('./chunks/3-43e9f3ce.js'),
			() => import('./chunks/4-f97cdf80.js'),
			() => import('./chunks/5-40d1b82b.js'),
			() => import('./chunks/6-2ce6d1d7.js'),
			() => import('./chunks/7-7b00e823.js'),
			() => import('./chunks/8-ef4697e9.js'),
			() => import('./chunks/9-05a2336c.js'),
			() => import('./chunks/10-929c6451.js'),
			() => import('./chunks/11-f9344852.js'),
			() => import('./chunks/12-5448090c.js'),
			() => import('./chunks/13-bbf471fb.js'),
			() => import('./chunks/14-c4d7ae9c.js'),
			() => import('./chunks/15-1999efad.js'),
			() => import('./chunks/16-35a60ceb.js'),
			() => import('./chunks/17-1abe395b.js'),
			() => import('./chunks/18-17449965.js'),
			() => import('./chunks/19-bea2910a.js'),
			() => import('./chunks/20-701328f7.js'),
			() => import('./chunks/21-9d42a95d.js'),
			() => import('./chunks/22-77e78b5d.js'),
			() => import('./chunks/23-f60c6694.js'),
			() => import('./chunks/24-8689dcb3.js'),
			() => import('./chunks/25-8140f8ae.js'),
			() => import('./chunks/26-8b53c4df.js'),
			() => import('./chunks/27-eb02cdab.js'),
			() => import('./chunks/28-31154932.js'),
			() => import('./chunks/29-c7e2072f.js'),
			() => import('./chunks/30-4cb1aad4.js'),
			() => import('./chunks/31-7fcfad89.js'),
			() => import('./chunks/32-8542f181.js')
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
				endpoint: () => import('./chunks/_server.ts-c6077c10.js')
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
				endpoint: () => import('./chunks/_server.ts-89b684a1.js')
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
				endpoint: () => import('./chunks/_server.ts-67431e0a.js')
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
				endpoint: () => import('./chunks/_server.ts-581612af.js')
			},
			{
				id: "/fetch",
				pattern: /^\/fetch\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-0fc1a936.js')
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

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
