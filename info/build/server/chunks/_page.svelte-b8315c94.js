import { c as create_ssr_component, v as validate_component } from './index2-4b0ff9cf.js';
import { C as Card } from './Card-3b75e58f.js';
import { L as Linkable } from './Linkable-15397560.js';
import { N as Navigation } from './Navigation-7feba243.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render($$result, { last: ["/info/hq", "HQ"] }, {}, {
    default: () => {
      return `<div id="${"main"}"><h1>The Akasha System</h1><p>The Akasha System is the TCN&#39;s central information management system. It is available at <a href="${"https://akasha.hyper-neutrino.xyz"}">https://akasha.hyper-neutrino.xyz</a> and as a bot in HQ.</p><p>You will need to log in to access this webpage. Information on this page is only for use by the TCN council unless otherwise specified, and sharing it with other people is a violation of the rules.</p>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "website",
          e: "h2",
          value: "The Website"
        },
        {},
        {}
      )}${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "documents",
          e: "h3",
          value: "Documents"
        },
        {},
        {}
      )}<p>The main feature of the Akasha System is its document storage. You may upload documents on the website. Each document has the following fields, most of which are optional:</p><ul><li><b>Authors</b>: a list of authors that is displayed in searches and document information. This is different from the uploader (you), but make sure you have permission to upload documents or that it has been shared in HQ already.</li><li><b>Related Users</b>: a list of users mentioned by the document. This document</li><will>show up on that user&#39;s page.</will><li><b>Related Servers</b>: a list of servers mentioned by the document. This</li><document>will show up on that server&#39;s page.</document><li><b>Title, Description</b>: metadata about the document.</li><li><b>Document Link</b>: any URL; your document does not have to be on a particular</li><service></service></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "server-list",
          e: "h3",
          value: "Server List"
        },
        {},
        {}
      )}<p>You can find a list of TCN servers and other servers that you are in. Click a server to view its information (including its council members for TCN servers) and a list of any documents attached to it.</p><p>Additionally, you can enter the ID of a server directly to pull up any information about it, if any can be found. This may not work if the server is not known as the bot cannot fetch servers you and it are not in.</p>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "user-information",
          e: "h3",
          value: "User Information"
        },
        {},
        {}
      )}<p>There is no list of users as that would be unreasonably long, but you can enter a user&#39;s ID directly to view information about them including their position on the council if any, servers they staff in, and any documents attached to them.</p>${validate_component(Linkable, "Linkable").$$render($$result, { id: "bot", e: "h2", value: "The Bot" }, {}, {})}${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "terminal",
          e: "h3",
          value: "The Akasha Terminal"
        },
        {},
        {}
      )}<p>You can find the Akasha Terminal in <b>#akasha-terminal</b>. It has the following features.</p><div class="${"cards"}">${validate_component(Card, "Card").$$render($$result, { icon: "tour", title: "Tour" }, {}, {
        default: () => {
          return `<p>Get a guided tour of HQ and the Akasha System.</p>`;
        }
      })}${validate_component(Card, "Card").$$render($$result, { icon: "assistant", title: "Quickstart" }, {}, {
        default: () => {
          return `<p>See a paginated quickstart within Discord. You may prefer this or <a href="${"/info/quickstart"}">this page</a>.</p>`;
        }
      })}${validate_component(Card, "Card").$$render($$result, { icon: "list_alt", title: "TCN Directory" }, {}, {
        default: () => {
          return `<p>View a list of TCN resources. Some of this information is private and therefore not listed on this website.</p>`;
        }
      })}${validate_component(Card, "Card").$$render($$result, { icon: "hub", title: "Server Info" }, {}, {
        default: () => {
          return `<p>View a server&#39;s information by entering its ID.</p>`;
        }
      })}${validate_component(Card, "Card").$$render(
        $$result,
        {
          icon: "account_circle",
          title: "User Info"
        },
        {},
        {
          default: () => {
            return `<p>View a user&#39;s information by entering their ID.</p>`;
          }
        }
      )}</div></div>`;
    }
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b8315c94.js.map
