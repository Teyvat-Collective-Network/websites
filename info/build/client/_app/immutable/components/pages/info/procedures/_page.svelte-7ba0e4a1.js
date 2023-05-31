import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { L as Linkable } from "../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot(ctx) {
  let div;
  let h1;
  let t0;
  let linkable0;
  let p0;
  let t1;
  let a0;
  let t2;
  let t3;
  let linkable1;
  let p1;
  let t4;
  let a1;
  let t5;
  let t6;
  let ul0;
  let li0;
  let t7;
  let li1;
  let t8;
  let li2;
  let t9;
  let li3;
  let t10;
  let li4;
  let t11;
  let li5;
  let t12;
  let linkable2;
  let ul2;
  let li6;
  let t13;
  let li7;
  let t14;
  let li9;
  let t15;
  let ul1;
  let li8;
  let t16;
  let linkable3;
  let ul3;
  let li10;
  let t17;
  let b0;
  let t18;
  let t19;
  let li11;
  let t20;
  let li12;
  let t21;
  let a2;
  let t22;
  let t23;
  let linkable4;
  let ul4;
  let li13;
  let t24;
  let b1;
  let t25;
  let t26;
  let li14;
  let t27;
  let linkable5;
  let ul5;
  let li15;
  let t28;
  let b2;
  let t29;
  let t30;
  let li16;
  let t31;
  let li17;
  let t32;
  let current;
  linkable0 = new Linkable({
    props: { id: "voting", e: "h2", value: "Voting" }
  });
  linkable1 = new Linkable({
    props: {
      id: "elections",
      e: "h2",
      value: "Elections"
    }
  });
  linkable2 = new Linkable({
    props: {
      id: "delegation",
      e: "h2",
      value: "Delegation"
    }
  });
  linkable3 = new Linkable({
    props: {
      id: "observation-induction",
      e: "h2",
      value: "Observation &amp; Induction"
    }
  });
  linkable4 = new Linkable({
    props: {
      id: "event-promotion",
      e: "h2",
      value: "Event Promotion"
    }
  });
  linkable5 = new Linkable({
    props: {
      id: "membership-changes",
      e: "h2",
      value: "Membership Changes"
    }
  });
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Procedures");
      create_component(linkable0.$$.fragment);
      p0 = element("p");
      t1 = text("See the page on voting ");
      a0 = element("a");
      t2 = text("here");
      t3 = text(".");
      create_component(linkable1.$$.fragment);
      p1 = element("p");
      t4 = text("See the page on voting ");
      a1 = element("a");
      t5 = text("here");
      t6 = text(" for information on how to vote and the mechanisms.");
      ul0 = element("ul");
      li0 = element("li");
      t7 = text("An election will be started if a change occurs that causes an increase in the amount of empty positions or if there are empty positions and someone requests a new election. This may be caused by an observer being removed during their term or if the number of seats is raised.");
      li1 = element("li");
      t8 = text("Additionally, 9 days before the scheduled end of an observer's term, an election will be started to minimize downtime or dragging the observer's term beyond the scheduled date.");
      li2 = element("li");
      t9 = text("Nominations will be open for 7 days. Anyone may be nominated except observers whose term is not about to end. Self-nominations are allowed.");
      li3 = element("li");
      t10 = text("A nominee may accept their nomination and may write a statement. Alternatively, they may reject and stay out of the election. Statements are open for the same 7 day period, but may be extended if someone is nominated last-minute or needs more time.");
      li4 = element("li");
      t11 = text("If a nominee does not respond within the statement period or within 2 days of their nomination (whichever is later), they automatically reject their nomination.");
      li5 = element("li");
      t12 = text("Once all statements are done, a minor vote is conducted open to all members except the candidates.");
      create_component(linkable2.$$.fragment);
      ul2 = element("ul");
      li6 = element("li");
      t13 = text("A server owner may delegate their responsibilities, including the position on the primary council, to their council advisor at any time.");
      li7 = element("li");
      t14 = text("Each server starts with 60 days of eligibility on induction. Delegating for one day uses one day, and while the server owner is the active representative, they regain one day per day up to 60 days. This is to prevent the server owner from permanently becoming inactive and leaving their duties to the council advisor, as the server should be given to the active staff in that case.");
      li9 = element("li");
      t15 = text("During delegation, the server owner is not subject to activity requirements, but the council advisor may be considered absent if they fail to uphold the server owner's responsibilities.");
      ul1 = element("ul");
      li8 = element("li");
      t16 = text("If the council advisor is removed, the server is allowed to not meet activity requirements until the server owner's scheduled return and it is the server owner's responsibliity to find another council advisor if they need one when they return.");
      create_component(linkable3.$$.fragment);
      ul3 = element("ul");
      li10 = element("li");
      t17 = text("When a server applies, the ");
      b0 = element("b");
      t18 = text("New Applicant Alert");
      t19 = text(" role will be automatically pinged to give people a chance to raise concerns and start a vote to reject.");
      li11 = element("li");
      t20 = text("An observer may only observe one server concurrently.");
      li12 = element("li");
      t21 = text("Read more about the entire observation and induction process ");
      a2 = element("a");
      t22 = text("here");
      t23 = text(".");
      create_component(linkable4.$$.fragment);
      ul4 = element("ul");
      li13 = element("li");
      t24 = text("Events that involve at least one TCN server may be posted to ");
      b1 = element("b");
      t25 = text("#network-events");
      t26 = text(" and published across the network (the webhook URL is pinned in the channel).");
      li14 = element("li");
      t27 = text("All servers are required to follow this channel in a publicly visible channel.");
      create_component(linkable5.$$.fragment);
      ul5 = element("ul");
      li15 = element("li");
      t28 = text("24 hours before the planned introduction of people into the council, a notice will be sent pinging the ");
      b2 = element("b");
      t29 = text("New Council Member Alert");
      t30 = text(" role to give people a chance to vote to deny entry.");
      li16 = element("li");
      t31 = text("A minor vote may be started to deny a person entry into HQ and the council.");
      li17 = element("li");
      t32 = text("All other membership changes, including changing positions and leaving the council, do not require advance notice or a vote.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Procedures");
      h1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "See the page on voting ");
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t2 = claim_text(a0_nodes, "here");
      a0_nodes.forEach(detach);
      t3 = claim_text(p0_nodes, ".");
      p0_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "See the page on voting ");
      a1 = claim_element(p1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "here");
      a1_nodes.forEach(detach);
      t6 = claim_text(p1_nodes, " for information on how to vote and the mechanisms.");
      p1_nodes.forEach(detach);
      ul0 = claim_element(div_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      t7 = claim_text(li0_nodes, "An election will be started if a change occurs that causes an increase in the amount of empty positions or if there are empty positions and someone requests a new election. This may be caused by an observer being removed during their term or if the number of seats is raised.");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      t8 = claim_text(li1_nodes, "Additionally, 9 days before the scheduled end of an observer's term, an election will be started to minimize downtime or dragging the observer's term beyond the scheduled date.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul0_nodes, "LI", {});
      var li2_nodes = children(li2);
      t9 = claim_text(li2_nodes, "Nominations will be open for 7 days. Anyone may be nominated except observers whose term is not about to end. Self-nominations are allowed.");
      li2_nodes.forEach(detach);
      li3 = claim_element(ul0_nodes, "LI", {});
      var li3_nodes = children(li3);
      t10 = claim_text(li3_nodes, "A nominee may accept their nomination and may write a statement. Alternatively, they may reject and stay out of the election. Statements are open for the same 7 day period, but may be extended if someone is nominated last-minute or needs more time.");
      li3_nodes.forEach(detach);
      li4 = claim_element(ul0_nodes, "LI", {});
      var li4_nodes = children(li4);
      t11 = claim_text(li4_nodes, "If a nominee does not respond within the statement period or within 2 days of their nomination (whichever is later), they automatically reject their nomination.");
      li4_nodes.forEach(detach);
      li5 = claim_element(ul0_nodes, "LI", {});
      var li5_nodes = children(li5);
      t12 = claim_text(li5_nodes, "Once all statements are done, a minor vote is conducted open to all members except the candidates.");
      li5_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      claim_component(linkable2.$$.fragment, div_nodes);
      ul2 = claim_element(div_nodes, "UL", {});
      var ul2_nodes = children(ul2);
      li6 = claim_element(ul2_nodes, "LI", {});
      var li6_nodes = children(li6);
      t13 = claim_text(li6_nodes, "A server owner may delegate their responsibilities, including the position on the primary council, to their council advisor at any time.");
      li6_nodes.forEach(detach);
      li7 = claim_element(ul2_nodes, "LI", {});
      var li7_nodes = children(li7);
      t14 = claim_text(li7_nodes, "Each server starts with 60 days of eligibility on induction. Delegating for one day uses one day, and while the server owner is the active representative, they regain one day per day up to 60 days. This is to prevent the server owner from permanently becoming inactive and leaving their duties to the council advisor, as the server should be given to the active staff in that case.");
      li7_nodes.forEach(detach);
      li9 = claim_element(ul2_nodes, "LI", {});
      var li9_nodes = children(li9);
      t15 = claim_text(li9_nodes, "During delegation, the server owner is not subject to activity requirements, but the council advisor may be considered absent if they fail to uphold the server owner's responsibilities.");
      ul1 = claim_element(li9_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li8 = claim_element(ul1_nodes, "LI", {});
      var li8_nodes = children(li8);
      t16 = claim_text(li8_nodes, "If the council advisor is removed, the server is allowed to not meet activity requirements until the server owner's scheduled return and it is the server owner's responsibliity to find another council advisor if they need one when they return.");
      li8_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      li9_nodes.forEach(detach);
      ul2_nodes.forEach(detach);
      claim_component(linkable3.$$.fragment, div_nodes);
      ul3 = claim_element(div_nodes, "UL", {});
      var ul3_nodes = children(ul3);
      li10 = claim_element(ul3_nodes, "LI", {});
      var li10_nodes = children(li10);
      t17 = claim_text(li10_nodes, "When a server applies, the ");
      b0 = claim_element(li10_nodes, "B", {});
      var b0_nodes = children(b0);
      t18 = claim_text(b0_nodes, "New Applicant Alert");
      b0_nodes.forEach(detach);
      t19 = claim_text(li10_nodes, " role will be automatically pinged to give people a chance to raise concerns and start a vote to reject.");
      li10_nodes.forEach(detach);
      li11 = claim_element(ul3_nodes, "LI", {});
      var li11_nodes = children(li11);
      t20 = claim_text(li11_nodes, "An observer may only observe one server concurrently.");
      li11_nodes.forEach(detach);
      li12 = claim_element(ul3_nodes, "LI", {});
      var li12_nodes = children(li12);
      t21 = claim_text(li12_nodes, "Read more about the entire observation and induction process ");
      a2 = claim_element(li12_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t22 = claim_text(a2_nodes, "here");
      a2_nodes.forEach(detach);
      t23 = claim_text(li12_nodes, ".");
      li12_nodes.forEach(detach);
      ul3_nodes.forEach(detach);
      claim_component(linkable4.$$.fragment, div_nodes);
      ul4 = claim_element(div_nodes, "UL", {});
      var ul4_nodes = children(ul4);
      li13 = claim_element(ul4_nodes, "LI", {});
      var li13_nodes = children(li13);
      t24 = claim_text(li13_nodes, "Events that involve at least one TCN server may be posted to ");
      b1 = claim_element(li13_nodes, "B", {});
      var b1_nodes = children(b1);
      t25 = claim_text(b1_nodes, "#network-events");
      b1_nodes.forEach(detach);
      t26 = claim_text(li13_nodes, " and published across the network (the webhook URL is pinned in the channel).");
      li13_nodes.forEach(detach);
      li14 = claim_element(ul4_nodes, "LI", {});
      var li14_nodes = children(li14);
      t27 = claim_text(li14_nodes, "All servers are required to follow this channel in a publicly visible channel.");
      li14_nodes.forEach(detach);
      ul4_nodes.forEach(detach);
      claim_component(linkable5.$$.fragment, div_nodes);
      ul5 = claim_element(div_nodes, "UL", {});
      var ul5_nodes = children(ul5);
      li15 = claim_element(ul5_nodes, "LI", {});
      var li15_nodes = children(li15);
      t28 = claim_text(li15_nodes, "24 hours before the planned introduction of people into the council, a notice will be sent pinging the ");
      b2 = claim_element(li15_nodes, "B", {});
      var b2_nodes = children(b2);
      t29 = claim_text(b2_nodes, "New Council Member Alert");
      b2_nodes.forEach(detach);
      t30 = claim_text(li15_nodes, " role to give people a chance to vote to deny entry.");
      li15_nodes.forEach(detach);
      li16 = claim_element(ul5_nodes, "LI", {});
      var li16_nodes = children(li16);
      t31 = claim_text(li16_nodes, "A minor vote may be started to deny a person entry into HQ and the council.");
      li16_nodes.forEach(detach);
      li17 = claim_element(ul5_nodes, "LI", {});
      var li17_nodes = children(li17);
      t32 = claim_text(li17_nodes, "All other membership changes, including changing positions and leaving the council, do not require advance notice or a vote.");
      li17_nodes.forEach(detach);
      ul5_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "/info/voting");
      attr(a1, "href", "/info/voting");
      attr(a2, "href", "/join");
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      mount_component(linkable0, div, null);
      append_hydration(div, p0);
      append_hydration(p0, t1);
      append_hydration(p0, a0);
      append_hydration(a0, t2);
      append_hydration(p0, t3);
      mount_component(linkable1, div, null);
      append_hydration(div, p1);
      append_hydration(p1, t4);
      append_hydration(p1, a1);
      append_hydration(a1, t5);
      append_hydration(p1, t6);
      append_hydration(div, ul0);
      append_hydration(ul0, li0);
      append_hydration(li0, t7);
      append_hydration(ul0, li1);
      append_hydration(li1, t8);
      append_hydration(ul0, li2);
      append_hydration(li2, t9);
      append_hydration(ul0, li3);
      append_hydration(li3, t10);
      append_hydration(ul0, li4);
      append_hydration(li4, t11);
      append_hydration(ul0, li5);
      append_hydration(li5, t12);
      mount_component(linkable2, div, null);
      append_hydration(div, ul2);
      append_hydration(ul2, li6);
      append_hydration(li6, t13);
      append_hydration(ul2, li7);
      append_hydration(li7, t14);
      append_hydration(ul2, li9);
      append_hydration(li9, t15);
      append_hydration(li9, ul1);
      append_hydration(ul1, li8);
      append_hydration(li8, t16);
      mount_component(linkable3, div, null);
      append_hydration(div, ul3);
      append_hydration(ul3, li10);
      append_hydration(li10, t17);
      append_hydration(li10, b0);
      append_hydration(b0, t18);
      append_hydration(li10, t19);
      append_hydration(ul3, li11);
      append_hydration(li11, t20);
      append_hydration(ul3, li12);
      append_hydration(li12, t21);
      append_hydration(li12, a2);
      append_hydration(a2, t22);
      append_hydration(li12, t23);
      mount_component(linkable4, div, null);
      append_hydration(div, ul4);
      append_hydration(ul4, li13);
      append_hydration(li13, t24);
      append_hydration(li13, b1);
      append_hydration(b1, t25);
      append_hydration(li13, t26);
      append_hydration(ul4, li14);
      append_hydration(li14, t27);
      mount_component(linkable5, div, null);
      append_hydration(div, ul5);
      append_hydration(ul5, li15);
      append_hydration(li15, t28);
      append_hydration(li15, b2);
      append_hydration(b2, t29);
      append_hydration(li15, t30);
      append_hydration(ul5, li16);
      append_hydration(li16, t31);
      append_hydration(ul5, li17);
      append_hydration(li17, t32);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(linkable0.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(linkable3.$$.fragment, local);
      transition_in(linkable4.$$.fragment, local);
      transition_in(linkable5.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      transition_out(linkable4.$$.fragment, local);
      transition_out(linkable5.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(linkable0);
      destroy_component(linkable1);
      destroy_component(linkable2);
      destroy_component(linkable3);
      destroy_component(linkable4);
      destroy_component(linkable5);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/hq", "HQ"],
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
