import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, l as claim_element, m as children, c as claim_space, h as detach, n as attr, J as src_url_equal, p as set_style, F as null_to_empty, b as insert_hydration, G as append_hydration, H as listen, C as noop, I as run_all } from "./index-c4baf36c.js";
const Image_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div1;
  let img0;
  let img0_class_value;
  let img0_src_value;
  let t;
  let div0;
  let img1;
  let img1_src_value;
  let img1_class_value;
  let div0_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      img0 = element("img");
      t = space();
      div0 = element("div");
      img1 = element("img");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      img0 = claim_element(div1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true,
        style: true
      });
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      img1 = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        class: true,
        style: true
      });
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img0, "class", img0_class_value = "base " + /*classes*/
      ctx[6] + " svelte-15xczsp");
      if (!src_url_equal(img0.src, img0_src_value = /*src*/
      ctx[1]))
        attr(img0, "src", img0_src_value);
      attr(
        img0,
        "alt",
        /*alt*/
        ctx[2]
      );
      attr(
        img0,
        "width",
        /*width*/
        ctx[3]
      );
      attr(
        img0,
        "height",
        /*height*/
        ctx[4]
      );
      set_style(img0, "max-width", "100%");
      if (!src_url_equal(img1.src, img1_src_value = /*src*/
      ctx[1]))
        attr(img1, "src", img1_src_value);
      attr(
        img1,
        "alt",
        /*alt*/
        ctx[2]
      );
      attr(img1, "class", img1_class_value = null_to_empty(
        /*transparent*/
        ctx[5] ? "transparent" : ""
      ) + " svelte-15xczsp");
      set_style(img1, "max-width", "75%");
      set_style(img1, "max-height", "75%");
      attr(div0, "class", div0_class_value = "lightbox " + /*open*/
      (ctx[0] ? "open" : "") + " svelte-15xczsp");
      attr(div1, "class", "box svelte-15xczsp");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, img0);
      append_hydration(div1, t);
      append_hydration(div1, div0);
      append_hydration(div0, img1);
      if (!mounted) {
        dispose = [
          listen(
            window,
            "keydown",
            /*keydown_handler*/
            ctx[7]
          ),
          listen(
            img0,
            "click",
            /*click_handler*/
            ctx[8]
          ),
          listen(
            img0,
            "keydown",
            /*keydown_handler_1*/
            ctx[9]
          ),
          listen(
            div0,
            "click",
            /*click_handler_1*/
            ctx[10]
          ),
          listen(
            div0,
            "keydown",
            /*keydown_handler_2*/
            ctx[11]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*classes*/
      64 && img0_class_value !== (img0_class_value = "base " + /*classes*/
      ctx2[6] + " svelte-15xczsp")) {
        attr(img0, "class", img0_class_value);
      }
      if (dirty & /*src*/
      2 && !src_url_equal(img0.src, img0_src_value = /*src*/
      ctx2[1])) {
        attr(img0, "src", img0_src_value);
      }
      if (dirty & /*alt*/
      4) {
        attr(
          img0,
          "alt",
          /*alt*/
          ctx2[2]
        );
      }
      if (dirty & /*width*/
      8) {
        attr(
          img0,
          "width",
          /*width*/
          ctx2[3]
        );
      }
      if (dirty & /*height*/
      16) {
        attr(
          img0,
          "height",
          /*height*/
          ctx2[4]
        );
      }
      if (dirty & /*src*/
      2 && !src_url_equal(img1.src, img1_src_value = /*src*/
      ctx2[1])) {
        attr(img1, "src", img1_src_value);
      }
      if (dirty & /*alt*/
      4) {
        attr(
          img1,
          "alt",
          /*alt*/
          ctx2[2]
        );
      }
      if (dirty & /*transparent*/
      32 && img1_class_value !== (img1_class_value = null_to_empty(
        /*transparent*/
        ctx2[5] ? "transparent" : ""
      ) + " svelte-15xczsp")) {
        attr(img1, "class", img1_class_value);
      }
      if (dirty & /*open*/
      1 && div0_class_value !== (div0_class_value = "lightbox " + /*open*/
      (ctx2[0] ? "open" : "") + " svelte-15xczsp")) {
        attr(div0, "class", div0_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { src } = $$props;
  let { alt } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { transparent = false } = $$props;
  let { open = false } = $$props;
  let { classes = "" } = $$props;
  const keydown_handler = (e) => e.key === "Escape" && $$invalidate(0, open = false);
  const click_handler = () => $$invalidate(0, open = true);
  const keydown_handler_1 = () => $$invalidate(0, open = true);
  const click_handler_1 = () => $$invalidate(0, open = false);
  const keydown_handler_2 = () => $$invalidate(0, open = false);
  $$self.$$set = ($$props2) => {
    if ("src" in $$props2)
      $$invalidate(1, src = $$props2.src);
    if ("alt" in $$props2)
      $$invalidate(2, alt = $$props2.alt);
    if ("width" in $$props2)
      $$invalidate(3, width = $$props2.width);
    if ("height" in $$props2)
      $$invalidate(4, height = $$props2.height);
    if ("transparent" in $$props2)
      $$invalidate(5, transparent = $$props2.transparent);
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("classes" in $$props2)
      $$invalidate(6, classes = $$props2.classes);
  };
  return [
    open,
    src,
    alt,
    width,
    height,
    transparent,
    classes,
    keydown_handler,
    click_handler,
    keydown_handler_1,
    click_handler_1,
    keydown_handler_2
  ];
}
class Image extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      src: 1,
      alt: 2,
      width: 3,
      height: 4,
      transparent: 5,
      open: 0,
      classes: 6
    });
  }
}
export {
  Image as I
};
