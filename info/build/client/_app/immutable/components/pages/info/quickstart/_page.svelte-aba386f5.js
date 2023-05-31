import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, p as set_style, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../chunks/Callout-2d6b8933.js";
import { L as Linkable } from "../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot_2(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("The destination channel must be a regular text channel and not an announcement channel itself.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "The destination channel must be a regular text channel and not an announcement channel itself.");
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
function create_default_slot(ctx) {
  let div;
  let h1;
  let t0;
  let linkable0;
  let p0;
  let t1;
  let linkable1;
  let p1;
  let t2;
  let b0;
  let t3;
  let t4;
  let p2;
  let t5;
  let a0;
  let t6;
  let t7;
  let linkable2;
  let p3;
  let t8;
  let b1;
  let t9;
  let t10;
  let callout0;
  let linkable3;
  let p4;
  let t11;
  let linkable4;
  let p5;
  let t12;
  let p6;
  let t13;
  let a1;
  let t14;
  let t15;
  let p7;
  let t16;
  let a2;
  let t17;
  let t18;
  let linkable5;
  let p8;
  let t19;
  let p9;
  let t20;
  let a3;
  let t21;
  let t22;
  let linkable6;
  let p10;
  let t23;
  let code;
  let t24;
  let t25;
  let a4;
  let t26;
  let t27;
  let linkable7;
  let p11;
  let t28;
  let a5;
  let t29;
  let t30;
  let callout1;
  let ul;
  let li0;
  let b2;
  let t31;
  let t32;
  let span;
  let t33;
  let t34;
  let li1;
  let b3;
  let t35;
  let t36;
  let li2;
  let b4;
  let t37;
  let t38;
  let li3;
  let b5;
  let t39;
  let t40;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "requirements",
      e: "h2",
      value: "Requirements"
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "partner-list",
      e: "h3",
      value: "Partner List"
    }
  });
  linkable2 = new Linkable({
    props: {
      id: "partner-event-channel",
      e: "h3",
      value: "Partner Event Channel"
    }
  });
  callout0 = new Callout({
    props: {
      style: "warn",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  linkable3 = new Linkable({
    props: {
      id: "optional",
      e: "h2",
      value: "Optional Features"
    }
  });
  linkable4 = new Linkable({
    props: {
      id: "banshares",
      e: "h3",
      value: "Banshares"
    }
  });
  linkable5 = new Linkable({
    props: {
      id: "global",
      e: "h3",
      value: "Global Chat"
    }
  });
  linkable6 = new Linkable({
    props: {
      id: "staff-link",
      e: "h3",
      value: "Staff Link"
    }
  });
  linkable7 = new Linkable({
    props: {
      id: "other-bots",
      e: "h3",
      value: "Other Bots"
    }
  });
  callout1 = new Callout({
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
      t0 = text("Quickstart");
      create_component(linkable0.$$.fragment);
      p0 = element("p");
      t1 = text("The following things are required for you to set up, so you may want to start with them first.");
      create_component(linkable1.$$.fragment);
      p1 = element("p");
      t2 = text("You must display the list of TCN servers and other TCN partners in a publicly visible channel, clearly separated from your server's individual partners. You can find the most up-to-date version in ");
      b0 = element("b");
      t3 = text("#partner-list");
      t4 = text(", but you do not have to follow this format.");
      p2 = element("p");
      t5 = text("For a list of full requirements and information on how to use autosync to automatically keep your partner list up-to-date, check out ");
      a0 = element("a");
      t6 = text("this page");
      t7 = text(".");
      create_component(linkable2.$$.fragment);
      p3 = element("p");
      t8 = text("You must follow ");
      b1 = element("b");
      t9 = text("#network-events");
      t10 = text(" in a publicly visible channel in your server. You can make this the same channel as where you post other partner events.");
      create_component(callout0.$$.fragment);
      create_component(linkable3.$$.fragment);
      p4 = element("p");
      t11 = text("These features are optional. You can set them up to provide better tools for your staff or a better experience for your members, but if you do not want them, we will not ask you to give a reason for why you are not using them. We may reach out to you and see if you have any feature requests or changes that would make it work better for you, but you are not required to explain anything.");
      create_component(linkable4.$$.fragment);
      p5 = element("p");
      t12 = text("Banshares are our way of sharing information on problematic users so you can eliminate potential threats or annoyances before they happen in your server. You are not required to execute banshares; it is just to provide you with information for you to act as you see fit.");
      p6 = element("p");
      t13 = text("To post banshares, go to ");
      a1 = element("a");
      t14 = text("https://banshare.teyvatcollective.network");
      t15 = text(".");
      p7 = element("p");
      t16 = text("To learn how to set up banshares and how to use the form, there is more information on ");
      a2 = element("a");
      t17 = text("this page");
      t18 = text(".");
      create_component(linkable5.$$.fragment);
      p8 = element("p");
      t19 = text("Global chat is a feature available to all TCN servers that allows people to chat with people from other servers. There is a global channel available to link all of your members as well as two separate channels for your staff. All of these are optional and you may use all, some, or none.");
      p9 = element("p");
      t20 = text("For how to set up global chat, how to operate it, important things to know, and how to moderate across it, there is more information on ");
      a3 = element("a");
      t21 = text("this page");
      t22 = text(".");
      create_component(linkable6.$$.fragment);
      p10 = element("p");
      t23 = text("You can add your staff to the API (which gives them the role in the TCN Hub and allows them to publish banshares) using ");
      code = element("code");
      t24 = text("/staff add");
      t25 = text(" on the TCN bot. To make things easier, you can also link roles to automatically add and remove staff. See ");
      a4 = element("a");
      t26 = text("this page");
      t27 = text(" for how to use this feature.");
      create_component(linkable7.$$.fragment);
      p11 = element("p");
      t28 = text("We have several other bots either officially or unofficially available for you that you may be interested in. Check out how to use them on ");
      a5 = element("a");
      t29 = text("this page");
      t30 = text(". Here is a list of them:");
      create_component(callout1.$$.fragment);
      ul = element("ul");
      li0 = element("li");
      b2 = element("b");
      t31 = text("Genshin Wizard");
      t32 = text(" [hatter#6666] ");
      span = element("span");
      t33 = text("Official Partner");
      t34 = text(" - A Genshin Impact utility bot.");
      li1 = element("li");
      b3 = element("b");
      t35 = text("Ruin Hunter");
      t36 = text(" [Leaf#1950] - A configurable anti-raid bot.");
      li2 = element("li");
      b4 = element("b");
      t37 = text("Banhammer");
      t38 = text(" [HyperNeutrino#1759] - A utility bot for massbanning.");
      li3 = element("li");
      b5 = element("b");
      t39 = text("Daedalus");
      t40 = text(" [HyperNeutrino#1759] - A general-purpose bot.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Quickstart");
      h1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "The following things are required for you to set up, so you may want to start with them first.");
      p0_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "You must display the list of TCN servers and other TCN partners in a publicly visible channel, clearly separated from your server's individual partners. You can find the most up-to-date version in ");
      b0 = claim_element(p1_nodes, "B", {});
      var b0_nodes = children(b0);
      t3 = claim_text(b0_nodes, "#partner-list");
      b0_nodes.forEach(detach);
      t4 = claim_text(p1_nodes, ", but you do not have to follow this format.");
      p1_nodes.forEach(detach);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t5 = claim_text(p2_nodes, "For a list of full requirements and information on how to use autosync to automatically keep your partner list up-to-date, check out ");
      a0 = claim_element(p2_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t6 = claim_text(a0_nodes, "this page");
      a0_nodes.forEach(detach);
      t7 = claim_text(p2_nodes, ".");
      p2_nodes.forEach(detach);
      claim_component(linkable2.$$.fragment, div_nodes);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      t8 = claim_text(p3_nodes, "You must follow ");
      b1 = claim_element(p3_nodes, "B", {});
      var b1_nodes = children(b1);
      t9 = claim_text(b1_nodes, "#network-events");
      b1_nodes.forEach(detach);
      t10 = claim_text(p3_nodes, " in a publicly visible channel in your server. You can make this the same channel as where you post other partner events.");
      p3_nodes.forEach(detach);
      claim_component(callout0.$$.fragment, div_nodes);
      claim_component(linkable3.$$.fragment, div_nodes);
      p4 = claim_element(div_nodes, "P", {});
      var p4_nodes = children(p4);
      t11 = claim_text(p4_nodes, "These features are optional. You can set them up to provide better tools for your staff or a better experience for your members, but if you do not want them, we will not ask you to give a reason for why you are not using them. We may reach out to you and see if you have any feature requests or changes that would make it work better for you, but you are not required to explain anything.");
      p4_nodes.forEach(detach);
      claim_component(linkable4.$$.fragment, div_nodes);
      p5 = claim_element(div_nodes, "P", {});
      var p5_nodes = children(p5);
      t12 = claim_text(p5_nodes, "Banshares are our way of sharing information on problematic users so you can eliminate potential threats or annoyances before they happen in your server. You are not required to execute banshares; it is just to provide you with information for you to act as you see fit.");
      p5_nodes.forEach(detach);
      p6 = claim_element(div_nodes, "P", {});
      var p6_nodes = children(p6);
      t13 = claim_text(p6_nodes, "To post banshares, go to ");
      a1 = claim_element(p6_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t14 = claim_text(a1_nodes, "https://banshare.teyvatcollective.network");
      a1_nodes.forEach(detach);
      t15 = claim_text(p6_nodes, ".");
      p6_nodes.forEach(detach);
      p7 = claim_element(div_nodes, "P", {});
      var p7_nodes = children(p7);
      t16 = claim_text(p7_nodes, "To learn how to set up banshares and how to use the form, there is more information on ");
      a2 = claim_element(p7_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t17 = claim_text(a2_nodes, "this page");
      a2_nodes.forEach(detach);
      t18 = claim_text(p7_nodes, ".");
      p7_nodes.forEach(detach);
      claim_component(linkable5.$$.fragment, div_nodes);
      p8 = claim_element(div_nodes, "P", {});
      var p8_nodes = children(p8);
      t19 = claim_text(p8_nodes, "Global chat is a feature available to all TCN servers that allows people to chat with people from other servers. There is a global channel available to link all of your members as well as two separate channels for your staff. All of these are optional and you may use all, some, or none.");
      p8_nodes.forEach(detach);
      p9 = claim_element(div_nodes, "P", {});
      var p9_nodes = children(p9);
      t20 = claim_text(p9_nodes, "For how to set up global chat, how to operate it, important things to know, and how to moderate across it, there is more information on ");
      a3 = claim_element(p9_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t21 = claim_text(a3_nodes, "this page");
      a3_nodes.forEach(detach);
      t22 = claim_text(p9_nodes, ".");
      p9_nodes.forEach(detach);
      claim_component(linkable6.$$.fragment, div_nodes);
      p10 = claim_element(div_nodes, "P", {});
      var p10_nodes = children(p10);
      t23 = claim_text(p10_nodes, "You can add your staff to the API (which gives them the role in the TCN Hub and allows them to publish banshares) using ");
      code = claim_element(p10_nodes, "CODE", {});
      var code_nodes = children(code);
      t24 = claim_text(code_nodes, "/staff add");
      code_nodes.forEach(detach);
      t25 = claim_text(p10_nodes, " on the TCN bot. To make things easier, you can also link roles to automatically add and remove staff. See ");
      a4 = claim_element(p10_nodes, "A", { href: true });
      var a4_nodes = children(a4);
      t26 = claim_text(a4_nodes, "this page");
      a4_nodes.forEach(detach);
      t27 = claim_text(p10_nodes, " for how to use this feature.");
      p10_nodes.forEach(detach);
      claim_component(linkable7.$$.fragment, div_nodes);
      p11 = claim_element(div_nodes, "P", {});
      var p11_nodes = children(p11);
      t28 = claim_text(p11_nodes, "We have several other bots either officially or unofficially available for you that you may be interested in. Check out how to use them on ");
      a5 = claim_element(p11_nodes, "A", { href: true });
      var a5_nodes = children(a5);
      t29 = claim_text(a5_nodes, "this page");
      a5_nodes.forEach(detach);
      t30 = claim_text(p11_nodes, ". Here is a list of them:");
      p11_nodes.forEach(detach);
      claim_component(callout1.$$.fragment, div_nodes);
      ul = claim_element(div_nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      b2 = claim_element(li0_nodes, "B", {});
      var b2_nodes = children(b2);
      t31 = claim_text(b2_nodes, "Genshin Wizard");
      b2_nodes.forEach(detach);
      t32 = claim_text(li0_nodes, " [hatter#6666] ");
      span = claim_element(li0_nodes, "SPAN", { style: true });
      var span_nodes = children(span);
      t33 = claim_text(span_nodes, "Official Partner");
      span_nodes.forEach(detach);
      t34 = claim_text(li0_nodes, " - A Genshin Impact utility bot.");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      b3 = claim_element(li1_nodes, "B", {});
      var b3_nodes = children(b3);
      t35 = claim_text(b3_nodes, "Ruin Hunter");
      b3_nodes.forEach(detach);
      t36 = claim_text(li1_nodes, " [Leaf#1950] - A configurable anti-raid bot.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      b4 = claim_element(li2_nodes, "B", {});
      var b4_nodes = children(b4);
      t37 = claim_text(b4_nodes, "Banhammer");
      b4_nodes.forEach(detach);
      t38 = claim_text(li2_nodes, " [HyperNeutrino#1759] - A utility bot for massbanning.");
      li2_nodes.forEach(detach);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      b5 = claim_element(li3_nodes, "B", {});
      var b5_nodes = children(b5);
      t39 = claim_text(b5_nodes, "Daedalus");
      b5_nodes.forEach(detach);
      t40 = claim_text(li3_nodes, " [HyperNeutrino#1759] - A general-purpose bot.");
      li3_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "/info/partner-list");
      attr(a1, "href", "https://banshare.teyvatcollective.network");
      attr(a2, "href", "/info/banshares");
      attr(a3, "href", "/info/global");
      attr(a4, "href", "/info/staff-link");
      attr(a5, "href", "/info/other-bots");
      set_style(span, "color", "var(--text-accent)");
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      mount_component(linkable0, div, null);
      append_hydration(div, p0);
      append_hydration(p0, t1);
      mount_component(linkable1, div, null);
      append_hydration(div, p1);
      append_hydration(p1, t2);
      append_hydration(p1, b0);
      append_hydration(b0, t3);
      append_hydration(p1, t4);
      append_hydration(div, p2);
      append_hydration(p2, t5);
      append_hydration(p2, a0);
      append_hydration(a0, t6);
      append_hydration(p2, t7);
      mount_component(linkable2, div, null);
      append_hydration(div, p3);
      append_hydration(p3, t8);
      append_hydration(p3, b1);
      append_hydration(b1, t9);
      append_hydration(p3, t10);
      mount_component(callout0, div, null);
      mount_component(linkable3, div, null);
      append_hydration(div, p4);
      append_hydration(p4, t11);
      mount_component(linkable4, div, null);
      append_hydration(div, p5);
      append_hydration(p5, t12);
      append_hydration(div, p6);
      append_hydration(p6, t13);
      append_hydration(p6, a1);
      append_hydration(a1, t14);
      append_hydration(p6, t15);
      append_hydration(div, p7);
      append_hydration(p7, t16);
      append_hydration(p7, a2);
      append_hydration(a2, t17);
      append_hydration(p7, t18);
      mount_component(linkable5, div, null);
      append_hydration(div, p8);
      append_hydration(p8, t19);
      append_hydration(div, p9);
      append_hydration(p9, t20);
      append_hydration(p9, a3);
      append_hydration(a3, t21);
      append_hydration(p9, t22);
      mount_component(linkable6, div, null);
      append_hydration(div, p10);
      append_hydration(p10, t23);
      append_hydration(p10, code);
      append_hydration(code, t24);
      append_hydration(p10, t25);
      append_hydration(p10, a4);
      append_hydration(a4, t26);
      append_hydration(p10, t27);
      mount_component(linkable7, div, null);
      append_hydration(div, p11);
      append_hydration(p11, t28);
      append_hydration(p11, a5);
      append_hydration(a5, t29);
      append_hydration(p11, t30);
      mount_component(callout1, div, null);
      append_hydration(div, ul);
      append_hydration(ul, li0);
      append_hydration(li0, b2);
      append_hydration(b2, t31);
      append_hydration(li0, t32);
      append_hydration(li0, span);
      append_hydration(span, t33);
      append_hydration(li0, t34);
      append_hydration(ul, li1);
      append_hydration(li1, b3);
      append_hydration(b3, t35);
      append_hydration(li1, t36);
      append_hydration(ul, li2);
      append_hydration(li2, b4);
      append_hydration(b4, t37);
      append_hydration(li2, t38);
      append_hydration(ul, li3);
      append_hydration(li3, b5);
      append_hydration(b5, t39);
      append_hydration(li3, t40);
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
    },
    i(local) {
      if (current)
        return;
      transition_in(linkable0.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(callout0.$$.fragment, local);
      transition_in(linkable3.$$.fragment, local);
      transition_in(linkable4.$$.fragment, local);
      transition_in(linkable5.$$.fragment, local);
      transition_in(linkable6.$$.fragment, local);
      transition_in(linkable7.$$.fragment, local);
      transition_in(callout1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(callout0.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      transition_out(linkable4.$$.fragment, local);
      transition_out(linkable5.$$.fragment, local);
      transition_out(linkable6.$$.fragment, local);
      transition_out(linkable7.$$.fragment, local);
      transition_out(callout1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(linkable0);
      destroy_component(linkable1);
      destroy_component(linkable2);
      destroy_component(callout0);
      destroy_component(linkable3);
      destroy_component(linkable4);
      destroy_component(linkable5);
      destroy_component(linkable6);
      destroy_component(linkable7);
      destroy_component(callout1);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/hq", "HQ"],
      next: ["/info/discord", "Discord Help"],
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
