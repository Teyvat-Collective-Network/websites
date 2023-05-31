import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, x as create_component, l as claim_element, m as children, r as claim_text, h as detach, y as claim_component, n as attr, b as insert_hydration, G as append_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, C as noop } from "../../../chunks/index-c4baf36c.js";
import { C as Card } from "../../../chunks/Card-50f694ea.js";
import { L as Linkable } from "../../../chunks/Linkable-8089c9ad.js";
function create_default_slot_8(ctx) {
  let p0;
  let t0;
  let p1;
  let t1;
  let a;
  let t2;
  return {
    c() {
      p0 = element("p");
      t0 = text("These are the individual servers of the TCN, each a mains server dedicated to a specific character.");
      p1 = element("p");
      t1 = text("Find a list of TCN servers\n");
      a = element("a");
      t2 = text("here");
      this.h();
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "These are the individual servers of the TCN, each a mains server dedicated to a specific character.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t1 = claim_text(p1_nodes, "Find a list of TCN servers\n");
      a = claim_element(p1_nodes, "A", { href: true });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "here");
      a_nodes.forEach(detach);
      p1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/partners");
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t1);
      append_hydration(p1, a);
      append_hydration(a, t2);
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
function create_default_slot_7(ctx) {
  let p0;
  let t0;
  let p1;
  let a;
  let t1;
  return {
    c() {
      p0 = element("p");
      t0 = text("This is the official public server for the TCN, where you can contact observers and other server staff and ask questions or give feedback about the TCN.");
      p1 = element("p");
      a = element("a");
      t1 = text("Join the Hub!");
      this.h();
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "This is the official public server for the TCN, where you can contact observers and other server staff and ask questions or give feedback about the TCN.");
      p0_nodes.forEach(detach);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      a = claim_element(p1_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Join the Hub!");
      a_nodes.forEach(detach);
      p1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://discord.gg/FG2wpbywSx");
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, a);
      append_hydration(a, t1);
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
  let t;
  return {
    c() {
      p = element("p");
      t = text("This is the headquarters server for the TCN. It is private to the TCN council, which consists of each server's owner and up to one other trusted member. This server facilitates communication and coordination of servers.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "This is the headquarters server for the TCN. It is private to the TCN council, which consists of each server's owner and up to one other trusted member. This server facilitates communication and coordination of servers.");
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
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("As a member server of the TCN, you get access to information on members, ongoing issues, as well as informative resources like server setup and tools and on-demand help for the technical aspects and community and staff management.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "As a member server of the TCN, you get access to information on members, ongoing issues, as well as informative resources like server setup and tools and on-demand help for the technical aspects and community and staff management.");
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
      t = text("TCN servers have quick and easy access to communication with each other. In addition to being able to more quickly resolve any issues and form strong relationships with many other prominent servers, you have the unique opportunity to more easily start collaborations for things like events, which you can also promote through the TCN's event announcement feed.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "TCN servers have quick and easy access to communication with each other. In addition to being able to more quickly resolve any issues and form strong relationships with many other prominent servers, you have the unique opportunity to more easily start collaborations for things like events, which you can also promote through the TCN's event announcement feed.");
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
      t = text("When you join the TCN, you automatically become a TCN partner of all TCN servers and will have your server listed on the partner list in all of them. Additionally, you will be able to get tips on how to improve your server environment and grow a strong, healthy community.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "When you join the TCN, you automatically become a TCN partner of all TCN servers and will have your server listed on the partner list in all of them. Additionally, you will be able to get tips on how to improve your server environment and grow a strong, healthy community.");
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
      t = text("We prioritize two-way communication with our member servers. We are always open to feedback and will reach out for opportunities to improve the network to work for our members, and not the other way around.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "We prioritize two-way communication with our member servers. We are always open to feedback and will reach out for opportunities to improve the network to work for our members, and not the other way around.");
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
      t = text("In addition to communicating major changes with our members clearly, we propose these changes and vote on major decisions on them, and the observer team does not have any more of a say in matters than everyone else. Each server gets one vote in all important matters. We also implement follow-up changes based on feedback.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "In addition to communicating major changes with our members clearly, we propose these changes and vote on major decisions on them, and the observer team does not have any more of a say in matters than everyone else. Each server gets one vote in all important matters. We also implement follow-up changes based on feedback.");
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
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("We don't expect everyone in the TCN to like everyone else, but even when discussions are heated we treat each other with civility and get to the core of the issue and come to a resolution that can benefit us all as much as possible. Additionally, we learn from conflicts, and every mistake or dispute is an opportunity to not just fix the root of the issue but improve other parts of the network.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "We don't expect everyone in the TCN to like everyone else, but even when discussions are heated we treat each other with civility and get to the core of the issue and come to a resolution that can benefit us all as much as possible. Additionally, we learn from conflicts, and every mistake or dispute is an opportunity to not just fix the root of the issue but improve other parts of the network.");
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
function create_fragment(ctx) {
  let div4;
  let div3;
  let h1;
  let t0;
  let linkable0;
  let p0;
  let t1;
  let p1;
  let t2;
  let div0;
  let card0;
  let card1;
  let card2;
  let linkable1;
  let p2;
  let t3;
  let div1;
  let card3;
  let card4;
  let card5;
  let linkable2;
  let p3;
  let t4;
  let div2;
  let card6;
  let card7;
  let card8;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "organization",
      e: "h2",
      value: "Organization"
    }
  });
  card0 = new Card({
    props: {
      icon: "business",
      title: "Individual Servers",
      expandable: true,
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  card1 = new Card({
    props: {
      icon: "hub",
      title: "The Hub",
      expandable: true,
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  card2 = new Card({
    props: {
      icon: "high_quality",
      title: "HQ",
      expandable: true,
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "benefits",
      e: "h2",
      value: "Benefits of the TCN"
    }
  });
  card3 = new Card({
    props: {
      icon: "info",
      title: "Information",
      expandable: true,
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  card4 = new Card({
    props: {
      icon: "handshake",
      title: "Connections",
      expandable: true,
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  card5 = new Card({
    props: {
      icon: "insights",
      title: "Growth",
      expandable: true,
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  linkable2 = new Linkable({
    props: {
      id: "core-values",
      e: "h2",
      value: "Our Core Values"
    }
  });
  card6 = new Card({
    props: {
      icon: "forum",
      title: "Transparency",
      expandable: true,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  card7 = new Card({
    props: {
      icon: "how_to_vote",
      title: "Democracy",
      expandable: true,
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  card8 = new Card({
    props: {
      icon: "group",
      title: "Collaboration",
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
      t0 = text("About the TCN");
      create_component(linkable0.$$.fragment);
      p0 = element("p");
      t1 = text("The TCN does not enforce any particular structure on its member servers. TCN servers are not required to change their server setup, follow a template, enforce particular rules, or give any permissions to TCN observers. Our only requirements are to display a list of TCN partner servers, cross-post event promotions from partner servers, and maintain a healthy community that follows its rules.");
      p1 = element("p");
      t2 = text("The TCN is divided into three components. Click a card to learn more.");
      div0 = element("div");
      create_component(card0.$$.fragment);
      create_component(card1.$$.fragment);
      create_component(card2.$$.fragment);
      create_component(linkable1.$$.fragment);
      p2 = element("p");
      t3 = text("Click a card to learn more.");
      div1 = element("div");
      create_component(card3.$$.fragment);
      create_component(card4.$$.fragment);
      create_component(card5.$$.fragment);
      create_component(linkable2.$$.fragment);
      p3 = element("p");
      t4 = text("Click a card to learn more.");
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
      t0 = claim_text(h1_nodes, "About the TCN");
      h1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div3_nodes);
      p0 = claim_element(div3_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "The TCN does not enforce any particular structure on its member servers. TCN servers are not required to change their server setup, follow a template, enforce particular rules, or give any permissions to TCN observers. Our only requirements are to display a list of TCN partner servers, cross-post event promotions from partner servers, and maintain a healthy community that follows its rules.");
      p0_nodes.forEach(detach);
      p1 = claim_element(div3_nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "The TCN is divided into three components. Click a card to learn more.");
      p1_nodes.forEach(detach);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(card0.$$.fragment, div0_nodes);
      claim_component(card1.$$.fragment, div0_nodes);
      claim_component(card2.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div3_nodes);
      p2 = claim_element(div3_nodes, "P", {});
      var p2_nodes = children(p2);
      t3 = claim_text(p2_nodes, "Click a card to learn more.");
      p2_nodes.forEach(detach);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(card3.$$.fragment, div1_nodes);
      claim_component(card4.$$.fragment, div1_nodes);
      claim_component(card5.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      claim_component(linkable2.$$.fragment, div3_nodes);
      p3 = claim_element(div3_nodes, "P", {});
      var p3_nodes = children(p3);
      t4 = claim_text(p3_nodes, "Click a card to learn more.");
      p3_nodes.forEach(detach);
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
      attr(div0, "class", "cards");
      attr(div1, "class", "cards");
      attr(div2, "class", "cards");
      attr(div3, "id", "main");
      attr(div4, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      append_hydration(div3, h1);
      append_hydration(h1, t0);
      mount_component(linkable0, div3, null);
      append_hydration(div3, p0);
      append_hydration(p0, t1);
      append_hydration(div3, p1);
      append_hydration(p1, t2);
      append_hydration(div3, div0);
      mount_component(card0, div0, null);
      mount_component(card1, div0, null);
      mount_component(card2, div0, null);
      mount_component(linkable1, div3, null);
      append_hydration(div3, p2);
      append_hydration(p2, t3);
      append_hydration(div3, div1);
      mount_component(card3, div1, null);
      mount_component(card4, div1, null);
      mount_component(card5, div1, null);
      mount_component(linkable2, div3, null);
      append_hydration(div3, p3);
      append_hydration(p3, t4);
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
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(card3.$$.fragment, local);
      transition_in(card4.$$.fragment, local);
      transition_in(card5.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(card6.$$.fragment, local);
      transition_in(card7.$$.fragment, local);
      transition_in(card8.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(card3.$$.fragment, local);
      transition_out(card4.$$.fragment, local);
      transition_out(card5.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(card6.$$.fragment, local);
      transition_out(card7.$$.fragment, local);
      transition_out(card8.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      destroy_component(linkable0);
      destroy_component(card0);
      destroy_component(card1);
      destroy_component(card2);
      destroy_component(linkable1);
      destroy_component(card3);
      destroy_component(card4);
      destroy_component(card5);
      destroy_component(linkable2);
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
