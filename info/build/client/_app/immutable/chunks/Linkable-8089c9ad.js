import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, C as noop, h as detach, T as assign, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, c as claim_space, n as attr, Z as set_custom_element_data_map, U as set_attributes, G as append_hydration, X as get_spread_update } from "./index-c4baf36c.js";
const Linkable_svelte_svelte_type_style_lang = "";
function create_dynamic_element(ctx) {
  let svelte_element;
  let a;
  let i;
  let t0;
  let a_href_value;
  let t1;
  let span;
  let svelte_element_levels = [{ id: (
    /*id*/
    ctx[1]
  ) }, { class: "svelte-ji3h6o" }];
  let svelte_element_data = {};
  for (let i2 = 0; i2 < svelte_element_levels.length; i2 += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i2]);
  }
  return {
    c() {
      svelte_element = element(
        /*e*/
        ctx[0]
      );
      a = element("a");
      i = element("i");
      t0 = text("link");
      t1 = space();
      span = element("span");
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*e*/
        (ctx[0] || "null").toUpperCase(),
        { id: true, class: true }
      );
      var svelte_element_nodes = children(svelte_element);
      a = claim_element(svelte_element_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      i = claim_element(a_nodes, "I", { class: true });
      var i_nodes = children(i);
      t0 = claim_text(i_nodes, "link");
      i_nodes.forEach(detach);
      a_nodes.forEach(detach);
      t1 = claim_space(svelte_element_nodes);
      span = claim_element(svelte_element_nodes, "SPAN", {});
      var span_nodes = children(span);
      span_nodes.forEach(detach);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "material-icons");
      attr(a, "href", a_href_value = "#" + /*id*/
      ctx[1]);
      attr(a, "class", "svelte-ji3h6o");
      if (/-/.test(
        /*e*/
        ctx[0]
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      append_hydration(svelte_element, a);
      append_hydration(a, i);
      append_hydration(i, t0);
      append_hydration(svelte_element, t1);
      append_hydration(svelte_element, span);
      span.innerHTML = /*value*/
      ctx[2];
    },
    p(ctx2, dirty) {
      if (dirty & /*id*/
      2 && a_href_value !== (a_href_value = "#" + /*id*/
      ctx2[1])) {
        attr(a, "href", a_href_value);
      }
      if (dirty & /*value*/
      4)
        span.innerHTML = /*value*/
        ctx2[2];
      svelte_element_data = get_spread_update(svelte_element_levels, [dirty & /*id*/
      2 && { id: (
        /*id*/
        ctx2[1]
      ) }, { class: "svelte-ji3h6o" }]);
      if (/-/.test(
        /*e*/
        ctx2[0]
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element);
    }
  };
}
function create_fragment(ctx) {
  let previous_tag = (
    /*e*/
    ctx[0]
  );
  let svelte_element_anchor;
  let svelte_element = (
    /*e*/
    ctx[0] && create_dynamic_element(ctx)
  );
  return {
    c() {
      if (svelte_element)
        svelte_element.c();
      svelte_element_anchor = empty();
    },
    l(nodes) {
      if (svelte_element)
        svelte_element.l(nodes);
      svelte_element_anchor = empty();
    },
    m(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_hydration(target, svelte_element_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (
        /*e*/
        ctx2[0]
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*e*/
          ctx2[0]
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
      }
      previous_tag = /*e*/
      ctx2[0];
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svelte_element_anchor);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { e } = $$props;
  let { id } = $$props;
  let { value } = $$props;
  $$self.$$set = ($$props2) => {
    if ("e" in $$props2)
      $$invalidate(0, e = $$props2.e);
    if ("id" in $$props2)
      $$invalidate(1, id = $$props2.id);
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
  };
  return [e, id, value];
}
class Linkable extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { e: 0, id: 1, value: 2 });
  }
}
export {
  Linkable as L
};
