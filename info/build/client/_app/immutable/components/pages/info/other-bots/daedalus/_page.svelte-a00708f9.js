import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../../chunks/Callout-2d6b8933.js";
import { N as Navigation } from "../../../../../chunks/Navigation-82debefb.js";
function create_default_slot_1(ctx) {
  let p0;
  let t0;
  let b;
  let t1;
  let p1;
  let a0;
  let t2;
  let t3;
  let a1;
  let t4;
  return {
    c() {
      p0 = element("p");
      t0 = text("Developed by ");
      b = element("b");
      t1 = text("HyperNeutrino#1759");
      p1 = element("p");
      a0 = element("a");
      t2 = text("Add To Server");
      t3 = text(" — ");
      a1 = element("a");
      t4 = text("Website / Dashboard");
      this.h();
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Developed by ");
      b = claim_element(p0_nodes, "B", {});
      var b_nodes = children(b);
      t1 = claim_text(b_nodes, "HyperNeutrino#1759");
      b_nodes.forEach(detach);
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      a0 = claim_element(p1_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t2 = claim_text(a0_nodes, "Add To Server");
      a0_nodes.forEach(detach);
      t3 = claim_text(p1_nodes, " — ");
      a1 = claim_element(p1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t4 = claim_text(a1_nodes, "Website / Dashboard");
      a1_nodes.forEach(detach);
      p1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://discord.com/api/oauth2/authorize?client_id=989173789482975262&permissions=1428010036470&scope=applications.commands+bot");
      attr(a1, "href", "https://daedalus.hyper-neutrino.xyz/");
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      append_hydration(p0, b);
      append_hydration(b, t1);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, a0);
      append_hydration(a0, t2);
      append_hydration(p1, t3);
      append_hydration(p1, a1);
      append_hydration(a1, t4);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p0);
      if (detaching)
        detach(p1);
    }
  };
}
function create_default_slot(ctx) {
  let div;
  let h1;
  let t0;
  let callout;
  let p;
  let t1;
  let ul;
  let li0;
  let b0;
  let t2;
  let t3;
  let li1;
  let b1;
  let t4;
  let t5;
  let li2;
  let b2;
  let t6;
  let t7;
  let li3;
  let b3;
  let t8;
  let t9;
  let li4;
  let b4;
  let t10;
  let t11;
  let li5;
  let b5;
  let t12;
  let t13;
  let current;
  callout = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Daedalus");
      create_component(callout.$$.fragment);
      p = element("p");
      t1 = text("Daedalus is a highly customizable general-purpose bot supporting all of the features you expect from public bots but with better workflows, easier customization, a simple-to-use interface that still enables complex use cases, and transparent permissions. Here are some examples of some of its features and how they stand out:");
      ul = element("ul");
      li0 = element("li");
      b0 = element("b");
      t2 = text("Reaction Roles");
      t3 = text(" - in addition to traditional reactions, you can also set up button and dropdown roles, making it much easier for users to use, as the interface is more intuitive and responsive, and users will get a confirmation that the action worked.");
      li1 = element("li");
      b1 = element("b");
      t4 = text("Moderation");
      t5 = text(" - Daedalus supports a comprehensive set of mod tools and detailed user history that links back to the original message so you can always find the context for a particular mod action. It also asks for confirmation on all actions so you don't have to worry about accidentally banning the wrong user.");
      li2 = element("li");
      b2 = element("b");
      t6 = text("Starboard");
      t7 = text(" - Each channel can have its own threshold and target starboard.");
      li3 = element("li");
      b3 = element("b");
      t8 = text("Automod");
      t9 = text(" - Daedalus supports over 10 different types of automod rules which are advanced in functionality but easy to learn and support full control over which channels to watch, which roles to exempt, and fine control over automatic punishments / actions.");
      li4 = element("li");
      b4 = element("b");
      t10 = text("Nukeguard");
      t11 = text(" - Worried about rogue staff members or admins being compromised? If you put Daedalus above them and enable Nukeguard, the bot will detect disallowed actions and ban them and alert you to review the action, so you don't have to worry about mass destruction.");
      li5 = element("li");
      b5 = element("b");
      t12 = text("Highlights");
      t13 = text(" - Beyond the normal highlight features, Daedalus also allows you to be highlighted if someone replies without pinging you. You also get control over the delay and cooldown of highlights, and they actually work consistently and as you instruct it to.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Daedalus");
      h1_nodes.forEach(detach);
      claim_component(callout.$$.fragment, div_nodes);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, "Daedalus is a highly customizable general-purpose bot supporting all of the features you expect from public bots but with better workflows, easier customization, a simple-to-use interface that still enables complex use cases, and transparent permissions. Here are some examples of some of its features and how they stand out:");
      p_nodes.forEach(detach);
      ul = claim_element(div_nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      b0 = claim_element(li0_nodes, "B", {});
      var b0_nodes = children(b0);
      t2 = claim_text(b0_nodes, "Reaction Roles");
      b0_nodes.forEach(detach);
      t3 = claim_text(li0_nodes, " - in addition to traditional reactions, you can also set up button and dropdown roles, making it much easier for users to use, as the interface is more intuitive and responsive, and users will get a confirmation that the action worked.");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      b1 = claim_element(li1_nodes, "B", {});
      var b1_nodes = children(b1);
      t4 = claim_text(b1_nodes, "Moderation");
      b1_nodes.forEach(detach);
      t5 = claim_text(li1_nodes, " - Daedalus supports a comprehensive set of mod tools and detailed user history that links back to the original message so you can always find the context for a particular mod action. It also asks for confirmation on all actions so you don't have to worry about accidentally banning the wrong user.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      b2 = claim_element(li2_nodes, "B", {});
      var b2_nodes = children(b2);
      t6 = claim_text(b2_nodes, "Starboard");
      b2_nodes.forEach(detach);
      t7 = claim_text(li2_nodes, " - Each channel can have its own threshold and target starboard.");
      li2_nodes.forEach(detach);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      b3 = claim_element(li3_nodes, "B", {});
      var b3_nodes = children(b3);
      t8 = claim_text(b3_nodes, "Automod");
      b3_nodes.forEach(detach);
      t9 = claim_text(li3_nodes, " - Daedalus supports over 10 different types of automod rules which are advanced in functionality but easy to learn and support full control over which channels to watch, which roles to exempt, and fine control over automatic punishments / actions.");
      li3_nodes.forEach(detach);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      b4 = claim_element(li4_nodes, "B", {});
      var b4_nodes = children(b4);
      t10 = claim_text(b4_nodes, "Nukeguard");
      b4_nodes.forEach(detach);
      t11 = claim_text(li4_nodes, " - Worried about rogue staff members or admins being compromised? If you put Daedalus above them and enable Nukeguard, the bot will detect disallowed actions and ban them and alert you to review the action, so you don't have to worry about mass destruction.");
      li4_nodes.forEach(detach);
      li5 = claim_element(ul_nodes, "LI", {});
      var li5_nodes = children(li5);
      b5 = claim_element(li5_nodes, "B", {});
      var b5_nodes = children(b5);
      t12 = claim_text(b5_nodes, "Highlights");
      b5_nodes.forEach(detach);
      t13 = claim_text(li5_nodes, " - Beyond the normal highlight features, Daedalus also allows you to be highlighted if someone replies without pinging you. You also get control over the delay and cooldown of highlights, and they actually work consistently and as you instruct it to.");
      li5_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      mount_component(callout, div, null);
      append_hydration(div, p);
      append_hydration(p, t1);
      append_hydration(div, ul);
      append_hydration(ul, li0);
      append_hydration(li0, b0);
      append_hydration(b0, t2);
      append_hydration(li0, t3);
      append_hydration(ul, li1);
      append_hydration(li1, b1);
      append_hydration(b1, t4);
      append_hydration(li1, t5);
      append_hydration(ul, li2);
      append_hydration(li2, b2);
      append_hydration(b2, t6);
      append_hydration(li2, t7);
      append_hydration(ul, li3);
      append_hydration(li3, b3);
      append_hydration(b3, t8);
      append_hydration(li3, t9);
      append_hydration(ul, li4);
      append_hydration(li4, b4);
      append_hydration(b4, t10);
      append_hydration(li4, t11);
      append_hydration(ul, li5);
      append_hydration(li5, b5);
      append_hydration(b5, t12);
      append_hydration(li5, t13);
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
      transition_in(callout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(callout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(callout);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/other-bots#daedalus", "Other Bots"],
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
