import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, p as set_style, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../chunks/Callout-2d6b8933.js";
import { L as Linkable } from "../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot_3(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("These bots are not TCN-exclusive, so feel free to use them in other servers!");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "These bots are not TCN-exclusive, so feel free to use them in other servers!");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_default_slot_2(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("This bot is not developed by a TCN council member, it is just a partner of the TCN. It is not exclusive to us and frequently partners with other servers as well.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "This bot is not developed by a TCN council member, it is just a partner of the TCN. It is not exclusive to us and frequently partners with other servers as well.");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_default_slot_1(ctx) {
  let p;
  let t0;
  let b;
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("This feature also exists on ");
      b = element("b");
      t1 = text("Daedalus");
      t2 = text(", which also includes many other features, and is much more comprehensive there.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "This feature also exists on ");
      b = claim_element(p_nodes, "B", {});
      var b_nodes = children(b);
      t1 = claim_text(b_nodes, "Daedalus");
      b_nodes.forEach(detach);
      t2 = claim_text(p_nodes, ", which also includes many other features, and is much more comprehensive there.");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, b);
      append_hydration(b, t1);
      append_hydration(p, t2);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_default_slot(ctx) {
  let div;
  let h1;
  let t0;
  let callout0;
  let linkable0;
  let h5;
  let t1;
  let p0;
  let a0;
  let t2;
  let p1;
  let t3;
  let a1;
  let t4;
  let t5;
  let callout1;
  let linkable1;
  let p2;
  let t6;
  let b0;
  let t7;
  let t8;
  let p3;
  let a2;
  let t9;
  let linkable2;
  let p4;
  let t10;
  let b1;
  let t11;
  let t12;
  let p5;
  let a3;
  let t13;
  let callout2;
  let linkable3;
  let p6;
  let t14;
  let b2;
  let t15;
  let t16;
  let p7;
  let a4;
  let t17;
  let current;
  callout0 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  linkable0 = new Linkable({
    props: {
      id: "genshin-wizard",
      e: "h2",
      value: "Genshin Wizard"
    }
  });
  callout1 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "ruin-hunter",
      e: "h2",
      value: "Ruin Hunter"
    }
  });
  linkable2 = new Linkable({
    props: {
      id: "banhammer",
      e: "h2",
      value: "Banhammer"
    }
  });
  callout2 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  linkable3 = new Linkable({
    props: {
      id: "daedalus",
      e: "h2",
      value: "Daedalus"
    }
  });
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Other Bots");
      create_component(callout0.$$.fragment);
      create_component(linkable0.$$.fragment);
      h5 = element("h5");
      t1 = text("[Official Partner]");
      p0 = element("p");
      a0 = element("a");
      t2 = text("Add To Server");
      p1 = element("p");
      t3 = text("The TCN is officially partnered with Genshin Wizard, a multi-purpose Genshin Impact bot with a comprehensive set of features allowing you to view your in-game stats, flex your builds, view build guides and hundreds of high-quality infographics, etc. To get more information or for setup, please contact the support team on their ");
      a1 = element("a");
      t4 = text("Discord server");
      t5 = text(" and open a ticket. Mention that you are part of the TCN and would like help setting up.");
      create_component(callout1.$$.fragment);
      create_component(linkable1.$$.fragment);
      p2 = element("p");
      t6 = text("Made by ");
      b0 = element("b");
      t7 = text("Leaf#1950");
      t8 = text(", this is an anti-raid bot that detects large influxes of new accounts and bans them to keep your server safe from raids. You can also turn this on and off easily (such as if you are expecting a higher rate of incoming users) and adjust the thresholds.");
      p3 = element("p");
      a2 = element("a");
      t9 = text("See More");
      create_component(linkable2.$$.fragment);
      p4 = element("p");
      t10 = text("This is a utility bot dedicated to massbanning by ");
      b1 = element("b");
      t11 = text("HyperNeutrino#1759");
      t12 = text(". It allows you to ban many users at once from an online file of IDs such as a Pastebin raw file, which is useful if the number of users is very high and copy-pasting them into chat would take many messages.");
      p5 = element("p");
      a3 = element("a");
      t13 = text("See More");
      create_component(callout2.$$.fragment);
      create_component(linkable3.$$.fragment);
      p6 = element("p");
      t14 = text("Daedalus is a modern, general-purpose bot containing a wide array of features for all your server management needs, featuring full slash-command support, buttons and dropdowns for a smooth experience, modals, high customizability, transparent permissions, etc. It is developed by ");
      b2 = element("b");
      t15 = text("HyperNeutrino#1759");
      t16 = text(".");
      p7 = element("p");
      a4 = element("a");
      t17 = text("See More");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Other Bots");
      h1_nodes.forEach(detach);
      claim_component(callout0.$$.fragment, div_nodes);
      claim_component(linkable0.$$.fragment, div_nodes);
      h5 = claim_element(div_nodes, "H5", { style: true });
      var h5_nodes = children(h5);
      t1 = claim_text(h5_nodes, "[Official Partner]");
      h5_nodes.forEach(detach);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t2 = claim_text(a0_nodes, "Add To Server");
      a0_nodes.forEach(detach);
      p0_nodes.forEach(detach);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, "The TCN is officially partnered with Genshin Wizard, a multi-purpose Genshin Impact bot with a comprehensive set of features allowing you to view your in-game stats, flex your builds, view build guides and hundreds of high-quality infographics, etc. To get more information or for setup, please contact the support team on their ");
      a1 = claim_element(p1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t4 = claim_text(a1_nodes, "Discord server");
      a1_nodes.forEach(detach);
      t5 = claim_text(p1_nodes, " and open a ticket. Mention that you are part of the TCN and would like help setting up.");
      p1_nodes.forEach(detach);
      claim_component(callout1.$$.fragment, div_nodes);
      claim_component(linkable1.$$.fragment, div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t6 = claim_text(p2_nodes, "Made by ");
      b0 = claim_element(p2_nodes, "B", {});
      var b0_nodes = children(b0);
      t7 = claim_text(b0_nodes, "Leaf#1950");
      b0_nodes.forEach(detach);
      t8 = claim_text(p2_nodes, ", this is an anti-raid bot that detects large influxes of new accounts and bans them to keep your server safe from raids. You can also turn this on and off easily (such as if you are expecting a higher rate of incoming users) and adjust the thresholds.");
      p2_nodes.forEach(detach);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      a2 = claim_element(p3_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t9 = claim_text(a2_nodes, "See More");
      a2_nodes.forEach(detach);
      p3_nodes.forEach(detach);
      claim_component(linkable2.$$.fragment, div_nodes);
      p4 = claim_element(div_nodes, "P", {});
      var p4_nodes = children(p4);
      t10 = claim_text(p4_nodes, "This is a utility bot dedicated to massbanning by ");
      b1 = claim_element(p4_nodes, "B", {});
      var b1_nodes = children(b1);
      t11 = claim_text(b1_nodes, "HyperNeutrino#1759");
      b1_nodes.forEach(detach);
      t12 = claim_text(p4_nodes, ". It allows you to ban many users at once from an online file of IDs such as a Pastebin raw file, which is useful if the number of users is very high and copy-pasting them into chat would take many messages.");
      p4_nodes.forEach(detach);
      p5 = claim_element(div_nodes, "P", {});
      var p5_nodes = children(p5);
      a3 = claim_element(p5_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t13 = claim_text(a3_nodes, "See More");
      a3_nodes.forEach(detach);
      p5_nodes.forEach(detach);
      claim_component(callout2.$$.fragment, div_nodes);
      claim_component(linkable3.$$.fragment, div_nodes);
      p6 = claim_element(div_nodes, "P", {});
      var p6_nodes = children(p6);
      t14 = claim_text(p6_nodes, "Daedalus is a modern, general-purpose bot containing a wide array of features for all your server management needs, featuring full slash-command support, buttons and dropdowns for a smooth experience, modals, high customizability, transparent permissions, etc. It is developed by ");
      b2 = claim_element(p6_nodes, "B", {});
      var b2_nodes = children(b2);
      t15 = claim_text(b2_nodes, "HyperNeutrino#1759");
      b2_nodes.forEach(detach);
      t16 = claim_text(p6_nodes, ".");
      p6_nodes.forEach(detach);
      p7 = claim_element(div_nodes, "P", {});
      var p7_nodes = children(p7);
      a4 = claim_element(p7_nodes, "A", { href: true });
      var a4_nodes = children(a4);
      t17 = claim_text(a4_nodes, "See More");
      a4_nodes.forEach(detach);
      p7_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(h5, "color", "var(--text-accent)");
      attr(a0, "href", "https://discord.com/api/oauth2/authorize?client_id=782099719718699009&permissions=537136128&scope=applications.commands%20bot");
      attr(a1, "href", "https://discord.gg/BTT5Zr7Dmp");
      attr(a2, "href", "/info/other-bots/ruin-hunter");
      attr(a3, "href", "/info/other-bots/banhammer");
      attr(a4, "href", "/info/other-bots/daedalus");
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      mount_component(callout0, div, null);
      mount_component(linkable0, div, null);
      append_hydration(div, h5);
      append_hydration(h5, t1);
      append_hydration(div, p0);
      append_hydration(p0, a0);
      append_hydration(a0, t2);
      append_hydration(div, p1);
      append_hydration(p1, t3);
      append_hydration(p1, a1);
      append_hydration(a1, t4);
      append_hydration(p1, t5);
      mount_component(callout1, div, null);
      mount_component(linkable1, div, null);
      append_hydration(div, p2);
      append_hydration(p2, t6);
      append_hydration(p2, b0);
      append_hydration(b0, t7);
      append_hydration(p2, t8);
      append_hydration(div, p3);
      append_hydration(p3, a2);
      append_hydration(a2, t9);
      mount_component(linkable2, div, null);
      append_hydration(div, p4);
      append_hydration(p4, t10);
      append_hydration(p4, b1);
      append_hydration(b1, t11);
      append_hydration(p4, t12);
      append_hydration(div, p5);
      append_hydration(p5, a3);
      append_hydration(a3, t13);
      mount_component(callout2, div, null);
      mount_component(linkable3, div, null);
      append_hydration(div, p6);
      append_hydration(p6, t14);
      append_hydration(p6, b2);
      append_hydration(b2, t15);
      append_hydration(p6, t16);
      append_hydration(div, p7);
      append_hydration(p7, a4);
      append_hydration(a4, t17);
      current = true;
    },
    p(ctx2, dirty) {
      const callout0_changes = {};
      if (dirty & /*$$scope*/
      1) {
        callout0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout0.$set(callout0_changes);
      const callout1_changes = {};
      if (dirty & /*$$scope*/
      1) {
        callout1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout1.$set(callout1_changes);
      const callout2_changes = {};
      if (dirty & /*$$scope*/
      1) {
        callout2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout2.$set(callout2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(callout0.$$.fragment, local);
      transition_in(linkable0.$$.fragment, local);
      transition_in(callout1.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(callout2.$$.fragment, local);
      transition_in(linkable3.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(callout0.$$.fragment, local);
      transition_out(linkable0.$$.fragment, local);
      transition_out(callout1.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(callout2.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(callout0);
      destroy_component(linkable0);
      destroy_component(callout1);
      destroy_component(linkable1);
      destroy_component(linkable2);
      destroy_component(callout2);
      destroy_component(linkable3);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/quickstart#other-bots", "Quickstart"],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(navigation.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(navigation.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(navigation, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const navigation_changes = {};
      if (dirty & /*$$scope*/
      1) {
        navigation_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navigation.$set(navigation_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navigation.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navigation.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(navigation);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
