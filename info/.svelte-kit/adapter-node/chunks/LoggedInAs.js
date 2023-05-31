import { c as create_ssr_component, e as escape } from "./index2.js";
import { c as PUBLIC_TCN_AUTH, d as PUBLIC_DOMAIN } from "./public.js";
const LoggedInAs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<div class="${"panel highlight"}"><p>Logged in as <b>${escape(user.username)}</b><span style="${"color: var(--text-secondary)"}">#${escape(user.discriminator)}</span>. Your user ID will be submitted with this form. Not you?
        <a href="${escape(PUBLIC_TCN_AUTH, true) + "/logout?redirect=" + escape(encodeURIComponent(`${PUBLIC_DOMAIN}/apply`), true)}">Log Out</a></p></div>`;
});
export {
  LoggedInAs as L
};
