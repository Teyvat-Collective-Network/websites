import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../../chunks/index-c4baf36c.js";
import { L as Linkable } from "../../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../../chunks/Navigation-82debefb.js";
function create_default_slot(ctx) {
  let div;
  let h1;
  let t0;
  let linkable0;
  let p0;
  let t1;
  let code0;
  let t2;
  let t3;
  let linkable1;
  let p1;
  let t4;
  let a0;
  let t5;
  let t6;
  let linkable2;
  let p2;
  let t7;
  let code1;
  let t8;
  let t9;
  let a1;
  let t10;
  let t11;
  let linkable3;
  let p3;
  let t12;
  let ul;
  let li0;
  let t13;
  let li1;
  let t14;
  let li2;
  let t15;
  let li3;
  let t16;
  let li4;
  let t17;
  let li5;
  let t18;
  let li6;
  let t19;
  let li7;
  let t20;
  let li8;
  let t21;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "embed-color",
      e: "h2",
      value: "Embed Color"
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "text-color",
      e: "h2",
      value: "Text Color"
    }
  });
  linkable2 = new Linkable({
    props: {
      id: "timestamps",
      e: "h2",
      value: "Timestamps"
    }
  });
  linkable3 = new Linkable({
    props: {
      id: "limits",
      e: "h2",
      value: "Embed Limits"
    }
  });
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Embeds");
      create_component(linkable0.$$.fragment);
      p0 = element("p");
      t1 = text("You should pick one embed color that you like and stick to it for most/all of your embeds for consistency and organization. If you want am embed to appear colorless, use ");
      code0 = element("code");
      t2 = text("0x2d3136");
      t3 = text(" (dark mode).");
      create_component(linkable1.$$.fragment);
      p1 = element("p");
      t4 = text("You cannot color text by default, but you can use code block syntax highlighting to get a similar effect. Check out ");
      a0 = element("a");
      t5 = text("this document");
      t6 = text(" for a list.");
      create_component(linkable2.$$.fragment);
      p2 = element("p");
      t7 = text("Discord doesn't make it obvious that this feature even exists, but you can show a specific date to a user both absolutely and relatively. The format is ");
      code1 = element("code");
      t8 = text("<t:timestamp:format>");
      t9 = text(". You can use ");
      a1 = element("a");
      t10 = text("this website");
      t11 = text(" to generate these.");
      create_component(linkable3.$$.fragment);
      p3 = element("p");
      t12 = text("Discord places size limits on embeds.");
      ul = element("ul");
      li0 = element("li");
      t13 = text("The author name can be up to 256 characters.");
      li1 = element("li");
      t14 = text("The title can be up to 256 characters.");
      li2 = element("li");
      t15 = text("The description can be up to 4096 characters.");
      li3 = element("li");
      t16 = text("Field names are mandatory and can be up to 256 characters.");
      li4 = element("li");
      t17 = text("Field values are mandatory and can be up to 1024 characters.");
      li5 = element("li");
      t18 = text("The footer text can be up to 2048 characters, but it is not formatted.");
      li6 = element("li");
      t19 = text("The total length of the listed fields over all embeds in one message can be up to 6000 characters,");
      li7 = element("li");
      t20 = text("A message may have up to 10 embeds.");
      li8 = element("li");
      t21 = text("An embed may have up to 25 fields.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Embeds");
      h1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "You should pick one embed color that you like and stick to it for most/all of your embeds for consistency and organization. If you want am embed to appear colorless, use ");
      code0 = claim_element(p0_nodes, "CODE", {});
      var code0_nodes = children(code0);
      t2 = claim_text(code0_nodes, "0x2d3136");
      code0_nodes.forEach(detach);
      t3 = claim_text(p0_nodes, " (dark mode).");
      p0_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "You cannot color text by default, but you can use code block syntax highlighting to get a similar effect. Check out ");
      a0 = claim_element(p1_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t5 = claim_text(a0_nodes, "this document");
      a0_nodes.forEach(detach);
      t6 = claim_text(p1_nodes, " for a list.");
      p1_nodes.forEach(detach);
      claim_component(linkable2.$$.fragment, div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t7 = claim_text(p2_nodes, "Discord doesn't make it obvious that this feature even exists, but you can show a specific date to a user both absolutely and relatively. The format is ");
      code1 = claim_element(p2_nodes, "CODE", {});
      var code1_nodes = children(code1);
      t8 = claim_text(code1_nodes, "<t:timestamp:format>");
      code1_nodes.forEach(detach);
      t9 = claim_text(p2_nodes, ". You can use ");
      a1 = claim_element(p2_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t10 = claim_text(a1_nodes, "this website");
      a1_nodes.forEach(detach);
      t11 = claim_text(p2_nodes, " to generate these.");
      p2_nodes.forEach(detach);
      claim_component(linkable3.$$.fragment, div_nodes);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      t12 = claim_text(p3_nodes, "Discord places size limits on embeds.");
      p3_nodes.forEach(detach);
      ul = claim_element(div_nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      t13 = claim_text(li0_nodes, "The author name can be up to 256 characters.");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      t14 = claim_text(li1_nodes, "The title can be up to 256 characters.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t15 = claim_text(li2_nodes, "The description can be up to 4096 characters.");
      li2_nodes.forEach(detach);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      t16 = claim_text(li3_nodes, "Field names are mandatory and can be up to 256 characters.");
      li3_nodes.forEach(detach);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      t17 = claim_text(li4_nodes, "Field values are mandatory and can be up to 1024 characters.");
      li4_nodes.forEach(detach);
      li5 = claim_element(ul_nodes, "LI", {});
      var li5_nodes = children(li5);
      t18 = claim_text(li5_nodes, "The footer text can be up to 2048 characters, but it is not formatted.");
      li5_nodes.forEach(detach);
      li6 = claim_element(ul_nodes, "LI", {});
      var li6_nodes = children(li6);
      t19 = claim_text(li6_nodes, "The total length of the listed fields over all embeds in one message can be up to 6000 characters,");
      li6_nodes.forEach(detach);
      li7 = claim_element(ul_nodes, "LI", {});
      var li7_nodes = children(li7);
      t20 = claim_text(li7_nodes, "A message may have up to 10 embeds.");
      li7_nodes.forEach(detach);
      li8 = claim_element(ul_nodes, "LI", {});
      var li8_nodes = children(li8);
      t21 = claim_text(li8_nodes, "An embed may have up to 25 fields.");
      li8_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://docs.google.com/document/d/1tyBtgNfGc6ae7t033dFxdqCSfG9kgiuwrFxlJTvyuu8/edit");
      attr(a1, "href", "https://discord-timestamp-generator.vercel.app/");
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      mount_component(linkable0, div, null);
      append_hydration(div, p0);
      append_hydration(p0, t1);
      append_hydration(p0, code0);
      append_hydration(code0, t2);
      append_hydration(p0, t3);
      mount_component(linkable1, div, null);
      append_hydration(div, p1);
      append_hydration(p1, t4);
      append_hydration(p1, a0);
      append_hydration(a0, t5);
      append_hydration(p1, t6);
      mount_component(linkable2, div, null);
      append_hydration(div, p2);
      append_hydration(p2, t7);
      append_hydration(p2, code1);
      append_hydration(code1, t8);
      append_hydration(p2, t9);
      append_hydration(p2, a1);
      append_hydration(a1, t10);
      append_hydration(p2, t11);
      mount_component(linkable3, div, null);
      append_hydration(div, p3);
      append_hydration(p3, t12);
      append_hydration(div, ul);
      append_hydration(ul, li0);
      append_hydration(li0, t13);
      append_hydration(ul, li1);
      append_hydration(li1, t14);
      append_hydration(ul, li2);
      append_hydration(li2, t15);
      append_hydration(ul, li3);
      append_hydration(li3, t16);
      append_hydration(ul, li4);
      append_hydration(li4, t17);
      append_hydration(ul, li5);
      append_hydration(li5, t18);
      append_hydration(ul, li6);
      append_hydration(li6, t19);
      append_hydration(ul, li7);
      append_hydration(li7, t20);
      append_hydration(ul, li8);
      append_hydration(li8, t21);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(linkable0.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(linkable3.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(linkable0);
      destroy_component(linkable1);
      destroy_component(linkable2);
      destroy_component(linkable3);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/discord#webhooks-embeds", "Discord Help"],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(navigation.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(navigation.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(navigation, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const navigation_changes = {};
      if (dirty & /*$$scope*/
      1) {
        navigation_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navigation.$set(navigation_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navigation.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navigation.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(navigation);
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
