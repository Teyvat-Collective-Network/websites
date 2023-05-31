import { S as SvelteComponent, i as init, s as safe_not_equal, L as create_slot, v as binding_callbacks, K as bind, k as element, a as space, q as text, x as create_component, l as claim_element, m as children, c as claim_space, r as claim_text, h as detach, y as claim_component, J as src_url_equal, n as attr, b as insert_hydration, G as append_hydration, z as mount_component, H as listen, u as set_data, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, M as add_flush_callback, f as transition_in, t as transition_out, A as destroy_component, R as createEventDispatcher, p as set_style, I as run_all, o as onMount } from "../../chunks/index-c4baf36c.js";
import { M as Modal } from "../../chunks/index-1e14ffe7.js";
const Testimonial_svelte_svelte_type_style_lang = "";
function create_default_slot$1(ctx) {
  let div0;
  let img;
  let img_src_value;
  let img_alt_value;
  let t0;
  let span;
  let t1;
  let t2;
  let div1;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[10],
    null
  );
  return {
    c() {
      div0 = element("div");
      img = element("img");
      t0 = space();
      span = element("span");
      t1 = text(
        /*name*/
        ctx[2]
      );
      t2 = space();
      div1 = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { id: true, class: true });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
      t0 = claim_space(div0_nodes);
      span = claim_element(div0_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(
        span_nodes,
        /*name*/
        ctx[2]
      );
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t2 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      if (default_slot)
        default_slot.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*image*/
      ctx[1]))
        attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = /*name*/
      ctx[2] + " Icon");
      attr(img, "class", "svelte-y1qdeb");
      attr(span, "class", "svelte-y1qdeb");
      attr(div0, "id", "top");
      attr(div0, "class", "svelte-y1qdeb");
      attr(div1, "id", "bottom");
      attr(div1, "class", "svelte-y1qdeb");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      append_hydration(div0, img);
      append_hydration(div0, t0);
      append_hydration(div0, span);
      append_hydration(span, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div1, anchor);
      if (default_slot) {
        default_slot.m(div1, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & /*image*/
      2 && !src_url_equal(img.src, img_src_value = /*image*/
      ctx2[1])) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & /*name*/
      4 && img_alt_value !== (img_alt_value = /*name*/
      ctx2[2] + " Icon")) {
        attr(img, "alt", img_alt_value);
      }
      if (!current || dirty & /*name*/
      4)
        set_data(
          t1,
          /*name*/
          ctx2[2]
        );
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1024)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[10],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[10]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[10],
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
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div1);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let button;
  let img;
  let img_src_value;
  let img_alt_value;
  let t0;
  let div1;
  let span;
  let t1;
  let t2;
  let div0;
  let t3;
  let modal;
  let updating_open;
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
    ctx[10],
    null
  );
  function modal_open_binding(value) {
    ctx[8](value);
  }
  let modal_props = {
    background_color: "var(--background-1)",
    overlay_color: "rgb(var(--pure-rgb), 80%)",
    $$slots: { default: [create_default_slot$1] },
    $$scope: { ctx }
  };
  if (
    /*open*/
    ctx[0] !== void 0
  ) {
    modal_props.open = /*open*/
    ctx[0];
  }
  modal = new Modal({ props: modal_props });
  binding_callbacks.push(() => bind(modal, "open", modal_open_binding));
  modal.$on(
    "close",
    /*close_handler*/
    ctx[9]
  );
  return {
    c() {
      button = element("button");
      img = element("img");
      t0 = space();
      div1 = element("div");
      span = element("span");
      t1 = text(
        /*name*/
        ctx[2]
      );
      t2 = space();
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      t3 = space();
      create_component(modal.$$.fragment);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { id: true, class: true });
      var button_nodes = children(button);
      img = claim_element(button_nodes, "IMG", { src: true, alt: true, class: true });
      t0 = claim_space(button_nodes);
      div1 = claim_element(button_nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      span = claim_element(div1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(
        span_nodes,
        /*name*/
        ctx[2]
      );
      span_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      button_nodes.forEach(detach);
      t3 = claim_space(nodes);
      claim_component(modal.$$.fragment, nodes);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*image*/
      ctx[1]))
        attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = /*name*/
      ctx[2] + " Icon");
      attr(img, "class", "svelte-y1qdeb");
      attr(span, "class", "svelte-y1qdeb");
      attr(div0, "class", "svelte-y1qdeb");
      attr(div1, "id", "right");
      attr(div1, "class", "svelte-y1qdeb");
      attr(button, "id", "testimonial");
      attr(button, "class", "svelte-y1qdeb");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, img);
      append_hydration(button, t0);
      append_hydration(button, div1);
      append_hydration(div1, span);
      append_hydration(span, t1);
      append_hydration(div1, t2);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      ctx[7](button);
      insert_hydration(target, t3, anchor);
      mount_component(modal, target, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[6]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*image*/
      2 && !src_url_equal(img.src, img_src_value = /*image*/
      ctx2[1])) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & /*name*/
      4 && img_alt_value !== (img_alt_value = /*name*/
      ctx2[2] + " Icon")) {
        attr(img, "alt", img_alt_value);
      }
      if (!current || dirty & /*name*/
      4)
        set_data(
          t1,
          /*name*/
          ctx2[2]
        );
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1024)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[10],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[10]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[10],
              dirty,
              null
            ),
            null
          );
        }
      }
      const modal_changes = {};
      if (dirty & /*$$scope, name, image*/
      1030) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty & /*open*/
      1) {
        updating_open = true;
        modal_changes.open = /*open*/
        ctx2[0];
        add_flush_callback(() => updating_open = false);
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (default_slot)
        default_slot.d(detaching);
      ctx[7](null);
      if (detaching)
        detach(t3);
      destroy_component(modal, detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { image } = $$props;
  let { name } = $$props;
  let { open = false } = $$props;
  let element2;
  const dispatch = createEventDispatcher();
  const click_handler = () => ($$invalidate(0, open = true), dispatch("open"));
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(3, element2);
    });
  }
  function modal_open_binding(value) {
    open = value;
    $$invalidate(0, open);
  }
  const close_handler = () => dispatch("close");
  $$self.$$set = ($$props2) => {
    if ("image" in $$props2)
      $$invalidate(1, image = $$props2.image);
    if ("name" in $$props2)
      $$invalidate(2, name = $$props2.name);
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("$$scope" in $$props2)
      $$invalidate(10, $$scope = $$props2.$$scope);
  };
  return [
    open,
    image,
    name,
    element2,
    dispatch,
    slots,
    click_handler,
    button_binding,
    modal_open_binding,
    close_handler,
    $$scope
  ];
}
class Testimonial extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { image: 1, name: 2, open: 0 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot_4(ctx) {
  let t;
  return {
    c() {
      t = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.");
    },
    l(nodes) {
      t = claim_text(nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_3(ctx) {
  let t;
  return {
    c() {
      t = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.");
    },
    l(nodes) {
      t = claim_text(nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_2(ctx) {
  let t;
  return {
    c() {
      t = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.");
    },
    l(nodes) {
      t = claim_text(nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.");
    },
    l(nodes) {
      t = claim_text(nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.");
    },
    l(nodes) {
      t = claim_text(nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment(ctx) {
  let div6;
  let br;
  let div5;
  let div2;
  let div0;
  let p0;
  let t0;
  let div1;
  let p1;
  let t1;
  let h4;
  let t2;
  let div4;
  let div3;
  let testimonial0;
  let testimonial1;
  let testimonial2;
  let testimonial3;
  let testimonial4;
  let button0;
  let i0;
  let t3;
  let button1;
  let i1;
  let t4;
  let current;
  let mounted;
  let dispose;
  testimonial0 = new Testimonial({
    props: {
      image: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
      name: "Shenhe Mains 1",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  testimonial0.$on(
    "open",
    /*open_handler*/
    ctx[7]
  );
  testimonial1 = new Testimonial({
    props: {
      image: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
      name: "Shenhe Mains 2",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  testimonial1.$on(
    "open",
    /*open_handler_1*/
    ctx[8]
  );
  testimonial2 = new Testimonial({
    props: {
      image: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
      name: "Shenhe Mains 3",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  testimonial2.$on(
    "open",
    /*open_handler_2*/
    ctx[9]
  );
  testimonial3 = new Testimonial({
    props: {
      image: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
      name: "Shenhe Mains 4",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  testimonial3.$on(
    "open",
    /*open_handler_3*/
    ctx[10]
  );
  testimonial4 = new Testimonial({
    props: {
      image: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
      name: "Shenhe Mains 5",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  testimonial4.$on(
    "open",
    /*open_handler_4*/
    ctx[11]
  );
  return {
    c() {
      div6 = element("div");
      br = element("br");
      div5 = element("div");
      div2 = element("div");
      div0 = element("div");
      p0 = element("p");
      t0 = text("Welcome to the Teyvat Collective Network");
      div1 = element("div");
      p1 = element("p");
      t1 = text("The mission of the TCN is to unite all mains servers across Teyvat and provide support and promote collaboration between partners.");
      h4 = element("h4");
      t2 = text("Testimonials");
      div4 = element("div");
      div3 = element("div");
      create_component(testimonial0.$$.fragment);
      create_component(testimonial1.$$.fragment);
      create_component(testimonial2.$$.fragment);
      create_component(testimonial3.$$.fragment);
      create_component(testimonial4.$$.fragment);
      button0 = element("button");
      i0 = element("i");
      t3 = text("keyboard_arrow_left");
      button1 = element("button");
      i1 = element("i");
      t4 = text("keyboard_arrow_right");
      this.h();
    },
    l(nodes) {
      div6 = claim_element(nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      br = claim_element(div6_nodes, "BR", { class: true });
      div5 = claim_element(div6_nodes, "DIV", { id: true, class: true });
      var div5_nodes = children(div5);
      div2 = claim_element(div5_nodes, "DIV", { id: true, class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { id: true, class: true });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Welcome to the Teyvat Collective Network");
      p0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1 = claim_element(div2_nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      p1 = claim_element(div1_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t1 = claim_text(p1_nodes, "The mission of the TCN is to unite all mains servers across Teyvat and provide support and promote collaboration between partners.");
      p1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      h4 = claim_element(div5_nodes, "H4", { class: true });
      var h4_nodes = children(h4);
      t2 = claim_text(h4_nodes, "Testimonials");
      h4_nodes.forEach(detach);
      div4 = claim_element(div5_nodes, "DIV", { id: true, class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { id: true, class: true });
      var div3_nodes = children(div3);
      claim_component(testimonial0.$$.fragment, div3_nodes);
      claim_component(testimonial1.$$.fragment, div3_nodes);
      claim_component(testimonial2.$$.fragment, div3_nodes);
      claim_component(testimonial3.$$.fragment, div3_nodes);
      claim_component(testimonial4.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      button0 = claim_element(div4_nodes, "BUTTON", { class: true, style: true });
      var button0_nodes = children(button0);
      i0 = claim_element(button0_nodes, "I", { class: true });
      var i0_nodes = children(i0);
      t3 = claim_text(i0_nodes, "keyboard_arrow_left");
      i0_nodes.forEach(detach);
      button0_nodes.forEach(detach);
      button1 = claim_element(div4_nodes, "BUTTON", { class: true, style: true });
      var button1_nodes = children(button1);
      i1 = claim_element(button1_nodes, "I", { class: true });
      var i1_nodes = children(i1);
      t4 = claim_text(i1_nodes, "keyboard_arrow_right");
      i1_nodes.forEach(detach);
      button1_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(br, "class", "svelte-vxy5lc");
      attr(p0, "class", "svelte-vxy5lc");
      attr(div0, "id", "box-1");
      attr(div0, "class", "svelte-vxy5lc");
      attr(p1, "class", "svelte-vxy5lc");
      attr(div1, "id", "box-2");
      attr(div1, "class", "svelte-vxy5lc");
      attr(div2, "id", "box");
      attr(div2, "class", "svelte-vxy5lc");
      attr(h4, "class", "svelte-vxy5lc");
      attr(div3, "id", "scroller");
      attr(div3, "class", "svelte-vxy5lc");
      attr(i0, "class", "material-icons svelte-vxy5lc");
      attr(button0, "class", "scroller svelte-vxy5lc");
      set_style(button0, "left", "-20px");
      attr(i1, "class", "material-icons svelte-vxy5lc");
      attr(button1, "class", "scroller svelte-vxy5lc");
      set_style(button1, "right", "-20px");
      attr(div4, "id", "scroll-box");
      attr(div4, "class", "svelte-vxy5lc");
      attr(div5, "id", "main");
      attr(div5, "class", "svelte-vxy5lc");
      attr(div6, "class", "container svelte-vxy5lc");
    },
    m(target, anchor) {
      insert_hydration(target, div6, anchor);
      append_hydration(div6, br);
      append_hydration(div6, div5);
      append_hydration(div5, div2);
      append_hydration(div2, div0);
      append_hydration(div0, p0);
      append_hydration(p0, t0);
      append_hydration(div2, div1);
      append_hydration(div1, p1);
      append_hydration(p1, t1);
      append_hydration(div5, h4);
      append_hydration(h4, t2);
      append_hydration(div5, div4);
      append_hydration(div4, div3);
      mount_component(testimonial0, div3, null);
      mount_component(testimonial1, div3, null);
      mount_component(testimonial2, div3, null);
      mount_component(testimonial3, div3, null);
      mount_component(testimonial4, div3, null);
      ctx[12](div3);
      append_hydration(div4, button0);
      append_hydration(button0, i0);
      append_hydration(i0, t3);
      append_hydration(div4, button1);
      append_hydration(button1, i1);
      append_hydration(i1, t4);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div3,
            "scroll",
            /*scroll_handler*/
            ctx[13]
          ),
          listen(
            button0,
            "click",
            /*scroll_left*/
            ctx[3]
          ),
          listen(
            button1,
            "click",
            /*scroll_right*/
            ctx[4]
          ),
          listen(
            div4,
            "mouseover",
            /*pause*/
            ctx[5]
          ),
          listen(
            div4,
            "mouseout",
            /*unpause*/
            ctx[6]
          ),
          listen(
            div4,
            "focus",
            /*pause*/
            ctx[5]
          ),
          listen(
            div4,
            "blur",
            /*unpause*/
            ctx[6]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const testimonial0_changes = {};
      if (dirty & /*$$scope*/
      131072) {
        testimonial0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      testimonial0.$set(testimonial0_changes);
      const testimonial1_changes = {};
      if (dirty & /*$$scope*/
      131072) {
        testimonial1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      testimonial1.$set(testimonial1_changes);
      const testimonial2_changes = {};
      if (dirty & /*$$scope*/
      131072) {
        testimonial2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      testimonial2.$set(testimonial2_changes);
      const testimonial3_changes = {};
      if (dirty & /*$$scope*/
      131072) {
        testimonial3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      testimonial3.$set(testimonial3_changes);
      const testimonial4_changes = {};
      if (dirty & /*$$scope*/
      131072) {
        testimonial4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      testimonial4.$set(testimonial4_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(testimonial0.$$.fragment, local);
      transition_in(testimonial1.$$.fragment, local);
      transition_in(testimonial2.$$.fragment, local);
      transition_in(testimonial3.$$.fragment, local);
      transition_in(testimonial4.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(testimonial0.$$.fragment, local);
      transition_out(testimonial1.$$.fragment, local);
      transition_out(testimonial2.$$.fragment, local);
      transition_out(testimonial3.$$.fragment, local);
      transition_out(testimonial4.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div6);
      destroy_component(testimonial0);
      destroy_component(testimonial1);
      destroy_component(testimonial2);
      destroy_component(testimonial3);
      destroy_component(testimonial4);
      ctx[12](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
const max_frames = 400;
function instance($$self, $$props, $$invalidate) {
  let scroller;
  let stop = false;
  let paused = false;
  let frames = max_frames;
  let x = 0;
  function scroll() {
    if (!paused) {
      frames--;
      if (frames === 0) {
        if (scroller.scrollWidth <= scroller.scrollLeft + scroller.clientWidth)
          scroller.scrollTo({ left: 0, behavior: "smooth" });
        else
          scroll_right(false);
        frames = max_frames;
      }
    }
    if (!stop)
      requestAnimationFrame(scroll);
  }
  onMount(() => {
    scroller == null ? void 0 : scroller.scrollTo({ left: 0 });
    scroll();
    document.querySelectorAll("#scroller > button").forEach((e) => {
      e.onclick = (ev) => {
        scroller == null ? void 0 : scroller.scrollTo({
          left: e.offsetLeft - scroller.clientWidth / 2 + 260,
          behavior: "smooth"
        });
        $$invalidate(1, stop = true);
      };
    });
  });
  function scroll_left(do_stop = true) {
    scroller == null ? void 0 : scroller.scrollTo({
      left: x - (x % 520 || 520),
      behavior: "smooth"
    });
    $$invalidate(1, stop || (stop = do_stop));
  }
  function scroll_right(do_stop = true) {
    scroller == null ? void 0 : scroller.scrollTo({
      left: x + (((520 - x) % 520 + 520) % 520 || 520),
      behavior: "smooth"
    });
    $$invalidate(1, stop || (stop = do_stop));
  }
  function pause() {
    frames = max_frames;
    paused = true;
  }
  function unpause() {
    paused = false;
  }
  const open_handler = () => $$invalidate(1, stop = true);
  const open_handler_1 = () => $$invalidate(1, stop = true);
  const open_handler_2 = () => $$invalidate(1, stop = true);
  const open_handler_3 = () => $$invalidate(1, stop = true);
  const open_handler_4 = () => $$invalidate(1, stop = true);
  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      scroller = $$value;
      $$invalidate(0, scroller);
    });
  }
  const scroll_handler = (e) => $$invalidate(2, x = e.target.scrollLeft);
  return [
    scroller,
    stop,
    x,
    scroll_left,
    scroll_right,
    pause,
    unpause,
    open_handler,
    open_handler_1,
    open_handler_2,
    open_handler_3,
    open_handler_4,
    div3_binding,
    scroll_handler
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
