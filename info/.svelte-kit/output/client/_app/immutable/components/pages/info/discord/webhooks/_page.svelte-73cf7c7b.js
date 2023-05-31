import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, C as noop } from "../../../../../chunks/index-c4baf36c.js";
import { C as Callout } from "../../../../../chunks/Callout-2d6b8933.js";
import { L as Linkable } from "../../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../../chunks/Navigation-82debefb.js";
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot_3(ctx) {
  let p;
  let b;
  let t0;
  let t1;
  let code;
  let t2;
  let t3;
  return {
    c() {
      p = element("p");
      b = element("b");
      t0 = text("Keep your webhook URL private.");
      t1 = text(" Anyone who has the URL can use it to post messages and there is no way to identify who does it. Webhooks can also ping ");
      code = element("code");
      t2 = text("@everyone");
      t3 = text(", making this espcially problematic.");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      b = claim_element(p_nodes, "B", {});
      var b_nodes = children(b);
      t0 = claim_text(b_nodes, "Keep your webhook URL private.");
      b_nodes.forEach(detach);
      t1 = claim_text(p_nodes, " Anyone who has the URL can use it to post messages and there is no way to identify who does it. Webhooks can also ping ");
      code = claim_element(p_nodes, "CODE", {});
      var code_nodes = children(code);
      t2 = claim_text(code_nodes, "@everyone");
      code_nodes.forEach(detach);
      t3 = claim_text(p_nodes, ", making this espcially problematic.");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, b);
      append_hydration(b, t0);
      append_hydration(p, t1);
      append_hydration(p, code);
      append_hydration(code, t2);
      append_hydration(p, t3);
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
  let t0;
  let a;
  let t1;
  let t2;
  return {
    c() {
      p = element("p");
      t0 = text("You need the ");
      a = element("a");
      t1 = text("Manage Webhooks");
      t2 = text(" permission to do this.");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "You need the ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Manage Webhooks");
      a_nodes.forEach(detach);
      t2 = claim_text(p_nodes, " permission to do this.");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/info/discord/permission-list#MANAGE_WEBHOOKS");
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
function create_default_slot_1(ctx) {
  let p;
  let b;
  let t0;
  let t1;
  let a;
  let t2;
  let t3;
  return {
    c() {
      p = element("p");
      b = element("b");
      t0 = text("Careful!");
      t1 = text(" Short Discohook share links expire after 1 week. If you need to keep a permanent link, just copy-paste the link from the URL bar and shorten it using something like ");
      a = element("a");
      t2 = text("https://tinyurl.com");
      t3 = text(" if needed.");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      b = claim_element(p_nodes, "B", {});
      var b_nodes = children(b);
      t0 = claim_text(b_nodes, "Careful!");
      b_nodes.forEach(detach);
      t1 = claim_text(p_nodes, " Short Discohook share links expire after 1 week. If you need to keep a permanent link, just copy-paste the link from the URL bar and shorten it using something like ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "https://tinyurl.com");
      a_nodes.forEach(detach);
      t3 = claim_text(p_nodes, " if needed.");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://tinyurl.com");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, b);
      append_hydration(b, t0);
      append_hydration(p, t1);
      append_hydration(p, a);
      append_hydration(a, t2);
      append_hydration(p, t3);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_default_slot(ctx) {
  let div3;
  let h1;
  let t0;
  let linkable0;
  let p0;
  let t1;
  let callout0;
  let linkable1;
  let p1;
  let t2;
  let b0;
  let t3;
  let t4;
  let callout1;
  let linkable2;
  let p2;
  let t5;
  let b1;
  let t6;
  let t7;
  let b2;
  let t8;
  let p3;
  let t9;
  let p4;
  let t10;
  let linkable3;
  let p5;
  let t11;
  let ul1;
  let li0;
  let t12;
  let li1;
  let t13;
  let li2;
  let t14;
  let li4;
  let t15;
  let ul0;
  let li3;
  let t16;
  let linkable4;
  let linkable5;
  let p6;
  let a0;
  let t17;
  let p7;
  let t18;
  let div0;
  let span0;
  let i0;
  let t19;
  let t20;
  let span1;
  let i1;
  let t21;
  let t22;
  let span2;
  let i2;
  let t23;
  let t24;
  let br0;
  let callout2;
  let linkable6;
  let p8;
  let a1;
  let t25;
  let p9;
  let t26;
  let div1;
  let span3;
  let i3;
  let t27;
  let t28;
  let span4;
  let i4;
  let t29;
  let t30;
  let span5;
  let i5;
  let t31;
  let t32;
  let linkable7;
  let p10;
  let a2;
  let t33;
  let p11;
  let t34;
  let ul2;
  let li5;
  let t35;
  let code0;
  let t36;
  let t37;
  let li6;
  let t38;
  let code1;
  let t39;
  let t40;
  let code2;
  let t41;
  let t42;
  let code3;
  let t43;
  let t44;
  let li7;
  let t45;
  let code4;
  let t46;
  let t47;
  let li8;
  let t48;
  let pre;
  let t49;
  let br1;
  let t50;
  let br2;
  let t51;
  let br3;
  let t52;
  let br4;
  let t53;
  let br5;
  let t54;
  let br6;
  let t55;
  let br7;
  let t56;
  let br8;
  let t57;
  let br9;
  let t58;
  let br10;
  let t59;
  let div2;
  let span6;
  let i6;
  let t60;
  let t61;
  let span7;
  let i7;
  let t62;
  let t63;
  let span8;
  let i8;
  let t64;
  let t65;
  let linkable8;
  let p12;
  let t66;
  let ul3;
  let li9;
  let b3;
  let code5;
  let t67;
  let t68;
  let li10;
  let b4;
  let code6;
  let t69;
  let t70;
  let li11;
  let b5;
  let code7;
  let t71;
  let t72;
  let li12;
  let b6;
  let code8;
  let t73;
  let t74;
  let li13;
  let t75;
  let b7;
  let code9;
  let t76;
  let t77;
  let b8;
  let t78;
  let t79;
  let li14;
  let b9;
  let code10;
  let t80;
  let t81;
  let code11;
  let t82;
  let t83;
  let code12;
  let t84;
  let t85;
  let li15;
  let b10;
  let code13;
  let t86;
  let t87;
  let current;
  linkable0 = new Linkable({
    props: {
      id: "what-is-a-webhook",
      e: "h2",
      value: "What is a webhook?"
    }
  });
  callout0 = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  linkable1 = new Linkable({
    props: {
      id: "creating",
      e: "h2",
      value: "How do I create a webhook?"
    }
  });
  callout1 = new Callout({
    props: {
      style: "info",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  linkable2 = new Linkable({
    props: {
      id: "usage",
      e: "h2",
      value: "How do I use a webhook?"
    }
  });
  linkable3 = new Linkable({
    props: {
      id: "advanced",
      e: "h2",
      value: "Advanced Usage"
    }
  });
  linkable4 = new Linkable({
    props: {
      id: "services",
      e: "h2",
      value: "Services"
    }
  });
  linkable5 = new Linkable({
    props: {
      id: "discohook",
      e: "h3",
      value: "Discohook"
    }
  });
  callout2 = new Callout({
    props: {
      style: "red",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  linkable6 = new Linkable({
    props: {
      id: "embed-generator",
      e: "h3",
      value: "Embed Generator"
    }
  });
  linkable7 = new Linkable({
    props: {
      id: "leaf-embeds",
      e: "h3",
      value: "Leaf Embeds"
    }
  });
  linkable8 = new Linkable({
    props: {
      id: "dev",
      e: "h2",
      value: "Webhooks for Developers"
    }
  });
  return {
    c() {
      div3 = element("div");
      h1 = element("h1");
      t0 = text("Webhooks");
      create_component(linkable0.$$.fragment);
      p0 = element("p");
      t1 = text("A webhook is a resource you can create in a text-like channel (announcement channels, text channels, text-in-voice channels, and forums). It consists of an ID, which is public and identifies the webhook, and a token, which is private and required to use the webhook. The URL contains both.");
      create_component(callout0.$$.fragment);
      create_component(linkable1.$$.fragment);
      p1 = element("p");
      t2 = text("Go to ");
      b0 = element("b");
      t3 = text("channel settings");
      t4 = text(' and click "Integrations". You should see a "Create Webhook" button. Click it to get a new webhook with a default name and blank profile picture. You can change these if you would like and click "Save". When messages are sent, they will appear with this profile picture and name.');
      create_component(callout1.$$.fragment);
      create_component(linkable2.$$.fragment);
      p2 = element("p");
      t5 = text("In the ");
      b1 = element("b");
      t6 = text("channel settings");
      t7 = text(' tab, click on a webhook to expand it, then click "Copy Webhook URL". ');
      b2 = element("b");
      t8 = text("Keey this URL private.");
      p3 = element("p");
      t9 = text("Now, you can paste it into an embed utility or execute it manually or use it in a Google Form.");
      p4 = element("p");
      t10 = text("(Technically, pasting your webhook URL into third-party utilities/services is a risk, but the services mentioned in this guide are reputable and trustworthy.)");
      create_component(linkable3.$$.fragment);
      p5 = element("p");
      t11 = text("By default, when you exectue a webhook, it will be posted to the channel itself with the webhook's avatar and name. However, you can actually do a bit more with them. Not all of these features are available with all services.");
      ul1 = element("ul");
      li0 = element("li");
      t12 = text("You can edit a message that was sent by the same webhook using the message ID.");
      li1 = element("li");
      t13 = text("You can post the message to a thread by specifying its ID.");
      li2 = element("li");
      t14 = text("For forum channels, if you include a thread name, it will start a new post with that title. Otherwise, you must specify the post ID, as forums cannot have text set to them.");
      li4 = element("li");
      t15 = text("You can set the avatar and name for a specific message on post. This will override the defaults just for that message. If a webhook sends two messages in a row with the same username, they will merge together like normal messages.");
      ul0 = element("ul");
      li3 = element("li");
      t16 = text("You cannot change the avatar or name when editing a message.");
      create_component(linkable4.$$.fragment);
      create_component(linkable5.$$.fragment);
      p6 = element("p");
      a0 = element("a");
      t17 = text("https://discohook.org");
      p7 = element("p");
      t18 = text("Discohook has usage instructions in the landing page.");
      div0 = element("div");
      span0 = element("span");
      i0 = element("i");
      t19 = text("check");
      t20 = text("New Forum Posts");
      span1 = element("span");
      i1 = element("i");
      t21 = text("close");
      t22 = text("Post To Threads");
      span2 = element("span");
      i2 = element("i");
      t23 = text("close");
      t24 = text("Components (Buttons & Select Menus)");
      br0 = element("br");
      create_component(callout2.$$.fragment);
      create_component(linkable6.$$.fragment);
      p8 = element("p");
      a1 = element("a");
      t25 = text("https://message.style");
      p9 = element("p");
      t26 = text("Embed Generator has its own help page and FAQ on the left sidebar.");
      div1 = element("div");
      span3 = element("span");
      i3 = element("i");
      t27 = text("close");
      t28 = text("New Forum Posts");
      span4 = element("span");
      i4 = element("i");
      t29 = text("check");
      t30 = text("Post To Threads");
      span5 = element("span");
      i5 = element("i");
      t31 = text("check");
      t32 = text("Components (Buttons & Select Menus)");
      create_component(linkable7.$$.fragment);
      p10 = element("p");
      a2 = element("a");
      t33 = text("https://embeds.leaf.moe");
      p11 = element("p");
      t34 = text("Leaf Embeds has no tutorial or information page. Here is an overview of its usage.");
      ul2 = element("ul");
      li5 = element("li");
      t35 = text("Instead of JSON, this editor uses Markdown. You are likely already used to some aspects of Markdown like how ");
      code0 = element("code");
      t36 = text("**this**");
      t37 = text(" makes text bold.");
      li6 = element("li");
      t38 = text("Write headers using ");
      code1 = element("code");
      t39 = text("# Header");
      t40 = text(" and regular content just as text. They will be formatted across embeds. To force a header to start a new embed, use ");
      code2 = element("code");
      t41 = text("#! Header");
      t42 = text(". To make a field inline, use ");
      code3 = element("code");
      t43 = text("#- Header");
      t44 = text(".");
      li7 = element("li");
      t45 = text("Add images using ");
      code4 = element("code");
      t46 = text("![alt text](url)");
      t47 = text(".");
      li8 = element("li");
      t48 = text("To set embed color, thumbnail, image, and footer, add the following to the start of your data (each section is optional): ");
      pre = element("pre");
      t49 = text("---");
      br1 = element("br");
      t50 = text("color: 0x######");
      br2 = element("br");
      t51 = text("thumbnail:");
      br3 = element("br");
      t52 = text("    url: URL goes here");
      br4 = element("br");
      t53 = text("image:");
      br5 = element("br");
      t54 = text("    url: URL goes here");
      br6 = element("br");
      t55 = text("image:");
      br7 = element("br");
      t56 = text("    url: URL goes here");
      br8 = element("br");
      t57 = text("footer:");
      br9 = element("br");
      t58 = text("    text: footer text goes here");
      br10 = element("br");
      t59 = text("---");
      div2 = element("div");
      span6 = element("span");
      i6 = element("i");
      t60 = text("check");
      t61 = text("New Forum Posts");
      span7 = element("span");
      i7 = element("i");
      t62 = text("check");
      t63 = text("Post To Threads");
      span8 = element("span");
      i8 = element("i");
      t64 = text("close");
      t65 = text("Components (Buttons & Select Menus)");
      create_component(linkable8.$$.fragment);
      p12 = element("p");
      t66 = text("A webhook is just an endpoint that you can send data to to make the webhook perform certain actions.");
      ul3 = element("ul");
      li9 = element("li");
      b3 = element("b");
      code5 = element("code");
      t67 = text("POST /");
      t68 = text(" - Provide the message data as the body to post the message through the webhook. Most embed creation services have a JSON Editor which allows you to copy the JSON data of your message.");
      li10 = element("li");
      b4 = element("b");
      code6 = element("code");
      t69 = text("PATCH /messages/[message ID]");
      t70 = text(" - Edit a webhook message.");
      li11 = element("li");
      b5 = element("b");
      code7 = element("code");
      t71 = text("DELETE /messages/[message ID]");
      t72 = text(" - Delete a webhook message.");
      li12 = element("li");
      b6 = element("b");
      code8 = element("code");
      t73 = text("POST /?thread_id=[thread/post ID]");
      t74 = text(" - Send the message into a specified thread/forum post.");
      li13 = element("li");
      t75 = text("Specify ");
      b7 = element("b");
      code9 = element("code");
      t76 = text("thread_name");
      t77 = text(" in the request body to create a new post in a forum. This is ");
      b8 = element("b");
      t78 = text("only");
      t79 = text(" available for forum channels; webhooks cannot create regular threads.");
      li14 = element("li");
      b9 = element("b");
      code10 = element("code");
      t80 = text("PATCH /");
      t81 = text(" - Edit the ");
      code11 = element("code");
      t82 = text("name");
      t83 = text(" and/or ");
      code12 = element("code");
      t84 = text("avatar");
      t85 = text(" of the webhook. YOu cannot edit the channel using this method.");
      li15 = element("li");
      b10 = element("b");
      code13 = element("code");
      t86 = text("DELETE /");
      t87 = text(" - Delete the webhook.");
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { id: true });
      var div3_nodes = children(div3);
      h1 = claim_element(div3_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Webhooks");
      h1_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div3_nodes);
      p0 = claim_element(div3_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "A webhook is a resource you can create in a text-like channel (announcement channels, text channels, text-in-voice channels, and forums). It consists of an ID, which is public and identifies the webhook, and a token, which is private and required to use the webhook. The URL contains both.");
      p0_nodes.forEach(detach);
      claim_component(callout0.$$.fragment, div3_nodes);
      claim_component(linkable1.$$.fragment, div3_nodes);
      p1 = claim_element(div3_nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "Go to ");
      b0 = claim_element(p1_nodes, "B", {});
      var b0_nodes = children(b0);
      t3 = claim_text(b0_nodes, "channel settings");
      b0_nodes.forEach(detach);
      t4 = claim_text(p1_nodes, ' and click "Integrations". You should see a "Create Webhook" button. Click it to get a new webhook with a default name and blank profile picture. You can change these if you would like and click "Save". When messages are sent, they will appear with this profile picture and name.');
      p1_nodes.forEach(detach);
      claim_component(callout1.$$.fragment, div3_nodes);
      claim_component(linkable2.$$.fragment, div3_nodes);
      p2 = claim_element(div3_nodes, "P", {});
      var p2_nodes = children(p2);
      t5 = claim_text(p2_nodes, "In the ");
      b1 = claim_element(p2_nodes, "B", {});
      var b1_nodes = children(b1);
      t6 = claim_text(b1_nodes, "channel settings");
      b1_nodes.forEach(detach);
      t7 = claim_text(p2_nodes, ' tab, click on a webhook to expand it, then click "Copy Webhook URL". ');
      b2 = claim_element(p2_nodes, "B", {});
      var b2_nodes = children(b2);
      t8 = claim_text(b2_nodes, "Keey this URL private.");
      b2_nodes.forEach(detach);
      p2_nodes.forEach(detach);
      p3 = claim_element(div3_nodes, "P", {});
      var p3_nodes = children(p3);
      t9 = claim_text(p3_nodes, "Now, you can paste it into an embed utility or execute it manually or use it in a Google Form.");
      p3_nodes.forEach(detach);
      p4 = claim_element(div3_nodes, "P", {});
      var p4_nodes = children(p4);
      t10 = claim_text(p4_nodes, "(Technically, pasting your webhook URL into third-party utilities/services is a risk, but the services mentioned in this guide are reputable and trustworthy.)");
      p4_nodes.forEach(detach);
      claim_component(linkable3.$$.fragment, div3_nodes);
      p5 = claim_element(div3_nodes, "P", {});
      var p5_nodes = children(p5);
      t11 = claim_text(p5_nodes, "By default, when you exectue a webhook, it will be posted to the channel itself with the webhook's avatar and name. However, you can actually do a bit more with them. Not all of these features are available with all services.");
      p5_nodes.forEach(detach);
      ul1 = claim_element(div3_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li0 = claim_element(ul1_nodes, "LI", {});
      var li0_nodes = children(li0);
      t12 = claim_text(li0_nodes, "You can edit a message that was sent by the same webhook using the message ID.");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul1_nodes, "LI", {});
      var li1_nodes = children(li1);
      t13 = claim_text(li1_nodes, "You can post the message to a thread by specifying its ID.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul1_nodes, "LI", {});
      var li2_nodes = children(li2);
      t14 = claim_text(li2_nodes, "For forum channels, if you include a thread name, it will start a new post with that title. Otherwise, you must specify the post ID, as forums cannot have text set to them.");
      li2_nodes.forEach(detach);
      li4 = claim_element(ul1_nodes, "LI", {});
      var li4_nodes = children(li4);
      t15 = claim_text(li4_nodes, "You can set the avatar and name for a specific message on post. This will override the defaults just for that message. If a webhook sends two messages in a row with the same username, they will merge together like normal messages.");
      ul0 = claim_element(li4_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li3 = claim_element(ul0_nodes, "LI", {});
      var li3_nodes = children(li3);
      t16 = claim_text(li3_nodes, "You cannot change the avatar or name when editing a message.");
      li3_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      li4_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      claim_component(linkable4.$$.fragment, div3_nodes);
      claim_component(linkable5.$$.fragment, div3_nodes);
      p6 = claim_element(div3_nodes, "P", {});
      var p6_nodes = children(p6);
      a0 = claim_element(p6_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t17 = claim_text(a0_nodes, "https://discohook.org");
      a0_nodes.forEach(detach);
      p6_nodes.forEach(detach);
      p7 = claim_element(div3_nodes, "P", {});
      var p7_nodes = children(p7);
      t18 = claim_text(p7_nodes, "Discohook has usage instructions in the landing page.");
      p7_nodes.forEach(detach);
      div0 = claim_element(div3_nodes, "DIV", {});
      var div0_nodes = children(div0);
      span0 = claim_element(div0_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      i0 = claim_element(span0_nodes, "I", { class: true });
      var i0_nodes = children(i0);
      t19 = claim_text(i0_nodes, "check");
      i0_nodes.forEach(detach);
      t20 = claim_text(span0_nodes, "New Forum Posts");
      span0_nodes.forEach(detach);
      span1 = claim_element(div0_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      i1 = claim_element(span1_nodes, "I", { class: true });
      var i1_nodes = children(i1);
      t21 = claim_text(i1_nodes, "close");
      i1_nodes.forEach(detach);
      t22 = claim_text(span1_nodes, "Post To Threads");
      span1_nodes.forEach(detach);
      span2 = claim_element(div0_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      i2 = claim_element(span2_nodes, "I", { class: true });
      var i2_nodes = children(i2);
      t23 = claim_text(i2_nodes, "close");
      i2_nodes.forEach(detach);
      t24 = claim_text(span2_nodes, "Components (Buttons & Select Menus)");
      span2_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      br0 = claim_element(div3_nodes, "BR", {});
      claim_component(callout2.$$.fragment, div3_nodes);
      claim_component(linkable6.$$.fragment, div3_nodes);
      p8 = claim_element(div3_nodes, "P", {});
      var p8_nodes = children(p8);
      a1 = claim_element(p8_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t25 = claim_text(a1_nodes, "https://message.style");
      a1_nodes.forEach(detach);
      p8_nodes.forEach(detach);
      p9 = claim_element(div3_nodes, "P", {});
      var p9_nodes = children(p9);
      t26 = claim_text(p9_nodes, "Embed Generator has its own help page and FAQ on the left sidebar.");
      p9_nodes.forEach(detach);
      div1 = claim_element(div3_nodes, "DIV", {});
      var div1_nodes = children(div1);
      span3 = claim_element(div1_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      i3 = claim_element(span3_nodes, "I", { class: true });
      var i3_nodes = children(i3);
      t27 = claim_text(i3_nodes, "close");
      i3_nodes.forEach(detach);
      t28 = claim_text(span3_nodes, "New Forum Posts");
      span3_nodes.forEach(detach);
      span4 = claim_element(div1_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      i4 = claim_element(span4_nodes, "I", { class: true });
      var i4_nodes = children(i4);
      t29 = claim_text(i4_nodes, "check");
      i4_nodes.forEach(detach);
      t30 = claim_text(span4_nodes, "Post To Threads");
      span4_nodes.forEach(detach);
      span5 = claim_element(div1_nodes, "SPAN", { class: true });
      var span5_nodes = children(span5);
      i5 = claim_element(span5_nodes, "I", { class: true });
      var i5_nodes = children(i5);
      t31 = claim_text(i5_nodes, "check");
      i5_nodes.forEach(detach);
      t32 = claim_text(span5_nodes, "Components (Buttons & Select Menus)");
      span5_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      claim_component(linkable7.$$.fragment, div3_nodes);
      p10 = claim_element(div3_nodes, "P", {});
      var p10_nodes = children(p10);
      a2 = claim_element(p10_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t33 = claim_text(a2_nodes, "https://embeds.leaf.moe");
      a2_nodes.forEach(detach);
      p10_nodes.forEach(detach);
      p11 = claim_element(div3_nodes, "P", {});
      var p11_nodes = children(p11);
      t34 = claim_text(p11_nodes, "Leaf Embeds has no tutorial or information page. Here is an overview of its usage.");
      p11_nodes.forEach(detach);
      ul2 = claim_element(div3_nodes, "UL", {});
      var ul2_nodes = children(ul2);
      li5 = claim_element(ul2_nodes, "LI", {});
      var li5_nodes = children(li5);
      t35 = claim_text(li5_nodes, "Instead of JSON, this editor uses Markdown. You are likely already used to some aspects of Markdown like how ");
      code0 = claim_element(li5_nodes, "CODE", {});
      var code0_nodes = children(code0);
      t36 = claim_text(code0_nodes, "**this**");
      code0_nodes.forEach(detach);
      t37 = claim_text(li5_nodes, " makes text bold.");
      li5_nodes.forEach(detach);
      li6 = claim_element(ul2_nodes, "LI", {});
      var li6_nodes = children(li6);
      t38 = claim_text(li6_nodes, "Write headers using ");
      code1 = claim_element(li6_nodes, "CODE", {});
      var code1_nodes = children(code1);
      t39 = claim_text(code1_nodes, "# Header");
      code1_nodes.forEach(detach);
      t40 = claim_text(li6_nodes, " and regular content just as text. They will be formatted across embeds. To force a header to start a new embed, use ");
      code2 = claim_element(li6_nodes, "CODE", {});
      var code2_nodes = children(code2);
      t41 = claim_text(code2_nodes, "#! Header");
      code2_nodes.forEach(detach);
      t42 = claim_text(li6_nodes, ". To make a field inline, use ");
      code3 = claim_element(li6_nodes, "CODE", {});
      var code3_nodes = children(code3);
      t43 = claim_text(code3_nodes, "#- Header");
      code3_nodes.forEach(detach);
      t44 = claim_text(li6_nodes, ".");
      li6_nodes.forEach(detach);
      li7 = claim_element(ul2_nodes, "LI", {});
      var li7_nodes = children(li7);
      t45 = claim_text(li7_nodes, "Add images using ");
      code4 = claim_element(li7_nodes, "CODE", {});
      var code4_nodes = children(code4);
      t46 = claim_text(code4_nodes, "![alt text](url)");
      code4_nodes.forEach(detach);
      t47 = claim_text(li7_nodes, ".");
      li7_nodes.forEach(detach);
      li8 = claim_element(ul2_nodes, "LI", {});
      var li8_nodes = children(li8);
      t48 = claim_text(li8_nodes, "To set embed color, thumbnail, image, and footer, add the following to the start of your data (each section is optional): ");
      pre = claim_element(li8_nodes, "PRE", {});
      var pre_nodes = children(pre);
      t49 = claim_text(pre_nodes, "---");
      br1 = claim_element(pre_nodes, "BR", {});
      t50 = claim_text(pre_nodes, "color: 0x######");
      br2 = claim_element(pre_nodes, "BR", {});
      t51 = claim_text(pre_nodes, "thumbnail:");
      br3 = claim_element(pre_nodes, "BR", {});
      t52 = claim_text(pre_nodes, "    url: URL goes here");
      br4 = claim_element(pre_nodes, "BR", {});
      t53 = claim_text(pre_nodes, "image:");
      br5 = claim_element(pre_nodes, "BR", {});
      t54 = claim_text(pre_nodes, "    url: URL goes here");
      br6 = claim_element(pre_nodes, "BR", {});
      t55 = claim_text(pre_nodes, "image:");
      br7 = claim_element(pre_nodes, "BR", {});
      t56 = claim_text(pre_nodes, "    url: URL goes here");
      br8 = claim_element(pre_nodes, "BR", {});
      t57 = claim_text(pre_nodes, "footer:");
      br9 = claim_element(pre_nodes, "BR", {});
      t58 = claim_text(pre_nodes, "    text: footer text goes here");
      br10 = claim_element(pre_nodes, "BR", {});
      t59 = claim_text(pre_nodes, "---");
      pre_nodes.forEach(detach);
      li8_nodes.forEach(detach);
      ul2_nodes.forEach(detach);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      span6 = claim_element(div2_nodes, "SPAN", { class: true });
      var span6_nodes = children(span6);
      i6 = claim_element(span6_nodes, "I", { class: true });
      var i6_nodes = children(i6);
      t60 = claim_text(i6_nodes, "check");
      i6_nodes.forEach(detach);
      t61 = claim_text(span6_nodes, "New Forum Posts");
      span6_nodes.forEach(detach);
      span7 = claim_element(div2_nodes, "SPAN", { class: true });
      var span7_nodes = children(span7);
      i7 = claim_element(span7_nodes, "I", { class: true });
      var i7_nodes = children(i7);
      t62 = claim_text(i7_nodes, "check");
      i7_nodes.forEach(detach);
      t63 = claim_text(span7_nodes, "Post To Threads");
      span7_nodes.forEach(detach);
      span8 = claim_element(div2_nodes, "SPAN", { class: true });
      var span8_nodes = children(span8);
      i8 = claim_element(span8_nodes, "I", { class: true });
      var i8_nodes = children(i8);
      t64 = claim_text(i8_nodes, "close");
      i8_nodes.forEach(detach);
      t65 = claim_text(span8_nodes, "Components (Buttons & Select Menus)");
      span8_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      claim_component(linkable8.$$.fragment, div3_nodes);
      p12 = claim_element(div3_nodes, "P", {});
      var p12_nodes = children(p12);
      t66 = claim_text(p12_nodes, "A webhook is just an endpoint that you can send data to to make the webhook perform certain actions.");
      p12_nodes.forEach(detach);
      ul3 = claim_element(div3_nodes, "UL", {});
      var ul3_nodes = children(ul3);
      li9 = claim_element(ul3_nodes, "LI", {});
      var li9_nodes = children(li9);
      b3 = claim_element(li9_nodes, "B", {});
      var b3_nodes = children(b3);
      code5 = claim_element(b3_nodes, "CODE", {});
      var code5_nodes = children(code5);
      t67 = claim_text(code5_nodes, "POST /");
      code5_nodes.forEach(detach);
      b3_nodes.forEach(detach);
      t68 = claim_text(li9_nodes, " - Provide the message data as the body to post the message through the webhook. Most embed creation services have a JSON Editor which allows you to copy the JSON data of your message.");
      li9_nodes.forEach(detach);
      li10 = claim_element(ul3_nodes, "LI", {});
      var li10_nodes = children(li10);
      b4 = claim_element(li10_nodes, "B", {});
      var b4_nodes = children(b4);
      code6 = claim_element(b4_nodes, "CODE", {});
      var code6_nodes = children(code6);
      t69 = claim_text(code6_nodes, "PATCH /messages/[message ID]");
      code6_nodes.forEach(detach);
      b4_nodes.forEach(detach);
      t70 = claim_text(li10_nodes, " - Edit a webhook message.");
      li10_nodes.forEach(detach);
      li11 = claim_element(ul3_nodes, "LI", {});
      var li11_nodes = children(li11);
      b5 = claim_element(li11_nodes, "B", {});
      var b5_nodes = children(b5);
      code7 = claim_element(b5_nodes, "CODE", {});
      var code7_nodes = children(code7);
      t71 = claim_text(code7_nodes, "DELETE /messages/[message ID]");
      code7_nodes.forEach(detach);
      b5_nodes.forEach(detach);
      t72 = claim_text(li11_nodes, " - Delete a webhook message.");
      li11_nodes.forEach(detach);
      li12 = claim_element(ul3_nodes, "LI", {});
      var li12_nodes = children(li12);
      b6 = claim_element(li12_nodes, "B", {});
      var b6_nodes = children(b6);
      code8 = claim_element(b6_nodes, "CODE", {});
      var code8_nodes = children(code8);
      t73 = claim_text(code8_nodes, "POST /?thread_id=[thread/post ID]");
      code8_nodes.forEach(detach);
      b6_nodes.forEach(detach);
      t74 = claim_text(li12_nodes, " - Send the message into a specified thread/forum post.");
      li12_nodes.forEach(detach);
      li13 = claim_element(ul3_nodes, "LI", {});
      var li13_nodes = children(li13);
      t75 = claim_text(li13_nodes, "Specify ");
      b7 = claim_element(li13_nodes, "B", {});
      var b7_nodes = children(b7);
      code9 = claim_element(b7_nodes, "CODE", {});
      var code9_nodes = children(code9);
      t76 = claim_text(code9_nodes, "thread_name");
      code9_nodes.forEach(detach);
      b7_nodes.forEach(detach);
      t77 = claim_text(li13_nodes, " in the request body to create a new post in a forum. This is ");
      b8 = claim_element(li13_nodes, "B", {});
      var b8_nodes = children(b8);
      t78 = claim_text(b8_nodes, "only");
      b8_nodes.forEach(detach);
      t79 = claim_text(li13_nodes, " available for forum channels; webhooks cannot create regular threads.");
      li13_nodes.forEach(detach);
      li14 = claim_element(ul3_nodes, "LI", {});
      var li14_nodes = children(li14);
      b9 = claim_element(li14_nodes, "B", {});
      var b9_nodes = children(b9);
      code10 = claim_element(b9_nodes, "CODE", {});
      var code10_nodes = children(code10);
      t80 = claim_text(code10_nodes, "PATCH /");
      code10_nodes.forEach(detach);
      b9_nodes.forEach(detach);
      t81 = claim_text(li14_nodes, " - Edit the ");
      code11 = claim_element(li14_nodes, "CODE", {});
      var code11_nodes = children(code11);
      t82 = claim_text(code11_nodes, "name");
      code11_nodes.forEach(detach);
      t83 = claim_text(li14_nodes, " and/or ");
      code12 = claim_element(li14_nodes, "CODE", {});
      var code12_nodes = children(code12);
      t84 = claim_text(code12_nodes, "avatar");
      code12_nodes.forEach(detach);
      t85 = claim_text(li14_nodes, " of the webhook. YOu cannot edit the channel using this method.");
      li14_nodes.forEach(detach);
      li15 = claim_element(ul3_nodes, "LI", {});
      var li15_nodes = children(li15);
      b10 = claim_element(li15_nodes, "B", {});
      var b10_nodes = children(b10);
      code13 = claim_element(b10_nodes, "CODE", {});
      var code13_nodes = children(code13);
      t86 = claim_text(code13_nodes, "DELETE /");
      code13_nodes.forEach(detach);
      t87 = claim_text(b10_nodes, " - Delete the webhook.");
      b10_nodes.forEach(detach);
      li15_nodes.forEach(detach);
      ul3_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://discohook.org");
      attr(i0, "class", "green material-icons svelte-t192hk");
      attr(span0, "class", "with-icon svelte-t192hk");
      attr(i1, "class", "red material-icons svelte-t192hk");
      attr(span1, "class", "with-icon svelte-t192hk");
      attr(i2, "class", "red material-icons svelte-t192hk");
      attr(span2, "class", "with-icon svelte-t192hk");
      attr(a1, "href", "https://message.style");
      attr(i3, "class", "red material-icons svelte-t192hk");
      attr(span3, "class", "with-icon svelte-t192hk");
      attr(i4, "class", "green material-icons svelte-t192hk");
      attr(span4, "class", "with-icon svelte-t192hk");
      attr(i5, "class", "green material-icons svelte-t192hk");
      attr(span5, "class", "with-icon svelte-t192hk");
      attr(a2, "href", "https://embeds.leaf.moe");
      attr(i6, "class", "green material-icons svelte-t192hk");
      attr(span6, "class", "with-icon svelte-t192hk");
      attr(i7, "class", "green material-icons svelte-t192hk");
      attr(span7, "class", "with-icon svelte-t192hk");
      attr(i8, "class", "red material-icons svelte-t192hk");
      attr(span8, "class", "with-icon svelte-t192hk");
      attr(div3, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, h1);
      append_hydration(h1, t0);
      mount_component(linkable0, div3, null);
      append_hydration(div3, p0);
      append_hydration(p0, t1);
      mount_component(callout0, div3, null);
      mount_component(linkable1, div3, null);
      append_hydration(div3, p1);
      append_hydration(p1, t2);
      append_hydration(p1, b0);
      append_hydration(b0, t3);
      append_hydration(p1, t4);
      mount_component(callout1, div3, null);
      mount_component(linkable2, div3, null);
      append_hydration(div3, p2);
      append_hydration(p2, t5);
      append_hydration(p2, b1);
      append_hydration(b1, t6);
      append_hydration(p2, t7);
      append_hydration(p2, b2);
      append_hydration(b2, t8);
      append_hydration(div3, p3);
      append_hydration(p3, t9);
      append_hydration(div3, p4);
      append_hydration(p4, t10);
      mount_component(linkable3, div3, null);
      append_hydration(div3, p5);
      append_hydration(p5, t11);
      append_hydration(div3, ul1);
      append_hydration(ul1, li0);
      append_hydration(li0, t12);
      append_hydration(ul1, li1);
      append_hydration(li1, t13);
      append_hydration(ul1, li2);
      append_hydration(li2, t14);
      append_hydration(ul1, li4);
      append_hydration(li4, t15);
      append_hydration(li4, ul0);
      append_hydration(ul0, li3);
      append_hydration(li3, t16);
      mount_component(linkable4, div3, null);
      mount_component(linkable5, div3, null);
      append_hydration(div3, p6);
      append_hydration(p6, a0);
      append_hydration(a0, t17);
      append_hydration(div3, p7);
      append_hydration(p7, t18);
      append_hydration(div3, div0);
      append_hydration(div0, span0);
      append_hydration(span0, i0);
      append_hydration(i0, t19);
      append_hydration(span0, t20);
      append_hydration(div0, span1);
      append_hydration(span1, i1);
      append_hydration(i1, t21);
      append_hydration(span1, t22);
      append_hydration(div0, span2);
      append_hydration(span2, i2);
      append_hydration(i2, t23);
      append_hydration(span2, t24);
      append_hydration(div3, br0);
      mount_component(callout2, div3, null);
      mount_component(linkable6, div3, null);
      append_hydration(div3, p8);
      append_hydration(p8, a1);
      append_hydration(a1, t25);
      append_hydration(div3, p9);
      append_hydration(p9, t26);
      append_hydration(div3, div1);
      append_hydration(div1, span3);
      append_hydration(span3, i3);
      append_hydration(i3, t27);
      append_hydration(span3, t28);
      append_hydration(div1, span4);
      append_hydration(span4, i4);
      append_hydration(i4, t29);
      append_hydration(span4, t30);
      append_hydration(div1, span5);
      append_hydration(span5, i5);
      append_hydration(i5, t31);
      append_hydration(span5, t32);
      mount_component(linkable7, div3, null);
      append_hydration(div3, p10);
      append_hydration(p10, a2);
      append_hydration(a2, t33);
      append_hydration(div3, p11);
      append_hydration(p11, t34);
      append_hydration(div3, ul2);
      append_hydration(ul2, li5);
      append_hydration(li5, t35);
      append_hydration(li5, code0);
      append_hydration(code0, t36);
      append_hydration(li5, t37);
      append_hydration(ul2, li6);
      append_hydration(li6, t38);
      append_hydration(li6, code1);
      append_hydration(code1, t39);
      append_hydration(li6, t40);
      append_hydration(li6, code2);
      append_hydration(code2, t41);
      append_hydration(li6, t42);
      append_hydration(li6, code3);
      append_hydration(code3, t43);
      append_hydration(li6, t44);
      append_hydration(ul2, li7);
      append_hydration(li7, t45);
      append_hydration(li7, code4);
      append_hydration(code4, t46);
      append_hydration(li7, t47);
      append_hydration(ul2, li8);
      append_hydration(li8, t48);
      append_hydration(li8, pre);
      append_hydration(pre, t49);
      append_hydration(pre, br1);
      append_hydration(pre, t50);
      append_hydration(pre, br2);
      append_hydration(pre, t51);
      append_hydration(pre, br3);
      append_hydration(pre, t52);
      append_hydration(pre, br4);
      append_hydration(pre, t53);
      append_hydration(pre, br5);
      append_hydration(pre, t54);
      append_hydration(pre, br6);
      append_hydration(pre, t55);
      append_hydration(pre, br7);
      append_hydration(pre, t56);
      append_hydration(pre, br8);
      append_hydration(pre, t57);
      append_hydration(pre, br9);
      append_hydration(pre, t58);
      append_hydration(pre, br10);
      append_hydration(pre, t59);
      append_hydration(div3, div2);
      append_hydration(div2, span6);
      append_hydration(span6, i6);
      append_hydration(i6, t60);
      append_hydration(span6, t61);
      append_hydration(div2, span7);
      append_hydration(span7, i7);
      append_hydration(i7, t62);
      append_hydration(span7, t63);
      append_hydration(div2, span8);
      append_hydration(span8, i8);
      append_hydration(i8, t64);
      append_hydration(span8, t65);
      mount_component(linkable8, div3, null);
      append_hydration(div3, p12);
      append_hydration(p12, t66);
      append_hydration(div3, ul3);
      append_hydration(ul3, li9);
      append_hydration(li9, b3);
      append_hydration(b3, code5);
      append_hydration(code5, t67);
      append_hydration(li9, t68);
      append_hydration(ul3, li10);
      append_hydration(li10, b4);
      append_hydration(b4, code6);
      append_hydration(code6, t69);
      append_hydration(li10, t70);
      append_hydration(ul3, li11);
      append_hydration(li11, b5);
      append_hydration(b5, code7);
      append_hydration(code7, t71);
      append_hydration(li11, t72);
      append_hydration(ul3, li12);
      append_hydration(li12, b6);
      append_hydration(b6, code8);
      append_hydration(code8, t73);
      append_hydration(li12, t74);
      append_hydration(ul3, li13);
      append_hydration(li13, t75);
      append_hydration(li13, b7);
      append_hydration(b7, code9);
      append_hydration(code9, t76);
      append_hydration(li13, t77);
      append_hydration(li13, b8);
      append_hydration(b8, t78);
      append_hydration(li13, t79);
      append_hydration(ul3, li14);
      append_hydration(li14, b9);
      append_hydration(b9, code10);
      append_hydration(code10, t80);
      append_hydration(li14, t81);
      append_hydration(li14, code11);
      append_hydration(code11, t82);
      append_hydration(li14, t83);
      append_hydration(li14, code12);
      append_hydration(code12, t84);
      append_hydration(li14, t85);
      append_hydration(ul3, li15);
      append_hydration(li15, b10);
      append_hydration(b10, code13);
      append_hydration(code13, t86);
      append_hydration(b10, t87);
      current = true;
    },
    p(ctx2, dirty) {
      const callout0_changes = {};
      if (dirty & /*$$scope*/
      1) {
        callout0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout0.$set(callout0_changes);
      const callout1_changes = {};
      if (dirty & /*$$scope*/
      1) {
        callout1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout1.$set(callout1_changes);
      const callout2_changes = {};
      if (dirty & /*$$scope*/
      1) {
        callout2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      callout2.$set(callout2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(linkable0.$$.fragment, local);
      transition_in(callout0.$$.fragment, local);
      transition_in(linkable1.$$.fragment, local);
      transition_in(callout1.$$.fragment, local);
      transition_in(linkable2.$$.fragment, local);
      transition_in(linkable3.$$.fragment, local);
      transition_in(linkable4.$$.fragment, local);
      transition_in(linkable5.$$.fragment, local);
      transition_in(callout2.$$.fragment, local);
      transition_in(linkable6.$$.fragment, local);
      transition_in(linkable7.$$.fragment, local);
      transition_in(linkable8.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(callout0.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(callout1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      transition_out(linkable4.$$.fragment, local);
      transition_out(linkable5.$$.fragment, local);
      transition_out(callout2.$$.fragment, local);
      transition_out(linkable6.$$.fragment, local);
      transition_out(linkable7.$$.fragment, local);
      transition_out(linkable8.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(linkable0);
      destroy_component(callout0);
      destroy_component(linkable1);
      destroy_component(callout1);
      destroy_component(linkable2);
      destroy_component(linkable3);
      destroy_component(linkable4);
      destroy_component(linkable5);
      destroy_component(callout2);
      destroy_component(linkable6);
      destroy_component(linkable7);
      destroy_component(linkable8);
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
