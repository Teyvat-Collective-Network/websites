import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot(ctx) {
  let div;
  let h1;
  let t0;
  let ul0;
  let li0;
  let a0;
  let t1;
  let ul1;
  let li1;
  let a1;
  let t2;
  let ul2;
  let li2;
  let a2;
  let t3;
  let ul3;
  let li3;
  let a3;
  let t4;
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("HQ");
      ul0 = element("ul");
      li0 = element("li");
      a0 = element("a");
      t1 = text("Directory");
      ul1 = element("ul");
      li1 = element("li");
      a1 = element("a");
      t2 = text("Voting");
      ul2 = element("ul");
      li2 = element("li");
      a2 = element("a");
      t3 = text("Procedures");
      ul3 = element("ul");
      li3 = element("li");
      a3 = element("a");
      t4 = text("Akasha System");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "HQ");
      h1_nodes.forEach(detach);
      ul0 = claim_element(div_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, "Directory");
      a0_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      ul1 = claim_element(div_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li1 = claim_element(ul1_nodes, "LI", {});
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "Voting");
      a1_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      ul2 = claim_element(div_nodes, "UL", {});
      var ul2_nodes = children(ul2);
      li2 = claim_element(ul2_nodes, "LI", {});
      var li2_nodes = children(li2);
      a2 = claim_element(li2_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t3 = claim_text(a2_nodes, "Procedures");
      a2_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      ul2_nodes.forEach(detach);
      ul3 = claim_element(div_nodes, "UL", {});
      var ul3_nodes = children(ul3);
      li3 = claim_element(ul3_nodes, "LI", {});
      var li3_nodes = children(li3);
      a3 = claim_element(li3_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t4 = claim_text(a3_nodes, "Akasha System");
      a3_nodes.forEach(detach);
      li3_nodes.forEach(detach);
      ul3_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "/info/directory");
      attr(a1, "href", "/info/voting");
      attr(a2, "href", "/info/procedures");
      attr(a3, "href", "/info/akasha");
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      append_hydration(div, ul0);
      append_hydration(ul0, li0);
      append_hydration(li0, a0);
      append_hydration(a0, t1);
      append_hydration(div, ul1);
      append_hydration(ul1, li1);
      append_hydration(li1, a1);
      append_hydration(a1, t2);
      append_hydration(div, ul2);
      append_hydration(ul2, li2);
      append_hydration(li2, a2);
      append_hydration(a2, t3);
      append_hydration(div, ul3);
      append_hydration(ul3, li3);
      append_hydration(li3, a3);
      append_hydration(a3, t4);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/definitions-organization", "Definitions & Organization"],
      next: ["/info/quickstart", "Quickstart"],
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
