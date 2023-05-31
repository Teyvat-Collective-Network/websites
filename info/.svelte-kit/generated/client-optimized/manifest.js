export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32')];

export const server_loads = [0];

export const dictionary = {
	"/": [2],
	"/about": [3],
	"/apply": [4],
	"/banshare": [5],
	"/calendar": [6],
	"/contact": [7],
	"/featured": [8],
	"/info/akasha": [9],
	"/info/banshares": [10],
	"/info/definitions-organization": [11],
	"/info/directory": [12],
	"/info/discord": [13],
	"/info/discord/embeds": [14],
	"/info/discord/permission-list": [15],
	"/info/discord/permissions": [16],
	"/info/discord/webhooks": [17],
	"/info/global": [18],
	"/info/hq": [19],
	"/info/other-bots": [20],
	"/info/other-bots/banhammer": [21],
	"/info/other-bots/daedalus": [22],
	"/info/other-bots/ruin-hunter": [23],
	"/info/partner-list": [24],
	"/info/procedures": [25],
	"/info/quickstart": [26],
	"/info/rules": [27],
	"/info/staff-link": [28],
	"/info/voting": [29],
	"/join": [30],
	"/observation-faq": [31],
	"/partners": [32]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};