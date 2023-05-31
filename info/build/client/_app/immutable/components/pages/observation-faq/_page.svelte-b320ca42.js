import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../chunks/index-c4baf36c.js";
import { L as Linkable } from "../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../chunks/Navigation-82debefb.js";
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
  let p5;
  let t6;
  let linkable2;
  let p6;
  let t7;
  let p7;
  let t8;
  let linkable3;
  let p8;
  let t9;
  let p9;
  let t10;
  let p10;
  let t11;
  let p11;
  let t12;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "process",
      e: "h2",
      value: "The Process"
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "why-access",
      e: "h2",
      value: "Why does the observer need access to everything?"
    }
  });
  linkable2 = new Linkable({
    props: {
      id: "what-to-do-when-rejected",
      e: "h2",
      value: "My server was rejected. What now?"
    }
  });
  linkable3 = new Linkable({
    props: {
      id: "requesting-different-observer",
      e: "h2",
      value: "Can I request a different observer?"
    }
  });
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Observation FAQ");
      create_component(linkable0.$$.fragment);
      p0 = element("p");
      t1 = text("Observation is the period of time during which one of our observers will oversee all operations in the server, requiring view permissions to all channels and the audit logs. Throughout the process, they will also facilitate communication between your server and the network, including passing on concerns about your server but also forwarding questions you may have along the way.");
      p1 = element("p");
      t2 = text("At the end of observation, the observer will create a report evaluating your server's environment and staff organization and performance, which will be shared to you for feedback. Afterwards, a vote will be held to induct your server into the TCN.");
      p2 = element("p");
      t3 = text("At any point, you may choose to cancel observation which means your server will not be inducted into the TCN and you may remove the observer's permissions.");
      create_component(linkable1.$$.fragment);
      p3 = element("p");
      t4 = text("The observer's duty is to provide the council with all of the information necessary to make an informed decision on whether or not your server is fit for the TCN and vice versa. Being able to evaluate everything that happens in your server is crucial to this process. Audit log access is needed to be able to corroborate actions your staff take.");
      p4 = element("p");
      t5 = text("We may discuss some matters internally as an observer team, but nothing will be shared with the rest of the network until you review the report, so you don't have to worry about the observer spying on your server and sharing information without your permission with the network.");
      p5 = element("p");
      t6 = text("If there is information that we believe is crucial to the result and will not leave out, you may at any point withdraw your application and we will not publish any report or share the information.");
      create_component(linkable2.$$.fragment);
      p6 = element("p");
      t7 = text("You may re-apply after 3 weeks, unless we have specifically informed you that we will not reconsider in the future. If you re-apply, we expect you to have addressed all reasons that were brought up leading to your rejection/denial.");
      p7 = element("p");
      t8 = text("If we did not give you any reasons, there are probably private reasons usually involving serious concerns with the owner or prominent admins that we believe make your server irredeemable, in which case it is unlikely we will reconsider.");
      create_component(linkable3.$$.fragment);
      p8 = element("p");
      t9 = text("We will avoid assigning observers that have personal ties, either positive or negative, with you or your staff. However, if you have personal issues with the observer that was assigned, you may reach out to another observer to request someone else to be selected.");
      p9 = element("p");
      t10 = text("If there are no options that we are willing or able to assign to you that you are okay with, we may have to either postpone until the observer committee changes or other observers are available, or we may have to agree to cancel, at least until a later date.");
      p10 = element("p");
      t11 = text("If at any point throughout the process you believe the observer is being problematic, you may wish to report them to another observer and we will discuss how to proceed from there (usually, we can just transfer the observation to someone else without causing you any delays, and we may relieve the observer of their duty if we find it is necessary).");
      p11 = element("p");
      t12 = text("If you believe you are not being fairly represented in the report, you may discuss that with them and propose changes, but they do not have to follow all of your requests and are required to present all necessary information for the council to make an informed decision. If you believe any misinformation was presented or the facts are misconstrued in a way to make your server look bad, you may provide evidence to another observer to have the matter privately discussed.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Observation FAQ");
      h1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "Observation is the period of time during which one of our observers will oversee all operations in the server, requiring view permissions to all channels and the audit logs. Throughout the process, they will also facilitate communication between your server and the network, including passing on concerns about your server but also forwarding questions you may have along the way.");
      p0_nodes.forEach(detach);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "At the end of observation, the observer will create a report evaluating your server's environment and staff organization and performance, which will be shared to you for feedback. Afterwards, a vote will be held to induct your server into the TCN.");
      p1_nodes.forEach(detach);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t3 = claim_text(p2_nodes, "At any point, you may choose to cancel observation which means your server will not be inducted into the TCN and you may remove the observer's permissions.");
      p2_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div_nodes);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      t4 = claim_text(p3_nodes, "The observer's duty is to provide the council with all of the information necessary to make an informed decision on whether or not your server is fit for the TCN and vice versa. Being able to evaluate everything that happens in your server is crucial to this process. Audit log access is needed to be able to corroborate actions your staff take.");
      p3_nodes.forEach(detach);
      p4 = claim_element(div_nodes, "P", {});
      var p4_nodes = children(p4);
      t5 = claim_text(p4_nodes, "We may discuss some matters internally as an observer team, but nothing will be shared with the rest of the network until you review the report, so you don't have to worry about the observer spying on your server and sharing information without your permission with the network.");
      p4_nodes.forEach(detach);
      p5 = claim_element(div_nodes, "P", {});
      var p5_nodes = children(p5);
      t6 = claim_text(p5_nodes, "If there is information that we believe is crucial to the result and will not leave out, you may at any point withdraw your application and we will not publish any report or share the information.");
      p5_nodes.forEach(detach);
      claim_component(linkable2.$$.fragment, div_nodes);
      p6 = claim_element(div_nodes, "P", {});
      var p6_nodes = children(p6);
      t7 = claim_text(p6_nodes, "You may re-apply after 3 weeks, unless we have specifically informed you that we will not reconsider in the future. If you re-apply, we expect you to have addressed all reasons that were brought up leading to your rejection/denial.");
      p6_nodes.forEach(detach);
      p7 = claim_element(div_nodes, "P", {});
      var p7_nodes = children(p7);
      t8 = claim_text(p7_nodes, "If we did not give you any reasons, there are probably private reasons usually involving serious concerns with the owner or prominent admins that we believe make your server irredeemable, in which case it is unlikely we will reconsider.");
      p7_nodes.forEach(detach);
      claim_component(linkable3.$$.fragment, div_nodes);
      p8 = claim_element(div_nodes, "P", {});
      var p8_nodes = children(p8);
      t9 = claim_text(p8_nodes, "We will avoid assigning observers that have personal ties, either positive or negative, with you or your staff. However, if you have personal issues with the observer that was assigned, you may reach out to another observer to request someone else to be selected.");
      p8_nodes.forEach(detach);
      p9 = claim_element(div_nodes, "P", {});
      var p9_nodes = children(p9);
      t10 = claim_text(p9_nodes, "If there are no options that we are willing or able to assign to you that you are okay with, we may have to either postpone until the observer committee changes or other observers are available, or we may have to agree to cancel, at least until a later date.");
      p9_nodes.forEach(detach);
      p10 = claim_element(div_nodes, "P", {});
      var p10_nodes = children(p10);
      t11 = claim_text(p10_nodes, "If at any point throughout the process you believe the observer is being problematic, you may wish to report them to another observer and we will discuss how to proceed from there (usually, we can just transfer the observation to someone else without causing you any delays, and we may relieve the observer of their duty if we find it is necessary).");
      p10_nodes.forEach(detach);
      p11 = claim_element(div_nodes, "P", {});
      var p11_nodes = children(p11);
      t12 = claim_text(p11_nodes, "If you believe you are not being fairly represented in the report, you may discuss that with them and propose changes, but they do not have to follow all of your requests and are required to present all necessary information for the council to make an informed decision. If you believe any misinformation was presented or the facts are misconstrued in a way to make your server look bad, you may provide evidence to another observer to have the matter privately discussed.");
      p11_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
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
      append_hydration(div, p5);
      append_hydration(p5, t6);
      mount_component(linkable2, div, null);
      append_hydration(div, p6);
      append_hydration(p6, t7);
      append_hydration(div, p7);
      append_hydration(p7, t8);
      mount_component(linkable3, div, null);
      append_hydration(div, p8);
      append_hydration(p8, t9);
      append_hydration(div, p9);
      append_hydration(p9, t10);
      append_hydration(div, p10);
      append_hydration(p10, t11);
      append_hydration(div, p11);
      append_hydration(p11, t12);
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
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(linkable0);
      destroy_component(linkable1);
      destroy_component(linkable2);
      destroy_component(linkable3);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/join#observation-faq", "Joining the TCN"],
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
