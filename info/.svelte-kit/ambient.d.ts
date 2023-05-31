
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const TOKEN: string;
	export const CLIENT_ID: string;
	export const CLIENT_SECRET: string;
	export const GIST_TOKEN: string;
	export const MONGO_URI: string;
	export const MONGO_DB: string;
	export const CHANNEL: string;
	export const ALERT: string;
	export const LOG: string;
	export const NON_URGENT: string;
	export const URGENT: string;
	export const DDL_TOKEN: string;
	export const OBSERVER_CHANNEL: string;
	export const APPLICANTS_CHANNEL: string;
	export const OFFICIAL_BUSINESS: string;
	export const NEW_APPLICANT_ALERT_ROLE: string;
	export const NEW_APPLICANT_TAG: string;
	export const SSH_CLIENT: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const SSH_TTY: string;
	export const npm_package_json: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const COLOR: string;
	export const npm_config_metrics_registry: string;
	export const LOGNAME: string;
	export const npm_config_prefix: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_SESSION_ID: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_RUNTIME_DIR: string;
	export const LANG: string;
	export const STY: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const WINDOW: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_DATA_DIRS: string;
	export const SSH_CONNECTION: string;
	export const npm_config_global_prefix: string;
	export const TERMCAP: string;
	export const npm_command: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_ALLOWLIST: string;
	export const PUBLIC_DOMAIN: string;
	export const PUBLIC_TCN_API: string;
	export const PUBLIC_TCN_AUTH: string;
	export const PUBLIC_DIS_API: string;
	export const PUBLIC_DDL_API: string;
	export const PUBLIC_STAGING: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		TOKEN: string;
		CLIENT_ID: string;
		CLIENT_SECRET: string;
		GIST_TOKEN: string;
		MONGO_URI: string;
		MONGO_DB: string;
		CHANNEL: string;
		ALERT: string;
		LOG: string;
		NON_URGENT: string;
		URGENT: string;
		DDL_TOKEN: string;
		OBSERVER_CHANNEL: string;
		APPLICANTS_CHANNEL: string;
		OFFICIAL_BUSINESS: string;
		NEW_APPLICANT_ALERT_ROLE: string;
		NEW_APPLICANT_TAG: string;
		SSH_CLIENT: string;
		USER: string;
		npm_config_user_agent: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		SHLVL: string;
		npm_config_noproxy: string;
		MOTD_SHOWN: string;
		HOME: string;
		SSH_TTY: string;
		npm_package_json: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		COLOR: string;
		npm_config_metrics_registry: string;
		LOGNAME: string;
		npm_config_prefix: string;
		XDG_SESSION_CLASS: string;
		XDG_SESSION_ID: string;
		TERM: string;
		npm_config_cache: string;
		npm_config_node_gyp: string;
		PATH: string;
		NODE: string;
		npm_package_name: string;
		XDG_RUNTIME_DIR: string;
		LANG: string;
		STY: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		WINDOW: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_execpath: string;
		XDG_DATA_DIRS: string;
		SSH_CONNECTION: string;
		npm_config_global_prefix: string;
		TERMCAP: string;
		npm_command: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_ALLOWLIST: string;
		PUBLIC_DOMAIN: string;
		PUBLIC_TCN_API: string;
		PUBLIC_TCN_AUTH: string;
		PUBLIC_DIS_API: string;
		PUBLIC_DDL_API: string;
		PUBLIC_STAGING: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
