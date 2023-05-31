import { S as SvelteComponent, i as init, s as safe_not_equal, L as create_slot, k as element, a as space, q as text, l as claim_element, m as children, c as claim_space, r as claim_text, h as detach, n as attr, b as insert_hydration, G as append_hydration, H as listen, u as set_data, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, f as transition_in, t as transition_out, p as set_style } from "./index-c4baf36c.js";
const Card_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let i;
  let t;
  return {
    c() {
      i = element("i");
      t = text(
        /*icon*/
        ctx[1]
      );
      this.h();
    },
    l(nodes) {
      i = claim_element(nodes, "I", { class: true, style: true });
      var i_nodes = children(i);
      t = claim_text(
        i_nodes,
        /*icon*/
        ctx[1]
      );
      i_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "material-icons");
      set_style(
        i,
        "color",
        /*icon_color*/
        ctx[4]
      );
    },
    m(target, anchor) {
      insert_hydration(target, i, anchor);
      append_hydration(i, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*icon*/
      2)
        set_data(
          t,
          /*icon*/
          ctx2[1]
        );
      if (dirty & /*icon_color*/
      16) {
        set_style(
          i,
          "color",
          /*icon_color*/
          ctx2[4]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(i);
    }
  };
}
function create_fragment(ctx) {
  let div1;
  let button;
  let h5;
  let t0;
  let span;
  let t1;
  let t2;
  let div0;
  let div1_class_value;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*icon*/
    ctx[1] && create_if_block(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  return {
    c() {
      div1 = element("div");
      button = element("button");
      h5 = element("h5");
      if (if_block)
        if_block.c();
      t0 = space();
      span = element("span");
      t1 = text(
        /*title*/
        ctx[2]
      );
      t2 = space();
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button = claim_element(div1_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      h5 = claim_element(button_nodes, "H5", { class: true });
      var h5_nodes = children(h5);
      if (if_block)
        if_block.l(h5_nodes);
      t0 = claim_space(h5_nodes);
      span = claim_element(h5_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(
        span_nodes,
        /*title*/
        ctx[2]
      );
      span_nodes.forEach(detach);
      h5_nodes.forEach(detach);
      button_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { id: true, class: true });
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "svelte-121f4ox");
      attr(h5, "class", "svelte-121f4ox");
      attr(button, "class", "svelte-121f4ox");
      attr(div0, "id", "slot");
      attr(div0, "class", "svelte-121f4ox");
      attr(div1, "class", div1_class_value = /*expandable*/
      (ctx[3] ? "expandable" : "") + " " + /*open_*/
      (ctx[5] ? "open" : "") + " svelte-121f4ox");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, button);
      append_hydration(button, h5);
      if (if_block)
        if_block.m(h5, null);
      append_hydration(h5, t0);
      append_hydration(h5, span);
      append_hydration(span, t1);
      append_hydration(div1, t2);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[8]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*icon*/
        ctx2[1]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(h5, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (!current || dirty & /*title*/
      4)
        set_data(
          t1,
          /*title*/
          ctx2[2]
        );
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*expandable, open_*/
      40 && div1_class_value !== (div1_class_value = /*expandable*/
      (ctx2[3] ? "expandable" : "") + " " + /*open_*/
      (ctx2[5] ? "open" : "") + " svelte-121f4ox")) {
        attr(div1, "class", div1_class_value);
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
        detach(div1);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { icon = null } = $$props;
  let { title } = $$props;
  let { expandable = false } = $$props;
  let { open = false } = $$props;
  let { icon_color = "inherit" } = $$props;
  let open_;
  const click_handler = () => $$invalidate(0, open = !open);
  $$self.$$set = ($$props2) => {
    if ("icon" in $$props2)
      $$invalidate(1, icon = $$props2.icon);
    if ("title" in $$props2)
      $$invalidate(2, title = $$props2.title);
    if ("expandable" in $$props2)
      $$invalidate(3, expandable = $$props2.expandable);
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("icon_color" in $$props2)
      $$invalidate(4, icon_color = $$props2.icon_color);
    if ("$$scope" in $$props2)
      $$invalidate(6, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*expandable, open*/
    9) {
      $$invalidate(5, open_ = !expandable || open);
    }
  };
  return [
    open,
    icon,
    title,
    expandable,
    icon_color,
    open_,
    $$scope,
    slots,
    click_handler
  ];
}
class Card extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      icon: 1,
      title: 2,
      expandable: 3,
      open: 0,
      icon_color: 4
    });
  }
}
export {
  Card as C
};
