import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../chunks/Callout-2d6b8933.js";
import { L as Linkable } from "../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot_1(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("An important thing to know about permissions is that allow overrides always apply over deny overrides, regardless of hierarchy.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "An important thing to know about permissions is that allow overrides always apply over deny overrides, regardless of hierarchy.");
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
function create_default_slot(ctx) {
  let div;
  let h1;
  let t0;
  let linkable0;
  let p0;
  let t1;
  let a0;
  let t2;
  let t3;
  let callout;
  let p1;
  let t4;
  let a1;
  let t5;
  let t6;
  let p2;
  let t7;
  let a2;
  let t8;
  let t9;
  let linkable1;
  let p3;
  let t10;
  let p4;
  let t11;
  let p5;
  let t12;
  let p6;
  let t13;
  let a3;
  let t14;
  let t15;
  let a4;
  let t16;
  let t17;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "permissions",
      e: "h2",
      value: "Discord Permissions"
    }
  });
  callout = new Callout({
    props: {
      style: "warn",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "webhooks-embeds",
      e: "h2",
      value: "Webhooks &amp; Embeds"
    }
  });
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Discord Help");
      create_component(linkable0.$$.fragment);
      p0 = element("p");
      t1 = text("If you have absolutely no knowledge of Discord permissions, a good place to start would the official ");
      a0 = element("a");
      t2 = text("Permissions FAQ");
      t3 = text(" support article.");
      create_component(callout.$$.fragment);
      p1 = element("p");
      t4 = text("For a list of all permissions and what they do, visit ");
      a1 = element("a");
      t5 = text("this page");
      t6 = text(".");
      p2 = element("p");
      t7 = text("For more information about permissions and some recommendations for good structure, check out ");
      a2 = element("a");
      t8 = text("this page");
      t9 = text(".");
      create_component(linkable1.$$.fragment);
      p3 = element("p");
      t10 = text("This is a guide on how to use embeds and webhooks in Discord. This guide features Discohook, Embed Generator (discord.club), and Leaf Embeds.");
      p4 = element("p");
      t11 = text("Webhooks are resources you can create in a text channel that can be used to post messages to the channel by any user or application that has the URL.");
      p5 = element("p");
      t12 = text("Embeds are a way to organize information and add styling to your resources.");
      p6 = element("p");
      t13 = text("To view the full guide, visit either the ");
      a3 = element("a");
      t14 = text("webhooks");
      t15 = text(" or ");
      a4 = element("a");
      t16 = text("embeds");
      t17 = text(" page.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Discord Help");
      h1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "If you have absolutely no knowledge of Discord permissions, a good place to start would the official ");
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t2 = claim_text(a0_nodes, "Permissions FAQ");
      a0_nodes.forEach(detach);
      t3 = claim_text(p0_nodes, " support article.");
      p0_nodes.forEach(detach);
      claim_component(callout.$$.fragment, div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "For a list of all permissions and what they do, visit ");
      a1 = claim_element(p1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "this page");
      a1_nodes.forEach(detach);
      t6 = claim_text(p1_nodes, ".");
      p1_nodes.forEach(detach);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t7 = claim_text(p2_nodes, "For more information about permissions and some recommendations for good structure, check out ");
      a2 = claim_element(p2_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t8 = claim_text(a2_nodes, "this page");
      a2_nodes.forEach(detach);
      t9 = claim_text(p2_nodes, ".");
      p2_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div_nodes);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      t10 = claim_text(p3_nodes, "This is a guide on how to use embeds and webhooks in Discord. This guide features Discohook, Embed Generator (discord.club), and Leaf Embeds.");
      p3_nodes.forEach(detach);
      p4 = claim_element(div_nodes, "P", {});
      var p4_nodes = children(p4);
      t11 = claim_text(p4_nodes, "Webhooks are resources you can create in a text channel that can be used to post messages to the channel by any user or application that has the URL.");
      p4_nodes.forEach(detach);
      p5 = claim_element(div_nodes, "P", {});
      var p5_nodes = children(p5);
      t12 = claim_text(p5_nodes, "Embeds are a way to organize information and add styling to your resources.");
      p5_nodes.forEach(detach);
      p6 = claim_element(div_nodes, "P", {});
      var p6_nodes = children(p6);
      t13 = claim_text(p6_nodes, "To view the full guide, visit either the ");
      a3 = claim_element(p6_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t14 = claim_text(a3_nodes, "webhooks");
      a3_nodes.forEach(detach);
      t15 = claim_text(p6_nodes, " or ");
      a4 = claim_element(p6_nodes, "A", { href: true });
      var a4_nodes = children(a4);
      t16 = claim_text(a4_nodes, "embeds");
      a4_nodes.forEach(detach);
      t17 = claim_text(p6_nodes, " page.");
      p6_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ");
      attr(a1, "href", "/info/discord/permission-list");
      attr(a2, "href", "/info/discord/permissions");
      attr(a3, "href", "/info/discord/webhooks");
      attr(a4, "href", "/info/discord/embeds");
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      mount_component(linkable0, div, null);
      append_hydration(div, p0);
      append_hydration(p0, t1);
      append_hydration(p0, a0);
      append_hydration(a0, t2);
      append_hydration(p0, t3);
      mount_component(callout, div, null);
      append_hydration(div, p1);
      append_hydration(p1, t4);
      append_hydration(p1, a1);
      append_hydration(a1, t5);
      append_hydration(p1, t6);
      append_hydration(div, p2);
      append_hydration(p2, t7);
      append_hydration(p2, a2);
      append_hydration(a2, t8);
      append_hydration(p2, t9);
      mount_component(linkable1, div, null);
      append_hydration(div, p3);
      append_hydration(p3, t10);
      append_hydration(div, p4);
      append_hydration(p4, t11);
      append_hydration(div, p5);
      append_hydration(p5, t12);
      append_hydration(div, p6);
      append_hydration(p6, t13);
      append_hydration(p6, a3);
      append_hydration(a3, t14);
      append_hydration(p6, t15);
      append_hydration(p6, a4);
      append_hydration(a4, t16);
      append_hydration(p6, t17);
      current = true;
    },
    p(ctx2, dirty) {
      const callout_changes = {};
      if (dirty & /*$$scope*/
      1) {
        callout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout.$set(callout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(linkable0.$$.fragment, local);
      transition_in(callout.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(callout.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(linkable0);
      destroy_component(callout);
      destroy_component(linkable1);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/quickstart", "Quickstart"],
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
