import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute, l as each } from "../../../chunks/index2.js";
import { T as Textarea, L as LoadingSpinner, M as Modal } from "../../../chunks/index3.js";
import { C as Callout } from "../../../chunks/Callout.js";
import { c as PUBLIC_TCN_AUTH } from "../../../chunks/public.js";
import { L as LoggedInAs } from "../../../chunks/LoggedInAs.js";
const Redirect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { to = PUBLIC_TCN_AUTH } = $$props;
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  return `<meta http-equiv="${"refresh"}" content="${"0;URL=" + escape(to, true)}">`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "input[type=submit].svelte-15eaza9{margin-right:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let ids = form?.ids ?? "";
  let open = false;
  crypto.randomUUID();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `

${!data.user ? `${validate_component(Redirect, "Redirect").$$render($$result, {}, {}, {})}` : `<div class="${"container"}"><div id="${"main"}"><h2>Banshare Form</h2>${validate_component(LoggedInAs, "LoggedInAs").$$render($$result, { user: data.user }, {}, {})}${`${form?.error ? `${validate_component(Callout, "Callout").$$render($$result, { style: "red" }, {}, {
      default: () => {
        return `<p><!-- HTML_TAG_START -->${form.error}<!-- HTML_TAG_END --></p>`;
      }
    })}<br>` : `${form?.success ? `${validate_component(Callout, "Callout").$$render($$result, { style: "green" }, {}, {
      default: () => {
        return `<p>Your banshare has been submitted.</p>`;
      }
    })}<br>` : ``}`}<form method="${"post"}"><div class="${"panel"}"><h4>ID(s) of the offender(s)</h4><input type="${"text"}" name="${"ids"}" placeholder="${"Space-separated list of IDs"}" required autocomplete="${"off"}"${add_attribute("value", ids, 0)}>${ids.trim() !== "" ? `<div><br><a class="${"button"}"${add_attribute("href", "javascript:void(0)", 0)}>Check IDs</a>
(shows the users&#39; tags if all IDs are valid)</div>` : ``}<h4>Reason</h4><p>If you need more than 498 characters, you should probably be putting it into the evidence field instead.</p>${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        name: "reason",
        placeholder: "Tip: make the reason something suitable for an audit log reason for the ban. Include context in the next field.",
        maxlength: "498",
        required: true,
        autocomplete: "off",
        value: form?.reason
      },
      {},
      {}
    )}<h4>Evidence</h4><p>For images, use Imgur or a similar service. Discord hosted image links work too, but keep in mind that deleting the message containing the image will eventually cause the image link to break.</p><p>If you need more than 1000 characters, please create a document and link it here. Include some basic information in the evidence so people can see roughly what your document contains.</p><p>Please spoiler anything suggestive and break up any image links to explicit / triggering content so people can&#39;t accidentally access them.</p>${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        name: "evidence",
        placeholder: "Provide sufficient evidence to verify your reason and for other mods to make an informed decision.",
        required: true,
        maxlength: "1200",
        autocomplete: "off",
        value: form?.evidence
      },
      {},
      {}
    )}</div><div class="${"panel"}"><h4>Server</h4><p>Identify which server you are bansharing this from.</p>${`${validate_component(LoadingSpinner, "LoadingSpinner").$$render(
      $$result,
      {
        size: 25,
        foreground: "var(--text-primary)",
        background: "rgb(var(--pure), 50%)",
        text: "Loading Servers"
      },
      {},
      {}
    )}`}</div><div class="${"panel"}"><h4>Severity</h4><p>The severity is used to determine auto-banning. A lower number indicates a greater threat.</p><ul><li><b>P0</b> — e.g. raids, harassment, etc.</li><li><b>P1</b> — e.g. low-threat scam bots</li><li><b>P2</b> — e.g. user causing a bit of trouble</li></ul><select name="${"severity"}" required><option selected disabled hidden value="${""}">Select Severity</option>${each(["P0", "P1", "P2"], (sev) => {
      return `<option${add_attribute("value", sev.toLowerCase(), 0)} ${form?.severity === sev.toLowerCase() ? "selected" : ""}>${escape(sev)}</option>`;
    })}</select></div><div class="${"panel"}"><h4>Urgency</h4><p>Check the box below to instruct the bot to ping all observers instead of just a few to review this.</p><label><input type="${"checkbox"}" name="${"urgent"}" ${form?.urgent ? "checked" : ""}><b>This banshare is urgent.</b></label></div><div class="${"panel"}"><input type="${"submit"}" name="${"submit"}" value="${"Submit"}" style="${"font-weight: 600"}" class="${"svelte-15eaza9"}"><input type="${"submit"}" name="${"submit"}" value="${"Submit Without Validation"}" class="${"svelte-15eaza9"}"><input type="${"submit"}" name="${"submit"}" value="${"Submit Without Checking IDs"}" class="${"svelte-15eaza9"}"><br><p><b>WARNING:</b> You should only submit without checking IDs if your ID list is a link instead of an actual list of IDs. Doing this will also prevent automatic banning. Consider just pasting your entire ID list instead if possible - the bot will collapse it into a document link if it&#39;s too long.</p><p><b>This may take some time</b> if you have submitted a long ID list, as the</p><bot>needs time to fetch all of the users.</bot><p>If the list is very long and you want to get the banshare published ASAP, use &quot;Submit Without Validation&quot;, which will check if the IDs look correct but won&#39;t fetch all of the users.</p></div></form>`}</div></div>`}${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        background_color: "var(--background-1)",
        overlay_color: "rgb(var(--pure-rgb), 80%)",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${`${`<div class="${"row"}">${validate_component(LoadingSpinner, "LoadingSpinner").$$render($$result, { size: 50, text: "" }, {}, {})}<b>Loading users...</b></div>`}`}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
