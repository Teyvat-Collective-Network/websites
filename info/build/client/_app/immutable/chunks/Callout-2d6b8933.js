import { S as SvelteComponent, i as init, s as safe_not_equal, L as create_slot, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, p as set_style, b as insert_hydration, G as append_hydration, u as set_data, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, f as transition_in, t as transition_out } from "./index-c4baf36c.js";
const Callout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  let i;
  let t0_value = styles[
    /*style*/
    ctx[0]
  ].icon + "";
  let t0;
  let t1;
  let span;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  return {
    c() {
      div = element("div");
      i = element("i");
      t0 = text(t0_value);
      t1 = space();
      span = element("span");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { style: true, class: true });
      var div_nodes = children(div);
      i = claim_element(div_nodes, "I", { class: true });
      var i_nodes = children(i);
      t0 = claim_text(i_nodes, t0_value);
      i_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      span = claim_element(div_nodes, "SPAN", {});
      var span_nodes = children(span);
      if (default_slot)
        default_slot.l(span_nodes);
      span_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "material-icons svelte-cfiyg1");
      set_style(div, "background-color", styles[
        /*style*/
        ctx[0]
      ].color);
      attr(div, "class", "svelte-cfiyg1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, i);
      append_hydration(i, t0);
      append_hydration(div, t1);
      append_hydration(div, span);
      if (default_slot) {
        default_slot.m(span, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & /*style*/
      1) && t0_value !== (t0_value = styles[
        /*style*/
        ctx2[0]
      ].icon + ""))
        set_data(t0, t0_value);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*style*/
      1) {
        set_style(div, "background-color", styles[
          /*style*/
          ctx2[0]
        ].color);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
const styles = {
  green: {
    icon: "check",
    color: "var(--green-callout)"
  },
  info: {
    icon: "info",
    color: "var(--blue-callout)"
  },
  warn: {
    icon: "warning",
    color: "var(--yellow-callout)"
  },
  red: {
    icon: "report",
    color: "var(--red-callout)"
  }
};
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { style } = $$props;
  $$self.$$set = ($$props2) => {
    if ("style" in $$props2)
      $$invalidate(0, style = $$props2.style);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [style, $$scope, slots];
}
class Callout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { style: 0 });
  }
}
export {
  Callout as C
};
