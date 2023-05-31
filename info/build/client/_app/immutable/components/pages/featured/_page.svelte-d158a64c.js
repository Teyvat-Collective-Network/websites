import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, l as claim_element, m as children, r as claim_text, h as detach, n as attr, b as insert_hydration, G as append_hydration, C as noop } from "../../../chunks/index-c4baf36c.js";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div4;
  let div3;
  let h1;
  let t0;
  let div2;
  let div0;
  let i;
  let t1;
  let span;
  let t2;
  let div1;
  let p0;
  let t3;
  let p1;
  let t4;
  let a;
  let t5;
  let t6;
  return {
    c() {
      div4 = element("div");
      div3 = element("div");
      h1 = element("h1");
      t0 = text("Featured Content");
      div2 = element("div");
      div0 = element("div");
      i = element("i");
      t1 = text("campaign");
      span = element("span");
      t2 = text("New Banshare System");
      div1 = element("div");
      p0 = element("p");
      t3 = text("We are rolling out our new banshare system over the next few weeks. Instead of just publishing them through an announcement channel, it will now be posted by a bot. This lets us ensure banshares are only being used in TCN servers but also allows for automated actions. Servers can now set a threshold to automatically ban users or have a button to execute a banshare with one simple click.");
      p1 = element("p");
      t4 = text("To get started, go to ");
      a = element("a");
      t5 = text("the banshare help page");
      t6 = text(".");
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { id: true });
      var div3_nodes = children(div3);
      h1 = claim_element(div3_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Featured Content");
      h1_nodes.forEach(detach);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      i = claim_element(div0_nodes, "I", { class: true });
      var i_nodes = children(i);
      t1 = claim_text(i_nodes, "campaign");
      i_nodes.forEach(detach);
      span = claim_element(div0_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, "New Banshare System");
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "We are rolling out our new banshare system over the next few weeks. Instead of just publishing them through an announcement channel, it will now be posted by a bot. This lets us ensure banshares are only being used in TCN servers but also allows for automated actions. Servers can now set a threshold to automatically ban users or have a button to execute a banshare with one simple click.");
      p0_nodes.forEach(detach);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "To get started, go to ");
      a = claim_element(p1_nodes, "A", { href: true });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "the banshare help page");
      a_nodes.forEach(detach);
      t6 = claim_text(p1_nodes, ".");
      p1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "material-icons");
      attr(span, "class", "svelte-jxpi0n");
      attr(div0, "class", "svelte-jxpi0n");
      attr(a, "href", "/info/banshares");
      attr(div1, "class", "svelte-jxpi0n");
      attr(div2, "class", "announcement highlight svelte-jxpi0n");
      attr(div3, "id", "main");
      attr(div4, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      append_hydration(div3, h1);
      append_hydration(h1, t0);
      append_hydration(div3, div2);
      append_hydration(div2, div0);
      append_hydration(div0, i);
      append_hydration(i, t1);
      append_hydration(div0, span);
      append_hydration(span, t2);
      append_hydration(div2, div1);
      append_hydration(div1, p0);
      append_hydration(p0, t3);
      append_hydration(div1, p1);
      append_hydration(p1, t4);
      append_hydration(p1, a);
      append_hydration(a, t5);
      append_hydration(p1, t6);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div4);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
