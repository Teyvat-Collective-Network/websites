import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "../../../chunks/index2.js";
import { c as PUBLIC_TCN_AUTH } from "../../../chunks/public.js";
import { T as Textarea } from "../../../chunks/index3.js";
import { C as Callout } from "../../../chunks/Callout.js";
/* empty css                                                    */import { L as LoggedInAs } from "../../../chunks/LoggedInAs.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h5.svelte-um8j5a,h6.svelte-um8j5a{line-height:150%}h6.svelte-um8j5a{color:var(--text-secondary)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let invite = form?.invite ?? "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="${"container"}"><form id="${"main"}" method="${"post"}"><h2>TCN Application Form</h2>${!data.user ? `<div class="${"panel"}">Please <a${add_attribute("href", PUBLIC_TCN_AUTH, 0)}>log in</a> to apply.</div>` : `${form?.error ? `${validate_component(Callout, "Callout").$$render($$result, { style: "red" }, {}, {
    default: () => {
      return `<p><!-- HTML_TAG_START -->${form.error}<!-- HTML_TAG_END --></p>`;
    }
  })}<br>` : `${form?.success ? `${validate_component(Callout, "Callout").$$render($$result, { style: "green" }, {}, {
    default: () => {
      return `<p>Your application has been submitted! We appreciate your patience.</p>`;
    }
  })}<br>` : ``}`}${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
    default: () => {
      return `<p>If you haven&#39;t already, read out <a href="${"/join"}">info page</a> on what the process for joining the TCN is and what to expect. If you have any questions, comments, or concerns, please reach out to us. See our <a href="${"/contact"}">contact information</a> page.</p><p>Please make sure your DMs are open so that we can reach out to you to respond to your application.</p>`;
    }
  })}<br>${validate_component(LoggedInAs, "LoggedInAs").$$render($$result, { user: data.user }, {}, {})}<div class="${"panel"}"><h5 class="${"svelte-um8j5a"}">Which Genshin Impact character is your server based on?</h5><input type="${"text"}" name="${"mascot"}" placeholder="${"Character name..."}" style="${"width: 50%"}" required autocomplete="${"off"}"${add_attribute("value", form?.mascot ?? "", 0)}><h5 class="${"svelte-um8j5a"}">What is your role in the server?</h5><select name="${"role"}"><option value="${"owner"}" ${form?.role === "owner" ? "selected" : ""}>Server Owner</option><option value="${"admin"}" ${form?.role === "admin" ? "selected" : ""}>Administrator</option><option value="${"mod"}" ${form?.role === "mod" ? "selected" : ""}>Moderator</option><option value="${"other"}" ${form?.role === "other" ? "selected" : ""}>Other...</option></select>${``}${`<h5 class="${"svelte-um8j5a"}">Server Owner&#39;s ID</h5><input type="${"text"}" name="${"ownerid"}" placeholder="${"17-20 digit number"}" pattern="${"^[0-9]" + escape("{17,20}", true) + "$"}" style="${"width: 50%"}" required autocomplete="${"off"}"${add_attribute("value", form?.ownerid ?? "", 0)}>`}<h5 class="${"svelte-um8j5a"}">Enter an invite link to your server.</h5><h6 class="${"svelte-um8j5a"}">Please enter a permanent, non-vanity link.</h6><input type="${"text"}" name="${"invite"}" placeholder="${"https://discord.gg/..."}" style="${"width: 50%"}" required autocomplete="${"off"}"${add_attribute("value", invite, 0)}><br>${`<p>Invalid invite!</p>`}<h5 class="${"svelte-um8j5a"}">Does your server contain an NSFW section?</h5><label><input type="${"radio"}" name="${"nsfw"}" value="${"private"}" required ${form?.nsfw === "private" ? "checked" : ""}>Yes, hidden from regular users</label><label><input type="${"radio"}" name="${"nsfw"}" value="${"public"}" required ${form?.nsfw === "public" ? "checked" : ""}>Yes, visible to regular users</label><label><input type="${"radio"}" name="${"nsfw"}" value="${"no"}" required ${form?.nsfw === "no" ? "checked" : ""}>No</label></div><div class="${"panel"}"><h5 class="${"svelte-um8j5a"}">Do you have prior experience running a Discord server or similar communities in a position of management or moderation (e.g. forums, guilds, clans, etc)?</h5><h6 class="${"svelte-um8j5a"}">You do not have to have been the owner of the server / forum / etc.; any position of management or moderation is of interest.</h6>${validate_component(Textarea, "Textarea").$$render(
    $$result,
    {
      name: "experience",
      value: form?.experience,
      placeholder: "Up to 1024 characters",
      maxlength: "1024"
    },
    {},
    {}
  )}<h5 class="${"svelte-um8j5a"}">What are some of your short term goals or ideas for the server?</h5>${validate_component(Textarea, "Textarea").$$render(
    $$result,
    {
      name: "shortgoals",
      required: true,
      value: form?.shortgoals,
      placeholder: "Up to 1024 characters",
      maxlength: "1024"
    },
    {},
    {}
  )}<h5 class="${"svelte-um8j5a"}">What are some of your long term goals or ideas for the server?</h5>${validate_component(Textarea, "Textarea").$$render(
    $$result,
    {
      name: "longgoals",
      required: true,
      value: form?.longgoals,
      placeholder: "Up to 1024 characters",
      maxlength: "1024"
    },
    {},
    {}
  )}</div><div class="${"panel"}"><h5 class="${"svelte-um8j5a"}">You must consent to all of the following to apply.</h5><label><input type="${"checkbox"}" name="${"observerchannelconsent"}" required ${form?.observerchannelconsent ? "checked" : ""}>I agree to give the observer view access to <b>all channels</b> for 28 days.</label><label><input type="${"checkbox"}" name="${"observerauditconsent"}" required ${form?.observerauditconsent ? "checked" : ""}>I agree to give the observer access to the audit logs for 28 days.</label><label><input type="${"checkbox"}" name="${"partnerlistconsent"}" required ${form?.partnerlistconsent ? "checked" : ""}>I agree to display the TCN partner list publicly and keep it up-to-date<a href="${"/info/partner-list"}" target="${"_blank"}">[learn more]</a></label><label><input type="${"checkbox"}" name="${"eventsconsent"}" required ${form?.eventsconsent ? "checked" : ""}>I agree to follow the network events channel publicly to cross-promote TCN server events and post crucial TCN announcements.</label></div><div class="${"panel"}"><h5 class="${"svelte-um8j5a"}">Any additional questions or comments you&#39;d like to include?</h5>${validate_component(Textarea, "Textarea").$$render(
    $$result,
    {
      name: "additional",
      value: form?.additional,
      placeholder: "Up to 1024 characters. If you have more questions, please reach out to an observer.",
      maxlength: "1024"
    },
    {},
    {}
  )}</div>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
    default: () => {
      return `<p>Make sure you check our <a href="${"/contact"}" target="${"_blank"}">list of observers</a> before giving permissions to whoever contacts you!</p>`;
    }
  })}<br><div><input type="${"submit"}" value="${"Submit!"}" style="${"font-size: 100%"}"></div>`}</form></div>`;
});
export {
  Page as default
};
