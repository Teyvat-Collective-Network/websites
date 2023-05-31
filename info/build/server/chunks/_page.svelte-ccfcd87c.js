import { c as create_ssr_component, v as validate_component } from './index2-4b0ff9cf.js';
import { N as Navigation } from './Navigation-7feba243.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/rules", "Rules"],
      next: ["/info/hq", "HQ"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Definitions &amp; Organization</h1><ul><li>The <b>Teyvat Collective Network</b> (&quot;TCN&quot;) is the network of servers. It refers to a collective organization.</li><li>A <b>TCN server</b> is a server who has been inducted into the TCN and is a member of it. TCN servers do not speak on behalf of the TCN and its views, rules, and opinions do not represent that of the TCN or other TCN servers.</li><li>The <b>TCN Council</b> is the set of representatives that facilitate communication between TCN servers in the HQ server. It consists of server owners and council members.</li><li>A <b>server owner</b> is the owner of a TCN server. This must be the actual owner of the server.</li><li>A <b>council advisor</b> is a representative chosen by the server owner to represent their server alongside them in HQ. A server does not need to have a council advisor, and this may be any user.</li><li>The <b>observer committee</b> is the team of observers that are elected to represent, act on behalf of, and maintain organization in the TCN.</li><li>An <b>observer</b> is a council member who has been elected to an elevated position and has administrative powers in the hub and HQ. They do not have authority over any TCN servers. Their opinion is not the TCN&#39;s opinion; rather, they represent the TCN&#39;s decisions (as determined by vote) in terms of what actions it will take and maintain its organization and standards.</li><li>The <b>TCN Hub</b> is the official public server that acts as our public interface with staff and members (<a href="${"https://discord.gg/FG2wpbywSx"}">discord.gg/FG2wpbywSx</a>). It is not defined as a TCN server.</li><li>The <b>HQ</b> is the private base of operations that facilitates communication and is only accessible by council members. It is not defined as a TCN server.</li><li><b>TCN Staff</b> are staff members of TCN servers. They do not represent the TCN and do not represent the server they staff to the TCN unless they are on the council.</li><li>A <b>major vote</b> is a vote that requires 75% turnout from the eligible voters for the result to be valid.</li><li>A <b>minor vote</b> is a vote that requires 60% turnout from the eligible voters for the result to be valid.</li></ul></div>`;
      }
    }
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ccfcd87c.js.map
