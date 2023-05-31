import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../chunks/index-c4baf36c.js";
import { C as Card } from "../../../../chunks/Card-50f694ea.js";
import { L as Linkable } from "../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_default_slot_5(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Get a guided tour of HQ and the Akasha System.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Get a guided tour of HQ and the Akasha System.");
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
function create_default_slot_4(ctx) {
  let p;
  let t0;
  let a;
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("See a paginated quickstart within Discord. You may prefer this or ");
      a = element("a");
      t1 = text("this page");
      t2 = text(".");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "See a paginated quickstart within Discord. You may prefer this or ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "this page");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, ".");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/info/quickstart");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, a);
      append_hydration(a, t1);
      append_hydration(p, t2);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_default_slot_3(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("View a list of TCN resources. Some of this information is private and therefore not listed on this website.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "View a list of TCN resources. Some of this information is private and therefore not listed on this website.");
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
function create_default_slot_2(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("View a server's information by entering its ID.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "View a server's information by entering its ID.");
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
function create_default_slot_1(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("View a user's information by entering their ID.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "View a user's information by entering their ID.");
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
function create_default_slot(ctx) {
  let div1;
  let h1;
  let t0;
  let p0;
  let t1;
  let a;
  let t2;
  let t3;
  let p1;
  let t4;
  let linkable0;
  let linkable1;
  let p2;
  let t5;
  let ul;
  let li0;
  let b0;
  let t6;
  let t7;
  let li1;
  let b1;
  let t8;
  let t9;
  let will;
  let t10;
  let li2;
  let b2;
  let t11;
  let t12;
  let document;
  let t13;
  let li3;
  let b3;
  let t14;
  let t15;
  let li4;
  let b4;
  let t16;
  let t17;
  let service;
  let linkable2;
  let p3;
  let t18;
  let p4;
  let t19;
  let linkable3;
  let p5;
  let t20;
  let linkable4;
  let linkable5;
  let p6;
  let t21;
  let b5;
  let t22;
  let t23;
  let div0;
  let card0;
  let card1;
  let card2;
  let card3;
  let card4;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "website",
      e: "h2",
      value: "The Website"
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "documents",
      e: "h3",
      value: "Documents"
    }
  });
  linkable2 = new Linkable({
    props: {
      id: "server-list",
      e: "h3",
      value: "Server List"
    }
  });
  linkable3 = new Linkable({
    props: {
      id: "user-information",
      e: "h3",
      value: "User Information"
    }
  });
  linkable4 = new Linkable({
    props: { id: "bot", e: "h2", value: "The Bot" }
  });
  linkable5 = new Linkable({
    props: {
      id: "terminal",
      e: "h3",
      value: "The Akasha Terminal"
    }
  });
  card0 = new Card({
    props: {
      icon: "tour",
      title: "Tour",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  card1 = new Card({
    props: {
      icon: "assistant",
      title: "Quickstart",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  card2 = new Card({
    props: {
      icon: "list_alt",
      title: "TCN Directory",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  card3 = new Card({
    props: {
      icon: "hub",
      title: "Server Info",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  card4 = new Card({
    props: {
      icon: "account_circle",
      title: "User Info",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div1 = element("div");
      h1 = element("h1");
      t0 = text("The Akasha System");
      p0 = element("p");
      t1 = text("The Akasha System is the TCN's central information management system. It is available at ");
      a = element("a");
      t2 = text("https://akasha.hyper-neutrino.xyz");
      t3 = text(" and as a bot in HQ.");
      p1 = element("p");
      t4 = text("You will need to log in to access this webpage. Information on this page is only for use by the TCN council unless otherwise specified, and sharing it with other people is a violation of the rules.");
      create_component(linkable0.$$.fragment);
      create_component(linkable1.$$.fragment);
      p2 = element("p");
      t5 = text("The main feature of the Akasha System is its document storage. You may upload documents on the website. Each document has the following fields, most of which are optional:");
      ul = element("ul");
      li0 = element("li");
      b0 = element("b");
      t6 = text("Authors");
      t7 = text(": a list of authors that is displayed in searches and document information. This is different from the uploader (you), but make sure you have permission to upload documents or that it has been shared in HQ already.");
      li1 = element("li");
      b1 = element("b");
      t8 = text("Related Users");
      t9 = text(": a list of users mentioned by the document. This document");
      will = element("will");
      t10 = text("show up on that user's page.");
      li2 = element("li");
      b2 = element("b");
      t11 = text("Related Servers");
      t12 = text(": a list of servers mentioned by the document. This");
      document = element("document");
      t13 = text("will show up on that server's page.");
      li3 = element("li");
      b3 = element("b");
      t14 = text("Title, Description");
      t15 = text(": metadata about the document.");
      li4 = element("li");
      b4 = element("b");
      t16 = text("Document Link");
      t17 = text(": any URL; your document does not have to be on a particular");
      service = element("service");
      create_component(linkable2.$$.fragment);
      p3 = element("p");
      t18 = text("You can find a list of TCN servers and other servers that you are in. Click a server to view its information (including its council members for TCN servers) and a list of any documents attached to it.");
      p4 = element("p");
      t19 = text("Additionally, you can enter the ID of a server directly to pull up any information about it, if any can be found. This may not work if the server is not known as the bot cannot fetch servers you and it are not in.");
      create_component(linkable3.$$.fragment);
      p5 = element("p");
      t20 = text("There is no list of users as that would be unreasonably long, but you can enter a user's ID directly to view information about them including their position on the council if any, servers they staff in, and any documents attached to them.");
      create_component(linkable4.$$.fragment);
      create_component(linkable5.$$.fragment);
      p6 = element("p");
      t21 = text("You can find the Akasha Terminal in ");
      b5 = element("b");
      t22 = text("#akasha-terminal");
      t23 = text(". It has the following features.");
      div0 = element("div");
      create_component(card0.$$.fragment);
      create_component(card1.$$.fragment);
      create_component(card2.$$.fragment);
      create_component(card3.$$.fragment);
      create_component(card4.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { id: true });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "The Akasha System");
      h1_nodes.forEach(detach);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "The Akasha System is the TCN's central information management system. It is available at ");
      a = claim_element(p0_nodes, "A", { href: true });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "https://akasha.hyper-neutrino.xyz");
      a_nodes.forEach(detach);
      t3 = claim_text(p0_nodes, " and as a bot in HQ.");
      p0_nodes.forEach(detach);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "You will need to log in to access this webpage. Information on this page is only for use by the TCN council unless otherwise specified, and sharing it with other people is a violation of the rules.");
      p1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div1_nodes);
      claim_component(linkable1.$$.fragment, div1_nodes);
      p2 = claim_element(div1_nodes, "P", {});
      var p2_nodes = children(p2);
      t5 = claim_text(p2_nodes, "The main feature of the Akasha System is its document storage. You may upload documents on the website. Each document has the following fields, most of which are optional:");
      p2_nodes.forEach(detach);
      ul = claim_element(div1_nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      b0 = claim_element(li0_nodes, "B", {});
      var b0_nodes = children(b0);
      t6 = claim_text(b0_nodes, "Authors");
      b0_nodes.forEach(detach);
      t7 = claim_text(li0_nodes, ": a list of authors that is displayed in searches and document information. This is different from the uploader (you), but make sure you have permission to upload documents or that it has been shared in HQ already.");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      b1 = claim_element(li1_nodes, "B", {});
      var b1_nodes = children(b1);
      t8 = claim_text(b1_nodes, "Related Users");
      b1_nodes.forEach(detach);
      t9 = claim_text(li1_nodes, ": a list of users mentioned by the document. This document");
      li1_nodes.forEach(detach);
      will = claim_element(ul_nodes, "WILL", {});
      var will_nodes = children(will);
      t10 = claim_text(will_nodes, "show up on that user's page.");
      will_nodes.forEach(detach);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      b2 = claim_element(li2_nodes, "B", {});
      var b2_nodes = children(b2);
      t11 = claim_text(b2_nodes, "Related Servers");
      b2_nodes.forEach(detach);
      t12 = claim_text(li2_nodes, ": a list of servers mentioned by the document. This");
      li2_nodes.forEach(detach);
      document = claim_element(ul_nodes, "DOCUMENT", {});
      var document_nodes = children(document);
      t13 = claim_text(document_nodes, "will show up on that server's page.");
      document_nodes.forEach(detach);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      b3 = claim_element(li3_nodes, "B", {});
      var b3_nodes = children(b3);
      t14 = claim_text(b3_nodes, "Title, Description");
      b3_nodes.forEach(detach);
      t15 = claim_text(li3_nodes, ": metadata about the document.");
      li3_nodes.forEach(detach);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      b4 = claim_element(li4_nodes, "B", {});
      var b4_nodes = children(b4);
      t16 = claim_text(b4_nodes, "Document Link");
      b4_nodes.forEach(detach);
      t17 = claim_text(li4_nodes, ": any URL; your document does not have to be on a particular");
      li4_nodes.forEach(detach);
      service = claim_element(ul_nodes, "SERVICE", {});
      children(service).forEach(detach);
      ul_nodes.forEach(detach);
      claim_component(linkable2.$$.fragment, div1_nodes);
      p3 = claim_element(div1_nodes, "P", {});
      var p3_nodes = children(p3);
      t18 = claim_text(p3_nodes, "You can find a list of TCN servers and other servers that you are in. Click a server to view its information (including its council members for TCN servers) and a list of any documents attached to it.");
      p3_nodes.forEach(detach);
      p4 = claim_element(div1_nodes, "P", {});
      var p4_nodes = children(p4);
      t19 = claim_text(p4_nodes, "Additionally, you can enter the ID of a server directly to pull up any information about it, if any can be found. This may not work if the server is not known as the bot cannot fetch servers you and it are not in.");
      p4_nodes.forEach(detach);
      claim_component(linkable3.$$.fragment, div1_nodes);
      p5 = claim_element(div1_nodes, "P", {});
      var p5_nodes = children(p5);
      t20 = claim_text(p5_nodes, "There is no list of users as that would be unreasonably long, but you can enter a user's ID directly to view information about them including their position on the council if any, servers they staff in, and any documents attached to them.");
      p5_nodes.forEach(detach);
      claim_component(linkable4.$$.fragment, div1_nodes);
      claim_component(linkable5.$$.fragment, div1_nodes);
      p6 = claim_element(div1_nodes, "P", {});
      var p6_nodes = children(p6);
      t21 = claim_text(p6_nodes, "You can find the Akasha Terminal in ");
      b5 = claim_element(p6_nodes, "B", {});
      var b5_nodes = children(b5);
      t22 = claim_text(b5_nodes, "#akasha-terminal");
      b5_nodes.forEach(detach);
      t23 = claim_text(p6_nodes, ". It has the following features.");
      p6_nodes.forEach(detach);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(card0.$$.fragment, div0_nodes);
      claim_component(card1.$$.fragment, div0_nodes);
      claim_component(card2.$$.fragment, div0_nodes);
      claim_component(card3.$$.fragment, div0_nodes);
      claim_component(card4.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://akasha.hyper-neutrino.xyz");
      attr(div0, "class", "cards");
      attr(div1, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, h1);
      append_hydration(h1, t0);
      append_hydration(div1, p0);
      append_hydration(p0, t1);
      append_hydration(p0, a);
      append_hydration(a, t2);
      append_hydration(p0, t3);
      append_hydration(div1, p1);
      append_hydration(p1, t4);
      mount_component(linkable0, div1, null);
      mount_component(linkable1, div1, null);
      append_hydration(div1, p2);
      append_hydration(p2, t5);
      append_hydration(div1, ul);
      append_hydration(ul, li0);
      append_hydration(li0, b0);
      append_hydration(b0, t6);
      append_hydration(li0, t7);
      append_hydration(ul, li1);
      append_hydration(li1, b1);
      append_hydration(b1, t8);
      append_hydration(li1, t9);
      append_hydration(ul, will);
      append_hydration(will, t10);
      append_hydration(ul, li2);
      append_hydration(li2, b2);
      append_hydration(b2, t11);
      append_hydration(li2, t12);
      append_hydration(ul, document);
      append_hydration(document, t13);
      append_hydration(ul, li3);
      append_hydration(li3, b3);
      append_hydration(b3, t14);
      append_hydration(li3, t15);
      append_hydration(ul, li4);
      append_hydration(li4, b4);
      append_hydration(b4, t16);
      append_hydration(li4, t17);
      append_hydration(ul, service);
      mount_component(linkable2, div1, null);
      append_hydration(div1, p3);
      append_hydration(p3, t18);
      append_hydration(div1, p4);
      append_hydration(p4, t19);
      mount_component(linkable3, div1, null);
      append_hydration(div1, p5);
      append_hydration(p5, t20);
      mount_component(linkable4, div1, null);
      mount_component(linkable5, div1, null);
      append_hydration(div1, p6);
      append_hydration(p6, t21);
      append_hydration(p6, b5);
      append_hydration(b5, t22);
      append_hydration(p6, t23);
      append_hydration(div1, div0);
      mount_component(card0, div0, null);
      mount_component(card1, div0, null);
      mount_component(card2, div0, null);
      mount_component(card3, div0, null);
      mount_component(card4, div0, null);
      current = true;
    },
    p(ctx2, dirty) {
      const card0_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card0.$set(card0_changes);
      const card1_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card1.$set(card1_changes);
      const card2_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card2.$set(card2_changes);
      const card3_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card3.$set(card3_changes);
      const card4_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card4.$set(card4_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(linkable0.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(linkable3.$$.fragment, local);
      transition_in(linkable4.$$.fragment, local);
      transition_in(linkable5.$$.fragment, local);
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      transition_in(card3.$$.fragment, local);
      transition_in(card4.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      transition_out(linkable4.$$.fragment, local);
      transition_out(linkable5.$$.fragment, local);
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      transition_out(card3.$$.fragment, local);
      transition_out(card4.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(linkable0);
      destroy_component(linkable1);
      destroy_component(linkable2);
      destroy_component(linkable3);
      destroy_component(linkable4);
      destroy_component(linkable5);
      destroy_component(card0);
      destroy_component(card1);
      destroy_component(card2);
      destroy_component(card3);
      destroy_component(card4);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let navigation;
  let current;
  navigation = new Navigation({
    props: {
      last: ["/info/hq", "HQ"],
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
