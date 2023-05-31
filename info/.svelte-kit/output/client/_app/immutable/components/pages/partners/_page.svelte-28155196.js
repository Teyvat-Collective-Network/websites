import { S as SvelteComponent, i as init, s as safe_not_equal, L as create_slot, k as element, a as space, q as text, l as claim_element, m as children, c as claim_space, r as claim_text, h as detach, J as src_url_equal, n as attr, b as insert_hydration, G as append_hydration, u as set_data, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, f as transition_in, t as transition_out, e as empty, W as set_input_value, H as listen, d as check_outros, a2 as destroy_each, x as create_component, y as claim_component, F as null_to_empty, z as mount_component, A as destroy_component, g as group_outros } from "../../../chunks/index-c4baf36c.js";
const Partner_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div1;
  let div0;
  let img;
  let img_src_value;
  let img_alt_value;
  let t0;
  let b;
  let t1;
  let t2;
  let t3;
  let a;
  let t4;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    null
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      b = element("b");
      t1 = text(
        /*name*/
        ctx[0]
      );
      t2 = space();
      if (default_slot)
        default_slot.c();
      t3 = space();
      a = element("a");
      t4 = text(
        /*button*/
        ctx[3]
      );
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { id: true, class: true });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      t0 = claim_space(div0_nodes);
      b = claim_element(div0_nodes, "B", { class: true });
      var b_nodes = children(b);
      t1 = claim_text(
        b_nodes,
        /*name*/
        ctx[0]
      );
      b_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      a = claim_element(div1_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a_nodes = children(a);
      t4 = claim_text(
        a_nodes,
        /*button*/
        ctx[3]
      );
      a_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*image*/
      ctx[2]))
        attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = /*name*/
      ctx[0] + " Icon");
      attr(img, "width", "150px");
      attr(img, "height", "150px");
      attr(img, "class", "svelte-1d7k0k6");
      attr(b, "class", "svelte-1d7k0k6");
      attr(div0, "id", "top");
      attr(div0, "class", "svelte-1d7k0k6");
      attr(
        a,
        "href",
        /*link*/
        ctx[1]
      );
      attr(a, "target", "_blank");
      attr(a, "rel", "noreferrer");
      attr(a, "class", "button svelte-1d7k0k6");
      attr(div1, "class", "outer svelte-1d7k0k6");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, img);
      append_hydration(div0, t0);
      append_hydration(div0, b);
      append_hydration(b, t1);
      append_hydration(div0, t2);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      append_hydration(div1, t3);
      append_hydration(div1, a);
      append_hydration(a, t4);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*image*/
      4 && !src_url_equal(img.src, img_src_value = /*image*/
      ctx2[2])) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & /*name*/
      1 && img_alt_value !== (img_alt_value = /*name*/
      ctx2[0] + " Icon")) {
        attr(img, "alt", img_alt_value);
      }
      if (!current || dirty & /*name*/
      1)
        set_data(
          t1,
          /*name*/
          ctx2[0]
        );
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*button*/
      8)
        set_data(
          t4,
          /*button*/
          ctx2[3]
        );
      if (!current || dirty & /*link*/
      2) {
        attr(
          a,
          "href",
          /*link*/
          ctx2[1]
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
        detach(div1);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { name } = $$props;
  let { code = "" } = $$props;
  let { link = `https://discord.gg/${code}` } = $$props;
  let { image } = $$props;
  let { button = "Join" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
    if ("code" in $$props2)
      $$invalidate(4, code = $$props2.code);
    if ("link" in $$props2)
      $$invalidate(1, link = $$props2.link);
    if ("image" in $$props2)
      $$invalidate(2, image = $$props2.image);
    if ("button" in $$props2)
      $$invalidate(3, button = $$props2.button);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  return [name, link, image, button, code, $$scope, slots];
}
class Partner extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      name: 0,
      code: 4,
      link: 1,
      image: 2,
      button: 3
    });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i].character;
  child_ctx[4] = list[i].name;
  child_ctx[5] = list[i].invite;
  child_ctx[6] = list[i].icon;
  child_ctx[7] = list[i].description;
  return child_ctx;
}
function create_if_block(ctx) {
  let div2;
  let div0;
  let p0;
  let t0;
  let t1_value = (
    /*data*/
    ctx[0].partners.length + ""
  );
  let t1;
  let t2;
  let div1;
  let p1;
  let t3;
  let a0;
  let t4;
  let div4;
  let img;
  let img_src_value;
  let div3;
  let h3;
  let t5;
  let p2;
  let t6;
  let a1;
  let t7;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      p0 = element("p");
      t0 = text("The TCN is a network of ");
      t1 = text(t1_value);
      t2 = text(" high-quality Genshin Impact Character Mains-style Discord servers that focus on creating fan communities.");
      div1 = element("div");
      p1 = element("p");
      t3 = text("Do you own a Discord server dedicated to a playable Genshin Impact character and want to join the TCN? Apply here!");
      a0 = element("a");
      t4 = text("Apply To Join");
      div4 = element("div");
      img = element("img");
      div3 = element("div");
      h3 = element("h3");
      t5 = text("Genshin Wizard");
      p2 = element("p");
      t6 = text("The TCN is partnered with Genshin Wizard, a multi-purpose Genshin Impact utility bot. Check out their website below!");
      a1 = element("a");
      t7 = text("Website");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { id: true, class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { id: true, class: true });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "The TCN is a network of ");
      t1 = claim_text(p0_nodes, t1_value);
      t2 = claim_text(p0_nodes, " high-quality Genshin Impact Character Mains-style Discord servers that focus on creating fan communities.");
      p0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1 = claim_element(div2_nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, "Do you own a Discord server dedicated to a playable Genshin Impact character and want to join the TCN? Apply here!");
      p1_nodes.forEach(detach);
      a0 = claim_element(div1_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "Apply To Join");
      a0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      img = claim_element(div4_nodes, "IMG", { src: true, alt: true });
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h3 = claim_element(div3_nodes, "H3", {});
      var h3_nodes = children(h3);
      t5 = claim_text(h3_nodes, "Genshin Wizard");
      h3_nodes.forEach(detach);
      p2 = claim_element(div3_nodes, "P", {});
      var p2_nodes = children(p2);
      t6 = claim_text(p2_nodes, "The TCN is partnered with Genshin Wizard, a multi-purpose Genshin Impact utility bot. Check out their website below!");
      p2_nodes.forEach(detach);
      a1 = claim_element(div3_nodes, "A", { class: true, href: true });
      var a1_nodes = children(a1);
      t7 = claim_text(a1_nodes, "Website");
      a1_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "id", "box-1");
      attr(div0, "class", "svelte-1wgjvfu");
      attr(a0, "class", "button");
      attr(a0, "href", "/join");
      attr(div1, "id", "box-2");
      attr(div1, "class", "svelte-1wgjvfu");
      attr(div2, "id", "box");
      attr(div2, "class", "svelte-1wgjvfu");
      if (!src_url_equal(img.src, img_src_value = "https://genshinwizard.com/wp-content/uploads/2022/09/cropped-genshinwizard_logo-192x192.png"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Genshin Wizard Icon");
      attr(a1, "class", "button");
      attr(a1, "href", "https://genshinwizard.com");
      attr(div3, "class", "svelte-1wgjvfu");
      attr(div4, "class", "external wide svelte-1wgjvfu");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, p0);
      append_hydration(p0, t0);
      append_hydration(p0, t1);
      append_hydration(p0, t2);
      append_hydration(div2, div1);
      append_hydration(div1, p1);
      append_hydration(p1, t3);
      append_hydration(div1, a0);
      append_hydration(a0, t4);
      insert_hydration(target, div4, anchor);
      append_hydration(div4, img);
      append_hydration(div4, div3);
      append_hydration(div3, h3);
      append_hydration(h3, t5);
      append_hydration(div3, p2);
      append_hydration(p2, t6);
      append_hydration(div3, a1);
      append_hydration(a1, t7);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t1_value !== (t1_value = /*data*/
      ctx2[0].partners.length + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (detaching)
        detach(div4);
    }
  };
}
function create_default_slot(ctx) {
  let p;
  let raw_value = (
    /*description*/
    ctx[7] + ""
  );
  return {
    c() {
      p = element("p");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && raw_value !== (raw_value = /*description*/
      ctx2[7] + ""))
        p.innerHTML = raw_value;
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_each_block(ctx) {
  let div;
  let partner;
  let div_class_value;
  let current;
  partner = new Partner({
    props: {
      name: (
        /*name*/
        ctx[4]
      ),
      code: (
        /*invite*/
        ctx[5]
      ),
      image: (
        /*icon*/
        ctx[6]
      ),
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(partner.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(partner.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = null_to_empty(fuzzy(
        /*name*/
        ctx[4],
        /*query*/
        ctx[1]
      ) || fuzzy(
        /*character*/
        ctx[3],
        /*query*/
        ctx[1]
      ) ? "" : "hidden") + " svelte-1wgjvfu");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(partner, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const partner_changes = {};
      if (dirty & /*data*/
      1)
        partner_changes.name = /*name*/
        ctx2[4];
      if (dirty & /*data*/
      1)
        partner_changes.code = /*invite*/
        ctx2[5];
      if (dirty & /*data*/
      1)
        partner_changes.image = /*icon*/
        ctx2[6];
      if (dirty & /*$$scope, data*/
      1025) {
        partner_changes.$$scope = { dirty, ctx: ctx2 };
      }
      partner.$set(partner_changes);
      if (!current || dirty & /*data, query*/
      3 && div_class_value !== (div_class_value = null_to_empty(fuzzy(
        /*name*/
        ctx2[4],
        /*query*/
        ctx2[1]
      ) || fuzzy(
        /*character*/
        ctx2[3],
        /*query*/
        ctx2[1]
      ) ? "" : "hidden") + " svelte-1wgjvfu")) {
        attr(div, "class", div_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(partner.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(partner.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(partner);
    }
  };
}
function create_fragment(ctx) {
  let div2;
  let div1;
  let h1;
  let t0;
  let div0;
  let i;
  let t1;
  let input;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = !/*query*/
  ctx[1] && create_if_block(ctx);
  let each_value = (
    /*data*/
    ctx[0].partners
  );
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block(get_each_context(ctx, each_value, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      h1 = element("h1");
      t0 = text("Our Partners");
      div0 = element("div");
      i = element("i");
      t1 = text("search");
      input = element("input");
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Our Partners");
      h1_nodes.forEach(detach);
      div0 = claim_element(div1_nodes, "DIV", { class: true, id: true });
      var div0_nodes = children(div0);
      i = claim_element(div0_nodes, "I", { class: true });
      var i_nodes = children(i);
      t1 = claim_text(i_nodes, "search");
      i_nodes.forEach(detach);
      input = claim_element(div0_nodes, "INPUT", { type: true });
      div0_nodes.forEach(detach);
      if (if_block)
        if_block.l(div1_nodes);
      if_block_anchor = empty();
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(div1_nodes);
      }
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-1wgjvfu");
      attr(i, "class", "material-icons");
      attr(input, "type", "text");
      attr(div0, "class", "wide svelte-1wgjvfu");
      attr(div0, "id", "searchbar");
      attr(div1, "id", "main");
      attr(div1, "class", "svelte-1wgjvfu");
      attr(div2, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, h1);
      append_hydration(h1, t0);
      append_hydration(div1, div0);
      append_hydration(div0, i);
      append_hydration(i, t1);
      append_hydration(div0, input);
      set_input_value(
        input,
        /*query*/
        ctx[1]
      );
      if (if_block)
        if_block.m(div1, null);
      append_hydration(div1, if_block_anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(div1, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(
          input,
          "input",
          /*input_input_handler*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*query*/
      2 && input.value !== /*query*/
      ctx2[1]) {
        set_input_value(
          input,
          /*query*/
          ctx2[1]
        );
      }
      if (!/*query*/
      ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(div1, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*fuzzy, data, query*/
      3) {
        each_value = /*data*/
        ctx2[0].partners;
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(div1, null);
          }
        }
        group_outros();
        for (i2 = each_value.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block)
        if_block.d();
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function fuzzy(string, query) {
  const lower = query.toLowerCase();
  string = string.toLowerCase();
  let i = 0;
  for (const char of lower) {
    if ((i = string.indexOf(char, i)) === -1)
      return false;
    i++;
  }
  return true;
}
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  let query = "";
  function input_input_handler() {
    query = this.value;
    $$invalidate(1, query);
  }
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  return [data, query, input_input_handler];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0 });
  }
}
export {
  Page as default
};
