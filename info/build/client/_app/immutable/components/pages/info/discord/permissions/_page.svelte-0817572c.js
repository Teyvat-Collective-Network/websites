import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../../chunks/Callout-2d6b8933.js";
import { I as Image } from "../../../../../chunks/Image-ea922a09.js";
import { L as Linkable } from "../../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../../chunks/Navigation-82debefb.js";
function create_default_slot_2(ctx) {
  let p;
  let t0;
  let b0;
  let t1;
  let t2;
  let b1;
  let t3;
  let t4;
  let a;
  let t5;
  let t6;
  return {
    c() {
      p = element("p");
      t0 = text("Role-level allow overrides ");
      b0 = element("b");
      t1 = text("always");
      t2 = text(" take priority over deny overrides. Role hierarchy does ");
      b1 = element("b");
      t3 = text("not");
      t4 = text(" matter here. If you allow an access role permission to send messages, your mute role will no longer work. See the ");
      a = element("a");
      t5 = text("how-to");
      t6 = text(" section for guides on common permission patterns and how to set them up correctly.");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Role-level allow overrides ");
      b0 = claim_element(p_nodes, "B", {});
      var b0_nodes = children(b0);
      t1 = claim_text(b0_nodes, "always");
      b0_nodes.forEach(detach);
      t2 = claim_text(p_nodes, " take priority over deny overrides. Role hierarchy does ");
      b1 = claim_element(p_nodes, "B", {});
      var b1_nodes = children(b1);
      t3 = claim_text(b1_nodes, "not");
      b1_nodes.forEach(detach);
      t4 = claim_text(p_nodes, " matter here. If you allow an access role permission to send messages, your mute role will no longer work. See the ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "how-to");
      a_nodes.forEach(detach);
      t6 = claim_text(p_nodes, " section for guides on common permission patterns and how to set them up correctly.");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "#how-to");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, b0);
      append_hydration(b0, t1);
      append_hydration(p, t2);
      append_hydration(p, b1);
      append_hydration(b1, t3);
      append_hydration(p, t4);
      append_hydration(p, a);
      append_hydration(a, t5);
      append_hydration(p, t6);
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
  let t0;
  let a;
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("Some permissions are dependent on other permissions. For example, ");
      a = element("a");
      t1 = text("Send Messages");
      t2 = text(" only matters if the user can see the channel; if they can't, they can't send messages, even through manual API calls.");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Some permissions are dependent on other permissions. For example, ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Send Messages");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, " only matters if the user can see the channel; if they can't, they can't send messages, even through manual API calls.");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/info/discord/permission-list#SEND_MESSAGES");
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
  let linkable0;
  let p0;
  let t1;
  let p1;
  let t2;
  let p2;
  let t3;
  let linkable1;
  let p3;
  let t4;
  let p4;
  let t5;
  let ul;
  let li0;
  let t6;
  let a0;
  let t7;
  let t8;
  let li1;
  let t9;
  let a1;
  let t10;
  let t11;
  let a2;
  let t12;
  let t13;
  let li2;
  let t14;
  let sup0;
  let t15;
  let li3;
  let t16;
  let sup1;
  let t17;
  let li4;
  let t18;
  let sup2;
  let t19;
  let li5;
  let t20;
  let code0;
  let t21;
  let t22;
  let sup3;
  let t23;
  let li6;
  let t24;
  let code1;
  let t25;
  let t26;
  let li7;
  let t27;
  let p5;
  let sup4;
  let t28;
  let t29;
  let a3;
  let t30;
  let t31;
  let callout0;
  let br;
  let callout1;
  let linkable2;
  let linkable3;
  let p6;
  let t32;
  let code2;
  let t33;
  let t34;
  let p7;
  let t35;
  let linkable4;
  let p8;
  let t36;
  let a4;
  let t37;
  let t38;
  let p9;
  let t39;
  let code3;
  let t40;
  let t41;
  let p10;
  let t42;
  let code4;
  let t43;
  let t44;
  let a5;
  let t45;
  let t46;
  let code5;
  let t47;
  let t48;
  let code6;
  let t49;
  let t50;
  let image0;
  let image1;
  let image2;
  let p11;
  let t51;
  let code7;
  let t52;
  let t53;
  let p12;
  let t54;
  let code8;
  let t55;
  let t56;
  let a6;
  let t57;
  let t58;
  let code9;
  let t59;
  let t60;
  let code10;
  let t61;
  let t62;
  let image3;
  let image4;
  let image5;
  let linkable5;
  let p13;
  let t63;
  let p14;
  let t64;
  let code11;
  let t65;
  let t66;
  let a7;
  let t67;
  let t68;
  let p15;
  let t69;
  let linkable6;
  let p16;
  let t70;
  let linkable7;
  let p17;
  let t71;
  let p18;
  let t72;
  let p19;
  let t73;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "introduction",
      e: "h2",
      value: "Introduction"
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "mechanics",
      e: "h2",
      value: "Mechanics"
    }
  });
  callout0 = new Callout({
    props: {
      style: "red",
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
  linkable2 = new Linkable({
    props: { id: "how-to", e: "h2", value: "How To" }
  });
  linkable3 = new Linkable({
    props: {
      id: "introduction",
      e: "h3",
      value: "Introduction"
    }
  });
  linkable4 = new Linkable({
    props: {
      id: "verification-role",
      e: "h3",
      value: "How do I set up a verification role?"
    }
  });
  image0 = new Image({
    props: {
      src: "https://i.imgur.com/VnnTrfc.png",
      alt: "everyone permission"
    }
  });
  image1 = new Image({
    props: {
      src: "https://i.imgur.com/x3yJTJ1.png",
      alt: "verified permission"
    }
  });
  image2 = new Image({
    props: {
      src: "https://i.imgur.com/ZacXV9M.png",
      alt: "everyone overrides"
    }
  });
  image3 = new Image({
    props: {
      src: "https://i.imgur.com/CTf2yxh.png",
      alt: "everyone permission"
    }
  });
  image4 = new Image({
    props: {
      src: "https://i.imgur.com/YVdwg1W.png",
      alt: "verified permission"
    }
  });
  image5 = new Image({
    props: {
      src: "https://i.imgur.com/yu3QZgx.png",
      alt: "everyone overrides"
    }
  });
  linkable5 = new Linkable({
    props: {
      id: "access-roles",
      e: "h3",
      value: "How do I set up access roles"
    }
  });
  linkable6 = new Linkable({
    props: {
      id: "public-staff-channels",
      e: "h3",
      value: "What about public channels that only staff can send messages in?"
    }
  });
  linkable7 = new Linkable({
    props: {
      id: "mute-role",
      e: "h3",
      value: "How do I set up a mute role?"
    }
  });
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Permissions");
      create_component(linkable0.$$.fragment);
      p0 = element("p");
      t1 = text("Permissions are the way you control what users are able and not able to do on your server. Managing permissions correctly is extremely important to prevent abuse while giving your members an optimal experience.");
      p1 = element("p");
      t2 = text("However, it can be difficult to manage them correctly, and even small exploits that do not cause major issues can still make the server appear disorganized and poorly operated.");
      p2 = element("p");
      t3 = text("In this guide, we explain the details behind how permissions interact and are calculated. Additionally, there are often multiple ways to technically obtain the same effect, but some are much harder to maintain and can cause restrictions later on, so we give recommendations for how you may want to set things up.");
      create_component(linkable1.$$.fragment);
      p3 = element("p");
      t4 = text("Certain actions like deleting messages apply in a specific channel, and the permissions that allow those can be set at a channel level. Categories can have these permissions set, but they do not actually give the permissions in their child channels, it just determines what overrides new channels in the category have, and synced channels (children with the exact same overrides) will be updated when the category's overrides are edited.");
      p4 = element("p");
      t5 = text("The priority order of permissions and overrides is as follows:");
      ul = element("ul");
      li0 = element("li");
      t6 = text("If the user is the owner or has a role with the ");
      a0 = element("a");
      t7 = text("Administrator");
      t8 = text(" permission, they are allowed.");
      li1 = element("li");
      t9 = text("If the user is timed out or has not passed membership screening and the permission is not ");
      a1 = element("a");
      t10 = text("View Channel");
      t11 = text(" or ");
      a2 = element("a");
      t12 = text("Read Message History");
      t13 = text(", they are denied.");
      li2 = element("li");
      t14 = text("If the user has a user-level override, it applies.");
      sup0 = element("sup");
      t15 = text("†");
      li3 = element("li");
      t16 = text("If the user has a role that has a role-level override that allows that permission, they are allowed.");
      sup1 = element("sup");
      t17 = text("†");
      li4 = element("li");
      t18 = text("If the user has a role that has a role-level override that denies that permission, they are denied.");
      sup2 = element("sup");
      t19 = text("†");
      li5 = element("li");
      t20 = text("If there is an ");
      code0 = element("code");
      t21 = text("@everyone");
      t22 = text("-level override, it applies.");
      sup3 = element("sup");
      t23 = text("†");
      li6 = element("li");
      t24 = text("If the user has a role that has that permission globally (including ");
      code1 = element("code");
      t25 = text("@everyone");
      t26 = text("), they are allowed.");
      li7 = element("li");
      t27 = text("If all fail, they are denied.");
      p5 = element("p");
      sup4 = element("sup");
      t28 = text("†");
      t29 = text(" If the permission is not channel-level, e.g. ");
      a3 = element("a");
      t30 = text("Ban Members");
      t31 = text(", this does not apply.");
      create_component(callout0.$$.fragment);
      br = element("br");
      create_component(callout1.$$.fragment);
      create_component(linkable2.$$.fragment);
      create_component(linkable3.$$.fragment);
      p6 = element("p");
      t32 = text("Due to the way permissions are calculated (allow role-level overrides always overrule deny role-level overrides regardless of hierarchy), you want to grant as few allow overrides as possible. Note that allow ");
      code2 = element("code");
      t33 = text("@everyone");
      t34 = text("-level overrides are not an issue as role-level overrides take priority.");
      p7 = element("p");
      t35 = text("In the following sections, we cover many common patterns, the best way to set them up to optimize maintainability, and common pitfalls to watch out for.");
      create_component(linkable4.$$.fragment);
      p8 = element("p");
      t36 = text("Most servers have a role that is granted by clicking on the verification prompt to confirm that they have read the rules (as a weak filter against bots). Typically, channels are only visible to verified users except landing channels. Due to the way permissions are calculated, giving the verified role allow overrides will prevent you from denying them on other roles. For example, giving it ");
      a4 = element("a");
      t37 = text("Send Messages");
      t38 = text(" via an override will stop mute roles from working.");
      p9 = element("p");
      t39 = text("Before you set one up, consider using Discord's built-in member verification. This is stronger than verification roles, as a user who has not passed membership screening cannot DM server members. It automatically disables all interaction, including clicking buttons or adding to existing reactions. Verification roles are already a weak filter against bots, and allowing ");
      code3 = element("code");
      t40 = text("@everyone");
      t41 = text(" to see all public channels does not actually create any tangible threat.");
      p10 = element("p");
      t42 = text("If you've decided to do this anyway, the best way to set it up is to deny ");
      code4 = element("code");
      t43 = text("@everyone");
      t44 = text(" and grant your verification role ");
      a5 = element("a");
      t45 = text("View Channel");
      t46 = text(" at a base level. All channels are now automatically visible only to verified users. Then, just allow ");
      code5 = element("code");
      t47 = text("@everyone");
      t48 = text(" permission to see your landing channels via overrides (remember that allow ");
      code6 = element("code");
      t49 = text("@everyone");
      t50 = text("-level overrides are not an issue).");
      create_component(image0.$$.fragment);
      create_component(image1.$$.fragment);
      create_component(image2.$$.fragment);
      p11 = element("p");
      t51 = text("In addition to not using unnecessary allow overrides, this is actually easier as you will only need to set up overrides on your landing channels. A common way to do this is to use a deny ");
      code7 = element("code");
      t52 = text("@everyone");
      t53 = text("-level and allow role-level override on all non-landing channels, which is not only harder but also introduces allow role-level overrides.");
      p12 = element("p");
      t54 = text("If you want a public channel that ");
      code8 = element("code");
      t55 = text("@everyone");
      t56 = text(" can see but only verified users can send messages in, just disable ");
      a6 = element("a");
      t57 = text("Send Messages");
      t58 = text(" for ");
      code9 = element("code");
      t59 = text("@everyone");
      t60 = text(" and enable it for the verified role. If you then need a channel that ");
      code10 = element("code");
      t61 = text("@everyone");
      t62 = text(" can send messages in, just enable that via an override.");
      create_component(image3.$$.fragment);
      create_component(image4.$$.fragment);
      create_component(image5.$$.fragment);
      create_component(linkable5.$$.fragment);
      p13 = element("p");
      t63 = text("You may want to lock some channels behind access roles such as reaction roles, or staff channels for staff roles. For example, you might want to restrict your leaks channel behind a self-assignable role. In this case, you will need to use an allow role-level override. It is unavoidable, but this is acceptable because usually you don't need to set deny role-level overrides just for viewing the channel.");
      p14 = element("p");
      t64 = text("Firstly, add a deny ");
      code11 = element("code");
      t65 = text("@everyone");
      t66 = text("-level override for ");
      a7 = element("a");
      t67 = text("View Channel");
      t68 = text(". Then, add allow role-level overrides for any roles you want to grant access.");
      p15 = element("p");
      t69 = text("Importantly, do not enable any permissions other than View Channel like sending messages. If a user cannot see a channel, they cannot take any actions relating to the channel.");
      create_component(linkable6.$$.fragment);
      p16 = element("p");
      t70 = text("For this, you will need to grant an allow role-level override. However, if it's going to staff, it is fine. The reason you want to avoid allow role-level overrides is that it stops you from disabling it per role via things like mute roles. However, you should not need to mute your staff members. Also, you have the option to use timeouts if needed.");
      create_component(linkable7.$$.fragment);
      p17 = element("p");
      t71 = text("Before you read this, consider if you want to use mute roles. Discord now has timeouts which are very similar but built into the system. There are several advantages - it makes it obvious to the user that they are timed out, lets moderators easily identify that they are timed out without letting other users be able to know, and shows a countdown to the user in the client.");
      p18 = element("p");
      t72 = text("There are a few disadvantages as well - it can only last up to 28 days, and it disables all permissions except view channel and read message history. In fact, they cannot even react, even to reactions that already exist, and cannot interact with buttons either. This prevents them from using reaction roles.");
      p19 = element("p");
      t73 = text("If you have decided that you want to use a mute role instead, you will want to set an override in every channel (where the mute role matters) that denies permissions you want muted users to be unable to use. We recommend Send Messages, Send Messages in Threads, Add Reactions, Connect, and Use Application Commands. If you allow your members to create threads, you should deny that to the mute role as well.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Permissions");
      h1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "Permissions are the way you control what users are able and not able to do on your server. Managing permissions correctly is extremely important to prevent abuse while giving your members an optimal experience.");
      p0_nodes.forEach(detach);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "However, it can be difficult to manage them correctly, and even small exploits that do not cause major issues can still make the server appear disorganized and poorly operated.");
      p1_nodes.forEach(detach);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t3 = claim_text(p2_nodes, "In this guide, we explain the details behind how permissions interact and are calculated. Additionally, there are often multiple ways to technically obtain the same effect, but some are much harder to maintain and can cause restrictions later on, so we give recommendations for how you may want to set things up.");
      p2_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div_nodes);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      t4 = claim_text(p3_nodes, "Certain actions like deleting messages apply in a specific channel, and the permissions that allow those can be set at a channel level. Categories can have these permissions set, but they do not actually give the permissions in their child channels, it just determines what overrides new channels in the category have, and synced channels (children with the exact same overrides) will be updated when the category's overrides are edited.");
      p3_nodes.forEach(detach);
      p4 = claim_element(div_nodes, "P", {});
      var p4_nodes = children(p4);
      t5 = claim_text(p4_nodes, "The priority order of permissions and overrides is as follows:");
      p4_nodes.forEach(detach);
      ul = claim_element(div_nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      t6 = claim_text(li0_nodes, "If the user is the owner or has a role with the ");
      a0 = claim_element(li0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t7 = claim_text(a0_nodes, "Administrator");
      a0_nodes.forEach(detach);
      t8 = claim_text(li0_nodes, " permission, they are allowed.");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      t9 = claim_text(li1_nodes, "If the user is timed out or has not passed membership screening and the permission is not ");
      a1 = claim_element(li1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t10 = claim_text(a1_nodes, "View Channel");
      a1_nodes.forEach(detach);
      t11 = claim_text(li1_nodes, " or ");
      a2 = claim_element(li1_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t12 = claim_text(a2_nodes, "Read Message History");
      a2_nodes.forEach(detach);
      t13 = claim_text(li1_nodes, ", they are denied.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t14 = claim_text(li2_nodes, "If the user has a user-level override, it applies.");
      sup0 = claim_element(li2_nodes, "SUP", {});
      var sup0_nodes = children(sup0);
      t15 = claim_text(sup0_nodes, "†");
      sup0_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      t16 = claim_text(li3_nodes, "If the user has a role that has a role-level override that allows that permission, they are allowed.");
      sup1 = claim_element(li3_nodes, "SUP", {});
      var sup1_nodes = children(sup1);
      t17 = claim_text(sup1_nodes, "†");
      sup1_nodes.forEach(detach);
      li3_nodes.forEach(detach);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      t18 = claim_text(li4_nodes, "If the user has a role that has a role-level override that denies that permission, they are denied.");
      sup2 = claim_element(li4_nodes, "SUP", {});
      var sup2_nodes = children(sup2);
      t19 = claim_text(sup2_nodes, "†");
      sup2_nodes.forEach(detach);
      li4_nodes.forEach(detach);
      li5 = claim_element(ul_nodes, "LI", {});
      var li5_nodes = children(li5);
      t20 = claim_text(li5_nodes, "If there is an ");
      code0 = claim_element(li5_nodes, "CODE", {});
      var code0_nodes = children(code0);
      t21 = claim_text(code0_nodes, "@everyone");
      code0_nodes.forEach(detach);
      t22 = claim_text(li5_nodes, "-level override, it applies.");
      sup3 = claim_element(li5_nodes, "SUP", {});
      var sup3_nodes = children(sup3);
      t23 = claim_text(sup3_nodes, "†");
      sup3_nodes.forEach(detach);
      li5_nodes.forEach(detach);
      li6 = claim_element(ul_nodes, "LI", {});
      var li6_nodes = children(li6);
      t24 = claim_text(li6_nodes, "If the user has a role that has that permission globally (including ");
      code1 = claim_element(li6_nodes, "CODE", {});
      var code1_nodes = children(code1);
      t25 = claim_text(code1_nodes, "@everyone");
      code1_nodes.forEach(detach);
      t26 = claim_text(li6_nodes, "), they are allowed.");
      li6_nodes.forEach(detach);
      li7 = claim_element(ul_nodes, "LI", {});
      var li7_nodes = children(li7);
      t27 = claim_text(li7_nodes, "If all fail, they are denied.");
      li7_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      p5 = claim_element(div_nodes, "P", {});
      var p5_nodes = children(p5);
      sup4 = claim_element(p5_nodes, "SUP", {});
      var sup4_nodes = children(sup4);
      t28 = claim_text(sup4_nodes, "†");
      sup4_nodes.forEach(detach);
      t29 = claim_text(p5_nodes, " If the permission is not channel-level, e.g. ");
      a3 = claim_element(p5_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t30 = claim_text(a3_nodes, "Ban Members");
      a3_nodes.forEach(detach);
      t31 = claim_text(p5_nodes, ", this does not apply.");
      p5_nodes.forEach(detach);
      claim_component(callout0.$$.fragment, div_nodes);
      br = claim_element(div_nodes, "BR", {});
      claim_component(callout1.$$.fragment, div_nodes);
      claim_component(linkable2.$$.fragment, div_nodes);
      claim_component(linkable3.$$.fragment, div_nodes);
      p6 = claim_element(div_nodes, "P", {});
      var p6_nodes = children(p6);
      t32 = claim_text(p6_nodes, "Due to the way permissions are calculated (allow role-level overrides always overrule deny role-level overrides regardless of hierarchy), you want to grant as few allow overrides as possible. Note that allow ");
      code2 = claim_element(p6_nodes, "CODE", {});
      var code2_nodes = children(code2);
      t33 = claim_text(code2_nodes, "@everyone");
      code2_nodes.forEach(detach);
      t34 = claim_text(p6_nodes, "-level overrides are not an issue as role-level overrides take priority.");
      p6_nodes.forEach(detach);
      p7 = claim_element(div_nodes, "P", {});
      var p7_nodes = children(p7);
      t35 = claim_text(p7_nodes, "In the following sections, we cover many common patterns, the best way to set them up to optimize maintainability, and common pitfalls to watch out for.");
      p7_nodes.forEach(detach);
      claim_component(linkable4.$$.fragment, div_nodes);
      p8 = claim_element(div_nodes, "P", {});
      var p8_nodes = children(p8);
      t36 = claim_text(p8_nodes, "Most servers have a role that is granted by clicking on the verification prompt to confirm that they have read the rules (as a weak filter against bots). Typically, channels are only visible to verified users except landing channels. Due to the way permissions are calculated, giving the verified role allow overrides will prevent you from denying them on other roles. For example, giving it ");
      a4 = claim_element(p8_nodes, "A", { href: true });
      var a4_nodes = children(a4);
      t37 = claim_text(a4_nodes, "Send Messages");
      a4_nodes.forEach(detach);
      t38 = claim_text(p8_nodes, " via an override will stop mute roles from working.");
      p8_nodes.forEach(detach);
      p9 = claim_element(div_nodes, "P", {});
      var p9_nodes = children(p9);
      t39 = claim_text(p9_nodes, "Before you set one up, consider using Discord's built-in member verification. This is stronger than verification roles, as a user who has not passed membership screening cannot DM server members. It automatically disables all interaction, including clicking buttons or adding to existing reactions. Verification roles are already a weak filter against bots, and allowing ");
      code3 = claim_element(p9_nodes, "CODE", {});
      var code3_nodes = children(code3);
      t40 = claim_text(code3_nodes, "@everyone");
      code3_nodes.forEach(detach);
      t41 = claim_text(p9_nodes, " to see all public channels does not actually create any tangible threat.");
      p9_nodes.forEach(detach);
      p10 = claim_element(div_nodes, "P", {});
      var p10_nodes = children(p10);
      t42 = claim_text(p10_nodes, "If you've decided to do this anyway, the best way to set it up is to deny ");
      code4 = claim_element(p10_nodes, "CODE", {});
      var code4_nodes = children(code4);
      t43 = claim_text(code4_nodes, "@everyone");
      code4_nodes.forEach(detach);
      t44 = claim_text(p10_nodes, " and grant your verification role ");
      a5 = claim_element(p10_nodes, "A", { href: true });
      var a5_nodes = children(a5);
      t45 = claim_text(a5_nodes, "View Channel");
      a5_nodes.forEach(detach);
      t46 = claim_text(p10_nodes, " at a base level. All channels are now automatically visible only to verified users. Then, just allow ");
      code5 = claim_element(p10_nodes, "CODE", {});
      var code5_nodes = children(code5);
      t47 = claim_text(code5_nodes, "@everyone");
      code5_nodes.forEach(detach);
      t48 = claim_text(p10_nodes, " permission to see your landing channels via overrides (remember that allow ");
      code6 = claim_element(p10_nodes, "CODE", {});
      var code6_nodes = children(code6);
      t49 = claim_text(code6_nodes, "@everyone");
      code6_nodes.forEach(detach);
      t50 = claim_text(p10_nodes, "-level overrides are not an issue).");
      p10_nodes.forEach(detach);
      claim_component(image0.$$.fragment, div_nodes);
      claim_component(image1.$$.fragment, div_nodes);
      claim_component(image2.$$.fragment, div_nodes);
      p11 = claim_element(div_nodes, "P", {});
      var p11_nodes = children(p11);
      t51 = claim_text(p11_nodes, "In addition to not using unnecessary allow overrides, this is actually easier as you will only need to set up overrides on your landing channels. A common way to do this is to use a deny ");
      code7 = claim_element(p11_nodes, "CODE", {});
      var code7_nodes = children(code7);
      t52 = claim_text(code7_nodes, "@everyone");
      code7_nodes.forEach(detach);
      t53 = claim_text(p11_nodes, "-level and allow role-level override on all non-landing channels, which is not only harder but also introduces allow role-level overrides.");
      p11_nodes.forEach(detach);
      p12 = claim_element(div_nodes, "P", {});
      var p12_nodes = children(p12);
      t54 = claim_text(p12_nodes, "If you want a public channel that ");
      code8 = claim_element(p12_nodes, "CODE", {});
      var code8_nodes = children(code8);
      t55 = claim_text(code8_nodes, "@everyone");
      code8_nodes.forEach(detach);
      t56 = claim_text(p12_nodes, " can see but only verified users can send messages in, just disable ");
      a6 = claim_element(p12_nodes, "A", { href: true });
      var a6_nodes = children(a6);
      t57 = claim_text(a6_nodes, "Send Messages");
      a6_nodes.forEach(detach);
      t58 = claim_text(p12_nodes, " for ");
      code9 = claim_element(p12_nodes, "CODE", {});
      var code9_nodes = children(code9);
      t59 = claim_text(code9_nodes, "@everyone");
      code9_nodes.forEach(detach);
      t60 = claim_text(p12_nodes, " and enable it for the verified role. If you then need a channel that ");
      code10 = claim_element(p12_nodes, "CODE", {});
      var code10_nodes = children(code10);
      t61 = claim_text(code10_nodes, "@everyone");
      code10_nodes.forEach(detach);
      t62 = claim_text(p12_nodes, " can send messages in, just enable that via an override.");
      p12_nodes.forEach(detach);
      claim_component(image3.$$.fragment, div_nodes);
      claim_component(image4.$$.fragment, div_nodes);
      claim_component(image5.$$.fragment, div_nodes);
      claim_component(linkable5.$$.fragment, div_nodes);
      p13 = claim_element(div_nodes, "P", {});
      var p13_nodes = children(p13);
      t63 = claim_text(p13_nodes, "You may want to lock some channels behind access roles such as reaction roles, or staff channels for staff roles. For example, you might want to restrict your leaks channel behind a self-assignable role. In this case, you will need to use an allow role-level override. It is unavoidable, but this is acceptable because usually you don't need to set deny role-level overrides just for viewing the channel.");
      p13_nodes.forEach(detach);
      p14 = claim_element(div_nodes, "P", {});
      var p14_nodes = children(p14);
      t64 = claim_text(p14_nodes, "Firstly, add a deny ");
      code11 = claim_element(p14_nodes, "CODE", {});
      var code11_nodes = children(code11);
      t65 = claim_text(code11_nodes, "@everyone");
      code11_nodes.forEach(detach);
      t66 = claim_text(p14_nodes, "-level override for ");
      a7 = claim_element(p14_nodes, "A", { href: true });
      var a7_nodes = children(a7);
      t67 = claim_text(a7_nodes, "View Channel");
      a7_nodes.forEach(detach);
      t68 = claim_text(p14_nodes, ". Then, add allow role-level overrides for any roles you want to grant access.");
      p14_nodes.forEach(detach);
      p15 = claim_element(div_nodes, "P", {});
      var p15_nodes = children(p15);
      t69 = claim_text(p15_nodes, "Importantly, do not enable any permissions other than View Channel like sending messages. If a user cannot see a channel, they cannot take any actions relating to the channel.");
      p15_nodes.forEach(detach);
      claim_component(linkable6.$$.fragment, div_nodes);
      p16 = claim_element(div_nodes, "P", {});
      var p16_nodes = children(p16);
      t70 = claim_text(p16_nodes, "For this, you will need to grant an allow role-level override. However, if it's going to staff, it is fine. The reason you want to avoid allow role-level overrides is that it stops you from disabling it per role via things like mute roles. However, you should not need to mute your staff members. Also, you have the option to use timeouts if needed.");
      p16_nodes.forEach(detach);
      claim_component(linkable7.$$.fragment, div_nodes);
      p17 = claim_element(div_nodes, "P", {});
      var p17_nodes = children(p17);
      t71 = claim_text(p17_nodes, "Before you read this, consider if you want to use mute roles. Discord now has timeouts which are very similar but built into the system. There are several advantages - it makes it obvious to the user that they are timed out, lets moderators easily identify that they are timed out without letting other users be able to know, and shows a countdown to the user in the client.");
      p17_nodes.forEach(detach);
      p18 = claim_element(div_nodes, "P", {});
      var p18_nodes = children(p18);
      t72 = claim_text(p18_nodes, "There are a few disadvantages as well - it can only last up to 28 days, and it disables all permissions except view channel and read message history. In fact, they cannot even react, even to reactions that already exist, and cannot interact with buttons either. This prevents them from using reaction roles.");
      p18_nodes.forEach(detach);
      p19 = claim_element(div_nodes, "P", {});
      var p19_nodes = children(p19);
      t73 = claim_text(p19_nodes, "If you have decided that you want to use a mute role instead, you will want to set an override in every channel (where the mute role matters) that denies permissions you want muted users to be unable to use. We recommend Send Messages, Send Messages in Threads, Add Reactions, Connect, and Use Application Commands. If you allow your members to create threads, you should deny that to the mute role as well.");
      p19_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "/info/discord/permission-list#ADMINISTRATOR");
      attr(a1, "href", "/info/discord/permission-list#VIEW_CHANNEL");
      attr(a2, "href", "/info/discord/permission-list#READ_MESSAGE_HISTORY");
      attr(a3, "href", "/info/discord/permission-list#BAN_MEMBERS");
      attr(a4, "href", "/info/discord/permission-list#SEND_MESSAGES");
      attr(a5, "href", "/info/discord/permission-list#VIEW_CHANNEL");
      attr(a6, "href", "/info/discord/permission-list#SEND_MESSAGES");
      attr(a7, "href", "/info/discord/permission-list#VIEW_CHANNEL");
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      mount_component(linkable0, div, null);
      append_hydration(div, p0);
      append_hydration(p0, t1);
      append_hydration(div, p1);
      append_hydration(p1, t2);
      append_hydration(div, p2);
      append_hydration(p2, t3);
      mount_component(linkable1, div, null);
      append_hydration(div, p3);
      append_hydration(p3, t4);
      append_hydration(div, p4);
      append_hydration(p4, t5);
      append_hydration(div, ul);
      append_hydration(ul, li0);
      append_hydration(li0, t6);
      append_hydration(li0, a0);
      append_hydration(a0, t7);
      append_hydration(li0, t8);
      append_hydration(ul, li1);
      append_hydration(li1, t9);
      append_hydration(li1, a1);
      append_hydration(a1, t10);
      append_hydration(li1, t11);
      append_hydration(li1, a2);
      append_hydration(a2, t12);
      append_hydration(li1, t13);
      append_hydration(ul, li2);
      append_hydration(li2, t14);
      append_hydration(li2, sup0);
      append_hydration(sup0, t15);
      append_hydration(ul, li3);
      append_hydration(li3, t16);
      append_hydration(li3, sup1);
      append_hydration(sup1, t17);
      append_hydration(ul, li4);
      append_hydration(li4, t18);
      append_hydration(li4, sup2);
      append_hydration(sup2, t19);
      append_hydration(ul, li5);
      append_hydration(li5, t20);
      append_hydration(li5, code0);
      append_hydration(code0, t21);
      append_hydration(li5, t22);
      append_hydration(li5, sup3);
      append_hydration(sup3, t23);
      append_hydration(ul, li6);
      append_hydration(li6, t24);
      append_hydration(li6, code1);
      append_hydration(code1, t25);
      append_hydration(li6, t26);
      append_hydration(ul, li7);
      append_hydration(li7, t27);
      append_hydration(div, p5);
      append_hydration(p5, sup4);
      append_hydration(sup4, t28);
      append_hydration(p5, t29);
      append_hydration(p5, a3);
      append_hydration(a3, t30);
      append_hydration(p5, t31);
      mount_component(callout0, div, null);
      append_hydration(div, br);
      mount_component(callout1, div, null);
      mount_component(linkable2, div, null);
      mount_component(linkable3, div, null);
      append_hydration(div, p6);
      append_hydration(p6, t32);
      append_hydration(p6, code2);
      append_hydration(code2, t33);
      append_hydration(p6, t34);
      append_hydration(div, p7);
      append_hydration(p7, t35);
      mount_component(linkable4, div, null);
      append_hydration(div, p8);
      append_hydration(p8, t36);
      append_hydration(p8, a4);
      append_hydration(a4, t37);
      append_hydration(p8, t38);
      append_hydration(div, p9);
      append_hydration(p9, t39);
      append_hydration(p9, code3);
      append_hydration(code3, t40);
      append_hydration(p9, t41);
      append_hydration(div, p10);
      append_hydration(p10, t42);
      append_hydration(p10, code4);
      append_hydration(code4, t43);
      append_hydration(p10, t44);
      append_hydration(p10, a5);
      append_hydration(a5, t45);
      append_hydration(p10, t46);
      append_hydration(p10, code5);
      append_hydration(code5, t47);
      append_hydration(p10, t48);
      append_hydration(p10, code6);
      append_hydration(code6, t49);
      append_hydration(p10, t50);
      mount_component(image0, div, null);
      mount_component(image1, div, null);
      mount_component(image2, div, null);
      append_hydration(div, p11);
      append_hydration(p11, t51);
      append_hydration(p11, code7);
      append_hydration(code7, t52);
      append_hydration(p11, t53);
      append_hydration(div, p12);
      append_hydration(p12, t54);
      append_hydration(p12, code8);
      append_hydration(code8, t55);
      append_hydration(p12, t56);
      append_hydration(p12, a6);
      append_hydration(a6, t57);
      append_hydration(p12, t58);
      append_hydration(p12, code9);
      append_hydration(code9, t59);
      append_hydration(p12, t60);
      append_hydration(p12, code10);
      append_hydration(code10, t61);
      append_hydration(p12, t62);
      mount_component(image3, div, null);
      mount_component(image4, div, null);
      mount_component(image5, div, null);
      mount_component(linkable5, div, null);
      append_hydration(div, p13);
      append_hydration(p13, t63);
      append_hydration(div, p14);
      append_hydration(p14, t64);
      append_hydration(p14, code11);
      append_hydration(code11, t65);
      append_hydration(p14, t66);
      append_hydration(p14, a7);
      append_hydration(a7, t67);
      append_hydration(p14, t68);
      append_hydration(div, p15);
      append_hydration(p15, t69);
      mount_component(linkable6, div, null);
      append_hydration(div, p16);
      append_hydration(p16, t70);
      mount_component(linkable7, div, null);
      append_hydration(div, p17);
      append_hydration(p17, t71);
      append_hydration(div, p18);
      append_hydration(p18, t72);
      append_hydration(div, p19);
      append_hydration(p19, t73);
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
      transition_in(callout0.$$.fragment, local);
      transition_in(callout1.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(linkable3.$$.fragment, local);
      transition_in(linkable4.$$.fragment, local);
      transition_in(image0.$$.fragment, local);
      transition_in(image1.$$.fragment, local);
      transition_in(image2.$$.fragment, local);
      transition_in(image3.$$.fragment, local);
      transition_in(image4.$$.fragment, local);
      transition_in(image5.$$.fragment, local);
      transition_in(linkable5.$$.fragment, local);
      transition_in(linkable6.$$.fragment, local);
      transition_in(linkable7.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(callout0.$$.fragment, local);
      transition_out(callout1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      transition_out(linkable4.$$.fragment, local);
      transition_out(image0.$$.fragment, local);
      transition_out(image1.$$.fragment, local);
      transition_out(image2.$$.fragment, local);
      transition_out(image3.$$.fragment, local);
      transition_out(image4.$$.fragment, local);
      transition_out(image5.$$.fragment, local);
      transition_out(linkable5.$$.fragment, local);
      transition_out(linkable6.$$.fragment, local);
      transition_out(linkable7.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(linkable0);
      destroy_component(linkable1);
      destroy_component(callout0);
      destroy_component(callout1);
      destroy_component(linkable2);
      destroy_component(linkable3);
      destroy_component(linkable4);
      destroy_component(image0);
      destroy_component(image1);
      destroy_component(image2);
      destroy_component(image3);
      destroy_component(image4);
      destroy_component(image5);
      destroy_component(linkable5);
      destroy_component(linkable6);
      destroy_component(linkable7);
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
