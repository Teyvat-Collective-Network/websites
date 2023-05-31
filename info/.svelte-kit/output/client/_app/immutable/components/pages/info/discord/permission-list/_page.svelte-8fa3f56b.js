import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, q as text, r as claim_text, G as append_hydration, H as listen, u as set_data, C as noop } from "../../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../../chunks/Callout-2d6b8933.js";
import { N as Navigation } from "../../../../../chunks/Navigation-82debefb.js";
import { L as Linkable } from "../../../../../chunks/Linkable-8089c9ad.js";
function create_fragment$1(ctx) {
  let linkable;
  let current;
  linkable = new Linkable({
    props: {
      e: "h5",
      id: (
        /*code*/
        ctx[1]
      ),
      value: (
        /*name*/
        ctx[0] + " (<code>" + /*code*/
        ctx[1] + "</code>)" + /*open*/
        (ctx[3] ? ` - <code>1 << ${/*bit*/
        ctx[2]} = ${2 ** /*bit*/
        ctx[2]}</code>` : "")
      )
    }
  });
  return {
    c() {
      create_component(linkable.$$.fragment);
    },
    l(nodes) {
      claim_component(linkable.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(linkable, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const linkable_changes = {};
      if (dirty & /*code*/
      2)
        linkable_changes.id = /*code*/
        ctx2[1];
      if (dirty & /*name, code, open, bit*/
      15)
        linkable_changes.value = /*name*/
        ctx2[0] + " (<code>" + /*code*/
        ctx2[1] + "</code>)" + /*open*/
        (ctx2[3] ? ` - <code>1 << ${/*bit*/
        ctx2[2]} = ${2 ** /*bit*/
        ctx2[2]}</code>` : "");
      linkable.$set(linkable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(linkable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(linkable, detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { name } = $$props;
  let { code = name.toUpperCase().replaceAll(/\s+/g, "_") } = $$props;
  let { bit } = $$props;
  let { open } = $$props;
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
    if ("code" in $$props2)
      $$invalidate(1, code = $$props2.code);
    if ("bit" in $$props2)
      $$invalidate(2, bit = $$props2.bit);
    if ("open" in $$props2)
      $$invalidate(3, open = $$props2.open);
  };
  return [name, code, bit, open];
}
class Permission extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { name: 0, code: 1, bit: 2, open: 3 });
  }
}
function create_default_slot_12(ctx) {
  let p0;
  let b0;
  let t0;
  let t1;
  let p1;
  let t2;
  let b1;
  let t3;
  let t4;
  return {
    c() {
      p0 = element("p");
      b0 = element("b");
      t0 = text("Role Hierarchy");
      t1 = text(" refers to the order of roles. A user's position is based on their highest role, except for the server owner, who is always at the very top of the hierarchy.");
      p1 = element("p");
      t2 = text("Note that it is based on the highest role in general, ");
      b1 = element("b");
      t3 = text("not");
      t4 = text(" the highest role with the specified permission. Therefore, a mod with a cosmetic role that is higher than the mod role can ban mods without that role, even if the cosmetic role carries no permissions.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      b0 = claim_element(p0_nodes, "B", {});
      var b0_nodes = children(b0);
      t0 = claim_text(b0_nodes, "Role Hierarchy");
      b0_nodes.forEach(detach);
      t1 = claim_text(p0_nodes, " refers to the order of roles. A user's position is based on their highest role, except for the server owner, who is always at the very top of the hierarchy.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "Note that it is based on the highest role in general, ");
      b1 = claim_element(p1_nodes, "B", {});
      var b1_nodes = children(b1);
      t3 = claim_text(b1_nodes, "not");
      b1_nodes.forEach(detach);
      t4 = claim_text(p1_nodes, " the highest role with the specified permission. Therefore, a mod with a cosmetic role that is higher than the mod role can ban mods without that role, even if the cosmetic role carries no permissions.");
      p1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, b0);
      append_hydration(b0, t0);
      append_hydration(p0, t1);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t2);
      append_hydration(p1, b1);
      append_hydration(b1, t3);
      append_hydration(p1, t4);
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
function create_default_slot_11(ctx) {
  let p;
  let t0;
  let a;
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("This does not allow users to add bots - that requires ");
      a = element("a");
      t1 = text("Manage Guild");
      t2 = text(".");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "This does not allow users to add bots - that requires ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Manage Guild");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, ".");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "#MANAGE_GUILD");
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
function create_default_slot_10(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("This is a dangerous permission to grant! Administrators gain permission to do anything - all permissions, as well as access to all channels. They are not immune to moderation except for timeouts, but deny overrides will have no effect on them.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "This is a dangerous permission to grant! Administrators gain permission to do anything - all permissions, as well as access to all channels. They are not immune to moderation except for timeouts, but deny overrides will have no effect on them.");
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
function create_default_slot_9(ctx) {
  let p;
  let t0;
  let a;
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("This permission does not allow users to edit channel overrides; that is part of ");
      a = element("a");
      t1 = text("Manage Roles");
      t2 = text(".");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "This permission does not allow users to edit channel overrides; that is part of ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Manage Roles");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, ".");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "#MANAGE_ROLES");
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
function create_default_slot_8(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("This does not allow users to delete the server, change the 2FA requirement for moderation, or apply for Discord partnership. Those are only available to the server owner.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "This does not allow users to delete the server, change the 2FA requirement for moderation, or apply for Discord partnership. Those are only available to the server owner.");
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
function create_default_slot_7(ctx) {
  let p0;
  let t0;
  let p1;
  let t1;
  return {
    c() {
      p0 = element("p");
      t0 = text("This permission is not needed to add to an existing reaction, e.g. in the case of reaction role prompts. Users who are timed out or have not passed membership screening cannot do this.");
      p1 = element("p");
      t1 = text("Users can always remove their own reactions.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "This permission is not needed to add to an existing reaction, e.g. in the case of reaction role prompts. Users who are timed out or have not passed membership screening cannot do this.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t1 = claim_text(p1_nodes, "Users can always remove their own reactions.");
      p1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t1);
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
function create_default_slot_6(ctx) {
  let p;
  let t0;
  let a;
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("The ability to see messages that were sent when the user was offline or the channel was unfocused is controlled by ");
      a = element("a");
      t1 = text("Read Message History");
      t2 = text(".");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "The ability to see messages that were sent when the user was offline or the channel was unfocused is controlled by ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Read Message History");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, ".");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "#READ_MESSAGE_HISTORY");
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
function create_default_slot_5(ctx) {
  let p;
  let t0;
  let a;
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("To talk in threads and forum posts, users need ");
      a = element("a");
      t1 = text("Send Messages In Threads");
      t2 = text(" instead.");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "To talk in threads and forum posts, users need ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Send Messages In Threads");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, " instead.");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "#SEND_MESSAGES_IN_THREADS");
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
function create_default_slot_4(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Unlike how self-deafening works, a user can be force-deafened but still allowed to speak. This can be used to disable music bots' ability to hear, which is useful if you are concerned about spying.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Unlike how self-deafening works, a user can be force-deafened but still allowed to speak. This can be used to disable music bots' ability to hear, which is useful if you are concerned about spying.");
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
  let p0;
  let t0;
  let code;
  let t1;
  let t2;
  let p1;
  let t3;
  return {
    c() {
      p0 = element("p");
      t0 = text("This permission is not needed for the bot to support application commands; that is the ");
      code = element("code");
      t1 = text("application.commands");
      t2 = text(" scope set when inviting the bot. If you are not seeing a bot's commands and you gave it this scope, you likely have too many bots; if you have over 50 bots, some will no longer be able to register commands.");
      p1 = element("p");
      t3 = text("In fact, this permission currently does nothing for bots.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "This permission is not needed for the bot to support application commands; that is the ");
      code = claim_element(p0_nodes, "CODE", {});
      var code_nodes = children(code);
      t1 = claim_text(code_nodes, "application.commands");
      code_nodes.forEach(detach);
      t2 = claim_text(p0_nodes, " scope set when inviting the bot. If you are not seeing a bot's commands and you gave it this scope, you likely have too many bots; if you have over 50 bots, some will no longer be able to register commands.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, "In fact, this permission currently does nothing for bots.");
      p1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      append_hydration(p0, code);
      append_hydration(code, t1);
      append_hydration(p0, t2);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t3);
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
function create_default_slot_2(ctx) {
  let p;
  let t0;
  let a;
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("To create forum posts and talk in text and text-in-voice channels, users need ");
      a = element("a");
      t1 = text("Send Messages");
      t2 = text(".");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "To create forum posts and talk in text and text-in-voice channels, users need ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Send Messages");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, ".");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "#SEND_MESSAGES");
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
function create_default_slot_1(ctx) {
  let p;
  let a;
  let t0;
  let t1;
  return {
    c() {
      p = element("p");
      a = element("a");
      t0 = text("Administrators");
      t1 = text(" cannot be timed out. If a user is timed out and gains the permission, their timeout will be canceled. Even if an administrator could be timed out, it would take no effect.");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, "Administrators");
      a_nodes.forEach(detach);
      t1 = claim_text(p_nodes, " cannot be timed out. If a user is timed out and gains the permission, their timeout will be canceled. Even if an administrator could be timed out, it would take no effect.");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "#ADMINISRTATOR");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, a);
      append_hydration(a, t0);
      append_hydration(p, t1);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_default_slot(ctx) {
  let div1;
  let h1;
  let t0;
  let p0;
  let a0;
  let t1_value = (
    /*open*/
    ctx[0] ? "Hide" : "Show"
  );
  let t1;
  let t2;
  let callout0;
  let div0;
  let permission0;
  let p1;
  let b0;
  let t3;
  let p2;
  let t4;
  let callout1;
  let permission1;
  let p3;
  let b1;
  let t5;
  let p4;
  let t6;
  let permission2;
  let p5;
  let b2;
  let t7;
  let p6;
  let t8;
  let p7;
  let t9;
  let p8;
  let t10;
  let permission3;
  let p9;
  let b3;
  let t11;
  let p10;
  let t12;
  let callout2;
  let permission4;
  let p11;
  let b4;
  let t13;
  let p12;
  let t14;
  let callout3;
  let permission5;
  let p13;
  let b5;
  let t15;
  let p14;
  let t16;
  let callout4;
  let permission6;
  let p15;
  let b6;
  let t17;
  let p16;
  let t18;
  let callout5;
  let permission7;
  let p17;
  let b7;
  let t19;
  let p18;
  let t20;
  let permission8;
  let p19;
  let b8;
  let t21;
  let p20;
  let t22;
  let permission9;
  let p21;
  let b9;
  let t23;
  let p22;
  let t24;
  let permission10;
  let p23;
  let b10;
  let t25;
  let p24;
  let t26;
  let callout6;
  let permission11;
  let p25;
  let b11;
  let t27;
  let p26;
  let t28;
  let callout7;
  let permission12;
  let p27;
  let b12;
  let t29;
  let p28;
  let t30;
  let code0;
  let t31;
  let t32;
  let permission13;
  let p29;
  let b13;
  let t33;
  let p30;
  let t34;
  let b14;
  let t35;
  let t36;
  let permission14;
  let p31;
  let b15;
  let t37;
  let p32;
  let t38;
  let code1;
  let t39;
  let t40;
  let permission15;
  let p33;
  let b16;
  let t41;
  let p34;
  let t42;
  let permission16;
  let p35;
  let b17;
  let t43;
  let p36;
  let t44;
  let p37;
  let t45;
  let permission17;
  let p38;
  let b18;
  let t46;
  let p39;
  let t47;
  let code2;
  let t48;
  let t49;
  let code3;
  let t50;
  let t51;
  let b19;
  let t52;
  let t53;
  let b20;
  let t54;
  let t55;
  let p40;
  let t56;
  let code4;
  let t57;
  let t58;
  let permission18;
  let p41;
  let b21;
  let t59;
  let p42;
  let t60;
  let permission19;
  let p43;
  let b22;
  let t61;
  let p44;
  let t62;
  let permission20;
  let p45;
  let b23;
  let t63;
  let p46;
  let t64;
  let a1;
  let t65;
  let t66;
  let permission21;
  let p47;
  let b24;
  let t67;
  let p48;
  let t68;
  let permission22;
  let p49;
  let b25;
  let t69;
  let p50;
  let t70;
  let a2;
  let t71;
  let t72;
  let b26;
  let t73;
  let t74;
  let permission23;
  let p51;
  let b27;
  let t75;
  let p52;
  let t76;
  let b28;
  let t77;
  let t78;
  let callout8;
  let permission24;
  let p53;
  let b29;
  let t79;
  let p54;
  let t80;
  let a3;
  let t81;
  let t82;
  let b30;
  let t83;
  let t84;
  let permission25;
  let p55;
  let b31;
  let t85;
  let p56;
  let t86;
  let permission26;
  let p57;
  let b32;
  let t87;
  let p58;
  let t88;
  let permission27;
  let p59;
  let b33;
  let t89;
  let p60;
  let t90;
  let permission28;
  let p61;
  let b34;
  let t91;
  let p62;
  let t92;
  let p63;
  let t93;
  let permission29;
  let p64;
  let b35;
  let t94;
  let p65;
  let t95;
  let permission30;
  let p66;
  let b36;
  let t96;
  let p67;
  let t97;
  let permission31;
  let p68;
  let b37;
  let t98;
  let p69;
  let t99;
  let callout9;
  let permission32;
  let p70;
  let b38;
  let t100;
  let p71;
  let t101;
  let permission33;
  let p72;
  let b39;
  let t102;
  let p73;
  let t103;
  let permission34;
  let p74;
  let b40;
  let t104;
  let p75;
  let t105;
  let permission35;
  let p76;
  let b41;
  let t106;
  let p77;
  let t107;
  let permission36;
  let p78;
  let b42;
  let t108;
  let p79;
  let t109;
  let a4;
  let t110;
  let t111;
  let permission37;
  let p80;
  let b43;
  let t112;
  let p81;
  let t113;
  let permission38;
  let p82;
  let b44;
  let t114;
  let p83;
  let t115;
  let callout10;
  let permission39;
  let p84;
  let b45;
  let t116;
  let p85;
  let t117;
  let permission40;
  let p86;
  let b46;
  let t118;
  let p87;
  let t119;
  let a5;
  let t120;
  let t121;
  let a6;
  let t122;
  let t123;
  let callout11;
  let current;
  let mounted;
  let dispose;
  callout0 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_12] },
      $$scope: { ctx }
    }
  });
  permission0 = new Permission({
    props: {
      code: "CREATE_INSTANT_INVITE",
      name: "Create Invite",
      bit: 0,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  callout1 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_11] },
      $$scope: { ctx }
    }
  });
  permission1 = new Permission({
    props: {
      name: "Kick Members",
      bit: 1,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission2 = new Permission({
    props: {
      name: "Ban Members",
      bit: 2,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission3 = new Permission({
    props: {
      name: "Administrator",
      bit: 3,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  callout2 = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_10] },
      $$scope: { ctx }
    }
  });
  permission4 = new Permission({
    props: {
      name: "Manage Channels",
      bit: 4,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  callout3 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  permission5 = new Permission({
    props: {
      code: "MANAGE_GUILD",
      name: "Manage Server",
      bit: 5,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  callout4 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  permission6 = new Permission({
    props: {
      name: "Add Reactions",
      bit: 6,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  callout5 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  permission7 = new Permission({
    props: {
      name: "View Audit Log",
      bit: 7,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission8 = new Permission({
    props: {
      code: "PRIORITY_SPEAKER",
      name: "Use Priority Speaker",
      bit: 8,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission9 = new Permission({
    props: {
      name: "Stream",
      bit: 9,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission10 = new Permission({
    props: {
      name: "View Channel",
      bit: 10,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  callout6 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  permission11 = new Permission({
    props: {
      name: "Send Messages",
      bit: 11,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  callout7 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  permission12 = new Permission({
    props: {
      code: "SEND_TTS_MESSAGES",
      name: "Send Text-To-Speech Messages",
      bit: 12,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission13 = new Permission({
    props: {
      name: "Manage Messages",
      bit: 13,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission14 = new Permission({
    props: {
      name: "Embed Links",
      bit: 14,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission15 = new Permission({
    props: {
      name: "Attach Files",
      bit: 15,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission16 = new Permission({
    props: {
      name: "Read Message History",
      bit: 16,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission17 = new Permission({
    props: {
      code: "MENTION_EVERYONE",
      name: "Mention <code>@everyone</code>, <code>@here</code>, and All Roles",
      bit: 17,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission18 = new Permission({
    props: {
      name: "Use External Emojis",
      bit: 18,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission19 = new Permission({
    props: {
      code: "VIEW_GUILD_INSIGHTS",
      name: "View Server Insights",
      bit: 19,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission20 = new Permission({
    props: {
      name: "Connect",
      bit: 20,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission21 = new Permission({
    props: {
      name: "Speak",
      bit: 21,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission22 = new Permission({
    props: {
      name: "Mute Members",
      bit: 22,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission23 = new Permission({
    props: {
      name: "Deafen Members",
      bit: 23,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  callout8 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  permission24 = new Permission({
    props: {
      name: "Move Members",
      bit: 24,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission25 = new Permission({
    props: {
      code: "USE_VAD",
      name: "Use Voice Activity",
      bit: 25,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission26 = new Permission({
    props: {
      name: "Change Nickname",
      bit: 26,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission27 = new Permission({
    props: {
      name: "Manage Nicknames",
      bit: 27,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission28 = new Permission({
    props: {
      name: "Manage Roles",
      bit: 28,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission29 = new Permission({
    props: {
      name: "Manage Webhooks",
      bit: 29,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission30 = new Permission({
    props: {
      name: "Manage Emojis and Stickers",
      bit: 30,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission31 = new Permission({
    props: {
      name: "Use Application Commands",
      bit: 31,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  callout9 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  permission32 = new Permission({
    props: {
      name: "Request To Speak",
      bit: 32,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission33 = new Permission({
    props: {
      name: "Manage Events",
      bit: 33,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission34 = new Permission({
    props: {
      name: "Manage Threads",
      bit: 34,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission35 = new Permission({
    props: {
      name: "Create Public Threads",
      bit: 35,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission36 = new Permission({
    props: {
      name: "Create Private Threads",
      bit: 36,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission37 = new Permission({
    props: {
      name: "Use External Stickers",
      bit: 37,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission38 = new Permission({
    props: {
      name: "Send Messages in Threads",
      bit: 38,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  callout10 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  permission39 = new Permission({
    props: {
      code: "USE_EMBEDDED_ACTIVITIES",
      name: "Use Activities",
      bit: 39,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  permission40 = new Permission({
    props: {
      code: "MODERATE_MEMBERS",
      name: "Timeout Members",
      bit: 40,
      open: (
        /*open*/
        ctx[0]
      )
    }
  });
  callout11 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div1 = element("div");
      h1 = element("h1");
      t0 = text("Permission List");
      p0 = element("p");
      a0 = element("a");
      t1 = text(t1_value);
      t2 = text(" permission bits");
      create_component(callout0.$$.fragment);
      div0 = element("div");
      create_component(permission0.$$.fragment);
      p1 = element("p");
      b0 = element("b");
      t3 = text("Text, Voice, Stage");
      p2 = element("p");
      t4 = text("Allows users to create invite links to the server, which other users can use to join the server. Users do not need this permission to share existing invite links, including the vanity URL, only to create new invites.");
      create_component(callout1.$$.fragment);
      create_component(permission1.$$.fragment);
      p3 = element("p");
      b1 = element("b");
      t5 = text("Server-Wide");
      p4 = element("p");
      t6 = text("Allows users to kick members from the server, instantly removing them from the server but not preventing them from rejoining. This is subject to role hierarchy.");
      create_component(permission2.$$.fragment);
      p5 = element("p");
      b2 = element("b");
      t7 = text("Server-Wide");
      p6 = element("p");
      t8 = text("Allows users to ban members from the server, preventing them from rejoining the server and also banning their IP.");
      p7 = element("p");
      t9 = text("Allows users to unban members, allow them to rejoin the server (if they have an invite; unbanning does not re-add members).");
      p8 = element("p");
      t10 = text("Bans are permanent unless revoked. Users who aren't in the server can be banned to prevent them from joining. This is subject to role hierarchy, and non-members are considered underneath everyone.");
      create_component(permission3.$$.fragment);
      p9 = element("p");
      b3 = element("b");
      t11 = text("Server-Wide");
      p10 = element("p");
      t12 = text("Grants users all permissions in the server and in all channels. Also prevents users from being timed out by anyone. This is still subject to role hierarchy, so admins cannot kick/ban anyone not below them and can be kicked/banned by anyone above them.");
      create_component(callout2.$$.fragment);
      create_component(permission4.$$.fragment);
      p11 = element("p");
      b4 = element("b");
      t13 = text("Text, Voice, Stage");
      p12 = element("p");
      t14 = text("Allows users to create, edit, and delete channels. Editing channels includes changing the channel's name, topic, bitrate, video quality, user limit, region, slowmode, auto-archive duration for threads, etc.");
      create_component(callout3.$$.fragment);
      create_component(permission5.$$.fragment);
      p13 = element("p");
      b5 = element("b");
      t15 = text("Server-Wide");
      p14 = element("p");
      t16 = text("Allows users to edit server properties such as the name, icon, banner, etc. Also allows users to add applications to the server (e.g. bots). Also allows users to configure built-in AutoMod and users with this permission always bypass AutoMod.");
      create_component(callout4.$$.fragment);
      create_component(permission6.$$.fragment);
      p15 = element("p");
      b6 = element("b");
      t17 = text("Text, Voice");
      p16 = element("p");
      t18 = text("Allows users to add new emoji reactions to messages.");
      create_component(callout5.$$.fragment);
      create_component(permission7.$$.fragment);
      p17 = element("p");
      b7 = element("b");
      t19 = text("Server-Wide");
      p18 = element("p");
      t20 = text("Allows users to see the audit log which keeps track of moderation and administrative actions for a certain amount of time. They can see all actions, even those that they do not have permission to perform.");
      create_component(permission8.$$.fragment);
      p19 = element("p");
      b8 = element("b");
      t21 = text("Voice");
      p20 = element("p");
      t22 = text("Allows users to enable Push-To-Talk Priority Speaker mode, which causes all other users in a voice channel to have their volume reduces while the user is using priority mode.");
      create_component(permission9.$$.fragment);
      p21 = element("p");
      b9 = element("b");
      t23 = text("Voice");
      p22 = element("p");
      t24 = text("Allows users to stream in a voice channel, including screensharing and using the video camera.");
      create_component(permission10.$$.fragment);
      p23 = element("p");
      b10 = element("b");
      t25 = text("Text, Voice, Stage");
      p24 = element("p");
      t26 = text("Allows users to see channels and see incoming messages while focused on the channel. Users can see category channels if they can see at least one channel in it, and seeing a category does not automatically allow them to see any or all channels in it.");
      create_component(callout6.$$.fragment);
      create_component(permission11.$$.fragment);
      p25 = element("p");
      b11 = element("b");
      t27 = text("Text, Voice");
      p26 = element("p");
      t28 = text("Allows users to send messages in text and text-in-voice channels that they can view. Also allows users to create forum posts but not to talk in them.");
      create_component(callout7.$$.fragment);
      create_component(permission12.$$.fragment);
      p27 = element("p");
      b12 = element("b");
      t29 = text("Text, Voice");
      p28 = element("p");
      t30 = text("Allows users to use ");
      code0 = element("code");
      t31 = text("/tts");
      t32 = text(" which sends a message that is read aloud to everyone focused on the channel.");
      create_component(permission13.$$.fragment);
      p29 = element("p");
      b13 = element("b");
      t33 = text("Text, Voice");
      p30 = element("p");
      t34 = text("Allows users to delete other users' messages, pin messages, publish other users' messages in announcement channels, and remove embeds from other users' messages. Except for pinning messages, the other three are always available for one's own messages. This is ");
      b14 = element("b");
      t35 = text("not");
      t36 = text(" subject to role hierarchy.");
      create_component(permission14.$$.fragment);
      p31 = element("p");
      b15 = element("b");
      t37 = text("Text, Voice");
      p32 = element("p");
      t38 = text("Links that users send will show embeds if possible and the user has not suppressed embeds using ");
      code1 = element("code");
      t39 = text("<...>");
      t40 = text(". For bots, this is necessary for them to send custom embeds in messages.");
      create_component(permission15.$$.fragment);
      p33 = element("p");
      b16 = element("b");
      t41 = text("Text, Voice");
      p34 = element("p");
      t42 = text("Allows users to upload files in messages they send. This is not limited to images; users can upload most types of files.");
      create_component(permission16.$$.fragment);
      p35 = element("p");
      b17 = element("b");
      t43 = text("Text, Voice");
      p36 = element("p");
      t44 = text("Allows users to view messages in channels that they can view, even if they were not focused on the channel at the time, and allows them to search back through all past messages.");
      p37 = element("p");
      t45 = text('Without this permission, users will see "You do not have permission to view the history of this channel." and will only be able to see messages received by their client while they were in that channel.');
      create_component(permission17.$$.fragment);
      p38 = element("p");
      b18 = element("b");
      t46 = text("Text, Voice, Stage");
      p39 = element("p");
      t47 = text("Allows users to use ");
      code2 = element("code");
      t48 = text("@everyone");
      t49 = text(" to ping all server members who can see the channel, ");
      code3 = element("code");
      t50 = text("@here");
      t51 = text(' to ping all online members who can see the channel, and ping any role regardless of if it has the "Allow anyone to ');
      b19 = element("b");
      t52 = text("@mention");
      t53 = text(' this role" setting enabled. This is ');
      b20 = element("b");
      t54 = text("not");
      t55 = text(" subject to role hierarchy.");
      p40 = element("p");
      t56 = text("In stage channels, this allows users to alert ");
      code4 = element("code");
      t57 = text("@everyone");
      t58 = text(" when starting an instance.");
      create_component(permission18.$$.fragment);
      p41 = element("p");
      b21 = element("b");
      t59 = text("Text, Voice");
      p42 = element("p");
      t60 = text("Allows users to use emojis from other servers in messages and reactions (if they have Nitro or are a bot).");
      create_component(permission19.$$.fragment);
      p43 = element("p");
      b22 = element("b");
      t61 = text("Server-Wide");
      p44 = element("p");
      t62 = text("Allows users to see the server insights page, which provides information about server health, members joining and leaving, which invites they are using, member retention, participant message count, etc.");
      create_component(permission20.$$.fragment);
      p45 = element("p");
      b23 = element("b");
      t63 = text("Voice, Stage");
      p46 = element("p");
      t64 = text("Allows users to join voice and stage channels that they can see. Being able to speak is controlled by ");
      a1 = element("a");
      t65 = text("Speak");
      t66 = text(" but they can listen unless deafened.");
      create_component(permission21.$$.fragment);
      p47 = element("p");
      b24 = element("b");
      t67 = text("Voice");
      p48 = element("p");
      t68 = text("Allows users to speak in voice channels that they are connected to. This does not allow users to speak in stage channels; stage moderators are appointed separately per stage channel (via the channel permission settings) and choose who is allowed to speak.");
      create_component(permission22.$$.fragment);
      p49 = element("p");
      b25 = element("b");
      t69 = text("Voice, Stage");
      p50 = element("p");
      t70 = text("Allows users to force-mute users (including themselves), preventing them from speaking in any channel regardless of if they have the ");
      a2 = element("a");
      t71 = text("Speak");
      t72 = text(" permission. Also allows users to undo force-mutes, including on themselves. Users who have muted themselves cannot be muted by anyone else. This is ");
      b26 = element("b");
      t73 = text("not");
      t74 = text(" subject to role hierarchy.");
      create_component(permission23.$$.fragment);
      p51 = element("p");
      b27 = element("b");
      t75 = text("Voice, Stage");
      p52 = element("p");
      t76 = text("Allows users to force-deafen users (including themselves), preventing them from hearing what is happening in voice or stage channels. Also allows users to undo force-deafens, including on themselves. Users who have deafened themselves cannot be undeafened by anyone else. This is ");
      b28 = element("b");
      t77 = text("not");
      t78 = text(" subject to role hierarchy.");
      create_component(callout8.$$.fragment);
      create_component(permission24.$$.fragment);
      p53 = element("p");
      b29 = element("b");
      t79 = text("Voice, Stage");
      p54 = element("p");
      t80 = text("Allows users to move members who are already in a voice channel in this server into another voice channel. The user performing this action must have ");
      a3 = element("a");
      t81 = text("Connect");
      t82 = text(" in the target channel, but the target user does not need to be able to see or join it on their own. Users cannot be connected by another user and can never be moved between servers even if the user has this permission in both servers. This is ");
      b30 = element("b");
      t83 = text("not");
      t84 = text(" subject to role hierarchy.");
      create_component(permission25.$$.fragment);
      p55 = element("p");
      b31 = element("b");
      t85 = text("Voice");
      p56 = element("p");
      t86 = text("Allows users to use voice activity detection mode. Without this permission, users can only use Push-To-Talk.");
      create_component(permission26.$$.fragment);
      p57 = element("p");
      b32 = element("b");
      t87 = text("Server-Wide");
      p58 = element("p");
      t88 = text("Allows users to change their own nickname.");
      create_component(permission27.$$.fragment);
      p59 = element("p");
      b33 = element("b");
      t89 = text("Server-Wide");
      p60 = element("p");
      t90 = text("Allows users to change other members' nicknames. This is subject to role hierarchy.");
      create_component(permission28.$$.fragment);
      p61 = element("p");
      b34 = element("b");
      t91 = text("Text, Voice, Stage");
      p62 = element("p");
      t92 = text("Allows users to create, edit, delete, add, and remove roles that are below them in role hierarchy (however, adding/removing roles can be done to members above them in hierarchy).");
      p63 = element("p");
      t93 = text("Allows users to edit channel overrides for roles that are below them and permissions that they have.");
      create_component(permission29.$$.fragment);
      p64 = element("p");
      b35 = element("b");
      t94 = text("Text, Voice");
      p65 = element("p");
      t95 = text("Allows users to create, edit, and delete webhooks, as well as view a list of webhooks and get their URLs.");
      create_component(permission30.$$.fragment);
      p66 = element("p");
      b36 = element("b");
      t96 = text("Server-Wide");
      p67 = element("p");
      t97 = text("Allows users to upload, rename, and delete emojis and stickers. Also allows bots to control which roles can use emojis, which is a little-known feature that isn't very useful and isn't supported by most bots.");
      create_component(permission31.$$.fragment);
      p68 = element("p");
      b37 = element("b");
      t98 = text("Text, Voice");
      p69 = element("p");
      t99 = text('Allows users to use slash commands and context menu commands (right clicking a message or user and selecting "Apps").');
      create_component(callout9.$$.fragment);
      create_component(permission32.$$.fragment);
      p70 = element("p");
      b38 = element("b");
      t100 = text("Stage");
      p71 = element("p");
      t101 = text("Allows users to request to become a speaker in stage channels, which can be approved or denied by stage moderators.");
      create_component(permission33.$$.fragment);
      p72 = element("p");
      b39 = element("b");
      t102 = text("Voice, Stage");
      p73 = element("p");
      t103 = text("Allows users to create, edit, and delete server events, including starting and ending them.");
      create_component(permission34.$$.fragment);
      p74 = element("p");
      b40 = element("b");
      t104 = text("Text");
      p75 = element("p");
      t105 = text("Allows users to edit, archive, unarchive, lock, unlock, and delete threads and view all private threads.");
      create_component(permission35.$$.fragment);
      p76 = element("p");
      b41 = element("b");
      t106 = text("Text");
      p77 = element("p");
      t107 = text("Allows users to create public threads (threads that all users can see).");
      create_component(permission36.$$.fragment);
      p78 = element("p");
      b42 = element("b");
      t108 = text("Text");
      p79 = element("p");
      t109 = text("Allows users to create private threads, which can only be seen by users with ");
      a4 = element("a");
      t110 = text("Manage Threads");
      t111 = text(" and users who are explicitly invited to the thread.");
      create_component(permission37.$$.fragment);
      p80 = element("p");
      b43 = element("b");
      t112 = text("Text, Voice");
      p81 = element("p");
      t113 = text("Allows users to send messages with stickers from other servers.");
      create_component(permission38.$$.fragment);
      p82 = element("p");
      b44 = element("b");
      t114 = text("Text");
      p83 = element("p");
      t115 = text("Allows users to send messages in threads and forum posts.");
      create_component(callout10.$$.fragment);
      create_component(permission39.$$.fragment);
      p84 = element("p");
      b45 = element("b");
      t116 = text("Voice");
      p85 = element("p");
      t117 = text("Allows users to use activities such as YouTube's Watch Together in voice channels.");
      create_component(permission40.$$.fragment);
      p86 = element("p");
      b46 = element("b");
      t118 = text("Server-Wide");
      p87 = element("p");
      t119 = text("Allows users to timeout other members, disabling all permissions except ");
      a5 = element("a");
      t120 = text("View Channel");
      t121 = text(" and ");
      a6 = element("a");
      t122 = text("Read Message History");
      t123 = text(". Some other features like adding to existing reactions or using message components (buttons and dropdowns) are also disabled.");
      create_component(callout11.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { id: true });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Permission List");
      h1_nodes.forEach(detach);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, t1_value);
      t2 = claim_text(a0_nodes, " permission bits");
      a0_nodes.forEach(detach);
      p0_nodes.forEach(detach);
      claim_component(callout0.$$.fragment, div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(permission0.$$.fragment, div0_nodes);
      p1 = claim_element(div0_nodes, "P", {});
      var p1_nodes = children(p1);
      b0 = claim_element(p1_nodes, "B", {});
      var b0_nodes = children(b0);
      t3 = claim_text(b0_nodes, "Text, Voice, Stage");
      b0_nodes.forEach(detach);
      p1_nodes.forEach(detach);
      p2 = claim_element(div0_nodes, "P", {});
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, "Allows users to create invite links to the server, which other users can use to join the server. Users do not need this permission to share existing invite links, including the vanity URL, only to create new invites.");
      p2_nodes.forEach(detach);
      claim_component(callout1.$$.fragment, div0_nodes);
      claim_component(permission1.$$.fragment, div0_nodes);
      p3 = claim_element(div0_nodes, "P", {});
      var p3_nodes = children(p3);
      b1 = claim_element(p3_nodes, "B", {});
      var b1_nodes = children(b1);
      t5 = claim_text(b1_nodes, "Server-Wide");
      b1_nodes.forEach(detach);
      p3_nodes.forEach(detach);
      p4 = claim_element(div0_nodes, "P", {});
      var p4_nodes = children(p4);
      t6 = claim_text(p4_nodes, "Allows users to kick members from the server, instantly removing them from the server but not preventing them from rejoining. This is subject to role hierarchy.");
      p4_nodes.forEach(detach);
      claim_component(permission2.$$.fragment, div0_nodes);
      p5 = claim_element(div0_nodes, "P", {});
      var p5_nodes = children(p5);
      b2 = claim_element(p5_nodes, "B", {});
      var b2_nodes = children(b2);
      t7 = claim_text(b2_nodes, "Server-Wide");
      b2_nodes.forEach(detach);
      p5_nodes.forEach(detach);
      p6 = claim_element(div0_nodes, "P", {});
      var p6_nodes = children(p6);
      t8 = claim_text(p6_nodes, "Allows users to ban members from the server, preventing them from rejoining the server and also banning their IP.");
      p6_nodes.forEach(detach);
      p7 = claim_element(div0_nodes, "P", {});
      var p7_nodes = children(p7);
      t9 = claim_text(p7_nodes, "Allows users to unban members, allow them to rejoin the server (if they have an invite; unbanning does not re-add members).");
      p7_nodes.forEach(detach);
      p8 = claim_element(div0_nodes, "P", {});
      var p8_nodes = children(p8);
      t10 = claim_text(p8_nodes, "Bans are permanent unless revoked. Users who aren't in the server can be banned to prevent them from joining. This is subject to role hierarchy, and non-members are considered underneath everyone.");
      p8_nodes.forEach(detach);
      claim_component(permission3.$$.fragment, div0_nodes);
      p9 = claim_element(div0_nodes, "P", {});
      var p9_nodes = children(p9);
      b3 = claim_element(p9_nodes, "B", {});
      var b3_nodes = children(b3);
      t11 = claim_text(b3_nodes, "Server-Wide");
      b3_nodes.forEach(detach);
      p9_nodes.forEach(detach);
      p10 = claim_element(div0_nodes, "P", {});
      var p10_nodes = children(p10);
      t12 = claim_text(p10_nodes, "Grants users all permissions in the server and in all channels. Also prevents users from being timed out by anyone. This is still subject to role hierarchy, so admins cannot kick/ban anyone not below them and can be kicked/banned by anyone above them.");
      p10_nodes.forEach(detach);
      claim_component(callout2.$$.fragment, div0_nodes);
      claim_component(permission4.$$.fragment, div0_nodes);
      p11 = claim_element(div0_nodes, "P", {});
      var p11_nodes = children(p11);
      b4 = claim_element(p11_nodes, "B", {});
      var b4_nodes = children(b4);
      t13 = claim_text(b4_nodes, "Text, Voice, Stage");
      b4_nodes.forEach(detach);
      p11_nodes.forEach(detach);
      p12 = claim_element(div0_nodes, "P", {});
      var p12_nodes = children(p12);
      t14 = claim_text(p12_nodes, "Allows users to create, edit, and delete channels. Editing channels includes changing the channel's name, topic, bitrate, video quality, user limit, region, slowmode, auto-archive duration for threads, etc.");
      p12_nodes.forEach(detach);
      claim_component(callout3.$$.fragment, div0_nodes);
      claim_component(permission5.$$.fragment, div0_nodes);
      p13 = claim_element(div0_nodes, "P", {});
      var p13_nodes = children(p13);
      b5 = claim_element(p13_nodes, "B", {});
      var b5_nodes = children(b5);
      t15 = claim_text(b5_nodes, "Server-Wide");
      b5_nodes.forEach(detach);
      p13_nodes.forEach(detach);
      p14 = claim_element(div0_nodes, "P", {});
      var p14_nodes = children(p14);
      t16 = claim_text(p14_nodes, "Allows users to edit server properties such as the name, icon, banner, etc. Also allows users to add applications to the server (e.g. bots). Also allows users to configure built-in AutoMod and users with this permission always bypass AutoMod.");
      p14_nodes.forEach(detach);
      claim_component(callout4.$$.fragment, div0_nodes);
      claim_component(permission6.$$.fragment, div0_nodes);
      p15 = claim_element(div0_nodes, "P", {});
      var p15_nodes = children(p15);
      b6 = claim_element(p15_nodes, "B", {});
      var b6_nodes = children(b6);
      t17 = claim_text(b6_nodes, "Text, Voice");
      b6_nodes.forEach(detach);
      p15_nodes.forEach(detach);
      p16 = claim_element(div0_nodes, "P", {});
      var p16_nodes = children(p16);
      t18 = claim_text(p16_nodes, "Allows users to add new emoji reactions to messages.");
      p16_nodes.forEach(detach);
      claim_component(callout5.$$.fragment, div0_nodes);
      claim_component(permission7.$$.fragment, div0_nodes);
      p17 = claim_element(div0_nodes, "P", {});
      var p17_nodes = children(p17);
      b7 = claim_element(p17_nodes, "B", {});
      var b7_nodes = children(b7);
      t19 = claim_text(b7_nodes, "Server-Wide");
      b7_nodes.forEach(detach);
      p17_nodes.forEach(detach);
      p18 = claim_element(div0_nodes, "P", {});
      var p18_nodes = children(p18);
      t20 = claim_text(p18_nodes, "Allows users to see the audit log which keeps track of moderation and administrative actions for a certain amount of time. They can see all actions, even those that they do not have permission to perform.");
      p18_nodes.forEach(detach);
      claim_component(permission8.$$.fragment, div0_nodes);
      p19 = claim_element(div0_nodes, "P", {});
      var p19_nodes = children(p19);
      b8 = claim_element(p19_nodes, "B", {});
      var b8_nodes = children(b8);
      t21 = claim_text(b8_nodes, "Voice");
      b8_nodes.forEach(detach);
      p19_nodes.forEach(detach);
      p20 = claim_element(div0_nodes, "P", {});
      var p20_nodes = children(p20);
      t22 = claim_text(p20_nodes, "Allows users to enable Push-To-Talk Priority Speaker mode, which causes all other users in a voice channel to have their volume reduces while the user is using priority mode.");
      p20_nodes.forEach(detach);
      claim_component(permission9.$$.fragment, div0_nodes);
      p21 = claim_element(div0_nodes, "P", {});
      var p21_nodes = children(p21);
      b9 = claim_element(p21_nodes, "B", {});
      var b9_nodes = children(b9);
      t23 = claim_text(b9_nodes, "Voice");
      b9_nodes.forEach(detach);
      p21_nodes.forEach(detach);
      p22 = claim_element(div0_nodes, "P", {});
      var p22_nodes = children(p22);
      t24 = claim_text(p22_nodes, "Allows users to stream in a voice channel, including screensharing and using the video camera.");
      p22_nodes.forEach(detach);
      claim_component(permission10.$$.fragment, div0_nodes);
      p23 = claim_element(div0_nodes, "P", {});
      var p23_nodes = children(p23);
      b10 = claim_element(p23_nodes, "B", {});
      var b10_nodes = children(b10);
      t25 = claim_text(b10_nodes, "Text, Voice, Stage");
      b10_nodes.forEach(detach);
      p23_nodes.forEach(detach);
      p24 = claim_element(div0_nodes, "P", {});
      var p24_nodes = children(p24);
      t26 = claim_text(p24_nodes, "Allows users to see channels and see incoming messages while focused on the channel. Users can see category channels if they can see at least one channel in it, and seeing a category does not automatically allow them to see any or all channels in it.");
      p24_nodes.forEach(detach);
      claim_component(callout6.$$.fragment, div0_nodes);
      claim_component(permission11.$$.fragment, div0_nodes);
      p25 = claim_element(div0_nodes, "P", {});
      var p25_nodes = children(p25);
      b11 = claim_element(p25_nodes, "B", {});
      var b11_nodes = children(b11);
      t27 = claim_text(b11_nodes, "Text, Voice");
      b11_nodes.forEach(detach);
      p25_nodes.forEach(detach);
      p26 = claim_element(div0_nodes, "P", {});
      var p26_nodes = children(p26);
      t28 = claim_text(p26_nodes, "Allows users to send messages in text and text-in-voice channels that they can view. Also allows users to create forum posts but not to talk in them.");
      p26_nodes.forEach(detach);
      claim_component(callout7.$$.fragment, div0_nodes);
      claim_component(permission12.$$.fragment, div0_nodes);
      p27 = claim_element(div0_nodes, "P", {});
      var p27_nodes = children(p27);
      b12 = claim_element(p27_nodes, "B", {});
      var b12_nodes = children(b12);
      t29 = claim_text(b12_nodes, "Text, Voice");
      b12_nodes.forEach(detach);
      p27_nodes.forEach(detach);
      p28 = claim_element(div0_nodes, "P", {});
      var p28_nodes = children(p28);
      t30 = claim_text(p28_nodes, "Allows users to use ");
      code0 = claim_element(p28_nodes, "CODE", {});
      var code0_nodes = children(code0);
      t31 = claim_text(code0_nodes, "/tts");
      code0_nodes.forEach(detach);
      t32 = claim_text(p28_nodes, " which sends a message that is read aloud to everyone focused on the channel.");
      p28_nodes.forEach(detach);
      claim_component(permission13.$$.fragment, div0_nodes);
      p29 = claim_element(div0_nodes, "P", {});
      var p29_nodes = children(p29);
      b13 = claim_element(p29_nodes, "B", {});
      var b13_nodes = children(b13);
      t33 = claim_text(b13_nodes, "Text, Voice");
      b13_nodes.forEach(detach);
      p29_nodes.forEach(detach);
      p30 = claim_element(div0_nodes, "P", {});
      var p30_nodes = children(p30);
      t34 = claim_text(p30_nodes, "Allows users to delete other users' messages, pin messages, publish other users' messages in announcement channels, and remove embeds from other users' messages. Except for pinning messages, the other three are always available for one's own messages. This is ");
      b14 = claim_element(p30_nodes, "B", {});
      var b14_nodes = children(b14);
      t35 = claim_text(b14_nodes, "not");
      b14_nodes.forEach(detach);
      t36 = claim_text(p30_nodes, " subject to role hierarchy.");
      p30_nodes.forEach(detach);
      claim_component(permission14.$$.fragment, div0_nodes);
      p31 = claim_element(div0_nodes, "P", {});
      var p31_nodes = children(p31);
      b15 = claim_element(p31_nodes, "B", {});
      var b15_nodes = children(b15);
      t37 = claim_text(b15_nodes, "Text, Voice");
      b15_nodes.forEach(detach);
      p31_nodes.forEach(detach);
      p32 = claim_element(div0_nodes, "P", {});
      var p32_nodes = children(p32);
      t38 = claim_text(p32_nodes, "Links that users send will show embeds if possible and the user has not suppressed embeds using ");
      code1 = claim_element(p32_nodes, "CODE", {});
      var code1_nodes = children(code1);
      t39 = claim_text(code1_nodes, "<...>");
      code1_nodes.forEach(detach);
      t40 = claim_text(p32_nodes, ". For bots, this is necessary for them to send custom embeds in messages.");
      p32_nodes.forEach(detach);
      claim_component(permission15.$$.fragment, div0_nodes);
      p33 = claim_element(div0_nodes, "P", {});
      var p33_nodes = children(p33);
      b16 = claim_element(p33_nodes, "B", {});
      var b16_nodes = children(b16);
      t41 = claim_text(b16_nodes, "Text, Voice");
      b16_nodes.forEach(detach);
      p33_nodes.forEach(detach);
      p34 = claim_element(div0_nodes, "P", {});
      var p34_nodes = children(p34);
      t42 = claim_text(p34_nodes, "Allows users to upload files in messages they send. This is not limited to images; users can upload most types of files.");
      p34_nodes.forEach(detach);
      claim_component(permission16.$$.fragment, div0_nodes);
      p35 = claim_element(div0_nodes, "P", {});
      var p35_nodes = children(p35);
      b17 = claim_element(p35_nodes, "B", {});
      var b17_nodes = children(b17);
      t43 = claim_text(b17_nodes, "Text, Voice");
      b17_nodes.forEach(detach);
      p35_nodes.forEach(detach);
      p36 = claim_element(div0_nodes, "P", {});
      var p36_nodes = children(p36);
      t44 = claim_text(p36_nodes, "Allows users to view messages in channels that they can view, even if they were not focused on the channel at the time, and allows them to search back through all past messages.");
      p36_nodes.forEach(detach);
      p37 = claim_element(div0_nodes, "P", {});
      var p37_nodes = children(p37);
      t45 = claim_text(p37_nodes, 'Without this permission, users will see "You do not have permission to view the history of this channel." and will only be able to see messages received by their client while they were in that channel.');
      p37_nodes.forEach(detach);
      claim_component(permission17.$$.fragment, div0_nodes);
      p38 = claim_element(div0_nodes, "P", {});
      var p38_nodes = children(p38);
      b18 = claim_element(p38_nodes, "B", {});
      var b18_nodes = children(b18);
      t46 = claim_text(b18_nodes, "Text, Voice, Stage");
      b18_nodes.forEach(detach);
      p38_nodes.forEach(detach);
      p39 = claim_element(div0_nodes, "P", {});
      var p39_nodes = children(p39);
      t47 = claim_text(p39_nodes, "Allows users to use ");
      code2 = claim_element(p39_nodes, "CODE", {});
      var code2_nodes = children(code2);
      t48 = claim_text(code2_nodes, "@everyone");
      code2_nodes.forEach(detach);
      t49 = claim_text(p39_nodes, " to ping all server members who can see the channel, ");
      code3 = claim_element(p39_nodes, "CODE", {});
      var code3_nodes = children(code3);
      t50 = claim_text(code3_nodes, "@here");
      code3_nodes.forEach(detach);
      t51 = claim_text(p39_nodes, ' to ping all online members who can see the channel, and ping any role regardless of if it has the "Allow anyone to ');
      b19 = claim_element(p39_nodes, "B", {});
      var b19_nodes = children(b19);
      t52 = claim_text(b19_nodes, "@mention");
      b19_nodes.forEach(detach);
      t53 = claim_text(p39_nodes, ' this role" setting enabled. This is ');
      b20 = claim_element(p39_nodes, "B", {});
      var b20_nodes = children(b20);
      t54 = claim_text(b20_nodes, "not");
      b20_nodes.forEach(detach);
      t55 = claim_text(p39_nodes, " subject to role hierarchy.");
      p39_nodes.forEach(detach);
      p40 = claim_element(div0_nodes, "P", {});
      var p40_nodes = children(p40);
      t56 = claim_text(p40_nodes, "In stage channels, this allows users to alert ");
      code4 = claim_element(p40_nodes, "CODE", {});
      var code4_nodes = children(code4);
      t57 = claim_text(code4_nodes, "@everyone");
      code4_nodes.forEach(detach);
      t58 = claim_text(p40_nodes, " when starting an instance.");
      p40_nodes.forEach(detach);
      claim_component(permission18.$$.fragment, div0_nodes);
      p41 = claim_element(div0_nodes, "P", {});
      var p41_nodes = children(p41);
      b21 = claim_element(p41_nodes, "B", {});
      var b21_nodes = children(b21);
      t59 = claim_text(b21_nodes, "Text, Voice");
      b21_nodes.forEach(detach);
      p41_nodes.forEach(detach);
      p42 = claim_element(div0_nodes, "P", {});
      var p42_nodes = children(p42);
      t60 = claim_text(p42_nodes, "Allows users to use emojis from other servers in messages and reactions (if they have Nitro or are a bot).");
      p42_nodes.forEach(detach);
      claim_component(permission19.$$.fragment, div0_nodes);
      p43 = claim_element(div0_nodes, "P", {});
      var p43_nodes = children(p43);
      b22 = claim_element(p43_nodes, "B", {});
      var b22_nodes = children(b22);
      t61 = claim_text(b22_nodes, "Server-Wide");
      b22_nodes.forEach(detach);
      p43_nodes.forEach(detach);
      p44 = claim_element(div0_nodes, "P", {});
      var p44_nodes = children(p44);
      t62 = claim_text(p44_nodes, "Allows users to see the server insights page, which provides information about server health, members joining and leaving, which invites they are using, member retention, participant message count, etc.");
      p44_nodes.forEach(detach);
      claim_component(permission20.$$.fragment, div0_nodes);
      p45 = claim_element(div0_nodes, "P", {});
      var p45_nodes = children(p45);
      b23 = claim_element(p45_nodes, "B", {});
      var b23_nodes = children(b23);
      t63 = claim_text(b23_nodes, "Voice, Stage");
      b23_nodes.forEach(detach);
      p45_nodes.forEach(detach);
      p46 = claim_element(div0_nodes, "P", {});
      var p46_nodes = children(p46);
      t64 = claim_text(p46_nodes, "Allows users to join voice and stage channels that they can see. Being able to speak is controlled by ");
      a1 = claim_element(p46_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t65 = claim_text(a1_nodes, "Speak");
      a1_nodes.forEach(detach);
      t66 = claim_text(p46_nodes, " but they can listen unless deafened.");
      p46_nodes.forEach(detach);
      claim_component(permission21.$$.fragment, div0_nodes);
      p47 = claim_element(div0_nodes, "P", {});
      var p47_nodes = children(p47);
      b24 = claim_element(p47_nodes, "B", {});
      var b24_nodes = children(b24);
      t67 = claim_text(b24_nodes, "Voice");
      b24_nodes.forEach(detach);
      p47_nodes.forEach(detach);
      p48 = claim_element(div0_nodes, "P", {});
      var p48_nodes = children(p48);
      t68 = claim_text(p48_nodes, "Allows users to speak in voice channels that they are connected to. This does not allow users to speak in stage channels; stage moderators are appointed separately per stage channel (via the channel permission settings) and choose who is allowed to speak.");
      p48_nodes.forEach(detach);
      claim_component(permission22.$$.fragment, div0_nodes);
      p49 = claim_element(div0_nodes, "P", {});
      var p49_nodes = children(p49);
      b25 = claim_element(p49_nodes, "B", {});
      var b25_nodes = children(b25);
      t69 = claim_text(b25_nodes, "Voice, Stage");
      b25_nodes.forEach(detach);
      p49_nodes.forEach(detach);
      p50 = claim_element(div0_nodes, "P", {});
      var p50_nodes = children(p50);
      t70 = claim_text(p50_nodes, "Allows users to force-mute users (including themselves), preventing them from speaking in any channel regardless of if they have the ");
      a2 = claim_element(p50_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t71 = claim_text(a2_nodes, "Speak");
      a2_nodes.forEach(detach);
      t72 = claim_text(p50_nodes, " permission. Also allows users to undo force-mutes, including on themselves. Users who have muted themselves cannot be muted by anyone else. This is ");
      b26 = claim_element(p50_nodes, "B", {});
      var b26_nodes = children(b26);
      t73 = claim_text(b26_nodes, "not");
      b26_nodes.forEach(detach);
      t74 = claim_text(p50_nodes, " subject to role hierarchy.");
      p50_nodes.forEach(detach);
      claim_component(permission23.$$.fragment, div0_nodes);
      p51 = claim_element(div0_nodes, "P", {});
      var p51_nodes = children(p51);
      b27 = claim_element(p51_nodes, "B", {});
      var b27_nodes = children(b27);
      t75 = claim_text(b27_nodes, "Voice, Stage");
      b27_nodes.forEach(detach);
      p51_nodes.forEach(detach);
      p52 = claim_element(div0_nodes, "P", {});
      var p52_nodes = children(p52);
      t76 = claim_text(p52_nodes, "Allows users to force-deafen users (including themselves), preventing them from hearing what is happening in voice or stage channels. Also allows users to undo force-deafens, including on themselves. Users who have deafened themselves cannot be undeafened by anyone else. This is ");
      b28 = claim_element(p52_nodes, "B", {});
      var b28_nodes = children(b28);
      t77 = claim_text(b28_nodes, "not");
      b28_nodes.forEach(detach);
      t78 = claim_text(p52_nodes, " subject to role hierarchy.");
      p52_nodes.forEach(detach);
      claim_component(callout8.$$.fragment, div0_nodes);
      claim_component(permission24.$$.fragment, div0_nodes);
      p53 = claim_element(div0_nodes, "P", {});
      var p53_nodes = children(p53);
      b29 = claim_element(p53_nodes, "B", {});
      var b29_nodes = children(b29);
      t79 = claim_text(b29_nodes, "Voice, Stage");
      b29_nodes.forEach(detach);
      p53_nodes.forEach(detach);
      p54 = claim_element(div0_nodes, "P", {});
      var p54_nodes = children(p54);
      t80 = claim_text(p54_nodes, "Allows users to move members who are already in a voice channel in this server into another voice channel. The user performing this action must have ");
      a3 = claim_element(p54_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t81 = claim_text(a3_nodes, "Connect");
      a3_nodes.forEach(detach);
      t82 = claim_text(p54_nodes, " in the target channel, but the target user does not need to be able to see or join it on their own. Users cannot be connected by another user and can never be moved between servers even if the user has this permission in both servers. This is ");
      b30 = claim_element(p54_nodes, "B", {});
      var b30_nodes = children(b30);
      t83 = claim_text(b30_nodes, "not");
      b30_nodes.forEach(detach);
      t84 = claim_text(p54_nodes, " subject to role hierarchy.");
      p54_nodes.forEach(detach);
      claim_component(permission25.$$.fragment, div0_nodes);
      p55 = claim_element(div0_nodes, "P", {});
      var p55_nodes = children(p55);
      b31 = claim_element(p55_nodes, "B", {});
      var b31_nodes = children(b31);
      t85 = claim_text(b31_nodes, "Voice");
      b31_nodes.forEach(detach);
      p55_nodes.forEach(detach);
      p56 = claim_element(div0_nodes, "P", {});
      var p56_nodes = children(p56);
      t86 = claim_text(p56_nodes, "Allows users to use voice activity detection mode. Without this permission, users can only use Push-To-Talk.");
      p56_nodes.forEach(detach);
      claim_component(permission26.$$.fragment, div0_nodes);
      p57 = claim_element(div0_nodes, "P", {});
      var p57_nodes = children(p57);
      b32 = claim_element(p57_nodes, "B", {});
      var b32_nodes = children(b32);
      t87 = claim_text(b32_nodes, "Server-Wide");
      b32_nodes.forEach(detach);
      p57_nodes.forEach(detach);
      p58 = claim_element(div0_nodes, "P", {});
      var p58_nodes = children(p58);
      t88 = claim_text(p58_nodes, "Allows users to change their own nickname.");
      p58_nodes.forEach(detach);
      claim_component(permission27.$$.fragment, div0_nodes);
      p59 = claim_element(div0_nodes, "P", {});
      var p59_nodes = children(p59);
      b33 = claim_element(p59_nodes, "B", {});
      var b33_nodes = children(b33);
      t89 = claim_text(b33_nodes, "Server-Wide");
      b33_nodes.forEach(detach);
      p59_nodes.forEach(detach);
      p60 = claim_element(div0_nodes, "P", {});
      var p60_nodes = children(p60);
      t90 = claim_text(p60_nodes, "Allows users to change other members' nicknames. This is subject to role hierarchy.");
      p60_nodes.forEach(detach);
      claim_component(permission28.$$.fragment, div0_nodes);
      p61 = claim_element(div0_nodes, "P", {});
      var p61_nodes = children(p61);
      b34 = claim_element(p61_nodes, "B", {});
      var b34_nodes = children(b34);
      t91 = claim_text(b34_nodes, "Text, Voice, Stage");
      b34_nodes.forEach(detach);
      p61_nodes.forEach(detach);
      p62 = claim_element(div0_nodes, "P", {});
      var p62_nodes = children(p62);
      t92 = claim_text(p62_nodes, "Allows users to create, edit, delete, add, and remove roles that are below them in role hierarchy (however, adding/removing roles can be done to members above them in hierarchy).");
      p62_nodes.forEach(detach);
      p63 = claim_element(div0_nodes, "P", {});
      var p63_nodes = children(p63);
      t93 = claim_text(p63_nodes, "Allows users to edit channel overrides for roles that are below them and permissions that they have.");
      p63_nodes.forEach(detach);
      claim_component(permission29.$$.fragment, div0_nodes);
      p64 = claim_element(div0_nodes, "P", {});
      var p64_nodes = children(p64);
      b35 = claim_element(p64_nodes, "B", {});
      var b35_nodes = children(b35);
      t94 = claim_text(b35_nodes, "Text, Voice");
      b35_nodes.forEach(detach);
      p64_nodes.forEach(detach);
      p65 = claim_element(div0_nodes, "P", {});
      var p65_nodes = children(p65);
      t95 = claim_text(p65_nodes, "Allows users to create, edit, and delete webhooks, as well as view a list of webhooks and get their URLs.");
      p65_nodes.forEach(detach);
      claim_component(permission30.$$.fragment, div0_nodes);
      p66 = claim_element(div0_nodes, "P", {});
      var p66_nodes = children(p66);
      b36 = claim_element(p66_nodes, "B", {});
      var b36_nodes = children(b36);
      t96 = claim_text(b36_nodes, "Server-Wide");
      b36_nodes.forEach(detach);
      p66_nodes.forEach(detach);
      p67 = claim_element(div0_nodes, "P", {});
      var p67_nodes = children(p67);
      t97 = claim_text(p67_nodes, "Allows users to upload, rename, and delete emojis and stickers. Also allows bots to control which roles can use emojis, which is a little-known feature that isn't very useful and isn't supported by most bots.");
      p67_nodes.forEach(detach);
      claim_component(permission31.$$.fragment, div0_nodes);
      p68 = claim_element(div0_nodes, "P", {});
      var p68_nodes = children(p68);
      b37 = claim_element(p68_nodes, "B", {});
      var b37_nodes = children(b37);
      t98 = claim_text(b37_nodes, "Text, Voice");
      b37_nodes.forEach(detach);
      p68_nodes.forEach(detach);
      p69 = claim_element(div0_nodes, "P", {});
      var p69_nodes = children(p69);
      t99 = claim_text(p69_nodes, 'Allows users to use slash commands and context menu commands (right clicking a message or user and selecting "Apps").');
      p69_nodes.forEach(detach);
      claim_component(callout9.$$.fragment, div0_nodes);
      claim_component(permission32.$$.fragment, div0_nodes);
      p70 = claim_element(div0_nodes, "P", {});
      var p70_nodes = children(p70);
      b38 = claim_element(p70_nodes, "B", {});
      var b38_nodes = children(b38);
      t100 = claim_text(b38_nodes, "Stage");
      b38_nodes.forEach(detach);
      p70_nodes.forEach(detach);
      p71 = claim_element(div0_nodes, "P", {});
      var p71_nodes = children(p71);
      t101 = claim_text(p71_nodes, "Allows users to request to become a speaker in stage channels, which can be approved or denied by stage moderators.");
      p71_nodes.forEach(detach);
      claim_component(permission33.$$.fragment, div0_nodes);
      p72 = claim_element(div0_nodes, "P", {});
      var p72_nodes = children(p72);
      b39 = claim_element(p72_nodes, "B", {});
      var b39_nodes = children(b39);
      t102 = claim_text(b39_nodes, "Voice, Stage");
      b39_nodes.forEach(detach);
      p72_nodes.forEach(detach);
      p73 = claim_element(div0_nodes, "P", {});
      var p73_nodes = children(p73);
      t103 = claim_text(p73_nodes, "Allows users to create, edit, and delete server events, including starting and ending them.");
      p73_nodes.forEach(detach);
      claim_component(permission34.$$.fragment, div0_nodes);
      p74 = claim_element(div0_nodes, "P", {});
      var p74_nodes = children(p74);
      b40 = claim_element(p74_nodes, "B", {});
      var b40_nodes = children(b40);
      t104 = claim_text(b40_nodes, "Text");
      b40_nodes.forEach(detach);
      p74_nodes.forEach(detach);
      p75 = claim_element(div0_nodes, "P", {});
      var p75_nodes = children(p75);
      t105 = claim_text(p75_nodes, "Allows users to edit, archive, unarchive, lock, unlock, and delete threads and view all private threads.");
      p75_nodes.forEach(detach);
      claim_component(permission35.$$.fragment, div0_nodes);
      p76 = claim_element(div0_nodes, "P", {});
      var p76_nodes = children(p76);
      b41 = claim_element(p76_nodes, "B", {});
      var b41_nodes = children(b41);
      t106 = claim_text(b41_nodes, "Text");
      b41_nodes.forEach(detach);
      p76_nodes.forEach(detach);
      p77 = claim_element(div0_nodes, "P", {});
      var p77_nodes = children(p77);
      t107 = claim_text(p77_nodes, "Allows users to create public threads (threads that all users can see).");
      p77_nodes.forEach(detach);
      claim_component(permission36.$$.fragment, div0_nodes);
      p78 = claim_element(div0_nodes, "P", {});
      var p78_nodes = children(p78);
      b42 = claim_element(p78_nodes, "B", {});
      var b42_nodes = children(b42);
      t108 = claim_text(b42_nodes, "Text");
      b42_nodes.forEach(detach);
      p78_nodes.forEach(detach);
      p79 = claim_element(div0_nodes, "P", {});
      var p79_nodes = children(p79);
      t109 = claim_text(p79_nodes, "Allows users to create private threads, which can only be seen by users with ");
      a4 = claim_element(p79_nodes, "A", { href: true });
      var a4_nodes = children(a4);
      t110 = claim_text(a4_nodes, "Manage Threads");
      a4_nodes.forEach(detach);
      t111 = claim_text(p79_nodes, " and users who are explicitly invited to the thread.");
      p79_nodes.forEach(detach);
      claim_component(permission37.$$.fragment, div0_nodes);
      p80 = claim_element(div0_nodes, "P", {});
      var p80_nodes = children(p80);
      b43 = claim_element(p80_nodes, "B", {});
      var b43_nodes = children(b43);
      t112 = claim_text(b43_nodes, "Text, Voice");
      b43_nodes.forEach(detach);
      p80_nodes.forEach(detach);
      p81 = claim_element(div0_nodes, "P", {});
      var p81_nodes = children(p81);
      t113 = claim_text(p81_nodes, "Allows users to send messages with stickers from other servers.");
      p81_nodes.forEach(detach);
      claim_component(permission38.$$.fragment, div0_nodes);
      p82 = claim_element(div0_nodes, "P", {});
      var p82_nodes = children(p82);
      b44 = claim_element(p82_nodes, "B", {});
      var b44_nodes = children(b44);
      t114 = claim_text(b44_nodes, "Text");
      b44_nodes.forEach(detach);
      p82_nodes.forEach(detach);
      p83 = claim_element(div0_nodes, "P", {});
      var p83_nodes = children(p83);
      t115 = claim_text(p83_nodes, "Allows users to send messages in threads and forum posts.");
      p83_nodes.forEach(detach);
      claim_component(callout10.$$.fragment, div0_nodes);
      claim_component(permission39.$$.fragment, div0_nodes);
      p84 = claim_element(div0_nodes, "P", {});
      var p84_nodes = children(p84);
      b45 = claim_element(p84_nodes, "B", {});
      var b45_nodes = children(b45);
      t116 = claim_text(b45_nodes, "Voice");
      b45_nodes.forEach(detach);
      p84_nodes.forEach(detach);
      p85 = claim_element(div0_nodes, "P", {});
      var p85_nodes = children(p85);
      t117 = claim_text(p85_nodes, "Allows users to use activities such as YouTube's Watch Together in voice channels.");
      p85_nodes.forEach(detach);
      claim_component(permission40.$$.fragment, div0_nodes);
      p86 = claim_element(div0_nodes, "P", {});
      var p86_nodes = children(p86);
      b46 = claim_element(p86_nodes, "B", {});
      var b46_nodes = children(b46);
      t118 = claim_text(b46_nodes, "Server-Wide");
      b46_nodes.forEach(detach);
      p86_nodes.forEach(detach);
      p87 = claim_element(div0_nodes, "P", {});
      var p87_nodes = children(p87);
      t119 = claim_text(p87_nodes, "Allows users to timeout other members, disabling all permissions except ");
      a5 = claim_element(p87_nodes, "A", { href: true });
      var a5_nodes = children(a5);
      t120 = claim_text(a5_nodes, "View Channel");
      a5_nodes.forEach(detach);
      t121 = claim_text(p87_nodes, " and ");
      a6 = claim_element(p87_nodes, "A", { href: true });
      var a6_nodes = children(a6);
      t122 = claim_text(a6_nodes, "Read Message History");
      a6_nodes.forEach(detach);
      t123 = claim_text(p87_nodes, ". Some other features like adding to existing reactions or using message components (buttons and dropdowns) are also disabled.");
      p87_nodes.forEach(detach);
      claim_component(callout11.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "javascript:void(0)");
      attr(a1, "href", "#SPEAK");
      attr(a2, "href", "#SPEAK");
      attr(a3, "href", "#CONNECT");
      attr(a4, "href", "#MANAGE_THREADS");
      attr(a5, "href", "#VIEW_CHANNEL");
      attr(a6, "href", "#READ_MESSAGE_HISTORY");
      attr(div1, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, h1);
      append_hydration(h1, t0);
      append_hydration(div1, p0);
      append_hydration(p0, a0);
      append_hydration(a0, t1);
      append_hydration(a0, t2);
      mount_component(callout0, div1, null);
      append_hydration(div1, div0);
      mount_component(permission0, div0, null);
      append_hydration(div0, p1);
      append_hydration(p1, b0);
      append_hydration(b0, t3);
      append_hydration(div0, p2);
      append_hydration(p2, t4);
      mount_component(callout1, div0, null);
      mount_component(permission1, div0, null);
      append_hydration(div0, p3);
      append_hydration(p3, b1);
      append_hydration(b1, t5);
      append_hydration(div0, p4);
      append_hydration(p4, t6);
      mount_component(permission2, div0, null);
      append_hydration(div0, p5);
      append_hydration(p5, b2);
      append_hydration(b2, t7);
      append_hydration(div0, p6);
      append_hydration(p6, t8);
      append_hydration(div0, p7);
      append_hydration(p7, t9);
      append_hydration(div0, p8);
      append_hydration(p8, t10);
      mount_component(permission3, div0, null);
      append_hydration(div0, p9);
      append_hydration(p9, b3);
      append_hydration(b3, t11);
      append_hydration(div0, p10);
      append_hydration(p10, t12);
      mount_component(callout2, div0, null);
      mount_component(permission4, div0, null);
      append_hydration(div0, p11);
      append_hydration(p11, b4);
      append_hydration(b4, t13);
      append_hydration(div0, p12);
      append_hydration(p12, t14);
      mount_component(callout3, div0, null);
      mount_component(permission5, div0, null);
      append_hydration(div0, p13);
      append_hydration(p13, b5);
      append_hydration(b5, t15);
      append_hydration(div0, p14);
      append_hydration(p14, t16);
      mount_component(callout4, div0, null);
      mount_component(permission6, div0, null);
      append_hydration(div0, p15);
      append_hydration(p15, b6);
      append_hydration(b6, t17);
      append_hydration(div0, p16);
      append_hydration(p16, t18);
      mount_component(callout5, div0, null);
      mount_component(permission7, div0, null);
      append_hydration(div0, p17);
      append_hydration(p17, b7);
      append_hydration(b7, t19);
      append_hydration(div0, p18);
      append_hydration(p18, t20);
      mount_component(permission8, div0, null);
      append_hydration(div0, p19);
      append_hydration(p19, b8);
      append_hydration(b8, t21);
      append_hydration(div0, p20);
      append_hydration(p20, t22);
      mount_component(permission9, div0, null);
      append_hydration(div0, p21);
      append_hydration(p21, b9);
      append_hydration(b9, t23);
      append_hydration(div0, p22);
      append_hydration(p22, t24);
      mount_component(permission10, div0, null);
      append_hydration(div0, p23);
      append_hydration(p23, b10);
      append_hydration(b10, t25);
      append_hydration(div0, p24);
      append_hydration(p24, t26);
      mount_component(callout6, div0, null);
      mount_component(permission11, div0, null);
      append_hydration(div0, p25);
      append_hydration(p25, b11);
      append_hydration(b11, t27);
      append_hydration(div0, p26);
      append_hydration(p26, t28);
      mount_component(callout7, div0, null);
      mount_component(permission12, div0, null);
      append_hydration(div0, p27);
      append_hydration(p27, b12);
      append_hydration(b12, t29);
      append_hydration(div0, p28);
      append_hydration(p28, t30);
      append_hydration(p28, code0);
      append_hydration(code0, t31);
      append_hydration(p28, t32);
      mount_component(permission13, div0, null);
      append_hydration(div0, p29);
      append_hydration(p29, b13);
      append_hydration(b13, t33);
      append_hydration(div0, p30);
      append_hydration(p30, t34);
      append_hydration(p30, b14);
      append_hydration(b14, t35);
      append_hydration(p30, t36);
      mount_component(permission14, div0, null);
      append_hydration(div0, p31);
      append_hydration(p31, b15);
      append_hydration(b15, t37);
      append_hydration(div0, p32);
      append_hydration(p32, t38);
      append_hydration(p32, code1);
      append_hydration(code1, t39);
      append_hydration(p32, t40);
      mount_component(permission15, div0, null);
      append_hydration(div0, p33);
      append_hydration(p33, b16);
      append_hydration(b16, t41);
      append_hydration(div0, p34);
      append_hydration(p34, t42);
      mount_component(permission16, div0, null);
      append_hydration(div0, p35);
      append_hydration(p35, b17);
      append_hydration(b17, t43);
      append_hydration(div0, p36);
      append_hydration(p36, t44);
      append_hydration(div0, p37);
      append_hydration(p37, t45);
      mount_component(permission17, div0, null);
      append_hydration(div0, p38);
      append_hydration(p38, b18);
      append_hydration(b18, t46);
      append_hydration(div0, p39);
      append_hydration(p39, t47);
      append_hydration(p39, code2);
      append_hydration(code2, t48);
      append_hydration(p39, t49);
      append_hydration(p39, code3);
      append_hydration(code3, t50);
      append_hydration(p39, t51);
      append_hydration(p39, b19);
      append_hydration(b19, t52);
      append_hydration(p39, t53);
      append_hydration(p39, b20);
      append_hydration(b20, t54);
      append_hydration(p39, t55);
      append_hydration(div0, p40);
      append_hydration(p40, t56);
      append_hydration(p40, code4);
      append_hydration(code4, t57);
      append_hydration(p40, t58);
      mount_component(permission18, div0, null);
      append_hydration(div0, p41);
      append_hydration(p41, b21);
      append_hydration(b21, t59);
      append_hydration(div0, p42);
      append_hydration(p42, t60);
      mount_component(permission19, div0, null);
      append_hydration(div0, p43);
      append_hydration(p43, b22);
      append_hydration(b22, t61);
      append_hydration(div0, p44);
      append_hydration(p44, t62);
      mount_component(permission20, div0, null);
      append_hydration(div0, p45);
      append_hydration(p45, b23);
      append_hydration(b23, t63);
      append_hydration(div0, p46);
      append_hydration(p46, t64);
      append_hydration(p46, a1);
      append_hydration(a1, t65);
      append_hydration(p46, t66);
      mount_component(permission21, div0, null);
      append_hydration(div0, p47);
      append_hydration(p47, b24);
      append_hydration(b24, t67);
      append_hydration(div0, p48);
      append_hydration(p48, t68);
      mount_component(permission22, div0, null);
      append_hydration(div0, p49);
      append_hydration(p49, b25);
      append_hydration(b25, t69);
      append_hydration(div0, p50);
      append_hydration(p50, t70);
      append_hydration(p50, a2);
      append_hydration(a2, t71);
      append_hydration(p50, t72);
      append_hydration(p50, b26);
      append_hydration(b26, t73);
      append_hydration(p50, t74);
      mount_component(permission23, div0, null);
      append_hydration(div0, p51);
      append_hydration(p51, b27);
      append_hydration(b27, t75);
      append_hydration(div0, p52);
      append_hydration(p52, t76);
      append_hydration(p52, b28);
      append_hydration(b28, t77);
      append_hydration(p52, t78);
      mount_component(callout8, div0, null);
      mount_component(permission24, div0, null);
      append_hydration(div0, p53);
      append_hydration(p53, b29);
      append_hydration(b29, t79);
      append_hydration(div0, p54);
      append_hydration(p54, t80);
      append_hydration(p54, a3);
      append_hydration(a3, t81);
      append_hydration(p54, t82);
      append_hydration(p54, b30);
      append_hydration(b30, t83);
      append_hydration(p54, t84);
      mount_component(permission25, div0, null);
      append_hydration(div0, p55);
      append_hydration(p55, b31);
      append_hydration(b31, t85);
      append_hydration(div0, p56);
      append_hydration(p56, t86);
      mount_component(permission26, div0, null);
      append_hydration(div0, p57);
      append_hydration(p57, b32);
      append_hydration(b32, t87);
      append_hydration(div0, p58);
      append_hydration(p58, t88);
      mount_component(permission27, div0, null);
      append_hydration(div0, p59);
      append_hydration(p59, b33);
      append_hydration(b33, t89);
      append_hydration(div0, p60);
      append_hydration(p60, t90);
      mount_component(permission28, div0, null);
      append_hydration(div0, p61);
      append_hydration(p61, b34);
      append_hydration(b34, t91);
      append_hydration(div0, p62);
      append_hydration(p62, t92);
      append_hydration(div0, p63);
      append_hydration(p63, t93);
      mount_component(permission29, div0, null);
      append_hydration(div0, p64);
      append_hydration(p64, b35);
      append_hydration(b35, t94);
      append_hydration(div0, p65);
      append_hydration(p65, t95);
      mount_component(permission30, div0, null);
      append_hydration(div0, p66);
      append_hydration(p66, b36);
      append_hydration(b36, t96);
      append_hydration(div0, p67);
      append_hydration(p67, t97);
      mount_component(permission31, div0, null);
      append_hydration(div0, p68);
      append_hydration(p68, b37);
      append_hydration(b37, t98);
      append_hydration(div0, p69);
      append_hydration(p69, t99);
      mount_component(callout9, div0, null);
      mount_component(permission32, div0, null);
      append_hydration(div0, p70);
      append_hydration(p70, b38);
      append_hydration(b38, t100);
      append_hydration(div0, p71);
      append_hydration(p71, t101);
      mount_component(permission33, div0, null);
      append_hydration(div0, p72);
      append_hydration(p72, b39);
      append_hydration(b39, t102);
      append_hydration(div0, p73);
      append_hydration(p73, t103);
      mount_component(permission34, div0, null);
      append_hydration(div0, p74);
      append_hydration(p74, b40);
      append_hydration(b40, t104);
      append_hydration(div0, p75);
      append_hydration(p75, t105);
      mount_component(permission35, div0, null);
      append_hydration(div0, p76);
      append_hydration(p76, b41);
      append_hydration(b41, t106);
      append_hydration(div0, p77);
      append_hydration(p77, t107);
      mount_component(permission36, div0, null);
      append_hydration(div0, p78);
      append_hydration(p78, b42);
      append_hydration(b42, t108);
      append_hydration(div0, p79);
      append_hydration(p79, t109);
      append_hydration(p79, a4);
      append_hydration(a4, t110);
      append_hydration(p79, t111);
      mount_component(permission37, div0, null);
      append_hydration(div0, p80);
      append_hydration(p80, b43);
      append_hydration(b43, t112);
      append_hydration(div0, p81);
      append_hydration(p81, t113);
      mount_component(permission38, div0, null);
      append_hydration(div0, p82);
      append_hydration(p82, b44);
      append_hydration(b44, t114);
      append_hydration(div0, p83);
      append_hydration(p83, t115);
      mount_component(callout10, div0, null);
      mount_component(permission39, div0, null);
      append_hydration(div0, p84);
      append_hydration(p84, b45);
      append_hydration(b45, t116);
      append_hydration(div0, p85);
      append_hydration(p85, t117);
      mount_component(permission40, div0, null);
      append_hydration(div0, p86);
      append_hydration(p86, b46);
      append_hydration(b46, t118);
      append_hydration(div0, p87);
      append_hydration(p87, t119);
      append_hydration(p87, a5);
      append_hydration(a5, t120);
      append_hydration(p87, t121);
      append_hydration(p87, a6);
      append_hydration(a6, t122);
      append_hydration(p87, t123);
      mount_component(callout11, div0, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          a0,
          "click",
          /*click_handler*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*open*/
      1) && t1_value !== (t1_value = /*open*/
      ctx2[0] ? "Hide" : "Show"))
        set_data(t1, t1_value);
      const callout0_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout0.$set(callout0_changes);
      const permission0_changes = {};
      if (dirty & /*open*/
      1)
        permission0_changes.open = /*open*/
        ctx2[0];
      permission0.$set(permission0_changes);
      const callout1_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout1.$set(callout1_changes);
      const permission1_changes = {};
      if (dirty & /*open*/
      1)
        permission1_changes.open = /*open*/
        ctx2[0];
      permission1.$set(permission1_changes);
      const permission2_changes = {};
      if (dirty & /*open*/
      1)
        permission2_changes.open = /*open*/
        ctx2[0];
      permission2.$set(permission2_changes);
      const permission3_changes = {};
      if (dirty & /*open*/
      1)
        permission3_changes.open = /*open*/
        ctx2[0];
      permission3.$set(permission3_changes);
      const callout2_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout2.$set(callout2_changes);
      const permission4_changes = {};
      if (dirty & /*open*/
      1)
        permission4_changes.open = /*open*/
        ctx2[0];
      permission4.$set(permission4_changes);
      const callout3_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout3.$set(callout3_changes);
      const permission5_changes = {};
      if (dirty & /*open*/
      1)
        permission5_changes.open = /*open*/
        ctx2[0];
      permission5.$set(permission5_changes);
      const callout4_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout4.$set(callout4_changes);
      const permission6_changes = {};
      if (dirty & /*open*/
      1)
        permission6_changes.open = /*open*/
        ctx2[0];
      permission6.$set(permission6_changes);
      const callout5_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout5.$set(callout5_changes);
      const permission7_changes = {};
      if (dirty & /*open*/
      1)
        permission7_changes.open = /*open*/
        ctx2[0];
      permission7.$set(permission7_changes);
      const permission8_changes = {};
      if (dirty & /*open*/
      1)
        permission8_changes.open = /*open*/
        ctx2[0];
      permission8.$set(permission8_changes);
      const permission9_changes = {};
      if (dirty & /*open*/
      1)
        permission9_changes.open = /*open*/
        ctx2[0];
      permission9.$set(permission9_changes);
      const permission10_changes = {};
      if (dirty & /*open*/
      1)
        permission10_changes.open = /*open*/
        ctx2[0];
      permission10.$set(permission10_changes);
      const callout6_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout6_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout6.$set(callout6_changes);
      const permission11_changes = {};
      if (dirty & /*open*/
      1)
        permission11_changes.open = /*open*/
        ctx2[0];
      permission11.$set(permission11_changes);
      const callout7_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout7_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout7.$set(callout7_changes);
      const permission12_changes = {};
      if (dirty & /*open*/
      1)
        permission12_changes.open = /*open*/
        ctx2[0];
      permission12.$set(permission12_changes);
      const permission13_changes = {};
      if (dirty & /*open*/
      1)
        permission13_changes.open = /*open*/
        ctx2[0];
      permission13.$set(permission13_changes);
      const permission14_changes = {};
      if (dirty & /*open*/
      1)
        permission14_changes.open = /*open*/
        ctx2[0];
      permission14.$set(permission14_changes);
      const permission15_changes = {};
      if (dirty & /*open*/
      1)
        permission15_changes.open = /*open*/
        ctx2[0];
      permission15.$set(permission15_changes);
      const permission16_changes = {};
      if (dirty & /*open*/
      1)
        permission16_changes.open = /*open*/
        ctx2[0];
      permission16.$set(permission16_changes);
      const permission17_changes = {};
      if (dirty & /*open*/
      1)
        permission17_changes.open = /*open*/
        ctx2[0];
      permission17.$set(permission17_changes);
      const permission18_changes = {};
      if (dirty & /*open*/
      1)
        permission18_changes.open = /*open*/
        ctx2[0];
      permission18.$set(permission18_changes);
      const permission19_changes = {};
      if (dirty & /*open*/
      1)
        permission19_changes.open = /*open*/
        ctx2[0];
      permission19.$set(permission19_changes);
      const permission20_changes = {};
      if (dirty & /*open*/
      1)
        permission20_changes.open = /*open*/
        ctx2[0];
      permission20.$set(permission20_changes);
      const permission21_changes = {};
      if (dirty & /*open*/
      1)
        permission21_changes.open = /*open*/
        ctx2[0];
      permission21.$set(permission21_changes);
      const permission22_changes = {};
      if (dirty & /*open*/
      1)
        permission22_changes.open = /*open*/
        ctx2[0];
      permission22.$set(permission22_changes);
      const permission23_changes = {};
      if (dirty & /*open*/
      1)
        permission23_changes.open = /*open*/
        ctx2[0];
      permission23.$set(permission23_changes);
      const callout8_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout8_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout8.$set(callout8_changes);
      const permission24_changes = {};
      if (dirty & /*open*/
      1)
        permission24_changes.open = /*open*/
        ctx2[0];
      permission24.$set(permission24_changes);
      const permission25_changes = {};
      if (dirty & /*open*/
      1)
        permission25_changes.open = /*open*/
        ctx2[0];
      permission25.$set(permission25_changes);
      const permission26_changes = {};
      if (dirty & /*open*/
      1)
        permission26_changes.open = /*open*/
        ctx2[0];
      permission26.$set(permission26_changes);
      const permission27_changes = {};
      if (dirty & /*open*/
      1)
        permission27_changes.open = /*open*/
        ctx2[0];
      permission27.$set(permission27_changes);
      const permission28_changes = {};
      if (dirty & /*open*/
      1)
        permission28_changes.open = /*open*/
        ctx2[0];
      permission28.$set(permission28_changes);
      const permission29_changes = {};
      if (dirty & /*open*/
      1)
        permission29_changes.open = /*open*/
        ctx2[0];
      permission29.$set(permission29_changes);
      const permission30_changes = {};
      if (dirty & /*open*/
      1)
        permission30_changes.open = /*open*/
        ctx2[0];
      permission30.$set(permission30_changes);
      const permission31_changes = {};
      if (dirty & /*open*/
      1)
        permission31_changes.open = /*open*/
        ctx2[0];
      permission31.$set(permission31_changes);
      const callout9_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout9_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout9.$set(callout9_changes);
      const permission32_changes = {};
      if (dirty & /*open*/
      1)
        permission32_changes.open = /*open*/
        ctx2[0];
      permission32.$set(permission32_changes);
      const permission33_changes = {};
      if (dirty & /*open*/
      1)
        permission33_changes.open = /*open*/
        ctx2[0];
      permission33.$set(permission33_changes);
      const permission34_changes = {};
      if (dirty & /*open*/
      1)
        permission34_changes.open = /*open*/
        ctx2[0];
      permission34.$set(permission34_changes);
      const permission35_changes = {};
      if (dirty & /*open*/
      1)
        permission35_changes.open = /*open*/
        ctx2[0];
      permission35.$set(permission35_changes);
      const permission36_changes = {};
      if (dirty & /*open*/
      1)
        permission36_changes.open = /*open*/
        ctx2[0];
      permission36.$set(permission36_changes);
      const permission37_changes = {};
      if (dirty & /*open*/
      1)
        permission37_changes.open = /*open*/
        ctx2[0];
      permission37.$set(permission37_changes);
      const permission38_changes = {};
      if (dirty & /*open*/
      1)
        permission38_changes.open = /*open*/
        ctx2[0];
      permission38.$set(permission38_changes);
      const callout10_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout10_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout10.$set(callout10_changes);
      const permission39_changes = {};
      if (dirty & /*open*/
      1)
        permission39_changes.open = /*open*/
        ctx2[0];
      permission39.$set(permission39_changes);
      const permission40_changes = {};
      if (dirty & /*open*/
      1)
        permission40_changes.open = /*open*/
        ctx2[0];
      permission40.$set(permission40_changes);
      const callout11_changes = {};
      if (dirty & /*$$scope*/
      4) {
        callout11_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout11.$set(callout11_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(callout0.$$.fragment, local);
      transition_in(permission0.$$.fragment, local);
      transition_in(callout1.$$.fragment, local);
      transition_in(permission1.$$.fragment, local);
      transition_in(permission2.$$.fragment, local);
      transition_in(permission3.$$.fragment, local);
      transition_in(callout2.$$.fragment, local);
      transition_in(permission4.$$.fragment, local);
      transition_in(callout3.$$.fragment, local);
      transition_in(permission5.$$.fragment, local);
      transition_in(callout4.$$.fragment, local);
      transition_in(permission6.$$.fragment, local);
      transition_in(callout5.$$.fragment, local);
      transition_in(permission7.$$.fragment, local);
      transition_in(permission8.$$.fragment, local);
      transition_in(permission9.$$.fragment, local);
      transition_in(permission10.$$.fragment, local);
      transition_in(callout6.$$.fragment, local);
      transition_in(permission11.$$.fragment, local);
      transition_in(callout7.$$.fragment, local);
      transition_in(permission12.$$.fragment, local);
      transition_in(permission13.$$.fragment, local);
      transition_in(permission14.$$.fragment, local);
      transition_in(permission15.$$.fragment, local);
      transition_in(permission16.$$.fragment, local);
      transition_in(permission17.$$.fragment, local);
      transition_in(permission18.$$.fragment, local);
      transition_in(permission19.$$.fragment, local);
      transition_in(permission20.$$.fragment, local);
      transition_in(permission21.$$.fragment, local);
      transition_in(permission22.$$.fragment, local);
      transition_in(permission23.$$.fragment, local);
      transition_in(callout8.$$.fragment, local);
      transition_in(permission24.$$.fragment, local);
      transition_in(permission25.$$.fragment, local);
      transition_in(permission26.$$.fragment, local);
      transition_in(permission27.$$.fragment, local);
      transition_in(permission28.$$.fragment, local);
      transition_in(permission29.$$.fragment, local);
      transition_in(permission30.$$.fragment, local);
      transition_in(permission31.$$.fragment, local);
      transition_in(callout9.$$.fragment, local);
      transition_in(permission32.$$.fragment, local);
      transition_in(permission33.$$.fragment, local);
      transition_in(permission34.$$.fragment, local);
      transition_in(permission35.$$.fragment, local);
      transition_in(permission36.$$.fragment, local);
      transition_in(permission37.$$.fragment, local);
      transition_in(permission38.$$.fragment, local);
      transition_in(callout10.$$.fragment, local);
      transition_in(permission39.$$.fragment, local);
      transition_in(permission40.$$.fragment, local);
      transition_in(callout11.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(callout0.$$.fragment, local);
      transition_out(permission0.$$.fragment, local);
      transition_out(callout1.$$.fragment, local);
      transition_out(permission1.$$.fragment, local);
      transition_out(permission2.$$.fragment, local);
      transition_out(permission3.$$.fragment, local);
      transition_out(callout2.$$.fragment, local);
      transition_out(permission4.$$.fragment, local);
      transition_out(callout3.$$.fragment, local);
      transition_out(permission5.$$.fragment, local);
      transition_out(callout4.$$.fragment, local);
      transition_out(permission6.$$.fragment, local);
      transition_out(callout5.$$.fragment, local);
      transition_out(permission7.$$.fragment, local);
      transition_out(permission8.$$.fragment, local);
      transition_out(permission9.$$.fragment, local);
      transition_out(permission10.$$.fragment, local);
      transition_out(callout6.$$.fragment, local);
      transition_out(permission11.$$.fragment, local);
      transition_out(callout7.$$.fragment, local);
      transition_out(permission12.$$.fragment, local);
      transition_out(permission13.$$.fragment, local);
      transition_out(permission14.$$.fragment, local);
      transition_out(permission15.$$.fragment, local);
      transition_out(permission16.$$.fragment, local);
      transition_out(permission17.$$.fragment, local);
      transition_out(permission18.$$.fragment, local);
      transition_out(permission19.$$.fragment, local);
      transition_out(permission20.$$.fragment, local);
      transition_out(permission21.$$.fragment, local);
      transition_out(permission22.$$.fragment, local);
      transition_out(permission23.$$.fragment, local);
      transition_out(callout8.$$.fragment, local);
      transition_out(permission24.$$.fragment, local);
      transition_out(permission25.$$.fragment, local);
      transition_out(permission26.$$.fragment, local);
      transition_out(permission27.$$.fragment, local);
      transition_out(permission28.$$.fragment, local);
      transition_out(permission29.$$.fragment, local);
      transition_out(permission30.$$.fragment, local);
      transition_out(permission31.$$.fragment, local);
      transition_out(callout9.$$.fragment, local);
      transition_out(permission32.$$.fragment, local);
      transition_out(permission33.$$.fragment, local);
      transition_out(permission34.$$.fragment, local);
      transition_out(permission35.$$.fragment, local);
      transition_out(permission36.$$.fragment, local);
      transition_out(permission37.$$.fragment, local);
      transition_out(permission38.$$.fragment, local);
      transition_out(callout10.$$.fragment, local);
      transition_out(permission39.$$.fragment, local);
      transition_out(permission40.$$.fragment, local);
      transition_out(callout11.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(callout0);
      destroy_component(permission0);
      destroy_component(callout1);
      destroy_component(permission1);
      destroy_component(permission2);
      destroy_component(permission3);
      destroy_component(callout2);
      destroy_component(permission4);
      destroy_component(callout3);
      destroy_component(permission5);
      destroy_component(callout4);
      destroy_component(permission6);
      destroy_component(callout5);
      destroy_component(permission7);
      destroy_component(permission8);
      destroy_component(permission9);
      destroy_component(permission10);
      destroy_component(callout6);
      destroy_component(permission11);
      destroy_component(callout7);
      destroy_component(permission12);
      destroy_component(permission13);
      destroy_component(permission14);
      destroy_component(permission15);
      destroy_component(permission16);
      destroy_component(permission17);
      destroy_component(permission18);
      destroy_component(permission19);
      destroy_component(permission20);
      destroy_component(permission21);
      destroy_component(permission22);
      destroy_component(permission23);
      destroy_component(callout8);
      destroy_component(permission24);
      destroy_component(permission25);
      destroy_component(permission26);
      destroy_component(permission27);
      destroy_component(permission28);
      destroy_component(permission29);
      destroy_component(permission30);
      destroy_component(permission31);
      destroy_component(callout9);
      destroy_component(permission32);
      destroy_component(permission33);
      destroy_component(permission34);
      destroy_component(permission35);
      destroy_component(permission36);
      destroy_component(permission37);
      destroy_component(permission38);
      destroy_component(callout10);
      destroy_component(permission39);
      destroy_component(permission40);
      destroy_component(callout11);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/discord#permissions", "Discord Help"],
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
      if (dirty & /*$$scope, open*/
      5) {
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
function instance($$self, $$props, $$invalidate) {
  let open = false;
  const click_handler = () => $$invalidate(0, open = !open);
  return [open, click_handler];
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
