import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../../chunks/Callout-2d6b8933.js";
import { N as Navigation } from "../../../../../chunks/Navigation-82debefb.js";
function create_default_slot_2(ctx) {
  let p0;
  let t0;
  let b;
  let t1;
  let p1;
  let a;
  let t2;
  return {
    c() {
      p0 = element("p");
      t0 = text("Developed by ");
      b = element("b");
      t1 = text("HyperNeutrino#1759");
      p1 = element("p");
      a = element("a");
      t2 = text("Add To Server");
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
      a = claim_element(p1_nodes, "A", { href: true });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "Add To Server");
      a_nodes.forEach(detach);
      p1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://discord.com/api/oauth2/authorize?client_id=994100815402909817&permissions=274877959172&scope=bot");
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      append_hydration(p0, b);
      append_hydration(b, t1);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, a);
      append_hydration(a, t2);
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
function create_default_slot_1(ctx) {
  let p;
  let t0;
  let a;
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("The massban feature on ");
      a = element("a");
      t1 = text("Daedalus");
      t2 = text(" is much more comprehensive, and that bot supports better permission controls and more features.");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "The massban feature on ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Daedalus");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, " is much more comprehensive, and that bot supports better permission controls and more features.");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/info/other-bots/daedalus");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, a);
      append_hydration(a, t1);
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
  let br;
  let callout1;
  let p;
  let t1;
  let ul1;
  let li3;
  let code0;
  let t2;
  let t3;
  let ul0;
  let li0;
  let b0;
  let t4;
  let t5;
  let li1;
  let b1;
  let t6;
  let t7;
  let li2;
  let b2;
  let t8;
  let t9;
  let li4;
  let code1;
  let t10;
  let t11;
  let code2;
  let t12;
  let li5;
  let code3;
  let t13;
  let t14;
  let code4;
  let t15;
  let t16;
  let li6;
  let code5;
  let t17;
  let t18;
  let current;
  callout0 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
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
      t0 = text("Banhammer");
      create_component(callout0.$$.fragment);
      br = element("br");
      create_component(callout1.$$.fragment);
      p = element("p");
      t1 = text("By default, Banhammer can only be used by administrators, but this can be changed. Only administrators can manage the permissions.");
      ul1 = element("ul");
      li3 = element("li");
      code0 = element("code");
      t2 = text("bh!massban [days] <url> [reason]");
      t3 = text(" - massban a list of users");
      ul0 = element("ul");
      li0 = element("li");
      b0 = element("b");
      t4 = text("days");
      t5 = text(" indicates the number of days of messages to purge (0-7, default 0)");
      li1 = element("li");
      b1 = element("b");
      t6 = text("url");
      t7 = text(" must point to a raw text file (e.g. a Pastebin or Gist raw file) listing the IDs");
      li2 = element("li");
      b2 = element("b");
      t8 = text("reason");
      t9 = text(" will be put in the audit logs (optional)");
      li4 = element("li");
      code1 = element("code");
      t10 = text("bh!allow <role>");
      t11 = text(" - allow members with this role to use ");
      code2 = element("code");
      t12 = text("bh!massban");
      li5 = element("li");
      code3 = element("code");
      t13 = text("bh!deny <role>");
      t14 = text(" - remove this role from the allowlist (but does not block it, so users with another allowed role can still use ");
      code4 = element("code");
      t15 = text("bh!massban");
      t16 = text(")");
      li6 = element("li");
      code5 = element("code");
      t17 = text("bh!list");
      t18 = text(" - list allowed roles");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Banhammer");
      h1_nodes.forEach(detach);
      claim_component(callout0.$$.fragment, div_nodes);
      br = claim_element(div_nodes, "BR", {});
      claim_component(callout1.$$.fragment, div_nodes);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, "By default, Banhammer can only be used by administrators, but this can be changed. Only administrators can manage the permissions.");
      p_nodes.forEach(detach);
      ul1 = claim_element(div_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li3 = claim_element(ul1_nodes, "LI", {});
      var li3_nodes = children(li3);
      code0 = claim_element(li3_nodes, "CODE", {});
      var code0_nodes = children(code0);
      t2 = claim_text(code0_nodes, "bh!massban [days] <url> [reason]");
      code0_nodes.forEach(detach);
      t3 = claim_text(li3_nodes, " - massban a list of users");
      ul0 = claim_element(li3_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      b0 = claim_element(li0_nodes, "B", {});
      var b0_nodes = children(b0);
      t4 = claim_text(b0_nodes, "days");
      b0_nodes.forEach(detach);
      t5 = claim_text(li0_nodes, " indicates the number of days of messages to purge (0-7, default 0)");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      b1 = claim_element(li1_nodes, "B", {});
      var b1_nodes = children(b1);
      t6 = claim_text(b1_nodes, "url");
      b1_nodes.forEach(detach);
      t7 = claim_text(li1_nodes, " must point to a raw text file (e.g. a Pastebin or Gist raw file) listing the IDs");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul0_nodes, "LI", {});
      var li2_nodes = children(li2);
      b2 = claim_element(li2_nodes, "B", {});
      var b2_nodes = children(b2);
      t8 = claim_text(b2_nodes, "reason");
      b2_nodes.forEach(detach);
      t9 = claim_text(li2_nodes, " will be put in the audit logs (optional)");
      li2_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      li3_nodes.forEach(detach);
      li4 = claim_element(ul1_nodes, "LI", {});
      var li4_nodes = children(li4);
      code1 = claim_element(li4_nodes, "CODE", {});
      var code1_nodes = children(code1);
      t10 = claim_text(code1_nodes, "bh!allow <role>");
      code1_nodes.forEach(detach);
      t11 = claim_text(li4_nodes, " - allow members with this role to use ");
      code2 = claim_element(li4_nodes, "CODE", {});
      var code2_nodes = children(code2);
      t12 = claim_text(code2_nodes, "bh!massban");
      code2_nodes.forEach(detach);
      li4_nodes.forEach(detach);
      li5 = claim_element(ul1_nodes, "LI", {});
      var li5_nodes = children(li5);
      code3 = claim_element(li5_nodes, "CODE", {});
      var code3_nodes = children(code3);
      t13 = claim_text(code3_nodes, "bh!deny <role>");
      code3_nodes.forEach(detach);
      t14 = claim_text(li5_nodes, " - remove this role from the allowlist (but does not block it, so users with another allowed role can still use ");
      code4 = claim_element(li5_nodes, "CODE", {});
      var code4_nodes = children(code4);
      t15 = claim_text(code4_nodes, "bh!massban");
      code4_nodes.forEach(detach);
      t16 = claim_text(li5_nodes, ")");
      li5_nodes.forEach(detach);
      li6 = claim_element(ul1_nodes, "LI", {});
      var li6_nodes = children(li6);
      code5 = claim_element(li6_nodes, "CODE", {});
      var code5_nodes = children(code5);
      t17 = claim_text(code5_nodes, "bh!list");
      code5_nodes.forEach(detach);
      t18 = claim_text(li6_nodes, " - list allowed roles");
      li6_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
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
      mount_component(callout0, div, null);
      append_hydration(div, br);
      mount_component(callout1, div, null);
      append_hydration(div, p);
      append_hydration(p, t1);
      append_hydration(div, ul1);
      append_hydration(ul1, li3);
      append_hydration(li3, code0);
      append_hydration(code0, t2);
      append_hydration(li3, t3);
      append_hydration(li3, ul0);
      append_hydration(ul0, li0);
      append_hydration(li0, b0);
      append_hydration(b0, t4);
      append_hydration(li0, t5);
      append_hydration(ul0, li1);
      append_hydration(li1, b1);
      append_hydration(b1, t6);
      append_hydration(li1, t7);
      append_hydration(ul0, li2);
      append_hydration(li2, b2);
      append_hydration(b2, t8);
      append_hydration(li2, t9);
      append_hydration(ul1, li4);
      append_hydration(li4, code1);
      append_hydration(code1, t10);
      append_hydration(li4, t11);
      append_hydration(li4, code2);
      append_hydration(code2, t12);
      append_hydration(ul1, li5);
      append_hydration(li5, code3);
      append_hydration(code3, t13);
      append_hydration(li5, t14);
      append_hydration(li5, code4);
      append_hydration(code4, t15);
      append_hydration(li5, t16);
      append_hydration(ul1, li6);
      append_hydration(li6, code5);
      append_hydration(code5, t17);
      append_hydration(li6, t18);
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
      transition_in(callout0.$$.fragment, local);
      transition_in(callout1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(callout0.$$.fragment, local);
      transition_out(callout1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(callout0);
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
      last: ["/info/other-bots#banhammer", "Other Bots"],
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
