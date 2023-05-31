import { c as create_ssr_component, v as validate_component } from './index2-4b0ff9cf.js';
import { C as Card } from './Card-3b75e58f.js';
import { L as Linkable } from './Linkable-15397560.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}"><div id="${"main"}"><h1>About the TCN</h1>${validate_component(Linkable, "Linkable").$$render(
    $$result,
    {
      id: "organization",
      e: "h2",
      value: "Organization"
    },
    {},
    {}
  )}<p>The TCN does not enforce any particular structure on its member servers. TCN servers are not required to change their server setup, follow a template, enforce particular rules, or give any permissions to TCN observers. Our only requirements are to display a list of TCN partner servers, cross-post event promotions from partner servers, and maintain a healthy community that follows its rules.</p><p>The TCN is divided into three components. Click a card to learn more.</p><div class="${"cards"}">${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: "business",
      title: "Individual Servers",
      expandable: true
    },
    {},
    {
      default: () => {
        return `<p>These are the individual servers of the TCN, each a mains server dedicated to a specific character.</p><p>Find a list of TCN servers
<a href="${"/partners"}">here</a></p>`;
      }
    }
  )}${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: "hub",
      title: "The Hub",
      expandable: true
    },
    {},
    {
      default: () => {
        return `<p>This is the official public server for the TCN, where you can contact observers and other server staff and ask questions or give feedback about the TCN.</p><p><a href="${"https://discord.gg/FG2wpbywSx"}">Join the Hub!</a></p>`;
      }
    }
  )}${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: "high_quality",
      title: "HQ",
      expandable: true
    },
    {},
    {
      default: () => {
        return `<p>This is the headquarters server for the TCN. It is private to the TCN council, which consists of each server&#39;s owner and up to one other trusted member. This server facilitates communication and coordination of servers.</p>`;
      }
    }
  )}</div>${validate_component(Linkable, "Linkable").$$render(
    $$result,
    {
      id: "benefits",
      e: "h2",
      value: "Benefits of the TCN"
    },
    {},
    {}
  )}<p>Click a card to learn more.</p><div class="${"cards"}">${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: "info",
      title: "Information",
      expandable: true
    },
    {},
    {
      default: () => {
        return `<p>As a member server of the TCN, you get access to information on members, ongoing issues, as well as informative resources like server setup and tools and on-demand help for the technical aspects and community and staff management.</p>`;
      }
    }
  )}${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: "handshake",
      title: "Connections",
      expandable: true
    },
    {},
    {
      default: () => {
        return `<p>TCN servers have quick and easy access to communication with each other. In addition to being able to more quickly resolve any issues and form strong relationships with many other prominent servers, you have the unique opportunity to more easily start collaborations for things like events, which you can also promote through the TCN&#39;s event announcement feed.</p>`;
      }
    }
  )}${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: "insights",
      title: "Growth",
      expandable: true
    },
    {},
    {
      default: () => {
        return `<p>When you join the TCN, you automatically become a TCN partner of all TCN servers and will have your server listed on the partner list in all of them. Additionally, you will be able to get tips on how to improve your server environment and grow a strong, healthy community.</p>`;
      }
    }
  )}</div>${validate_component(Linkable, "Linkable").$$render(
    $$result,
    {
      id: "core-values",
      e: "h2",
      value: "Our Core Values"
    },
    {},
    {}
  )}<p>Click a card to learn more.</p><div class="${"cards"}">${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: "forum",
      title: "Transparency",
      expandable: true
    },
    {},
    {
      default: () => {
        return `<p>We prioritize two-way communication with our member servers. We are always open to feedback and will reach out for opportunities to improve the network to work for our members, and not the other way around.</p>`;
      }
    }
  )}${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: "how_to_vote",
      title: "Democracy",
      expandable: true
    },
    {},
    {
      default: () => {
        return `<p>In addition to communicating major changes with our members clearly, we propose these changes and vote on major decisions on them, and the observer team does not have any more of a say in matters than everyone else. Each server gets one vote in all important matters. We also implement follow-up changes based on feedback.</p>`;
      }
    }
  )}${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: "group",
      title: "Collaboration",
      expandable: true
    },
    {},
    {
      default: () => {
        return `<p>We don&#39;t expect everyone in the TCN to like everyone else, but even when discussions are heated we treat each other with civility and get to the core of the issue and come to a resolution that can benefit us all as much as possible. Additionally, we learn from conflicts, and every mistake or dispute is an opportunity to not just fix the root of the issue but improve other parts of the network.</p>`;
      }
    }
  )}</div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-96415160.js.map
