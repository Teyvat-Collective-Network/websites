import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot(ctx) {
  let div;
  let h1;
  let t0;
  let p0;
  let t1;
  let a;
  let t2;
  let t3;
  let p1;
  let t4;
  let code0;
  let t5;
  let t6;
  let code1;
  let t7;
  let t8;
  let p2;
  let t9;
  let code2;
  let t10;
  let t11;
  let code3;
  let t12;
  let t13;
  let p3;
  let t14;
  let code4;
  let t15;
  let t16;
  let code5;
  let t17;
  let t18;
  let code6;
  let t19;
  let t20;
  let p4;
  let t21;
  let b;
  let t22;
  let t23;
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Staff Link");
      p0 = element("p");
      t1 = text("To manage your staff in the TCN API, you will need to use the TCN manager bot. You can access it in HQ and the Hub, but you should add it to your server with ");
      a = element("a");
      t2 = text("this link");
      t3 = text(" as it enables you to use automatic role sync and also has banshares and future features on it.");
      p1 = element("p");
      t4 = text("To add a staff member manually, use ");
      code0 = element("code");
      t5 = text("/staff add");
      t6 = text(" (and to remove them, ");
      code1 = element("code");
      t7 = text("/staff remove");
      t8 = text(").");
      p2 = element("p");
      t9 = text("To list a server's staff, use ");
      code2 = element("code");
      t10 = text("/staff members");
      t11 = text(". Conversely, use ");
      code3 = element("code");
      t12 = text("/staff list");
      t13 = text(" to list a staff's servers.");
      p3 = element("p");
      t14 = text("To automatically sync staff, use ");
      code4 = element("code");
      t15 = text("/autostaff add");
      t16 = text(" to add a staff role, ");
      code5 = element("code");
      t17 = text("/autostaff remove");
      t18 = text(" to remove a staff role, and ");
      code6 = element("code");
      t19 = text("/autostaff list");
      t20 = text(" to list registered staff roles. Users with any of these roles will automatically be considered staff.");
      p4 = element("p");
      t21 = text("Staff will automatically gain the ");
      b = element("b");
      t22 = text("Network Staff");
      t23 = text(" role and your server's color role in the TCN Hub, and also gain access to banshares from your server.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Staff Link");
      h1_nodes.forEach(detach);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "To manage your staff in the TCN API, you will need to use the TCN manager bot. You can access it in HQ and the Hub, but you should add it to your server with ");
      a = claim_element(p0_nodes, "A", { href: true });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "this link");
      a_nodes.forEach(detach);
      t3 = claim_text(p0_nodes, " as it enables you to use automatic role sync and also has banshares and future features on it.");
      p0_nodes.forEach(detach);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "To add a staff member manually, use ");
      code0 = claim_element(p1_nodes, "CODE", {});
      var code0_nodes = children(code0);
      t5 = claim_text(code0_nodes, "/staff add");
      code0_nodes.forEach(detach);
      t6 = claim_text(p1_nodes, " (and to remove them, ");
      code1 = claim_element(p1_nodes, "CODE", {});
      var code1_nodes = children(code1);
      t7 = claim_text(code1_nodes, "/staff remove");
      code1_nodes.forEach(detach);
      t8 = claim_text(p1_nodes, ").");
      p1_nodes.forEach(detach);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t9 = claim_text(p2_nodes, "To list a server's staff, use ");
      code2 = claim_element(p2_nodes, "CODE", {});
      var code2_nodes = children(code2);
      t10 = claim_text(code2_nodes, "/staff members");
      code2_nodes.forEach(detach);
      t11 = claim_text(p2_nodes, ". Conversely, use ");
      code3 = claim_element(p2_nodes, "CODE", {});
      var code3_nodes = children(code3);
      t12 = claim_text(code3_nodes, "/staff list");
      code3_nodes.forEach(detach);
      t13 = claim_text(p2_nodes, " to list a staff's servers.");
      p2_nodes.forEach(detach);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      t14 = claim_text(p3_nodes, "To automatically sync staff, use ");
      code4 = claim_element(p3_nodes, "CODE", {});
      var code4_nodes = children(code4);
      t15 = claim_text(code4_nodes, "/autostaff add");
      code4_nodes.forEach(detach);
      t16 = claim_text(p3_nodes, " to add a staff role, ");
      code5 = claim_element(p3_nodes, "CODE", {});
      var code5_nodes = children(code5);
      t17 = claim_text(code5_nodes, "/autostaff remove");
      code5_nodes.forEach(detach);
      t18 = claim_text(p3_nodes, " to remove a staff role, and ");
      code6 = claim_element(p3_nodes, "CODE", {});
      var code6_nodes = children(code6);
      t19 = claim_text(code6_nodes, "/autostaff list");
      code6_nodes.forEach(detach);
      t20 = claim_text(p3_nodes, " to list registered staff roles. Users with any of these roles will automatically be considered staff.");
      p3_nodes.forEach(detach);
      p4 = claim_element(div_nodes, "P", {});
      var p4_nodes = children(p4);
      t21 = claim_text(p4_nodes, "Staff will automatically gain the ");
      b = claim_element(p4_nodes, "B", {});
      var b_nodes = children(b);
      t22 = claim_text(b_nodes, "Network Staff");
      b_nodes.forEach(detach);
      t23 = claim_text(p4_nodes, " role and your server's color role in the TCN Hub, and also gain access to banshares from your server.");
      p4_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://discord.com/api/oauth2/authorize?client_id=959360773518413824&permissions=1512097303623&scope=applications.commands%20bot");
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      append_hydration(div, p0);
      append_hydration(p0, t1);
      append_hydration(p0, a);
      append_hydration(a, t2);
      append_hydration(p0, t3);
      append_hydration(div, p1);
      append_hydration(p1, t4);
      append_hydration(p1, code0);
      append_hydration(code0, t5);
      append_hydration(p1, t6);
      append_hydration(p1, code1);
      append_hydration(code1, t7);
      append_hydration(p1, t8);
      append_hydration(div, p2);
      append_hydration(p2, t9);
      append_hydration(p2, code2);
      append_hydration(code2, t10);
      append_hydration(p2, t11);
      append_hydration(p2, code3);
      append_hydration(code3, t12);
      append_hydration(p2, t13);
      append_hydration(div, p3);
      append_hydration(p3, t14);
      append_hydration(p3, code4);
      append_hydration(code4, t15);
      append_hydration(p3, t16);
      append_hydration(p3, code5);
      append_hydration(code5, t17);
      append_hydration(p3, t18);
      append_hydration(p3, code6);
      append_hydration(code6, t19);
      append_hydration(p3, t20);
      append_hydration(div, p4);
      append_hydration(p4, t21);
      append_hydration(p4, b);
      append_hydration(b, t22);
      append_hydration(p4, t23);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/quickstart#staff-link", "Quickstart"],
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
