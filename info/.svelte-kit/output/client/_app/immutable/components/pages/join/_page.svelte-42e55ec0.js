import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, x as create_component, l as claim_element, m as children, r as claim_text, h as detach, y as claim_component, n as attr, p as set_style, b as insert_hydration, G as append_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, C as noop } from "../../../chunks/index-c4baf36c.js";
import { C as Card } from "../../../chunks/Card-50f694ea.js";
import { L as Linkable } from "../../../chunks/Linkable-8089c9ad.js";
import { I as Image } from "../../../chunks/Image-ea922a09.js";
function create_default_slot_8(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Ensure your server is well-structured, your staff teams are in order, and you are ready to be observed!");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Ensure your server is well-structured, your staff teams are in order, and you are ready to be observed!");
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
  let a;
  let t1;
  let t2;
  let p1;
  let t3;
  return {
    c() {
      p0 = element("p");
      t0 = text("Once you are ready, fill out the application form ");
      a = element("a");
      t1 = text("here");
      t2 = text("! A period of 3 days is always given for the council member to raise any objections to applicant servers.");
      p1 = element("p");
      t3 = text("Afterwards, an observer will be assigned and reach out to you. If there are delays for any reason, we will inform you and give you a transparent timeline.");
      this.h();
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Once you are ready, fill out the application form ");
      a = claim_element(p0_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "here");
      a_nodes.forEach(detach);
      t2 = claim_text(p0_nodes, "! A period of 3 days is always given for the council member to raise any objections to applicant servers.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, "Afterwards, an observer will be assigned and reach out to you. If there are delays for any reason, we will inform you and give you a transparent timeline.");
      p1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/apply");
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      append_hydration(p0, a);
      append_hydration(a, t1);
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
function create_default_slot_6(ctx) {
  let p0;
  let t0;
  let p1;
  let t1;
  return {
    c() {
      p0 = element("p");
      t0 = text("For a 28-day period, an observer will oversee all operations in your server. This is to ensure your server meets our quality expectations for organization and a safe environment.");
      p1 = element("p");
      t1 = text("Once observation is done, they will create a report and share it with you. We will work with you to make sure we have accurately represented your server.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "For a 28-day period, an observer will oversee all operations in your server. This is to ensure your server meets our quality expectations for organization and a safe environment.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t1 = claim_text(p1_nodes, "Once observation is done, they will create a report and share it with you. We will work with you to make sure we have accurately represented your server.");
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
function create_default_slot_5(ctx) {
  let p0;
  let t0;
  let p1;
  let t1;
  return {
    c() {
      p0 = element("p");
      t0 = text("The council will vote based on the report and decide whether to induct or reject your server. In rare cases, we may decide that more time is needed to make a decision and extend the observation by another 28 days, which will be carried out by a new observer.");
      p1 = element("p");
      t1 = text("If your server's mascot character is not confirmed as playable yet, we may decide to approve your server but only induct once the character has been confirmed.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "The council will vote based on the report and decide whether to induct or reject your server. In rare cases, we may decide that more time is needed to make a decision and extend the observation by another 28 days, which will be carried out by a new observer.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t1 = claim_text(p1_nodes, "If your server's mascot character is not confirmed as playable yet, we may decide to approve your server but only induct once the character has been confirmed.");
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
function create_default_slot_4(ctx) {
  let p0;
  let t0;
  let b;
  let t1;
  let t2;
  let p1;
  let t3;
  return {
    c() {
      p0 = element("p");
      t0 = text("If you reach this step, congratulations! You are now a member of the ");
      b = element("b");
      t1 = text("Teyvat Collective Network");
      t2 = text(".");
      p1 = element("p");
      t3 = text("We will guide you through any setup you need help with, so don't worry if you're not really sure what to do. We don't demand much, and we will help you with the few things we do require if you need any help.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "If you reach this step, congratulations! You are now a member of the ");
      b = claim_element(p0_nodes, "B", {});
      var b_nodes = children(b);
      t1 = claim_text(b_nodes, "Teyvat Collective Network");
      b_nodes.forEach(detach);
      t2 = claim_text(p0_nodes, ".");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, "We will guide you through any setup you need help with, so don't worry if you're not really sure what to do. We don't demand much, and we will help you with the few things we do require if you need any help.");
      p1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      append_hydration(p0, b);
      append_hydration(b, t1);
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
function create_default_slot_3(ctx) {
  let p0;
  let t0;
  let p1;
  let t1;
  return {
    c() {
      p0 = element("p");
      t0 = text("If you reach this step, you may be able to join at a later date. We will give you more information when we reject you. If possible, we will tell you why, though sometimes servers have staff/owners that are too problematic and we will not even inform them why.");
      p1 = element("p");
      t1 = text("If we give you a clear reason and expectations, you can apply again in 3 weeks after you have addressed our concerns. If you need help, feel free to reach out to us, as even if you are not a TCN server, our council has a strong desire to see the Genshin Impact Discord space flourish and that includes helping servers outside of our network.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "If you reach this step, you may be able to join at a later date. We will give you more information when we reject you. If possible, we will tell you why, though sometimes servers have staff/owners that are too problematic and we will not even inform them why.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t1 = claim_text(p1_nodes, "If we give you a clear reason and expectations, you can apply again in 3 weeks after you have addressed our concerns. If you need help, feel free to reach out to us, as even if you are not a TCN server, our council has a strong desire to see the Genshin Impact Discord space flourish and that includes helping servers outside of our network.");
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
function create_default_slot_2(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Problematic behavior from the community that is unchecked or from the staff themselves (inciting raids, permitting toxicity, etc.), including if the staff are causing trouble in other servers and this is known by management and nothing is done.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Problematic behavior from the community that is unchecked or from the staff themselves (inciting raids, permitting toxicity, etc.), including if the staff are causing trouble in other servers and this is known by management and nothing is done.");
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
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Insufficient moderation (lack of staff or lack of activity from staff). We are not looking for mods to be talking in chat every day, just that rules are enforced and mods are watching chat and responding to pings enough that the server remains a safe environment.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Insufficient moderation (lack of staff or lack of activity from staff). We are not looking for mods to be talking in chat every day, just that rules are enforced and mods are watching chat and responding to pings enough that the server remains a safe environment.");
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
  let p0;
  let t0;
  let p1;
  let t1;
  return {
    c() {
      p0 = element("p");
      t0 = text("Inadequate server structure (broken permissions, lack of moderation logs, lack of tools for moderators, etc.). If we believe you have potential but need help with your structure or moderation policies or workflows, we may offer to help and induct you even if there are problems, if you demonstrate willingness to improve.");
      p1 = element("p");
      t1 = text("Note that we will never force you to follow a particular structure, just offer help so you can achieve your vision of an ideal environment for your server.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Inadequate server structure (broken permissions, lack of moderation logs, lack of tools for moderators, etc.). If we believe you have potential but need help with your structure or moderation policies or workflows, we may offer to help and induct you even if there are problems, if you demonstrate willingness to improve.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t1 = claim_text(p1_nodes, "Note that we will never force you to follow a particular structure, just offer help so you can achieve your vision of an ideal environment for your server.");
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
function create_fragment(ctx) {
  let div4;
  let div3;
  let h1;
  let t0;
  let p0;
  let t1;
  let p1;
  let a0;
  let t2;
  let linkable0;
  let p2;
  let t3;
  let a1;
  let t4;
  let t5;
  let linkable1;
  let div0;
  let image0;
  let image1;
  let p3;
  let t6;
  let div1;
  let card0;
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let linkable2;
  let p4;
  let t7;
  let p5;
  let t8;
  let p6;
  let t9;
  let b;
  let t10;
  let t11;
  let p7;
  let t12;
  let i;
  let t13;
  let t14;
  let linkable3;
  let p8;
  let t15;
  let p9;
  let t16;
  let div2;
  let card6;
  let card7;
  let card8;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "observation-faq",
      e: "h2",
      value: "Observation FAQ"
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "induction-process",
      e: "h2",
      value: "Induction Process"
    }
  });
  image0 = new Image({
    props: {
      src: "https://i.imgur.com/r32P1Ay.png",
      alt: "Induction Workflow",
      width: "60%",
      classes: "dark"
    }
  });
  image1 = new Image({
    props: {
      src: "https://i.imgur.com/DcJdQ9F.png",
      alt: "Induction Workflow",
      width: "60%",
      classes: "light"
    }
  });
  card0 = new Card({
    props: {
      icon: "edit",
      title: "Preparation",
      expandable: true,
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  card1 = new Card({
    props: {
      icon: "checklist",
      title: "Application",
      expandable: true,
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  card2 = new Card({
    props: {
      icon: "visibility",
      title: "Observation",
      expandable: true,
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  card3 = new Card({
    props: {
      icon: "how_to_vote",
      title: "Decision",
      expandable: true,
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  card4 = new Card({
    props: {
      icon: "handshake",
      title: "Join the TCN",
      expandable: true,
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  card5 = new Card({
    props: {
      icon: "close",
      title: "Rejection",
      expandable: true,
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  linkable2 = new Linkable({
    props: {
      id: "tcn-requirements",
      e: "h2",
      value: "What does the TCN require of me?"
    }
  });
  linkable3 = new Linkable({
    props: {
      id: "why-reject",
      e: "h2",
      value: "What are some reasons a server would be rejected?"
    }
  });
  card6 = new Card({
    props: {
      icon: "report_problem",
      title: "Problematic Behavior",
      expandable: true,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  card7 = new Card({
    props: {
      icon: "remove_moderator",
      title: "Insufficient Moderation",
      expandable: true,
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  card8 = new Card({
    props: {
      icon: "account_tree",
      title: "Inadequate Structure",
      expandable: true,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div4 = element("div");
      div3 = element("div");
      h1 = element("h1");
      t0 = text("Joining the TCN");
      p0 = element("p");
      t1 = text("Only character mains servers (servers dedicated to a specific Genshin Impact character with resources and channels for that character) may join the TCN. To join, you must first apply. Then, we will review your server over a period of 28 days to ensure servers meet our quality standards for a safe environment and provide feedback on structure and organization.");
      p1 = element("p");
      a0 = element("a");
      t2 = text("Apply Here!");
      create_component(linkable0.$$.fragment);
      p2 = element("p");
      t3 = text("Read more about the observation process ");
      a1 = element("a");
      t4 = text("here");
      t5 = text(".");
      create_component(linkable1.$$.fragment);
      div0 = element("div");
      create_component(image0.$$.fragment);
      create_component(image1.$$.fragment);
      p3 = element("p");
      t6 = text("Click a card to learn more.");
      div1 = element("div");
      create_component(card0.$$.fragment);
      create_component(card1.$$.fragment);
      create_component(card2.$$.fragment);
      create_component(card3.$$.fragment);
      create_component(card4.$$.fragment);
      create_component(card5.$$.fragment);
      create_component(linkable2.$$.fragment);
      p4 = element("p");
      t7 = text("Not much. Observation is usually very smooth and few servers get rejected. As long as you have a civil environment, you will probably pass observation, as we do not have activity requirements (we recommend 300 members just so we know that your server is stable and will not suddenly change or collapse, as we have seen that happen often).");
      p5 = element("p");
      t8 = text("Once you have joined, we only expect you to maintain a civil relationship with other TCN servers. You do not have to be friends with anyone, as long as you are civil (and this extends to other servers; trash-talking or slandering other servers or people is also considered inappropriate conduct).");
      p6 = element("p");
      t9 = text("Additionally, we require that you keep an updated list of TCN servers in your server and follow our ");
      b = element("b");
      t10 = text("#network-events");
      t11 = text(" channel, as cross-promotion is a part of our benefits. Otherwise, all other features like global chat, banshares, etc. are completely optional.");
      p7 = element("p");
      t12 = text("We do not place restrictions on how you should run your server or force you to follow a particular structure (in fact, we do not ");
      i = element("i");
      t13 = text("have");
      t14 = text(' a "TCN structure" for servers). Obviously, breaking network rules or failing to meet the rules and expectations may result in removal.');
      create_component(linkable3.$$.fragment);
      p8 = element("p");
      t15 = text("Servers may be rejected after or during observation or denied observation altogether for a variety of reasons. These are some common reasons, but this is not an exhaustive list. We may tell you what the reason is if we believe you can fix it and would be happy to reconsider later, but sometimes we keep the reason private and may not reconsider.");
      p9 = element("p");
      t16 = text("Click a card to learn more.");
      div2 = element("div");
      create_component(card6.$$.fragment);
      create_component(card7.$$.fragment);
      create_component(card8.$$.fragment);
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { id: true });
      var div3_nodes = children(div3);
      h1 = claim_element(div3_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Joining the TCN");
      h1_nodes.forEach(detach);
      p0 = claim_element(div3_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "Only character mains servers (servers dedicated to a specific Genshin Impact character with resources and channels for that character) may join the TCN. To join, you must first apply. Then, we will review your server over a period of 28 days to ensure servers meet our quality standards for a safe environment and provide feedback on structure and organization.");
      p0_nodes.forEach(detach);
      p1 = claim_element(div3_nodes, "P", {});
      var p1_nodes = children(p1);
      a0 = claim_element(p1_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      t2 = claim_text(a0_nodes, "Apply Here!");
      a0_nodes.forEach(detach);
      p1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div3_nodes);
      p2 = claim_element(div3_nodes, "P", {});
      var p2_nodes = children(p2);
      t3 = claim_text(p2_nodes, "Read more about the observation process ");
      a1 = claim_element(p2_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t4 = claim_text(a1_nodes, "here");
      a1_nodes.forEach(detach);
      t5 = claim_text(p2_nodes, ".");
      p2_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div3_nodes);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(image0.$$.fragment, div0_nodes);
      claim_component(image1.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      p3 = claim_element(div3_nodes, "P", {});
      var p3_nodes = children(p3);
      t6 = claim_text(p3_nodes, "Click a card to learn more.");
      p3_nodes.forEach(detach);
      div1 = claim_element(div3_nodes, "DIV", { class: true, style: true });
      var div1_nodes = children(div1);
      claim_component(card0.$$.fragment, div1_nodes);
      claim_component(card1.$$.fragment, div1_nodes);
      claim_component(card2.$$.fragment, div1_nodes);
      claim_component(card3.$$.fragment, div1_nodes);
      claim_component(card4.$$.fragment, div1_nodes);
      claim_component(card5.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      claim_component(linkable2.$$.fragment, div3_nodes);
      p4 = claim_element(div3_nodes, "P", {});
      var p4_nodes = children(p4);
      t7 = claim_text(p4_nodes, "Not much. Observation is usually very smooth and few servers get rejected. As long as you have a civil environment, you will probably pass observation, as we do not have activity requirements (we recommend 300 members just so we know that your server is stable and will not suddenly change or collapse, as we have seen that happen often).");
      p4_nodes.forEach(detach);
      p5 = claim_element(div3_nodes, "P", {});
      var p5_nodes = children(p5);
      t8 = claim_text(p5_nodes, "Once you have joined, we only expect you to maintain a civil relationship with other TCN servers. You do not have to be friends with anyone, as long as you are civil (and this extends to other servers; trash-talking or slandering other servers or people is also considered inappropriate conduct).");
      p5_nodes.forEach(detach);
      p6 = claim_element(div3_nodes, "P", {});
      var p6_nodes = children(p6);
      t9 = claim_text(p6_nodes, "Additionally, we require that you keep an updated list of TCN servers in your server and follow our ");
      b = claim_element(p6_nodes, "B", {});
      var b_nodes = children(b);
      t10 = claim_text(b_nodes, "#network-events");
      b_nodes.forEach(detach);
      t11 = claim_text(p6_nodes, " channel, as cross-promotion is a part of our benefits. Otherwise, all other features like global chat, banshares, etc. are completely optional.");
      p6_nodes.forEach(detach);
      p7 = claim_element(div3_nodes, "P", {});
      var p7_nodes = children(p7);
      t12 = claim_text(p7_nodes, "We do not place restrictions on how you should run your server or force you to follow a particular structure (in fact, we do not ");
      i = claim_element(p7_nodes, "I", {});
      var i_nodes = children(i);
      t13 = claim_text(i_nodes, "have");
      i_nodes.forEach(detach);
      t14 = claim_text(p7_nodes, ' a "TCN structure" for servers). Obviously, breaking network rules or failing to meet the rules and expectations may result in removal.');
      p7_nodes.forEach(detach);
      claim_component(linkable3.$$.fragment, div3_nodes);
      p8 = claim_element(div3_nodes, "P", {});
      var p8_nodes = children(p8);
      t15 = claim_text(p8_nodes, "Servers may be rejected after or during observation or denied observation altogether for a variety of reasons. These are some common reasons, but this is not an exhaustive list. We may tell you what the reason is if we believe you can fix it and would be happy to reconsider later, but sometimes we keep the reason private and may not reconsider.");
      p8_nodes.forEach(detach);
      p9 = claim_element(div3_nodes, "P", {});
      var p9_nodes = children(p9);
      t16 = claim_text(p9_nodes, "Click a card to learn more.");
      p9_nodes.forEach(detach);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(card6.$$.fragment, div2_nodes);
      claim_component(card7.$$.fragment, div2_nodes);
      claim_component(card8.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "class", "button");
      attr(a0, "href", "/apply");
      attr(a1, "href", "/observation-faq");
      attr(div0, "class", "center");
      attr(div1, "class", "cards");
      set_style(div1, "grid-template-columns", "repeat(auto-fit, minmax(min(400px, 100%), 1fr)");
      attr(div2, "class", "cards");
      attr(div3, "id", "main");
      attr(div4, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      append_hydration(div3, h1);
      append_hydration(h1, t0);
      append_hydration(div3, p0);
      append_hydration(p0, t1);
      append_hydration(div3, p1);
      append_hydration(p1, a0);
      append_hydration(a0, t2);
      mount_component(linkable0, div3, null);
      append_hydration(div3, p2);
      append_hydration(p2, t3);
      append_hydration(p2, a1);
      append_hydration(a1, t4);
      append_hydration(p2, t5);
      mount_component(linkable1, div3, null);
      append_hydration(div3, div0);
      mount_component(image0, div0, null);
      mount_component(image1, div0, null);
      append_hydration(div3, p3);
      append_hydration(p3, t6);
      append_hydration(div3, div1);
      mount_component(card0, div1, null);
      mount_component(card1, div1, null);
      mount_component(card2, div1, null);
      mount_component(card3, div1, null);
      mount_component(card4, div1, null);
      mount_component(card5, div1, null);
      mount_component(linkable2, div3, null);
      append_hydration(div3, p4);
      append_hydration(p4, t7);
      append_hydration(div3, p5);
      append_hydration(p5, t8);
      append_hydration(div3, p6);
      append_hydration(p6, t9);
      append_hydration(p6, b);
      append_hydration(b, t10);
      append_hydration(p6, t11);
      append_hydration(div3, p7);
      append_hydration(p7, t12);
      append_hydration(p7, i);
      append_hydration(i, t13);
      append_hydration(p7, t14);
      mount_component(linkable3, div3, null);
      append_hydration(div3, p8);
      append_hydration(p8, t15);
      append_hydration(div3, p9);
      append_hydration(p9, t16);
      append_hydration(div3, div2);
      mount_component(card6, div2, null);
      mount_component(card7, div2, null);
      mount_component(card8, div2, null);
      current = true;
    },
    p(ctx2, [dirty]) {
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
      const card6_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card6_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card6.$set(card6_changes);
      const card7_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card7_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card7.$set(card7_changes);
      const card8_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card8_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card8.$set(card8_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(linkable0.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(image0.$$.fragment, local);
      transition_in(image1.$$.fragment, local);
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      transition_in(card3.$$.fragment, local);
      transition_in(card4.$$.fragment, local);
      transition_in(card5.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(linkable3.$$.fragment, local);
      transition_in(card6.$$.fragment, local);
      transition_in(card7.$$.fragment, local);
      transition_in(card8.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(image0.$$.fragment, local);
      transition_out(image1.$$.fragment, local);
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      transition_out(card3.$$.fragment, local);
      transition_out(card4.$$.fragment, local);
      transition_out(card5.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      transition_out(card6.$$.fragment, local);
      transition_out(card7.$$.fragment, local);
      transition_out(card8.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      destroy_component(linkable0);
      destroy_component(linkable1);
      destroy_component(image0);
      destroy_component(image1);
      destroy_component(card0);
      destroy_component(card1);
      destroy_component(card2);
      destroy_component(card3);
      destroy_component(card4);
      destroy_component(card5);
      destroy_component(linkable2);
      destroy_component(linkable3);
      destroy_component(card6);
      destroy_component(card7);
      destroy_component(card8);
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
