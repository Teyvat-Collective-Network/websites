import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, l as claim_element, m as children, c as claim_space, r as claim_text, h as detach, n as attr, J as src_url_equal, b as insert_hydration, G as append_hydration, u as set_data, C as noop, p as set_style } from "./index-c4baf36c.js";
const Invite_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true, style: true, class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", "banner");
      set_style(div, "background-color", "rgb(var(--pure-rgb), 50%)");
      attr(div, "class", "svelte-1ehda4r");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true, style: true, class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", "banner");
      set_style(div, "background-image", "url(" + /*banner*/
      ctx[0] + ")");
      attr(div, "class", "svelte-1ehda4r");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*banner*/
      1) {
        set_style(div, "background-image", "url(" + /*banner*/
        ctx2[0] + ")");
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let t0;
  let img;
  let img_src_value;
  let t1;
  let b;
  let t2;
  let t3;
  let a;
  let t4;
  let a_href_value;
  function select_block_type(ctx2, dirty) {
    if (
      /*banner*/
      ctx2[0]
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      t0 = space();
      img = element("img");
      t1 = space();
      b = element("b");
      t2 = text(
        /*title*/
        ctx[2]
      );
      t3 = space();
      a = element("a");
      t4 = text("JOIN");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true, class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      t0 = claim_space(div_nodes);
      img = claim_element(div_nodes, "IMG", {
        id: true,
        src: true,
        alt: true,
        class: true
      });
      t1 = claim_space(div_nodes);
      b = claim_element(div_nodes, "B", { id: true, class: true });
      var b_nodes = children(b);
      t2 = claim_text(
        b_nodes,
        /*title*/
        ctx[2]
      );
      b_nodes.forEach(detach);
      t3 = claim_space(div_nodes);
      a = claim_element(div_nodes, "A", { id: true, href: true, class: true });
      var a_nodes = children(a);
      t4 = claim_text(a_nodes, "JOIN");
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "id", "icon");
      if (!src_url_equal(img.src, img_src_value = /*icon*/
      ctx[1]))
        attr(img, "src", img_src_value);
      attr(img, "alt", "icon");
      attr(img, "class", "svelte-1ehda4r");
      attr(b, "id", "title");
      attr(b, "class", "svelte-1ehda4r");
      attr(a, "id", "join");
      attr(a, "href", a_href_value = "https://discord.gg/" + /*code*/
      ctx[3]);
      attr(a, "class", "button svelte-1ehda4r");
      attr(div, "id", "invite");
      attr(div, "class", "svelte-1ehda4r");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_block.m(div, null);
      append_hydration(div, t0);
      append_hydration(div, img);
      append_hydration(div, t1);
      append_hydration(div, b);
      append_hydration(b, t2);
      append_hydration(div, t3);
      append_hydration(div, a);
      append_hydration(a, t4);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, t0);
        }
      }
      if (dirty & /*icon*/
      2 && !src_url_equal(img.src, img_src_value = /*icon*/
      ctx2[1])) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*title*/
      4)
        set_data(
          t2,
          /*title*/
          ctx2[2]
        );
      if (dirty & /*code*/
      8 && a_href_value !== (a_href_value = "https://discord.gg/" + /*code*/
      ctx2[3])) {
        attr(a, "href", a_href_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { banner = null } = $$props;
  let { icon } = $$props;
  let { title } = $$props;
  let { code } = $$props;
  $$self.$$set = ($$props2) => {
    if ("banner" in $$props2)
      $$invalidate(0, banner = $$props2.banner);
    if ("icon" in $$props2)
      $$invalidate(1, icon = $$props2.icon);
    if ("title" in $$props2)
      $$invalidate(2, title = $$props2.title);
    if ("code" in $$props2)
      $$invalidate(3, code = $$props2.code);
  };
  return [banner, icon, title, code];
}
class Invite extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { banner: 0, icon: 1, title: 2, code: 3 });
  }
}
export {
  Invite as I
};
