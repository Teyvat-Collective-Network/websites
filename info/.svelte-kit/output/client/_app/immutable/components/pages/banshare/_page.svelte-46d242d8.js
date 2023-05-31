import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, n as attr, b as insert_hydration, C as noop, h as detach, $ as add_render_callback, v as binding_callbacks, K as bind, e as empty, x as create_component, y as claim_component, z as mount_component, H as listen, t as transition_out, d as check_outros, f as transition_in, M as add_flush_callback, A as destroy_component, I as run_all, o as onMount, g as group_outros, a1 as escape, q as text, m as children, r as claim_text, G as append_hydration, p as set_style, W as set_input_value, a2 as destroy_each, u as set_data } from "../../../chunks/index-c4baf36c.js";
import { P as PUBLIC_TCN_AUTH, b as PUBLIC_TCN_API } from "../../../chunks/public-962e99ca.js";
import { M as Modal, T as Textarea, L as LoadingSpinner } from "../../../chunks/index-1e14ffe7.js";
import { C as Callout } from "../../../chunks/Callout-2d6b8933.js";
import { L as LoggedInAs } from "../../../chunks/LoggedInAs-8fa87d23.js";
function create_fragment$1(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { "http-equiv": true, content: true });
      this.h();
    },
    h() {
      attr(meta, "http-equiv", "refresh");
      attr(meta, "content", meta_content_value = "0;URL=" + /*to*/
      ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*to*/
      1 && meta_content_value !== (meta_content_value = "0;URL=" + /*to*/
      ctx2[0])) {
        attr(meta, "content", meta_content_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { to = PUBLIC_TCN_AUTH } = $$props;
  $$self.$$set = ($$props2) => {
    if ("to" in $$props2)
      $$invalidate(0, to = $$props2.to);
  };
  return [to];
}
class Redirect extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { to: 0 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[16] = list[i][0];
  child_ctx[17] = list[i][1];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[20] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[17] = list[i][0];
  child_ctx[23] = list[i][1];
  return child_ctx;
}
function create_else_block_1(ctx) {
  let div1;
  let div0;
  let h2;
  let t;
  let loggedinas;
  let current_block_type_index;
  let if_block;
  let current;
  loggedinas = new LoggedInAs({ props: { user: (
    /*data*/
    ctx[0].user
  ) } });
  const if_block_creators = [create_if_block_3, create_else_block_2];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    var _a;
    if (
      /*servers*/
      ((_a = ctx2[2]) == null ? void 0 : _a.length) === 0
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t = text("Banshare Form");
      create_component(loggedinas.$$.fragment);
      if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { id: true });
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {});
      var h2_nodes = children(h2);
      t = claim_text(h2_nodes, "Banshare Form");
      h2_nodes.forEach(detach);
      claim_component(loggedinas.$$.fragment, div0_nodes);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "id", "main");
      attr(div1, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, h2);
      append_hydration(h2, t);
      mount_component(loggedinas, div0, null);
      if_blocks[current_block_type_index].m(div0, null);
      current = true;
    },
    p(ctx2, dirty) {
      const loggedinas_changes = {};
      if (dirty & /*data*/
      1)
        loggedinas_changes.user = /*data*/
        ctx2[0].user;
      loggedinas.$set(loggedinas_changes);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div0, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(loggedinas.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(loggedinas.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(loggedinas);
      if_blocks[current_block_type_index].d();
    }
  };
}
function create_if_block_2(ctx) {
  let redirect;
  let current;
  redirect = new Redirect({});
  return {
    c() {
      create_component(redirect.$$.fragment);
    },
    l(nodes) {
      claim_component(redirect.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(redirect, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(redirect.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(redirect.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(redirect, detaching);
    }
  };
}
function create_else_block_2(ctx) {
  var _a, _b;
  let current_block_type_index;
  let if_block0;
  let form_1;
  let div0;
  let h40;
  let t0;
  let input0;
  let show_if = (
    /*ids*/
    ctx[3].trim() !== ""
  );
  let h41;
  let t1;
  let p0;
  let t2;
  let textarea0;
  let h42;
  let t3;
  let p1;
  let t4;
  let p2;
  let t5;
  let p3;
  let t6;
  let textarea1;
  let div1;
  let h43;
  let t7;
  let p4;
  let t8;
  let current_block_type_index_1;
  let if_block2;
  let div2;
  let h44;
  let t9;
  let p5;
  let t10;
  let ul;
  let li0;
  let b0;
  let t11;
  let t12;
  let li1;
  let b1;
  let t13;
  let t14;
  let li2;
  let b2;
  let t15;
  let t16;
  let select;
  let option;
  let t17;
  let div3;
  let h45;
  let t18;
  let p6;
  let t19;
  let label;
  let input1;
  let input1_checked_value;
  let b3;
  let t20;
  let div4;
  let input2;
  let input3;
  let input4;
  let br;
  let p7;
  let b4;
  let t21;
  let t22;
  let p8;
  let b5;
  let t23;
  let t24;
  let bot;
  let t25;
  let p9;
  let t26;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_6, create_if_block_7];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    var _a2, _b2;
    if (
      /*form*/
      (_a2 = ctx2[1]) == null ? void 0 : _a2.error
    )
      return 0;
    if (
      /*form*/
      (_b2 = ctx2[1]) == null ? void 0 : _b2.success
    )
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type_2(ctx))) {
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  let if_block1 = show_if && create_if_block_5(ctx);
  textarea0 = new Textarea({
    props: {
      name: "reason",
      placeholder: "Tip: make the reason something suitable for an audit log reason for the ban. Include context in the next field.",
      maxlength: "498",
      required: true,
      autocomplete: "off",
      value: (
        /*form*/
        (_a = ctx[1]) == null ? void 0 : _a.reason
      )
    }
  });
  textarea1 = new Textarea({
    props: {
      name: "evidence",
      placeholder: "Provide sufficient evidence to verify your reason and for other mods to make an informed decision.",
      required: true,
      maxlength: "1200",
      autocomplete: "off",
      value: (
        /*form*/
        (_b = ctx[1]) == null ? void 0 : _b.evidence
      )
    }
  });
  const if_block_creators_1 = [create_if_block_4, create_else_block_3];
  const if_blocks_1 = [];
  function select_block_type_3(ctx2, dirty) {
    if (!/*servers*/
    ctx2[2])
      return 0;
    return 1;
  }
  current_block_type_index_1 = select_block_type_3(ctx);
  if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
  let each_value_1 = ["P0", "P1", "P2"];
  let each_blocks = [];
  for (let i = 0; i < 3; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  return {
    c() {
      if (if_block0)
        if_block0.c();
      form_1 = element("form");
      div0 = element("div");
      h40 = element("h4");
      t0 = text("ID(s) of the offender(s)");
      input0 = element("input");
      if (if_block1)
        if_block1.c();
      h41 = element("h4");
      t1 = text("Reason");
      p0 = element("p");
      t2 = text("If you need more than 498 characters, you should probably be putting it into the evidence field instead.");
      create_component(textarea0.$$.fragment);
      h42 = element("h4");
      t3 = text("Evidence");
      p1 = element("p");
      t4 = text("For images, use Imgur or a similar service. Discord hosted image links work too, but keep in mind that deleting the message containing the image will eventually cause the image link to break.");
      p2 = element("p");
      t5 = text("If you need more than 1000 characters, please create a document and link it here. Include some basic information in the evidence so people can see roughly what your document contains.");
      p3 = element("p");
      t6 = text("Please spoiler anything suggestive and break up any image links to explicit / triggering content so people can't accidentally access them.");
      create_component(textarea1.$$.fragment);
      div1 = element("div");
      h43 = element("h4");
      t7 = text("Server");
      p4 = element("p");
      t8 = text("Identify which server you are bansharing this from.");
      if_block2.c();
      div2 = element("div");
      h44 = element("h4");
      t9 = text("Severity");
      p5 = element("p");
      t10 = text("The severity is used to determine auto-banning. A lower number indicates a greater threat.");
      ul = element("ul");
      li0 = element("li");
      b0 = element("b");
      t11 = text("P0");
      t12 = text(" — e.g. raids, harassment, etc.");
      li1 = element("li");
      b1 = element("b");
      t13 = text("P1");
      t14 = text(" — e.g. low-threat scam bots");
      li2 = element("li");
      b2 = element("b");
      t15 = text("P2");
      t16 = text(" — e.g. user causing a bit of trouble");
      select = element("select");
      option = element("option");
      t17 = text("Select Severity");
      for (let i = 0; i < 3; i += 1) {
        each_blocks[i].c();
      }
      div3 = element("div");
      h45 = element("h4");
      t18 = text("Urgency");
      p6 = element("p");
      t19 = text("Check the box below to instruct the bot to ping all observers instead of just a few to review this.");
      label = element("label");
      input1 = element("input");
      b3 = element("b");
      t20 = text("This banshare is urgent.");
      div4 = element("div");
      input2 = element("input");
      input3 = element("input");
      input4 = element("input");
      br = element("br");
      p7 = element("p");
      b4 = element("b");
      t21 = text("WARNING:");
      t22 = text(" You should only submit without checking IDs if your ID list is a link instead of an actual list of IDs. Doing this will also prevent automatic banning. Consider just pasting your entire ID list instead if possible - the bot will collapse it into a document link if it's too long.");
      p8 = element("p");
      b5 = element("b");
      t23 = text("This may take some time");
      t24 = text(" if you have submitted a long ID list, as the");
      bot = element("bot");
      t25 = text("needs time to fetch all of the users.");
      p9 = element("p");
      t26 = text(`If the list is very long and you want to get the banshare published ASAP, use "Submit Without Validation", which will check if the IDs look correct but won't fetch all of the users.`);
      this.h();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      form_1 = claim_element(nodes, "FORM", { method: true });
      var form_1_nodes = children(form_1);
      div0 = claim_element(form_1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h40 = claim_element(div0_nodes, "H4", {});
      var h40_nodes = children(h40);
      t0 = claim_text(h40_nodes, "ID(s) of the offender(s)");
      h40_nodes.forEach(detach);
      input0 = claim_element(div0_nodes, "INPUT", {
        type: true,
        name: true,
        placeholder: true,
        autocomplete: true
      });
      if (if_block1)
        if_block1.l(div0_nodes);
      h41 = claim_element(div0_nodes, "H4", {});
      var h41_nodes = children(h41);
      t1 = claim_text(h41_nodes, "Reason");
      h41_nodes.forEach(detach);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "If you need more than 498 characters, you should probably be putting it into the evidence field instead.");
      p0_nodes.forEach(detach);
      claim_component(textarea0.$$.fragment, div0_nodes);
      h42 = claim_element(div0_nodes, "H4", {});
      var h42_nodes = children(h42);
      t3 = claim_text(h42_nodes, "Evidence");
      h42_nodes.forEach(detach);
      p1 = claim_element(div0_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "For images, use Imgur or a similar service. Discord hosted image links work too, but keep in mind that deleting the message containing the image will eventually cause the image link to break.");
      p1_nodes.forEach(detach);
      p2 = claim_element(div0_nodes, "P", {});
      var p2_nodes = children(p2);
      t5 = claim_text(p2_nodes, "If you need more than 1000 characters, please create a document and link it here. Include some basic information in the evidence so people can see roughly what your document contains.");
      p2_nodes.forEach(detach);
      p3 = claim_element(div0_nodes, "P", {});
      var p3_nodes = children(p3);
      t6 = claim_text(p3_nodes, "Please spoiler anything suggestive and break up any image links to explicit / triggering content so people can't accidentally access them.");
      p3_nodes.forEach(detach);
      claim_component(textarea1.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1 = claim_element(form_1_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h43 = claim_element(div1_nodes, "H4", {});
      var h43_nodes = children(h43);
      t7 = claim_text(h43_nodes, "Server");
      h43_nodes.forEach(detach);
      p4 = claim_element(div1_nodes, "P", {});
      var p4_nodes = children(p4);
      t8 = claim_text(p4_nodes, "Identify which server you are bansharing this from.");
      p4_nodes.forEach(detach);
      if_block2.l(div1_nodes);
      div1_nodes.forEach(detach);
      div2 = claim_element(form_1_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h44 = claim_element(div2_nodes, "H4", {});
      var h44_nodes = children(h44);
      t9 = claim_text(h44_nodes, "Severity");
      h44_nodes.forEach(detach);
      p5 = claim_element(div2_nodes, "P", {});
      var p5_nodes = children(p5);
      t10 = claim_text(p5_nodes, "The severity is used to determine auto-banning. A lower number indicates a greater threat.");
      p5_nodes.forEach(detach);
      ul = claim_element(div2_nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      b0 = claim_element(li0_nodes, "B", {});
      var b0_nodes = children(b0);
      t11 = claim_text(b0_nodes, "P0");
      b0_nodes.forEach(detach);
      t12 = claim_text(li0_nodes, " — e.g. raids, harassment, etc.");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      b1 = claim_element(li1_nodes, "B", {});
      var b1_nodes = children(b1);
      t13 = claim_text(b1_nodes, "P1");
      b1_nodes.forEach(detach);
      t14 = claim_text(li1_nodes, " — e.g. low-threat scam bots");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      b2 = claim_element(li2_nodes, "B", {});
      var b2_nodes = children(b2);
      t15 = claim_text(b2_nodes, "P2");
      b2_nodes.forEach(detach);
      t16 = claim_text(li2_nodes, " — e.g. user causing a bit of trouble");
      li2_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      select = claim_element(div2_nodes, "SELECT", { name: true });
      var select_nodes = children(select);
      option = claim_element(select_nodes, "OPTION", {});
      var option_nodes = children(option);
      t17 = claim_text(option_nodes, "Select Severity");
      option_nodes.forEach(detach);
      for (let i = 0; i < 3; i += 1) {
        each_blocks[i].l(select_nodes);
      }
      select_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3 = claim_element(form_1_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h45 = claim_element(div3_nodes, "H4", {});
      var h45_nodes = children(h45);
      t18 = claim_text(h45_nodes, "Urgency");
      h45_nodes.forEach(detach);
      p6 = claim_element(div3_nodes, "P", {});
      var p6_nodes = children(p6);
      t19 = claim_text(p6_nodes, "Check the box below to instruct the bot to ping all observers instead of just a few to review this.");
      p6_nodes.forEach(detach);
      label = claim_element(div3_nodes, "LABEL", {});
      var label_nodes = children(label);
      input1 = claim_element(label_nodes, "INPUT", { type: true, name: true });
      b3 = claim_element(label_nodes, "B", {});
      var b3_nodes = children(b3);
      t20 = claim_text(b3_nodes, "This banshare is urgent.");
      b3_nodes.forEach(detach);
      label_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4 = claim_element(form_1_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      input2 = claim_element(div4_nodes, "INPUT", {
        type: true,
        name: true,
        style: true,
        class: true
      });
      input3 = claim_element(div4_nodes, "INPUT", { type: true, name: true, class: true });
      input4 = claim_element(div4_nodes, "INPUT", { type: true, name: true, class: true });
      br = claim_element(div4_nodes, "BR", {});
      p7 = claim_element(div4_nodes, "P", {});
      var p7_nodes = children(p7);
      b4 = claim_element(p7_nodes, "B", {});
      var b4_nodes = children(b4);
      t21 = claim_text(b4_nodes, "WARNING:");
      b4_nodes.forEach(detach);
      t22 = claim_text(p7_nodes, " You should only submit without checking IDs if your ID list is a link instead of an actual list of IDs. Doing this will also prevent automatic banning. Consider just pasting your entire ID list instead if possible - the bot will collapse it into a document link if it's too long.");
      p7_nodes.forEach(detach);
      p8 = claim_element(div4_nodes, "P", {});
      var p8_nodes = children(p8);
      b5 = claim_element(p8_nodes, "B", {});
      var b5_nodes = children(b5);
      t23 = claim_text(b5_nodes, "This may take some time");
      b5_nodes.forEach(detach);
      t24 = claim_text(p8_nodes, " if you have submitted a long ID list, as the");
      p8_nodes.forEach(detach);
      bot = claim_element(div4_nodes, "BOT", {});
      var bot_nodes = children(bot);
      t25 = claim_text(bot_nodes, "needs time to fetch all of the users.");
      bot_nodes.forEach(detach);
      p9 = claim_element(div4_nodes, "P", {});
      var p9_nodes = children(p9);
      t26 = claim_text(p9_nodes, `If the list is very long and you want to get the banshare published ASAP, use "Submit Without Validation", which will check if the IDs look correct but won't fetch all of the users.`);
      p9_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      form_1_nodes.forEach(detach);
      this.h();
    },
    h() {
      var _a2;
      attr(input0, "type", "text");
      attr(input0, "name", "ids");
      attr(input0, "placeholder", "Space-separated list of IDs");
      input0.required = true;
      attr(input0, "autocomplete", "off");
      attr(div0, "class", "panel");
      attr(div1, "class", "panel");
      option.selected = true;
      option.disabled = true;
      option.hidden = true;
      option.__value = "";
      option.value = option.__value;
      attr(select, "name", "severity");
      select.required = true;
      attr(div2, "class", "panel");
      attr(input1, "type", "checkbox");
      attr(input1, "name", "urgent");
      input1.checked = input1_checked_value = /*form*/
      (_a2 = ctx[1]) == null ? void 0 : _a2.urgent;
      attr(div3, "class", "panel");
      attr(input2, "type", "submit");
      attr(input2, "name", "submit");
      input2.value = "Submit";
      set_style(input2, "font-weight", "600");
      attr(input2, "class", "svelte-15eaza9");
      attr(input3, "type", "submit");
      attr(input3, "name", "submit");
      input3.value = "Submit Without Validation";
      attr(input3, "class", "svelte-15eaza9");
      attr(input4, "type", "submit");
      attr(input4, "name", "submit");
      input4.value = "Submit Without Checking IDs";
      attr(input4, "class", "svelte-15eaza9");
      attr(div4, "class", "panel");
      attr(form_1, "method", "post");
    },
    m(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert_hydration(target, form_1, anchor);
      append_hydration(form_1, div0);
      append_hydration(div0, h40);
      append_hydration(h40, t0);
      append_hydration(div0, input0);
      set_input_value(
        input0,
        /*ids*/
        ctx[3]
      );
      if (if_block1)
        if_block1.m(div0, null);
      append_hydration(div0, h41);
      append_hydration(h41, t1);
      append_hydration(div0, p0);
      append_hydration(p0, t2);
      mount_component(textarea0, div0, null);
      append_hydration(div0, h42);
      append_hydration(h42, t3);
      append_hydration(div0, p1);
      append_hydration(p1, t4);
      append_hydration(div0, p2);
      append_hydration(p2, t5);
      append_hydration(div0, p3);
      append_hydration(p3, t6);
      mount_component(textarea1, div0, null);
      append_hydration(form_1, div1);
      append_hydration(div1, h43);
      append_hydration(h43, t7);
      append_hydration(div1, p4);
      append_hydration(p4, t8);
      if_blocks_1[current_block_type_index_1].m(div1, null);
      append_hydration(form_1, div2);
      append_hydration(div2, h44);
      append_hydration(h44, t9);
      append_hydration(div2, p5);
      append_hydration(p5, t10);
      append_hydration(div2, ul);
      append_hydration(ul, li0);
      append_hydration(li0, b0);
      append_hydration(b0, t11);
      append_hydration(li0, t12);
      append_hydration(ul, li1);
      append_hydration(li1, b1);
      append_hydration(b1, t13);
      append_hydration(li1, t14);
      append_hydration(ul, li2);
      append_hydration(li2, b2);
      append_hydration(b2, t15);
      append_hydration(li2, t16);
      append_hydration(div2, select);
      append_hydration(select, option);
      append_hydration(option, t17);
      for (let i = 0; i < 3; i += 1) {
        each_blocks[i].m(select, null);
      }
      append_hydration(form_1, div3);
      append_hydration(div3, h45);
      append_hydration(h45, t18);
      append_hydration(div3, p6);
      append_hydration(p6, t19);
      append_hydration(div3, label);
      append_hydration(label, input1);
      append_hydration(label, b3);
      append_hydration(b3, t20);
      append_hydration(form_1, div4);
      append_hydration(div4, input2);
      append_hydration(div4, input3);
      append_hydration(div4, input4);
      append_hydration(div4, br);
      append_hydration(div4, p7);
      append_hydration(p7, b4);
      append_hydration(b4, t21);
      append_hydration(p7, t22);
      append_hydration(div4, p8);
      append_hydration(p8, b5);
      append_hydration(b5, t23);
      append_hydration(p8, t24);
      append_hydration(div4, bot);
      append_hydration(bot, t25);
      append_hydration(div4, p9);
      append_hydration(p9, t26);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input0, "keydown", keydown_handler_1),
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[12]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      var _a2, _b2, _c;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block0) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block0 = if_blocks[current_block_type_index];
          if (!if_block0) {
            if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block0.c();
          } else {
            if_block0.p(ctx2, dirty);
          }
          transition_in(if_block0, 1);
          if_block0.m(form_1.parentNode, form_1);
        } else {
          if_block0 = null;
        }
      }
      if (dirty & /*ids*/
      8 && input0.value !== /*ids*/
      ctx2[3]) {
        set_input_value(
          input0,
          /*ids*/
          ctx2[3]
        );
      }
      if (dirty & /*ids*/
      8)
        show_if = /*ids*/
        ctx2[3].trim() !== "";
      if (show_if) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_5(ctx2);
          if_block1.c();
          if_block1.m(div0, h41);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      const textarea0_changes = {};
      if (dirty & /*form*/
      2)
        textarea0_changes.value = /*form*/
        (_a2 = ctx2[1]) == null ? void 0 : _a2.reason;
      textarea0.$set(textarea0_changes);
      const textarea1_changes = {};
      if (dirty & /*form*/
      2)
        textarea1_changes.value = /*form*/
        (_b2 = ctx2[1]) == null ? void 0 : _b2.evidence;
      textarea1.$set(textarea1_changes);
      let previous_block_index_1 = current_block_type_index_1;
      current_block_type_index_1 = select_block_type_3(ctx2);
      if (current_block_type_index_1 === previous_block_index_1) {
        if_blocks_1[current_block_type_index_1].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
          if_blocks_1[previous_block_index_1] = null;
        });
        check_outros();
        if_block2 = if_blocks_1[current_block_type_index_1];
        if (!if_block2) {
          if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx2);
          if_block2.c();
        } else {
          if_block2.p(ctx2, dirty);
        }
        transition_in(if_block2, 1);
        if_block2.m(div1, null);
      }
      if (dirty & /*form*/
      2) {
        each_value_1 = ["P0", "P1", "P2"];
        let i;
        for (i = 0; i < 3; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < 3; i += 1) {
          each_blocks[i].d(1);
        }
      }
      if (!current || dirty & /*form*/
      2 && input1_checked_value !== (input1_checked_value = /*form*/
      (_c = ctx2[1]) == null ? void 0 : _c.urgent)) {
        input1.checked = input1_checked_value;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(textarea0.$$.fragment, local);
      transition_in(textarea1.$$.fragment, local);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(textarea0.$$.fragment, local);
      transition_out(textarea1.$$.fragment, local);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
      if (detaching)
        detach(form_1);
      if (if_block1)
        if_block1.d();
      destroy_component(textarea0);
      destroy_component(textarea1);
      if_blocks_1[current_block_type_index_1].d();
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_3(ctx) {
  let callout;
  let current;
  callout = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(callout.$$.fragment);
    },
    l(nodes) {
      claim_component(callout.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(callout, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const callout_changes = {};
      if (dirty & /*$$scope*/
      67108864) {
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
      destroy_component(callout, detaching);
    }
  };
}
function create_if_block_7(ctx) {
  let callout;
  let br;
  let current;
  callout = new Callout({
    props: {
      style: "green",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(callout.$$.fragment);
      br = element("br");
    },
    l(nodes) {
      claim_component(callout.$$.fragment, nodes);
      br = claim_element(nodes, "BR", {});
    },
    m(target, anchor) {
      mount_component(callout, target, anchor);
      insert_hydration(target, br, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const callout_changes = {};
      if (dirty & /*$$scope*/
      67108864) {
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
      destroy_component(callout, detaching);
      if (detaching)
        detach(br);
    }
  };
}
function create_if_block_6(ctx) {
  let callout;
  let br;
  let current;
  callout = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(callout.$$.fragment);
      br = element("br");
    },
    l(nodes) {
      claim_component(callout.$$.fragment, nodes);
      br = claim_element(nodes, "BR", {});
    },
    m(target, anchor) {
      mount_component(callout, target, anchor);
      insert_hydration(target, br, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const callout_changes = {};
      if (dirty & /*$$scope, form*/
      67108866) {
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
      destroy_component(callout, detaching);
      if (detaching)
        detach(br);
    }
  };
}
function create_default_slot_4(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Your banshare has been submitted.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Your banshare has been submitted.");
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
function create_default_slot_3(ctx) {
  let p;
  let raw_value = (
    /*form*/
    ctx[1].error + ""
  );
  return {
    c() {
      p = element("p");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & /*form*/
      2 && raw_value !== (raw_value = /*form*/
      ctx2[1].error + ""))
        p.innerHTML = raw_value;
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_5(ctx) {
  let div;
  let br;
  let a;
  let t0;
  let t1;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      br = element("br");
      a = element("a");
      t0 = text("Check IDs");
      t1 = text("\n(shows the users' tags if all IDs are valid)");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      br = claim_element(div_nodes, "BR", {});
      a = claim_element(div_nodes, "A", { class: true, href: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, "Check IDs");
      a_nodes.forEach(detach);
      t1 = claim_text(div_nodes, "\n(shows the users' tags if all IDs are valid)");
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "class", "button");
      attr(a, "href", "javascript:void(0)");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, br);
      append_hydration(div, a);
      append_hydration(a, t0);
      append_hydration(div, t1);
      if (!mounted) {
        dispose = listen(
          a,
          "click",
          /*check_ids*/
          ctx[8]
        );
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_else_block_3(ctx) {
  let select;
  let option;
  let t;
  let option_selected_value;
  let each_value_2 = (
    /*servers*/
    ctx[2]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  return {
    c() {
      select = element("select");
      option = element("option");
      t = text("Select Server");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      select = claim_element(nodes, "SELECT", { name: true });
      var select_nodes = children(select);
      option = claim_element(select_nodes, "OPTION", {});
      var option_nodes = children(option);
      t = claim_text(option_nodes, "Select Server");
      option_nodes.forEach(detach);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(select_nodes);
      }
      select_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.selected = option_selected_value = /*servers*/
      ctx[2].length > 1;
      option.disabled = true;
      option.hidden = true;
      option.__value = "";
      option.value = option.__value;
      attr(select, "name", "server");
      select.required = true;
    },
    m(target, anchor) {
      insert_hydration(target, select, anchor);
      append_hydration(select, option);
      append_hydration(option, t);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(select, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*servers*/
      4 && option_selected_value !== (option_selected_value = /*servers*/
      ctx2[2].length > 1)) {
        option.selected = option_selected_value;
      }
      if (dirty & /*servers, form*/
      6) {
        each_value_2 = /*servers*/
        ctx2[2];
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(select);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block_4(ctx) {
  let loadingspinner;
  let current;
  loadingspinner = new LoadingSpinner({
    props: {
      size: 25,
      foreground: "var(--text-primary)",
      background: "rgb(var(--pure), 50%)",
      text: "Loading Servers"
    }
  });
  return {
    c() {
      create_component(loadingspinner.$$.fragment);
    },
    l(nodes) {
      claim_component(loadingspinner.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(loadingspinner, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(loadingspinner.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(loadingspinner.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(loadingspinner, detaching);
    }
  };
}
function create_each_block_2(ctx) {
  let option;
  let t_value = (
    /*name*/
    ctx[23] + ""
  );
  let t;
  let option_value_value;
  let option_selected_value;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t = claim_text(option_nodes, t_value);
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      var _a;
      option.__value = option_value_value = /*id*/
      ctx[17];
      option.value = option.__value;
      option.selected = option_selected_value = /*form*/
      ((_a = ctx[1]) == null ? void 0 : _a.server) === /*id*/
      ctx[17];
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t);
    },
    p(ctx2, dirty) {
      var _a;
      if (dirty & /*servers*/
      4 && t_value !== (t_value = /*name*/
      ctx2[23] + ""))
        set_data(t, t_value);
      if (dirty & /*servers*/
      4 && option_value_value !== (option_value_value = /*id*/
      ctx2[17])) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
      if (dirty & /*form, servers*/
      6 && option_selected_value !== (option_selected_value = /*form*/
      ((_a = ctx2[1]) == null ? void 0 : _a.server) === /*id*/
      ctx2[17])) {
        option.selected = option_selected_value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function create_each_block_1(ctx) {
  let option;
  let t;
  let option_selected_value;
  return {
    c() {
      option = element("option");
      t = text(
        /*sev*/
        ctx[20]
      );
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t = claim_text(
        option_nodes,
        /*sev*/
        ctx[20]
      );
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      var _a;
      option.__value = /*sev*/
      ctx[20].toLowerCase();
      option.value = option.__value;
      option.selected = option_selected_value = /*form*/
      ((_a = ctx[1]) == null ? void 0 : _a.severity) === /*sev*/
      ctx[20].toLowerCase();
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t);
    },
    p(ctx2, dirty) {
      var _a;
      if (dirty & /*form*/
      2 && option_selected_value !== (option_selected_value = /*form*/
      ((_a = ctx2[1]) == null ? void 0 : _a.severity) === /*sev*/
      ctx2[20].toLowerCase())) {
        option.selected = option_selected_value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function create_default_slot_2(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("You are not staff on any TCN servers. If you believe this is a mistake, contact your server's owner or a TCN observer.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "You are not staff on any TCN servers. If you believe this is a mistake, contact your server's owner or a TCN observer.");
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
function create_else_block(ctx) {
  let div;
  let loadingspinner;
  let b;
  let t;
  let current;
  loadingspinner = new LoadingSpinner({ props: { size: 50, text: "" } });
  return {
    c() {
      div = element("div");
      create_component(loadingspinner.$$.fragment);
      b = element("b");
      t = text("Loading users...");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(loadingspinner.$$.fragment, div_nodes);
      b = claim_element(div_nodes, "B", {});
      var b_nodes = children(b);
      t = claim_text(b_nodes, "Loading users...");
      b_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "row");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(loadingspinner, div, null);
      append_hydration(div, b);
      append_hydration(b, t);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(loadingspinner.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(loadingspinner.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(loadingspinner);
    }
  };
}
function create_if_block_1(ctx) {
  let b;
  let t;
  let ul;
  let each_value = (
    /*tag_list*/
    ctx[7]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      b = element("b");
      t = text("You will be bansharing:");
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
    },
    l(nodes) {
      b = claim_element(nodes, "B", {});
      var b_nodes = children(b);
      t = claim_text(b_nodes, "You will be bansharing:");
      b_nodes.forEach(detach);
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, b, anchor);
      append_hydration(b, t);
      insert_hydration(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*tag_list*/
      128) {
        each_value = /*tag_list*/
        ctx2[7];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(b);
      if (detaching)
        detach(ul);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block(ctx) {
  let callout;
  let current;
  callout = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(callout.$$.fragment);
    },
    l(nodes) {
      claim_component(callout.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(callout, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const callout_changes = {};
      if (dirty & /*$$scope, error*/
      67108928) {
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
      destroy_component(callout, detaching);
    }
  };
}
function create_each_block(ctx) {
  let li;
  let t0_value = (
    /*tag*/
    ctx[16] + ""
  );
  let t0;
  let t1;
  let code;
  let t2_value = (
    /*id*/
    ctx[17] + ""
  );
  let t2;
  return {
    c() {
      li = element("li");
      t0 = text(t0_value);
      t1 = text(" — ");
      code = element("code");
      t2 = text(t2_value);
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      t0 = claim_text(li_nodes, t0_value);
      t1 = claim_text(li_nodes, " — ");
      code = claim_element(li_nodes, "CODE", {});
      var code_nodes = children(code);
      t2 = claim_text(code_nodes, t2_value);
      code_nodes.forEach(detach);
      li_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, t0);
      append_hydration(li, t1);
      append_hydration(li, code);
      append_hydration(code, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*tag_list*/
      128 && t0_value !== (t0_value = /*tag*/
      ctx2[16] + ""))
        set_data(t0, t0_value);
      if (dirty & /*tag_list*/
      128 && t2_value !== (t2_value = /*id*/
      ctx2[17] + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_default_slot_1(ctx) {
  let p;
  return {
    c() {
      p = element("p");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      p.innerHTML = /*error*/
      ctx[6];
    },
    p(ctx2, dirty) {
      if (dirty & /*error*/
      64)
        p.innerHTML = /*error*/
        ctx2[6];
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_default_slot(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type_4(ctx2, dirty) {
    if (
      /*error*/
      ctx2[6]
    )
      return 0;
    if (
      /*tag_list*/
      ctx2[7]
    )
      return 1;
    return 2;
  }
  current_block_type_index = select_block_type_4(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_4(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment(ctx) {
  let scrolling = false;
  let clear_scrolling = () => {
    scrolling = false;
  };
  let scrolling_timeout;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let modal;
  let updating_open;
  let current;
  let mounted;
  let dispose;
  add_render_callback(
    /*onwindowscroll*/
    ctx[11]
  );
  const if_block_creators = [create_if_block_2, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!/*data*/
    ctx2[0].user)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  function modal_open_binding(value) {
    ctx[13](value);
  }
  let modal_props = {
    background_color: "var(--background-1)",
    overlay_color: "rgb(var(--pure-rgb), 80%)",
    $$slots: { default: [create_default_slot] },
    $$scope: { ctx }
  };
  if (
    /*open*/
    ctx[5] !== void 0
  ) {
    modal_props.open = /*open*/
    ctx[5];
  }
  modal = new Modal({ props: modal_props });
  binding_callbacks.push(() => bind(modal, "open", modal_open_binding));
  modal.$on(
    "click",
    /*close_modal*/
    ctx[9]
  );
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
      create_component(modal.$$.fragment);
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
      claim_component(modal.$$.fragment, nodes);
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      mount_component(modal, target, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            window,
            "keydown",
            /*keydown_handler*/
            ctx[10]
          ),
          listen(window, "scroll", () => {
            scrolling = true;
            clearTimeout(scrolling_timeout);
            scrolling_timeout = setTimeout(clear_scrolling, 100);
            ctx[11]();
          })
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*y*/
      16 && !scrolling) {
        scrolling = true;
        clearTimeout(scrolling_timeout);
        scrollTo(
          window.pageXOffset,
          /*y*/
          ctx2[4]
        );
        scrolling_timeout = setTimeout(clear_scrolling, 100);
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
      const modal_changes = {};
      if (dirty & /*$$scope, error, tag_list*/
      67109056) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty & /*open*/
      32) {
        updating_open = true;
        modal_changes.open = /*open*/
        ctx2[5];
        add_flush_callback(() => updating_open = false);
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
      destroy_component(modal, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
const keydown_handler_1 = (e) => e.key === "Enter" && e.preventDefault();
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  let { form } = $$props;
  let servers;
  onMount(async () => {
    if (!data.user)
      return;
    const [user_data, guilds_data] = await Promise.all([`${PUBLIC_TCN_API}/users/${data.user.id}`, `${PUBLIC_TCN_API}/guilds`].map(async (url) => {
      const response = await fetch(url);
      if (!response.ok)
        return {};
      return await response.json();
    }));
    const map = /* @__PURE__ */ new Map();
    for (const guild of guilds_data)
      map.set(guild.id, guild.name);
    const output = [];
    for (const guild of (user_data == null ? void 0 : user_data.guilds) ?? [])
      if (map.has(guild))
        output.push([guild, map.get(guild)]);
    $$invalidate(2, servers = output);
  });
  let ids = (form == null ? void 0 : form.ids) ?? "";
  let y = 0;
  let open = false;
  let error;
  let tag_list;
  let session = crypto.randomUUID();
  let last = "";
  function check_ids() {
    const list = ids.trim().split(/\s+/);
    const cmp = JSON.stringify(list);
    if (cmp === last)
      return $$invalidate(5, open = true);
    last = cmp;
    $$invalidate(7, tag_list = $$invalidate(6, error = void 0));
    $$invalidate(5, open = true);
    for (const id of list)
      if (!id.match(/^[1-9][0-9]{16,19}$/))
        return $$invalidate(6, error = `Invalid ID: <code>${escape(id)}</code> is not a valid Discord ID.`);
    fetch(`/fetch?session=${session}`, {
      method: "post",
      body: JSON.stringify(list)
    }).then((response) => response.json()).then((data2) => {
      if (data2.error)
        $$invalidate(6, error = data2.error);
      else
        $$invalidate(7, tag_list = data2);
    });
  }
  function close_modal() {
    if (!error && !tag_list)
      fetch(`/abort?session=${session}`);
  }
  const keydown_handler = (e) => {
    var _a;
    return e.key === "Enter" && e.ctrlKey && ((_a = document.querySelector("form")) == null ? void 0 : _a.requestSubmit());
  };
  function onwindowscroll() {
    $$invalidate(4, y = window.pageYOffset);
  }
  function input0_input_handler() {
    ids = this.value;
    $$invalidate(3, ids);
  }
  function modal_open_binding(value) {
    open = value;
    $$invalidate(5, open);
  }
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
    if ("form" in $$props2)
      $$invalidate(1, form = $$props2.form);
  };
  return [
    data,
    form,
    servers,
    ids,
    y,
    open,
    error,
    tag_list,
    check_ids,
    close_modal,
    keydown_handler,
    onwindowscroll,
    input0_input_handler,
    modal_open_binding
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0, form: 1 });
  }
}
export {
  Page as default
};
