import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, l as claim_element, m as children, r as claim_text, h as detach, n as attr, b as insert_hydration, G as append_hydration, H as listen, t as transition_out, d as check_outros, f as transition_in, o as onMount, g as group_outros, _ as select_value, e as empty, x as create_component, y as claim_component, p as set_style, $ as add_render_callback, z as mount_component, a0 as select_option, W as set_input_value, A as destroy_component, I as run_all, C as noop, u as set_data } from "../../../chunks/index-c4baf36c.js";
import { P as PUBLIC_TCN_AUTH } from "../../../chunks/public-962e99ca.js";
import { T as Textarea } from "../../../chunks/index-1e14ffe7.js";
import { C as Callout } from "../../../chunks/Callout-2d6b8933.js";
import { I as Invite } from "../../../chunks/Invite-6ce98080.js";
import { L as LoggedInAs } from "../../../chunks/LoggedInAs-8fa87d23.js";
function debounce(fn, timeout = 500) {
  let timer;
  return (...args) => {
    if (timer)
      clearTimeout(timer);
    timer = setTimeout(() => fn(...args), timeout);
  };
}
const _page_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  var _a, _b, _c, _d;
  let current_block_type_index;
  let if_block0;
  let if_block0_anchor;
  let callout0;
  let br0;
  let loggedinas;
  let div0;
  let h50;
  let t0;
  let input0;
  let input0_value_value;
  let h51;
  let t1;
  let select;
  let option0;
  let t2;
  let option0_selected_value;
  let option1;
  let t3;
  let option1_selected_value;
  let option2;
  let t4;
  let option2_selected_value;
  let option3;
  let t5;
  let option3_selected_value;
  let if_block1_anchor;
  let h52;
  let t6;
  let h60;
  let t7;
  let input1;
  let br1;
  let current_block_type_index_1;
  let if_block3;
  let h53;
  let t8;
  let label0;
  let input2;
  let input2_checked_value;
  let t9;
  let label1;
  let input3;
  let input3_checked_value;
  let t10;
  let label2;
  let input4;
  let input4_checked_value;
  let t11;
  let div1;
  let h54;
  let t12;
  let h61;
  let t13;
  let textarea0;
  let h55;
  let t14;
  let textarea1;
  let h56;
  let t15;
  let textarea2;
  let div2;
  let h57;
  let t16;
  let label3;
  let input5;
  let input5_checked_value;
  let t17;
  let b;
  let t18;
  let t19;
  let label4;
  let input6;
  let input6_checked_value;
  let t20;
  let label5;
  let input7;
  let input7_checked_value;
  let t21;
  let a;
  let t22;
  let label6;
  let input8;
  let input8_checked_value;
  let t23;
  let div3;
  let h58;
  let t24;
  let textarea3;
  let callout1;
  let br2;
  let div4;
  let input9;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_8, create_if_block_9];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
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
  if (~(current_block_type_index = select_block_type_1(ctx))) {
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  callout0 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  loggedinas = new LoggedInAs({ props: { user: (
    /*data*/
    ctx[0].user
  ) } });
  let if_block1 = (
    /*role*/
    ctx[2] === "other" && create_if_block_7(ctx)
  );
  let if_block2 = (
    /*role*/
    ctx[2] !== "owner" && create_if_block_6(ctx)
  );
  const if_block_creators_1 = [create_if_block_1, create_else_block_1];
  const if_blocks_1 = [];
  function select_block_type_2(ctx2, dirty) {
    if (
      /*invite_data*/
      ctx2[4]
    )
      return 0;
    return 1;
  }
  current_block_type_index_1 = select_block_type_2(ctx);
  if_block3 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
  textarea0 = new Textarea({
    props: {
      name: "experience",
      value: (
        /*form*/
        (_a = ctx[1]) == null ? void 0 : _a.experience
      ),
      placeholder: "Up to 1024 characters",
      maxlength: "1024"
    }
  });
  textarea1 = new Textarea({
    props: {
      name: "shortgoals",
      required: true,
      value: (
        /*form*/
        (_b = ctx[1]) == null ? void 0 : _b.shortgoals
      ),
      placeholder: "Up to 1024 characters",
      maxlength: "1024"
    }
  });
  textarea2 = new Textarea({
    props: {
      name: "longgoals",
      required: true,
      value: (
        /*form*/
        (_c = ctx[1]) == null ? void 0 : _c.longgoals
      ),
      placeholder: "Up to 1024 characters",
      maxlength: "1024"
    }
  });
  textarea3 = new Textarea({
    props: {
      name: "additional",
      value: (
        /*form*/
        (_d = ctx[1]) == null ? void 0 : _d.additional
      ),
      placeholder: "Up to 1024 characters. If you have more questions, please reach out to an observer.",
      maxlength: "1024"
    }
  });
  callout1 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      if (if_block0)
        if_block0.c();
      if_block0_anchor = empty();
      create_component(callout0.$$.fragment);
      br0 = element("br");
      create_component(loggedinas.$$.fragment);
      div0 = element("div");
      h50 = element("h5");
      t0 = text("Which Genshin Impact character is your server based on?");
      input0 = element("input");
      h51 = element("h5");
      t1 = text("What is your role in the server?");
      select = element("select");
      option0 = element("option");
      t2 = text("Server Owner");
      option1 = element("option");
      t3 = text("Administrator");
      option2 = element("option");
      t4 = text("Moderator");
      option3 = element("option");
      t5 = text("Other...");
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      if (if_block2)
        if_block2.c();
      h52 = element("h5");
      t6 = text("Enter an invite link to your server.");
      h60 = element("h6");
      t7 = text("Please enter a permanent, non-vanity link.");
      input1 = element("input");
      br1 = element("br");
      if_block3.c();
      h53 = element("h5");
      t8 = text("Does your server contain an NSFW section?");
      label0 = element("label");
      input2 = element("input");
      t9 = text("Yes, hidden from regular users");
      label1 = element("label");
      input3 = element("input");
      t10 = text("Yes, visible to regular users");
      label2 = element("label");
      input4 = element("input");
      t11 = text("No");
      div1 = element("div");
      h54 = element("h5");
      t12 = text("Do you have prior experience running a Discord server or similar communities in a position of management or moderation (e.g. forums, guilds, clans, etc)?");
      h61 = element("h6");
      t13 = text("You do not have to have been the owner of the server / forum / etc.; any position of management or moderation is of interest.");
      create_component(textarea0.$$.fragment);
      h55 = element("h5");
      t14 = text("What are some of your short term goals or ideas for the server?");
      create_component(textarea1.$$.fragment);
      h56 = element("h5");
      t15 = text("What are some of your long term goals or ideas for the server?");
      create_component(textarea2.$$.fragment);
      div2 = element("div");
      h57 = element("h5");
      t16 = text("You must consent to all of the following to apply.");
      label3 = element("label");
      input5 = element("input");
      t17 = text("I agree to give the observer view access to ");
      b = element("b");
      t18 = text("all channels");
      t19 = text(" for 28 days.");
      label4 = element("label");
      input6 = element("input");
      t20 = text("I agree to give the observer access to the audit logs for 28 days.");
      label5 = element("label");
      input7 = element("input");
      t21 = text("I agree to display the TCN partner list publicly and keep it up-to-date");
      a = element("a");
      t22 = text("[learn more]");
      label6 = element("label");
      input8 = element("input");
      t23 = text("I agree to follow the network events channel publicly to cross-promote TCN server events and post crucial TCN announcements.");
      div3 = element("div");
      h58 = element("h5");
      t24 = text("Any additional questions or comments you'd like to include?");
      create_component(textarea3.$$.fragment);
      create_component(callout1.$$.fragment);
      br2 = element("br");
      div4 = element("div");
      input9 = element("input");
      this.h();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      if_block0_anchor = empty();
      claim_component(callout0.$$.fragment, nodes);
      br0 = claim_element(nodes, "BR", {});
      claim_component(loggedinas.$$.fragment, nodes);
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h50 = claim_element(div0_nodes, "H5", { class: true });
      var h50_nodes = children(h50);
      t0 = claim_text(h50_nodes, "Which Genshin Impact character is your server based on?");
      h50_nodes.forEach(detach);
      input0 = claim_element(div0_nodes, "INPUT", {
        type: true,
        name: true,
        placeholder: true,
        style: true,
        autocomplete: true
      });
      h51 = claim_element(div0_nodes, "H5", { class: true });
      var h51_nodes = children(h51);
      t1 = claim_text(h51_nodes, "What is your role in the server?");
      h51_nodes.forEach(detach);
      select = claim_element(div0_nodes, "SELECT", { name: true });
      var select_nodes = children(select);
      option0 = claim_element(select_nodes, "OPTION", {});
      var option0_nodes = children(option0);
      t2 = claim_text(option0_nodes, "Server Owner");
      option0_nodes.forEach(detach);
      option1 = claim_element(select_nodes, "OPTION", {});
      var option1_nodes = children(option1);
      t3 = claim_text(option1_nodes, "Administrator");
      option1_nodes.forEach(detach);
      option2 = claim_element(select_nodes, "OPTION", {});
      var option2_nodes = children(option2);
      t4 = claim_text(option2_nodes, "Moderator");
      option2_nodes.forEach(detach);
      option3 = claim_element(select_nodes, "OPTION", {});
      var option3_nodes = children(option3);
      t5 = claim_text(option3_nodes, "Other...");
      option3_nodes.forEach(detach);
      select_nodes.forEach(detach);
      if (if_block1)
        if_block1.l(div0_nodes);
      if_block1_anchor = empty();
      if (if_block2)
        if_block2.l(div0_nodes);
      h52 = claim_element(div0_nodes, "H5", { class: true });
      var h52_nodes = children(h52);
      t6 = claim_text(h52_nodes, "Enter an invite link to your server.");
      h52_nodes.forEach(detach);
      h60 = claim_element(div0_nodes, "H6", { class: true });
      var h60_nodes = children(h60);
      t7 = claim_text(h60_nodes, "Please enter a permanent, non-vanity link.");
      h60_nodes.forEach(detach);
      input1 = claim_element(div0_nodes, "INPUT", {
        type: true,
        name: true,
        placeholder: true,
        style: true,
        autocomplete: true
      });
      br1 = claim_element(div0_nodes, "BR", {});
      if_block3.l(div0_nodes);
      h53 = claim_element(div0_nodes, "H5", { class: true });
      var h53_nodes = children(h53);
      t8 = claim_text(h53_nodes, "Does your server contain an NSFW section?");
      h53_nodes.forEach(detach);
      label0 = claim_element(div0_nodes, "LABEL", {});
      var label0_nodes = children(label0);
      input2 = claim_element(label0_nodes, "INPUT", { type: true, name: true });
      t9 = claim_text(label0_nodes, "Yes, hidden from regular users");
      label0_nodes.forEach(detach);
      label1 = claim_element(div0_nodes, "LABEL", {});
      var label1_nodes = children(label1);
      input3 = claim_element(label1_nodes, "INPUT", { type: true, name: true });
      t10 = claim_text(label1_nodes, "Yes, visible to regular users");
      label1_nodes.forEach(detach);
      label2 = claim_element(div0_nodes, "LABEL", {});
      var label2_nodes = children(label2);
      input4 = claim_element(label2_nodes, "INPUT", { type: true, name: true });
      t11 = claim_text(label2_nodes, "No");
      label2_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h54 = claim_element(div1_nodes, "H5", { class: true });
      var h54_nodes = children(h54);
      t12 = claim_text(h54_nodes, "Do you have prior experience running a Discord server or similar communities in a position of management or moderation (e.g. forums, guilds, clans, etc)?");
      h54_nodes.forEach(detach);
      h61 = claim_element(div1_nodes, "H6", { class: true });
      var h61_nodes = children(h61);
      t13 = claim_text(h61_nodes, "You do not have to have been the owner of the server / forum / etc.; any position of management or moderation is of interest.");
      h61_nodes.forEach(detach);
      claim_component(textarea0.$$.fragment, div1_nodes);
      h55 = claim_element(div1_nodes, "H5", { class: true });
      var h55_nodes = children(h55);
      t14 = claim_text(h55_nodes, "What are some of your short term goals or ideas for the server?");
      h55_nodes.forEach(detach);
      claim_component(textarea1.$$.fragment, div1_nodes);
      h56 = claim_element(div1_nodes, "H5", { class: true });
      var h56_nodes = children(h56);
      t15 = claim_text(h56_nodes, "What are some of your long term goals or ideas for the server?");
      h56_nodes.forEach(detach);
      claim_component(textarea2.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h57 = claim_element(div2_nodes, "H5", { class: true });
      var h57_nodes = children(h57);
      t16 = claim_text(h57_nodes, "You must consent to all of the following to apply.");
      h57_nodes.forEach(detach);
      label3 = claim_element(div2_nodes, "LABEL", {});
      var label3_nodes = children(label3);
      input5 = claim_element(label3_nodes, "INPUT", { type: true, name: true });
      t17 = claim_text(label3_nodes, "I agree to give the observer view access to ");
      b = claim_element(label3_nodes, "B", {});
      var b_nodes = children(b);
      t18 = claim_text(b_nodes, "all channels");
      b_nodes.forEach(detach);
      t19 = claim_text(label3_nodes, " for 28 days.");
      label3_nodes.forEach(detach);
      label4 = claim_element(div2_nodes, "LABEL", {});
      var label4_nodes = children(label4);
      input6 = claim_element(label4_nodes, "INPUT", { type: true, name: true });
      t20 = claim_text(label4_nodes, "I agree to give the observer access to the audit logs for 28 days.");
      label4_nodes.forEach(detach);
      label5 = claim_element(div2_nodes, "LABEL", {});
      var label5_nodes = children(label5);
      input7 = claim_element(label5_nodes, "INPUT", { type: true, name: true });
      t21 = claim_text(label5_nodes, "I agree to display the TCN partner list publicly and keep it up-to-date");
      a = claim_element(label5_nodes, "A", { href: true, target: true });
      var a_nodes = children(a);
      t22 = claim_text(a_nodes, "[learn more]");
      a_nodes.forEach(detach);
      label5_nodes.forEach(detach);
      label6 = claim_element(div2_nodes, "LABEL", {});
      var label6_nodes = children(label6);
      input8 = claim_element(label6_nodes, "INPUT", { type: true, name: true });
      t23 = claim_text(label6_nodes, "I agree to follow the network events channel publicly to cross-promote TCN server events and post crucial TCN announcements.");
      label6_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h58 = claim_element(div3_nodes, "H5", { class: true });
      var h58_nodes = children(h58);
      t24 = claim_text(h58_nodes, "Any additional questions or comments you'd like to include?");
      h58_nodes.forEach(detach);
      claim_component(textarea3.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      claim_component(callout1.$$.fragment, nodes);
      br2 = claim_element(nodes, "BR", {});
      div4 = claim_element(nodes, "DIV", {});
      var div4_nodes = children(div4);
      input9 = claim_element(div4_nodes, "INPUT", { type: true, style: true });
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l;
      attr(h50, "class", "svelte-um8j5a");
      attr(input0, "type", "text");
      attr(input0, "name", "mascot");
      attr(input0, "placeholder", "Character name...");
      set_style(input0, "width", "50%");
      input0.required = true;
      attr(input0, "autocomplete", "off");
      input0.value = input0_value_value = /*form*/
      ((_a2 = ctx[1]) == null ? void 0 : _a2.mascot) ?? "";
      attr(h51, "class", "svelte-um8j5a");
      option0.__value = "owner";
      option0.value = option0.__value;
      option0.selected = option0_selected_value = /*form*/
      ((_b2 = ctx[1]) == null ? void 0 : _b2.role) === "owner";
      option1.__value = "admin";
      option1.value = option1.__value;
      option1.selected = option1_selected_value = /*form*/
      ((_c2 = ctx[1]) == null ? void 0 : _c2.role) === "admin";
      option2.__value = "mod";
      option2.value = option2.__value;
      option2.selected = option2_selected_value = /*form*/
      ((_d2 = ctx[1]) == null ? void 0 : _d2.role) === "mod";
      option3.__value = "other";
      option3.value = option3.__value;
      option3.selected = option3_selected_value = /*form*/
      ((_e = ctx[1]) == null ? void 0 : _e.role) === "other";
      attr(select, "name", "role");
      if (
        /*role*/
        ctx[2] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[8].call(select)
        ));
      attr(h52, "class", "svelte-um8j5a");
      attr(h60, "class", "svelte-um8j5a");
      attr(input1, "type", "text");
      attr(input1, "name", "invite");
      attr(input1, "placeholder", "https://discord.gg/...");
      set_style(input1, "width", "50%");
      input1.required = true;
      attr(input1, "autocomplete", "off");
      attr(h53, "class", "svelte-um8j5a");
      attr(input2, "type", "radio");
      attr(input2, "name", "nsfw");
      input2.value = "private";
      input2.required = true;
      input2.checked = input2_checked_value = /*form*/
      ((_f = ctx[1]) == null ? void 0 : _f.nsfw) === "private";
      attr(input3, "type", "radio");
      attr(input3, "name", "nsfw");
      input3.value = "public";
      input3.required = true;
      input3.checked = input3_checked_value = /*form*/
      ((_g = ctx[1]) == null ? void 0 : _g.nsfw) === "public";
      attr(input4, "type", "radio");
      attr(input4, "name", "nsfw");
      input4.value = "no";
      input4.required = true;
      input4.checked = input4_checked_value = /*form*/
      ((_h = ctx[1]) == null ? void 0 : _h.nsfw) === "no";
      attr(div0, "class", "panel");
      attr(h54, "class", "svelte-um8j5a");
      attr(h61, "class", "svelte-um8j5a");
      attr(h55, "class", "svelte-um8j5a");
      attr(h56, "class", "svelte-um8j5a");
      attr(div1, "class", "panel");
      attr(h57, "class", "svelte-um8j5a");
      attr(input5, "type", "checkbox");
      attr(input5, "name", "observerchannelconsent");
      input5.required = true;
      input5.checked = input5_checked_value = /*form*/
      (_i = ctx[1]) == null ? void 0 : _i.observerchannelconsent;
      attr(input6, "type", "checkbox");
      attr(input6, "name", "observerauditconsent");
      input6.required = true;
      input6.checked = input6_checked_value = /*form*/
      (_j = ctx[1]) == null ? void 0 : _j.observerauditconsent;
      attr(input7, "type", "checkbox");
      attr(input7, "name", "partnerlistconsent");
      input7.required = true;
      input7.checked = input7_checked_value = /*form*/
      (_k = ctx[1]) == null ? void 0 : _k.partnerlistconsent;
      attr(a, "href", "/info/partner-list");
      attr(a, "target", "_blank");
      attr(input8, "type", "checkbox");
      attr(input8, "name", "eventsconsent");
      input8.required = true;
      input8.checked = input8_checked_value = /*form*/
      (_l = ctx[1]) == null ? void 0 : _l.eventsconsent;
      attr(div2, "class", "panel");
      attr(h58, "class", "svelte-um8j5a");
      attr(div3, "class", "panel");
      attr(input9, "type", "submit");
      input9.value = "Submit!";
      set_style(input9, "font-size", "100%");
    },
    m(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert_hydration(target, if_block0_anchor, anchor);
      mount_component(callout0, target, anchor);
      insert_hydration(target, br0, anchor);
      mount_component(loggedinas, target, anchor);
      insert_hydration(target, div0, anchor);
      append_hydration(div0, h50);
      append_hydration(h50, t0);
      append_hydration(div0, input0);
      append_hydration(div0, h51);
      append_hydration(h51, t1);
      append_hydration(div0, select);
      append_hydration(select, option0);
      append_hydration(option0, t2);
      append_hydration(select, option1);
      append_hydration(option1, t3);
      append_hydration(select, option2);
      append_hydration(option2, t4);
      append_hydration(select, option3);
      append_hydration(option3, t5);
      select_option(
        select,
        /*role*/
        ctx[2]
      );
      if (if_block1)
        if_block1.m(div0, null);
      append_hydration(div0, if_block1_anchor);
      if (if_block2)
        if_block2.m(div0, null);
      append_hydration(div0, h52);
      append_hydration(h52, t6);
      append_hydration(div0, h60);
      append_hydration(h60, t7);
      append_hydration(div0, input1);
      set_input_value(
        input1,
        /*invite*/
        ctx[3]
      );
      append_hydration(div0, br1);
      if_blocks_1[current_block_type_index_1].m(div0, null);
      append_hydration(div0, h53);
      append_hydration(h53, t8);
      append_hydration(div0, label0);
      append_hydration(label0, input2);
      append_hydration(label0, t9);
      append_hydration(div0, label1);
      append_hydration(label1, input3);
      append_hydration(label1, t10);
      append_hydration(div0, label2);
      append_hydration(label2, input4);
      append_hydration(label2, t11);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, h54);
      append_hydration(h54, t12);
      append_hydration(div1, h61);
      append_hydration(h61, t13);
      mount_component(textarea0, div1, null);
      append_hydration(div1, h55);
      append_hydration(h55, t14);
      mount_component(textarea1, div1, null);
      append_hydration(div1, h56);
      append_hydration(h56, t15);
      mount_component(textarea2, div1, null);
      insert_hydration(target, div2, anchor);
      append_hydration(div2, h57);
      append_hydration(h57, t16);
      append_hydration(div2, label3);
      append_hydration(label3, input5);
      append_hydration(label3, t17);
      append_hydration(label3, b);
      append_hydration(b, t18);
      append_hydration(label3, t19);
      append_hydration(div2, label4);
      append_hydration(label4, input6);
      append_hydration(label4, t20);
      append_hydration(div2, label5);
      append_hydration(label5, input7);
      append_hydration(label5, t21);
      append_hydration(label5, a);
      append_hydration(a, t22);
      append_hydration(div2, label6);
      append_hydration(label6, input8);
      append_hydration(label6, t23);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, h58);
      append_hydration(h58, t24);
      mount_component(textarea3, div3, null);
      mount_component(callout1, target, anchor);
      insert_hydration(target, br2, anchor);
      insert_hydration(target, div4, anchor);
      append_hydration(div4, input9);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "keydown",
            /*suppress*/
            ctx[5]
          ),
          listen(
            select,
            "change",
            /*select_change_handler*/
            ctx[8]
          ),
          listen(
            input1,
            "keydown",
            /*suppress*/
            ctx[5]
          ),
          listen(input1, "input", debounce(
            /*check_invite*/
            ctx[6]
          )),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[9]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
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
          if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
        } else {
          if_block0 = null;
        }
      }
      const callout0_changes = {};
      if (dirty & /*$$scope*/
      1024) {
        callout0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout0.$set(callout0_changes);
      const loggedinas_changes = {};
      if (dirty & /*data*/
      1)
        loggedinas_changes.user = /*data*/
        ctx2[0].user;
      loggedinas.$set(loggedinas_changes);
      if (!current || dirty & /*form*/
      2 && input0_value_value !== (input0_value_value = /*form*/
      ((_a2 = ctx2[1]) == null ? void 0 : _a2.mascot) ?? "") && input0.value !== input0_value_value) {
        input0.value = input0_value_value;
      }
      if (!current || dirty & /*form*/
      2 && option0_selected_value !== (option0_selected_value = /*form*/
      ((_b2 = ctx2[1]) == null ? void 0 : _b2.role) === "owner")) {
        option0.selected = option0_selected_value;
      }
      if (!current || dirty & /*form*/
      2 && option1_selected_value !== (option1_selected_value = /*form*/
      ((_c2 = ctx2[1]) == null ? void 0 : _c2.role) === "admin")) {
        option1.selected = option1_selected_value;
      }
      if (!current || dirty & /*form*/
      2 && option2_selected_value !== (option2_selected_value = /*form*/
      ((_d2 = ctx2[1]) == null ? void 0 : _d2.role) === "mod")) {
        option2.selected = option2_selected_value;
      }
      if (!current || dirty & /*form*/
      2 && option3_selected_value !== (option3_selected_value = /*form*/
      ((_e = ctx2[1]) == null ? void 0 : _e.role) === "other")) {
        option3.selected = option3_selected_value;
      }
      if (dirty & /*role*/
      4) {
        select_option(
          select,
          /*role*/
          ctx2[2]
        );
      }
      if (
        /*role*/
        ctx2[2] === "other"
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_7(ctx2);
          if_block1.c();
          if_block1.m(div0, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*role*/
        ctx2[2] !== "owner"
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_6(ctx2);
          if_block2.c();
          if_block2.m(div0, h52);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (dirty & /*invite*/
      8 && input1.value !== /*invite*/
      ctx2[3]) {
        set_input_value(
          input1,
          /*invite*/
          ctx2[3]
        );
      }
      let previous_block_index_1 = current_block_type_index_1;
      current_block_type_index_1 = select_block_type_2(ctx2);
      if (current_block_type_index_1 === previous_block_index_1) {
        if_blocks_1[current_block_type_index_1].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
          if_blocks_1[previous_block_index_1] = null;
        });
        check_outros();
        if_block3 = if_blocks_1[current_block_type_index_1];
        if (!if_block3) {
          if_block3 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx2);
          if_block3.c();
        } else {
          if_block3.p(ctx2, dirty);
        }
        transition_in(if_block3, 1);
        if_block3.m(div0, h53);
      }
      if (!current || dirty & /*form*/
      2 && input2_checked_value !== (input2_checked_value = /*form*/
      ((_f = ctx2[1]) == null ? void 0 : _f.nsfw) === "private")) {
        input2.checked = input2_checked_value;
      }
      if (!current || dirty & /*form*/
      2 && input3_checked_value !== (input3_checked_value = /*form*/
      ((_g = ctx2[1]) == null ? void 0 : _g.nsfw) === "public")) {
        input3.checked = input3_checked_value;
      }
      if (!current || dirty & /*form*/
      2 && input4_checked_value !== (input4_checked_value = /*form*/
      ((_h = ctx2[1]) == null ? void 0 : _h.nsfw) === "no")) {
        input4.checked = input4_checked_value;
      }
      const textarea0_changes = {};
      if (dirty & /*form*/
      2)
        textarea0_changes.value = /*form*/
        (_i = ctx2[1]) == null ? void 0 : _i.experience;
      textarea0.$set(textarea0_changes);
      const textarea1_changes = {};
      if (dirty & /*form*/
      2)
        textarea1_changes.value = /*form*/
        (_j = ctx2[1]) == null ? void 0 : _j.shortgoals;
      textarea1.$set(textarea1_changes);
      const textarea2_changes = {};
      if (dirty & /*form*/
      2)
        textarea2_changes.value = /*form*/
        (_k = ctx2[1]) == null ? void 0 : _k.longgoals;
      textarea2.$set(textarea2_changes);
      if (!current || dirty & /*form*/
      2 && input5_checked_value !== (input5_checked_value = /*form*/
      (_l = ctx2[1]) == null ? void 0 : _l.observerchannelconsent)) {
        input5.checked = input5_checked_value;
      }
      if (!current || dirty & /*form*/
      2 && input6_checked_value !== (input6_checked_value = /*form*/
      (_m = ctx2[1]) == null ? void 0 : _m.observerauditconsent)) {
        input6.checked = input6_checked_value;
      }
      if (!current || dirty & /*form*/
      2 && input7_checked_value !== (input7_checked_value = /*form*/
      (_n = ctx2[1]) == null ? void 0 : _n.partnerlistconsent)) {
        input7.checked = input7_checked_value;
      }
      if (!current || dirty & /*form*/
      2 && input8_checked_value !== (input8_checked_value = /*form*/
      (_o = ctx2[1]) == null ? void 0 : _o.eventsconsent)) {
        input8.checked = input8_checked_value;
      }
      const textarea3_changes = {};
      if (dirty & /*form*/
      2)
        textarea3_changes.value = /*form*/
        (_p = ctx2[1]) == null ? void 0 : _p.additional;
      textarea3.$set(textarea3_changes);
      const callout1_changes = {};
      if (dirty & /*$$scope*/
      1024) {
        callout1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout1.$set(callout1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(callout0.$$.fragment, local);
      transition_in(loggedinas.$$.fragment, local);
      transition_in(if_block3);
      transition_in(textarea0.$$.fragment, local);
      transition_in(textarea1.$$.fragment, local);
      transition_in(textarea2.$$.fragment, local);
      transition_in(textarea3.$$.fragment, local);
      transition_in(callout1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(callout0.$$.fragment, local);
      transition_out(loggedinas.$$.fragment, local);
      transition_out(if_block3);
      transition_out(textarea0.$$.fragment, local);
      transition_out(textarea1.$$.fragment, local);
      transition_out(textarea2.$$.fragment, local);
      transition_out(textarea3.$$.fragment, local);
      transition_out(callout1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
      if (detaching)
        detach(if_block0_anchor);
      destroy_component(callout0, detaching);
      if (detaching)
        detach(br0);
      destroy_component(loggedinas, detaching);
      if (detaching)
        detach(div0);
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if_blocks_1[current_block_type_index_1].d();
      if (detaching)
        detach(div1);
      destroy_component(textarea0);
      destroy_component(textarea1);
      destroy_component(textarea2);
      if (detaching)
        detach(div2);
      if (detaching)
        detach(div3);
      destroy_component(textarea3);
      destroy_component(callout1, detaching);
      if (detaching)
        detach(br2);
      if (detaching)
        detach(div4);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let t0;
  let a;
  let t1;
  let t2;
  return {
    c() {
      div = element("div");
      t0 = text("Please ");
      a = element("a");
      t1 = text("log in");
      t2 = text(" to apply.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, "Please ");
      a = claim_element(div_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "log in");
      a_nodes.forEach(detach);
      t2 = claim_text(div_nodes, " to apply.");
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", PUBLIC_TCN_AUTH);
      attr(div, "class", "panel");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      append_hydration(div, a);
      append_hydration(a, t1);
      append_hydration(div, t2);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_9(ctx) {
  let callout;
  let br;
  let current;
  callout = new Callout({
    props: {
      style: "green",
      $$slots: { default: [create_default_slot_7] },
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
      1024) {
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
function create_if_block_8(ctx) {
  let callout;
  let br;
  let current;
  callout = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_6] },
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
      1026) {
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
function create_default_slot_7(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Your application has been submitted! We appreciate your patience.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Your application has been submitted! We appreciate your patience.");
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
function create_default_slot_6(ctx) {
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
function create_default_slot_5(ctx) {
  let p0;
  let t0;
  let a0;
  let t1;
  let t2;
  let a1;
  let t3;
  let t4;
  let p1;
  let t5;
  return {
    c() {
      p0 = element("p");
      t0 = text("If you haven't already, read out ");
      a0 = element("a");
      t1 = text("info page");
      t2 = text(" on what the process for joining the TCN is and what to expect. If you have any questions, comments, or concerns, please reach out to us. See our ");
      a1 = element("a");
      t3 = text("contact information");
      t4 = text(" page.");
      p1 = element("p");
      t5 = text("Please make sure your DMs are open so that we can reach out to you to respond to your application.");
      this.h();
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "If you haven't already, read out ");
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, "info page");
      a0_nodes.forEach(detach);
      t2 = claim_text(p0_nodes, " on what the process for joining the TCN is and what to expect. If you have any questions, comments, or concerns, please reach out to us. See our ");
      a1 = claim_element(p0_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "contact information");
      a1_nodes.forEach(detach);
      t4 = claim_text(p0_nodes, " page.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, "Please make sure your DMs are open so that we can reach out to you to respond to your application.");
      p1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "/join");
      attr(a1, "href", "/contact");
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      append_hydration(p0, a0);
      append_hydration(a0, t1);
      append_hydration(p0, t2);
      append_hydration(p0, a1);
      append_hydration(a1, t3);
      append_hydration(p0, t4);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t5);
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
function create_if_block_7(ctx) {
  let br0;
  let br1;
  let input;
  let input_value_value;
  let mounted;
  let dispose;
  return {
    c() {
      br0 = element("br");
      br1 = element("br");
      input = element("input");
      this.h();
    },
    l(nodes) {
      br0 = claim_element(nodes, "BR", {});
      br1 = claim_element(nodes, "BR", {});
      input = claim_element(nodes, "INPUT", {
        type: true,
        name: true,
        placeholder: true,
        style: true,
        autocomplete: true
      });
      this.h();
    },
    h() {
      var _a;
      attr(input, "type", "text");
      attr(input, "name", "roleother");
      attr(input, "placeholder", "Make sure you're approved to apply.");
      set_style(input, "width", "50%");
      input.required = true;
      attr(input, "autocomplete", "off");
      input.value = input_value_value = /*form*/
      ((_a = ctx[1]) == null ? void 0 : _a.roleother) ?? "";
    },
    m(target, anchor) {
      insert_hydration(target, br0, anchor);
      insert_hydration(target, br1, anchor);
      insert_hydration(target, input, anchor);
      if (!mounted) {
        dispose = listen(
          input,
          "keydown",
          /*suppress*/
          ctx[5]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      var _a;
      if (dirty & /*form*/
      2 && input_value_value !== (input_value_value = /*form*/
      ((_a = ctx2[1]) == null ? void 0 : _a.roleother) ?? "") && input.value !== input_value_value) {
        input.value = input_value_value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(br0);
      if (detaching)
        detach(br1);
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_6(ctx) {
  let h5;
  let t;
  let input;
  let input_value_value;
  let mounted;
  let dispose;
  return {
    c() {
      h5 = element("h5");
      t = text("Server Owner's ID");
      input = element("input");
      this.h();
    },
    l(nodes) {
      h5 = claim_element(nodes, "H5", { class: true });
      var h5_nodes = children(h5);
      t = claim_text(h5_nodes, "Server Owner's ID");
      h5_nodes.forEach(detach);
      input = claim_element(nodes, "INPUT", {
        type: true,
        name: true,
        placeholder: true,
        pattern: true,
        style: true,
        autocomplete: true
      });
      this.h();
    },
    h() {
      var _a;
      attr(h5, "class", "svelte-um8j5a");
      attr(input, "type", "text");
      attr(input, "name", "ownerid");
      attr(input, "placeholder", "17-20 digit number");
      attr(input, "pattern", "^[0-9]{17,20}$");
      set_style(input, "width", "50%");
      input.required = true;
      attr(input, "autocomplete", "off");
      input.value = input_value_value = /*form*/
      ((_a = ctx[1]) == null ? void 0 : _a.ownerid) ?? "";
    },
    m(target, anchor) {
      insert_hydration(target, h5, anchor);
      append_hydration(h5, t);
      insert_hydration(target, input, anchor);
      if (!mounted) {
        dispose = listen(
          input,
          "keydown",
          /*suppress*/
          ctx[5]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      var _a;
      if (dirty & /*form*/
      2 && input_value_value !== (input_value_value = /*form*/
      ((_a = ctx2[1]) == null ? void 0 : _a.ownerid) ?? "") && input.value !== input_value_value) {
        input.value = input_value_value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(h5);
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function create_else_block_1(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Invalid invite!");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Invalid invite!");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_1(ctx) {
  let if_block0_anchor;
  let if_block1_anchor;
  let if_block2_anchor;
  let br;
  let invite_1;
  let current;
  let if_block0 = (
    /*invite_data*/
    ctx[4].guild.vanityURLCode === /*invite_data*/
    ctx[4].code && create_if_block_5(ctx)
  );
  let if_block1 = (
    /*invite_data*/
    ctx[4].expires && create_if_block_4(ctx)
  );
  let if_block2 = (
    /*invite_data*/
    (ctx[4].stageInstance || /*invite_data*/
    ctx[4].targetApplication || /*invite_data*/
    ctx[4].targetUser) && create_if_block_3(ctx)
  );
  let if_block3 = 300 > /*invite_data*/
  ctx[4].memberCount && create_if_block_2(ctx);
  invite_1 = new Invite({
    props: {
      banner: (
        /*invite_data*/
        ctx[4].guild.splash ? `https://cdn.discordapp.com/splashes/${/*invite_data*/
        ctx[4].guild.id}/${/*invite_data*/
        ctx[4].guild.splash}?size=1024` : null
      ),
      icon: `https://cdn.discordapp.com/icons/${/*invite_data*/
      ctx[4].guild.id}/${/*invite_data*/
      ctx[4].guild.icon}?size=256`,
      title: (
        /*invite_data*/
        ctx[4].guild.name
      ),
      code: (
        /*invite_data*/
        ctx[4].code
      )
    }
  });
  return {
    c() {
      if (if_block0)
        if_block0.c();
      if_block0_anchor = empty();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
      if (if_block3)
        if_block3.c();
      br = element("br");
      create_component(invite_1.$$.fragment);
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      if_block0_anchor = empty();
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      if (if_block2)
        if_block2.l(nodes);
      if_block2_anchor = empty();
      if (if_block3)
        if_block3.l(nodes);
      br = claim_element(nodes, "BR", {});
      claim_component(invite_1.$$.fragment, nodes);
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, if_block0_anchor, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, if_block2_anchor, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert_hydration(target, br, anchor);
      mount_component(invite_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*invite_data*/
        ctx2[4].guild.vanityURLCode === /*invite_data*/
        ctx2[4].code
      ) {
        if (if_block0) {
          if (dirty & /*invite_data*/
          16) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_5(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*invite_data*/
        ctx2[4].expires
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*invite_data*/
          16) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_4(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (
        /*invite_data*/
        ctx2[4].stageInstance || /*invite_data*/
        ctx2[4].targetApplication || /*invite_data*/
        ctx2[4].targetUser
      ) {
        if (if_block2) {
          if (dirty & /*invite_data*/
          16) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_3(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (300 > /*invite_data*/
      ctx2[4].memberCount) {
        if (if_block3) {
          if (dirty & /*invite_data*/
          16) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_2(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(br.parentNode, br);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      const invite_1_changes = {};
      if (dirty & /*invite_data*/
      16)
        invite_1_changes.banner = /*invite_data*/
        ctx2[4].guild.splash ? `https://cdn.discordapp.com/splashes/${/*invite_data*/
        ctx2[4].guild.id}/${/*invite_data*/
        ctx2[4].guild.splash}?size=1024` : null;
      if (dirty & /*invite_data*/
      16)
        invite_1_changes.icon = `https://cdn.discordapp.com/icons/${/*invite_data*/
        ctx2[4].guild.id}/${/*invite_data*/
        ctx2[4].guild.icon}?size=256`;
      if (dirty & /*invite_data*/
      16)
        invite_1_changes.title = /*invite_data*/
        ctx2[4].guild.name;
      if (dirty & /*invite_data*/
      16)
        invite_1_changes.code = /*invite_data*/
        ctx2[4].code;
      invite_1.$set(invite_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      transition_in(if_block3);
      transition_in(invite_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      transition_out(if_block3);
      transition_out(invite_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(if_block0_anchor);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(if_block2_anchor);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach(br);
      destroy_component(invite_1, detaching);
    }
  };
}
function create_if_block_5(ctx) {
  let br;
  let callout;
  let current;
  callout = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      br = element("br");
      create_component(callout.$$.fragment);
    },
    l(nodes) {
      br = claim_element(nodes, "BR", {});
      claim_component(callout.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, br, anchor);
      mount_component(callout, target, anchor);
      current = true;
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
        detach(br);
      destroy_component(callout, detaching);
    }
  };
}
function create_default_slot_4(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Vanity URLs are not allowed!");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Vanity URLs are not allowed!");
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
function create_if_block_4(ctx) {
  let br;
  let callout;
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
      br = element("br");
      create_component(callout.$$.fragment);
    },
    l(nodes) {
      br = claim_element(nodes, "BR", {});
      claim_component(callout.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, br, anchor);
      mount_component(callout, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const callout_changes = {};
      if (dirty & /*$$scope, invite_data*/
      1040) {
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
        detach(br);
      destroy_component(callout, detaching);
    }
  };
}
function create_default_slot_3(ctx) {
  let p;
  let t0;
  let t1_value = new Date(
    /*invite_data*/
    ctx[4].expires
  ).toLocaleString() + "";
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("This invite expires on ");
      t1 = text(t1_value);
      t2 = text("! Please provide a permanent invite.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "This invite expires on ");
      t1 = claim_text(p_nodes, t1_value);
      t2 = claim_text(p_nodes, "! Please provide a permanent invite.");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, t1);
      append_hydration(p, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*invite_data*/
      16 && t1_value !== (t1_value = new Date(
        /*invite_data*/
        ctx2[4].expires
      ).toLocaleString() + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_3(ctx) {
  let br;
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
      br = element("br");
      create_component(callout.$$.fragment);
    },
    l(nodes) {
      br = claim_element(nodes, "BR", {});
      claim_component(callout.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, br, anchor);
      mount_component(callout, target, anchor);
      current = true;
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
        detach(br);
      destroy_component(callout, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Please provide an invite that does not point to a stage instance, application, or user stream.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Please provide an invite that does not point to a stage instance, application, or user stream.");
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
function create_if_block_2(ctx) {
  let br;
  let callout;
  let current;
  callout = new Callout({
    props: {
      style: "warn",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      br = element("br");
      create_component(callout.$$.fragment);
    },
    l(nodes) {
      br = claim_element(nodes, "BR", {});
      claim_component(callout.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, br, anchor);
      mount_component(callout, target, anchor);
      current = true;
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
        detach(br);
      destroy_component(callout, detaching);
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
      t0 = text("We ");
      b = element("b");
      t1 = text("recommend");
      t2 = text(" that your server has 300 members before you apply. This is not a strict requirement, but a suggested threshold so that we can be confident your community is developed and stable enough for long-term success.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "We ");
      b = claim_element(p_nodes, "B", {});
      var b_nodes = children(b);
      t1 = claim_text(b_nodes, "recommend");
      b_nodes.forEach(detach);
      t2 = claim_text(p_nodes, " that your server has 300 members before you apply. This is not a strict requirement, but a suggested threshold so that we can be confident your community is developed and stable enough for long-term success.");
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
  let p;
  let t0;
  let a;
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("Make sure you check our ");
      a = element("a");
      t1 = text("list of observers");
      t2 = text(" before giving permissions to whoever contacts you!");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Make sure you check our ");
      a = claim_element(p_nodes, "A", { href: true, target: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "list of observers");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, " before giving permissions to whoever contacts you!");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/contact");
      attr(a, "target", "_blank");
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
function create_fragment(ctx) {
  let div;
  let form_1;
  let h2;
  let t;
  let current_block_type_index;
  let if_block;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!/*data*/
    ctx2[0].user)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      form_1 = element("form");
      h2 = element("h2");
      t = text("TCN Application Form");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      form_1 = claim_element(div_nodes, "FORM", { id: true, method: true });
      var form_1_nodes = children(form_1);
      h2 = claim_element(form_1_nodes, "H2", {});
      var h2_nodes = children(h2);
      t = claim_text(h2_nodes, "TCN Application Form");
      h2_nodes.forEach(detach);
      if_block.l(form_1_nodes);
      form_1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(form_1, "id", "main");
      attr(form_1, "method", "post");
      attr(div, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, form_1);
      append_hydration(form_1, h2);
      append_hydration(h2, t);
      if_blocks[current_block_type_index].m(form_1, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          form_1,
          "submit",
          /*submit*/
          ctx[7]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
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
        if_block.m(form_1, null);
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
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  let { form } = $$props;
  let role;
  let invite = (form == null ? void 0 : form.invite) ?? "";
  let invite_data;
  const suppress = (e) => e.key === "Enter" && e.preventDefault();
  async function check_invite() {
    $$invalidate(3, invite = invite.trim());
    if (!(invite == null ? void 0 : invite.match(/^(https:\/\/)?discord(?:(?:app)?\.com\/invite|\.gg(?:\/invite)?)\/[\w-]{2,255}$/i)))
      return $$invalidate(4, invite_data = void 0);
    const request = await fetch(`/fetch-invite?code=${encodeURIComponent(invite.slice(invite.lastIndexOf("/") + 1))}`);
    if (!request.ok)
      return $$invalidate(4, invite_data = null);
    $$invalidate(4, invite_data = await request.json());
  }
  onMount(() => check_invite());
  function submit(e) {
    var _a;
    if (!invite_data || invite_data.guild.vanityURLCode === invite_data.code || invite_data.expires) {
      (_a = document.querySelector("[name=invite]")) == null ? void 0 : _a.scrollIntoView();
      e.preventDefault();
    }
  }
  function select_change_handler() {
    role = select_value(this);
    $$invalidate(2, role);
  }
  function input1_input_handler() {
    invite = this.value;
    $$invalidate(3, invite);
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
    role,
    invite,
    invite_data,
    suppress,
    check_invite,
    submit,
    select_change_handler,
    input1_input_handler
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
