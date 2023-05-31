import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../chunks/Callout-2d6b8933.js";
import { L as Linkable } from "../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot_4(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Emoji from non-TCN servers will not work by default due to changes in Discord's bot webhook permissions. To fix this, just create a webhook manually in the channel. You do not need to do anything else.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Emoji from non-TCN servers will not work by default due to changes in Discord's bot webhook permissions. To fix this, just create a webhook manually in the channel. You do not need to do anything else.");
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
  let t;
  return {
    c() {
      p = element("p");
      t = text("Your global channels cannot be used for anything else. All messages sent to the channel are relayed.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Your global channels cannot be used for anything else. All messages sent to the channel are relayed.");
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
function create_default_slot_2(ctx) {
  let p0;
  let t0;
  let b0;
  let t1;
  let t2;
  let p1;
  let t3;
  let b1;
  let t4;
  let t5;
  let p2;
  let t6;
  let b2;
  let t7;
  let t8;
  let p3;
  let t9;
  return {
    c() {
      p0 = element("p");
      t0 = text("To test that the channel works, send a message from your side and check another server. If it doesn't show up, ");
      b0 = element("b");
      t1 = text("View Channel");
      t2 = text(" is missing.");
      p1 = element("p");
      t3 = text("Then, send a message from the other side and check that it appears in your channel. If not, ");
      b1 = element("b");
      t4 = text("Manage Webhooks");
      t5 = text(" is missing.");
      p2 = element("p");
      t6 = text("Finally, delete the message from the other side and check that it disappears on your side. If not, ");
      b2 = element("b");
      t7 = text("Manage Messages");
      t8 = text(" is missing.");
      p3 = element("p");
      t9 = text("For staff channels, if you are not staff elsewhere, you may use the global channels in the TCN Hub to test.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "To test that the channel works, send a message from your side and check another server. If it doesn't show up, ");
      b0 = claim_element(p0_nodes, "B", {});
      var b0_nodes = children(b0);
      t1 = claim_text(b0_nodes, "View Channel");
      b0_nodes.forEach(detach);
      t2 = claim_text(p0_nodes, " is missing.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, "Then, send a message from the other side and check that it appears in your channel. If not, ");
      b1 = claim_element(p1_nodes, "B", {});
      var b1_nodes = children(b1);
      t4 = claim_text(b1_nodes, "Manage Webhooks");
      b1_nodes.forEach(detach);
      t5 = claim_text(p1_nodes, " is missing.");
      p1_nodes.forEach(detach);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t6 = claim_text(p2_nodes, "Finally, delete the message from the other side and check that it disappears on your side. If not, ");
      b2 = claim_element(p2_nodes, "B", {});
      var b2_nodes = children(b2);
      t7 = claim_text(b2_nodes, "Manage Messages");
      b2_nodes.forEach(detach);
      t8 = claim_text(p2_nodes, " is missing.");
      p2_nodes.forEach(detach);
      p3 = claim_element(nodes, "P", {});
      var p3_nodes = children(p3);
      t9 = claim_text(p3_nodes, "For staff channels, if you are not staff elsewhere, you may use the global channels in the TCN Hub to test.");
      p3_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      append_hydration(p0, b0);
      append_hydration(b0, t1);
      append_hydration(p0, t2);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t3);
      append_hydration(p1, b1);
      append_hydration(b1, t4);
      append_hydration(p1, t5);
      insert_hydration(target, p2, anchor);
      append_hydration(p2, t6);
      append_hydration(p2, b2);
      append_hydration(b2, t7);
      append_hydration(p2, t8);
      insert_hydration(target, p3, anchor);
      append_hydration(p3, t9);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p0);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(p3);
    }
  };
}
function create_default_slot_1(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text(`This command alerts all observers and can only be undone by an observer. Misuse of this command may result in loss of global chat privileges or other consequences. If you think it might be needed, don't be afraid to use it; we will discuss it with you if we think it was unnecessary, but don't play with it or use it for "testing" purposes.`);
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, `This command alerts all observers and can only be undone by an observer. Misuse of this command may result in loss of global chat privileges or other consequences. If you think it might be needed, don't be afraid to use it; we will discuss it with you if we think it was unnecessary, but don't play with it or use it for "testing" purposes.`);
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
  let ul0;
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
  let linkable1;
  let linkable2;
  let p1;
  let t8;
  let a;
  let t9;
  let t10;
  let linkable3;
  let p2;
  let t11;
  let ul1;
  let li3;
  let b3;
  let t12;
  let t13;
  let li4;
  let b4;
  let t14;
  let t15;
  let li5;
  let b5;
  let t16;
  let t17;
  let li6;
  let b6;
  let t18;
  let t19;
  let p3;
  let t20;
  let callout0;
  let linkable4;
  let callout1;
  let p4;
  let t21;
  let code0;
  let t22;
  let t23;
  let callout2;
  let linkable5;
  let p5;
  let t24;
  let code1;
  let t25;
  let t26;
  let linkable6;
  let linkable7;
  let p6;
  let t27;
  let b7;
  let t28;
  let t29;
  let b8;
  let t30;
  let t31;
  let b9;
  let t32;
  let t33;
  let p7;
  let t34;
  let code2;
  let t35;
  let t36;
  let linkable8;
  let p8;
  let t37;
  let code3;
  let t38;
  let t39;
  let b10;
  let t40;
  let t41;
  let p9;
  let t42;
  let p10;
  let t43;
  let code4;
  let t44;
  let t45;
  let code5;
  let t46;
  let t47;
  let p11;
  let t48;
  let code6;
  let t49;
  let t50;
  let linkable9;
  let callout3;
  let p12;
  let t51;
  let b11;
  let t52;
  let t53;
  let linkable10;
  let ul3;
  let li7;
  let code7;
  let t54;
  let t55;
  let li8;
  let code8;
  let t56;
  let t57;
  let b12;
  let t58;
  let t59;
  let li11;
  let code9;
  let t60;
  let t61;
  let ul2;
  let li9;
  let t62;
  let li10;
  let t63;
  let code10;
  let t64;
  let li12;
  let code11;
  let t65;
  let t66;
  let linkable11;
  let ul5;
  let li13;
  let code12;
  let t67;
  let t68;
  let b13;
  let t69;
  let t70;
  let li17;
  let code13;
  let t71;
  let t72;
  let ul4;
  let li14;
  let b14;
  let t73;
  let t74;
  let code14;
  let t75;
  let t76;
  let li15;
  let b15;
  let t77;
  let t78;
  let li16;
  let b16;
  let t79;
  let t80;
  let code15;
  let t81;
  let t82;
  let li18;
  let code16;
  let t83;
  let t84;
  let li19;
  let code17;
  let t85;
  let t86;
  let li20;
  let code18;
  let t87;
  let t88;
  let b17;
  let t89;
  let t90;
  let li21;
  let code19;
  let t91;
  let t92;
  let code20;
  let t93;
  let t94;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "what-is-global",
      e: "h2",
      value: "What is it?"
    }
  });
  linkable1 = new Linkable({
    props: { id: "setup", e: "h2", value: "Setup" }
  });
  linkable2 = new Linkable({
    props: {
      id: "adding-the-bot",
      e: "h3",
      value: "Adding the bot"
    }
  });
  linkable3 = new Linkable({
    props: {
      id: "permissions",
      e: "h3",
      value: "Permissions"
    }
  });
  callout0 = new Callout({
    props: {
      style: "warn",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  linkable4 = new Linkable({
    props: {
      id: "connecting",
      e: "h3",
      value: "Connecting"
    }
  });
  callout1 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  callout2 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  linkable5 = new Linkable({
    props: {
      id: "disconnecting",
      e: "h3",
      value: "Disconnecting"
    }
  });
  linkable6 = new Linkable({
    props: {
      id: "moderation",
      e: "h2",
      value: "Moderation"
    }
  });
  linkable7 = new Linkable({
    props: {
      id: "deleting",
      e: "h3",
      value: "Deleting Messages"
    }
  });
  linkable8 = new Linkable({
    props: { id: "banning", e: "h3", value: "Banning" }
  });
  linkable9 = new Linkable({
    props: {
      id: "panic-mode",
      e: "h3",
      value: "Panic Mode"
    }
  });
  callout3 = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  linkable10 = new Linkable({
    props: {
      id: "for-observers",
      e: "h3",
      value: "For Observers"
    }
  });
  linkable11 = new Linkable({
    props: {
      id: "other-commands",
      e: "h3",
      value: "Other Commands"
    }
  });
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Global Chat");
      create_component(linkable0.$$.fragment);
      p0 = element("p");
      t1 = text("Global chat is a system that connects channels across the TCN and allow users to chat with each other through it. There are three network-wide channels:");
      ul0 = element("ul");
      li0 = element("li");
      b0 = element("b");
      t2 = text("TCN");
      t3 = text(' - Public "general" channel which can be made accessible to all server members.');
      li1 = element("li");
      b1 = element("b");
      t4 = text("lounge");
      t5 = text(" - Staff general chat which can be made accessible to anyone who can access your server's staff chat.");
      li2 = element("li");
      b2 = element("b");
      t6 = text("office");
      t7 = text(" - Staff business channel which can be made accessible to your staff.");
      create_component(linkable1.$$.fragment);
      create_component(linkable2.$$.fragment);
      p1 = element("p");
      t8 = text("First, invite the bot to your server using ");
      a = element("a");
      t9 = text("this link");
      t10 = text(".");
      create_component(linkable3.$$.fragment);
      p2 = element("p");
      t11 = text("You need to ensure the bot has all of the following permissions in all global channels that you want to use:");
      ul1 = element("ul");
      li3 = element("li");
      b3 = element("b");
      t12 = text("View Channel:");
      t13 = text(" to be able to relay messages");
      li4 = element("li");
      b4 = element("b");
      t14 = text("Read Message History:");
      t15 = text(" to be able to fetch older messages for relaying deletion");
      li5 = element("li");
      b5 = element("b");
      t16 = text("Manage Webhooks:");
      t17 = text(" to be able to create a webhook / find your webhook for incoming messages");
      li6 = element("li");
      b6 = element("b");
      t18 = text("Manage Messages:");
      t19 = text(" to be able to cross-delete messages that were deleted elsewhere");
      p3 = element("p");
      t20 = text("Because of the possibility of spam or abusive content, if you do not allow the bot to delete messages, it will stop sending them as well.");
      create_component(callout0.$$.fragment);
      create_component(linkable4.$$.fragment);
      create_component(callout1.$$.fragment);
      p4 = element("p");
      t21 = text("Once your channel permissions are set up, use ");
      code0 = element("code");
      t22 = text("/connect");
      t23 = text(" and select the appropraite global channel. If you see any channels not mentioned above, do not connect to it unless you were given permission to. Global chat may be used by servers for things like event channels, so don't disrupt their channels.");
      create_component(callout2.$$.fragment);
      create_component(linkable5.$$.fragment);
      p5 = element("p");
      t24 = text("To disconnect, use ");
      code1 = element("code");
      t25 = text("/disconnect");
      t26 = text(" and the global channel will immediately stop relaying messages both ways.");
      create_component(linkable6.$$.fragment);
      create_component(linkable7.$$.fragment);
      p6 = element("p");
      t27 = text("When a message or any copy of it is deleted, all copies of it and the original are deleted. If this isn't working, make sure the bot has ");
      b7 = element("b");
      t28 = text("View Channel");
      t29 = text(", ");
      b8 = element("b");
      t30 = text("Read Message History");
      t31 = text(", and ");
      b9 = element("b");
      t32 = text("Manage Messages");
      t33 = text(" in all of your global channels.");
      p7 = element("p");
      t34 = text("If purging didn't work, you can use ");
      code2 = element("code");
      t35 = text("/purge");
      t36 = text(" with the message URL to make the bot try again.");
      create_component(linkable8.$$.fragment);
      p8 = element("p");
      t37 = text("Use ");
      code3 = element("code");
      t38 = text("/ban");
      t39 = text(" to ban a user from global chat. This makes the bot stop relaying messages from that user in the current global channel across all servers. You must have ");
      b10 = element("b");
      t40 = text("Ban Members");
      t41 = text(" but no hierarchy check is performed. Use of this command is logged, so use it responsibly.");
      p9 = element("p");
      t42 = text("Note that the ban is per-channel, so make sure you run it in the right channel. You should not be using this in the staff channels unless a staff member is causing serious disruption that must be immediately stopped; instead, reach out to the server's admins/owner and/or an observer.");
      p10 = element("p");
      t43 = text("To get the ID of the author of a message, right click the message and select ");
      code4 = element("code");
      t44 = text("Apps > user");
      t45 = text(" or run ");
      code5 = element("code");
      t46 = text("/user");
      t47 = text(" with the message URL (the URL of any copy of the message will work).");
      p11 = element("p");
      t48 = text("To unban a user, just use ");
      code6 = element("code");
      t49 = text("/unban");
      t50 = text(".");
      create_component(linkable9.$$.fragment);
      create_component(callout3.$$.fragment);
      p12 = element("p");
      t51 = text("If there is a raid or network-wide incident going on in global chat, you can use ");
      b11 = element("b");
      t52 = text("/panic");
      t53 = text(" to completely shut down the global channel. It will cease to relay messages from any server.");
      create_component(linkable10.$$.fragment);
      ul3 = element("ul");
      li7 = element("li");
      code7 = element("code");
      t54 = text("/globals list");
      t55 = text(" - show a list of existing global channels");
      li8 = element("li");
      code8 = element("code");
      t56 = text("/globals remove");
      t57 = text(" - delete a global channel (do ");
      b12 = element("b");
      t58 = text("not");
      t59 = text(" do this on channels unless it is agreed upon or it was a temporary channel that is no longer needed)");
      li11 = element("li");
      code9 = element("code");
      t60 = text("/globals add");
      t61 = text(" - create a new global channel with a name (required) and log channel (optional)");
      ul2 = element("ul");
      li9 = element("li");
      t62 = text("the log channel is where edits, deletions, bans/unbans, and connections/disconnections are logged");
      li10 = element("li");
      t63 = text("this command will not connect any channels, so you will need to connect the channel using ");
      code10 = element("code");
      t64 = text("/connect");
      li12 = element("li");
      code11 = element("code");
      t65 = text("/globals logchannel");
      t66 = text(" - change the log channel of a global channel");
      create_component(linkable11.$$.fragment);
      ul5 = element("ul");
      li13 = element("li");
      code12 = element("code");
      t67 = text("/faq");
      t68 = text(" - Show some information about the bot. If someone asks what global chat is or why everyone is a bot (fairly common), use this with the ");
      b13 = element("b");
      t69 = text("public: true");
      t70 = text(" option to show the info page.");
      li17 = element("li");
      code13 = element("code");
      t71 = text("/help");
      t72 = text(" - Show one of three help pages:");
      ul4 = element("ul");
      li14 = element("li");
      b14 = element("b");
      t73 = text("mods");
      t74 = text(" - Information relevant to moderators such as how to ban/unban users and ");
      code14 = element("code");
      t75 = text("/panic");
      t76 = text(".");
      li15 = element("li");
      b15 = element("b");
      t77 = text("admins");
      t78 = text(" - Information for server admins such as how to connect/disconnect channels.");
      li16 = element("li");
      b16 = element("b");
      t79 = text("execs");
      t80 = text(" - Information for observers such as how to create/delete global channels and ");
      code15 = element("code");
      t81 = text("/unpanic");
      t82 = text(".");
      li18 = element("li");
      code16 = element("code");
      t83 = text("/nickname");
      t84 = text(" - Set your global nickname. Normally, your display name (nickname, or if none, username) will be shown to other servers. If you set this, it will override your display name in all global channels from all servers.");
      li19 = element("li");
      code17 = element("code");
      t85 = text("/ping");
      t86 = text(" - If you think the bot is unresponsive, use this command to check its ping (response time).");
      li20 = element("li");
      code18 = element("code");
      t87 = text("/rules");
      t88 = text(" - Show the global chat rules. Individual server rules still apply and moderation may be done by individual server staff, but a baseline set of rules exists. Use ");
      b17 = element("b");
      t89 = text("public: true");
      t90 = text(" to show it publicly in the channel (it is relayed to other servers).");
      li21 = element("li");
      code19 = element("code");
      t91 = text("/user");
      t92 = text(" - Call this with a message link to get the ID of the author of the original message. You can also right-click the message and select ");
      code20 = element("code");
      t93 = text("Apps > user");
      t94 = text(" but this sometimes doesn't work due to Discord issues.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Global Chat");
      h1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "Global chat is a system that connects channels across the TCN and allow users to chat with each other through it. There are three network-wide channels:");
      p0_nodes.forEach(detach);
      ul0 = claim_element(div_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      b0 = claim_element(li0_nodes, "B", {});
      var b0_nodes = children(b0);
      t2 = claim_text(b0_nodes, "TCN");
      b0_nodes.forEach(detach);
      t3 = claim_text(li0_nodes, ' - Public "general" channel which can be made accessible to all server members.');
      li0_nodes.forEach(detach);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      b1 = claim_element(li1_nodes, "B", {});
      var b1_nodes = children(b1);
      t4 = claim_text(b1_nodes, "lounge");
      b1_nodes.forEach(detach);
      t5 = claim_text(li1_nodes, " - Staff general chat which can be made accessible to anyone who can access your server's staff chat.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul0_nodes, "LI", {});
      var li2_nodes = children(li2);
      b2 = claim_element(li2_nodes, "B", {});
      var b2_nodes = children(b2);
      t6 = claim_text(b2_nodes, "office");
      b2_nodes.forEach(detach);
      t7 = claim_text(li2_nodes, " - Staff business channel which can be made accessible to your staff.");
      li2_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div_nodes);
      claim_component(linkable2.$$.fragment, div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t8 = claim_text(p1_nodes, "First, invite the bot to your server using ");
      a = claim_element(p1_nodes, "A", { href: true });
      var a_nodes = children(a);
      t9 = claim_text(a_nodes, "this link");
      a_nodes.forEach(detach);
      t10 = claim_text(p1_nodes, ".");
      p1_nodes.forEach(detach);
      claim_component(linkable3.$$.fragment, div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t11 = claim_text(p2_nodes, "You need to ensure the bot has all of the following permissions in all global channels that you want to use:");
      p2_nodes.forEach(detach);
      ul1 = claim_element(div_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li3 = claim_element(ul1_nodes, "LI", {});
      var li3_nodes = children(li3);
      b3 = claim_element(li3_nodes, "B", {});
      var b3_nodes = children(b3);
      t12 = claim_text(b3_nodes, "View Channel:");
      b3_nodes.forEach(detach);
      t13 = claim_text(li3_nodes, " to be able to relay messages");
      li3_nodes.forEach(detach);
      li4 = claim_element(ul1_nodes, "LI", {});
      var li4_nodes = children(li4);
      b4 = claim_element(li4_nodes, "B", {});
      var b4_nodes = children(b4);
      t14 = claim_text(b4_nodes, "Read Message History:");
      b4_nodes.forEach(detach);
      t15 = claim_text(li4_nodes, " to be able to fetch older messages for relaying deletion");
      li4_nodes.forEach(detach);
      li5 = claim_element(ul1_nodes, "LI", {});
      var li5_nodes = children(li5);
      b5 = claim_element(li5_nodes, "B", {});
      var b5_nodes = children(b5);
      t16 = claim_text(b5_nodes, "Manage Webhooks:");
      b5_nodes.forEach(detach);
      t17 = claim_text(li5_nodes, " to be able to create a webhook / find your webhook for incoming messages");
      li5_nodes.forEach(detach);
      li6 = claim_element(ul1_nodes, "LI", {});
      var li6_nodes = children(li6);
      b6 = claim_element(li6_nodes, "B", {});
      var b6_nodes = children(b6);
      t18 = claim_text(b6_nodes, "Manage Messages:");
      b6_nodes.forEach(detach);
      t19 = claim_text(li6_nodes, " to be able to cross-delete messages that were deleted elsewhere");
      li6_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      t20 = claim_text(p3_nodes, "Because of the possibility of spam or abusive content, if you do not allow the bot to delete messages, it will stop sending them as well.");
      p3_nodes.forEach(detach);
      claim_component(callout0.$$.fragment, div_nodes);
      claim_component(linkable4.$$.fragment, div_nodes);
      claim_component(callout1.$$.fragment, div_nodes);
      p4 = claim_element(div_nodes, "P", {});
      var p4_nodes = children(p4);
      t21 = claim_text(p4_nodes, "Once your channel permissions are set up, use ");
      code0 = claim_element(p4_nodes, "CODE", {});
      var code0_nodes = children(code0);
      t22 = claim_text(code0_nodes, "/connect");
      code0_nodes.forEach(detach);
      t23 = claim_text(p4_nodes, " and select the appropraite global channel. If you see any channels not mentioned above, do not connect to it unless you were given permission to. Global chat may be used by servers for things like event channels, so don't disrupt their channels.");
      p4_nodes.forEach(detach);
      claim_component(callout2.$$.fragment, div_nodes);
      claim_component(linkable5.$$.fragment, div_nodes);
      p5 = claim_element(div_nodes, "P", {});
      var p5_nodes = children(p5);
      t24 = claim_text(p5_nodes, "To disconnect, use ");
      code1 = claim_element(p5_nodes, "CODE", {});
      var code1_nodes = children(code1);
      t25 = claim_text(code1_nodes, "/disconnect");
      code1_nodes.forEach(detach);
      t26 = claim_text(p5_nodes, " and the global channel will immediately stop relaying messages both ways.");
      p5_nodes.forEach(detach);
      claim_component(linkable6.$$.fragment, div_nodes);
      claim_component(linkable7.$$.fragment, div_nodes);
      p6 = claim_element(div_nodes, "P", {});
      var p6_nodes = children(p6);
      t27 = claim_text(p6_nodes, "When a message or any copy of it is deleted, all copies of it and the original are deleted. If this isn't working, make sure the bot has ");
      b7 = claim_element(p6_nodes, "B", {});
      var b7_nodes = children(b7);
      t28 = claim_text(b7_nodes, "View Channel");
      b7_nodes.forEach(detach);
      t29 = claim_text(p6_nodes, ", ");
      b8 = claim_element(p6_nodes, "B", {});
      var b8_nodes = children(b8);
      t30 = claim_text(b8_nodes, "Read Message History");
      b8_nodes.forEach(detach);
      t31 = claim_text(p6_nodes, ", and ");
      b9 = claim_element(p6_nodes, "B", {});
      var b9_nodes = children(b9);
      t32 = claim_text(b9_nodes, "Manage Messages");
      b9_nodes.forEach(detach);
      t33 = claim_text(p6_nodes, " in all of your global channels.");
      p6_nodes.forEach(detach);
      p7 = claim_element(div_nodes, "P", {});
      var p7_nodes = children(p7);
      t34 = claim_text(p7_nodes, "If purging didn't work, you can use ");
      code2 = claim_element(p7_nodes, "CODE", {});
      var code2_nodes = children(code2);
      t35 = claim_text(code2_nodes, "/purge");
      code2_nodes.forEach(detach);
      t36 = claim_text(p7_nodes, " with the message URL to make the bot try again.");
      p7_nodes.forEach(detach);
      claim_component(linkable8.$$.fragment, div_nodes);
      p8 = claim_element(div_nodes, "P", {});
      var p8_nodes = children(p8);
      t37 = claim_text(p8_nodes, "Use ");
      code3 = claim_element(p8_nodes, "CODE", {});
      var code3_nodes = children(code3);
      t38 = claim_text(code3_nodes, "/ban");
      code3_nodes.forEach(detach);
      t39 = claim_text(p8_nodes, " to ban a user from global chat. This makes the bot stop relaying messages from that user in the current global channel across all servers. You must have ");
      b10 = claim_element(p8_nodes, "B", {});
      var b10_nodes = children(b10);
      t40 = claim_text(b10_nodes, "Ban Members");
      b10_nodes.forEach(detach);
      t41 = claim_text(p8_nodes, " but no hierarchy check is performed. Use of this command is logged, so use it responsibly.");
      p8_nodes.forEach(detach);
      p9 = claim_element(div_nodes, "P", {});
      var p9_nodes = children(p9);
      t42 = claim_text(p9_nodes, "Note that the ban is per-channel, so make sure you run it in the right channel. You should not be using this in the staff channels unless a staff member is causing serious disruption that must be immediately stopped; instead, reach out to the server's admins/owner and/or an observer.");
      p9_nodes.forEach(detach);
      p10 = claim_element(div_nodes, "P", {});
      var p10_nodes = children(p10);
      t43 = claim_text(p10_nodes, "To get the ID of the author of a message, right click the message and select ");
      code4 = claim_element(p10_nodes, "CODE", {});
      var code4_nodes = children(code4);
      t44 = claim_text(code4_nodes, "Apps > user");
      code4_nodes.forEach(detach);
      t45 = claim_text(p10_nodes, " or run ");
      code5 = claim_element(p10_nodes, "CODE", {});
      var code5_nodes = children(code5);
      t46 = claim_text(code5_nodes, "/user");
      code5_nodes.forEach(detach);
      t47 = claim_text(p10_nodes, " with the message URL (the URL of any copy of the message will work).");
      p10_nodes.forEach(detach);
      p11 = claim_element(div_nodes, "P", {});
      var p11_nodes = children(p11);
      t48 = claim_text(p11_nodes, "To unban a user, just use ");
      code6 = claim_element(p11_nodes, "CODE", {});
      var code6_nodes = children(code6);
      t49 = claim_text(code6_nodes, "/unban");
      code6_nodes.forEach(detach);
      t50 = claim_text(p11_nodes, ".");
      p11_nodes.forEach(detach);
      claim_component(linkable9.$$.fragment, div_nodes);
      claim_component(callout3.$$.fragment, div_nodes);
      p12 = claim_element(div_nodes, "P", {});
      var p12_nodes = children(p12);
      t51 = claim_text(p12_nodes, "If there is a raid or network-wide incident going on in global chat, you can use ");
      b11 = claim_element(p12_nodes, "B", {});
      var b11_nodes = children(b11);
      t52 = claim_text(b11_nodes, "/panic");
      b11_nodes.forEach(detach);
      t53 = claim_text(p12_nodes, " to completely shut down the global channel. It will cease to relay messages from any server.");
      p12_nodes.forEach(detach);
      claim_component(linkable10.$$.fragment, div_nodes);
      ul3 = claim_element(div_nodes, "UL", {});
      var ul3_nodes = children(ul3);
      li7 = claim_element(ul3_nodes, "LI", {});
      var li7_nodes = children(li7);
      code7 = claim_element(li7_nodes, "CODE", {});
      var code7_nodes = children(code7);
      t54 = claim_text(code7_nodes, "/globals list");
      code7_nodes.forEach(detach);
      t55 = claim_text(li7_nodes, " - show a list of existing global channels");
      li7_nodes.forEach(detach);
      li8 = claim_element(ul3_nodes, "LI", {});
      var li8_nodes = children(li8);
      code8 = claim_element(li8_nodes, "CODE", {});
      var code8_nodes = children(code8);
      t56 = claim_text(code8_nodes, "/globals remove");
      code8_nodes.forEach(detach);
      t57 = claim_text(li8_nodes, " - delete a global channel (do ");
      b12 = claim_element(li8_nodes, "B", {});
      var b12_nodes = children(b12);
      t58 = claim_text(b12_nodes, "not");
      b12_nodes.forEach(detach);
      t59 = claim_text(li8_nodes, " do this on channels unless it is agreed upon or it was a temporary channel that is no longer needed)");
      li8_nodes.forEach(detach);
      li11 = claim_element(ul3_nodes, "LI", {});
      var li11_nodes = children(li11);
      code9 = claim_element(li11_nodes, "CODE", {});
      var code9_nodes = children(code9);
      t60 = claim_text(code9_nodes, "/globals add");
      code9_nodes.forEach(detach);
      t61 = claim_text(li11_nodes, " - create a new global channel with a name (required) and log channel (optional)");
      ul2 = claim_element(li11_nodes, "UL", {});
      var ul2_nodes = children(ul2);
      li9 = claim_element(ul2_nodes, "LI", {});
      var li9_nodes = children(li9);
      t62 = claim_text(li9_nodes, "the log channel is where edits, deletions, bans/unbans, and connections/disconnections are logged");
      li9_nodes.forEach(detach);
      li10 = claim_element(ul2_nodes, "LI", {});
      var li10_nodes = children(li10);
      t63 = claim_text(li10_nodes, "this command will not connect any channels, so you will need to connect the channel using ");
      code10 = claim_element(li10_nodes, "CODE", {});
      var code10_nodes = children(code10);
      t64 = claim_text(code10_nodes, "/connect");
      code10_nodes.forEach(detach);
      li10_nodes.forEach(detach);
      ul2_nodes.forEach(detach);
      li11_nodes.forEach(detach);
      li12 = claim_element(ul3_nodes, "LI", {});
      var li12_nodes = children(li12);
      code11 = claim_element(li12_nodes, "CODE", {});
      var code11_nodes = children(code11);
      t65 = claim_text(code11_nodes, "/globals logchannel");
      code11_nodes.forEach(detach);
      t66 = claim_text(li12_nodes, " - change the log channel of a global channel");
      li12_nodes.forEach(detach);
      ul3_nodes.forEach(detach);
      claim_component(linkable11.$$.fragment, div_nodes);
      ul5 = claim_element(div_nodes, "UL", {});
      var ul5_nodes = children(ul5);
      li13 = claim_element(ul5_nodes, "LI", {});
      var li13_nodes = children(li13);
      code12 = claim_element(li13_nodes, "CODE", {});
      var code12_nodes = children(code12);
      t67 = claim_text(code12_nodes, "/faq");
      code12_nodes.forEach(detach);
      t68 = claim_text(li13_nodes, " - Show some information about the bot. If someone asks what global chat is or why everyone is a bot (fairly common), use this with the ");
      b13 = claim_element(li13_nodes, "B", {});
      var b13_nodes = children(b13);
      t69 = claim_text(b13_nodes, "public: true");
      b13_nodes.forEach(detach);
      t70 = claim_text(li13_nodes, " option to show the info page.");
      li13_nodes.forEach(detach);
      li17 = claim_element(ul5_nodes, "LI", {});
      var li17_nodes = children(li17);
      code13 = claim_element(li17_nodes, "CODE", {});
      var code13_nodes = children(code13);
      t71 = claim_text(code13_nodes, "/help");
      code13_nodes.forEach(detach);
      t72 = claim_text(li17_nodes, " - Show one of three help pages:");
      ul4 = claim_element(li17_nodes, "UL", {});
      var ul4_nodes = children(ul4);
      li14 = claim_element(ul4_nodes, "LI", {});
      var li14_nodes = children(li14);
      b14 = claim_element(li14_nodes, "B", {});
      var b14_nodes = children(b14);
      t73 = claim_text(b14_nodes, "mods");
      b14_nodes.forEach(detach);
      t74 = claim_text(li14_nodes, " - Information relevant to moderators such as how to ban/unban users and ");
      code14 = claim_element(li14_nodes, "CODE", {});
      var code14_nodes = children(code14);
      t75 = claim_text(code14_nodes, "/panic");
      code14_nodes.forEach(detach);
      t76 = claim_text(li14_nodes, ".");
      li14_nodes.forEach(detach);
      li15 = claim_element(ul4_nodes, "LI", {});
      var li15_nodes = children(li15);
      b15 = claim_element(li15_nodes, "B", {});
      var b15_nodes = children(b15);
      t77 = claim_text(b15_nodes, "admins");
      b15_nodes.forEach(detach);
      t78 = claim_text(li15_nodes, " - Information for server admins such as how to connect/disconnect channels.");
      li15_nodes.forEach(detach);
      li16 = claim_element(ul4_nodes, "LI", {});
      var li16_nodes = children(li16);
      b16 = claim_element(li16_nodes, "B", {});
      var b16_nodes = children(b16);
      t79 = claim_text(b16_nodes, "execs");
      b16_nodes.forEach(detach);
      t80 = claim_text(li16_nodes, " - Information for observers such as how to create/delete global channels and ");
      code15 = claim_element(li16_nodes, "CODE", {});
      var code15_nodes = children(code15);
      t81 = claim_text(code15_nodes, "/unpanic");
      code15_nodes.forEach(detach);
      t82 = claim_text(li16_nodes, ".");
      li16_nodes.forEach(detach);
      ul4_nodes.forEach(detach);
      li17_nodes.forEach(detach);
      li18 = claim_element(ul5_nodes, "LI", {});
      var li18_nodes = children(li18);
      code16 = claim_element(li18_nodes, "CODE", {});
      var code16_nodes = children(code16);
      t83 = claim_text(code16_nodes, "/nickname");
      code16_nodes.forEach(detach);
      t84 = claim_text(li18_nodes, " - Set your global nickname. Normally, your display name (nickname, or if none, username) will be shown to other servers. If you set this, it will override your display name in all global channels from all servers.");
      li18_nodes.forEach(detach);
      li19 = claim_element(ul5_nodes, "LI", {});
      var li19_nodes = children(li19);
      code17 = claim_element(li19_nodes, "CODE", {});
      var code17_nodes = children(code17);
      t85 = claim_text(code17_nodes, "/ping");
      code17_nodes.forEach(detach);
      t86 = claim_text(li19_nodes, " - If you think the bot is unresponsive, use this command to check its ping (response time).");
      li19_nodes.forEach(detach);
      li20 = claim_element(ul5_nodes, "LI", {});
      var li20_nodes = children(li20);
      code18 = claim_element(li20_nodes, "CODE", {});
      var code18_nodes = children(code18);
      t87 = claim_text(code18_nodes, "/rules");
      code18_nodes.forEach(detach);
      t88 = claim_text(li20_nodes, " - Show the global chat rules. Individual server rules still apply and moderation may be done by individual server staff, but a baseline set of rules exists. Use ");
      b17 = claim_element(li20_nodes, "B", {});
      var b17_nodes = children(b17);
      t89 = claim_text(b17_nodes, "public: true");
      b17_nodes.forEach(detach);
      t90 = claim_text(li20_nodes, " to show it publicly in the channel (it is relayed to other servers).");
      li20_nodes.forEach(detach);
      li21 = claim_element(ul5_nodes, "LI", {});
      var li21_nodes = children(li21);
      code19 = claim_element(li21_nodes, "CODE", {});
      var code19_nodes = children(code19);
      t91 = claim_text(code19_nodes, "/user");
      code19_nodes.forEach(detach);
      t92 = claim_text(li21_nodes, " - Call this with a message link to get the ID of the author of the original message. You can also right-click the message and select ");
      code20 = claim_element(li21_nodes, "CODE", {});
      var code20_nodes = children(code20);
      t93 = claim_text(code20_nodes, "Apps > user");
      code20_nodes.forEach(detach);
      t94 = claim_text(li21_nodes, " but this sometimes doesn't work due to Discord issues.");
      li21_nodes.forEach(detach);
      ul5_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://discord.com/api/oauth2/authorize?client_id=905370006362140702&permissions=137976212544&scope=applications.commands%20bot");
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      mount_component(linkable0, div, null);
      append_hydration(div, p0);
      append_hydration(p0, t1);
      append_hydration(div, ul0);
      append_hydration(ul0, li0);
      append_hydration(li0, b0);
      append_hydration(b0, t2);
      append_hydration(li0, t3);
      append_hydration(ul0, li1);
      append_hydration(li1, b1);
      append_hydration(b1, t4);
      append_hydration(li1, t5);
      append_hydration(ul0, li2);
      append_hydration(li2, b2);
      append_hydration(b2, t6);
      append_hydration(li2, t7);
      mount_component(linkable1, div, null);
      mount_component(linkable2, div, null);
      append_hydration(div, p1);
      append_hydration(p1, t8);
      append_hydration(p1, a);
      append_hydration(a, t9);
      append_hydration(p1, t10);
      mount_component(linkable3, div, null);
      append_hydration(div, p2);
      append_hydration(p2, t11);
      append_hydration(div, ul1);
      append_hydration(ul1, li3);
      append_hydration(li3, b3);
      append_hydration(b3, t12);
      append_hydration(li3, t13);
      append_hydration(ul1, li4);
      append_hydration(li4, b4);
      append_hydration(b4, t14);
      append_hydration(li4, t15);
      append_hydration(ul1, li5);
      append_hydration(li5, b5);
      append_hydration(b5, t16);
      append_hydration(li5, t17);
      append_hydration(ul1, li6);
      append_hydration(li6, b6);
      append_hydration(b6, t18);
      append_hydration(li6, t19);
      append_hydration(div, p3);
      append_hydration(p3, t20);
      mount_component(callout0, div, null);
      mount_component(linkable4, div, null);
      mount_component(callout1, div, null);
      append_hydration(div, p4);
      append_hydration(p4, t21);
      append_hydration(p4, code0);
      append_hydration(code0, t22);
      append_hydration(p4, t23);
      mount_component(callout2, div, null);
      mount_component(linkable5, div, null);
      append_hydration(div, p5);
      append_hydration(p5, t24);
      append_hydration(p5, code1);
      append_hydration(code1, t25);
      append_hydration(p5, t26);
      mount_component(linkable6, div, null);
      mount_component(linkable7, div, null);
      append_hydration(div, p6);
      append_hydration(p6, t27);
      append_hydration(p6, b7);
      append_hydration(b7, t28);
      append_hydration(p6, t29);
      append_hydration(p6, b8);
      append_hydration(b8, t30);
      append_hydration(p6, t31);
      append_hydration(p6, b9);
      append_hydration(b9, t32);
      append_hydration(p6, t33);
      append_hydration(div, p7);
      append_hydration(p7, t34);
      append_hydration(p7, code2);
      append_hydration(code2, t35);
      append_hydration(p7, t36);
      mount_component(linkable8, div, null);
      append_hydration(div, p8);
      append_hydration(p8, t37);
      append_hydration(p8, code3);
      append_hydration(code3, t38);
      append_hydration(p8, t39);
      append_hydration(p8, b10);
      append_hydration(b10, t40);
      append_hydration(p8, t41);
      append_hydration(div, p9);
      append_hydration(p9, t42);
      append_hydration(div, p10);
      append_hydration(p10, t43);
      append_hydration(p10, code4);
      append_hydration(code4, t44);
      append_hydration(p10, t45);
      append_hydration(p10, code5);
      append_hydration(code5, t46);
      append_hydration(p10, t47);
      append_hydration(div, p11);
      append_hydration(p11, t48);
      append_hydration(p11, code6);
      append_hydration(code6, t49);
      append_hydration(p11, t50);
      mount_component(linkable9, div, null);
      mount_component(callout3, div, null);
      append_hydration(div, p12);
      append_hydration(p12, t51);
      append_hydration(p12, b11);
      append_hydration(b11, t52);
      append_hydration(p12, t53);
      mount_component(linkable10, div, null);
      append_hydration(div, ul3);
      append_hydration(ul3, li7);
      append_hydration(li7, code7);
      append_hydration(code7, t54);
      append_hydration(li7, t55);
      append_hydration(ul3, li8);
      append_hydration(li8, code8);
      append_hydration(code8, t56);
      append_hydration(li8, t57);
      append_hydration(li8, b12);
      append_hydration(b12, t58);
      append_hydration(li8, t59);
      append_hydration(ul3, li11);
      append_hydration(li11, code9);
      append_hydration(code9, t60);
      append_hydration(li11, t61);
      append_hydration(li11, ul2);
      append_hydration(ul2, li9);
      append_hydration(li9, t62);
      append_hydration(ul2, li10);
      append_hydration(li10, t63);
      append_hydration(li10, code10);
      append_hydration(code10, t64);
      append_hydration(ul3, li12);
      append_hydration(li12, code11);
      append_hydration(code11, t65);
      append_hydration(li12, t66);
      mount_component(linkable11, div, null);
      append_hydration(div, ul5);
      append_hydration(ul5, li13);
      append_hydration(li13, code12);
      append_hydration(code12, t67);
      append_hydration(li13, t68);
      append_hydration(li13, b13);
      append_hydration(b13, t69);
      append_hydration(li13, t70);
      append_hydration(ul5, li17);
      append_hydration(li17, code13);
      append_hydration(code13, t71);
      append_hydration(li17, t72);
      append_hydration(li17, ul4);
      append_hydration(ul4, li14);
      append_hydration(li14, b14);
      append_hydration(b14, t73);
      append_hydration(li14, t74);
      append_hydration(li14, code14);
      append_hydration(code14, t75);
      append_hydration(li14, t76);
      append_hydration(ul4, li15);
      append_hydration(li15, b15);
      append_hydration(b15, t77);
      append_hydration(li15, t78);
      append_hydration(ul4, li16);
      append_hydration(li16, b16);
      append_hydration(b16, t79);
      append_hydration(li16, t80);
      append_hydration(li16, code15);
      append_hydration(code15, t81);
      append_hydration(li16, t82);
      append_hydration(ul5, li18);
      append_hydration(li18, code16);
      append_hydration(code16, t83);
      append_hydration(li18, t84);
      append_hydration(ul5, li19);
      append_hydration(li19, code17);
      append_hydration(code17, t85);
      append_hydration(li19, t86);
      append_hydration(ul5, li20);
      append_hydration(li20, code18);
      append_hydration(code18, t87);
      append_hydration(li20, t88);
      append_hydration(li20, b17);
      append_hydration(b17, t89);
      append_hydration(li20, t90);
      append_hydration(ul5, li21);
      append_hydration(li21, code19);
      append_hydration(code19, t91);
      append_hydration(li21, t92);
      append_hydration(li21, code20);
      append_hydration(code20, t93);
      append_hydration(li21, t94);
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
      const callout2_changes = {};
      if (dirty & /*$$scope*/
      1) {
        callout2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout2.$set(callout2_changes);
      const callout3_changes = {};
      if (dirty & /*$$scope*/
      1) {
        callout3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout3.$set(callout3_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(linkable0.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(linkable3.$$.fragment, local);
      transition_in(callout0.$$.fragment, local);
      transition_in(linkable4.$$.fragment, local);
      transition_in(callout1.$$.fragment, local);
      transition_in(callout2.$$.fragment, local);
      transition_in(linkable5.$$.fragment, local);
      transition_in(linkable6.$$.fragment, local);
      transition_in(linkable7.$$.fragment, local);
      transition_in(linkable8.$$.fragment, local);
      transition_in(linkable9.$$.fragment, local);
      transition_in(callout3.$$.fragment, local);
      transition_in(linkable10.$$.fragment, local);
      transition_in(linkable11.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      transition_out(callout0.$$.fragment, local);
      transition_out(linkable4.$$.fragment, local);
      transition_out(callout1.$$.fragment, local);
      transition_out(callout2.$$.fragment, local);
      transition_out(linkable5.$$.fragment, local);
      transition_out(linkable6.$$.fragment, local);
      transition_out(linkable7.$$.fragment, local);
      transition_out(linkable8.$$.fragment, local);
      transition_out(linkable9.$$.fragment, local);
      transition_out(callout3.$$.fragment, local);
      transition_out(linkable10.$$.fragment, local);
      transition_out(linkable11.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(linkable0);
      destroy_component(linkable1);
      destroy_component(linkable2);
      destroy_component(linkable3);
      destroy_component(callout0);
      destroy_component(linkable4);
      destroy_component(callout1);
      destroy_component(callout2);
      destroy_component(linkable5);
      destroy_component(linkable6);
      destroy_component(linkable7);
      destroy_component(linkable8);
      destroy_component(linkable9);
      destroy_component(callout3);
      destroy_component(linkable10);
      destroy_component(linkable11);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/quickstart#global", "Quickstart"],
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
