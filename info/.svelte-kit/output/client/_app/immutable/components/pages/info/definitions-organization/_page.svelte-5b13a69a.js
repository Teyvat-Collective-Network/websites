import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot(ctx) {
  let div;
  let h1;
  let t0;
  let ul;
  let li0;
  let t1;
  let b0;
  let t2;
  let t3;
  let li1;
  let t4;
  let b1;
  let t5;
  let t6;
  let li2;
  let t7;
  let b2;
  let t8;
  let t9;
  let li3;
  let t10;
  let b3;
  let t11;
  let t12;
  let li4;
  let t13;
  let b4;
  let t14;
  let t15;
  let li5;
  let t16;
  let b5;
  let t17;
  let t18;
  let li6;
  let t19;
  let b6;
  let t20;
  let t21;
  let li7;
  let t22;
  let b7;
  let t23;
  let t24;
  let a;
  let t25;
  let t26;
  let li8;
  let t27;
  let b8;
  let t28;
  let t29;
  let li9;
  let b9;
  let t30;
  let t31;
  let li10;
  let t32;
  let b10;
  let t33;
  let t34;
  let li11;
  let t35;
  let b11;
  let t36;
  let t37;
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Definitions & Organization");
      ul = element("ul");
      li0 = element("li");
      t1 = text("The ");
      b0 = element("b");
      t2 = text("Teyvat Collective Network");
      t3 = text(' ("TCN") is the network of servers. It refers to a collective organization.');
      li1 = element("li");
      t4 = text("A ");
      b1 = element("b");
      t5 = text("TCN server");
      t6 = text(" is a server who has been inducted into the TCN and is a member of it. TCN servers do not speak on behalf of the TCN and its views, rules, and opinions do not represent that of the TCN or other TCN servers.");
      li2 = element("li");
      t7 = text("The ");
      b2 = element("b");
      t8 = text("TCN Council");
      t9 = text(" is the set of representatives that facilitate communication between TCN servers in the HQ server. It consists of server owners and council members.");
      li3 = element("li");
      t10 = text("A ");
      b3 = element("b");
      t11 = text("server owner");
      t12 = text(" is the owner of a TCN server. This must be the actual owner of the server.");
      li4 = element("li");
      t13 = text("A ");
      b4 = element("b");
      t14 = text("council advisor");
      t15 = text(" is a representative chosen by the server owner to represent their server alongside them in HQ. A server does not need to have a council advisor, and this may be any user.");
      li5 = element("li");
      t16 = text("The ");
      b5 = element("b");
      t17 = text("observer committee");
      t18 = text(" is the team of observers that are elected to represent, act on behalf of, and maintain organization in the TCN.");
      li6 = element("li");
      t19 = text("An ");
      b6 = element("b");
      t20 = text("observer");
      t21 = text(" is a council member who has been elected to an elevated position and has administrative powers in the hub and HQ. They do not have authority over any TCN servers. Their opinion is not the TCN's opinion; rather, they represent the TCN's decisions (as determined by vote) in terms of what actions it will take and maintain its organization and standards.");
      li7 = element("li");
      t22 = text("The ");
      b7 = element("b");
      t23 = text("TCN Hub");
      t24 = text(" is the official public server that acts as our public interface with staff and members (");
      a = element("a");
      t25 = text("discord.gg/FG2wpbywSx");
      t26 = text("). It is not defined as a TCN server.");
      li8 = element("li");
      t27 = text("The ");
      b8 = element("b");
      t28 = text("HQ");
      t29 = text(" is the private base of operations that facilitates communication and is only accessible by council members. It is not defined as a TCN server.");
      li9 = element("li");
      b9 = element("b");
      t30 = text("TCN Staff");
      t31 = text(" are staff members of TCN servers. They do not represent the TCN and do not represent the server they staff to the TCN unless they are on the council.");
      li10 = element("li");
      t32 = text("A ");
      b10 = element("b");
      t33 = text("major vote");
      t34 = text(" is a vote that requires 75% turnout from the eligible voters for the result to be valid.");
      li11 = element("li");
      t35 = text("A ");
      b11 = element("b");
      t36 = text("minor vote");
      t37 = text(" is a vote that requires 60% turnout from the eligible voters for the result to be valid.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Definitions & Organization");
      h1_nodes.forEach(detach);
      ul = claim_element(div_nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      t1 = claim_text(li0_nodes, "The ");
      b0 = claim_element(li0_nodes, "B", {});
      var b0_nodes = children(b0);
      t2 = claim_text(b0_nodes, "Teyvat Collective Network");
      b0_nodes.forEach(detach);
      t3 = claim_text(li0_nodes, ' ("TCN") is the network of servers. It refers to a collective organization.');
      li0_nodes.forEach(detach);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      t4 = claim_text(li1_nodes, "A ");
      b1 = claim_element(li1_nodes, "B", {});
      var b1_nodes = children(b1);
      t5 = claim_text(b1_nodes, "TCN server");
      b1_nodes.forEach(detach);
      t6 = claim_text(li1_nodes, " is a server who has been inducted into the TCN and is a member of it. TCN servers do not speak on behalf of the TCN and its views, rules, and opinions do not represent that of the TCN or other TCN servers.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t7 = claim_text(li2_nodes, "The ");
      b2 = claim_element(li2_nodes, "B", {});
      var b2_nodes = children(b2);
      t8 = claim_text(b2_nodes, "TCN Council");
      b2_nodes.forEach(detach);
      t9 = claim_text(li2_nodes, " is the set of representatives that facilitate communication between TCN servers in the HQ server. It consists of server owners and council members.");
      li2_nodes.forEach(detach);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      t10 = claim_text(li3_nodes, "A ");
      b3 = claim_element(li3_nodes, "B", {});
      var b3_nodes = children(b3);
      t11 = claim_text(b3_nodes, "server owner");
      b3_nodes.forEach(detach);
      t12 = claim_text(li3_nodes, " is the owner of a TCN server. This must be the actual owner of the server.");
      li3_nodes.forEach(detach);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      t13 = claim_text(li4_nodes, "A ");
      b4 = claim_element(li4_nodes, "B", {});
      var b4_nodes = children(b4);
      t14 = claim_text(b4_nodes, "council advisor");
      b4_nodes.forEach(detach);
      t15 = claim_text(li4_nodes, " is a representative chosen by the server owner to represent their server alongside them in HQ. A server does not need to have a council advisor, and this may be any user.");
      li4_nodes.forEach(detach);
      li5 = claim_element(ul_nodes, "LI", {});
      var li5_nodes = children(li5);
      t16 = claim_text(li5_nodes, "The ");
      b5 = claim_element(li5_nodes, "B", {});
      var b5_nodes = children(b5);
      t17 = claim_text(b5_nodes, "observer committee");
      b5_nodes.forEach(detach);
      t18 = claim_text(li5_nodes, " is the team of observers that are elected to represent, act on behalf of, and maintain organization in the TCN.");
      li5_nodes.forEach(detach);
      li6 = claim_element(ul_nodes, "LI", {});
      var li6_nodes = children(li6);
      t19 = claim_text(li6_nodes, "An ");
      b6 = claim_element(li6_nodes, "B", {});
      var b6_nodes = children(b6);
      t20 = claim_text(b6_nodes, "observer");
      b6_nodes.forEach(detach);
      t21 = claim_text(li6_nodes, " is a council member who has been elected to an elevated position and has administrative powers in the hub and HQ. They do not have authority over any TCN servers. Their opinion is not the TCN's opinion; rather, they represent the TCN's decisions (as determined by vote) in terms of what actions it will take and maintain its organization and standards.");
      li6_nodes.forEach(detach);
      li7 = claim_element(ul_nodes, "LI", {});
      var li7_nodes = children(li7);
      t22 = claim_text(li7_nodes, "The ");
      b7 = claim_element(li7_nodes, "B", {});
      var b7_nodes = children(b7);
      t23 = claim_text(b7_nodes, "TCN Hub");
      b7_nodes.forEach(detach);
      t24 = claim_text(li7_nodes, " is the official public server that acts as our public interface with staff and members (");
      a = claim_element(li7_nodes, "A", { href: true });
      var a_nodes = children(a);
      t25 = claim_text(a_nodes, "discord.gg/FG2wpbywSx");
      a_nodes.forEach(detach);
      t26 = claim_text(li7_nodes, "). It is not defined as a TCN server.");
      li7_nodes.forEach(detach);
      li8 = claim_element(ul_nodes, "LI", {});
      var li8_nodes = children(li8);
      t27 = claim_text(li8_nodes, "The ");
      b8 = claim_element(li8_nodes, "B", {});
      var b8_nodes = children(b8);
      t28 = claim_text(b8_nodes, "HQ");
      b8_nodes.forEach(detach);
      t29 = claim_text(li8_nodes, " is the private base of operations that facilitates communication and is only accessible by council members. It is not defined as a TCN server.");
      li8_nodes.forEach(detach);
      li9 = claim_element(ul_nodes, "LI", {});
      var li9_nodes = children(li9);
      b9 = claim_element(li9_nodes, "B", {});
      var b9_nodes = children(b9);
      t30 = claim_text(b9_nodes, "TCN Staff");
      b9_nodes.forEach(detach);
      t31 = claim_text(li9_nodes, " are staff members of TCN servers. They do not represent the TCN and do not represent the server they staff to the TCN unless they are on the council.");
      li9_nodes.forEach(detach);
      li10 = claim_element(ul_nodes, "LI", {});
      var li10_nodes = children(li10);
      t32 = claim_text(li10_nodes, "A ");
      b10 = claim_element(li10_nodes, "B", {});
      var b10_nodes = children(b10);
      t33 = claim_text(b10_nodes, "major vote");
      b10_nodes.forEach(detach);
      t34 = claim_text(li10_nodes, " is a vote that requires 75% turnout from the eligible voters for the result to be valid.");
      li10_nodes.forEach(detach);
      li11 = claim_element(ul_nodes, "LI", {});
      var li11_nodes = children(li11);
      t35 = claim_text(li11_nodes, "A ");
      b11 = claim_element(li11_nodes, "B", {});
      var b11_nodes = children(b11);
      t36 = claim_text(b11_nodes, "minor vote");
      b11_nodes.forEach(detach);
      t37 = claim_text(li11_nodes, " is a vote that requires 60% turnout from the eligible voters for the result to be valid.");
      li11_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://discord.gg/FG2wpbywSx");
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      append_hydration(div, ul);
      append_hydration(ul, li0);
      append_hydration(li0, t1);
      append_hydration(li0, b0);
      append_hydration(b0, t2);
      append_hydration(li0, t3);
      append_hydration(ul, li1);
      append_hydration(li1, t4);
      append_hydration(li1, b1);
      append_hydration(b1, t5);
      append_hydration(li1, t6);
      append_hydration(ul, li2);
      append_hydration(li2, t7);
      append_hydration(li2, b2);
      append_hydration(b2, t8);
      append_hydration(li2, t9);
      append_hydration(ul, li3);
      append_hydration(li3, t10);
      append_hydration(li3, b3);
      append_hydration(b3, t11);
      append_hydration(li3, t12);
      append_hydration(ul, li4);
      append_hydration(li4, t13);
      append_hydration(li4, b4);
      append_hydration(b4, t14);
      append_hydration(li4, t15);
      append_hydration(ul, li5);
      append_hydration(li5, t16);
      append_hydration(li5, b5);
      append_hydration(b5, t17);
      append_hydration(li5, t18);
      append_hydration(ul, li6);
      append_hydration(li6, t19);
      append_hydration(li6, b6);
      append_hydration(b6, t20);
      append_hydration(li6, t21);
      append_hydration(ul, li7);
      append_hydration(li7, t22);
      append_hydration(li7, b7);
      append_hydration(b7, t23);
      append_hydration(li7, t24);
      append_hydration(li7, a);
      append_hydration(a, t25);
      append_hydration(li7, t26);
      append_hydration(ul, li8);
      append_hydration(li8, t27);
      append_hydration(li8, b8);
      append_hydration(b8, t28);
      append_hydration(li8, t29);
      append_hydration(ul, li9);
      append_hydration(li9, b9);
      append_hydration(b9, t30);
      append_hydration(li9, t31);
      append_hydration(ul, li10);
      append_hydration(li10, t32);
      append_hydration(li10, b10);
      append_hydration(b10, t33);
      append_hydration(li10, t34);
      append_hydration(ul, li11);
      append_hydration(li11, t35);
      append_hydration(li11, b11);
      append_hydration(b11, t36);
      append_hydration(li11, t37);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/rules", "Rules"],
      next: ["/info/hq", "HQ"],
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
