import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, f as transition_in, g as group_outros, d as check_outros, t as transition_out, a2 as destroy_each, h as detach, k as element, a as space, l as claim_element, m as children, c as claim_space, n as attr, G as append_hydration, q as text, r as claim_text, u as set_data, L as create_slot, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes } from "./index-c4baf36c.js";
const Navigation_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_if_block_2(ctx) {
  let a;
  let t0;
  let t1_value = (
    /*last*/
    ctx[0][1] + ""
  );
  let t1;
  let a_href_value;
  return {
    c() {
      a = element("a");
      t0 = text("< ");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, "< ");
      t1 = claim_text(a_nodes, t1_value);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = /*last*/
      ctx[0][0]);
      attr(a, "class", "svelte-2bp5xr");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t0);
      append_hydration(a, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*last*/
      1 && t1_value !== (t1_value = /*last*/
      ctx2[0][1] + ""))
        set_data(t1, t1_value);
      if (dirty & /*last*/
      1 && a_href_value !== (a_href_value = /*last*/
      ctx2[0][0])) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_if_block_1(ctx) {
  let a;
  let t0_value = (
    /*next*/
    ctx[1][1] + ""
  );
  let t0;
  let t1;
  let a_href_value;
  return {
    c() {
      a = element("a");
      t0 = text(t0_value);
      t1 = text(" >");
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      t1 = claim_text(a_nodes, " >");
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = /*next*/
      ctx[1][0]);
      attr(a, "class", "svelte-2bp5xr");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t0);
      append_hydration(a, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*next*/
      2 && t0_value !== (t0_value = /*next*/
      ctx2[1][1] + ""))
        set_data(t0, t0_value);
      if (dirty & /*next*/
      2 && a_href_value !== (a_href_value = /*next*/
      ctx2[1][0])) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_if_block(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              null
            ),
            null
          );
        }
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_each_block(ctx) {
  let nav;
  let div0;
  let t0;
  let div1;
  let t1;
  let if_block2_anchor;
  let current;
  let if_block0 = (
    /*last*/
    ctx[0] && create_if_block_2(ctx)
  );
  let if_block1 = (
    /*next*/
    ctx[1] && create_if_block_1(ctx)
  );
  let if_block2 = (
    /*x*/
    ctx[4] === 0 && create_if_block(ctx)
  );
  return {
    c() {
      nav = element("nav");
      div0 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      div1 = element("div");
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
      this.h();
    },
    l(nodes) {
      nav = claim_element(nodes, "NAV", { class: true });
      var nav_nodes = children(nav);
      div0 = claim_element(nav_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (if_block0)
        if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(nav_nodes);
      div1 = claim_element(nav_nodes, "DIV", {});
      var div1_nodes = children(div1);
      if (if_block1)
        if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      if_block2_anchor = empty();
      this.h();
    },
    h() {
      attr(nav, "class", "svelte-2bp5xr");
    },
    m(target, anchor) {
      insert_hydration(target, nav, anchor);
      append_hydration(nav, div0);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration(nav, t0);
      append_hydration(nav, div1);
      if (if_block1)
        if_block1.m(div1, null);
      insert_hydration(target, t1, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, if_block2_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*last*/
        ctx2[0]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          if_block0.m(div0, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*next*/
        ctx2[1]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*x*/
        ctx2[4] === 0
      )
        if_block2.p(ctx2, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(nav);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t1);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(if_block2_anchor);
    }
  };
}
function create_fragment(ctx) {
  let each_1_anchor;
  let current;
  let each_value = [0, 1];
  let each_blocks = [];
  for (let i = 0; i < 2; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < 2; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < 2; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < 2; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$$scope, next, last*/
      7) {
        each_value = [0, 1];
        let i;
        for (i = 0; i < 2; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = 2; i < 2; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < 2; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < 2; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { last = null } = $$props;
  let { next = null } = $$props;
  $$self.$$set = ($$props2) => {
    if ("last" in $$props2)
      $$invalidate(0, last = $$props2.last);
    if ("next" in $$props2)
      $$invalidate(1, next = $$props2.next);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [last, next, $$scope, slots];
}
class Navigation extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { last: 0, next: 1 });
  }
}
export {
  Navigation as N
};
