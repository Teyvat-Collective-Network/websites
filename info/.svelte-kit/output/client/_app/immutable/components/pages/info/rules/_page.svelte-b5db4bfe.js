import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { C as Card } from "../../../../chunks/Card-50f694ea.js";
import { L as Linkable } from "../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot_8(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Provide a space for Genshin Impact character mains servers to communicate and share ideas.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Provide a space for Genshin Impact character mains servers to communicate and share ideas.");
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
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Provide resources and help for managing and building communities, such as Discord bots or providing assistance with moderation.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Provide resources and help for managing and building communities, such as Discord bots or providing assistance with moderation.");
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
  let t;
  return {
    c() {
      p = element("p");
      t = text("Promote and uphold the TCN's reputation, stability, and future.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Promote and uphold the TCN's reputation, stability, and future.");
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
function create_default_slot_5(ctx) {
  let ul;
  let li0;
  let t0;
  let li1;
  let t1;
  let li2;
  let t2;
  let li3;
  let t3;
  return {
    c() {
      ul = element("ul");
      li0 = element("li");
      t0 = text("We encourage all members to participate in all discussions.");
      li1 = element("li");
      t1 = text("We expect members to participate in matters directly involving their server.");
      li2 = element("li");
      t2 = text("Discussions are expected to be civil and transparent.");
      li3 = element("li");
      t3 = text("Discussions are to be kept within HQ, as HQ is a private server, and leaked information tends to bring unwanted attention and sometimes harassment.");
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      t0 = claim_text(li0_nodes, "We encourage all members to participate in all discussions.");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      t1 = claim_text(li1_nodes, "We expect members to participate in matters directly involving their server.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t2 = claim_text(li2_nodes, "Discussions are expected to be civil and transparent.");
      li2_nodes.forEach(detach);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      t3 = claim_text(li3_nodes, "Discussions are to be kept within HQ, as HQ is a private server, and leaked information tends to bring unwanted attention and sometimes harassment.");
      li3_nodes.forEach(detach);
      ul_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      append_hydration(ul, li0);
      append_hydration(li0, t0);
      append_hydration(ul, li1);
      append_hydration(li1, t1);
      append_hydration(ul, li2);
      append_hydration(li2, t2);
      append_hydration(ul, li3);
      append_hydration(li3, t3);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(ul);
    }
  };
}
function create_default_slot_4(ctx) {
  let ul;
  let li0;
  let t0;
  let li1;
  let t1;
  let li2;
  let t2;
  let li3;
  let t3;
  return {
    c() {
      ul = element("ul");
      li0 = element("li");
      t0 = text("All members of the primary council are expected to vote on all matters.");
      li1 = element("li");
      t1 = text("All members are expected to vote in elections and on open votes.");
      li2 = element("li");
      t2 = text("Voters are expected to vote seriously and according to their values and what they believe is best for their server and the network.");
      li3 = element("li");
      t3 = text("Voters are expected to read the provided summaries and information to make a well-informed decision.");
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      t0 = claim_text(li0_nodes, "All members of the primary council are expected to vote on all matters.");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      t1 = claim_text(li1_nodes, "All members are expected to vote in elections and on open votes.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t2 = claim_text(li2_nodes, "Voters are expected to vote seriously and according to their values and what they believe is best for their server and the network.");
      li2_nodes.forEach(detach);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      t3 = claim_text(li3_nodes, "Voters are expected to read the provided summaries and information to make a well-informed decision.");
      li3_nodes.forEach(detach);
      ul_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      append_hydration(ul, li0);
      append_hydration(li0, t0);
      append_hydration(ul, li1);
      append_hydration(li1, t1);
      append_hydration(ul, li2);
      append_hydration(li2, t2);
      append_hydration(ul, li3);
      append_hydration(li3, t3);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(ul);
    }
  };
}
function create_default_slot_3(ctx) {
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
      t0 = text("One of the primary observer duties is to observe applicant servers for induction. Read more about the observation process ");
      a = element("a");
      t1 = text("here");
      t2 = text(".");
      p1 = element("p");
      t3 = text("Observers do not have to carry out a particular quota of observations or any at all, as long as the team can handle all of the incoming applications.");
      this.h();
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "One of the primary observer duties is to observe applicant servers for induction. Read more about the observation process ");
      a = claim_element(p0_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "here");
      a_nodes.forEach(detach);
      t2 = claim_text(p0_nodes, ".");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, "Observers do not have to carry out a particular quota of observations or any at all, as long as the team can handle all of the incoming applications.");
      p1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/info/procedures#observation-induction");
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
function create_default_slot_2(ctx) {
  let p0;
  let t0;
  let p1;
  let t1;
  return {
    c() {
      p0 = element("p");
      t0 = text("Observers carry out server changes and decisions by the council including managing votes. They cannot make major decisions or change TCN rules; those must go through a vote.");
      p1 = element("p");
      t1 = text("Observers can also perform other administrative tasks that they feel they can help with.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Observers carry out server changes and decisions by the council including managing votes. They cannot make major decisions or change TCN rules; those must go through a vote.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t1 = claim_text(p1_nodes, "Observers can also perform other administrative tasks that they feel they can help with.");
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
function create_default_slot_1(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Observers represent the network when dealing with external affairs. They speak on behalf of the TCN when taking actions as decided by vote. Observers are therefore also expected to act in line with the council's decisions. Their opinions do not represent that of the network or any of its servers.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Observers represent the network when dealing with external affairs. They speak on behalf of the TCN when taking actions as decided by vote. Observers are therefore also expected to act in line with the council's decisions. Their opinions do not represent that of the network or any of its servers.");
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
  let div3;
  let h1;
  let b0;
  let t0;
  let t1;
  let linkable0;
  let p0;
  let t2;
  let div0;
  let card0;
  let card1;
  let card2;
  let p1;
  let t3;
  let linkable1;
  let p2;
  let t4;
  let p3;
  let t5;
  let linkable2;
  let p4;
  let t6;
  let div1;
  let card3;
  let card4;
  let linkable3;
  let ul1;
  let li4;
  let t7;
  let b1;
  let t8;
  let t9;
  let ul0;
  let li0;
  let t10;
  let li1;
  let t11;
  let li2;
  let t12;
  let li3;
  let t13;
  let a0;
  let t14;
  let t15;
  let a1;
  let t16;
  let t17;
  let a2;
  let t18;
  let t19;
  let b2;
  let t20;
  let t21;
  let li5;
  let t22;
  let b3;
  let t23;
  let t24;
  let li6;
  let t25;
  let linkable4;
  let ul3;
  let li7;
  let t26;
  let b4;
  let t27;
  let t28;
  let li8;
  let t29;
  let b5;
  let t30;
  let t31;
  let li10;
  let t32;
  let ul2;
  let li9;
  let t33;
  let linkable5;
  let p5;
  let t34;
  let a3;
  let t35;
  let t36;
  let div2;
  let card5;
  let card6;
  let card7;
  let linkable6;
  let p6;
  let t37;
  let ul13;
  let li14;
  let b6;
  let t38;
  let ul5;
  let li11;
  let t39;
  let li13;
  let t40;
  let ul4;
  let li12;
  let t41;
  let li16;
  let b7;
  let t42;
  let ul6;
  let li15;
  let t43;
  let li19;
  let b8;
  let t44;
  let ul7;
  let li17;
  let t45;
  let li18;
  let t46;
  let li23;
  let b9;
  let t47;
  let ul9;
  let li20;
  let t48;
  let li22;
  let t49;
  let ul8;
  let li21;
  let t50;
  let li26;
  let b10;
  let t51;
  let ul10;
  let li24;
  let t52;
  let li25;
  let t53;
  let li32;
  let b11;
  let t54;
  let ul12;
  let li27;
  let t55;
  let li31;
  let t56;
  let ul11;
  let li28;
  let t57;
  let li29;
  let t58;
  let li30;
  let t59;
  let linkable7;
  let ul15;
  let li33;
  let t60;
  let li34;
  let t61;
  let li35;
  let t62;
  let li38;
  let t63;
  let ul14;
  let li36;
  let t64;
  let li37;
  let t65;
  let li39;
  let t66;
  let linkable8;
  let p7;
  let t67;
  let a4;
  let t68;
  let t69;
  let linkable9;
  let p8;
  let t70;
  let linkable10;
  let ul16;
  let li40;
  let t71;
  let a5;
  let t72;
  let t73;
  let a6;
  let t74;
  let t75;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "purpose-goals",
      e: "h2",
      value: "Purpose &amp; Goals"
    }
  });
  card0 = new Card({
    props: {
      icon: "handshake",
      title: "Communicate",
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  card1 = new Card({
    props: {
      icon: "help_center",
      title: "Resources & Help",
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  card2 = new Card({
    props: {
      icon: "keyboard_capslock",
      title: "Promote",
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "membership",
      e: "h2",
      value: "Membership"
    }
  });
  linkable2 = new Linkable({
    props: {
      id: "member-duties",
      e: "h2",
      value: "Member Duties"
    }
  });
  card3 = new Card({
    props: {
      icon: "forum",
      title: "Discussions",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  card4 = new Card({
    props: {
      icon: "how_to_vote",
      title: "Voting",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  linkable3 = new Linkable({
    props: {
      id: "server-requirements",
      e: "h2",
      value: "Server Requirements"
    }
  });
  linkable4 = new Linkable({
    props: {
      id: "external-affairs",
      e: "h2",
      value: "External Affairs &amp; Management"
    }
  });
  linkable5 = new Linkable({
    props: {
      id: "observer-committee",
      e: "h2",
      value: "Observer Committee"
    }
  });
  card5 = new Card({
    props: {
      icon: "visibility",
      title: "Observation",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  card6 = new Card({
    props: {
      icon: "construction",
      title: "Administration",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  card7 = new Card({
    props: {
      icon: "campaign",
      title: "Representation",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  linkable6 = new Linkable({
    props: {
      id: "removal",
      e: "h2",
      value: "Removal from the TCN"
    }
  });
  linkable7 = new Linkable({
    props: {
      id: "induction",
      e: "h2",
      value: "Induction of New Servers"
    }
  });
  linkable8 = new Linkable({
    props: {
      id: "additional",
      e: "h2",
      value: "Additional"
    }
  });
  linkable9 = new Linkable({
    props: { id: "changes", e: "h2", value: "Changes" }
  });
  linkable10 = new Linkable({
    props: {
      id: "changelog",
      e: "h3",
      value: "Changelog"
    }
  });
  return {
    c() {
      div3 = element("div");
      h1 = element("h1");
      b0 = element("b");
      t0 = text("TCN");
      t1 = text(" Rules and Guidelines");
      create_component(linkable0.$$.fragment);
      p0 = element("p");
      t2 = text("The purpose and goals of the council are:");
      div0 = element("div");
      create_component(card0.$$.fragment);
      create_component(card1.$$.fragment);
      create_component(card2.$$.fragment);
      p1 = element("p");
      t3 = text("Servers and council members are expected to uphold these values and vote in line with what they believe would achieve these goals.");
      create_component(linkable1.$$.fragment);
      p2 = element("p");
      t4 = text("Each individual may only represent one TCN server, so no user may own or advise multiple TCN servers or be an advisor while owning another TCN server.");
      p3 = element("p");
      t5 = text("Ownership of other servers does not matter and involvement with servers but not as a council advisor, even TCN servers, is not a problem.");
      create_component(linkable2.$$.fragment);
      p4 = element("p");
      t6 = text("There are two core duties that TCN members must partake in.");
      div1 = element("div");
      create_component(card3.$$.fragment);
      create_component(card4.$$.fragment);
      create_component(linkable3.$$.fragment);
      ul1 = element("ul");
      li4 = element("li");
      t7 = text("Servers must display the ");
      b1 = element("b");
      t8 = text("TCN partner list");
      t9 = text(" in their server. Specifically:");
      ul0 = element("ul");
      li0 = element("li");
      t10 = text("It must be clearly separate from other partner lists (as we do not restrict or control servers' other affiliations).");
      li1 = element("li");
      t11 = text("It must contain all TCN servers and only TCN servers.");
      li2 = element("li");
      t12 = text("The list must be visible to your general server population.");
      li3 = element("li");
      t13 = text("The list does not need to follow a particular format, as long as it contains all and only TCN servers, the TCN website URL (");
      a0 = element("a");
      t14 = text("https://teyvatcollective.network");
      t15 = text("), the TCN Hub URL (");
      a1 = element("a");
      t16 = text("https://discord.gg/FG2wpbywSx");
      t17 = text(") and description, and the Genshin Wizard URL (");
      a2 = element("a");
      t18 = text("https://genshinwizard.com");
      t19 = text(") and description. See the default formatted list in the TCN Hub's ");
      b2 = element("b");
      t20 = text("#partner-list");
      t21 = text(" for an example.");
      li5 = element("li");
      t22 = text("Servers must follow ");
      b3 = element("b");
      t23 = text("#network-events");
      t24 = text(" in a channel visible to the general population of their server.");
      li6 = element("li");
      t25 = text("Servers must follow the Discord Terms of Service and Community Guidelines.");
      create_component(linkable4.$$.fragment);
      ul3 = element("ul");
      li7 = element("li");
      t26 = text("The TCN does ");
      b4 = element("b");
      t27 = text("not");
      t28 = text(" hold an official or collective stance or opinion on any matters. The council votes on actions the network will take as a whole, but nobody, including observers, may speak on behalf of the TCN, nor does the TCN itself agree or disagree with any perspectives.");
      li8 = element("li");
      t29 = text("Only observers may represent the TCN or approve people to represent the TCN when acting on external actions. They do not speak for the rest of the network nor is their opinion the TCN's opinion, but they may ");
      b5 = element("b");
      t30 = text("act");
      t31 = text(" on behalf of the network.");
      li10 = element("li");
      t32 = text("A major vote may be conducted to require a server to remove a staff member or be uninducted if there is sufficient reason to believe that their actions and/or behavior violates the TCN's core principles irredeemably or if they are deliberately spreading misinformation about or misrepresenting the TCN.");
      ul2 = element("ul");
      li9 = element("li");
      t33 = text("Staff members do not need to like the TCN or approve of its actions; rather, this refers to making lies to degrade the TCN's reputation or speaking on behalf of it or using its name for individual matters without approval.");
      create_component(linkable5.$$.fragment);
      p5 = element("p");
      t34 = text("Any council member may become an observer through ");
      a3 = element("a");
      t35 = text("election");
      t36 = text(". There may be no more than 8 observers at any time. Observers have a term length of 6 months, after which they must be re-elected to continue their position.");
      div2 = element("div");
      create_component(card5.$$.fragment);
      create_component(card6.$$.fragment);
      create_component(card7.$$.fragment);
      create_component(linkable6.$$.fragment);
      p6 = element("p");
      t37 = text("Servers and council members may be removed from the TCN and HQ respectively for various reasons listed below.");
      ul13 = element("ul");
      li14 = element("li");
      b6 = element("b");
      t38 = text("Servers");
      ul5 = element("ul");
      li11 = element("li");
      t39 = text("Voluntarily, by the server owner.");
      li13 = element("li");
      t40 = text("If the server owner is removed.");
      ul4 = element("ul");
      li12 = element("li");
      t41 = text("If the server is transfered to another owner, the server can remain in the TCN.");
      li16 = element("li");
      b7 = element("b");
      t42 = text("Server Owners");
      ul6 = element("ul");
      li15 = element("li");
      t43 = text("Unexplained absence (failure to meet the membership duties) for 30 days.");
      li19 = element("li");
      b8 = element("b");
      t44 = text("Council Advisor");
      ul7 = element("ul");
      li17 = element("li");
      t45 = text("Removal by the server owner for any reason.");
      li18 = element("li");
      t46 = text("Unexplained absence (failure to meet the membership duties) for 30 days if the server owner has delegated their duties to the council advisor.");
      li23 = element("li");
      b9 = element("b");
      t47 = text("Observers");
      ul9 = element("ul");
      li20 = element("li");
      t48 = text("If they are no longer eligible to be in HQ (not a server owner or council advisor).");
      li22 = element("li");
      t49 = text("If they are found to not meet the expectations in fulfilling their observer duties, a major vote may be started to forcefully remove them from their position.");
      ul8 = element("ul");
      li21 = element("li");
      t50 = text("Unless they are voted to be removed from HQ entirely, being demoted does not affect their position in the council.");
      li26 = element("li");
      b10 = element("b");
      t51 = text("Voluntary Departure");
      ul10 = element("ul");
      li24 = element("li");
      t52 = text("A member may voluntarily leave any of their positions at any time.");
      li25 = element("li");
      t53 = text("Observers may leave their position as observer while keeping their position in the council at any time.");
      li32 = element("li");
      b11 = element("b");
      t54 = text("Involuntary Removal");
      ul12 = element("ul");
      li27 = element("li");
      t55 = text("If a server is found to not meet the expectations or rules of the TCN, a major vote may be started to forcefully remove it from the TCN. If this happens, its representatives are also removed immediately.");
      li31 = element("li");
      t56 = text("If a member is found to not meet the expectations or rules of the TCN, either in terms of fulfilling their duties or due to individual behavior, a major vote may be started to forcefully remove them from the network.");
      ul11 = element("ul");
      li28 = element("li");
      t57 = text("If this happens, they may not be moved to a different position and will be kicked from HQ and must follow the procedure to be re-added later.");
      li29 = element("li");
      t58 = text("If the server owner is removed, their server must be transfered or leave the TCN.");
      li30 = element("li");
      t59 = text("If the council advisor is removed while the server owner's duties are delegated to them, the server is exempted from requirements such as voting until the server owner's planned absence ends, after which it is their responsibility to find a new council advisor if they need it.");
      create_component(linkable7.$$.fragment);
      ul15 = element("ul");
      li33 = element("li");
      t60 = text("A minor vote may be started to reject an applicant without observing them.");
      li34 = element("li");
      t61 = text("A major vote may be started to cancel an ongoing observation and reject the server immediately.");
      li35 = element("li");
      t62 = text("A minor vote will determine if the server will be inducted or rejected or if observation must be extended.");
      li38 = element("li");
      t63 = text("If the server's mascot character is not officially confirmed by Hoyoverse as playable, voters may also decide to approve the server but not induct them until later.");
      ul14 = element("ul");
      li36 = element("li");
      t64 = text("In this case, this option and the regular induct option will be counted together to decide the outcome.");
      li37 = element("li");
      t65 = text("If these two options are the most favored, then they will be compared following the standard proposal vote condition, and if the vote is tied, a re-vote will happen with only these two options.");
      li39 = element("li");
      t66 = text("If a server is approved by vote and there is a delay of more than 2 months before its induction for any reason, it will be re-observed by a different observer for 14 days.");
      create_component(linkable8.$$.fragment);
      p7 = element("p");
      t67 = text("All details in the ");
      a4 = element("a");
      t68 = text("procedures page");
      t69 = text(" are also enforced as rules.");
      create_component(linkable9.$$.fragment);
      p8 = element("p");
      t70 = text("These rules and guidelines may only be changed by agreement through a major vote.");
      create_component(linkable10.$$.fragment);
      ul16 = element("ul");
      li40 = element("li");
      t71 = text("The rules and guidelines were rewritten to focus more on protecting the integrity of the network, and technical aspects were moved to ");
      a5 = element("a");
      t72 = text("Definitions & Organization");
      t73 = text(" and ");
      a6 = element("a");
      t74 = text("Procedures");
      t75 = text(".");
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { id: true });
      var div3_nodes = children(div3);
      h1 = claim_element(div3_nodes, "H1", {});
      var h1_nodes = children(h1);
      b0 = claim_element(h1_nodes, "B", {});
      var b0_nodes = children(b0);
      t0 = claim_text(b0_nodes, "TCN");
      b0_nodes.forEach(detach);
      t1 = claim_text(h1_nodes, " Rules and Guidelines");
      h1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div3_nodes);
      p0 = claim_element(div3_nodes, "P", {});
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "The purpose and goals of the council are:");
      p0_nodes.forEach(detach);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(card0.$$.fragment, div0_nodes);
      claim_component(card1.$$.fragment, div0_nodes);
      claim_component(card2.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      p1 = claim_element(div3_nodes, "P", {});
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, "Servers and council members are expected to uphold these values and vote in line with what they believe would achieve these goals.");
      p1_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div3_nodes);
      p2 = claim_element(div3_nodes, "P", {});
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, "Each individual may only represent one TCN server, so no user may own or advise multiple TCN servers or be an advisor while owning another TCN server.");
      p2_nodes.forEach(detach);
      p3 = claim_element(div3_nodes, "P", {});
      var p3_nodes = children(p3);
      t5 = claim_text(p3_nodes, "Ownership of other servers does not matter and involvement with servers but not as a council advisor, even TCN servers, is not a problem.");
      p3_nodes.forEach(detach);
      claim_component(linkable2.$$.fragment, div3_nodes);
      p4 = claim_element(div3_nodes, "P", {});
      var p4_nodes = children(p4);
      t6 = claim_text(p4_nodes, "There are two core duties that TCN members must partake in.");
      p4_nodes.forEach(detach);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(card3.$$.fragment, div1_nodes);
      claim_component(card4.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      claim_component(linkable3.$$.fragment, div3_nodes);
      ul1 = claim_element(div3_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li4 = claim_element(ul1_nodes, "LI", {});
      var li4_nodes = children(li4);
      t7 = claim_text(li4_nodes, "Servers must display the ");
      b1 = claim_element(li4_nodes, "B", {});
      var b1_nodes = children(b1);
      t8 = claim_text(b1_nodes, "TCN partner list");
      b1_nodes.forEach(detach);
      t9 = claim_text(li4_nodes, " in their server. Specifically:");
      ul0 = claim_element(li4_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      t10 = claim_text(li0_nodes, "It must be clearly separate from other partner lists (as we do not restrict or control servers' other affiliations).");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      t11 = claim_text(li1_nodes, "It must contain all TCN servers and only TCN servers.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul0_nodes, "LI", {});
      var li2_nodes = children(li2);
      t12 = claim_text(li2_nodes, "The list must be visible to your general server population.");
      li2_nodes.forEach(detach);
      li3 = claim_element(ul0_nodes, "LI", {});
      var li3_nodes = children(li3);
      t13 = claim_text(li3_nodes, "The list does not need to follow a particular format, as long as it contains all and only TCN servers, the TCN website URL (");
      a0 = claim_element(li3_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t14 = claim_text(a0_nodes, "https://teyvatcollective.network");
      a0_nodes.forEach(detach);
      t15 = claim_text(li3_nodes, "), the TCN Hub URL (");
      a1 = claim_element(li3_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t16 = claim_text(a1_nodes, "https://discord.gg/FG2wpbywSx");
      a1_nodes.forEach(detach);
      t17 = claim_text(li3_nodes, ") and description, and the Genshin Wizard URL (");
      a2 = claim_element(li3_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t18 = claim_text(a2_nodes, "https://genshinwizard.com");
      a2_nodes.forEach(detach);
      t19 = claim_text(li3_nodes, ") and description. See the default formatted list in the TCN Hub's ");
      b2 = claim_element(li3_nodes, "B", {});
      var b2_nodes = children(b2);
      t20 = claim_text(b2_nodes, "#partner-list");
      b2_nodes.forEach(detach);
      t21 = claim_text(li3_nodes, " for an example.");
      li3_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      li4_nodes.forEach(detach);
      li5 = claim_element(ul1_nodes, "LI", {});
      var li5_nodes = children(li5);
      t22 = claim_text(li5_nodes, "Servers must follow ");
      b3 = claim_element(li5_nodes, "B", {});
      var b3_nodes = children(b3);
      t23 = claim_text(b3_nodes, "#network-events");
      b3_nodes.forEach(detach);
      t24 = claim_text(li5_nodes, " in a channel visible to the general population of their server.");
      li5_nodes.forEach(detach);
      li6 = claim_element(ul1_nodes, "LI", {});
      var li6_nodes = children(li6);
      t25 = claim_text(li6_nodes, "Servers must follow the Discord Terms of Service and Community Guidelines.");
      li6_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      claim_component(linkable4.$$.fragment, div3_nodes);
      ul3 = claim_element(div3_nodes, "UL", {});
      var ul3_nodes = children(ul3);
      li7 = claim_element(ul3_nodes, "LI", {});
      var li7_nodes = children(li7);
      t26 = claim_text(li7_nodes, "The TCN does ");
      b4 = claim_element(li7_nodes, "B", {});
      var b4_nodes = children(b4);
      t27 = claim_text(b4_nodes, "not");
      b4_nodes.forEach(detach);
      t28 = claim_text(li7_nodes, " hold an official or collective stance or opinion on any matters. The council votes on actions the network will take as a whole, but nobody, including observers, may speak on behalf of the TCN, nor does the TCN itself agree or disagree with any perspectives.");
      li7_nodes.forEach(detach);
      li8 = claim_element(ul3_nodes, "LI", {});
      var li8_nodes = children(li8);
      t29 = claim_text(li8_nodes, "Only observers may represent the TCN or approve people to represent the TCN when acting on external actions. They do not speak for the rest of the network nor is their opinion the TCN's opinion, but they may ");
      b5 = claim_element(li8_nodes, "B", {});
      var b5_nodes = children(b5);
      t30 = claim_text(b5_nodes, "act");
      b5_nodes.forEach(detach);
      t31 = claim_text(li8_nodes, " on behalf of the network.");
      li8_nodes.forEach(detach);
      li10 = claim_element(ul3_nodes, "LI", {});
      var li10_nodes = children(li10);
      t32 = claim_text(li10_nodes, "A major vote may be conducted to require a server to remove a staff member or be uninducted if there is sufficient reason to believe that their actions and/or behavior violates the TCN's core principles irredeemably or if they are deliberately spreading misinformation about or misrepresenting the TCN.");
      ul2 = claim_element(li10_nodes, "UL", {});
      var ul2_nodes = children(ul2);
      li9 = claim_element(ul2_nodes, "LI", {});
      var li9_nodes = children(li9);
      t33 = claim_text(li9_nodes, "Staff members do not need to like the TCN or approve of its actions; rather, this refers to making lies to degrade the TCN's reputation or speaking on behalf of it or using its name for individual matters without approval.");
      li9_nodes.forEach(detach);
      ul2_nodes.forEach(detach);
      li10_nodes.forEach(detach);
      ul3_nodes.forEach(detach);
      claim_component(linkable5.$$.fragment, div3_nodes);
      p5 = claim_element(div3_nodes, "P", {});
      var p5_nodes = children(p5);
      t34 = claim_text(p5_nodes, "Any council member may become an observer through ");
      a3 = claim_element(p5_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t35 = claim_text(a3_nodes, "election");
      a3_nodes.forEach(detach);
      t36 = claim_text(p5_nodes, ". There may be no more than 8 observers at any time. Observers have a term length of 6 months, after which they must be re-elected to continue their position.");
      p5_nodes.forEach(detach);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(card5.$$.fragment, div2_nodes);
      claim_component(card6.$$.fragment, div2_nodes);
      claim_component(card7.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      claim_component(linkable6.$$.fragment, div3_nodes);
      p6 = claim_element(div3_nodes, "P", {});
      var p6_nodes = children(p6);
      t37 = claim_text(p6_nodes, "Servers and council members may be removed from the TCN and HQ respectively for various reasons listed below.");
      p6_nodes.forEach(detach);
      ul13 = claim_element(div3_nodes, "UL", {});
      var ul13_nodes = children(ul13);
      li14 = claim_element(ul13_nodes, "LI", {});
      var li14_nodes = children(li14);
      b6 = claim_element(li14_nodes, "B", {});
      var b6_nodes = children(b6);
      t38 = claim_text(b6_nodes, "Servers");
      b6_nodes.forEach(detach);
      ul5 = claim_element(li14_nodes, "UL", {});
      var ul5_nodes = children(ul5);
      li11 = claim_element(ul5_nodes, "LI", {});
      var li11_nodes = children(li11);
      t39 = claim_text(li11_nodes, "Voluntarily, by the server owner.");
      li11_nodes.forEach(detach);
      li13 = claim_element(ul5_nodes, "LI", {});
      var li13_nodes = children(li13);
      t40 = claim_text(li13_nodes, "If the server owner is removed.");
      ul4 = claim_element(li13_nodes, "UL", {});
      var ul4_nodes = children(ul4);
      li12 = claim_element(ul4_nodes, "LI", {});
      var li12_nodes = children(li12);
      t41 = claim_text(li12_nodes, "If the server is transfered to another owner, the server can remain in the TCN.");
      li12_nodes.forEach(detach);
      ul4_nodes.forEach(detach);
      li13_nodes.forEach(detach);
      ul5_nodes.forEach(detach);
      li14_nodes.forEach(detach);
      li16 = claim_element(ul13_nodes, "LI", {});
      var li16_nodes = children(li16);
      b7 = claim_element(li16_nodes, "B", {});
      var b7_nodes = children(b7);
      t42 = claim_text(b7_nodes, "Server Owners");
      b7_nodes.forEach(detach);
      ul6 = claim_element(li16_nodes, "UL", {});
      var ul6_nodes = children(ul6);
      li15 = claim_element(ul6_nodes, "LI", {});
      var li15_nodes = children(li15);
      t43 = claim_text(li15_nodes, "Unexplained absence (failure to meet the membership duties) for 30 days.");
      li15_nodes.forEach(detach);
      ul6_nodes.forEach(detach);
      li16_nodes.forEach(detach);
      li19 = claim_element(ul13_nodes, "LI", {});
      var li19_nodes = children(li19);
      b8 = claim_element(li19_nodes, "B", {});
      var b8_nodes = children(b8);
      t44 = claim_text(b8_nodes, "Council Advisor");
      b8_nodes.forEach(detach);
      ul7 = claim_element(li19_nodes, "UL", {});
      var ul7_nodes = children(ul7);
      li17 = claim_element(ul7_nodes, "LI", {});
      var li17_nodes = children(li17);
      t45 = claim_text(li17_nodes, "Removal by the server owner for any reason.");
      li17_nodes.forEach(detach);
      li18 = claim_element(ul7_nodes, "LI", {});
      var li18_nodes = children(li18);
      t46 = claim_text(li18_nodes, "Unexplained absence (failure to meet the membership duties) for 30 days if the server owner has delegated their duties to the council advisor.");
      li18_nodes.forEach(detach);
      ul7_nodes.forEach(detach);
      li19_nodes.forEach(detach);
      li23 = claim_element(ul13_nodes, "LI", {});
      var li23_nodes = children(li23);
      b9 = claim_element(li23_nodes, "B", {});
      var b9_nodes = children(b9);
      t47 = claim_text(b9_nodes, "Observers");
      b9_nodes.forEach(detach);
      ul9 = claim_element(li23_nodes, "UL", {});
      var ul9_nodes = children(ul9);
      li20 = claim_element(ul9_nodes, "LI", {});
      var li20_nodes = children(li20);
      t48 = claim_text(li20_nodes, "If they are no longer eligible to be in HQ (not a server owner or council advisor).");
      li20_nodes.forEach(detach);
      li22 = claim_element(ul9_nodes, "LI", {});
      var li22_nodes = children(li22);
      t49 = claim_text(li22_nodes, "If they are found to not meet the expectations in fulfilling their observer duties, a major vote may be started to forcefully remove them from their position.");
      ul8 = claim_element(li22_nodes, "UL", {});
      var ul8_nodes = children(ul8);
      li21 = claim_element(ul8_nodes, "LI", {});
      var li21_nodes = children(li21);
      t50 = claim_text(li21_nodes, "Unless they are voted to be removed from HQ entirely, being demoted does not affect their position in the council.");
      li21_nodes.forEach(detach);
      ul8_nodes.forEach(detach);
      li22_nodes.forEach(detach);
      ul9_nodes.forEach(detach);
      li23_nodes.forEach(detach);
      li26 = claim_element(ul13_nodes, "LI", {});
      var li26_nodes = children(li26);
      b10 = claim_element(li26_nodes, "B", {});
      var b10_nodes = children(b10);
      t51 = claim_text(b10_nodes, "Voluntary Departure");
      b10_nodes.forEach(detach);
      ul10 = claim_element(li26_nodes, "UL", {});
      var ul10_nodes = children(ul10);
      li24 = claim_element(ul10_nodes, "LI", {});
      var li24_nodes = children(li24);
      t52 = claim_text(li24_nodes, "A member may voluntarily leave any of their positions at any time.");
      li24_nodes.forEach(detach);
      li25 = claim_element(ul10_nodes, "LI", {});
      var li25_nodes = children(li25);
      t53 = claim_text(li25_nodes, "Observers may leave their position as observer while keeping their position in the council at any time.");
      li25_nodes.forEach(detach);
      ul10_nodes.forEach(detach);
      li26_nodes.forEach(detach);
      li32 = claim_element(ul13_nodes, "LI", {});
      var li32_nodes = children(li32);
      b11 = claim_element(li32_nodes, "B", {});
      var b11_nodes = children(b11);
      t54 = claim_text(b11_nodes, "Involuntary Removal");
      b11_nodes.forEach(detach);
      ul12 = claim_element(li32_nodes, "UL", {});
      var ul12_nodes = children(ul12);
      li27 = claim_element(ul12_nodes, "LI", {});
      var li27_nodes = children(li27);
      t55 = claim_text(li27_nodes, "If a server is found to not meet the expectations or rules of the TCN, a major vote may be started to forcefully remove it from the TCN. If this happens, its representatives are also removed immediately.");
      li27_nodes.forEach(detach);
      li31 = claim_element(ul12_nodes, "LI", {});
      var li31_nodes = children(li31);
      t56 = claim_text(li31_nodes, "If a member is found to not meet the expectations or rules of the TCN, either in terms of fulfilling their duties or due to individual behavior, a major vote may be started to forcefully remove them from the network.");
      ul11 = claim_element(li31_nodes, "UL", {});
      var ul11_nodes = children(ul11);
      li28 = claim_element(ul11_nodes, "LI", {});
      var li28_nodes = children(li28);
      t57 = claim_text(li28_nodes, "If this happens, they may not be moved to a different position and will be kicked from HQ and must follow the procedure to be re-added later.");
      li28_nodes.forEach(detach);
      li29 = claim_element(ul11_nodes, "LI", {});
      var li29_nodes = children(li29);
      t58 = claim_text(li29_nodes, "If the server owner is removed, their server must be transfered or leave the TCN.");
      li29_nodes.forEach(detach);
      li30 = claim_element(ul11_nodes, "LI", {});
      var li30_nodes = children(li30);
      t59 = claim_text(li30_nodes, "If the council advisor is removed while the server owner's duties are delegated to them, the server is exempted from requirements such as voting until the server owner's planned absence ends, after which it is their responsibility to find a new council advisor if they need it.");
      li30_nodes.forEach(detach);
      ul11_nodes.forEach(detach);
      li31_nodes.forEach(detach);
      ul12_nodes.forEach(detach);
      li32_nodes.forEach(detach);
      ul13_nodes.forEach(detach);
      claim_component(linkable7.$$.fragment, div3_nodes);
      ul15 = claim_element(div3_nodes, "UL", {});
      var ul15_nodes = children(ul15);
      li33 = claim_element(ul15_nodes, "LI", {});
      var li33_nodes = children(li33);
      t60 = claim_text(li33_nodes, "A minor vote may be started to reject an applicant without observing them.");
      li33_nodes.forEach(detach);
      li34 = claim_element(ul15_nodes, "LI", {});
      var li34_nodes = children(li34);
      t61 = claim_text(li34_nodes, "A major vote may be started to cancel an ongoing observation and reject the server immediately.");
      li34_nodes.forEach(detach);
      li35 = claim_element(ul15_nodes, "LI", {});
      var li35_nodes = children(li35);
      t62 = claim_text(li35_nodes, "A minor vote will determine if the server will be inducted or rejected or if observation must be extended.");
      li35_nodes.forEach(detach);
      li38 = claim_element(ul15_nodes, "LI", {});
      var li38_nodes = children(li38);
      t63 = claim_text(li38_nodes, "If the server's mascot character is not officially confirmed by Hoyoverse as playable, voters may also decide to approve the server but not induct them until later.");
      ul14 = claim_element(li38_nodes, "UL", {});
      var ul14_nodes = children(ul14);
      li36 = claim_element(ul14_nodes, "LI", {});
      var li36_nodes = children(li36);
      t64 = claim_text(li36_nodes, "In this case, this option and the regular induct option will be counted together to decide the outcome.");
      li36_nodes.forEach(detach);
      li37 = claim_element(ul14_nodes, "LI", {});
      var li37_nodes = children(li37);
      t65 = claim_text(li37_nodes, "If these two options are the most favored, then they will be compared following the standard proposal vote condition, and if the vote is tied, a re-vote will happen with only these two options.");
      li37_nodes.forEach(detach);
      ul14_nodes.forEach(detach);
      li38_nodes.forEach(detach);
      li39 = claim_element(ul15_nodes, "LI", {});
      var li39_nodes = children(li39);
      t66 = claim_text(li39_nodes, "If a server is approved by vote and there is a delay of more than 2 months before its induction for any reason, it will be re-observed by a different observer for 14 days.");
      li39_nodes.forEach(detach);
      ul15_nodes.forEach(detach);
      claim_component(linkable8.$$.fragment, div3_nodes);
      p7 = claim_element(div3_nodes, "P", {});
      var p7_nodes = children(p7);
      t67 = claim_text(p7_nodes, "All details in the ");
      a4 = claim_element(p7_nodes, "A", { href: true });
      var a4_nodes = children(a4);
      t68 = claim_text(a4_nodes, "procedures page");
      a4_nodes.forEach(detach);
      t69 = claim_text(p7_nodes, " are also enforced as rules.");
      p7_nodes.forEach(detach);
      claim_component(linkable9.$$.fragment, div3_nodes);
      p8 = claim_element(div3_nodes, "P", {});
      var p8_nodes = children(p8);
      t70 = claim_text(p8_nodes, "These rules and guidelines may only be changed by agreement through a major vote.");
      p8_nodes.forEach(detach);
      claim_component(linkable10.$$.fragment, div3_nodes);
      ul16 = claim_element(div3_nodes, "UL", {});
      var ul16_nodes = children(ul16);
      li40 = claim_element(ul16_nodes, "LI", {});
      var li40_nodes = children(li40);
      t71 = claim_text(li40_nodes, "The rules and guidelines were rewritten to focus more on protecting the integrity of the network, and technical aspects were moved to ");
      a5 = claim_element(li40_nodes, "A", { href: true });
      var a5_nodes = children(a5);
      t72 = claim_text(a5_nodes, "Definitions & Organization");
      a5_nodes.forEach(detach);
      t73 = claim_text(li40_nodes, " and ");
      a6 = claim_element(li40_nodes, "A", { href: true });
      var a6_nodes = children(a6);
      t74 = claim_text(a6_nodes, "Procedures");
      a6_nodes.forEach(detach);
      t75 = claim_text(li40_nodes, ".");
      li40_nodes.forEach(detach);
      ul16_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "cards");
      attr(div1, "class", "cards");
      attr(a0, "href", "https://teyvatcollective.network");
      attr(a1, "href", "https://discord.gg/FG2wpbywSx");
      attr(a2, "href", "https://genshinwizard.com");
      attr(a3, "href", "/info/procedures#elections");
      attr(div2, "class", "cards");
      attr(a4, "href", "/info/procedures");
      attr(a5, "href", "/info/definitions-organization");
      attr(a6, "href", "/info/procedures");
      attr(div3, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, h1);
      append_hydration(h1, b0);
      append_hydration(b0, t0);
      append_hydration(h1, t1);
      mount_component(linkable0, div3, null);
      append_hydration(div3, p0);
      append_hydration(p0, t2);
      append_hydration(div3, div0);
      mount_component(card0, div0, null);
      mount_component(card1, div0, null);
      mount_component(card2, div0, null);
      append_hydration(div3, p1);
      append_hydration(p1, t3);
      mount_component(linkable1, div3, null);
      append_hydration(div3, p2);
      append_hydration(p2, t4);
      append_hydration(div3, p3);
      append_hydration(p3, t5);
      mount_component(linkable2, div3, null);
      append_hydration(div3, p4);
      append_hydration(p4, t6);
      append_hydration(div3, div1);
      mount_component(card3, div1, null);
      mount_component(card4, div1, null);
      mount_component(linkable3, div3, null);
      append_hydration(div3, ul1);
      append_hydration(ul1, li4);
      append_hydration(li4, t7);
      append_hydration(li4, b1);
      append_hydration(b1, t8);
      append_hydration(li4, t9);
      append_hydration(li4, ul0);
      append_hydration(ul0, li0);
      append_hydration(li0, t10);
      append_hydration(ul0, li1);
      append_hydration(li1, t11);
      append_hydration(ul0, li2);
      append_hydration(li2, t12);
      append_hydration(ul0, li3);
      append_hydration(li3, t13);
      append_hydration(li3, a0);
      append_hydration(a0, t14);
      append_hydration(li3, t15);
      append_hydration(li3, a1);
      append_hydration(a1, t16);
      append_hydration(li3, t17);
      append_hydration(li3, a2);
      append_hydration(a2, t18);
      append_hydration(li3, t19);
      append_hydration(li3, b2);
      append_hydration(b2, t20);
      append_hydration(li3, t21);
      append_hydration(ul1, li5);
      append_hydration(li5, t22);
      append_hydration(li5, b3);
      append_hydration(b3, t23);
      append_hydration(li5, t24);
      append_hydration(ul1, li6);
      append_hydration(li6, t25);
      mount_component(linkable4, div3, null);
      append_hydration(div3, ul3);
      append_hydration(ul3, li7);
      append_hydration(li7, t26);
      append_hydration(li7, b4);
      append_hydration(b4, t27);
      append_hydration(li7, t28);
      append_hydration(ul3, li8);
      append_hydration(li8, t29);
      append_hydration(li8, b5);
      append_hydration(b5, t30);
      append_hydration(li8, t31);
      append_hydration(ul3, li10);
      append_hydration(li10, t32);
      append_hydration(li10, ul2);
      append_hydration(ul2, li9);
      append_hydration(li9, t33);
      mount_component(linkable5, div3, null);
      append_hydration(div3, p5);
      append_hydration(p5, t34);
      append_hydration(p5, a3);
      append_hydration(a3, t35);
      append_hydration(p5, t36);
      append_hydration(div3, div2);
      mount_component(card5, div2, null);
      mount_component(card6, div2, null);
      mount_component(card7, div2, null);
      mount_component(linkable6, div3, null);
      append_hydration(div3, p6);
      append_hydration(p6, t37);
      append_hydration(div3, ul13);
      append_hydration(ul13, li14);
      append_hydration(li14, b6);
      append_hydration(b6, t38);
      append_hydration(li14, ul5);
      append_hydration(ul5, li11);
      append_hydration(li11, t39);
      append_hydration(ul5, li13);
      append_hydration(li13, t40);
      append_hydration(li13, ul4);
      append_hydration(ul4, li12);
      append_hydration(li12, t41);
      append_hydration(ul13, li16);
      append_hydration(li16, b7);
      append_hydration(b7, t42);
      append_hydration(li16, ul6);
      append_hydration(ul6, li15);
      append_hydration(li15, t43);
      append_hydration(ul13, li19);
      append_hydration(li19, b8);
      append_hydration(b8, t44);
      append_hydration(li19, ul7);
      append_hydration(ul7, li17);
      append_hydration(li17, t45);
      append_hydration(ul7, li18);
      append_hydration(li18, t46);
      append_hydration(ul13, li23);
      append_hydration(li23, b9);
      append_hydration(b9, t47);
      append_hydration(li23, ul9);
      append_hydration(ul9, li20);
      append_hydration(li20, t48);
      append_hydration(ul9, li22);
      append_hydration(li22, t49);
      append_hydration(li22, ul8);
      append_hydration(ul8, li21);
      append_hydration(li21, t50);
      append_hydration(ul13, li26);
      append_hydration(li26, b10);
      append_hydration(b10, t51);
      append_hydration(li26, ul10);
      append_hydration(ul10, li24);
      append_hydration(li24, t52);
      append_hydration(ul10, li25);
      append_hydration(li25, t53);
      append_hydration(ul13, li32);
      append_hydration(li32, b11);
      append_hydration(b11, t54);
      append_hydration(li32, ul12);
      append_hydration(ul12, li27);
      append_hydration(li27, t55);
      append_hydration(ul12, li31);
      append_hydration(li31, t56);
      append_hydration(li31, ul11);
      append_hydration(ul11, li28);
      append_hydration(li28, t57);
      append_hydration(ul11, li29);
      append_hydration(li29, t58);
      append_hydration(ul11, li30);
      append_hydration(li30, t59);
      mount_component(linkable7, div3, null);
      append_hydration(div3, ul15);
      append_hydration(ul15, li33);
      append_hydration(li33, t60);
      append_hydration(ul15, li34);
      append_hydration(li34, t61);
      append_hydration(ul15, li35);
      append_hydration(li35, t62);
      append_hydration(ul15, li38);
      append_hydration(li38, t63);
      append_hydration(li38, ul14);
      append_hydration(ul14, li36);
      append_hydration(li36, t64);
      append_hydration(ul14, li37);
      append_hydration(li37, t65);
      append_hydration(ul15, li39);
      append_hydration(li39, t66);
      mount_component(linkable8, div3, null);
      append_hydration(div3, p7);
      append_hydration(p7, t67);
      append_hydration(p7, a4);
      append_hydration(a4, t68);
      append_hydration(p7, t69);
      mount_component(linkable9, div3, null);
      append_hydration(div3, p8);
      append_hydration(p8, t70);
      mount_component(linkable10, div3, null);
      append_hydration(div3, ul16);
      append_hydration(ul16, li40);
      append_hydration(li40, t71);
      append_hydration(li40, a5);
      append_hydration(a5, t72);
      append_hydration(li40, t73);
      append_hydration(li40, a6);
      append_hydration(a6, t74);
      append_hydration(li40, t75);
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
    },
    i(local) {
      if (current)
        return;
      transition_in(linkable0.$$.fragment, local);
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(card3.$$.fragment, local);
      transition_in(card4.$$.fragment, local);
      transition_in(linkable3.$$.fragment, local);
      transition_in(linkable4.$$.fragment, local);
      transition_in(linkable5.$$.fragment, local);
      transition_in(card5.$$.fragment, local);
      transition_in(card6.$$.fragment, local);
      transition_in(card7.$$.fragment, local);
      transition_in(linkable6.$$.fragment, local);
      transition_in(linkable7.$$.fragment, local);
      transition_in(linkable8.$$.fragment, local);
      transition_in(linkable9.$$.fragment, local);
      transition_in(linkable10.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(card3.$$.fragment, local);
      transition_out(card4.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      transition_out(linkable4.$$.fragment, local);
      transition_out(linkable5.$$.fragment, local);
      transition_out(card5.$$.fragment, local);
      transition_out(card6.$$.fragment, local);
      transition_out(card7.$$.fragment, local);
      transition_out(linkable6.$$.fragment, local);
      transition_out(linkable7.$$.fragment, local);
      transition_out(linkable8.$$.fragment, local);
      transition_out(linkable9.$$.fragment, local);
      transition_out(linkable10.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(linkable0);
      destroy_component(card0);
      destroy_component(card1);
      destroy_component(card2);
      destroy_component(linkable1);
      destroy_component(linkable2);
      destroy_component(card3);
      destroy_component(card4);
      destroy_component(linkable3);
      destroy_component(linkable4);
      destroy_component(linkable5);
      destroy_component(card5);
      destroy_component(card6);
      destroy_component(card7);
      destroy_component(linkable6);
      destroy_component(linkable7);
      destroy_component(linkable8);
      destroy_component(linkable9);
      destroy_component(linkable10);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      next: ["/info/definitions-organization", "Definitions & Organization"],
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
