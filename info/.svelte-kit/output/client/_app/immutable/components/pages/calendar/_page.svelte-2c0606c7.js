import { S as SvelteComponent, i as init, s as safe_not_equal, v as binding_callbacks, K as bind, k as element, q as text, x as create_component, l as claim_element, m as children, r as claim_text, h as detach, y as claim_component, n as attr, p as set_style, b as insert_hydration, G as append_hydration, z as mount_component, H as listen, M as add_flush_callback, f as transition_in, t as transition_out, a2 as destroy_each, A as destroy_component, I as run_all, C as noop } from "../../../chunks/index-c4baf36c.js";
import { I as Invite } from "../../../chunks/Invite-6ce98080.js";
import { M as Modal } from "../../../chunks/index-1e14ffe7.js";
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[16] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let div;
  let span0;
  let t0;
  let span1;
  let t1;
  return {
    c() {
      div = element("div");
      span0 = element("span");
      t0 = text("Fr");
      span1 = element("span");
      t1 = text("32");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      span0 = claim_element(div_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, "Fr");
      span0_nodes.forEach(detach);
      span1 = claim_element(div_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t1 = claim_text(span1_nodes, "32");
      span1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "plain less svelte-j4whj9");
      attr(span1, "class", "plain more svelte-j4whj9");
      attr(div, "class", "vline dateline svelte-j4whj9");
      set_style(div, "left", 17 + 55 * /*i*/
      ctx[16] + "px");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, span0);
      append_hydration(span0, t0);
      append_hydration(div, span1);
      append_hydration(span1, t1);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_default_slot_5(ctx) {
  let t;
  let br0;
  let br1;
  let invite;
  let current;
  invite = new Invite({
    props: {
      banner: "https://images-ext-1.discordapp.net/external/xqHth8CbuCxM777Lk3o4LEdoBibPs8LxK_pgoEft7Dk/%3Fsize%3D4096/https/cdn.discordapp.com/banners/992162190163451984/d4dec85d82d6ca967010ab40b2b5f410.webp?width=2296&height=1292",
      icon: "https://images-ext-2.discordapp.net/external/EBcjXzaIpsSJSShcrWY5HxBVmHomDD3zHkcq64gv_aQ/%3Fsize%3D256/https/cdn.discordapp.com/icons/992162190163451984/3dfabe30687e32e8b05af0a7bf0f4b8c.webp",
      title: "Dehya Mains",
      code: "dehya"
    }
  });
  return {
    c() {
      t = text("Join Dehya Mains to participate in our latest art event!");
      br0 = element("br");
      br1 = element("br");
      create_component(invite.$$.fragment);
      this.h();
    },
    l(nodes) {
      t = claim_text(nodes, "Join Dehya Mains to participate in our latest art event!");
      br0 = claim_element(nodes, "BR", { class: true });
      br1 = claim_element(nodes, "BR", { class: true });
      claim_component(invite.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(br0, "class", "svelte-j4whj9");
      attr(br1, "class", "svelte-j4whj9");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
      insert_hydration(target, br0, anchor);
      insert_hydration(target, br1, anchor);
      mount_component(invite, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(invite.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(invite.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t);
      if (detaching)
        detach(br0);
      if (detaching)
        detach(br1);
      destroy_component(invite, detaching);
    }
  };
}
function create_default_slot_4(ctx) {
  let t;
  return {
    c() {
      t = text("Alhaitham & Xiao!");
    },
    l(nodes) {
      t = claim_text(nodes, "Alhaitham & Xiao!");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_3(ctx) {
  let t;
  return {
    c() {
      t = text("Hu Tao & Yelan!");
    },
    l(nodes) {
      t = claim_text(nodes, "Hu Tao & Yelan!");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_2(ctx) {
  let t;
  return {
    c() {
      t = text("Spiral abyss.");
    },
    l(nodes) {
      t = claim_text(nodes, "Spiral abyss.");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text("Spiral abyss.");
    },
    l(nodes) {
      t = claim_text(nodes, "Spiral abyss.");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("Wave 19 Election.");
    },
    l(nodes) {
      t = claim_text(nodes, "Wave 19 Election.");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment(ctx) {
  let div14;
  let div13;
  let h3;
  let t0;
  let div12;
  let div11;
  let div1;
  let button0;
  let div0;
  let t1;
  let div4;
  let button1;
  let div2;
  let t2;
  let button2;
  let div3;
  let t3;
  let div7;
  let button3;
  let div5;
  let t4;
  let button4;
  let div6;
  let t5;
  let div9;
  let button5;
  let div8;
  let t6;
  let div10;
  let span;
  let t7;
  let modal0;
  let updating_open;
  let modal1;
  let updating_open_1;
  let modal2;
  let updating_open_2;
  let modal3;
  let updating_open_3;
  let modal4;
  let updating_open_4;
  let modal5;
  let updating_open_5;
  let current;
  let mounted;
  let dispose;
  let each_value = [...new Array(101).keys()];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  function modal0_open_binding(value) {
    ctx[10](value);
  }
  let modal0_props = {
    background_color: "var(--background-1)",
    overlay_color: "rgb(var(--pure-rgb), 80%)",
    $$slots: { default: [create_default_slot_5] },
    $$scope: { ctx }
  };
  if (
    /*open*/
    ctx[0]["saccharine-confections"] !== void 0
  ) {
    modal0_props.open = /*open*/
    ctx[0]["saccharine-confections"];
  }
  modal0 = new Modal({ props: modal0_props });
  binding_callbacks.push(() => bind(modal0, "open", modal0_open_binding));
  function modal1_open_binding(value) {
    ctx[11](value);
  }
  let modal1_props = {
    background_color: "var(--background-1)",
    overlay_color: "rgb(var(--pure-rgb), 80%)",
    $$slots: { default: [create_default_slot_4] },
    $$scope: { ctx }
  };
  if (
    /*open*/
    ctx[0]["event-banner-1"] !== void 0
  ) {
    modal1_props.open = /*open*/
    ctx[0]["event-banner-1"];
  }
  modal1 = new Modal({ props: modal1_props });
  binding_callbacks.push(() => bind(modal1, "open", modal1_open_binding));
  function modal2_open_binding(value) {
    ctx[12](value);
  }
  let modal2_props = {
    background_color: "var(--background-1)",
    overlay_color: "rgb(var(--pure-rgb), 80%)",
    $$slots: { default: [create_default_slot_3] },
    $$scope: { ctx }
  };
  if (
    /*open*/
    ctx[0]["event-banner-2"] !== void 0
  ) {
    modal2_props.open = /*open*/
    ctx[0]["event-banner-2"];
  }
  modal2 = new Modal({ props: modal2_props });
  binding_callbacks.push(() => bind(modal2, "open", modal2_open_binding));
  function modal3_open_binding(value) {
    ctx[13](value);
  }
  let modal3_props = {
    background_color: "var(--background-1)",
    overlay_color: "rgb(var(--pure-rgb), 80%)",
    $$slots: { default: [create_default_slot_2] },
    $$scope: { ctx }
  };
  if (
    /*open*/
    ctx[0]["spiral-abyss-1"] !== void 0
  ) {
    modal3_props.open = /*open*/
    ctx[0]["spiral-abyss-1"];
  }
  modal3 = new Modal({ props: modal3_props });
  binding_callbacks.push(() => bind(modal3, "open", modal3_open_binding));
  function modal4_open_binding(value) {
    ctx[14](value);
  }
  let modal4_props = {
    background_color: "var(--background-1)",
    overlay_color: "rgb(var(--pure-rgb), 80%)",
    $$slots: { default: [create_default_slot_1] },
    $$scope: { ctx }
  };
  if (
    /*open*/
    ctx[0]["spiral-abyss-2"] !== void 0
  ) {
    modal4_props.open = /*open*/
    ctx[0]["spiral-abyss-2"];
  }
  modal4 = new Modal({ props: modal4_props });
  binding_callbacks.push(() => bind(modal4, "open", modal4_open_binding));
  function modal5_open_binding(value) {
    ctx[15](value);
  }
  let modal5_props = {
    background_color: "var(--background-1)",
    overlay_color: "rgb(var(--pure-rgb), 80%)",
    $$slots: { default: [create_default_slot] },
    $$scope: { ctx }
  };
  if (
    /*open*/
    ctx[0]["election-19"] !== void 0
  ) {
    modal5_props.open = /*open*/
    ctx[0]["election-19"];
  }
  modal5 = new Modal({ props: modal5_props });
  binding_callbacks.push(() => bind(modal5, "open", modal5_open_binding));
  return {
    c() {
      div14 = element("div");
      div13 = element("div");
      h3 = element("h3");
      t0 = text("Events & Other Dates");
      div12 = element("div");
      div11 = element("div");
      div1 = element("div");
      button0 = element("button");
      div0 = element("div");
      t1 = text("Saccharine Confections");
      div4 = element("div");
      button1 = element("button");
      div2 = element("div");
      t2 = text("Event Banner");
      button2 = element("button");
      div3 = element("div");
      t3 = text("Event Banner");
      div7 = element("div");
      button3 = element("button");
      div5 = element("div");
      t4 = text("Spiral Abyss");
      button4 = element("button");
      div6 = element("div");
      t5 = text("Spiral Abyss");
      div9 = element("div");
      button5 = element("button");
      div8 = element("div");
      t6 = text("Wave 19 Election");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      div10 = element("div");
      span = element("span");
      t7 = text("1:23:45");
      create_component(modal0.$$.fragment);
      create_component(modal1.$$.fragment);
      create_component(modal2.$$.fragment);
      create_component(modal3.$$.fragment);
      create_component(modal4.$$.fragment);
      create_component(modal5.$$.fragment);
      this.h();
    },
    l(nodes) {
      div14 = claim_element(nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      div13 = claim_element(div14_nodes, "DIV", { id: true, class: true });
      var div13_nodes = children(div13);
      h3 = claim_element(div13_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, "Events & Other Dates");
      h3_nodes.forEach(detach);
      div12 = claim_element(div13_nodes, "DIV", { id: true, class: true });
      var div12_nodes = children(div12);
      div11 = claim_element(div12_nodes, "DIV", { id: true, class: true });
      var div11_nodes = children(div11);
      div1 = claim_element(div11_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button0 = claim_element(div1_nodes, "BUTTON", { class: true, style: true });
      var button0_nodes = children(button0);
      div0 = claim_element(button0_nodes, "DIV", { style: true, class: true });
      var div0_nodes = children(div0);
      t1 = claim_text(div0_nodes, "Saccharine Confections");
      div0_nodes.forEach(detach);
      button0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div4 = claim_element(div11_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      button1 = claim_element(div4_nodes, "BUTTON", { class: true, style: true });
      var button1_nodes = children(button1);
      div2 = claim_element(button1_nodes, "DIV", { style: true, class: true });
      var div2_nodes = children(div2);
      t2 = claim_text(div2_nodes, "Event Banner");
      div2_nodes.forEach(detach);
      button1_nodes.forEach(detach);
      button2 = claim_element(div4_nodes, "BUTTON", { class: true, style: true });
      var button2_nodes = children(button2);
      div3 = claim_element(button2_nodes, "DIV", { style: true, class: true });
      var div3_nodes = children(div3);
      t3 = claim_text(div3_nodes, "Event Banner");
      div3_nodes.forEach(detach);
      button2_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div7 = claim_element(div11_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      button3 = claim_element(div7_nodes, "BUTTON", { class: true, style: true });
      var button3_nodes = children(button3);
      div5 = claim_element(button3_nodes, "DIV", { style: true, class: true });
      var div5_nodes = children(div5);
      t4 = claim_text(div5_nodes, "Spiral Abyss");
      div5_nodes.forEach(detach);
      button3_nodes.forEach(detach);
      button4 = claim_element(div7_nodes, "BUTTON", { class: true, style: true });
      var button4_nodes = children(button4);
      div6 = claim_element(button4_nodes, "DIV", { style: true, class: true });
      var div6_nodes = children(div6);
      t5 = claim_text(div6_nodes, "Spiral Abyss");
      div6_nodes.forEach(detach);
      button4_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      div9 = claim_element(div11_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      button5 = claim_element(div9_nodes, "BUTTON", { class: true, style: true });
      var button5_nodes = children(button5);
      div8 = claim_element(button5_nodes, "DIV", { style: true, class: true });
      var div8_nodes = children(div8);
      t6 = claim_text(div8_nodes, "Wave 19 Election");
      div8_nodes.forEach(detach);
      button5_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div11_nodes);
      }
      div10 = claim_element(div11_nodes, "DIV", { class: true, style: true });
      var div10_nodes = children(div10);
      span = claim_element(div10_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t7 = claim_text(span_nodes, "1:23:45");
      span_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      div12_nodes.forEach(detach);
      div13_nodes.forEach(detach);
      div14_nodes.forEach(detach);
      claim_component(modal0.$$.fragment, nodes);
      claim_component(modal1.$$.fragment, nodes);
      claim_component(modal2.$$.fragment, nodes);
      claim_component(modal3.$$.fragment, nodes);
      claim_component(modal4.$$.fragment, nodes);
      claim_component(modal5.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(h3, "class", "svelte-j4whj9");
      set_style(div0, "padding-left", "calc(" + /*sx*/
      ctx[1] + "px - 240px)");
      attr(div0, "class", "svelte-j4whj9");
      attr(button0, "class", "unset event svelte-j4whj9");
      set_style(button0, "left", "220px");
      set_style(button0, "width", "150px");
      set_style(button0, "background-color", "#456");
      set_style(button0, "--hover-background", "#567");
      attr(div1, "class", "track svelte-j4whj9");
      set_style(div2, "padding-left", "calc(" + /*sx*/
      ctx[1] + "px - 130px)");
      attr(div2, "class", "svelte-j4whj9");
      attr(button1, "class", "unset event svelte-j4whj9");
      set_style(button1, "left", "110px");
      set_style(button1, "width", "1085px");
      set_style(button1, "background-color", "#111");
      set_style(button1, "--hover-background", "#123");
      set_style(div3, "padding-left", "calc(" + /*sx*/
      ctx[1] + "px - 1230px)");
      attr(div3, "class", "svelte-j4whj9");
      attr(button2, "class", "unset event svelte-j4whj9");
      set_style(button2, "left", "1210px");
      set_style(button2, "width", "1085px");
      set_style(button2, "background-color", "#111");
      set_style(button2, "--hover-background", "#123");
      attr(div4, "class", "track svelte-j4whj9");
      set_style(div5, "padding-left", "calc(" + /*sx*/
      ctx[1] + "px - 130px)");
      attr(div5, "class", "svelte-j4whj9");
      attr(button3, "class", "unset event svelte-j4whj9");
      set_style(button3, "left", "110px");
      set_style(button3, "width", "1030px");
      set_style(button3, "background-color", "#444");
      set_style(button3, "--hover-background", "#555");
      set_style(div6, "padding-left", "calc(" + /*sx*/
      ctx[1] + "px - 1230px)");
      attr(div6, "class", "svelte-j4whj9");
      attr(button4, "class", "unset event svelte-j4whj9");
      set_style(button4, "left", "1210px");
      set_style(button4, "width", "1030px");
      set_style(button4, "background-color", "#444");
      set_style(button4, "--hover-background", "#555");
      attr(div7, "class", "track svelte-j4whj9");
      set_style(div8, "padding-left", "calc(" + /*sx*/
      ctx[1] + "px - 295px)");
      attr(div8, "class", "svelte-j4whj9");
      attr(button5, "class", "unset event svelte-j4whj9");
      set_style(button5, "left", "275px");
      set_style(button5, "width", "535px");
      set_style(button5, "background-color", "#534");
      set_style(button5, "--hover-background", "#645");
      attr(div9, "class", "track svelte-j4whj9");
      attr(span, "class", "plain current svelte-j4whj9");
      attr(div10, "class", "vline timeline svelte-j4whj9");
      set_style(div10, "left", 100 + /*x*/
      ctx[2] + "px");
      attr(div11, "id", "calendar");
      attr(div11, "class", "svelte-j4whj9");
      attr(div12, "id", "calendar-box");
      attr(div12, "class", "svelte-j4whj9");
      attr(div13, "id", "main");
      attr(div13, "class", "svelte-j4whj9");
      attr(div14, "class", "container svelte-j4whj9");
    },
    m(target, anchor) {
      insert_hydration(target, div14, anchor);
      append_hydration(div14, div13);
      append_hydration(div13, h3);
      append_hydration(h3, t0);
      append_hydration(div13, div12);
      append_hydration(div12, div11);
      append_hydration(div11, div1);
      append_hydration(div1, button0);
      append_hydration(button0, div0);
      append_hydration(div0, t1);
      append_hydration(div11, div4);
      append_hydration(div4, button1);
      append_hydration(button1, div2);
      append_hydration(div2, t2);
      append_hydration(div4, button2);
      append_hydration(button2, div3);
      append_hydration(div3, t3);
      append_hydration(div11, div7);
      append_hydration(div7, button3);
      append_hydration(button3, div5);
      append_hydration(div5, t4);
      append_hydration(div7, button4);
      append_hydration(button4, div6);
      append_hydration(div6, t5);
      append_hydration(div11, div9);
      append_hydration(div9, button5);
      append_hydration(button5, div8);
      append_hydration(div8, t6);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div11, null);
      }
      append_hydration(div11, div10);
      append_hydration(div10, span);
      append_hydration(span, t7);
      mount_component(modal0, target, anchor);
      mount_component(modal1, target, anchor);
      mount_component(modal2, target, anchor);
      mount_component(modal3, target, anchor);
      mount_component(modal4, target, anchor);
      mount_component(modal5, target, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*click_handler*/
            ctx[3]
          ),
          listen(
            button1,
            "click",
            /*click_handler_1*/
            ctx[4]
          ),
          listen(
            button2,
            "click",
            /*click_handler_2*/
            ctx[5]
          ),
          listen(
            button3,
            "click",
            /*click_handler_3*/
            ctx[6]
          ),
          listen(
            button4,
            "click",
            /*click_handler_4*/
            ctx[7]
          ),
          listen(
            button5,
            "click",
            /*click_handler_5*/
            ctx[8]
          ),
          listen(
            div12,
            "scroll",
            /*scroll_handler*/
            ctx[9]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*sx*/
      2) {
        set_style(div0, "padding-left", "calc(" + /*sx*/
        ctx2[1] + "px - 240px)");
      }
      if (!current || dirty & /*sx*/
      2) {
        set_style(div2, "padding-left", "calc(" + /*sx*/
        ctx2[1] + "px - 130px)");
      }
      if (!current || dirty & /*sx*/
      2) {
        set_style(div3, "padding-left", "calc(" + /*sx*/
        ctx2[1] + "px - 1230px)");
      }
      if (!current || dirty & /*sx*/
      2) {
        set_style(div5, "padding-left", "calc(" + /*sx*/
        ctx2[1] + "px - 130px)");
      }
      if (!current || dirty & /*sx*/
      2) {
        set_style(div6, "padding-left", "calc(" + /*sx*/
        ctx2[1] + "px - 1230px)");
      }
      if (!current || dirty & /*sx*/
      2) {
        set_style(div8, "padding-left", "calc(" + /*sx*/
        ctx2[1] + "px - 295px)");
      }
      if (dirty & /*Array*/
      0) {
        each_value = [...new Array(101).keys()];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div11, div10);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (!current || dirty & /*x*/
      4) {
        set_style(div10, "left", 100 + /*x*/
        ctx2[2] + "px");
      }
      const modal0_changes = {};
      if (dirty & /*$$scope*/
      524288) {
        modal0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty & /*open*/
      1) {
        updating_open = true;
        modal0_changes.open = /*open*/
        ctx2[0]["saccharine-confections"];
        add_flush_callback(() => updating_open = false);
      }
      modal0.$set(modal0_changes);
      const modal1_changes = {};
      if (dirty & /*$$scope*/
      524288) {
        modal1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open_1 && dirty & /*open*/
      1) {
        updating_open_1 = true;
        modal1_changes.open = /*open*/
        ctx2[0]["event-banner-1"];
        add_flush_callback(() => updating_open_1 = false);
      }
      modal1.$set(modal1_changes);
      const modal2_changes = {};
      if (dirty & /*$$scope*/
      524288) {
        modal2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open_2 && dirty & /*open*/
      1) {
        updating_open_2 = true;
        modal2_changes.open = /*open*/
        ctx2[0]["event-banner-2"];
        add_flush_callback(() => updating_open_2 = false);
      }
      modal2.$set(modal2_changes);
      const modal3_changes = {};
      if (dirty & /*$$scope*/
      524288) {
        modal3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open_3 && dirty & /*open*/
      1) {
        updating_open_3 = true;
        modal3_changes.open = /*open*/
        ctx2[0]["spiral-abyss-1"];
        add_flush_callback(() => updating_open_3 = false);
      }
      modal3.$set(modal3_changes);
      const modal4_changes = {};
      if (dirty & /*$$scope*/
      524288) {
        modal4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open_4 && dirty & /*open*/
      1) {
        updating_open_4 = true;
        modal4_changes.open = /*open*/
        ctx2[0]["spiral-abyss-2"];
        add_flush_callback(() => updating_open_4 = false);
      }
      modal4.$set(modal4_changes);
      const modal5_changes = {};
      if (dirty & /*$$scope*/
      524288) {
        modal5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open_5 && dirty & /*open*/
      1) {
        updating_open_5 = true;
        modal5_changes.open = /*open*/
        ctx2[0]["election-19"];
        add_flush_callback(() => updating_open_5 = false);
      }
      modal5.$set(modal5_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal0.$$.fragment, local);
      transition_in(modal1.$$.fragment, local);
      transition_in(modal2.$$.fragment, local);
      transition_in(modal3.$$.fragment, local);
      transition_in(modal4.$$.fragment, local);
      transition_in(modal5.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal0.$$.fragment, local);
      transition_out(modal1.$$.fragment, local);
      transition_out(modal2.$$.fragment, local);
      transition_out(modal3.$$.fragment, local);
      transition_out(modal4.$$.fragment, local);
      transition_out(modal5.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div14);
      destroy_each(each_blocks, detaching);
      destroy_component(modal0, detaching);
      destroy_component(modal1, detaching);
      destroy_component(modal2, detaching);
      destroy_component(modal3, detaching);
      destroy_component(modal4, detaching);
      destroy_component(modal5, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  const open = {};
  let sx = 0;
  let x = 100;
  setInterval(() => $$invalidate(2, x += 0.02), 10);
  const click_handler = () => $$invalidate(0, open["saccharine-confections"] = true, open);
  const click_handler_1 = () => $$invalidate(0, open["event-banner-1"] = true, open);
  const click_handler_2 = () => $$invalidate(0, open["event-banner-2"] = true, open);
  const click_handler_3 = () => $$invalidate(0, open["spiral-abyss-1"] = true, open);
  const click_handler_4 = () => $$invalidate(0, open["spiral-abyss-2"] = true, open);
  const click_handler_5 = () => $$invalidate(0, open["election-19"] = true, open);
  const scroll_handler = (e) => $$invalidate(1, sx = e.target.scrollLeft);
  function modal0_open_binding(value) {
    if ($$self.$$.not_equal(open["saccharine-confections"], value)) {
      open["saccharine-confections"] = value;
      $$invalidate(0, open);
    }
  }
  function modal1_open_binding(value) {
    if ($$self.$$.not_equal(open["event-banner-1"], value)) {
      open["event-banner-1"] = value;
      $$invalidate(0, open);
    }
  }
  function modal2_open_binding(value) {
    if ($$self.$$.not_equal(open["event-banner-2"], value)) {
      open["event-banner-2"] = value;
      $$invalidate(0, open);
    }
  }
  function modal3_open_binding(value) {
    if ($$self.$$.not_equal(open["spiral-abyss-1"], value)) {
      open["spiral-abyss-1"] = value;
      $$invalidate(0, open);
    }
  }
  function modal4_open_binding(value) {
    if ($$self.$$.not_equal(open["spiral-abyss-2"], value)) {
      open["spiral-abyss-2"] = value;
      $$invalidate(0, open);
    }
  }
  function modal5_open_binding(value) {
    if ($$self.$$.not_equal(open["election-19"], value)) {
      open["election-19"] = value;
      $$invalidate(0, open);
    }
  }
  return [
    open,
    sx,
    x,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4,
    click_handler_5,
    scroll_handler,
    modal0_open_binding,
    modal1_open_binding,
    modal2_open_binding,
    modal3_open_binding,
    modal4_open_binding,
    modal5_open_binding
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
