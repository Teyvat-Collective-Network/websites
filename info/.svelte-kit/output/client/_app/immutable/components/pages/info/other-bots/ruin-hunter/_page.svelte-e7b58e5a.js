import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../../chunks/Callout-2d6b8933.js";
import { N as Navigation } from "../../../../../chunks/Navigation-82debefb.js";
function create_default_slot_1(ctx) {
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
      t1 = text("Leaf#1950");
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
      t1 = claim_text(b_nodes, "Leaf#1950");
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
      attr(a, "href", "https://discord.com/api/oauth2/authorize?client_id=927626506937720862&permissions=1099511635974&scope=bot%20applications.commands");
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
function create_default_slot(ctx) {
  let div;
  let h1;
  let t0;
  let callout;
  let p0;
  let t1;
  let ul0;
  let li0;
  let code0;
  let t2;
  let t3;
  let li1;
  let code1;
  let t4;
  let t5;
  let li2;
  let code2;
  let t6;
  let t7;
  let p1;
  let t8;
  let ul1;
  let li3;
  let code3;
  let t9;
  let t10;
  let li4;
  let code4;
  let t11;
  let t12;
  let li5;
  let code5;
  let t13;
  let t14;
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
      t0 = text("Ruin Hunter");
      create_component(callout.$$.fragment);
      p0 = element("p");
      t1 = text("The bot starts working as soon as it's added and requires no setup, though you may want to adjust the settings.");
      ul0 = element("ul");
      li0 = element("li");
      code0 = element("code");
      t2 = text("/settings");
      t3 = text(" - adjust the raid threshold (default: 5 joins from accounts younger than 1 week per 10 seconds)");
      li1 = element("li");
      code1 = element("code");
      t4 = text("/off");
      t5 = text(" - turn off the bot (useful if you are expecting an influx of users)");
      li2 = element("li");
      code2 = element("code");
      t6 = text("/on");
      t7 = text(" - turn back on the bot (it starts on)");
      p1 = element("p");
      t8 = text("Some additional commands:");
      ul1 = element("ul");
      li3 = element("li");
      code3 = element("code");
      t9 = text("/logs");
      t10 = text(" - set the log output channel");
      li4 = element("li");
      code4 = element("code");
      t11 = text("/history");
      t12 = text(" - view the history of recent raids caught in your server, or view details of a particular raid");
      li5 = element("li");
      code5 = element("code");
      t13 = text("/stats");
      t14 = text(" - view bot stats (how many servers and how many members are being watched, and how many raids have been caught overall)");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Ruin Hunter");
      h1_nodes.forEach(detach);
      claim_component(callout.$$.fragment, div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "The bot starts working as soon as it's added and requires no setup, though you may want to adjust the settings.");
      p0_nodes.forEach(detach);
      ul0 = claim_element(div_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      code0 = claim_element(li0_nodes, "CODE", {});
      var code0_nodes = children(code0);
      t2 = claim_text(code0_nodes, "/settings");
      code0_nodes.forEach(detach);
      t3 = claim_text(li0_nodes, " - adjust the raid threshold (default: 5 joins from accounts younger than 1 week per 10 seconds)");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      code1 = claim_element(li1_nodes, "CODE", {});
      var code1_nodes = children(code1);
      t4 = claim_text(code1_nodes, "/off");
      code1_nodes.forEach(detach);
      t5 = claim_text(li1_nodes, " - turn off the bot (useful if you are expecting an influx of users)");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul0_nodes, "LI", {});
      var li2_nodes = children(li2);
      code2 = claim_element(li2_nodes, "CODE", {});
      var code2_nodes = children(code2);
      t6 = claim_text(code2_nodes, "/on");
      code2_nodes.forEach(detach);
      t7 = claim_text(li2_nodes, " - turn back on the bot (it starts on)");
      li2_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t8 = claim_text(p1_nodes, "Some additional commands:");
      p1_nodes.forEach(detach);
      ul1 = claim_element(div_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li3 = claim_element(ul1_nodes, "LI", {});
      var li3_nodes = children(li3);
      code3 = claim_element(li3_nodes, "CODE", {});
      var code3_nodes = children(code3);
      t9 = claim_text(code3_nodes, "/logs");
      code3_nodes.forEach(detach);
      t10 = claim_text(li3_nodes, " - set the log output channel");
      li3_nodes.forEach(detach);
      li4 = claim_element(ul1_nodes, "LI", {});
      var li4_nodes = children(li4);
      code4 = claim_element(li4_nodes, "CODE", {});
      var code4_nodes = children(code4);
      t11 = claim_text(code4_nodes, "/history");
      code4_nodes.forEach(detach);
      t12 = claim_text(li4_nodes, " - view the history of recent raids caught in your server, or view details of a particular raid");
      li4_nodes.forEach(detach);
      li5 = claim_element(ul1_nodes, "LI", {});
      var li5_nodes = children(li5);
      code5 = claim_element(li5_nodes, "CODE", {});
      var code5_nodes = children(code5);
      t13 = claim_text(code5_nodes, "/stats");
      code5_nodes.forEach(detach);
      t14 = claim_text(li5_nodes, " - view bot stats (how many servers and how many members are being watched, and how many raids have been caught overall)");
      li5_nodes.forEach(detach);
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
      mount_component(callout, div, null);
      append_hydration(div, p0);
      append_hydration(p0, t1);
      append_hydration(div, ul0);
      append_hydration(ul0, li0);
      append_hydration(li0, code0);
      append_hydration(code0, t2);
      append_hydration(li0, t3);
      append_hydration(ul0, li1);
      append_hydration(li1, code1);
      append_hydration(code1, t4);
      append_hydration(li1, t5);
      append_hydration(ul0, li2);
      append_hydration(li2, code2);
      append_hydration(code2, t6);
      append_hydration(li2, t7);
      append_hydration(div, p1);
      append_hydration(p1, t8);
      append_hydration(div, ul1);
      append_hydration(ul1, li3);
      append_hydration(li3, code3);
      append_hydration(code3, t9);
      append_hydration(li3, t10);
      append_hydration(ul1, li4);
      append_hydration(li4, code4);
      append_hydration(code4, t11);
      append_hydration(li4, t12);
      append_hydration(ul1, li5);
      append_hydration(li5, code5);
      append_hydration(code5, t13);
      append_hydration(li5, t14);
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
      last: ["/info/other-bots#ruin-hunter", "Other Bots"],
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
