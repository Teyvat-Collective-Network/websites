import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, D as svg_element, a as space, q as text, l as claim_element, m as children, E as claim_svg_element, h as detach, c as claim_space, r as claim_text, n as attr, p as set_style, b as insert_hydration, G as append_hydration, u as set_data, C as noop, L as create_slot, H as listen, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, f as transition_in, t as transition_out, I as run_all, R as createEventDispatcher, T as assign, U as set_attributes, V as toggle_class, W as set_input_value, X as get_spread_update, o as onMount, Y as exclude_internal_props, v as binding_callbacks } from "./index-c4baf36c.js";
const Collapsable_svelte_svelte_type_style_lang = "";
const LoadingSpinner_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div;
  let svg;
  let polygon0;
  let polygon1;
  let t0;
  let span;
  let t1_value = (typeof /*text*/
  ctx[5] === "string" ? (
    /*text*/
    ctx[5]
  ) : (
    /*text*/
    ctx[5][
      /*index*/
      ctx[6]
    ]
  )) + "";
  let t1;
  return {
    c() {
      div = element("div");
      svg = svg_element("svg");
      polygon0 = svg_element("polygon");
      polygon1 = svg_element("polygon");
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      svg = claim_svg_element(div_nodes, "svg", { viewBox: true, style: true });
      var svg_nodes = children(svg);
      polygon0 = claim_svg_element(svg_nodes, "polygon", {
        id: true,
        points: true,
        stroke: true,
        "stroke-width": true,
        fill: true,
        class: true
      });
      children(polygon0).forEach(detach);
      polygon1 = claim_svg_element(svg_nodes, "polygon", {
        id: true,
        points: true,
        stroke: true,
        "stroke-width": true,
        fill: true,
        class: true
      });
      children(polygon1).forEach(detach);
      svg_nodes.forEach(detach);
      t0 = claim_space(div_nodes);
      span = claim_element(div_nodes, "SPAN", { style: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(polygon0, "id", "small");
      attr(polygon0, "points", "50,86 81.2,32 18.6,32");
      attr(
        polygon0,
        "stroke",
        /*background*/
        ctx[1]
      );
      attr(
        polygon0,
        "stroke-width",
        /*small_stroke*/
        ctx[2]
      );
      attr(polygon0, "fill", "none");
      attr(polygon0, "class", "svelte-1fwfwly");
      attr(polygon1, "id", "large");
      attr(polygon1, "points", "50,95 89,27.5 11,27.5");
      attr(
        polygon1,
        "stroke",
        /*foreground*/
        ctx[0]
      );
      attr(
        polygon1,
        "stroke-width",
        /*large_stroke*/
        ctx[3]
      );
      attr(polygon1, "fill", "none");
      attr(polygon1, "class", "svelte-1fwfwly");
      attr(svg, "viewBox", "0 0 100 100");
      set_style(
        svg,
        "width",
        /*size*/
        ctx[4] + "px"
      );
      set_style(
        svg,
        "height",
        /*size*/
        ctx[4] + "px"
      );
      set_style(
        span,
        "font-size",
        /*size*/
        ctx[4] * 0.8 + "px"
      );
      set_style(
        span,
        "padding-left",
        /*size*/
        ctx[4] * 0.2 + "px"
      );
      attr(div, "class", "svelte-1fwfwly");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, svg);
      append_hydration(svg, polygon0);
      append_hydration(svg, polygon1);
      append_hydration(div, t0);
      append_hydration(div, span);
      append_hydration(span, t1);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*background*/
      2) {
        attr(
          polygon0,
          "stroke",
          /*background*/
          ctx2[1]
        );
      }
      if (dirty & /*small_stroke*/
      4) {
        attr(
          polygon0,
          "stroke-width",
          /*small_stroke*/
          ctx2[2]
        );
      }
      if (dirty & /*foreground*/
      1) {
        attr(
          polygon1,
          "stroke",
          /*foreground*/
          ctx2[0]
        );
      }
      if (dirty & /*large_stroke*/
      8) {
        attr(
          polygon1,
          "stroke-width",
          /*large_stroke*/
          ctx2[3]
        );
      }
      if (dirty & /*size*/
      16) {
        set_style(
          svg,
          "width",
          /*size*/
          ctx2[4] + "px"
        );
      }
      if (dirty & /*size*/
      16) {
        set_style(
          svg,
          "height",
          /*size*/
          ctx2[4] + "px"
        );
      }
      if (dirty & /*text, index*/
      96 && t1_value !== (t1_value = (typeof /*text*/
      ctx2[5] === "string" ? (
        /*text*/
        ctx2[5]
      ) : (
        /*text*/
        ctx2[5][
          /*index*/
          ctx2[6]
        ]
      )) + ""))
        set_data(t1, t1_value);
      if (dirty & /*size*/
      16) {
        set_style(
          span,
          "font-size",
          /*size*/
          ctx2[4] * 0.8 + "px"
        );
      }
      if (dirty & /*size*/
      16) {
        set_style(
          span,
          "padding-left",
          /*size*/
          ctx2[4] * 0.2 + "px"
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { foreground = "#009688" } = $$props;
  let { background = "#00968860" } = $$props;
  let { small_stroke = 5 } = $$props;
  let { large_stroke = 4 } = $$props;
  let { size = 100 } = $$props;
  let { text: text2 = ["Loading", "Loading.", "Loading..", "Loading..."] } = $$props;
  const length = () => typeof text2 === "string" ? 1 : text2.length;
  let index = 0;
  function advance() {
    setTimeout(
      () => {
        $$invalidate(6, index = (index + 1) % length());
        advance();
      },
      2500 / length()
    );
  }
  advance();
  $$self.$$set = ($$props2) => {
    if ("foreground" in $$props2)
      $$invalidate(0, foreground = $$props2.foreground);
    if ("background" in $$props2)
      $$invalidate(1, background = $$props2.background);
    if ("small_stroke" in $$props2)
      $$invalidate(2, small_stroke = $$props2.small_stroke);
    if ("large_stroke" in $$props2)
      $$invalidate(3, large_stroke = $$props2.large_stroke);
    if ("size" in $$props2)
      $$invalidate(4, size = $$props2.size);
    if ("text" in $$props2)
      $$invalidate(5, text2 = $$props2.text);
  };
  return [foreground, background, small_stroke, large_stroke, size, text2, index];
}
let LoadingSpinner$1 = class LoadingSpinner extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      foreground: 0,
      background: 1,
      small_stroke: 2,
      large_stroke: 3,
      size: 4,
      text: 5
    });
  }
};
const Modal_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div0;
  let div0_class_value;
  let t;
  let div1;
  let div1_class_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  return {
    c() {
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      t = space();
      div1 = element("div");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true, style: true });
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true, style: true });
      children(div1).forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", div0_class_value = "modal " + /*open*/
      (ctx[0] ? "" : "closed") + " svelte-ov2ez9");
      set_style(
        div0,
        "background-color",
        /*background_color*/
        ctx[1]
      );
      attr(div1, "class", div1_class_value = "overlay " + /*open*/
      (ctx[0] ? "" : "closed") + " svelte-ov2ez9");
      set_style(
        div1,
        "background-color",
        /*overlay_color*/
        ctx[2]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      insert_hydration(target, t, anchor);
      insert_hydration(target, div1, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            window,
            "keydown",
            /*keydown_handler*/
            ctx[6]
          ),
          listen(
            div1,
            "click",
            /*close*/
            ctx[3]
          ),
          listen(
            div1,
            "keydown",
            /*close*/
            ctx[3]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*open*/
      1 && div0_class_value !== (div0_class_value = "modal " + /*open*/
      (ctx2[0] ? "" : "closed") + " svelte-ov2ez9")) {
        attr(div0, "class", div0_class_value);
      }
      if (!current || dirty & /*background_color*/
      2) {
        set_style(
          div0,
          "background-color",
          /*background_color*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*open*/
      1 && div1_class_value !== (div1_class_value = "overlay " + /*open*/
      (ctx2[0] ? "" : "closed") + " svelte-ov2ez9")) {
        attr(div1, "class", div1_class_value);
      }
      if (!current || dirty & /*overlay_color*/
      4) {
        set_style(
          div1,
          "background-color",
          /*overlay_color*/
          ctx2[2]
        );
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
        detach(div0);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { open = false } = $$props;
  let { background_color = "white" } = $$props;
  let { overlay_color = "#00000077" } = $$props;
  const dispatch = createEventDispatcher();
  function close() {
    $$invalidate(0, open = false);
    dispatch("close");
  }
  const keydown_handler = (e) => e.key === "Escape" && close();
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("background_color" in $$props2)
      $$invalidate(1, background_color = $$props2.background_color);
    if ("overlay_color" in $$props2)
      $$invalidate(2, overlay_color = $$props2.overlay_color);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [open, background_color, overlay_color, close, $$scope, slots, keydown_handler];
}
let Modal$1 = class Modal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      open: 0,
      background_color: 1,
      overlay_color: 2
    });
  }
};
const Navbar_svelte_svelte_type_style_lang = "";
const SaveChanges_svelte_svelte_type_style_lang = "";
const Textarea_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let textarea;
  let mounted;
  let dispose;
  let textarea_levels = [
    /*$$props*/
    ctx[4]
  ];
  let textarea_data = {};
  for (let i = 0; i < textarea_levels.length; i += 1) {
    textarea_data = assign(textarea_data, textarea_levels[i]);
  }
  return {
    c() {
      textarea = element("textarea");
      this.h();
    },
    l(nodes) {
      textarea = claim_element(nodes, "TEXTAREA", {});
      children(textarea).forEach(detach);
      this.h();
    },
    h() {
      set_attributes(textarea, textarea_data);
      toggle_class(textarea, "svelte-xm9m2s", true);
    },
    m(target, anchor) {
      insert_hydration(target, textarea, anchor);
      if (textarea.autofocus)
        textarea.focus();
      set_input_value(
        textarea,
        /*value*/
        ctx[0]
      );
      ctx[8](textarea);
      if (!mounted) {
        dispose = [
          listen(
            textarea,
            "input",
            /*textarea_input_handler*/
            ctx[6]
          ),
          listen(
            textarea,
            "input",
            /*update*/
            ctx[1]
          ),
          listen(
            textarea,
            "keydown",
            /*keydown_handler*/
            ctx[7]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(textarea, textarea_data = get_spread_update(textarea_levels, [dirty & /*$$props*/
      16 && /*$$props*/
      ctx2[4]]));
      if (dirty & /*value*/
      1) {
        set_input_value(
          textarea,
          /*value*/
          ctx2[0]
        );
      }
      toggle_class(textarea, "svelte-xm9m2s", true);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(textarea);
      ctx[8](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { min_height = "0px" } = $$props;
  const dispatch = createEventDispatcher();
  function update() {
    if (!element2)
      return;
    $$invalidate(2, element2.style.height = "0", element2);
    $$invalidate(2, element2.style.height = `calc(max(${min_height}, ${element2.scrollHeight}px))`, element2);
    dispatch("input");
  }
  let element2;
  let { value = "" } = $$props;
  onMount(() => update.bind(element2)());
  function textarea_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  const keydown_handler = (e) => dispatch("keydown", e);
  function textarea_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(2, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("min_height" in $$new_props)
      $$invalidate(5, min_height = $$new_props.min_height);
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
  };
  $$props = exclude_internal_props($$props);
  return [
    value,
    update,
    element2,
    dispatch,
    $$props,
    min_height,
    textarea_input_handler,
    keydown_handler,
    textarea_binding
  ];
}
let Textarea$1 = class Textarea extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { min_height: 5, update: 1, value: 0 });
  }
  get update() {
    return this.$$.ctx[1];
  }
};
const LoadingSpinner2 = LoadingSpinner$1;
const Modal2 = Modal$1;
const Textarea2 = Textarea$1;
export {
  LoadingSpinner2 as L,
  Modal2 as M,
  Textarea2 as T
};
