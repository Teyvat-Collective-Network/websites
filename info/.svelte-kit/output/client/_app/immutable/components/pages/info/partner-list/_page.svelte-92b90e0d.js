import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, a as space, r as claim_text, c as claim_space, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../chunks/Callout-2d6b8933.js";
import { C as Card } from "../../../../chunks/Card-50f694ea.js";
import { L as Linkable } from "../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot_5(ctx) {
  let p;
  let t0;
  let ul;
  let li0;
  let t1;
  let a;
  let t2;
  let t3;
  let li1;
  let t4;
  let code;
  let t5;
  let t6;
  let li2;
  let t7;
  return {
    c() {
      p = element("p");
      t0 = text("The following methods will all meet the requirements, and if you like the default style and don't need to cutomize it, you can use these options.");
      ul = element("ul");
      li0 = element("li");
      t1 = text("Post it from ");
      a = element("a");
      t2 = text("https://embeds.leaf.moe/TCN_partners");
      t3 = text(".");
      li1 = element("li");
      t4 = text("Use ");
      code = element("code");
      t5 = text("/partners");
      t6 = text(" on the TCN Global Chat bot.");
      li2 = element("li");
      t7 = text("Set up autosync (instructions below the requirements).");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "The following methods will all meet the requirements, and if you like the default style and don't need to cutomize it, you can use these options.");
      p_nodes.forEach(detach);
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      t1 = claim_text(li0_nodes, "Post it from ");
      a = claim_element(li0_nodes, "A", { href: true });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "https://embeds.leaf.moe/TCN_partners");
      a_nodes.forEach(detach);
      t3 = claim_text(li0_nodes, ".");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      t4 = claim_text(li1_nodes, "Use ");
      code = claim_element(li1_nodes, "CODE", {});
      var code_nodes = children(code);
      t5 = claim_text(code_nodes, "/partners");
      code_nodes.forEach(detach);
      t6 = claim_text(li1_nodes, " on the TCN Global Chat bot.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t7 = claim_text(li2_nodes, "Set up autosync (instructions below the requirements).");
      li2_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://embeds.leaf.moe/TCN_partners");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      insert_hydration(target, ul, anchor);
      append_hydration(ul, li0);
      append_hydration(li0, t1);
      append_hydration(li0, a);
      append_hydration(a, t2);
      append_hydration(li0, t3);
      append_hydration(ul, li1);
      append_hydration(li1, t4);
      append_hydration(li1, code);
      append_hydration(code, t5);
      append_hydration(li1, t6);
      append_hydration(ul, li2);
      append_hydration(li2, t7);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching)
        detach(ul);
    }
  };
}
function create_default_slot_4(ctx) {
  let p0;
  let i;
  let t0;
  let p1;
  let t1;
  return {
    c() {
      p0 = element("p");
      i = element("i");
      t0 = text('"In Teyvat, the stars in the sky will always have a place for you."');
      p1 = element("p");
      t1 = text("A network of high-quality Genshin Impact character-mains style servers that focus on creating fan communities. Within the network, individual and network-wide events are held such as: tournaments, scavenger hunts and other fun events, community nights, giveaways, and patch preview livestreams.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      i = claim_element(p0_nodes, "I", {});
      var i_nodes = children(i);
      t0 = claim_text(i_nodes, '"In Teyvat, the stars in the sky will always have a place for you."');
      i_nodes.forEach(detach);
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t1 = claim_text(p1_nodes, "A network of high-quality Genshin Impact character-mains style servers that focus on creating fan communities. Within the network, individual and network-wide events are held such as: tournaments, scavenger hunts and other fun events, community nights, giveaways, and patch preview livestreams.");
      p1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, i);
      append_hydration(i, t0);
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
function create_default_slot_3(ctx) {
  let p;
  let t0;
  let a;
  let t1;
  return {
    c() {
      p = element("p");
      t0 = text("Join us in the official TCN hub to ask questions about the network, talk to other network members, get information on the network and how to apply, and contact observers (admins)! ");
      a = element("a");
      t1 = text("https://discord.gg/FG2wpbywSx");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Join us in the official TCN hub to ask questions about the network, talk to other network members, get information on the network and how to apply, and contact observers (admins)! ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "https://discord.gg/FG2wpbywSx");
      a_nodes.forEach(detach);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://discord.gg/FG2wpbywSx");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, a);
      append_hydration(a, t1);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
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
      t0 = text("The TCN is partnered with ");
      a = element("a");
      t1 = text("Genshin Wizard");
      t2 = text(", a multipurpose Genshin Impact Discord bot with a wide array of features to let you view your in-game stats, flex your builds, view build guides and hundreds of high-quality infographics, and more!");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "The TCN is partnered with ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Genshin Wizard");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, ", a multipurpose Genshin Impact Discord bot with a wide array of features to let you view your in-game stats, flex your builds, view build guides and hundreds of high-quality infographics, and more!");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://genshinwizard.com");
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
  let p0;
  let b;
  let t0;
  let t1;
  let p1;
  let t2;
  return {
    c() {
      p0 = element("p");
      b = element("b");
      t0 = text("Is this for me?");
      t1 = text(" If you would like to follow the default format of the TCN partner embed and don't want to have to update it manually, this is for you.");
      p1 = element("p");
      t2 = text("You can choose a message that will be automatically edited each time or for the bot to automatically delete and re-post the message each time it is updated.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      b = claim_element(p0_nodes, "B", {});
      var b_nodes = children(b);
      t0 = claim_text(b_nodes, "Is this for me?");
      b_nodes.forEach(detach);
      t1 = claim_text(p0_nodes, " If you would like to follow the default format of the TCN partner embed and don't want to have to update it manually, this is for you.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "You can choose a message that will be automatically edited each time or for the bot to automatically delete and re-post the message each time it is updated.");
      p1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, b);
      append_hydration(b, t0);
      append_hydration(p0, t1);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t2);
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
  let div1;
  let h1;
  let t0;
  let callout0;
  let linkable0;
  let p0;
  let t1;
  let ul0;
  let li0;
  let b0;
  let t2;
  let t3;
  let a0;
  let t4;
  let li1;
  let b1;
  let t5;
  let t6;
  let li2;
  let b2;
  let t7;
  let t8;
  let li3;
  let b3;
  let t9;
  let t10;
  let a1;
  let t11;
  let t12;
  let li4;
  let b4;
  let t13;
  let t14;
  let a2;
  let t15;
  let t16;
  let p1;
  let t17;
  let div0;
  let card0;
  let card1;
  let card2;
  let linkable1;
  let callout1;
  let ol;
  let li5;
  let t18;
  let a3;
  let t19;
  let t20;
  let li9;
  let t21;
  let ul1;
  let li6;
  let b5;
  let t22;
  let t23;
  let code0;
  let t24;
  let t25;
  let code1;
  let t26;
  let t27;
  let li7;
  let t28;
  let code2;
  let t29;
  let t30;
  let li8;
  let t31;
  let code3;
  let t32;
  let t33;
  let li10;
  let t34;
  let code4;
  let t35;
  let t36;
  let code5;
  let t37;
  let t38;
  let li11;
  let t39;
  let code6;
  let t40;
  let t41;
  let p2;
  let t42;
  let current;
  callout0 = new Callout({
    props: {
      style: "green",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  linkable0 = new Linkable({
    props: {
      id: "requirements",
      e: "h2",
      value: "Requirements"
    }
  });
  card0 = new Card({
    props: {
      icon: "notes",
      title: "General Description",
      expandable: true,
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  card1 = new Card({
    props: {
      icon: "hub",
      title: "TCN Hub",
      expandable: true,
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  card2 = new Card({
    props: {
      icon: "auto_fix_high",
      title: "Genshin Wizard",
      expandable: true,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "autosync",
      e: "h2",
      value: "Autosync"
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
      div1 = element("div");
      h1 = element("h1");
      t0 = text("Partner List & Autosync");
      create_component(callout0.$$.fragment);
      create_component(linkable0.$$.fragment);
      p0 = element("p");
      t1 = text("You must include all of the following:");
      ul0 = element("ul");
      li0 = element("li");
      b0 = element("b");
      t2 = text("Website URL:");
      t3 = space();
      a0 = element("a");
      t4 = text("https://teyvatcollective.network");
      li1 = element("li");
      b1 = element("b");
      t5 = text("Description:");
      t6 = text(" a description of the TCN.");
      li2 = element("li");
      b2 = element("b");
      t7 = text("Partner List:");
      t8 = text(" a list of all TCN partners, which must not contain any other servers.");
      li3 = element("li");
      b3 = element("b");
      t9 = text("TCN Hub:");
      t10 = text(" the description for the TCN Hub and its invite link (");
      a1 = element("a");
      t11 = text("https://discord.gg/FG2wpbywSx");
      t12 = text(").");
      li4 = element("li");
      b4 = element("b");
      t13 = text("Genshin Wizard:");
      t14 = text(" the description for Genshin Wizard and its website link (");
      a2 = element("a");
      t15 = text("https://genshinwizard.com");
      t16 = text(").");
      p1 = element("p");
      t17 = text("You do not need to include all of these verbatim, but here's what we recommend for the description. Your description is expected to be roughly accurate, but you can write it in your own style. Click each card to see what we recommend.");
      div0 = element("div");
      create_component(card0.$$.fragment);
      create_component(card1.$$.fragment);
      create_component(card2.$$.fragment);
      create_component(linkable1.$$.fragment);
      create_component(callout1.$$.fragment);
      ol = element("ol");
      li5 = element("li");
      t18 = text("Invite the bot using ");
      a3 = element("a");
      t19 = text("this link");
      t20 = text(".");
      li9 = element("li");
      t21 = text("Set up the bot:");
      ul1 = element("ul");
      li6 = element("li");
      b5 = element("b");
      t22 = text("Quick Setup:");
      t23 = text(" Right click your current partner embed and select ");
      code0 = element("code");
      t24 = text("Apps > Set Target");
      t25 = text(". If this doesn't work, it will tell you why. Then, call ");
      code1 = element("code");
      t26 = text("/autosync update");
      t27 = text(" to call in an update.");
      li7 = element("li");
      t28 = text("Use ");
      code2 = element("code");
      t29 = text("/autosync webhook set");
      t30 = text(" with the webhook's URL.");
      li8 = element("li");
      t31 = text("Use ");
      code3 = element("code");
      t32 = text("/autosync message set");
      t33 = text(" with the message URL that points to the current embed (if you don't have one, you can skip this step).");
      li10 = element("li");
      t34 = text("If you would like the message to be deleted and reposted each time instead of edited, use ");
      code4 = element("code");
      t35 = text("/autosync mode repost");
      t36 = text(". To switch it back to edit mode (default), use ");
      code5 = element("code");
      t37 = text("/autosync mode edit");
      t38 = text(".");
      li11 = element("li");
      t39 = text("If your embed is out of date, use ");
      code6 = element("code");
      t40 = text("/autosync update");
      t41 = text(" to trigger an update.");
      p2 = element("p");
      t42 = text("Just like that, you're all done and as long as you don't remove the bot or delete the webhook, you will never need to update it yourself again!");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { id: true });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Partner List & Autosync");
      h1_nodes.forEach(detach);
      claim_component(callout0.$$.fragment, div1_nodes);
      claim_component(linkable0.$$.fragment, div1_nodes);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "You must include all of the following:");
      p0_nodes.forEach(detach);
      ul0 = claim_element(div1_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      b0 = claim_element(li0_nodes, "B", {});
      var b0_nodes = children(b0);
      t2 = claim_text(b0_nodes, "Website URL:");
      b0_nodes.forEach(detach);
      t3 = claim_space(li0_nodes);
      a0 = claim_element(li0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "https://teyvatcollective.network");
      a0_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      b1 = claim_element(li1_nodes, "B", {});
      var b1_nodes = children(b1);
      t5 = claim_text(b1_nodes, "Description:");
      b1_nodes.forEach(detach);
      t6 = claim_text(li1_nodes, " a description of the TCN.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul0_nodes, "LI", {});
      var li2_nodes = children(li2);
      b2 = claim_element(li2_nodes, "B", {});
      var b2_nodes = children(b2);
      t7 = claim_text(b2_nodes, "Partner List:");
      b2_nodes.forEach(detach);
      t8 = claim_text(li2_nodes, " a list of all TCN partners, which must not contain any other servers.");
      li2_nodes.forEach(detach);
      li3 = claim_element(ul0_nodes, "LI", {});
      var li3_nodes = children(li3);
      b3 = claim_element(li3_nodes, "B", {});
      var b3_nodes = children(b3);
      t9 = claim_text(b3_nodes, "TCN Hub:");
      b3_nodes.forEach(detach);
      t10 = claim_text(li3_nodes, " the description for the TCN Hub and its invite link (");
      a1 = claim_element(li3_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t11 = claim_text(a1_nodes, "https://discord.gg/FG2wpbywSx");
      a1_nodes.forEach(detach);
      t12 = claim_text(li3_nodes, ").");
      li3_nodes.forEach(detach);
      li4 = claim_element(ul0_nodes, "LI", {});
      var li4_nodes = children(li4);
      b4 = claim_element(li4_nodes, "B", {});
      var b4_nodes = children(b4);
      t13 = claim_text(b4_nodes, "Genshin Wizard:");
      b4_nodes.forEach(detach);
      t14 = claim_text(li4_nodes, " the description for Genshin Wizard and its website link (");
      a2 = claim_element(li4_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t15 = claim_text(a2_nodes, "https://genshinwizard.com");
      a2_nodes.forEach(detach);
      t16 = claim_text(li4_nodes, ").");
      li4_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t17 = claim_text(p1_nodes, "You do not need to include all of these verbatim, but here's what we recommend for the description. Your description is expected to be roughly accurate, but you can write it in your own style. Click each card to see what we recommend.");
      p1_nodes.forEach(detach);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(card0.$$.fragment, div0_nodes);
      claim_component(card1.$$.fragment, div0_nodes);
      claim_component(card2.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div1_nodes);
      claim_component(callout1.$$.fragment, div1_nodes);
      ol = claim_element(div1_nodes, "OL", {});
      var ol_nodes = children(ol);
      li5 = claim_element(ol_nodes, "LI", {});
      var li5_nodes = children(li5);
      t18 = claim_text(li5_nodes, "Invite the bot using ");
      a3 = claim_element(li5_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t19 = claim_text(a3_nodes, "this link");
      a3_nodes.forEach(detach);
      t20 = claim_text(li5_nodes, ".");
      li5_nodes.forEach(detach);
      li9 = claim_element(ol_nodes, "LI", {});
      var li9_nodes = children(li9);
      t21 = claim_text(li9_nodes, "Set up the bot:");
      ul1 = claim_element(li9_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li6 = claim_element(ul1_nodes, "LI", {});
      var li6_nodes = children(li6);
      b5 = claim_element(li6_nodes, "B", {});
      var b5_nodes = children(b5);
      t22 = claim_text(b5_nodes, "Quick Setup:");
      b5_nodes.forEach(detach);
      t23 = claim_text(li6_nodes, " Right click your current partner embed and select ");
      code0 = claim_element(li6_nodes, "CODE", {});
      var code0_nodes = children(code0);
      t24 = claim_text(code0_nodes, "Apps > Set Target");
      code0_nodes.forEach(detach);
      t25 = claim_text(li6_nodes, ". If this doesn't work, it will tell you why. Then, call ");
      code1 = claim_element(li6_nodes, "CODE", {});
      var code1_nodes = children(code1);
      t26 = claim_text(code1_nodes, "/autosync update");
      code1_nodes.forEach(detach);
      t27 = claim_text(li6_nodes, " to call in an update.");
      li6_nodes.forEach(detach);
      li7 = claim_element(ul1_nodes, "LI", {});
      var li7_nodes = children(li7);
      t28 = claim_text(li7_nodes, "Use ");
      code2 = claim_element(li7_nodes, "CODE", {});
      var code2_nodes = children(code2);
      t29 = claim_text(code2_nodes, "/autosync webhook set");
      code2_nodes.forEach(detach);
      t30 = claim_text(li7_nodes, " with the webhook's URL.");
      li7_nodes.forEach(detach);
      li8 = claim_element(ul1_nodes, "LI", {});
      var li8_nodes = children(li8);
      t31 = claim_text(li8_nodes, "Use ");
      code3 = claim_element(li8_nodes, "CODE", {});
      var code3_nodes = children(code3);
      t32 = claim_text(code3_nodes, "/autosync message set");
      code3_nodes.forEach(detach);
      t33 = claim_text(li8_nodes, " with the message URL that points to the current embed (if you don't have one, you can skip this step).");
      li8_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      li9_nodes.forEach(detach);
      li10 = claim_element(ol_nodes, "LI", {});
      var li10_nodes = children(li10);
      t34 = claim_text(li10_nodes, "If you would like the message to be deleted and reposted each time instead of edited, use ");
      code4 = claim_element(li10_nodes, "CODE", {});
      var code4_nodes = children(code4);
      t35 = claim_text(code4_nodes, "/autosync mode repost");
      code4_nodes.forEach(detach);
      t36 = claim_text(li10_nodes, ". To switch it back to edit mode (default), use ");
      code5 = claim_element(li10_nodes, "CODE", {});
      var code5_nodes = children(code5);
      t37 = claim_text(code5_nodes, "/autosync mode edit");
      code5_nodes.forEach(detach);
      t38 = claim_text(li10_nodes, ".");
      li10_nodes.forEach(detach);
      li11 = claim_element(ol_nodes, "LI", {});
      var li11_nodes = children(li11);
      t39 = claim_text(li11_nodes, "If your embed is out of date, use ");
      code6 = claim_element(li11_nodes, "CODE", {});
      var code6_nodes = children(code6);
      t40 = claim_text(code6_nodes, "/autosync update");
      code6_nodes.forEach(detach);
      t41 = claim_text(li11_nodes, " to trigger an update.");
      li11_nodes.forEach(detach);
      ol_nodes.forEach(detach);
      p2 = claim_element(div1_nodes, "P", {});
      var p2_nodes = children(p2);
      t42 = claim_text(p2_nodes, "Just like that, you're all done and as long as you don't remove the bot or delete the webhook, you will never need to update it yourself again!");
      p2_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://teyvatcollective.network");
      attr(a1, "href", "https://discord.gg/FG2wpbywSx");
      attr(a2, "href", "https://genshinwizard.com");
      attr(div0, "class", "cards");
      attr(a3, "href", "https://discord.com/api/oauth2/authorize?client_id=713773560371609660&permissions=536871936&scope=bot%20applications.commands");
      attr(div1, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, h1);
      append_hydration(h1, t0);
      mount_component(callout0, div1, null);
      mount_component(linkable0, div1, null);
      append_hydration(div1, p0);
      append_hydration(p0, t1);
      append_hydration(div1, ul0);
      append_hydration(ul0, li0);
      append_hydration(li0, b0);
      append_hydration(b0, t2);
      append_hydration(li0, t3);
      append_hydration(li0, a0);
      append_hydration(a0, t4);
      append_hydration(ul0, li1);
      append_hydration(li1, b1);
      append_hydration(b1, t5);
      append_hydration(li1, t6);
      append_hydration(ul0, li2);
      append_hydration(li2, b2);
      append_hydration(b2, t7);
      append_hydration(li2, t8);
      append_hydration(ul0, li3);
      append_hydration(li3, b3);
      append_hydration(b3, t9);
      append_hydration(li3, t10);
      append_hydration(li3, a1);
      append_hydration(a1, t11);
      append_hydration(li3, t12);
      append_hydration(ul0, li4);
      append_hydration(li4, b4);
      append_hydration(b4, t13);
      append_hydration(li4, t14);
      append_hydration(li4, a2);
      append_hydration(a2, t15);
      append_hydration(li4, t16);
      append_hydration(div1, p1);
      append_hydration(p1, t17);
      append_hydration(div1, div0);
      mount_component(card0, div0, null);
      mount_component(card1, div0, null);
      mount_component(card2, div0, null);
      mount_component(linkable1, div1, null);
      mount_component(callout1, div1, null);
      append_hydration(div1, ol);
      append_hydration(ol, li5);
      append_hydration(li5, t18);
      append_hydration(li5, a3);
      append_hydration(a3, t19);
      append_hydration(li5, t20);
      append_hydration(ol, li9);
      append_hydration(li9, t21);
      append_hydration(li9, ul1);
      append_hydration(ul1, li6);
      append_hydration(li6, b5);
      append_hydration(b5, t22);
      append_hydration(li6, t23);
      append_hydration(li6, code0);
      append_hydration(code0, t24);
      append_hydration(li6, t25);
      append_hydration(li6, code1);
      append_hydration(code1, t26);
      append_hydration(li6, t27);
      append_hydration(ul1, li7);
      append_hydration(li7, t28);
      append_hydration(li7, code2);
      append_hydration(code2, t29);
      append_hydration(li7, t30);
      append_hydration(ul1, li8);
      append_hydration(li8, t31);
      append_hydration(li8, code3);
      append_hydration(code3, t32);
      append_hydration(li8, t33);
      append_hydration(ol, li10);
      append_hydration(li10, t34);
      append_hydration(li10, code4);
      append_hydration(code4, t35);
      append_hydration(li10, t36);
      append_hydration(li10, code5);
      append_hydration(code5, t37);
      append_hydration(li10, t38);
      append_hydration(ol, li11);
      append_hydration(li11, t39);
      append_hydration(li11, code6);
      append_hydration(code6, t40);
      append_hydration(li11, t41);
      append_hydration(div1, p2);
      append_hydration(p2, t42);
      current = true;
    },
    p(ctx2, dirty) {
      const callout0_changes = {};
      if (dirty & /*$$scope*/
      1) {
        callout0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout0.$set(callout0_changes);
      const card0_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card0.$set(card0_changes);
      const card1_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card1.$set(card1_changes);
      const card2_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card2.$set(card2_changes);
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
      transition_in(linkable0.$$.fragment, local);
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(callout1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(callout0.$$.fragment, local);
      transition_out(linkable0.$$.fragment, local);
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(callout1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(callout0);
      destroy_component(linkable0);
      destroy_component(card0);
      destroy_component(card1);
      destroy_component(card2);
      destroy_component(linkable1);
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
      last: ["/info/quickstart#partner-list", "Quickstart"],
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
