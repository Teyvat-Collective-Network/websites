import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, l as claim_element, m as children, r as claim_text, h as detach, p as set_style, n as attr, b as insert_hydration, G as append_hydration, u as set_data, C as noop } from "./index-c4baf36c.js";
import { P as PUBLIC_TCN_AUTH, a as PUBLIC_DOMAIN } from "./public-962e99ca.js";
function create_fragment(ctx) {
  let div;
  let p;
  let t0;
  let b;
  let t1_value = (
    /*user*/
    ctx[0].username + ""
  );
  let t1;
  let span;
  let t2;
  let t3_value = (
    /*user*/
    ctx[0].discriminator + ""
  );
  let t3;
  let t4;
  let a;
  let t5;
  return {
    c() {
      div = element("div");
      p = element("p");
      t0 = text("Logged in as ");
      b = element("b");
      t1 = text(t1_value);
      span = element("span");
      t2 = text("#");
      t3 = text(t3_value);
      t4 = text(". Your user ID will be submitted with this form. Not you?\n        ");
      a = element("a");
      t5 = text("Log Out");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Logged in as ");
      b = claim_element(p_nodes, "B", {});
      var b_nodes = children(b);
      t1 = claim_text(b_nodes, t1_value);
      b_nodes.forEach(detach);
      span = claim_element(p_nodes, "SPAN", { style: true });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, "#");
      t3 = claim_text(span_nodes, t3_value);
      span_nodes.forEach(detach);
      t4 = claim_text(p_nodes, ". Your user ID will be submitted with this form. Not you?\n        ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "Log Out");
      a_nodes.forEach(detach);
      p_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(span, "color", "var(--text-secondary)");
      attr(a, "href", PUBLIC_TCN_AUTH + "/logout?redirect=" + encodeURIComponent(`${PUBLIC_DOMAIN}/apply`));
      attr(div, "class", "panel highlight");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, p);
      append_hydration(p, t0);
      append_hydration(p, b);
      append_hydration(b, t1);
      append_hydration(p, span);
      append_hydration(span, t2);
      append_hydration(span, t3);
      append_hydration(p, t4);
      append_hydration(p, a);
      append_hydration(a, t5);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*user*/
      1 && t1_value !== (t1_value = /*user*/
      ctx2[0].username + ""))
        set_data(t1, t1_value);
      if (dirty & /*user*/
      1 && t3_value !== (t3_value = /*user*/
      ctx2[0].discriminator + ""))
        set_data(t3, t3_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { user } = $$props;
  $$self.$$set = ($$props2) => {
    if ("user" in $$props2)
      $$invalidate(0, user = $$props2.user);
  };
  return [user];
}
class LoggedInAs extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { user: 0 });
  }
}
export {
  LoggedInAs as L
};
