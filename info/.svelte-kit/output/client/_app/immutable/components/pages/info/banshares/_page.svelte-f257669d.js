import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, p as set_style, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../chunks/Callout-2d6b8933.js";
import { C as Card } from "../../../../chunks/Card-50f694ea.js";
import { I as Image } from "../../../../chunks/Image-ea922a09.js";
import { L as Linkable } from "../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot_9(ctx) {
  let p;
  let t0;
  let a;
  let t1;
  let t2;
  let b;
  let t3;
  let t4;
  return {
    c() {
      p = element("p");
      t0 = text("A banshare is submitted to ");
      a = element("a");
      t1 = text("/banshare");
      t2 = text(". It is posted to ");
      b = element("b");
      t3 = text("#ban-share-logs");
      t4 = text(" and reviewed by observers.");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "A banshare is submitted to ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "/banshare");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, ". It is posted to ");
      b = claim_element(p_nodes, "B", {});
      var b_nodes = children(b);
      t3 = claim_text(b_nodes, "#ban-share-logs");
      b_nodes.forEach(detach);
      t4 = claim_text(p_nodes, " and reviewed by observers.");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/banshare");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, a);
      append_hydration(a, t1);
      append_hydration(p, t2);
      append_hydration(p, b);
      append_hydration(b, t3);
      append_hydration(p, t4);
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
      t = text("Once it is approved, an observer will publish it and it will be posted to all TCN servers that have banshares set up. The bot will also automatically ban the user(s) in servers where that is enabled.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Once it is approved, an observer will publish it and it will be posted to all TCN servers that have banshares set up. The bot will also automatically ban the user(s) in servers where that is enabled.");
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
      t0 = text("We strive to avoid this from happening, but if a banshare is found to be invalid, we will rescind it with a reason and perform a post-mortem to see why a faulty banshare was approved.");
      p1 = element("p");
      t1 = text("This may also happen if the user's behavior improves and we retroactively agree to un-banshare them.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "We strive to avoid this from happening, but if a banshare is found to be invalid, we will rescind it with a reason and perform a post-mortem to see why a faulty banshare was approved.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t1 = claim_text(p1_nodes, "This may also happen if the user's behavior improves and we retroactively agree to un-banshare them.");
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
  let p0;
  let t0;
  let image;
  let p1;
  let t1;
  let current;
  image = new Image({
    props: {
      src: "https://imgur.com/WgKPMrs.png",
      alt: "example banshare bot log"
    }
  });
  return {
    c() {
      p0 = element("p");
      t0 = text("When the bot performs automated actions, either through auto-ban or the ban button, it will log the action in your logging channel if you set it up. Here's what the log message looks like");
      create_component(image.$$.fragment);
      p1 = element("p");
      t1 = text("This is probably most appropriate for whatever channel your mods use commands in instead of your mod action audit log, but you can put it wherever you want.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "When the bot performs automated actions, either through auto-ban or the ban button, it will log the action in your logging channel if you set it up. Here's what the log message looks like");
      p0_nodes.forEach(detach);
      claim_component(image.$$.fragment, nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t1 = claim_text(p1_nodes, "This is probably most appropriate for whatever channel your mods use commands in instead of your mod action audit log, but you can put it wherever you want.");
      p1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      mount_component(image, target, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t1);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(image.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(image.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p0);
      destroy_component(image, detaching);
      if (detaching)
        detach(p1);
    }
  };
}
function create_default_slot_5(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("You will need to grant the bot read+write access to your banshare channel, and if you want logging for automated actions, to that channel as well.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "You will need to grant the bot read+write access to your banshare channel, and if you want logging for automated actions, to that channel as well.");
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
function create_default_slot_4(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Urgent banshares where the user should be immediately removed everywhere, e.g. illegal activity, raids, ongoing harassment, etc.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Urgent banshares where the user should be immediately removed everywhere, e.g. illegal activity, raids, ongoing harassment, etc.");
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
      t = text("Banshares that aren't very urgent and largely routine cases like low-threat scam bots or more serious accusations like pedophiles/lolicons (that aren't currently actively harming or threatening harm against users).");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Banshares that aren't very urgent and largely routine cases like low-threat scam bots or more serious accusations like pedophiles/lolicons (that aren't currently actively harming or threatening harm against users).");
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
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Non-urgent banshares such as a user being problematic in just one server where it should be considered on an individual basis whether to ban or just keep watch.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Non-urgent banshares such as a user being problematic in just one server where it should be considered on an individual basis whether to ban or just keep watch.");
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
function create_default_slot_1(ctx) {
  let p0;
  let t0;
  let b0;
  let t1;
  let t2;
  let b1;
  let t3;
  let t4;
  let b2;
  let t5;
  let t6;
  let p1;
  let t7;
  return {
    c() {
      p0 = element("p");
      t0 = text("If the ID list is very long, you may use ");
      b0 = element("b");
      t1 = text("Submit Without Validation");
      t2 = text(". Do ");
      b1 = element("b");
      t3 = text("NOT");
      t4 = text(" use ");
      b2 = element("b");
      t5 = text("Submit Without Checking IDs");
      t6 = text(" unless you had to publish a banshare with a link for the ID field and there was no way around it. Skipping the check prevents auto-banning or the ban button from working.");
      p1 = element("p");
      t7 = text("The regular submit option will validate that your IDs all correspond to valid users. Submitting without validation will only verify that the IDs are in the right format, and will still parse them such that auto-banning works.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "If the ID list is very long, you may use ");
      b0 = claim_element(p0_nodes, "B", {});
      var b0_nodes = children(b0);
      t1 = claim_text(b0_nodes, "Submit Without Validation");
      b0_nodes.forEach(detach);
      t2 = claim_text(p0_nodes, ". Do ");
      b1 = claim_element(p0_nodes, "B", {});
      var b1_nodes = children(b1);
      t3 = claim_text(b1_nodes, "NOT");
      b1_nodes.forEach(detach);
      t4 = claim_text(p0_nodes, " use ");
      b2 = claim_element(p0_nodes, "B", {});
      var b2_nodes = children(b2);
      t5 = claim_text(b2_nodes, "Submit Without Checking IDs");
      b2_nodes.forEach(detach);
      t6 = claim_text(p0_nodes, " unless you had to publish a banshare with a link for the ID field and there was no way around it. Skipping the check prevents auto-banning or the ban button from working.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t7 = claim_text(p1_nodes, "The regular submit option will validate that your IDs all correspond to valid users. Submitting without validation will only verify that the IDs are in the right format, and will still parse them such that auto-banning works.");
      p1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      append_hydration(p0, b0);
      append_hydration(b0, t1);
      append_hydration(p0, t2);
      append_hydration(p0, b1);
      append_hydration(b1, t3);
      append_hydration(p0, t4);
      append_hydration(p0, b2);
      append_hydration(b2, t5);
      append_hydration(p0, t6);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t7);
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
  let div2;
  let h1;
  let t0;
  let p0;
  let a0;
  let i;
  let t1;
  let t2;
  let linkable0;
  let p1;
  let t3;
  let div0;
  let card0;
  let card1;
  let card2;
  let br;
  let callout0;
  let linkable1;
  let p2;
  let t4;
  let a1;
  let t5;
  let t6;
  let callout1;
  let ol;
  let li0;
  let t7;
  let code0;
  let t8;
  let t9;
  let code1;
  let t10;
  let t11;
  let li1;
  let t12;
  let code2;
  let t13;
  let t14;
  let code3;
  let t15;
  let t16;
  let li2;
  let t17;
  let b0;
  let t18;
  let t19;
  let code4;
  let t20;
  let t21;
  let li3;
  let t22;
  let code5;
  let t23;
  let t24;
  let li4;
  let t25;
  let b1;
  let t26;
  let t27;
  let code6;
  let t28;
  let t29;
  let linkable2;
  let p3;
  let t30;
  let div1;
  let card3;
  let card4;
  let card5;
  let linkable3;
  let p4;
  let t31;
  let a2;
  let t32;
  let t33;
  let ul1;
  let li6;
  let b2;
  let t34;
  let t35;
  let ul0;
  let li5;
  let t36;
  let li7;
  let b3;
  let t37;
  let t38;
  let li8;
  let b4;
  let t39;
  let t40;
  let li9;
  let b5;
  let t41;
  let t42;
  let li10;
  let b6;
  let t43;
  let t44;
  let li11;
  let b7;
  let t45;
  let t46;
  let callout2;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "overview",
      e: "h2",
      value: "Overview"
    }
  });
  card0 = new Card({
    props: {
      icon: "upload",
      title: "Submit",
      expandable: true,
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  card1 = new Card({
    props: {
      icon: "published_with_changes",
      title: "Publish",
      expandable: true,
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  card2 = new Card({
    props: {
      icon: "unpublished",
      title: "Rescind",
      expandable: true,
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  callout0 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  linkable1 = new Linkable({
    props: { id: "setup", e: "h2", value: "Setup" }
  });
  callout1 = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  linkable2 = new Linkable({
    props: {
      id: "severity",
      e: "h2",
      value: "Severity"
    }
  });
  card3 = new Card({
    props: {
      icon: "keyboard_arrow_up",
      title: "P0 (Critical)",
      icon_color: "var(--red-text)",
      expandable: true,
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  card4 = new Card({
    props: {
      icon: "remove",
      title: "P1 (Medium)",
      icon_color: "var(--yellow-text)",
      expandable: true,
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  card5 = new Card({
    props: {
      icon: "keyboard_arrow_down",
      title: "P2 (Low)",
      icon_color: "var(--blue-text)",
      expandable: true,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  linkable3 = new Linkable({
    props: {
      id: "submitting",
      e: "h2",
      value: "Submitting"
    }
  });
  callout2 = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div2 = element("div");
      h1 = element("h1");
      t0 = text("Banshares");
      p0 = element("p");
      a0 = element("a");
      i = element("i");
      t1 = text("arrow_downward");
      t2 = text("Submitting Guide");
      create_component(linkable0.$$.fragment);
      p1 = element("p");
      t3 = text("The lifecycle of a banshare is as follows. Click a card to learn more.");
      div0 = element("div");
      create_component(card0.$$.fragment);
      create_component(card1.$$.fragment);
      create_component(card2.$$.fragment);
      br = element("br");
      create_component(callout0.$$.fragment);
      create_component(linkable1.$$.fragment);
      p2 = element("p");
      t4 = text("To set up the banshare system, first invite the bot using ");
      a1 = element("a");
      t5 = text("this link");
      t6 = text(".");
      create_component(callout1.$$.fragment);
      ol = element("ol");
      li0 = element("li");
      t7 = text("Use ");
      code0 = element("code");
      t8 = text("/banshare post here");
      t9 = text(" in your banshare channel. To disable banshares, use ");
      code1 = element("code");
      t10 = text("/banshare post none");
      t11 = text(".");
      li1 = element("li");
      t12 = text("Use ");
      code2 = element("code");
      t13 = text("/banshare log here");
      t14 = text(" in your logging channel (optional). To disable this, use ");
      code3 = element("code");
      t15 = text("/banshare log none");
      t16 = text(".");
      li2 = element("li");
      t17 = text("The ban button is enabled by default and allows members with the ");
      b0 = element("b");
      t18 = text("Ban Members");
      t19 = text(" permission to execute the banshare more easily. If you want to disable this, use ");
      code4 = element("code");
      t20 = text("/banshare ban-button");
      t21 = text(" to turn it off (or back on).");
      li3 = element("li");
      t22 = text("To enable auto-banning (the banshare will be executed on its own if it meets the threshold), use ");
      code5 = element("code");
      t23 = text("/banshare autoban");
      t24 = text(" (see below for what the severities mean).");
      li4 = element("li");
      t25 = text("If you use ");
      b1 = element("b");
      t26 = text("Daedalus");
      t27 = text(", you can use ");
      code6 = element("code");
      t28 = text("/banshare daedalus-integration");
      t29 = text(" to enable/disable the integration, which allows the banshare bot to automatically add auto-bans and button bans to the targets' user history.");
      create_component(linkable2.$$.fragment);
      p3 = element("p");
      t30 = text('Banshares are categorized into three levels of severity. These are not very strictly defined, and observers can tweak the severity before or after publication. Here are our guidelines. These do not matter for anything other than auto-banning, and do not reflect how "bad" we think the user is. Click a card to learn more.');
      div1 = element("div");
      create_component(card3.$$.fragment);
      create_component(card4.$$.fragment);
      create_component(card5.$$.fragment);
      create_component(linkable3.$$.fragment);
      p4 = element("p");
      t31 = text("To post a banshare, go to ");
      a2 = element("a");
      t32 = text("this form");
      t33 = text(". All fields should be fairly intuitive, but here is a usage guide for each:");
      ul1 = element("ul");
      li6 = element("li");
      b2 = element("b");
      t34 = text("IDs:");
      t35 = text(" The IDs of the offending users. Please post this as an actual list of IDs. If it is too long to fit in a message, it will be automatically uploaded as a document, but if you paste a link, auto-banning will not function. If it is so long that the form rejects it, then you may need to post a link instead.");
      ul0 = element("ul");
      li5 = element("li");
      t36 = text('Once you paste in your IDs, click the "Check IDs" button that appears to fetch all of the user tags to look them over and make sure you are bansharing the right people. If your banshare is very long, this will take a very long time, so you may wish to skip this step in that case.');
      li7 = element("li");
      b3 = element("b");
      t37 = text("Reason:");
      t38 = text(" Summarize why the users should be banned. This is used as the audit log reason for automated bans, so please keep that in mind when writing it and include full details and other notes in the evidence instead.");
      li8 = element("li");
      b4 = element("b");
      t39 = text("Evidence:");
      t40 = text(" Include enough evidence to prove that your reasons are valid and for other mods to make an informed decision on what to do.");
      li9 = element("li");
      b5 = element("b");
      t41 = text("Server:");
      t42 = text(' Choose what server you are bansharing it from. If the incident is not bound to a particular server or not one you staff, you should pick the server where you feel you have your "main/primary" or most prominent position.');
      li10 = element("li");
      b6 = element("b");
      t43 = text("Severity:");
      t44 = text(" This determines if a banshare is automatically executed. See above for information on what the severity levels mean.");
      li11 = element("li");
      b7 = element("b");
      t45 = text("Urgency:");
      t46 = text(' If you check the "urgent" box, this will ping all observers instead of just a few to review it.');
      create_component(callout2.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { id: true });
      var div2_nodes = children(div2);
      h1 = claim_element(div2_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Banshares");
      h1_nodes.forEach(detach);
      p0 = claim_element(div2_nodes, "P", {});
      var p0_nodes = children(p0);
      a0 = claim_element(p0_nodes, "A", { href: true, style: true });
      var a0_nodes = children(a0);
      i = claim_element(a0_nodes, "I", { class: true, style: true });
      var i_nodes = children(i);
      t1 = claim_text(i_nodes, "arrow_downward");
      i_nodes.forEach(detach);
      t2 = claim_text(a0_nodes, "Submitting Guide");
      a0_nodes.forEach(detach);
      p0_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div2_nodes);
      p1 = claim_element(div2_nodes, "P", {});
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, "The lifecycle of a banshare is as follows. Click a card to learn more.");
      p1_nodes.forEach(detach);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(card0.$$.fragment, div0_nodes);
      claim_component(card1.$$.fragment, div0_nodes);
      claim_component(card2.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      br = claim_element(div2_nodes, "BR", {});
      claim_component(callout0.$$.fragment, div2_nodes);
      claim_component(linkable1.$$.fragment, div2_nodes);
      p2 = claim_element(div2_nodes, "P", {});
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, "To set up the banshare system, first invite the bot using ");
      a1 = claim_element(p2_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "this link");
      a1_nodes.forEach(detach);
      t6 = claim_text(p2_nodes, ".");
      p2_nodes.forEach(detach);
      claim_component(callout1.$$.fragment, div2_nodes);
      ol = claim_element(div2_nodes, "OL", {});
      var ol_nodes = children(ol);
      li0 = claim_element(ol_nodes, "LI", {});
      var li0_nodes = children(li0);
      t7 = claim_text(li0_nodes, "Use ");
      code0 = claim_element(li0_nodes, "CODE", {});
      var code0_nodes = children(code0);
      t8 = claim_text(code0_nodes, "/banshare post here");
      code0_nodes.forEach(detach);
      t9 = claim_text(li0_nodes, " in your banshare channel. To disable banshares, use ");
      code1 = claim_element(li0_nodes, "CODE", {});
      var code1_nodes = children(code1);
      t10 = claim_text(code1_nodes, "/banshare post none");
      code1_nodes.forEach(detach);
      t11 = claim_text(li0_nodes, ".");
      li0_nodes.forEach(detach);
      li1 = claim_element(ol_nodes, "LI", {});
      var li1_nodes = children(li1);
      t12 = claim_text(li1_nodes, "Use ");
      code2 = claim_element(li1_nodes, "CODE", {});
      var code2_nodes = children(code2);
      t13 = claim_text(code2_nodes, "/banshare log here");
      code2_nodes.forEach(detach);
      t14 = claim_text(li1_nodes, " in your logging channel (optional). To disable this, use ");
      code3 = claim_element(li1_nodes, "CODE", {});
      var code3_nodes = children(code3);
      t15 = claim_text(code3_nodes, "/banshare log none");
      code3_nodes.forEach(detach);
      t16 = claim_text(li1_nodes, ".");
      li1_nodes.forEach(detach);
      li2 = claim_element(ol_nodes, "LI", {});
      var li2_nodes = children(li2);
      t17 = claim_text(li2_nodes, "The ban button is enabled by default and allows members with the ");
      b0 = claim_element(li2_nodes, "B", {});
      var b0_nodes = children(b0);
      t18 = claim_text(b0_nodes, "Ban Members");
      b0_nodes.forEach(detach);
      t19 = claim_text(li2_nodes, " permission to execute the banshare more easily. If you want to disable this, use ");
      code4 = claim_element(li2_nodes, "CODE", {});
      var code4_nodes = children(code4);
      t20 = claim_text(code4_nodes, "/banshare ban-button");
      code4_nodes.forEach(detach);
      t21 = claim_text(li2_nodes, " to turn it off (or back on).");
      li2_nodes.forEach(detach);
      li3 = claim_element(ol_nodes, "LI", {});
      var li3_nodes = children(li3);
      t22 = claim_text(li3_nodes, "To enable auto-banning (the banshare will be executed on its own if it meets the threshold), use ");
      code5 = claim_element(li3_nodes, "CODE", {});
      var code5_nodes = children(code5);
      t23 = claim_text(code5_nodes, "/banshare autoban");
      code5_nodes.forEach(detach);
      t24 = claim_text(li3_nodes, " (see below for what the severities mean).");
      li3_nodes.forEach(detach);
      li4 = claim_element(ol_nodes, "LI", {});
      var li4_nodes = children(li4);
      t25 = claim_text(li4_nodes, "If you use ");
      b1 = claim_element(li4_nodes, "B", {});
      var b1_nodes = children(b1);
      t26 = claim_text(b1_nodes, "Daedalus");
      b1_nodes.forEach(detach);
      t27 = claim_text(li4_nodes, ", you can use ");
      code6 = claim_element(li4_nodes, "CODE", {});
      var code6_nodes = children(code6);
      t28 = claim_text(code6_nodes, "/banshare daedalus-integration");
      code6_nodes.forEach(detach);
      t29 = claim_text(li4_nodes, " to enable/disable the integration, which allows the banshare bot to automatically add auto-bans and button bans to the targets' user history.");
      li4_nodes.forEach(detach);
      ol_nodes.forEach(detach);
      claim_component(linkable2.$$.fragment, div2_nodes);
      p3 = claim_element(div2_nodes, "P", {});
      var p3_nodes = children(p3);
      t30 = claim_text(p3_nodes, 'Banshares are categorized into three levels of severity. These are not very strictly defined, and observers can tweak the severity before or after publication. Here are our guidelines. These do not matter for anything other than auto-banning, and do not reflect how "bad" we think the user is. Click a card to learn more.');
      p3_nodes.forEach(detach);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(card3.$$.fragment, div1_nodes);
      claim_component(card4.$$.fragment, div1_nodes);
      claim_component(card5.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      claim_component(linkable3.$$.fragment, div2_nodes);
      p4 = claim_element(div2_nodes, "P", {});
      var p4_nodes = children(p4);
      t31 = claim_text(p4_nodes, "To post a banshare, go to ");
      a2 = claim_element(p4_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t32 = claim_text(a2_nodes, "this form");
      a2_nodes.forEach(detach);
      t33 = claim_text(p4_nodes, ". All fields should be fairly intuitive, but here is a usage guide for each:");
      p4_nodes.forEach(detach);
      ul1 = claim_element(div2_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li6 = claim_element(ul1_nodes, "LI", {});
      var li6_nodes = children(li6);
      b2 = claim_element(li6_nodes, "B", {});
      var b2_nodes = children(b2);
      t34 = claim_text(b2_nodes, "IDs:");
      b2_nodes.forEach(detach);
      t35 = claim_text(li6_nodes, " The IDs of the offending users. Please post this as an actual list of IDs. If it is too long to fit in a message, it will be automatically uploaded as a document, but if you paste a link, auto-banning will not function. If it is so long that the form rejects it, then you may need to post a link instead.");
      ul0 = claim_element(li6_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li5 = claim_element(ul0_nodes, "LI", {});
      var li5_nodes = children(li5);
      t36 = claim_text(li5_nodes, 'Once you paste in your IDs, click the "Check IDs" button that appears to fetch all of the user tags to look them over and make sure you are bansharing the right people. If your banshare is very long, this will take a very long time, so you may wish to skip this step in that case.');
      li5_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      li6_nodes.forEach(detach);
      li7 = claim_element(ul1_nodes, "LI", {});
      var li7_nodes = children(li7);
      b3 = claim_element(li7_nodes, "B", {});
      var b3_nodes = children(b3);
      t37 = claim_text(b3_nodes, "Reason:");
      b3_nodes.forEach(detach);
      t38 = claim_text(li7_nodes, " Summarize why the users should be banned. This is used as the audit log reason for automated bans, so please keep that in mind when writing it and include full details and other notes in the evidence instead.");
      li7_nodes.forEach(detach);
      li8 = claim_element(ul1_nodes, "LI", {});
      var li8_nodes = children(li8);
      b4 = claim_element(li8_nodes, "B", {});
      var b4_nodes = children(b4);
      t39 = claim_text(b4_nodes, "Evidence:");
      b4_nodes.forEach(detach);
      t40 = claim_text(li8_nodes, " Include enough evidence to prove that your reasons are valid and for other mods to make an informed decision on what to do.");
      li8_nodes.forEach(detach);
      li9 = claim_element(ul1_nodes, "LI", {});
      var li9_nodes = children(li9);
      b5 = claim_element(li9_nodes, "B", {});
      var b5_nodes = children(b5);
      t41 = claim_text(b5_nodes, "Server:");
      b5_nodes.forEach(detach);
      t42 = claim_text(li9_nodes, ' Choose what server you are bansharing it from. If the incident is not bound to a particular server or not one you staff, you should pick the server where you feel you have your "main/primary" or most prominent position.');
      li9_nodes.forEach(detach);
      li10 = claim_element(ul1_nodes, "LI", {});
      var li10_nodes = children(li10);
      b6 = claim_element(li10_nodes, "B", {});
      var b6_nodes = children(b6);
      t43 = claim_text(b6_nodes, "Severity:");
      b6_nodes.forEach(detach);
      t44 = claim_text(li10_nodes, " This determines if a banshare is automatically executed. See above for information on what the severity levels mean.");
      li10_nodes.forEach(detach);
      li11 = claim_element(ul1_nodes, "LI", {});
      var li11_nodes = children(li11);
      b7 = claim_element(li11_nodes, "B", {});
      var b7_nodes = children(b7);
      t45 = claim_text(b7_nodes, "Urgency:");
      b7_nodes.forEach(detach);
      t46 = claim_text(li11_nodes, ' If you check the "urgent" box, this will ping all observers instead of just a few to review it.');
      li11_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      claim_component(callout2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "material-icons");
      set_style(i, "padding-right", "0.5em");
      attr(a0, "href", "#submitting");
      set_style(a0, "display", "flex");
      set_style(a0, "align-items", "center");
      attr(div0, "class", "cards");
      attr(a1, "href", "https://discord.com/api/oauth2/authorize?client_id=959360773518413824&permissions=1512097303623&scope=applications.commands%20bot");
      attr(div1, "class", "cards");
      attr(a2, "href", "/banshare");
      attr(div2, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, h1);
      append_hydration(h1, t0);
      append_hydration(div2, p0);
      append_hydration(p0, a0);
      append_hydration(a0, i);
      append_hydration(i, t1);
      append_hydration(a0, t2);
      mount_component(linkable0, div2, null);
      append_hydration(div2, p1);
      append_hydration(p1, t3);
      append_hydration(div2, div0);
      mount_component(card0, div0, null);
      mount_component(card1, div0, null);
      mount_component(card2, div0, null);
      append_hydration(div2, br);
      mount_component(callout0, div2, null);
      mount_component(linkable1, div2, null);
      append_hydration(div2, p2);
      append_hydration(p2, t4);
      append_hydration(p2, a1);
      append_hydration(a1, t5);
      append_hydration(p2, t6);
      mount_component(callout1, div2, null);
      append_hydration(div2, ol);
      append_hydration(ol, li0);
      append_hydration(li0, t7);
      append_hydration(li0, code0);
      append_hydration(code0, t8);
      append_hydration(li0, t9);
      append_hydration(li0, code1);
      append_hydration(code1, t10);
      append_hydration(li0, t11);
      append_hydration(ol, li1);
      append_hydration(li1, t12);
      append_hydration(li1, code2);
      append_hydration(code2, t13);
      append_hydration(li1, t14);
      append_hydration(li1, code3);
      append_hydration(code3, t15);
      append_hydration(li1, t16);
      append_hydration(ol, li2);
      append_hydration(li2, t17);
      append_hydration(li2, b0);
      append_hydration(b0, t18);
      append_hydration(li2, t19);
      append_hydration(li2, code4);
      append_hydration(code4, t20);
      append_hydration(li2, t21);
      append_hydration(ol, li3);
      append_hydration(li3, t22);
      append_hydration(li3, code5);
      append_hydration(code5, t23);
      append_hydration(li3, t24);
      append_hydration(ol, li4);
      append_hydration(li4, t25);
      append_hydration(li4, b1);
      append_hydration(b1, t26);
      append_hydration(li4, t27);
      append_hydration(li4, code6);
      append_hydration(code6, t28);
      append_hydration(li4, t29);
      mount_component(linkable2, div2, null);
      append_hydration(div2, p3);
      append_hydration(p3, t30);
      append_hydration(div2, div1);
      mount_component(card3, div1, null);
      mount_component(card4, div1, null);
      mount_component(card5, div1, null);
      mount_component(linkable3, div2, null);
      append_hydration(div2, p4);
      append_hydration(p4, t31);
      append_hydration(p4, a2);
      append_hydration(a2, t32);
      append_hydration(p4, t33);
      append_hydration(div2, ul1);
      append_hydration(ul1, li6);
      append_hydration(li6, b2);
      append_hydration(b2, t34);
      append_hydration(li6, t35);
      append_hydration(li6, ul0);
      append_hydration(ul0, li5);
      append_hydration(li5, t36);
      append_hydration(ul1, li7);
      append_hydration(li7, b3);
      append_hydration(b3, t37);
      append_hydration(li7, t38);
      append_hydration(ul1, li8);
      append_hydration(li8, b4);
      append_hydration(b4, t39);
      append_hydration(li8, t40);
      append_hydration(ul1, li9);
      append_hydration(li9, b5);
      append_hydration(b5, t41);
      append_hydration(li9, t42);
      append_hydration(ul1, li10);
      append_hydration(li10, b6);
      append_hydration(b6, t43);
      append_hydration(li10, t44);
      append_hydration(ul1, li11);
      append_hydration(li11, b7);
      append_hydration(b7, t45);
      append_hydration(li11, t46);
      mount_component(callout2, div2, null);
      current = true;
    },
    p(ctx2, dirty) {
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
      const card3_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card3.$set(card3_changes);
      const card4_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card4.$set(card4_changes);
      const card5_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card5.$set(card5_changes);
      const callout2_changes = {};
      if (dirty & /*$$scope*/
      1) {
        callout2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout2.$set(callout2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(linkable0.$$.fragment, local);
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      transition_in(callout0.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(callout1.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(card3.$$.fragment, local);
      transition_in(card4.$$.fragment, local);
      transition_in(card5.$$.fragment, local);
      transition_in(linkable3.$$.fragment, local);
      transition_in(callout2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      transition_out(callout0.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(callout1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(card3.$$.fragment, local);
      transition_out(card4.$$.fragment, local);
      transition_out(card5.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      transition_out(callout2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(linkable0);
      destroy_component(card0);
      destroy_component(card1);
      destroy_component(card2);
      destroy_component(callout0);
      destroy_component(linkable1);
      destroy_component(callout1);
      destroy_component(linkable2);
      destroy_component(card3);
      destroy_component(card4);
      destroy_component(card5);
      destroy_component(linkable3);
      destroy_component(callout2);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/quickstart#banshares", "Quickstart"],
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
