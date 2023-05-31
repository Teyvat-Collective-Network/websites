import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, G as append_hydration, u as set_data, C as noop, Q as component_subscribe } from "../../chunks/index-c4baf36c.js";
import { p as page } from "../../chunks/stores-01f63ed3.js";
function create_if_block(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("If you arrived at this page from a link on this website, please report it as an\n                error to HyperNeutrino#1759. Otherwise, please check the spelling of the URL\n                (including capitalization) and try again.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "If you arrived at this page from a link on this website, please report it as an\n                error to HyperNeutrino#1759. Otherwise, please check the spelling of the URL\n                (including capitalization) and try again.");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_fragment(ctx) {
  var _a;
  let div1;
  let div0;
  let h1;
  let b;
  let t0_value = (
    /*$page*/
    ctx[0].status + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*$page*/
    ((_a = ctx[0].error) == null ? void 0 : _a.message) + ""
  );
  let t2;
  let t3;
  let p;
  let a;
  let t4;
  let t5;
  let if_block = (
    /*$page*/
    ctx[0].status === 404 && create_if_block()
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      b = element("b");
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      t3 = space();
      p = element("p");
      a = element("a");
      t4 = text("< Return to Home Page");
      t5 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { id: true });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", {});
      var h1_nodes = children(h1);
      b = claim_element(h1_nodes, "B", {});
      var b_nodes = children(b);
      t0 = claim_text(b_nodes, t0_value);
      b_nodes.forEach(detach);
      t1 = claim_space(h1_nodes);
      t2 = claim_text(h1_nodes, t2_value);
      h1_nodes.forEach(detach);
      t3 = claim_space(div0_nodes);
      p = claim_element(div0_nodes, "P", {});
      var p_nodes = children(p);
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t4 = claim_text(a_nodes, "< Return to Home Page");
      a_nodes.forEach(detach);
      p_nodes.forEach(detach);
      t5 = claim_space(div0_nodes);
      if (if_block)
        if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/");
      attr(div0, "id", "main");
      attr(div1, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, h1);
      append_hydration(h1, b);
      append_hydration(b, t0);
      append_hydration(h1, t1);
      append_hydration(h1, t2);
      append_hydration(div0, t3);
      append_hydration(div0, p);
      append_hydration(p, a);
      append_hydration(a, t4);
      append_hydration(div0, t5);
      if (if_block)
        if_block.m(div0, null);
    },
    p(ctx2, [dirty]) {
      var _a2;
      if (dirty & /*$page*/
      1 && t0_value !== (t0_value = /*$page*/
      ctx2[0].status + ""))
        set_data(t0, t0_value);
      if (dirty & /*$page*/
      1 && t2_value !== (t2_value = /*$page*/
      ((_a2 = ctx2[0].error) == null ? void 0 : _a2.message) + ""))
        set_data(t2, t2_value);
      if (
        /*$page*/
        ctx2[0].status === 404
      ) {
        if (if_block)
          ;
        else {
          if_block = create_if_block();
          if_block.c();
          if_block.m(div0, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block)
        if_block.d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  return [$page];
}
class Error extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Error as default
};
