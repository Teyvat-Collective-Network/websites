import { S as SvelteComponent, i as init, s as safe_not_equal, a3 as handle_promise, k as element, q as text, x as create_component, l as claim_element, m as children, r as claim_text, h as detach, y as claim_component, n as attr, b as insert_hydration, G as append_hydration, z as mount_component, a4 as update_await_block_branch, f as transition_in, t as transition_out, A as destroy_component, o as onMount, C as noop, e as empty, a2 as destroy_each } from "../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../chunks/Callout-2d6b8933.js";
import { I as Invite } from "../../../chunks/Invite-6ce98080.js";
import { L as Linkable } from "../../../chunks/Linkable-8089c9ad.js";
function get_then_context(ctx) {
  ctx[3] = ctx[5][0];
  ctx[4] = ctx[5][1];
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_catch_block_2(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block(ctx) {
  let await_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block_1,
    then: create_then_block_1,
    catch: create_catch_block_1,
    value: 2,
    blocks: [, , ,]
  };
  handle_promise(fetch("/api/observers"), info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_catch_block_1(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block_1(ctx) {
  let await_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: true,
    pending: create_pending_block_2,
    then: create_then_block_2,
    catch: create_catch_block,
    value: 5,
    error: 1,
    blocks: [, , ,]
  };
  handle_promise(
    /*response*/
    ctx[2].json(),
    info
  );
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_catch_block(ctx) {
  let callout;
  let current;
  callout = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(callout.$$.fragment);
    },
    l(nodes) {
      claim_component(callout.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(callout, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const callout_changes = {};
      if (dirty & /*$$scope*/
      512) {
        callout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout.$set(callout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(callout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(callout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(callout, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Fetching observers failed; please check your internet connection.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Fetching observers failed; please check your internet connection.");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_then_block_2(ctx) {
  get_then_context(ctx);
  let if_block0_anchor;
  let if_block1_anchor;
  let current;
  let if_block0 = (
    /*error*/
    ctx[4] && create_if_block_1(ctx)
  );
  let if_block1 = (
    /*observers*/
    ctx[3] && create_if_block(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      if_block0_anchor = empty();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      if_block0_anchor = empty();
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, if_block0_anchor, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      get_then_context(ctx2);
      if (
        /*error*/
        ctx2[4]
      )
        if_block0.p(ctx2, dirty);
      if (
        /*observers*/
        ctx2[3]
      )
        if_block1.p(ctx2, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(if_block0_anchor);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function create_if_block_1(ctx) {
  let callout;
  let current;
  callout = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(callout.$$.fragment);
    },
    l(nodes) {
      claim_component(callout.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(callout, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const callout_changes = {};
      if (dirty & /*$$scope*/
      512) {
        callout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout.$set(callout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(callout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(callout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(callout, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let p;
  let t_value = (
    /*error*/
    ctx[4] + ""
  );
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block(ctx) {
  let ul;
  let each_value = (
    /*observers*/
    ctx[3]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*fetch*/
      0) {
        each_value = /*observers*/
        ctx2[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block(ctx) {
  let li;
  let a;
  let t0_value = (
    /*observer*/
    ctx[6].tag + ""
  );
  let t0;
  let t1;
  let code;
  let t2_value = (
    /*observer*/
    ctx[6].id + ""
  );
  let t2;
  return {
    c() {
      li = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = text(" - ");
      code = element("code");
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", { href: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach);
      t1 = claim_text(li_nodes, " - ");
      code = claim_element(li_nodes, "CODE", {});
      var code_nodes = children(code);
      t2 = claim_text(code_nodes, t2_value);
      code_nodes.forEach(detach);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://discord.com/users/" + /*observer*/
      ctx[6].id);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, a);
      append_hydration(a, t0);
      append_hydration(li, t1);
      append_hydration(li, code);
      append_hydration(code, t2);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_pending_block_2(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Loading observers...");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Loading observers...");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_pending_block_1(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Loading observers...");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Loading observers...");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_pending_block(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Loading observers...");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Loading observers...");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_fragment(ctx) {
  let div2;
  let div1;
  let h1;
  let t0;
  let linkable0;
  let p;
  let t1;
  let br;
  let invite;
  let linkable1;
  let div0;
  let current;
  linkable0 = new Linkable({
    props: { id: "hub", e: "h2", value: "TCN Hub" }
  });
  invite = new Invite({
    props: {
      banner: "https://i.imgur.com/DXyVcRR.png",
      icon: "/favicon.png",
      title: "TCN Hub",
      code: "FG2wpbywSx"
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "observers",
      e: "h2",
      value: "Observers"
    }
  });
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block_2,
    value: 1,
    blocks: [, , ,]
  };
  handle_promise(new Promise(
    /*func*/
    ctx[0]
  ), info);
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      h1 = element("h1");
      t0 = text("Contact us");
      create_component(linkable0.$$.fragment);
      p = element("p");
      t1 = text("Join the TCN Hub to contact observers and other server staff and ask questions or give feedback about the TCN!");
      br = element("br");
      create_component(invite.$$.fragment);
      create_component(linkable1.$$.fragment);
      div0 = element("div");
      info.block.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { id: true });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Contact us");
      h1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div1_nodes);
      p = claim_element(div1_nodes, "P", {});
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, "Join the TCN Hub to contact observers and other server staff and ask questions or give feedback about the TCN!");
      p_nodes.forEach(detach);
      br = claim_element(div1_nodes, "BR", {});
      claim_component(invite.$$.fragment, div1_nodes);
      claim_component(linkable1.$$.fragment, div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      info.block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div1, "id", "main");
      attr(div2, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, h1);
      append_hydration(h1, t0);
      mount_component(linkable0, div1, null);
      append_hydration(div1, p);
      append_hydration(p, t1);
      append_hydration(div1, br);
      mount_component(invite, div1, null);
      mount_component(linkable1, div1, null);
      append_hydration(div1, div0);
      info.block.m(div0, info.anchor = null);
      info.mount = () => div0;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(linkable0.$$.fragment, local);
      transition_in(invite.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(info.block);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(invite.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(linkable0);
      destroy_component(invite);
      destroy_component(linkable1);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
function instance($$self) {
  const func = (r) => onMount(() => r(null));
  return [func];
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
