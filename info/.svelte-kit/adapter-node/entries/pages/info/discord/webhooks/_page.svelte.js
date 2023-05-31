import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index2.js";
import { C as Callout } from "../../../../../chunks/Callout.js";
import { L as Linkable } from "../../../../../chunks/Linkable.js";
import { N as Navigation } from "../../../../../chunks/Navigation.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.with-icon.svelte-t192hk.svelte-t192hk{display:flex;flex-direction:row;align-items:center}span.with-icon.svelte-t192hk i.svelte-t192hk{padding-right:0.5em}i.material-icons.green.svelte-t192hk.svelte-t192hk{color:green}i.material-icons.red.svelte-t192hk.svelte-t192hk{color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/discord#webhooks-embeds", "Discord Help"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Webhooks</h1>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "what-is-a-webhook",
            e: "h2",
            value: "What is a webhook?"
          },
          {},
          {}
        )}<p>A webhook is a resource you can create in a text-like channel (announcement channels, text channels, text-in-voice channels, and forums). It consists of an ID, which is public and identifies the webhook, and a token, which is private and required to use the webhook. The URL contains both.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "red" }, {}, {
          default: () => {
            return `<p><b>Keep your webhook URL private.</b> Anyone who has the URL can use it to post messages and there is no way to identify who does it. Webhooks can also ping <code>@everyone</code>, making this espcially problematic.</p>`;
          }
        })}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "creating",
            e: "h2",
            value: "How do I create a webhook?"
          },
          {},
          {}
        )}<p>Go to <b>channel settings</b> and click &quot;Integrations&quot;. You should see a &quot;Create Webhook&quot; button. Click it to get a new webhook with a default name and blank profile picture. You can change these if you would like and click &quot;Save&quot;. When messages are sent, they will appear with this profile picture and name.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>You need the <a href="${"/info/discord/permission-list#MANAGE_WEBHOOKS"}">Manage Webhooks</a> permission to do this.</p>`;
          }
        })}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "usage",
            e: "h2",
            value: "How do I use a webhook?"
          },
          {},
          {}
        )}<p>In the <b>channel settings</b> tab, click on a webhook to expand it, then click &quot;Copy Webhook URL&quot;. <b>Keey this URL private.</b></p><p>Now, you can paste it into an embed utility or execute it manually or use it in a Google Form.</p><p>(Technically, pasting your webhook URL into third-party utilities/services is a risk, but the services mentioned in this guide are reputable and trustworthy.)</p>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "advanced",
            e: "h2",
            value: "Advanced Usage"
          },
          {},
          {}
        )}<p>By default, when you exectue a webhook, it will be posted to the channel itself with the webhook&#39;s avatar and name. However, you can actually do a bit more with them. Not all of these features are available with all services.</p><ul><li>You can edit a message that was sent by the same webhook using the message ID.</li><li>You can post the message to a thread by specifying its ID.</li><li>For forum channels, if you include a thread name, it will start a new post with that title. Otherwise, you must specify the post ID, as forums cannot have text set to them.</li><li>You can set the avatar and name for a specific message on post. This will override the defaults just for that message. If a webhook sends two messages in a row with the same username, they will merge together like normal messages.<ul><li>You cannot change the avatar or name when editing a message.</li></ul></li></ul>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "services",
            e: "h2",
            value: "Services"
          },
          {},
          {}
        )}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "discohook",
            e: "h3",
            value: "Discohook"
          },
          {},
          {}
        )}<p><a href="${"https://discohook.org"}">https://discohook.org</a></p><p>Discohook has usage instructions in the landing page.</p><div><span class="${"with-icon svelte-t192hk"}"><i class="${"green material-icons svelte-t192hk"}">check</i>New Forum Posts</span><span class="${"with-icon svelte-t192hk"}"><i class="${"red material-icons svelte-t192hk"}">close</i>Post To Threads</span><span class="${"with-icon svelte-t192hk"}"><i class="${"red material-icons svelte-t192hk"}">close</i>Components (Buttons &amp; Select Menus)</span></div><br>${validate_component(Callout, "Callout").$$render($$result, { style: "red" }, {}, {
          default: () => {
            return `<p><b>Careful!</b> Short Discohook share links expire after 1 week. If you need to keep a permanent link, just copy-paste the link from the URL bar and shorten it using something like <a href="${"https://tinyurl.com"}">https://tinyurl.com</a> if needed.</p>`;
          }
        })}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "embed-generator",
            e: "h3",
            value: "Embed Generator"
          },
          {},
          {}
        )}<p><a href="${"https://message.style"}">https://message.style</a></p><p>Embed Generator has its own help page and FAQ on the left sidebar.</p><div><span class="${"with-icon svelte-t192hk"}"><i class="${"red material-icons svelte-t192hk"}">close</i>New Forum Posts</span><span class="${"with-icon svelte-t192hk"}"><i class="${"green material-icons svelte-t192hk"}">check</i>Post To Threads</span><span class="${"with-icon svelte-t192hk"}"><i class="${"green material-icons svelte-t192hk"}">check</i>Components (Buttons &amp; Select Menus)</span></div>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "leaf-embeds",
            e: "h3",
            value: "Leaf Embeds"
          },
          {},
          {}
        )}<p><a href="${"https://embeds.leaf.moe"}">https://embeds.leaf.moe</a></p><p>Leaf Embeds has no tutorial or information page. Here is an overview of its usage.</p><ul><li>Instead of JSON, this editor uses Markdown. You are likely already used to some aspects of Markdown like how <code>**this**</code> makes text bold.</li><li>Write headers using <code># Header</code> and regular content just as text. They will be formatted across embeds. To force a header to start a new embed, use <code>#! Header</code>. To make a field inline, use <code>#- Header</code>.</li><li>Add images using <code>![alt text](url)</code>.</li><li>To set embed color, thumbnail, image, and footer, add the following to the start of your data (each section is optional): <pre>---<br>color: 0x######<br>thumbnail:<br>    url: URL goes here<br>image:<br>    url: URL goes here<br>image:<br>    url: URL goes here<br>footer:<br>    text: footer text goes here<br>---</pre></li></ul><div><span class="${"with-icon svelte-t192hk"}"><i class="${"green material-icons svelte-t192hk"}">check</i>New Forum Posts</span><span class="${"with-icon svelte-t192hk"}"><i class="${"green material-icons svelte-t192hk"}">check</i>Post To Threads</span><span class="${"with-icon svelte-t192hk"}"><i class="${"red material-icons svelte-t192hk"}">close</i>Components (Buttons &amp; Select Menus)</span></div>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "dev",
            e: "h2",
            value: "Webhooks for Developers"
          },
          {},
          {}
        )}<p>A webhook is just an endpoint that you can send data to to make the webhook perform certain actions.</p><ul><li><b><code>POST /</code></b> - Provide the message data as the body to post the message through the webhook. Most embed creation services have a JSON Editor which allows you to copy the JSON data of your message.</li><li><b><code>PATCH /messages/[message ID]</code></b> - Edit a webhook message.</li><li><b><code>DELETE /messages/[message ID]</code></b> - Delete a webhook message.</li><li><b><code>POST /?thread_id=[thread/post ID]</code></b> - Send the message into a specified thread/forum post.</li><li>Specify <b><code>thread_name</code></b> in the request body to create a new post in a forum. This is <b>only</b> available for forum channels; webhooks cannot create regular threads.</li><li><b><code>PATCH /</code></b> - Edit the <code>name</code> and/or <code>avatar</code> of the webhook. YOu cannot edit the channel using this method.</li><li><b><code>DELETE /</code> - Delete the webhook.</b></li></ul></div>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
