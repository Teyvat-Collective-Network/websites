import { S as SvelteComponent, i as init, s as safe_not_equal, D as svg_element, a as space, k as element, q as text, E as claim_svg_element, m as children, h as detach, c as claim_space, l as claim_element, r as claim_text, n as attr, F as null_to_empty, b as insert_hydration, G as append_hydration, H as listen, u as set_data, C as noop, I as run_all, o as onMount, J as src_url_equal, v as binding_callbacks, K as bind, L as create_slot, x as create_component, y as claim_component, z as mount_component, M as add_flush_callback, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-c4baf36c.js";
import { p as page } from "../../chunks/stores-01f63ed3.js";
import { P as PUBLIC_TCN_AUTH, a as PUBLIC_DOMAIN } from "../../chunks/public-962e99ca.js";
const Menu_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let a;
  let t0;
  let i;
  let t1;
  return {
    c() {
      a = element("a");
      t0 = text("Log In\n                ");
      i = element("i");
      t1 = text("login");
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, "Log In\n                ");
      i = claim_element(a_nodes, "I", { class: true });
      var i_nodes = children(i);
      t1 = claim_text(i_nodes, "login");
      i_nodes.forEach(detach);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "material-icons");
      attr(a, "href", PUBLIC_TCN_AUTH + "?redirect=" + encodeURIComponent(PUBLIC_DOMAIN));
      attr(a, "class", "t1 svelte-1onat8c");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t0);
      append_hydration(a, i);
      append_hydration(i, t1);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_if_block(ctx) {
  var _a, _b;
  let t0;
  let a;
  let t1;
  let i;
  let t2;
  let if_block = (
    /*api_user*/
    ((_b = (_a = ctx[2]) == null ? void 0 : _a.guilds) == null ? void 0 : _b.length) > 0 && create_if_block_1(ctx)
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      t0 = space();
      a = element("a");
      t1 = text("Log Out\n                ");
      i = element("i");
      t2 = text("logout");
      this.h();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t0 = claim_space(nodes);
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Log Out\n                ");
      i = claim_element(a_nodes, "I", { class: true });
      var i_nodes = children(i);
      t2 = claim_text(i_nodes, "logout");
      i_nodes.forEach(detach);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "material-icons");
      attr(a, "href", PUBLIC_TCN_AUTH + "/logout?redirect=" + encodeURIComponent(PUBLIC_DOMAIN));
      attr(a, "class", "t1 svelte-1onat8c");
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, a, anchor);
      append_hydration(a, t1);
      append_hydration(a, i);
      append_hydration(i, t2);
    },
    p(ctx2, dirty) {
      var _a2, _b2;
      if (
        /*api_user*/
        ((_b2 = (_a2 = ctx2[2]) == null ? void 0 : _a2.guilds) == null ? void 0 : _b2.length) > 0
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(t0.parentNode, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(a);
    }
  };
}
function create_if_block_1(ctx) {
  let a0;
  let t0;
  let i;
  let t1_value = (
    /*staff_open*/
    ctx[6] ? "keyboard_arrow_down" : "chevron_right"
  );
  let t1;
  let t2;
  let a1;
  let t3;
  let a1_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      a0 = element("a");
      t0 = text("Staff Area\n                    ");
      i = element("i");
      t1 = text(t1_value);
      t2 = space();
      a1 = element("a");
      t3 = text("Submit a Banshare");
      this.h();
    },
    l(nodes) {
      a0 = claim_element(nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "Staff Area\n                    ");
      i = claim_element(a0_nodes, "I", { class: true });
      var i_nodes = children(i);
      t1 = claim_text(i_nodes, t1_value);
      i_nodes.forEach(detach);
      a0_nodes.forEach(detach);
      t2 = claim_space(nodes);
      a1 = claim_element(nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "Submit a Banshare");
      a1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "material-icons");
      attr(a0, "href", "javascript:void(0)");
      attr(a0, "class", "t1 svelte-1onat8c");
      attr(a1, "href", "/banshare");
      attr(a1, "class", a1_class_value = "t2 " + /*staff_open*/
      (ctx[6] ? "" : "hidden") + " svelte-1onat8c");
    },
    m(target, anchor) {
      insert_hydration(target, a0, anchor);
      append_hydration(a0, t0);
      append_hydration(a0, i);
      append_hydration(i, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, a1, anchor);
      append_hydration(a1, t3);
      if (!mounted) {
        dispose = listen(
          a0,
          "click",
          /*click_handler_3*/
          ctx[15]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*staff_open*/
      64 && t1_value !== (t1_value = /*staff_open*/
      ctx2[6] ? "keyboard_arrow_down" : "chevron_right"))
        set_data(t1, t1_value);
      if (dirty & /*staff_open*/
      64 && a1_class_value !== (a1_class_value = "t2 " + /*staff_open*/
      (ctx2[6] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a1, "class", a1_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(a0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(a1);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$2(ctx) {
  let svg;
  let rect0;
  let rect1;
  let rect2;
  let svg_class_value;
  let t0;
  let div0;
  let t1;
  let div1;
  let t2;
  let div4;
  let div2;
  let a0;
  let i0;
  let t3_value = (
    /*dark*/
    ctx[0] ? "light_mode" : "dark_mode"
  );
  let t3;
  let t4;
  let t5_value = (
    /*dark*/
    ctx[0] ? "Light" : "Dark"
  );
  let t5;
  let t6;
  let t7;
  let a1;
  let t8;
  let t9;
  let a2;
  let t10;
  let t11;
  let a3;
  let t12;
  let t13;
  let a4;
  let t14;
  let t15;
  let a5;
  let t16;
  let t17;
  let a6;
  let t18;
  let t19;
  let a7;
  let t20;
  let t21;
  let a8;
  let t22;
  let i1;
  let t23_value = (
    /*info_open*/
    ctx[5] ? "keyboard_arrow_down" : "chevron_right"
  );
  let t23;
  let t24;
  let a9;
  let t25;
  let a9_class_value;
  let t26;
  let a10;
  let t27;
  let a10_class_value;
  let t28;
  let a11;
  let t29;
  let a11_class_value;
  let t30;
  let a12;
  let t31;
  let a12_class_value;
  let t32;
  let a13;
  let t33;
  let a13_class_value;
  let t34;
  let a14;
  let t35;
  let a14_class_value;
  let t36;
  let a15;
  let t37;
  let a15_class_value;
  let t38;
  let a16;
  let t39;
  let a16_class_value;
  let t40;
  let a17;
  let t41;
  let a17_class_value;
  let t42;
  let a18;
  let t43;
  let a18_class_value;
  let t44;
  let a19;
  let t45;
  let a19_class_value;
  let t46;
  let a20;
  let t47;
  let a20_class_value;
  let t48;
  let a21;
  let t49;
  let a21_class_value;
  let t50;
  let a22;
  let t51;
  let a22_class_value;
  let t52;
  let t53;
  let div3;
  let t54;
  let div4_class_value;
  let t55;
  let div5;
  let div5_class_value;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*user*/
      ctx2[1]
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      svg = svg_element("svg");
      rect0 = svg_element("rect");
      rect1 = svg_element("rect");
      rect2 = svg_element("rect");
      t0 = space();
      div0 = element("div");
      t1 = space();
      div1 = element("div");
      t2 = space();
      div4 = element("div");
      div2 = element("div");
      a0 = element("a");
      i0 = element("i");
      t3 = text(t3_value);
      t4 = text("\n            Switch to ");
      t5 = text(t5_value);
      t6 = text(" Mode");
      t7 = space();
      a1 = element("a");
      t8 = text("Home Page");
      t9 = space();
      a2 = element("a");
      t10 = text("About Us");
      t11 = space();
      a3 = element("a");
      t12 = text("Partners");
      t13 = space();
      a4 = element("a");
      t14 = text("Calendar");
      t15 = space();
      a5 = element("a");
      t16 = text("Featured Content");
      t17 = space();
      a6 = element("a");
      t18 = text("Joining the TCN");
      t19 = space();
      a7 = element("a");
      t20 = text("Contact Us");
      t21 = space();
      a8 = element("a");
      t22 = text("Info Pages\n            ");
      i1 = element("i");
      t23 = text(t23_value);
      t24 = space();
      a9 = element("a");
      t25 = text("Rules");
      t26 = space();
      a10 = element("a");
      t27 = text("Definitions & Organization");
      t28 = space();
      a11 = element("a");
      t29 = text("HQ");
      t30 = space();
      a12 = element("a");
      t31 = text("Directory");
      t32 = space();
      a13 = element("a");
      t33 = text("Voting");
      t34 = space();
      a14 = element("a");
      t35 = text("Procedures");
      t36 = space();
      a15 = element("a");
      t37 = text("Akasha System");
      t38 = space();
      a16 = element("a");
      t39 = text("Quickstart");
      t40 = space();
      a17 = element("a");
      t41 = text("Partner List & Autosync");
      t42 = space();
      a18 = element("a");
      t43 = text("Banshares");
      t44 = space();
      a19 = element("a");
      t45 = text("Global Chat");
      t46 = space();
      a20 = element("a");
      t47 = text("Staff Link");
      t48 = space();
      a21 = element("a");
      t49 = text("Other Bots");
      t50 = space();
      a22 = element("a");
      t51 = text("Discord Help");
      t52 = space();
      if_block.c();
      t53 = space();
      div3 = element("div");
      t54 = text("© 2023 TCN Developers");
      t55 = space();
      div5 = element("div");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", { viewBox: true, class: true });
      var svg_nodes = children(svg);
      rect0 = claim_svg_element(svg_nodes, "rect", {
        id: true,
        x: true,
        y: true,
        width: true,
        height: true,
        class: true
      });
      children(rect0).forEach(detach);
      rect1 = claim_svg_element(svg_nodes, "rect", {
        id: true,
        x: true,
        y: true,
        width: true,
        height: true,
        class: true
      });
      children(rect1).forEach(detach);
      rect2 = claim_svg_element(svg_nodes, "rect", {
        id: true,
        x: true,
        y: true,
        width: true,
        height: true,
        class: true
      });
      children(rect2).forEach(detach);
      svg_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", { id: true, class: true });
      children(div0).forEach(detach);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { id: true, class: true });
      children(div1).forEach(detach);
      t2 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { id: true, class: true });
      var div4_nodes = children(div4);
      div2 = claim_element(div4_nodes, "DIV", { id: true, class: true });
      var div2_nodes = children(div2);
      a0 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      i0 = claim_element(a0_nodes, "I", { class: true });
      var i0_nodes = children(i0);
      t3 = claim_text(i0_nodes, t3_value);
      i0_nodes.forEach(detach);
      t4 = claim_text(a0_nodes, "\n            Switch to ");
      t5 = claim_text(a0_nodes, t5_value);
      t6 = claim_text(a0_nodes, " Mode");
      a0_nodes.forEach(detach);
      t7 = claim_space(div2_nodes);
      a1 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t8 = claim_text(a1_nodes, "Home Page");
      a1_nodes.forEach(detach);
      t9 = claim_space(div2_nodes);
      a2 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t10 = claim_text(a2_nodes, "About Us");
      a2_nodes.forEach(detach);
      t11 = claim_space(div2_nodes);
      a3 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      t12 = claim_text(a3_nodes, "Partners");
      a3_nodes.forEach(detach);
      t13 = claim_space(div2_nodes);
      a4 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a4_nodes = children(a4);
      t14 = claim_text(a4_nodes, "Calendar");
      a4_nodes.forEach(detach);
      t15 = claim_space(div2_nodes);
      a5 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a5_nodes = children(a5);
      t16 = claim_text(a5_nodes, "Featured Content");
      a5_nodes.forEach(detach);
      t17 = claim_space(div2_nodes);
      a6 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a6_nodes = children(a6);
      t18 = claim_text(a6_nodes, "Joining the TCN");
      a6_nodes.forEach(detach);
      t19 = claim_space(div2_nodes);
      a7 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a7_nodes = children(a7);
      t20 = claim_text(a7_nodes, "Contact Us");
      a7_nodes.forEach(detach);
      t21 = claim_space(div2_nodes);
      a8 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a8_nodes = children(a8);
      t22 = claim_text(a8_nodes, "Info Pages\n            ");
      i1 = claim_element(a8_nodes, "I", { class: true });
      var i1_nodes = children(i1);
      t23 = claim_text(i1_nodes, t23_value);
      i1_nodes.forEach(detach);
      a8_nodes.forEach(detach);
      t24 = claim_space(div2_nodes);
      a9 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a9_nodes = children(a9);
      t25 = claim_text(a9_nodes, "Rules");
      a9_nodes.forEach(detach);
      t26 = claim_space(div2_nodes);
      a10 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a10_nodes = children(a10);
      t27 = claim_text(a10_nodes, "Definitions & Organization");
      a10_nodes.forEach(detach);
      t28 = claim_space(div2_nodes);
      a11 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a11_nodes = children(a11);
      t29 = claim_text(a11_nodes, "HQ");
      a11_nodes.forEach(detach);
      t30 = claim_space(div2_nodes);
      a12 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a12_nodes = children(a12);
      t31 = claim_text(a12_nodes, "Directory");
      a12_nodes.forEach(detach);
      t32 = claim_space(div2_nodes);
      a13 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a13_nodes = children(a13);
      t33 = claim_text(a13_nodes, "Voting");
      a13_nodes.forEach(detach);
      t34 = claim_space(div2_nodes);
      a14 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a14_nodes = children(a14);
      t35 = claim_text(a14_nodes, "Procedures");
      a14_nodes.forEach(detach);
      t36 = claim_space(div2_nodes);
      a15 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a15_nodes = children(a15);
      t37 = claim_text(a15_nodes, "Akasha System");
      a15_nodes.forEach(detach);
      t38 = claim_space(div2_nodes);
      a16 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a16_nodes = children(a16);
      t39 = claim_text(a16_nodes, "Quickstart");
      a16_nodes.forEach(detach);
      t40 = claim_space(div2_nodes);
      a17 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a17_nodes = children(a17);
      t41 = claim_text(a17_nodes, "Partner List & Autosync");
      a17_nodes.forEach(detach);
      t42 = claim_space(div2_nodes);
      a18 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a18_nodes = children(a18);
      t43 = claim_text(a18_nodes, "Banshares");
      a18_nodes.forEach(detach);
      t44 = claim_space(div2_nodes);
      a19 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a19_nodes = children(a19);
      t45 = claim_text(a19_nodes, "Global Chat");
      a19_nodes.forEach(detach);
      t46 = claim_space(div2_nodes);
      a20 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a20_nodes = children(a20);
      t47 = claim_text(a20_nodes, "Staff Link");
      a20_nodes.forEach(detach);
      t48 = claim_space(div2_nodes);
      a21 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a21_nodes = children(a21);
      t49 = claim_text(a21_nodes, "Other Bots");
      a21_nodes.forEach(detach);
      t50 = claim_space(div2_nodes);
      a22 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a22_nodes = children(a22);
      t51 = claim_text(a22_nodes, "Discord Help");
      a22_nodes.forEach(detach);
      t52 = claim_space(div2_nodes);
      if_block.l(div2_nodes);
      div2_nodes.forEach(detach);
      t53 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { id: true, class: true });
      var div3_nodes = children(div3);
      t54 = claim_text(div3_nodes, "© 2023 TCN Developers");
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t55 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", { id: true, class: true });
      children(div5).forEach(detach);
      this.h();
    },
    h() {
      attr(rect0, "id", "top");
      attr(rect0, "x", "10");
      attr(rect0, "y", "10");
      attr(rect0, "width", "80");
      attr(rect0, "height", "10");
      attr(rect0, "class", "svelte-1onat8c");
      attr(rect1, "id", "mid");
      attr(rect1, "x", "10");
      attr(rect1, "y", "45");
      attr(rect1, "width", "80");
      attr(rect1, "height", "10");
      attr(rect1, "class", "svelte-1onat8c");
      attr(rect2, "id", "bot");
      attr(rect2, "x", "10");
      attr(rect2, "y", "80");
      attr(rect2, "width", "80");
      attr(rect2, "height", "10");
      attr(rect2, "class", "svelte-1onat8c");
      attr(svg, "viewBox", "0 0 100 100");
      attr(svg, "class", svg_class_value = null_to_empty(
        /*open*/
        ctx[3] ? "open" : ""
      ) + " svelte-1onat8c");
      attr(div0, "id", "bar");
      attr(div0, "class", "svelte-1onat8c");
      attr(div1, "id", "spacer");
      attr(div1, "class", "svelte-1onat8c");
      attr(i0, "class", "material-icons");
      attr(a0, "href", "javascript:void(0)");
      attr(a0, "class", "t1 svelte-1onat8c");
      attr(a1, "href", "/");
      attr(a1, "class", "t1 svelte-1onat8c");
      attr(a2, "href", "/about");
      attr(a2, "class", "t1 svelte-1onat8c");
      attr(a3, "href", "/partners");
      attr(a3, "class", "t1 svelte-1onat8c");
      attr(a4, "href", "/calendar");
      attr(a4, "class", "t1 svelte-1onat8c");
      attr(a5, "href", "/featured");
      attr(a5, "class", "t1 svelte-1onat8c");
      attr(a6, "href", "/join");
      attr(a6, "class", "t1 svelte-1onat8c");
      attr(a7, "href", "/contact");
      attr(a7, "class", "t1 svelte-1onat8c");
      attr(i1, "class", "material-icons");
      attr(a8, "href", "javascript:void(0)");
      attr(a8, "class", "t1 svelte-1onat8c");
      attr(a9, "href", "/info/rules");
      attr(a9, "class", a9_class_value = "t2 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a10, "href", "/info/definitions-organization");
      attr(a10, "class", a10_class_value = "t2 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a11, "href", "/info/hq");
      attr(a11, "class", a11_class_value = "t2 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a12, "href", "/info/directory");
      attr(a12, "class", a12_class_value = "t3 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a13, "href", "/info/voting");
      attr(a13, "class", a13_class_value = "t3 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a14, "href", "/info/procedures");
      attr(a14, "class", a14_class_value = "t3 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a15, "href", "/info/akasha");
      attr(a15, "class", a15_class_value = "t3 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a16, "href", "/info/quickstart");
      attr(a16, "class", a16_class_value = "t2 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a17, "href", "/info/partner-list");
      attr(a17, "class", a17_class_value = "t3 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a18, "href", "/info/banshares");
      attr(a18, "class", a18_class_value = "t3 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a19, "href", "/info/global");
      attr(a19, "class", a19_class_value = "t3 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a20, "href", "/info/staff-link");
      attr(a20, "class", a20_class_value = "t3 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a21, "href", "/info/other-bots");
      attr(a21, "class", a21_class_value = "t3 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(a22, "href", "/info/discord");
      attr(a22, "class", a22_class_value = "t2 " + /*info_open*/
      (ctx[5] ? "" : "hidden") + " svelte-1onat8c");
      attr(div2, "id", "contents");
      attr(div2, "class", "svelte-1onat8c");
      attr(div3, "id", "footer");
      attr(div3, "class", "svelte-1onat8c");
      attr(div4, "id", "sidebar");
      attr(div4, "class", div4_class_value = null_to_empty(
        /*open*/
        ctx[3] ? "open" : ""
      ) + " svelte-1onat8c");
      attr(div5, "id", "backdrop");
      attr(div5, "class", div5_class_value = null_to_empty(
        /*open*/
        ctx[3] ? "open" : ""
      ) + " svelte-1onat8c");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, rect0);
      append_hydration(svg, rect1);
      append_hydration(svg, rect2);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div2);
      append_hydration(div2, a0);
      append_hydration(a0, i0);
      append_hydration(i0, t3);
      append_hydration(a0, t4);
      append_hydration(a0, t5);
      append_hydration(a0, t6);
      append_hydration(div2, t7);
      append_hydration(div2, a1);
      append_hydration(a1, t8);
      append_hydration(div2, t9);
      append_hydration(div2, a2);
      append_hydration(a2, t10);
      append_hydration(div2, t11);
      append_hydration(div2, a3);
      append_hydration(a3, t12);
      append_hydration(div2, t13);
      append_hydration(div2, a4);
      append_hydration(a4, t14);
      append_hydration(div2, t15);
      append_hydration(div2, a5);
      append_hydration(a5, t16);
      append_hydration(div2, t17);
      append_hydration(div2, a6);
      append_hydration(a6, t18);
      append_hydration(div2, t19);
      append_hydration(div2, a7);
      append_hydration(a7, t20);
      append_hydration(div2, t21);
      append_hydration(div2, a8);
      append_hydration(a8, t22);
      append_hydration(a8, i1);
      append_hydration(i1, t23);
      append_hydration(div2, t24);
      append_hydration(div2, a9);
      append_hydration(a9, t25);
      append_hydration(div2, t26);
      append_hydration(div2, a10);
      append_hydration(a10, t27);
      append_hydration(div2, t28);
      append_hydration(div2, a11);
      append_hydration(a11, t29);
      append_hydration(div2, t30);
      append_hydration(div2, a12);
      append_hydration(a12, t31);
      append_hydration(div2, t32);
      append_hydration(div2, a13);
      append_hydration(a13, t33);
      append_hydration(div2, t34);
      append_hydration(div2, a14);
      append_hydration(a14, t35);
      append_hydration(div2, t36);
      append_hydration(div2, a15);
      append_hydration(a15, t37);
      append_hydration(div2, t38);
      append_hydration(div2, a16);
      append_hydration(a16, t39);
      append_hydration(div2, t40);
      append_hydration(div2, a17);
      append_hydration(a17, t41);
      append_hydration(div2, t42);
      append_hydration(div2, a18);
      append_hydration(a18, t43);
      append_hydration(div2, t44);
      append_hydration(div2, a19);
      append_hydration(a19, t45);
      append_hydration(div2, t46);
      append_hydration(div2, a20);
      append_hydration(a20, t47);
      append_hydration(div2, t48);
      append_hydration(div2, a21);
      append_hydration(a21, t49);
      append_hydration(div2, t50);
      append_hydration(div2, a22);
      append_hydration(a22, t51);
      append_hydration(div2, t52);
      if_block.m(div2, null);
      append_hydration(div4, t53);
      append_hydration(div4, div3);
      append_hydration(div3, t54);
      insert_hydration(target, t55, anchor);
      insert_hydration(target, div5, anchor);
      if (!mounted) {
        dispose = [
          listen(
            window,
            "keydown",
            /*keydown_handler*/
            ctx[10]
          ),
          listen(
            svg,
            "click",
            /*click_handler*/
            ctx[11]
          ),
          listen(
            svg,
            "keydown",
            /*keydown_handler_1*/
            ctx[12]
          ),
          listen(
            a0,
            "click",
            /*click_handler_1*/
            ctx[13]
          ),
          listen(
            a8,
            "click",
            /*click_handler_2*/
            ctx[14]
          ),
          listen(
            div5,
            "click",
            /*close*/
            ctx[7]
          ),
          listen(
            div5,
            "keydown",
            /*close*/
            ctx[7]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*open*/
      8 && svg_class_value !== (svg_class_value = null_to_empty(
        /*open*/
        ctx2[3] ? "open" : ""
      ) + " svelte-1onat8c")) {
        attr(svg, "class", svg_class_value);
      }
      if (dirty & /*dark*/
      1 && t3_value !== (t3_value = /*dark*/
      ctx2[0] ? "light_mode" : "dark_mode"))
        set_data(t3, t3_value);
      if (dirty & /*dark*/
      1 && t5_value !== (t5_value = /*dark*/
      ctx2[0] ? "Light" : "Dark"))
        set_data(t5, t5_value);
      if (dirty & /*info_open*/
      32 && t23_value !== (t23_value = /*info_open*/
      ctx2[5] ? "keyboard_arrow_down" : "chevron_right"))
        set_data(t23, t23_value);
      if (dirty & /*info_open*/
      32 && a9_class_value !== (a9_class_value = "t2 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a9, "class", a9_class_value);
      }
      if (dirty & /*info_open*/
      32 && a10_class_value !== (a10_class_value = "t2 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a10, "class", a10_class_value);
      }
      if (dirty & /*info_open*/
      32 && a11_class_value !== (a11_class_value = "t2 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a11, "class", a11_class_value);
      }
      if (dirty & /*info_open*/
      32 && a12_class_value !== (a12_class_value = "t3 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a12, "class", a12_class_value);
      }
      if (dirty & /*info_open*/
      32 && a13_class_value !== (a13_class_value = "t3 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a13, "class", a13_class_value);
      }
      if (dirty & /*info_open*/
      32 && a14_class_value !== (a14_class_value = "t3 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a14, "class", a14_class_value);
      }
      if (dirty & /*info_open*/
      32 && a15_class_value !== (a15_class_value = "t3 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a15, "class", a15_class_value);
      }
      if (dirty & /*info_open*/
      32 && a16_class_value !== (a16_class_value = "t2 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a16, "class", a16_class_value);
      }
      if (dirty & /*info_open*/
      32 && a17_class_value !== (a17_class_value = "t3 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a17, "class", a17_class_value);
      }
      if (dirty & /*info_open*/
      32 && a18_class_value !== (a18_class_value = "t3 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a18, "class", a18_class_value);
      }
      if (dirty & /*info_open*/
      32 && a19_class_value !== (a19_class_value = "t3 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a19, "class", a19_class_value);
      }
      if (dirty & /*info_open*/
      32 && a20_class_value !== (a20_class_value = "t3 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a20, "class", a20_class_value);
      }
      if (dirty & /*info_open*/
      32 && a21_class_value !== (a21_class_value = "t3 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a21, "class", a21_class_value);
      }
      if (dirty & /*info_open*/
      32 && a22_class_value !== (a22_class_value = "t2 " + /*info_open*/
      (ctx2[5] ? "" : "hidden") + " svelte-1onat8c")) {
        attr(a22, "class", a22_class_value);
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div2, null);
        }
      }
      if (dirty & /*open*/
      8 && div4_class_value !== (div4_class_value = null_to_empty(
        /*open*/
        ctx2[3] ? "open" : ""
      ) + " svelte-1onat8c")) {
        attr(div4, "class", div4_class_value);
      }
      if (dirty & /*open*/
      8 && div5_class_value !== (div5_class_value = null_to_empty(
        /*open*/
        ctx2[3] ? "open" : ""
      ) + " svelte-1onat8c")) {
        attr(div5, "class", div5_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div4);
      if_block.d();
      if (detaching)
        detach(t55);
      if (detaching)
        detach(div5);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { dark } = $$props;
  let { user } = $$props;
  let { api_user } = $$props;
  let open = false;
  let href;
  const close = () => $$invalidate(3, open = false);
  let doc = null;
  onMount(() => {
    document.querySelectorAll("#contents > a:not([href='javascript:void(0)'])").forEach((e) => e.onclick = () => setTimeout(close));
    page.subscribe((x) => ($$invalidate(8, href = x.url.href), document.querySelectorAll("#contents > a").forEach((e) => {
      e.style.backgroundColor = e.href === href ? "#00000022" : "";
    })));
    $$invalidate(9, doc = document);
  });
  let index = 0;
  let info_open = false;
  let staff_open = false;
  const keydown_handler = (e) => {
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault();
      $$invalidate(3, open = !open);
    } else if (e.key === "Escape")
      $$invalidate(3, open = false);
    else if (open && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
      e.preventDefault();
      const length = [...document.querySelectorAll("#contents > a:not(.hidden)")].length;
      if (e.key === "ArrowUp")
        $$invalidate(4, index = (index + length - 1) % length);
      else
        $$invalidate(4, index = (index + 1) % length);
    }
  };
  const click_handler = () => $$invalidate(3, open = !open);
  const keydown_handler_1 = () => $$invalidate(3, open = !open);
  const click_handler_1 = () => {
    $$invalidate(0, dark = !dark);
    document.cookie = `mode=${dark ? "dark" : "light"};max-age=31536000;samesite=none`;
  };
  const click_handler_2 = () => $$invalidate(5, info_open = !info_open);
  const click_handler_3 = () => $$invalidate(6, staff_open = !staff_open);
  $$self.$$set = ($$props2) => {
    if ("dark" in $$props2)
      $$invalidate(0, dark = $$props2.dark);
    if ("user" in $$props2)
      $$invalidate(1, user = $$props2.user);
    if ("api_user" in $$props2)
      $$invalidate(2, api_user = $$props2.api_user);
  };
  $$self.$$.update = () => {
    var _a, _b;
    if ($$self.$$.dirty & /*open, document, href*/
    264) {
      open && $$invalidate(4, index = [...document.querySelectorAll("#contents > a")].findIndex((e) => e.href === href));
    }
    if ($$self.$$.dirty & /*doc, index*/
    528) {
      (_b = (_a = doc == null ? void 0 : doc.querySelectorAll("#contents > a:not(.hidden)")) == null ? void 0 : _a[index]) == null ? void 0 : _b.focus();
    }
  };
  return [
    dark,
    user,
    api_user,
    open,
    index,
    info_open,
    staff_open,
    close,
    href,
    doc,
    keydown_handler,
    click_handler,
    keydown_handler_1,
    click_handler_1,
    click_handler_2,
    click_handler_3
  ];
}
class Menu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$2, safe_not_equal, { dark: 0, user: 1, api_user: 2 });
  }
}
const Navbar_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div2;
  let div0;
  let img;
  let img_src_value;
  let t0;
  let span;
  let t1;
  let t2;
  let div1;
  let a0;
  let t3;
  let t4;
  let a1;
  let t5;
  let t6;
  let a2;
  let t7;
  let t8;
  let a3;
  let t9;
  let t10;
  let a4;
  let t11;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      span = element("span");
      t1 = text("Teyvat Collective Network");
      t2 = space();
      div1 = element("div");
      a0 = element("a");
      t3 = text("Home");
      t4 = space();
      a1 = element("a");
      t5 = text("About");
      t6 = space();
      a2 = element("a");
      t7 = text("Partners");
      t8 = space();
      a3 = element("a");
      t9 = text("Calendar");
      t10 = space();
      a4 = element("a");
      t11 = text("Apply Now");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { id: true, class: true });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", { src: true, alt: true, width: true });
      t0 = claim_space(div0_nodes);
      span = claim_element(div0_nodes, "SPAN", { id: true, class: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "Teyvat Collective Network");
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "Home");
      a0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      a1 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "About");
      a1_nodes.forEach(detach);
      t6 = claim_space(div1_nodes);
      a2 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t7 = claim_text(a2_nodes, "Partners");
      a2_nodes.forEach(detach);
      t8 = claim_space(div1_nodes);
      a3 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      t9 = claim_text(a3_nodes, "Calendar");
      a3_nodes.forEach(detach);
      t10 = claim_space(div1_nodes);
      a4 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a4_nodes = children(a4);
      t11 = claim_text(a4_nodes, "Apply Now");
      a4_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = "/favicon.png"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Icon");
      attr(img, "width", "80px");
      attr(span, "id", "title");
      attr(span, "class", "svelte-jy9qb3");
      attr(div0, "id", "left");
      attr(div0, "class", "svelte-jy9qb3");
      attr(a0, "href", "/");
      attr(a0, "class", "svelte-jy9qb3");
      attr(a1, "href", "/about");
      attr(a1, "class", "svelte-jy9qb3");
      attr(a2, "href", "/partners");
      attr(a2, "class", "svelte-jy9qb3");
      attr(a3, "href", "/calendar");
      attr(a3, "class", "svelte-jy9qb3");
      attr(a4, "href", "/join");
      attr(a4, "class", "button svelte-jy9qb3");
      attr(div1, "id", "links");
      attr(div1, "class", "svelte-jy9qb3");
      attr(div2, "class", "container svelte-jy9qb3");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, img);
      append_hydration(div0, t0);
      append_hydration(div0, span);
      append_hydration(span, t1);
      append_hydration(div2, t2);
      append_hydration(div2, div1);
      append_hydration(div1, a0);
      append_hydration(a0, t3);
      append_hydration(div1, t4);
      append_hydration(div1, a1);
      append_hydration(a1, t5);
      append_hydration(div1, t6);
      append_hydration(div1, a2);
      append_hydration(a2, t7);
      append_hydration(div1, t8);
      append_hydration(div1, a3);
      append_hydration(a3, t9);
      append_hydration(div1, t10);
      append_hydration(div1, a4);
      append_hydration(a4, t11);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
    }
  };
}
class Navbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
const _layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let html;
  let head;
  let meta0;
  let t0;
  let meta1;
  let t1;
  let meta2;
  let t2;
  let meta3;
  let t3;
  let meta4;
  let t4;
  let meta5;
  let t5;
  let meta6;
  let t6;
  let meta7;
  let t7;
  let meta8;
  let t8;
  let meta9;
  let t9;
  let link0;
  let t10;
  let link1;
  let t11;
  let link2;
  let link2_href_value;
  let t12;
  let link3;
  let t13;
  let style;
  let t14;
  let t15;
  let title;
  let t16;
  let t17;
  let body;
  let menu;
  let updating_dark;
  let t18;
  let navbar;
  let t19;
  let div;
  let current;
  function menu_dark_binding(value) {
    ctx[3](value);
  }
  let menu_props = {
    user: (
      /*data*/
      ctx[0].user
    ),
    api_user: (
      /*data*/
      ctx[0].api_user
    )
  };
  if (
    /*data*/
    ctx[0].dark !== void 0
  ) {
    menu_props.dark = /*data*/
    ctx[0].dark;
  }
  menu = new Menu({ props: menu_props });
  binding_callbacks.push(() => bind(menu, "dark", menu_dark_binding));
  navbar = new Navbar({});
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  return {
    c() {
      html = element("html");
      head = element("head");
      meta0 = element("meta");
      t0 = space();
      meta1 = element("meta");
      t1 = space();
      meta2 = element("meta");
      t2 = space();
      meta3 = element("meta");
      t3 = space();
      meta4 = element("meta");
      t4 = space();
      meta5 = element("meta");
      t5 = space();
      meta6 = element("meta");
      t6 = space();
      meta7 = element("meta");
      t7 = space();
      meta8 = element("meta");
      t8 = space();
      meta9 = element("meta");
      t9 = space();
      link0 = element("link");
      t10 = space();
      link1 = element("link");
      t11 = space();
      link2 = element("link");
      t12 = space();
      link3 = element("link");
      t13 = space();
      style = element("style");
      t14 = text("@keyframes fade-from-left {\n  from {\n    opacity: 0%;\n    transform: translateX(-1vw);\n  }\n  to {\n    opacity: 100%;\n    transform: translateY(0);\n  }\n}\n#main > :nth-child(1) {\n  animation: fade-from-left 500ms 25ms backwards;\n}\n\n#main > :nth-child(2) {\n  animation: fade-from-left 500ms 50ms backwards;\n}\n\n#main > :nth-child(3) {\n  animation: fade-from-left 500ms 75ms backwards;\n}\n\n#main > :nth-child(4) {\n  animation: fade-from-left 500ms 100ms backwards;\n}\n\n#main > :nth-child(5) {\n  animation: fade-from-left 500ms 125ms backwards;\n}\n\n#main > :nth-child(6) {\n  animation: fade-from-left 500ms 150ms backwards;\n}\n\n#main > :nth-child(7) {\n  animation: fade-from-left 500ms 175ms backwards;\n}\n\n#main > :nth-child(8) {\n  animation: fade-from-left 500ms 200ms backwards;\n}\n\n#main > :nth-child(9) {\n  animation: fade-from-left 500ms 225ms backwards;\n}\n\n#main > :nth-child(10) {\n  animation: fade-from-left 500ms 250ms backwards;\n}\n\n#main > :nth-child(11) {\n  animation: fade-from-left 500ms 275ms backwards;\n}\n\n#main > :nth-child(12) {\n  animation: fade-from-left 500ms 300ms backwards;\n}\n\n#main > :nth-child(13) {\n  animation: fade-from-left 500ms 325ms backwards;\n}\n\n#main > :nth-child(14) {\n  animation: fade-from-left 500ms 350ms backwards;\n}\n\n#main > :nth-child(15) {\n  animation: fade-from-left 500ms 375ms backwards;\n}\n\n#main > :nth-child(16) {\n  animation: fade-from-left 500ms 400ms backwards;\n}\n\n#main > :nth-child(17) {\n  animation: fade-from-left 500ms 425ms backwards;\n}\n\n#main > :nth-child(18) {\n  animation: fade-from-left 500ms 450ms backwards;\n}\n\n#main > :nth-child(19) {\n  animation: fade-from-left 500ms 475ms backwards;\n}\n\n#main > :nth-child(20) {\n  animation: fade-from-left 500ms 500ms backwards;\n}\n\n#main > :nth-child(21) {\n  animation: fade-from-left 500ms 525ms backwards;\n}\n\n#main > :nth-child(22) {\n  animation: fade-from-left 500ms 550ms backwards;\n}\n\n#main > :nth-child(23) {\n  animation: fade-from-left 500ms 575ms backwards;\n}\n\n#main > :nth-child(24) {\n  animation: fade-from-left 500ms 600ms backwards;\n}\n\n#main > :nth-child(25) {\n  animation: fade-from-left 500ms 625ms backwards;\n}\n\n#main > :nth-child(26) {\n  animation: fade-from-left 500ms 650ms backwards;\n}\n\n#main > :nth-child(27) {\n  animation: fade-from-left 500ms 675ms backwards;\n}\n\n#main > :nth-child(28) {\n  animation: fade-from-left 500ms 700ms backwards;\n}\n\n#main > :nth-child(29) {\n  animation: fade-from-left 500ms 725ms backwards;\n}\n\n#main > :nth-child(30) {\n  animation: fade-from-left 500ms 750ms backwards;\n}\n\n#main > :nth-child(31) {\n  animation: fade-from-left 500ms 775ms backwards;\n}\n\n#main > :nth-child(32) {\n  animation: fade-from-left 500ms 800ms backwards;\n}\n\n#main > :nth-child(33) {\n  animation: fade-from-left 500ms 825ms backwards;\n}\n\n#main > :nth-child(34) {\n  animation: fade-from-left 500ms 850ms backwards;\n}\n\n#main > :nth-child(35) {\n  animation: fade-from-left 500ms 875ms backwards;\n}\n\n#main > :nth-child(36) {\n  animation: fade-from-left 500ms 900ms backwards;\n}\n\n#main > :nth-child(37) {\n  animation: fade-from-left 500ms 925ms backwards;\n}\n\n#main > :nth-child(38) {\n  animation: fade-from-left 500ms 950ms backwards;\n}\n\n#main > :nth-child(39) {\n  animation: fade-from-left 500ms 975ms backwards;\n}\n\n#main > :nth-child(40) {\n  animation: fade-from-left 500ms 1000ms backwards;\n}\n\n#main > :nth-child(41) {\n  animation: fade-from-left 500ms 1025ms backwards;\n}\n\n#main > :nth-child(42) {\n  animation: fade-from-left 500ms 1050ms backwards;\n}\n\n#main > :nth-child(43) {\n  animation: fade-from-left 500ms 1075ms backwards;\n}\n\n#main > :nth-child(44) {\n  animation: fade-from-left 500ms 1100ms backwards;\n}\n\n#main > :nth-child(45) {\n  animation: fade-from-left 500ms 1125ms backwards;\n}\n\n#main > :nth-child(46) {\n  animation: fade-from-left 500ms 1150ms backwards;\n}");
      t15 = space();
      title = element("title");
      t16 = text("TCN");
      t17 = space();
      body = element("body");
      create_component(menu.$$.fragment);
      t18 = space();
      create_component(navbar.$$.fragment);
      t19 = space();
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      html = claim_element(nodes, "HTML", { lang: true });
      var html_nodes = children(html);
      head = claim_element(html_nodes, "HEAD", {});
      var head_nodes = children(head);
      meta0 = claim_element(head_nodes, "META", { charset: true });
      t0 = claim_space(head_nodes);
      meta1 = claim_element(head_nodes, "META", { name: true, content: true });
      t1 = claim_space(head_nodes);
      meta2 = claim_element(head_nodes, "META", { name: true, content: true });
      t2 = claim_space(head_nodes);
      meta3 = claim_element(head_nodes, "META", { name: true, content: true });
      t3 = claim_space(head_nodes);
      meta4 = claim_element(head_nodes, "META", { name: true, content: true });
      t4 = claim_space(head_nodes);
      meta5 = claim_element(head_nodes, "META", { property: true, content: true });
      t5 = claim_space(head_nodes);
      meta6 = claim_element(head_nodes, "META", { property: true, content: true });
      t6 = claim_space(head_nodes);
      meta7 = claim_element(head_nodes, "META", { property: true, content: true });
      t7 = claim_space(head_nodes);
      meta8 = claim_element(head_nodes, "META", { property: true, content: true });
      t8 = claim_space(head_nodes);
      meta9 = claim_element(head_nodes, "META", {
        name: true,
        "data-react-helmet": true,
        content: true
      });
      t9 = claim_space(head_nodes);
      link0 = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
      t10 = claim_space(head_nodes);
      link1 = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
      t11 = claim_space(head_nodes);
      link2 = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
      t12 = claim_space(head_nodes);
      link3 = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
      t13 = claim_space(head_nodes);
      style = claim_element(head_nodes, "STYLE", { lang: true });
      var style_nodes = children(style);
      t14 = claim_text(style_nodes, "@keyframes fade-from-left {\n  from {\n    opacity: 0%;\n    transform: translateX(-1vw);\n  }\n  to {\n    opacity: 100%;\n    transform: translateY(0);\n  }\n}\n#main > :nth-child(1) {\n  animation: fade-from-left 500ms 25ms backwards;\n}\n\n#main > :nth-child(2) {\n  animation: fade-from-left 500ms 50ms backwards;\n}\n\n#main > :nth-child(3) {\n  animation: fade-from-left 500ms 75ms backwards;\n}\n\n#main > :nth-child(4) {\n  animation: fade-from-left 500ms 100ms backwards;\n}\n\n#main > :nth-child(5) {\n  animation: fade-from-left 500ms 125ms backwards;\n}\n\n#main > :nth-child(6) {\n  animation: fade-from-left 500ms 150ms backwards;\n}\n\n#main > :nth-child(7) {\n  animation: fade-from-left 500ms 175ms backwards;\n}\n\n#main > :nth-child(8) {\n  animation: fade-from-left 500ms 200ms backwards;\n}\n\n#main > :nth-child(9) {\n  animation: fade-from-left 500ms 225ms backwards;\n}\n\n#main > :nth-child(10) {\n  animation: fade-from-left 500ms 250ms backwards;\n}\n\n#main > :nth-child(11) {\n  animation: fade-from-left 500ms 275ms backwards;\n}\n\n#main > :nth-child(12) {\n  animation: fade-from-left 500ms 300ms backwards;\n}\n\n#main > :nth-child(13) {\n  animation: fade-from-left 500ms 325ms backwards;\n}\n\n#main > :nth-child(14) {\n  animation: fade-from-left 500ms 350ms backwards;\n}\n\n#main > :nth-child(15) {\n  animation: fade-from-left 500ms 375ms backwards;\n}\n\n#main > :nth-child(16) {\n  animation: fade-from-left 500ms 400ms backwards;\n}\n\n#main > :nth-child(17) {\n  animation: fade-from-left 500ms 425ms backwards;\n}\n\n#main > :nth-child(18) {\n  animation: fade-from-left 500ms 450ms backwards;\n}\n\n#main > :nth-child(19) {\n  animation: fade-from-left 500ms 475ms backwards;\n}\n\n#main > :nth-child(20) {\n  animation: fade-from-left 500ms 500ms backwards;\n}\n\n#main > :nth-child(21) {\n  animation: fade-from-left 500ms 525ms backwards;\n}\n\n#main > :nth-child(22) {\n  animation: fade-from-left 500ms 550ms backwards;\n}\n\n#main > :nth-child(23) {\n  animation: fade-from-left 500ms 575ms backwards;\n}\n\n#main > :nth-child(24) {\n  animation: fade-from-left 500ms 600ms backwards;\n}\n\n#main > :nth-child(25) {\n  animation: fade-from-left 500ms 625ms backwards;\n}\n\n#main > :nth-child(26) {\n  animation: fade-from-left 500ms 650ms backwards;\n}\n\n#main > :nth-child(27) {\n  animation: fade-from-left 500ms 675ms backwards;\n}\n\n#main > :nth-child(28) {\n  animation: fade-from-left 500ms 700ms backwards;\n}\n\n#main > :nth-child(29) {\n  animation: fade-from-left 500ms 725ms backwards;\n}\n\n#main > :nth-child(30) {\n  animation: fade-from-left 500ms 750ms backwards;\n}\n\n#main > :nth-child(31) {\n  animation: fade-from-left 500ms 775ms backwards;\n}\n\n#main > :nth-child(32) {\n  animation: fade-from-left 500ms 800ms backwards;\n}\n\n#main > :nth-child(33) {\n  animation: fade-from-left 500ms 825ms backwards;\n}\n\n#main > :nth-child(34) {\n  animation: fade-from-left 500ms 850ms backwards;\n}\n\n#main > :nth-child(35) {\n  animation: fade-from-left 500ms 875ms backwards;\n}\n\n#main > :nth-child(36) {\n  animation: fade-from-left 500ms 900ms backwards;\n}\n\n#main > :nth-child(37) {\n  animation: fade-from-left 500ms 925ms backwards;\n}\n\n#main > :nth-child(38) {\n  animation: fade-from-left 500ms 950ms backwards;\n}\n\n#main > :nth-child(39) {\n  animation: fade-from-left 500ms 975ms backwards;\n}\n\n#main > :nth-child(40) {\n  animation: fade-from-left 500ms 1000ms backwards;\n}\n\n#main > :nth-child(41) {\n  animation: fade-from-left 500ms 1025ms backwards;\n}\n\n#main > :nth-child(42) {\n  animation: fade-from-left 500ms 1050ms backwards;\n}\n\n#main > :nth-child(43) {\n  animation: fade-from-left 500ms 1075ms backwards;\n}\n\n#main > :nth-child(44) {\n  animation: fade-from-left 500ms 1100ms backwards;\n}\n\n#main > :nth-child(45) {\n  animation: fade-from-left 500ms 1125ms backwards;\n}\n\n#main > :nth-child(46) {\n  animation: fade-from-left 500ms 1150ms backwards;\n}");
      style_nodes.forEach(detach);
      t15 = claim_space(head_nodes);
      title = claim_element(head_nodes, "TITLE", {});
      var title_nodes = children(title);
      t16 = claim_text(title_nodes, "TCN");
      title_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t17 = claim_space(html_nodes);
      body = claim_element(html_nodes, "BODY", {});
      var body_nodes = children(body);
      claim_component(menu.$$.fragment, body_nodes);
      t18 = claim_space(body_nodes);
      claim_component(navbar.$$.fragment, body_nodes);
      t19 = claim_space(body_nodes);
      div = claim_element(body_nodes, "DIV", { id: true, class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      body_nodes.forEach(detach);
      html_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(meta0, "charset", "UTF-8");
      attr(meta1, "name", "description");
      attr(meta1, "content", "Teyvat Collective Network");
      attr(meta2, "name", "keywords");
      attr(meta2, "content", "teyvat, collective, network, tcn, genshin, impact");
      attr(meta3, "name", "author");
      attr(meta3, "content", "TCN Dev Team");
      attr(meta4, "name", "viewport");
      attr(meta4, "content", "width=device-width, initial-scale=1.0");
      attr(meta5, "property", "og:title");
      attr(meta5, "content", "Teyvat Collective Network");
      attr(meta6, "property", "og:description");
      attr(meta6, "content", "The Teyvat Collective Network is a network of high-quality Genshin Impact Discord servers, each dedicated to one character. Our mission is to unite mains servers across Teyvat, provide support, and promote collaboration.");
      attr(meta7, "property", "og:url");
      attr(meta7, "content", "https://info.teyvatcollective.network");
      attr(meta8, "property", "og:image");
      attr(meta8, "content", "https://info.teyvatcollective.network/favicon.png");
      attr(meta9, "name", "theme-color");
      attr(meta9, "data-react-helmet", "true");
      attr(meta9, "content", "#207868");
      attr(link0, "rel", "shortcut icon");
      attr(link0, "type", "image/png");
      attr(link0, "href", "/favicon.png");
      attr(link1, "rel", "stylesheet");
      attr(link1, "type", "text/css");
      attr(link1, "href", "https://fonts.googleapis.com/icon?family=Material+Icons");
      attr(link2, "rel", "stylesheet");
      attr(link2, "type", "text/css");
      attr(link2, "href", link2_href_value = "/styles/" + /*data*/
      (ctx[0].dark ? "dark" : "light") + ".css");
      attr(link3, "rel", "stylesheet");
      attr(link3, "type", "text/css");
      attr(link3, "href", "/styles/stylesheet.css");
      attr(style, "lang", "scss");
      attr(div, "id", "slot");
      attr(div, "class", "svelte-s87ey5");
      attr(html, "lang", "en");
    },
    m(target, anchor) {
      insert_hydration(target, html, anchor);
      append_hydration(html, head);
      append_hydration(head, meta0);
      append_hydration(head, t0);
      append_hydration(head, meta1);
      append_hydration(head, t1);
      append_hydration(head, meta2);
      append_hydration(head, t2);
      append_hydration(head, meta3);
      append_hydration(head, t3);
      append_hydration(head, meta4);
      append_hydration(head, t4);
      append_hydration(head, meta5);
      append_hydration(head, t5);
      append_hydration(head, meta6);
      append_hydration(head, t6);
      append_hydration(head, meta7);
      append_hydration(head, t7);
      append_hydration(head, meta8);
      append_hydration(head, t8);
      append_hydration(head, meta9);
      append_hydration(head, t9);
      append_hydration(head, link0);
      append_hydration(head, t10);
      append_hydration(head, link1);
      append_hydration(head, t11);
      append_hydration(head, link2);
      append_hydration(head, t12);
      append_hydration(head, link3);
      append_hydration(head, t13);
      append_hydration(head, style);
      append_hydration(style, t14);
      append_hydration(head, t15);
      append_hydration(head, title);
      append_hydration(title, t16);
      append_hydration(html, t17);
      append_hydration(html, body);
      mount_component(menu, body, null);
      append_hydration(body, t18);
      mount_component(navbar, body, null);
      append_hydration(body, t19);
      append_hydration(body, div);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*data*/
      1 && link2_href_value !== (link2_href_value = "/styles/" + /*data*/
      (ctx2[0].dark ? "dark" : "light") + ".css")) {
        attr(link2, "href", link2_href_value);
      }
      const menu_changes = {};
      if (dirty & /*data*/
      1)
        menu_changes.user = /*data*/
        ctx2[0].user;
      if (dirty & /*data*/
      1)
        menu_changes.api_user = /*data*/
        ctx2[0].api_user;
      if (!updating_dark && dirty & /*data*/
      1) {
        updating_dark = true;
        menu_changes.dark = /*data*/
        ctx2[0].dark;
        add_flush_callback(() => updating_dark = false);
      }
      menu.$set(menu_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(menu.$$.fragment, local);
      transition_in(navbar.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(menu.$$.fragment, local);
      transition_out(navbar.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(html);
      destroy_component(menu);
      destroy_component(navbar);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { data } = $$props;
  function menu_dark_binding(value) {
    if ($$self.$$.not_equal(data.dark, value)) {
      data.dark = value;
      $$invalidate(0, data);
    }
  }
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [data, $$scope, slots, menu_dark_binding];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0 });
  }
}
export {
  Layout as default
};
