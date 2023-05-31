import { c as create_ssr_component, e as escape } from './index2-4b0ff9cf.js';
import { c as PUBLIC_TCN_AUTH, d as PUBLIC_DOMAIN } from './public-a46e145d.js';

const LoggedInAs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<div class="${"panel highlight"}"><p>Logged in as <b>${escape(user.username)}</b><span style="${"color: var(--text-secondary)"}">#${escape(user.discriminator)}</span>. Your user ID will be submitted with this form. Not you?
        <a href="${escape(PUBLIC_TCN_AUTH, true) + "/logout?redirect=" + escape(encodeURIComponent(`${PUBLIC_DOMAIN}/apply`), true)}">Log Out</a></p></div>`;
});

export { LoggedInAs as L };
//# sourceMappingURL=LoggedInAs-a9f40ea5.js.map
