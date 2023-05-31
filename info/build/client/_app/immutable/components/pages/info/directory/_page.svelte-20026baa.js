import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, k as element, x as create_component, c as claim_space, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, G as append_hydration, a5 as HtmlTagHydration, a6 as claim_html_tag, H as listen, u as set_data } from "../../../../chunks/index-c4baf36c.js";
import { L as Linkable } from "../../../../chunks/Linkable-8089c9ad.js";
import { N as Navigation } from "../../../../chunks/Navigation-82debefb.js";
function create_if_block_1(ctx) {
  let style;
  let t;
  return {
    c() {
      style = element("style");
      t = text("u {\n  text-decoration: none;\n}");
      this.h();
    },
    l(nodes) {
      style = claim_element(nodes, "STYLE", { lang: true });
      var style_nodes = children(style);
      t = claim_text(style_nodes, "u {\n  text-decoration: none;\n}");
      style_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(style, "lang", "scss");
    },
    m(target, anchor) {
      insert_hydration(target, style, anchor);
      append_hydration(style, t);
    },
    d(detaching) {
      if (detaching)
        detach(style);
    }
  };
}
function create_else_block(ctx) {
  let t;
  return {
    c() {
      t = text("a place to pick up optional ping and access roles");
    },
    l(nodes) {
      t = claim_text(nodes, "a place to pick up optional ping and access roles");
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
function create_if_block(ctx) {
  let t0;
  let ul;
  let li0;
  let t1;
  let li1;
  let t2;
  let li2;
  let t3;
  return {
    c() {
      t0 = text("You can assign yourself roles here:");
      ul = element("ul");
      li0 = element("li");
      t1 = text("Please assign yourself a pronoun role. Even if you believe it may be obvious, let's work together to ensure everyone is comfortable using these roles and allow everyone to communicate in a way that makes them feel welcome here.");
      li1 = element("li");
      t2 = text("You can assign yourself ping roles for announcements, new applicants (servers applying to the TCN), new council members (this role is pinged 24+ hours before new people are added to HQ except if they are inducted), and weekly summaries.");
      li2 = element("li");
      t3 = text("Finally, we have the Honkai channel and NSFW channel access roles and the Hangout Ping role, which is pinged from time to time for informal/unofficial hangout events or voice calls.");
    },
    l(nodes) {
      t0 = claim_text(nodes, "You can assign yourself roles here:");
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      t1 = claim_text(li0_nodes, "Please assign yourself a pronoun role. Even if you believe it may be obvious, let's work together to ensure everyone is comfortable using these roles and allow everyone to communicate in a way that makes them feel welcome here.");
      li0_nodes.forEach(detach);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      t2 = claim_text(li1_nodes, "You can assign yourself ping roles for announcements, new applicants (servers applying to the TCN), new council members (this role is pinged 24+ hours before new people are added to HQ except if they are inducted), and weekly summaries.");
      li1_nodes.forEach(detach);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t3 = claim_text(li2_nodes, "Finally, we have the Honkai channel and NSFW channel access roles and the Hangout Ping role, which is pinged from time to time for informal/unofficial hangout events or voice calls.");
      li2_nodes.forEach(detach);
      ul_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, ul, anchor);
      append_hydration(ul, li0);
      append_hydration(li0, t1);
      append_hydration(ul, li1);
      append_hydration(li1, t2);
      append_hydration(ul, li2);
      append_hydration(li2, t3);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(ul);
    }
  };
}
function create_default_slot(ctx) {
  let div;
  let h1;
  let t0;
  let p;
  let a0;
  let raw0_value = (
    /*full*/
    ctx[0] ? "View Simplified Version" : "View Full Descriptions"
  );
  let linkable0;
  let ul0;
  let li0;
  let u0;
  let b0;
  let t1;
  let t2;
  let html_tag;
  let raw1_value = (
    /*full*/
    ctx[0] ? "This is the size of the TCN council. If this is showing as #/#, then the number of users in the server is not matching the expected number of council members." : "the number of members in the TCN council"
  );
  let li1;
  let u1;
  let b1;
  let t3;
  let t4;
  let html_tag_1;
  let raw2_value = (
    /*full*/
    ctx[0] ? "This is the number of votes available, also the number of servers. If this is showing as #/#/#, then the number of people with the voter role, the number of voters in the API, and the number of servers in the network do not match." : "the number of votes available (= the number of servers)"
  );
  let li2;
  let u2;
  let b2;
  let t5;
  let t6;
  let html_tag_2;
  let raw3_value = (
    /*full*/
    ctx[0] ? "This is the number of votes required for minor votes, which is 60% of the number of votes rounded up." : "the number of votes required for minor votes"
  );
  let li3;
  let u3;
  let b3;
  let t7;
  let t8;
  let html_tag_3;
  let raw4_value = (
    /*full*/
    ctx[0] ? "This is the number of votes reuqired for major votes, which is 75% of the number of votes rounded up." : "the number of votes required for major votes"
  );
  let linkable1;
  let ul1;
  let li4;
  let u4;
  let b4;
  let t9;
  let t10;
  let html_tag_4;
  let raw5_value = (
    /*full*/
    ctx[0] ? `Initial landing information including HQ rules and expectations. If you're a bit confused by the setup instructions there, you may want to check out the <a href="/info/quickstart">quickstart guide</a>.` : "our landing channel which contains some basic information that you should know and some HQ-specific rules"
  );
  let li5;
  let u5;
  let b5;
  let t11;
  let t12;
  let html_tag_5;
  let raw6_value = (
    /*full*/
    ctx[0] ? "This is a short-form directory of our channel structure." : "this page in embed form"
  );
  let li6;
  let u6;
  let b6;
  let t13;
  let t14;
  let html_tag_6;
  let raw7_value = (
    /*full*/
    ctx[0] ? `ELI5 stands for "Explain Like I'm 5" - this is an extremely simplified version of the TCN rules. Note that in the case of a contradiction, the full rules <a href="/info/rules">here</a> are correct and not the ELI5 version, so this is not a substitute for reading the rules, but can be good to remind you of what rules exist and where to find a specific rule.` : `the <a href="/info/rules">TCN rules</a>, summarized into ELI5 ("Explain Like I'm 5") format`
  );
  let li7;
  let u7;
  let b7;
  let t15;
  let t16;
  let li8;
  let u8;
  let b8;
  let t17;
  let t18;
  let html_tag_7;
  let raw8_value = (
    /*full*/
    ctx[0] ? "This is the list of TCN partners. This is not the format you should follow for your partner embeds; this is a full list including information like the server ID, character element, weapon, and region, and the council members for each." : "a full list of TCN partners and their council members"
  );
  let linkable2;
  let ul2;
  let li9;
  let u9;
  let b9;
  let t19;
  let t20;
  let html_tag_8;
  let raw9_value = (
    /*full*/
    ctx[0] ? "Here, you can find news and updates for the network or the HQ server. You can pick up the ping role in <b>#react-roles</b> to be notified. We will ping <code>@everyone</code> when the partner embed changes to make sure everyone is aware of updates." : "important HQ news and announcements"
  );
  let li10;
  let u10;
  let b10;
  let t21;
  let t22;
  let html_tag_9;
  let raw10_value = (
    /*full*/
    ctx[0] ? "Here is where observers publish their reports for servers. Make sure you check these over and notify us of any issues you may notice. We will release the reports in advance of the vote to give some time for review and feedback." : "observation reports for applicant servers"
  );
  let li11;
  let u11;
  let b11;
  let t23;
  let t24;
  let html_tag_10;
  let raw11_value = (
    /*full*/
    ctx[0] ? "Here is where summaries for discussions are posted. If you miss any long or important discussions, check here to see if there is a summary, and if not, you can request that we make one to give the highlights of the conversation. Additionally, each week, a summary of ongoing events, the past week, and upcoming plans is posted. You can pick up the ping role in <b>#react-roles</b> to be notified when this is posted." : "summaries for important discussions as well as weekly summaries"
  );
  let linkable3;
  let ul3;
  let li12;
  let u12;
  let b12;
  let t25;
  let t26;
  let html_tag_11;
  let raw12_value = (
    /*full*/
    ctx[0] ? "Here is where votes are posted for things like network rule changes, inductions, etc. If you are eligible to vote, you will automatically have the ping role. If you notice any issues with this system, please contact <b>HyperNeutrino#1759</b> or ping him in <b>#dev-chat</b>." : "where votes are posted"
  );
  let li13;
  let u13;
  let b13;
  let t27;
  let t28;
  let html_tag_12;
  let raw13_value = (
    /*full*/
    ctx[0] ? "Here is where your suggestions can be posted. Some things may be implemented directly following approval of the suggestion; specifically, changes that do not require formal votes such as adding new channels to HQ. Other things may go to a formal vote instead. All non-standard votes must be suggested 24 hours before the vote opens and you do not need to use the suggestion system; you can bring it up in <b>#official-business</b> or <b>#tcn-discussion</b>, but this is an easy way to gauge the council's consensus. Use <code>/suggest</code> in <b>#bot-commands</b>." : "use <code>/suggest</code> in <b>bot-commands</b> to post a suggestion"
  );
  let li14;
  let u14;
  let b14;
  let t29;
  let t30;
  let html_tag_13;
  let raw14_value = (
    /*full*/
    ctx[0] ? 'This is where election nominations and statements will be posted. See the <a href="/info/voting">voting page</a> for information.' : 'election nominations and statements are posted here (<a href="/info/voting">more info</a>)'
  );
  let li15;
  let u15;
  let b15;
  let t31;
  let t32;
  let html_tag_14;
  let raw15_value = (
    /*full*/
    ctx[0] ? 'This is the help channel for voting. The information here is more or less the same as in the voting info page <a href="/info/voting">here</a>.' : 'information on how to use the voting system (<a href="/info/voting">more info</a>)'
  );
  let linkable4;
  let ul4;
  let li16;
  let u16;
  let b16;
  let t33;
  let t34;
  let html_tag_15;
  let raw16_value = (
    /*full*/
    ctx[0] ? 'This is where banshares are posted after being submitted to <a href="https://banshare.teyvatcollective.network">https://banshare.teyvatcollective.network</a>. See <a href="/banshares">this page</a> for how to set it up.' : 'where banshares are first posted and published from (<a href="/info/banshares">more info</a>)'
  );
  let li17;
  let u17;
  let b17;
  let t35;
  let t36;
  let html_tag_16;
  let raw17_value = (
    /*full*/
    ctx[0] ? "Here, you can discuss banshares, ask for more info on problematic users that you are contemplating bansharing, or post informal banshares that you think are not solid enough to publish across the network or that you only want to make available to council members at their discretion." : `discussion about banshares, or bringing up "unofficial" banshares that you don't want to publish`
  );
  let li18;
  let u18;
  let b18;
  let t37;
  let t38;
  let html_tag_17;
  let raw18_value = (
    /*full*/
    ctx[0] ? 'This is the help channel for banshares. The information here is more or less the same as on <a href="/info/banshares">this page</a>.' : 'how to use banshares (also see <a href="/info/banshares">this page</a>)'
  );
  let linkable5;
  let ul5;
  let li19;
  let u19;
  let b19;
  let t39;
  let t40;
  let t41_value = (
    /*full*/
    ctx[0] ? "T" : "t"
  );
  let t41;
  let t42;
  let a1;
  let t43;
  let t44;
  let li20;
  let u20;
  let b20;
  let t45;
  let t46;
  let html_tag_18;
  let raw19_value = (
    /*full*/
    ctx[0] ? 'This is the logging channel for the TCN global chats. If you need to find purged messages or view edit history for global channels, you can find them here, no matter which server they originated from. Find more information on global channels <a href="/info/global">here</a>.' : 'edit, delete, and ban logs for global channels (<a href="/info/global">more info</a>)'
  );
  let li21;
  let u21;
  let b21;
  let t47;
  let t48;
  let html_tag_19;
  let raw20_value = (
    /*full*/
    ctx[0] ? "As the name suggests, this is the bot command channel. Feel free to spam bot commands here. You can use bot commands elsewhere when appropriate, but this channel exists for spam." : "use bot commands here"
  );
  let li22;
  let u22;
  let b22;
  let t49;
  let t50;
  let html_tag_20;
  let raw21_value = (
    /*full*/
    ctx[0] ? "This is the announcement channel for cross-promoting events. It is mandatory to have a publicly visible channel following this announcement channel in each TCN server. If you would like to promote an event involving at least one TCN server, check the pins here for a webhook URL and notify an observer to publish it. Please mention that it's ready for posting so we know you've had a chance to look over its final version and check for any errors you may have missed." : "the event feed for TCN servers' events (you must follow this in your server)"
  );
  let li23;
  let u23;
  let b23;
  let t51;
  let t52;
  let html_tag_21;
  let raw22_value = (
    /*full*/
    ctx[0] ? "This is for discussing anything event-related. Typically, it is used for pointing out issues or requesting clarifications with cross-promoted events or asking an observer to publish one, but you can also discuss potential collabs with other TCN servers here." : "discuss events posted in <b>#network-events</b>, co-ordinate with other servers, etc."
  );
  let linkable6;
  let ul6;
  let li24;
  let u24;
  let b24;
  let t53;
  let t54;
  let html_tag_22;
  let raw23_value = (
    /*full*/
    ctx[0] ? "New applicants to the TCN will be posted here and a ping will automatically be sent for people with the New Applicant Alert role (which you can obtain from #react-roles). Please bring up any opinions or history you have regarding the server that you would like to share with the rest of the network and let an observer know if you want to start a rejection vote to deny observation to the applicant." : "applicant servers will be posted here"
  );
  let li25;
  let u25;
  let b25;
  let t55;
  let t56;
  let html_tag_23;
  let raw24_value = (
    /*full*/
    ctx[0] ? "This channel is for discussion one-on-one partnerships with non-TCN servers. If you received a partnership request and you want more information on the server, start a discussion forum post here for that server. Make sure you check if anyone else has posted about them yet and read the pinned FAQ post first." : "discuss non-TCN partnership applications or affiliations here (see the pinned FAQ)"
  );
  let li26;
  let u26;
  let b26;
  let t57;
  let t58;
  let html_tag_24;
  let raw25_value = (
    /*full*/
    ctx[0] ? "This is the primary discussion channel for things like reports (not observation reports, but reports on users), bringing up concerns, etc. Compared to <b>#tcn-discussion</b>, this is more external, but the distinction is not too important." : "official discussion channel for HQ or network things, often used for things like reports, concerns, etc."
  );
  let li27;
  let u27;
  let b27;
  let t59;
  let t60;
  let html_tag_25;
  let raw26_value = (
    /*full*/
    ctx[0] ? "This is the secondary discussion channel for things like improvements to the network or HQ, proposed changes, etc. Compared to <b>#official-business</b>, this is more internal, but the distinction is not too important. If in doubt, just post to <b>#official-business</b>, and if there is an ongoing conversation, post here as an overflow." : "official discussion channel for the TCN, often used for things like discussing TCN changes, network management, etc."
  );
  let li28;
  let u28;
  let b28;
  let t61;
  let t62;
  let html_tag_26;
  let raw27_value = (
    /*full*/
    ctx[0] ? "This channel is for discussions related to anything about development. Its primary purpose is so everyone can contribute to discussions regarding TCN dev projects such as the global bot, TCN systems like Paimon/Akasha System, the TCN management bot, the banshare system and website, etc. This includes suggestions, bug reports, updates from devs, etc. If you want to ask questions or discuss other dev projects, you may do so here, but consider using <b>#dev-chat</b> in the TCN Hub, as you may find more active developers there. For questions about using these bots or any other technical questions, <b>#ask-questions</b> is still more appropriate." : "development-related discussions/conversations; also report bugs or provide feedback for TCN dev projects here"
  );
  let li29;
  let u29;
  let b29;
  let t63;
  let t64;
  let html_tag_27;
  let raw28_value = (
    /*full*/
    ctx[0] ? "This is the public read-only observer discussion channel. The goal is to increase transparency, so when possible, observers will discuss their work here instead of privately. Feel free to bring up any questions or issues in a discussion channel." : "read-only channel for observers to transparently discuss some things"
  );
  let li30;
  let u30;
  let b30;
  let t65;
  let t66;
  let html_tag_28;
  let raw29_value = (
    /*full*/
    ctx[0] ? "This is our to-do list / task board. Ask an observer if you would like a project to be added here. Feel free to contribute to discussions and add your opinion to project threads." : "a list of projects the TCN is working on and their progress"
  );
  let linkable7;
  let ul7;
  let li31;
  let u31;
  let b31;
  let t67;
  let t68;
  let html_tag_29;
  let raw30_value = (
    /*full*/
    ctx[0] ? "This is a general Q&A channel. You can ask for advice, information on certain users, help with TCN bots or other bots, etc." : "for asking any questions to your fellow council members"
  );
  let li32;
  let u32;
  let b32;
  let t69;
  let t70;
  let html_tag_30;
  let raw31_value = (
    /*full*/
    ctx[0] ? "This is where you can find bots, emoji, and other server resources that other council members have recommended. If you come across anything you think might interest or benefit other TCN servers, feel free to introduce it to the network here!" : "feel free to post bots, emoji, asset shops, etc. for other people to see"
  );
  let linkable8;
  let ul8;
  let li33;
  let u33;
  let b33;
  let t71;
  let t72;
  let html_tag_31;
  let raw32_value = (
    /*full*/
    ctx[0] ? "Introduce yourself here! If you want to redo your introduction, you can edit it in-place, but if there’s important information you want everyone to see again e.g. you have changed your pronouns, you can repost it, just please delete the old version." : "feel free to introduce yourself here"
  );
  let li34;
  let u34;
  let b34;
  let t73;
  let t74;
  let html_tag_32;
  let raw33_value = (
    /*full*/
    ctx[0] ? "General chatter; there is no topic for this channel. The expectations of civility still apply, obviously, and feel free to create threads if you want to have more spammy conversations or post a bunch of images." : "main (topicless) conversation channel"
  );
  let li35;
  let u35;
  let b35;
  let t75;
  let t76;
  let html_tag_33;
  let raw34_value = (
    /*full*/
    ctx[0] ? "Channel for Honkai Impact and Honkai Star Rail. You can gain access to this channel with the access role in <b>#react-roles</b>." : "Honkai Impact + Honkai Star Rail"
  );
  let li36;
  let u36;
  let b36;
  let t77;
  let t78;
  let html_tag_34;
  let raw35_value = (
    /*full*/
    ctx[0] ? "This is the NSFW channel. You must be 18+ years of age to access this channel. You can gain access to this channel with the access role in <b>#react-roles</b>. If we find that you are accessing this channel and are not yet 18, we may be forced to ban you to enforce ToS, so don't do it." : "NSFW channel (must be 18+ to access)"
  );
  let li37;
  let u37;
  let b37;
  let t79;
  let t80;
  let html_tag_35;
  let raw36_value = (
    /*full*/
    ctx[0] ? "This is the leaks channel. Please post any leaks here and not in other channels to avoid spoiling things for others." : "leaks discussion; avoid this if you don't want spoilers or leaks"
  );
  let li38;
  let u38;
  let b38;
  let t81;
  let t82;
  let html_tag_36;
  let raw37_value = (
    /*full*/
    ctx[0] ? "Messages require 4 stars to reach the starboard." : "4 stars required"
  );
  let li39;
  let u39;
  let b39;
  let t83;
  let t84;
  let html_tag_37;
  let raw38_value = (
    /*full*/
    ctx[0] ? "No-mic channel for the voice channel(s)." : "no-mic channel"
  );
  let li40;
  let u40;
  let b40;
  let t85;
  let t86;
  let html_tag_38;
  let raw39_value = (
    /*full*/
    ctx[0] ? "Our only voice channel. If you think we need more, let us know!" : "general voice channel"
  );
  let current;
  let mounted;
  let dispose;
  linkable0 = new Linkable({
    props: { id: "stats", e: "h3", value: "Stats" }
  });
  linkable1 = new Linkable({
    props: {
      id: "information",
      e: "h3",
      value: "Information"
    }
  });
  function select_block_type(ctx2, dirty) {
    if (
      /*full*/
      ctx2[0]
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  linkable2 = new Linkable({
    props: {
      id: "important",
      e: "h3",
      value: "Important"
    }
  });
  linkable3 = new Linkable({
    props: { id: "voting", e: "h3", value: "Voting" }
  });
  linkable4 = new Linkable({
    props: {
      id: "banshares",
      e: "h3",
      value: "Banshares"
    }
  });
  linkable5 = new Linkable({
    props: {
      id: "business",
      e: "h3",
      value: "Business"
    }
  });
  linkable6 = new Linkable({
    props: {
      id: "discussions",
      e: "h3",
      value: "Discussions"
    }
  });
  linkable7 = new Linkable({
    props: { id: "help", e: "h3", value: "Help" }
  });
  linkable8 = new Linkable({
    props: { id: "general", e: "h3", value: "General" }
  });
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Directory");
      p = element("p");
      a0 = element("a");
      create_component(linkable0.$$.fragment);
      ul0 = element("ul");
      li0 = element("li");
      u0 = element("u");
      b0 = element("b");
      t1 = text("Members: #");
      t2 = text(" - ");
      html_tag = new HtmlTagHydration(false);
      li1 = element("li");
      u1 = element("u");
      b1 = element("b");
      t3 = text("Max Votes: #");
      t4 = text(" - ");
      html_tag_1 = new HtmlTagHydration(false);
      li2 = element("li");
      u2 = element("u");
      b2 = element("b");
      t5 = text("Quorum: #/#");
      t6 = text(" - ");
      html_tag_2 = new HtmlTagHydration(false);
      li3 = element("li");
      u3 = element("u");
      b3 = element("b");
      t7 = text("Higher Quorum: #/#");
      t8 = text(" - ");
      html_tag_3 = new HtmlTagHydration(false);
      create_component(linkable1.$$.fragment);
      ul1 = element("ul");
      li4 = element("li");
      u4 = element("u");
      b4 = element("b");
      t9 = text("info-and-rules");
      t10 = text(" - ");
      html_tag_4 = new HtmlTagHydration(false);
      li5 = element("li");
      u5 = element("u");
      b5 = element("b");
      t11 = text("directory");
      t12 = text(" - ");
      html_tag_5 = new HtmlTagHydration(false);
      li6 = element("li");
      u6 = element("u");
      b6 = element("b");
      t13 = text("eli5-tcn-rules");
      t14 = text(" - ");
      html_tag_6 = new HtmlTagHydration(false);
      li7 = element("li");
      u7 = element("u");
      b7 = element("b");
      t15 = text("react-roles");
      t16 = text(" -");
      if_block.c();
      li8 = element("li");
      u8 = element("u");
      b8 = element("b");
      t17 = text("partner-list");
      t18 = text(" - ");
      html_tag_7 = new HtmlTagHydration(false);
      create_component(linkable2.$$.fragment);
      ul2 = element("ul");
      li9 = element("li");
      u9 = element("u");
      b9 = element("b");
      t19 = text("announcements");
      t20 = text(" - ");
      html_tag_8 = new HtmlTagHydration(false);
      li10 = element("li");
      u10 = element("u");
      b10 = element("b");
      t21 = text("reports");
      t22 = text(" - ");
      html_tag_9 = new HtmlTagHydration(false);
      li11 = element("li");
      u11 = element("u");
      b11 = element("b");
      t23 = text("summaries");
      t24 = text(" - ");
      html_tag_10 = new HtmlTagHydration(false);
      create_component(linkable3.$$.fragment);
      ul3 = element("ul");
      li12 = element("li");
      u12 = element("u");
      b12 = element("b");
      t25 = text("vote-here");
      t26 = text(" - ");
      html_tag_11 = new HtmlTagHydration(false);
      li13 = element("li");
      u13 = element("u");
      b13 = element("b");
      t27 = text("vote-suggestions");
      t28 = text(" - ");
      html_tag_12 = new HtmlTagHydration(false);
      li14 = element("li");
      u14 = element("u");
      b14 = element("b");
      t29 = text("elections");
      t30 = text(" - ");
      html_tag_13 = new HtmlTagHydration(false);
      li15 = element("li");
      u15 = element("u");
      b15 = element("b");
      t31 = text("vote-help");
      t32 = text(" - ");
      html_tag_14 = new HtmlTagHydration(false);
      create_component(linkable4.$$.fragment);
      ul4 = element("ul");
      li16 = element("li");
      u16 = element("u");
      b16 = element("b");
      t33 = text("ban-share-logs");
      t34 = text(" - ");
      html_tag_15 = new HtmlTagHydration(false);
      li17 = element("li");
      u17 = element("u");
      b17 = element("b");
      t35 = text("ban-share-chat");
      t36 = text(" - ");
      html_tag_16 = new HtmlTagHydration(false);
      li18 = element("li");
      u18 = element("u");
      b18 = element("b");
      t37 = text("ban-share-guide");
      t38 = text(" - ");
      html_tag_17 = new HtmlTagHydration(false);
      create_component(linkable5.$$.fragment);
      ul5 = element("ul");
      li19 = element("li");
      u19 = element("u");
      b19 = element("b");
      t39 = text("akasha-terminal");
      t40 = text(" - ");
      t41 = text(t41_value);
      t42 = text("he ");
      a1 = element("a");
      t43 = text("Akasha Terminal");
      t44 = text(", our centralized information management system.");
      li20 = element("li");
      u20 = element("u");
      b20 = element("b");
      t45 = text("global-logs");
      t46 = text(" - ");
      html_tag_18 = new HtmlTagHydration(false);
      li21 = element("li");
      u21 = element("u");
      b21 = element("b");
      t47 = text("bot-commands");
      t48 = text(" - ");
      html_tag_19 = new HtmlTagHydration(false);
      li22 = element("li");
      u22 = element("u");
      b22 = element("b");
      t49 = text("network-events");
      t50 = text(" - ");
      html_tag_20 = new HtmlTagHydration(false);
      li23 = element("li");
      u23 = element("u");
      b23 = element("b");
      t51 = text("event-discussion");
      t52 = text(" - ");
      html_tag_21 = new HtmlTagHydration(false);
      create_component(linkable6.$$.fragment);
      ul6 = element("ul");
      li24 = element("li");
      u24 = element("u");
      b24 = element("b");
      t53 = text("applicants");
      t54 = text(" - ");
      html_tag_22 = new HtmlTagHydration(false);
      li25 = element("li");
      u25 = element("u");
      b25 = element("b");
      t55 = text("partner-discussion");
      t56 = text(" - ");
      html_tag_23 = new HtmlTagHydration(false);
      li26 = element("li");
      u26 = element("u");
      b26 = element("b");
      t57 = text("official-business");
      t58 = text(" - ");
      html_tag_24 = new HtmlTagHydration(false);
      li27 = element("li");
      u27 = element("u");
      b27 = element("b");
      t59 = text("tcn-discussion");
      t60 = text(" - ");
      html_tag_25 = new HtmlTagHydration(false);
      li28 = element("li");
      u28 = element("u");
      b28 = element("b");
      t61 = text("dev-chat");
      t62 = text(" - ");
      html_tag_26 = new HtmlTagHydration(false);
      li29 = element("li");
      u29 = element("u");
      b29 = element("b");
      t63 = text("observer-chat");
      t64 = text(" - ");
      html_tag_27 = new HtmlTagHydration(false);
      li30 = element("li");
      u30 = element("u");
      b30 = element("b");
      t65 = text("project-board");
      t66 = text(" - ");
      html_tag_28 = new HtmlTagHydration(false);
      create_component(linkable7.$$.fragment);
      ul7 = element("ul");
      li31 = element("li");
      u31 = element("u");
      b31 = element("b");
      t67 = text("ask-questions");
      t68 = text(" - ");
      html_tag_29 = new HtmlTagHydration(false);
      li32 = element("li");
      u32 = element("u");
      b32 = element("b");
      t69 = text("assets");
      t70 = text(" - ");
      html_tag_30 = new HtmlTagHydration(false);
      create_component(linkable8.$$.fragment);
      ul8 = element("ul");
      li33 = element("li");
      u33 = element("u");
      b33 = element("b");
      t71 = text("introductions");
      t72 = text(" - ");
      html_tag_31 = new HtmlTagHydration(false);
      li34 = element("li");
      u34 = element("u");
      b34 = element("b");
      t73 = text("general");
      t74 = text(" - ");
      html_tag_32 = new HtmlTagHydration(false);
      li35 = element("li");
      u35 = element("u");
      b35 = element("b");
      t75 = text("honkai");
      t76 = text(" - ");
      html_tag_33 = new HtmlTagHydration(false);
      li36 = element("li");
      u36 = element("u");
      b36 = element("b");
      t77 = text("coomer-content");
      t78 = text(" - ");
      html_tag_34 = new HtmlTagHydration(false);
      li37 = element("li");
      u37 = element("u");
      b37 = element("b");
      t79 = text("genshin-leaks");
      t80 = text(" - ");
      html_tag_35 = new HtmlTagHydration(false);
      li38 = element("li");
      u38 = element("u");
      b38 = element("b");
      t81 = text("starboard");
      t82 = text(" - ");
      html_tag_36 = new HtmlTagHydration(false);
      li39 = element("li");
      u39 = element("u");
      b39 = element("b");
      t83 = text("vc-text");
      t84 = text(" - ");
      html_tag_37 = new HtmlTagHydration(false);
      li40 = element("li");
      u40 = element("u");
      b40 = element("b");
      t85 = text("General");
      t86 = text(" - ");
      html_tag_38 = new HtmlTagHydration(false);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Directory");
      h1_nodes.forEach(detach);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      a0 = claim_element(p_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      a0_nodes.forEach(detach);
      p_nodes.forEach(detach);
      claim_component(linkable0.$$.fragment, div_nodes);
      ul0 = claim_element(div_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      u0 = claim_element(li0_nodes, "U", {});
      var u0_nodes = children(u0);
      b0 = claim_element(u0_nodes, "B", {});
      var b0_nodes = children(b0);
      t1 = claim_text(b0_nodes, "Members: #");
      b0_nodes.forEach(detach);
      u0_nodes.forEach(detach);
      t2 = claim_text(li0_nodes, " - ");
      html_tag = claim_html_tag(li0_nodes, false);
      li0_nodes.forEach(detach);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      u1 = claim_element(li1_nodes, "U", {});
      var u1_nodes = children(u1);
      b1 = claim_element(u1_nodes, "B", {});
      var b1_nodes = children(b1);
      t3 = claim_text(b1_nodes, "Max Votes: #");
      b1_nodes.forEach(detach);
      u1_nodes.forEach(detach);
      t4 = claim_text(li1_nodes, " - ");
      html_tag_1 = claim_html_tag(li1_nodes, false);
      li1_nodes.forEach(detach);
      li2 = claim_element(ul0_nodes, "LI", {});
      var li2_nodes = children(li2);
      u2 = claim_element(li2_nodes, "U", {});
      var u2_nodes = children(u2);
      b2 = claim_element(u2_nodes, "B", {});
      var b2_nodes = children(b2);
      t5 = claim_text(b2_nodes, "Quorum: #/#");
      b2_nodes.forEach(detach);
      u2_nodes.forEach(detach);
      t6 = claim_text(li2_nodes, " - ");
      html_tag_2 = claim_html_tag(li2_nodes, false);
      li2_nodes.forEach(detach);
      li3 = claim_element(ul0_nodes, "LI", {});
      var li3_nodes = children(li3);
      u3 = claim_element(li3_nodes, "U", {});
      var u3_nodes = children(u3);
      b3 = claim_element(u3_nodes, "B", {});
      var b3_nodes = children(b3);
      t7 = claim_text(b3_nodes, "Higher Quorum: #/#");
      b3_nodes.forEach(detach);
      u3_nodes.forEach(detach);
      t8 = claim_text(li3_nodes, " - ");
      html_tag_3 = claim_html_tag(li3_nodes, false);
      li3_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      claim_component(linkable1.$$.fragment, div_nodes);
      ul1 = claim_element(div_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li4 = claim_element(ul1_nodes, "LI", {});
      var li4_nodes = children(li4);
      u4 = claim_element(li4_nodes, "U", {});
      var u4_nodes = children(u4);
      b4 = claim_element(u4_nodes, "B", {});
      var b4_nodes = children(b4);
      t9 = claim_text(b4_nodes, "info-and-rules");
      b4_nodes.forEach(detach);
      u4_nodes.forEach(detach);
      t10 = claim_text(li4_nodes, " - ");
      html_tag_4 = claim_html_tag(li4_nodes, false);
      li4_nodes.forEach(detach);
      li5 = claim_element(ul1_nodes, "LI", {});
      var li5_nodes = children(li5);
      u5 = claim_element(li5_nodes, "U", {});
      var u5_nodes = children(u5);
      b5 = claim_element(u5_nodes, "B", {});
      var b5_nodes = children(b5);
      t11 = claim_text(b5_nodes, "directory");
      b5_nodes.forEach(detach);
      u5_nodes.forEach(detach);
      t12 = claim_text(li5_nodes, " - ");
      html_tag_5 = claim_html_tag(li5_nodes, false);
      li5_nodes.forEach(detach);
      li6 = claim_element(ul1_nodes, "LI", {});
      var li6_nodes = children(li6);
      u6 = claim_element(li6_nodes, "U", {});
      var u6_nodes = children(u6);
      b6 = claim_element(u6_nodes, "B", {});
      var b6_nodes = children(b6);
      t13 = claim_text(b6_nodes, "eli5-tcn-rules");
      b6_nodes.forEach(detach);
      u6_nodes.forEach(detach);
      t14 = claim_text(li6_nodes, " - ");
      html_tag_6 = claim_html_tag(li6_nodes, false);
      li6_nodes.forEach(detach);
      li7 = claim_element(ul1_nodes, "LI", {});
      var li7_nodes = children(li7);
      u7 = claim_element(li7_nodes, "U", {});
      var u7_nodes = children(u7);
      b7 = claim_element(u7_nodes, "B", {});
      var b7_nodes = children(b7);
      t15 = claim_text(b7_nodes, "react-roles");
      b7_nodes.forEach(detach);
      u7_nodes.forEach(detach);
      t16 = claim_text(li7_nodes, " -");
      if_block.l(li7_nodes);
      li7_nodes.forEach(detach);
      li8 = claim_element(ul1_nodes, "LI", {});
      var li8_nodes = children(li8);
      u8 = claim_element(li8_nodes, "U", {});
      var u8_nodes = children(u8);
      b8 = claim_element(u8_nodes, "B", {});
      var b8_nodes = children(b8);
      t17 = claim_text(b8_nodes, "partner-list");
      b8_nodes.forEach(detach);
      u8_nodes.forEach(detach);
      t18 = claim_text(li8_nodes, " - ");
      html_tag_7 = claim_html_tag(li8_nodes, false);
      li8_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      claim_component(linkable2.$$.fragment, div_nodes);
      ul2 = claim_element(div_nodes, "UL", {});
      var ul2_nodes = children(ul2);
      li9 = claim_element(ul2_nodes, "LI", {});
      var li9_nodes = children(li9);
      u9 = claim_element(li9_nodes, "U", {});
      var u9_nodes = children(u9);
      b9 = claim_element(u9_nodes, "B", {});
      var b9_nodes = children(b9);
      t19 = claim_text(b9_nodes, "announcements");
      b9_nodes.forEach(detach);
      u9_nodes.forEach(detach);
      t20 = claim_text(li9_nodes, " - ");
      html_tag_8 = claim_html_tag(li9_nodes, false);
      li9_nodes.forEach(detach);
      li10 = claim_element(ul2_nodes, "LI", {});
      var li10_nodes = children(li10);
      u10 = claim_element(li10_nodes, "U", {});
      var u10_nodes = children(u10);
      b10 = claim_element(u10_nodes, "B", {});
      var b10_nodes = children(b10);
      t21 = claim_text(b10_nodes, "reports");
      b10_nodes.forEach(detach);
      u10_nodes.forEach(detach);
      t22 = claim_text(li10_nodes, " - ");
      html_tag_9 = claim_html_tag(li10_nodes, false);
      li10_nodes.forEach(detach);
      li11 = claim_element(ul2_nodes, "LI", {});
      var li11_nodes = children(li11);
      u11 = claim_element(li11_nodes, "U", {});
      var u11_nodes = children(u11);
      b11 = claim_element(u11_nodes, "B", {});
      var b11_nodes = children(b11);
      t23 = claim_text(b11_nodes, "summaries");
      b11_nodes.forEach(detach);
      u11_nodes.forEach(detach);
      t24 = claim_text(li11_nodes, " - ");
      html_tag_10 = claim_html_tag(li11_nodes, false);
      li11_nodes.forEach(detach);
      ul2_nodes.forEach(detach);
      claim_component(linkable3.$$.fragment, div_nodes);
      ul3 = claim_element(div_nodes, "UL", {});
      var ul3_nodes = children(ul3);
      li12 = claim_element(ul3_nodes, "LI", {});
      var li12_nodes = children(li12);
      u12 = claim_element(li12_nodes, "U", {});
      var u12_nodes = children(u12);
      b12 = claim_element(u12_nodes, "B", {});
      var b12_nodes = children(b12);
      t25 = claim_text(b12_nodes, "vote-here");
      b12_nodes.forEach(detach);
      u12_nodes.forEach(detach);
      t26 = claim_text(li12_nodes, " - ");
      html_tag_11 = claim_html_tag(li12_nodes, false);
      li12_nodes.forEach(detach);
      li13 = claim_element(ul3_nodes, "LI", {});
      var li13_nodes = children(li13);
      u13 = claim_element(li13_nodes, "U", {});
      var u13_nodes = children(u13);
      b13 = claim_element(u13_nodes, "B", {});
      var b13_nodes = children(b13);
      t27 = claim_text(b13_nodes, "vote-suggestions");
      b13_nodes.forEach(detach);
      u13_nodes.forEach(detach);
      t28 = claim_text(li13_nodes, " - ");
      html_tag_12 = claim_html_tag(li13_nodes, false);
      li13_nodes.forEach(detach);
      li14 = claim_element(ul3_nodes, "LI", {});
      var li14_nodes = children(li14);
      u14 = claim_element(li14_nodes, "U", {});
      var u14_nodes = children(u14);
      b14 = claim_element(u14_nodes, "B", {});
      var b14_nodes = children(b14);
      t29 = claim_text(b14_nodes, "elections");
      b14_nodes.forEach(detach);
      u14_nodes.forEach(detach);
      t30 = claim_text(li14_nodes, " - ");
      html_tag_13 = claim_html_tag(li14_nodes, false);
      li14_nodes.forEach(detach);
      li15 = claim_element(ul3_nodes, "LI", {});
      var li15_nodes = children(li15);
      u15 = claim_element(li15_nodes, "U", {});
      var u15_nodes = children(u15);
      b15 = claim_element(u15_nodes, "B", {});
      var b15_nodes = children(b15);
      t31 = claim_text(b15_nodes, "vote-help");
      b15_nodes.forEach(detach);
      u15_nodes.forEach(detach);
      t32 = claim_text(li15_nodes, " - ");
      html_tag_14 = claim_html_tag(li15_nodes, false);
      li15_nodes.forEach(detach);
      ul3_nodes.forEach(detach);
      claim_component(linkable4.$$.fragment, div_nodes);
      ul4 = claim_element(div_nodes, "UL", {});
      var ul4_nodes = children(ul4);
      li16 = claim_element(ul4_nodes, "LI", {});
      var li16_nodes = children(li16);
      u16 = claim_element(li16_nodes, "U", {});
      var u16_nodes = children(u16);
      b16 = claim_element(u16_nodes, "B", {});
      var b16_nodes = children(b16);
      t33 = claim_text(b16_nodes, "ban-share-logs");
      b16_nodes.forEach(detach);
      u16_nodes.forEach(detach);
      t34 = claim_text(li16_nodes, " - ");
      html_tag_15 = claim_html_tag(li16_nodes, false);
      li16_nodes.forEach(detach);
      li17 = claim_element(ul4_nodes, "LI", {});
      var li17_nodes = children(li17);
      u17 = claim_element(li17_nodes, "U", {});
      var u17_nodes = children(u17);
      b17 = claim_element(u17_nodes, "B", {});
      var b17_nodes = children(b17);
      t35 = claim_text(b17_nodes, "ban-share-chat");
      b17_nodes.forEach(detach);
      u17_nodes.forEach(detach);
      t36 = claim_text(li17_nodes, " - ");
      html_tag_16 = claim_html_tag(li17_nodes, false);
      li17_nodes.forEach(detach);
      li18 = claim_element(ul4_nodes, "LI", {});
      var li18_nodes = children(li18);
      u18 = claim_element(li18_nodes, "U", {});
      var u18_nodes = children(u18);
      b18 = claim_element(u18_nodes, "B", {});
      var b18_nodes = children(b18);
      t37 = claim_text(b18_nodes, "ban-share-guide");
      b18_nodes.forEach(detach);
      u18_nodes.forEach(detach);
      t38 = claim_text(li18_nodes, " - ");
      html_tag_17 = claim_html_tag(li18_nodes, false);
      li18_nodes.forEach(detach);
      ul4_nodes.forEach(detach);
      claim_component(linkable5.$$.fragment, div_nodes);
      ul5 = claim_element(div_nodes, "UL", {});
      var ul5_nodes = children(ul5);
      li19 = claim_element(ul5_nodes, "LI", {});
      var li19_nodes = children(li19);
      u19 = claim_element(li19_nodes, "U", {});
      var u19_nodes = children(u19);
      b19 = claim_element(u19_nodes, "B", {});
      var b19_nodes = children(b19);
      t39 = claim_text(b19_nodes, "akasha-terminal");
      b19_nodes.forEach(detach);
      u19_nodes.forEach(detach);
      t40 = claim_text(li19_nodes, " - ");
      t41 = claim_text(li19_nodes, t41_value);
      t42 = claim_text(li19_nodes, "he ");
      a1 = claim_element(li19_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t43 = claim_text(a1_nodes, "Akasha Terminal");
      a1_nodes.forEach(detach);
      t44 = claim_text(li19_nodes, ", our centralized information management system.");
      li19_nodes.forEach(detach);
      li20 = claim_element(ul5_nodes, "LI", {});
      var li20_nodes = children(li20);
      u20 = claim_element(li20_nodes, "U", {});
      var u20_nodes = children(u20);
      b20 = claim_element(u20_nodes, "B", {});
      var b20_nodes = children(b20);
      t45 = claim_text(b20_nodes, "global-logs");
      b20_nodes.forEach(detach);
      u20_nodes.forEach(detach);
      t46 = claim_text(li20_nodes, " - ");
      html_tag_18 = claim_html_tag(li20_nodes, false);
      li20_nodes.forEach(detach);
      li21 = claim_element(ul5_nodes, "LI", {});
      var li21_nodes = children(li21);
      u21 = claim_element(li21_nodes, "U", {});
      var u21_nodes = children(u21);
      b21 = claim_element(u21_nodes, "B", {});
      var b21_nodes = children(b21);
      t47 = claim_text(b21_nodes, "bot-commands");
      b21_nodes.forEach(detach);
      u21_nodes.forEach(detach);
      t48 = claim_text(li21_nodes, " - ");
      html_tag_19 = claim_html_tag(li21_nodes, false);
      li21_nodes.forEach(detach);
      li22 = claim_element(ul5_nodes, "LI", {});
      var li22_nodes = children(li22);
      u22 = claim_element(li22_nodes, "U", {});
      var u22_nodes = children(u22);
      b22 = claim_element(u22_nodes, "B", {});
      var b22_nodes = children(b22);
      t49 = claim_text(b22_nodes, "network-events");
      b22_nodes.forEach(detach);
      u22_nodes.forEach(detach);
      t50 = claim_text(li22_nodes, " - ");
      html_tag_20 = claim_html_tag(li22_nodes, false);
      li22_nodes.forEach(detach);
      li23 = claim_element(ul5_nodes, "LI", {});
      var li23_nodes = children(li23);
      u23 = claim_element(li23_nodes, "U", {});
      var u23_nodes = children(u23);
      b23 = claim_element(u23_nodes, "B", {});
      var b23_nodes = children(b23);
      t51 = claim_text(b23_nodes, "event-discussion");
      b23_nodes.forEach(detach);
      u23_nodes.forEach(detach);
      t52 = claim_text(li23_nodes, " - ");
      html_tag_21 = claim_html_tag(li23_nodes, false);
      li23_nodes.forEach(detach);
      ul5_nodes.forEach(detach);
      claim_component(linkable6.$$.fragment, div_nodes);
      ul6 = claim_element(div_nodes, "UL", {});
      var ul6_nodes = children(ul6);
      li24 = claim_element(ul6_nodes, "LI", {});
      var li24_nodes = children(li24);
      u24 = claim_element(li24_nodes, "U", {});
      var u24_nodes = children(u24);
      b24 = claim_element(u24_nodes, "B", {});
      var b24_nodes = children(b24);
      t53 = claim_text(b24_nodes, "applicants");
      b24_nodes.forEach(detach);
      u24_nodes.forEach(detach);
      t54 = claim_text(li24_nodes, " - ");
      html_tag_22 = claim_html_tag(li24_nodes, false);
      li24_nodes.forEach(detach);
      li25 = claim_element(ul6_nodes, "LI", {});
      var li25_nodes = children(li25);
      u25 = claim_element(li25_nodes, "U", {});
      var u25_nodes = children(u25);
      b25 = claim_element(u25_nodes, "B", {});
      var b25_nodes = children(b25);
      t55 = claim_text(b25_nodes, "partner-discussion");
      b25_nodes.forEach(detach);
      u25_nodes.forEach(detach);
      t56 = claim_text(li25_nodes, " - ");
      html_tag_23 = claim_html_tag(li25_nodes, false);
      li25_nodes.forEach(detach);
      li26 = claim_element(ul6_nodes, "LI", {});
      var li26_nodes = children(li26);
      u26 = claim_element(li26_nodes, "U", {});
      var u26_nodes = children(u26);
      b26 = claim_element(u26_nodes, "B", {});
      var b26_nodes = children(b26);
      t57 = claim_text(b26_nodes, "official-business");
      b26_nodes.forEach(detach);
      u26_nodes.forEach(detach);
      t58 = claim_text(li26_nodes, " - ");
      html_tag_24 = claim_html_tag(li26_nodes, false);
      li26_nodes.forEach(detach);
      li27 = claim_element(ul6_nodes, "LI", {});
      var li27_nodes = children(li27);
      u27 = claim_element(li27_nodes, "U", {});
      var u27_nodes = children(u27);
      b27 = claim_element(u27_nodes, "B", {});
      var b27_nodes = children(b27);
      t59 = claim_text(b27_nodes, "tcn-discussion");
      b27_nodes.forEach(detach);
      u27_nodes.forEach(detach);
      t60 = claim_text(li27_nodes, " - ");
      html_tag_25 = claim_html_tag(li27_nodes, false);
      li27_nodes.forEach(detach);
      li28 = claim_element(ul6_nodes, "LI", {});
      var li28_nodes = children(li28);
      u28 = claim_element(li28_nodes, "U", {});
      var u28_nodes = children(u28);
      b28 = claim_element(u28_nodes, "B", {});
      var b28_nodes = children(b28);
      t61 = claim_text(b28_nodes, "dev-chat");
      b28_nodes.forEach(detach);
      u28_nodes.forEach(detach);
      t62 = claim_text(li28_nodes, " - ");
      html_tag_26 = claim_html_tag(li28_nodes, false);
      li28_nodes.forEach(detach);
      li29 = claim_element(ul6_nodes, "LI", {});
      var li29_nodes = children(li29);
      u29 = claim_element(li29_nodes, "U", {});
      var u29_nodes = children(u29);
      b29 = claim_element(u29_nodes, "B", {});
      var b29_nodes = children(b29);
      t63 = claim_text(b29_nodes, "observer-chat");
      b29_nodes.forEach(detach);
      u29_nodes.forEach(detach);
      t64 = claim_text(li29_nodes, " - ");
      html_tag_27 = claim_html_tag(li29_nodes, false);
      li29_nodes.forEach(detach);
      li30 = claim_element(ul6_nodes, "LI", {});
      var li30_nodes = children(li30);
      u30 = claim_element(li30_nodes, "U", {});
      var u30_nodes = children(u30);
      b30 = claim_element(u30_nodes, "B", {});
      var b30_nodes = children(b30);
      t65 = claim_text(b30_nodes, "project-board");
      b30_nodes.forEach(detach);
      u30_nodes.forEach(detach);
      t66 = claim_text(li30_nodes, " - ");
      html_tag_28 = claim_html_tag(li30_nodes, false);
      li30_nodes.forEach(detach);
      ul6_nodes.forEach(detach);
      claim_component(linkable7.$$.fragment, div_nodes);
      ul7 = claim_element(div_nodes, "UL", {});
      var ul7_nodes = children(ul7);
      li31 = claim_element(ul7_nodes, "LI", {});
      var li31_nodes = children(li31);
      u31 = claim_element(li31_nodes, "U", {});
      var u31_nodes = children(u31);
      b31 = claim_element(u31_nodes, "B", {});
      var b31_nodes = children(b31);
      t67 = claim_text(b31_nodes, "ask-questions");
      b31_nodes.forEach(detach);
      u31_nodes.forEach(detach);
      t68 = claim_text(li31_nodes, " - ");
      html_tag_29 = claim_html_tag(li31_nodes, false);
      li31_nodes.forEach(detach);
      li32 = claim_element(ul7_nodes, "LI", {});
      var li32_nodes = children(li32);
      u32 = claim_element(li32_nodes, "U", {});
      var u32_nodes = children(u32);
      b32 = claim_element(u32_nodes, "B", {});
      var b32_nodes = children(b32);
      t69 = claim_text(b32_nodes, "assets");
      b32_nodes.forEach(detach);
      u32_nodes.forEach(detach);
      t70 = claim_text(li32_nodes, " - ");
      html_tag_30 = claim_html_tag(li32_nodes, false);
      li32_nodes.forEach(detach);
      ul7_nodes.forEach(detach);
      claim_component(linkable8.$$.fragment, div_nodes);
      ul8 = claim_element(div_nodes, "UL", {});
      var ul8_nodes = children(ul8);
      li33 = claim_element(ul8_nodes, "LI", {});
      var li33_nodes = children(li33);
      u33 = claim_element(li33_nodes, "U", {});
      var u33_nodes = children(u33);
      b33 = claim_element(u33_nodes, "B", {});
      var b33_nodes = children(b33);
      t71 = claim_text(b33_nodes, "introductions");
      b33_nodes.forEach(detach);
      u33_nodes.forEach(detach);
      t72 = claim_text(li33_nodes, " - ");
      html_tag_31 = claim_html_tag(li33_nodes, false);
      li33_nodes.forEach(detach);
      li34 = claim_element(ul8_nodes, "LI", {});
      var li34_nodes = children(li34);
      u34 = claim_element(li34_nodes, "U", {});
      var u34_nodes = children(u34);
      b34 = claim_element(u34_nodes, "B", {});
      var b34_nodes = children(b34);
      t73 = claim_text(b34_nodes, "general");
      b34_nodes.forEach(detach);
      u34_nodes.forEach(detach);
      t74 = claim_text(li34_nodes, " - ");
      html_tag_32 = claim_html_tag(li34_nodes, false);
      li34_nodes.forEach(detach);
      li35 = claim_element(ul8_nodes, "LI", {});
      var li35_nodes = children(li35);
      u35 = claim_element(li35_nodes, "U", {});
      var u35_nodes = children(u35);
      b35 = claim_element(u35_nodes, "B", {});
      var b35_nodes = children(b35);
      t75 = claim_text(b35_nodes, "honkai");
      b35_nodes.forEach(detach);
      u35_nodes.forEach(detach);
      t76 = claim_text(li35_nodes, " - ");
      html_tag_33 = claim_html_tag(li35_nodes, false);
      li35_nodes.forEach(detach);
      li36 = claim_element(ul8_nodes, "LI", {});
      var li36_nodes = children(li36);
      u36 = claim_element(li36_nodes, "U", {});
      var u36_nodes = children(u36);
      b36 = claim_element(u36_nodes, "B", {});
      var b36_nodes = children(b36);
      t77 = claim_text(b36_nodes, "coomer-content");
      b36_nodes.forEach(detach);
      u36_nodes.forEach(detach);
      t78 = claim_text(li36_nodes, " - ");
      html_tag_34 = claim_html_tag(li36_nodes, false);
      li36_nodes.forEach(detach);
      li37 = claim_element(ul8_nodes, "LI", {});
      var li37_nodes = children(li37);
      u37 = claim_element(li37_nodes, "U", {});
      var u37_nodes = children(u37);
      b37 = claim_element(u37_nodes, "B", {});
      var b37_nodes = children(b37);
      t79 = claim_text(b37_nodes, "genshin-leaks");
      b37_nodes.forEach(detach);
      u37_nodes.forEach(detach);
      t80 = claim_text(li37_nodes, " - ");
      html_tag_35 = claim_html_tag(li37_nodes, false);
      li37_nodes.forEach(detach);
      li38 = claim_element(ul8_nodes, "LI", {});
      var li38_nodes = children(li38);
      u38 = claim_element(li38_nodes, "U", {});
      var u38_nodes = children(u38);
      b38 = claim_element(u38_nodes, "B", {});
      var b38_nodes = children(b38);
      t81 = claim_text(b38_nodes, "starboard");
      b38_nodes.forEach(detach);
      u38_nodes.forEach(detach);
      t82 = claim_text(li38_nodes, " - ");
      html_tag_36 = claim_html_tag(li38_nodes, false);
      li38_nodes.forEach(detach);
      li39 = claim_element(ul8_nodes, "LI", {});
      var li39_nodes = children(li39);
      u39 = claim_element(li39_nodes, "U", {});
      var u39_nodes = children(u39);
      b39 = claim_element(u39_nodes, "B", {});
      var b39_nodes = children(b39);
      t83 = claim_text(b39_nodes, "vc-text");
      b39_nodes.forEach(detach);
      u39_nodes.forEach(detach);
      t84 = claim_text(li39_nodes, " - ");
      html_tag_37 = claim_html_tag(li39_nodes, false);
      li39_nodes.forEach(detach);
      li40 = claim_element(ul8_nodes, "LI", {});
      var li40_nodes = children(li40);
      u40 = claim_element(li40_nodes, "U", {});
      var u40_nodes = children(u40);
      b40 = claim_element(u40_nodes, "B", {});
      var b40_nodes = children(b40);
      t85 = claim_text(b40_nodes, "General");
      b40_nodes.forEach(detach);
      u40_nodes.forEach(detach);
      t86 = claim_text(li40_nodes, " - ");
      html_tag_38 = claim_html_tag(li40_nodes, false);
      li40_nodes.forEach(detach);
      ul8_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "javascript:void(0)");
      html_tag.a = null;
      html_tag_1.a = null;
      html_tag_2.a = null;
      html_tag_3.a = null;
      html_tag_4.a = null;
      html_tag_5.a = null;
      html_tag_6.a = null;
      html_tag_7.a = null;
      html_tag_8.a = null;
      html_tag_9.a = null;
      html_tag_10.a = null;
      html_tag_11.a = null;
      html_tag_12.a = null;
      html_tag_13.a = null;
      html_tag_14.a = null;
      html_tag_15.a = null;
      html_tag_16.a = null;
      html_tag_17.a = null;
      attr(a1, "href", "/info/akasha");
      html_tag_18.a = null;
      html_tag_19.a = null;
      html_tag_20.a = null;
      html_tag_21.a = null;
      html_tag_22.a = null;
      html_tag_23.a = null;
      html_tag_24.a = null;
      html_tag_25.a = null;
      html_tag_26.a = null;
      html_tag_27.a = null;
      html_tag_28.a = null;
      html_tag_29.a = null;
      html_tag_30.a = null;
      html_tag_31.a = null;
      html_tag_32.a = null;
      html_tag_33.a = null;
      html_tag_34.a = null;
      html_tag_35.a = null;
      html_tag_36.a = null;
      html_tag_37.a = null;
      html_tag_38.a = null;
      attr(div, "id", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      append_hydration(div, p);
      append_hydration(p, a0);
      a0.innerHTML = raw0_value;
      mount_component(linkable0, div, null);
      append_hydration(div, ul0);
      append_hydration(ul0, li0);
      append_hydration(li0, u0);
      append_hydration(u0, b0);
      append_hydration(b0, t1);
      append_hydration(li0, t2);
      html_tag.m(raw1_value, li0);
      append_hydration(ul0, li1);
      append_hydration(li1, u1);
      append_hydration(u1, b1);
      append_hydration(b1, t3);
      append_hydration(li1, t4);
      html_tag_1.m(raw2_value, li1);
      append_hydration(ul0, li2);
      append_hydration(li2, u2);
      append_hydration(u2, b2);
      append_hydration(b2, t5);
      append_hydration(li2, t6);
      html_tag_2.m(raw3_value, li2);
      append_hydration(ul0, li3);
      append_hydration(li3, u3);
      append_hydration(u3, b3);
      append_hydration(b3, t7);
      append_hydration(li3, t8);
      html_tag_3.m(raw4_value, li3);
      mount_component(linkable1, div, null);
      append_hydration(div, ul1);
      append_hydration(ul1, li4);
      append_hydration(li4, u4);
      append_hydration(u4, b4);
      append_hydration(b4, t9);
      append_hydration(li4, t10);
      html_tag_4.m(raw5_value, li4);
      append_hydration(ul1, li5);
      append_hydration(li5, u5);
      append_hydration(u5, b5);
      append_hydration(b5, t11);
      append_hydration(li5, t12);
      html_tag_5.m(raw6_value, li5);
      append_hydration(ul1, li6);
      append_hydration(li6, u6);
      append_hydration(u6, b6);
      append_hydration(b6, t13);
      append_hydration(li6, t14);
      html_tag_6.m(raw7_value, li6);
      append_hydration(ul1, li7);
      append_hydration(li7, u7);
      append_hydration(u7, b7);
      append_hydration(b7, t15);
      append_hydration(li7, t16);
      if_block.m(li7, null);
      append_hydration(ul1, li8);
      append_hydration(li8, u8);
      append_hydration(u8, b8);
      append_hydration(b8, t17);
      append_hydration(li8, t18);
      html_tag_7.m(raw8_value, li8);
      mount_component(linkable2, div, null);
      append_hydration(div, ul2);
      append_hydration(ul2, li9);
      append_hydration(li9, u9);
      append_hydration(u9, b9);
      append_hydration(b9, t19);
      append_hydration(li9, t20);
      html_tag_8.m(raw9_value, li9);
      append_hydration(ul2, li10);
      append_hydration(li10, u10);
      append_hydration(u10, b10);
      append_hydration(b10, t21);
      append_hydration(li10, t22);
      html_tag_9.m(raw10_value, li10);
      append_hydration(ul2, li11);
      append_hydration(li11, u11);
      append_hydration(u11, b11);
      append_hydration(b11, t23);
      append_hydration(li11, t24);
      html_tag_10.m(raw11_value, li11);
      mount_component(linkable3, div, null);
      append_hydration(div, ul3);
      append_hydration(ul3, li12);
      append_hydration(li12, u12);
      append_hydration(u12, b12);
      append_hydration(b12, t25);
      append_hydration(li12, t26);
      html_tag_11.m(raw12_value, li12);
      append_hydration(ul3, li13);
      append_hydration(li13, u13);
      append_hydration(u13, b13);
      append_hydration(b13, t27);
      append_hydration(li13, t28);
      html_tag_12.m(raw13_value, li13);
      append_hydration(ul3, li14);
      append_hydration(li14, u14);
      append_hydration(u14, b14);
      append_hydration(b14, t29);
      append_hydration(li14, t30);
      html_tag_13.m(raw14_value, li14);
      append_hydration(ul3, li15);
      append_hydration(li15, u15);
      append_hydration(u15, b15);
      append_hydration(b15, t31);
      append_hydration(li15, t32);
      html_tag_14.m(raw15_value, li15);
      mount_component(linkable4, div, null);
      append_hydration(div, ul4);
      append_hydration(ul4, li16);
      append_hydration(li16, u16);
      append_hydration(u16, b16);
      append_hydration(b16, t33);
      append_hydration(li16, t34);
      html_tag_15.m(raw16_value, li16);
      append_hydration(ul4, li17);
      append_hydration(li17, u17);
      append_hydration(u17, b17);
      append_hydration(b17, t35);
      append_hydration(li17, t36);
      html_tag_16.m(raw17_value, li17);
      append_hydration(ul4, li18);
      append_hydration(li18, u18);
      append_hydration(u18, b18);
      append_hydration(b18, t37);
      append_hydration(li18, t38);
      html_tag_17.m(raw18_value, li18);
      mount_component(linkable5, div, null);
      append_hydration(div, ul5);
      append_hydration(ul5, li19);
      append_hydration(li19, u19);
      append_hydration(u19, b19);
      append_hydration(b19, t39);
      append_hydration(li19, t40);
      append_hydration(li19, t41);
      append_hydration(li19, t42);
      append_hydration(li19, a1);
      append_hydration(a1, t43);
      append_hydration(li19, t44);
      append_hydration(ul5, li20);
      append_hydration(li20, u20);
      append_hydration(u20, b20);
      append_hydration(b20, t45);
      append_hydration(li20, t46);
      html_tag_18.m(raw19_value, li20);
      append_hydration(ul5, li21);
      append_hydration(li21, u21);
      append_hydration(u21, b21);
      append_hydration(b21, t47);
      append_hydration(li21, t48);
      html_tag_19.m(raw20_value, li21);
      append_hydration(ul5, li22);
      append_hydration(li22, u22);
      append_hydration(u22, b22);
      append_hydration(b22, t49);
      append_hydration(li22, t50);
      html_tag_20.m(raw21_value, li22);
      append_hydration(ul5, li23);
      append_hydration(li23, u23);
      append_hydration(u23, b23);
      append_hydration(b23, t51);
      append_hydration(li23, t52);
      html_tag_21.m(raw22_value, li23);
      mount_component(linkable6, div, null);
      append_hydration(div, ul6);
      append_hydration(ul6, li24);
      append_hydration(li24, u24);
      append_hydration(u24, b24);
      append_hydration(b24, t53);
      append_hydration(li24, t54);
      html_tag_22.m(raw23_value, li24);
      append_hydration(ul6, li25);
      append_hydration(li25, u25);
      append_hydration(u25, b25);
      append_hydration(b25, t55);
      append_hydration(li25, t56);
      html_tag_23.m(raw24_value, li25);
      append_hydration(ul6, li26);
      append_hydration(li26, u26);
      append_hydration(u26, b26);
      append_hydration(b26, t57);
      append_hydration(li26, t58);
      html_tag_24.m(raw25_value, li26);
      append_hydration(ul6, li27);
      append_hydration(li27, u27);
      append_hydration(u27, b27);
      append_hydration(b27, t59);
      append_hydration(li27, t60);
      html_tag_25.m(raw26_value, li27);
      append_hydration(ul6, li28);
      append_hydration(li28, u28);
      append_hydration(u28, b28);
      append_hydration(b28, t61);
      append_hydration(li28, t62);
      html_tag_26.m(raw27_value, li28);
      append_hydration(ul6, li29);
      append_hydration(li29, u29);
      append_hydration(u29, b29);
      append_hydration(b29, t63);
      append_hydration(li29, t64);
      html_tag_27.m(raw28_value, li29);
      append_hydration(ul6, li30);
      append_hydration(li30, u30);
      append_hydration(u30, b30);
      append_hydration(b30, t65);
      append_hydration(li30, t66);
      html_tag_28.m(raw29_value, li30);
      mount_component(linkable7, div, null);
      append_hydration(div, ul7);
      append_hydration(ul7, li31);
      append_hydration(li31, u31);
      append_hydration(u31, b31);
      append_hydration(b31, t67);
      append_hydration(li31, t68);
      html_tag_29.m(raw30_value, li31);
      append_hydration(ul7, li32);
      append_hydration(li32, u32);
      append_hydration(u32, b32);
      append_hydration(b32, t69);
      append_hydration(li32, t70);
      html_tag_30.m(raw31_value, li32);
      mount_component(linkable8, div, null);
      append_hydration(div, ul8);
      append_hydration(ul8, li33);
      append_hydration(li33, u33);
      append_hydration(u33, b33);
      append_hydration(b33, t71);
      append_hydration(li33, t72);
      html_tag_31.m(raw32_value, li33);
      append_hydration(ul8, li34);
      append_hydration(li34, u34);
      append_hydration(u34, b34);
      append_hydration(b34, t73);
      append_hydration(li34, t74);
      html_tag_32.m(raw33_value, li34);
      append_hydration(ul8, li35);
      append_hydration(li35, u35);
      append_hydration(u35, b35);
      append_hydration(b35, t75);
      append_hydration(li35, t76);
      html_tag_33.m(raw34_value, li35);
      append_hydration(ul8, li36);
      append_hydration(li36, u36);
      append_hydration(u36, b36);
      append_hydration(b36, t77);
      append_hydration(li36, t78);
      html_tag_34.m(raw35_value, li36);
      append_hydration(ul8, li37);
      append_hydration(li37, u37);
      append_hydration(u37, b37);
      append_hydration(b37, t79);
      append_hydration(li37, t80);
      html_tag_35.m(raw36_value, li37);
      append_hydration(ul8, li38);
      append_hydration(li38, u38);
      append_hydration(u38, b38);
      append_hydration(b38, t81);
      append_hydration(li38, t82);
      html_tag_36.m(raw37_value, li38);
      append_hydration(ul8, li39);
      append_hydration(li39, u39);
      append_hydration(u39, b39);
      append_hydration(b39, t83);
      append_hydration(li39, t84);
      html_tag_37.m(raw38_value, li39);
      append_hydration(ul8, li40);
      append_hydration(li40, u40);
      append_hydration(u40, b40);
      append_hydration(b40, t85);
      append_hydration(li40, t86);
      html_tag_38.m(raw39_value, li40);
      current = true;
      if (!mounted) {
        dispose = listen(
          a0,
          "click",
          /*click_handler*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*full*/
      1) && raw0_value !== (raw0_value = /*full*/
      ctx2[0] ? "View Simplified Version" : "View Full Descriptions"))
        a0.innerHTML = raw0_value;
      if ((!current || dirty & /*full*/
      1) && raw1_value !== (raw1_value = /*full*/
      ctx2[0] ? "This is the size of the TCN council. If this is showing as #/#, then the number of users in the server is not matching the expected number of council members." : "the number of members in the TCN council"))
        html_tag.p(raw1_value);
      if ((!current || dirty & /*full*/
      1) && raw2_value !== (raw2_value = /*full*/
      ctx2[0] ? "This is the number of votes available, also the number of servers. If this is showing as #/#/#, then the number of people with the voter role, the number of voters in the API, and the number of servers in the network do not match." : "the number of votes available (= the number of servers)"))
        html_tag_1.p(raw2_value);
      if ((!current || dirty & /*full*/
      1) && raw3_value !== (raw3_value = /*full*/
      ctx2[0] ? "This is the number of votes required for minor votes, which is 60% of the number of votes rounded up." : "the number of votes required for minor votes"))
        html_tag_2.p(raw3_value);
      if ((!current || dirty & /*full*/
      1) && raw4_value !== (raw4_value = /*full*/
      ctx2[0] ? "This is the number of votes reuqired for major votes, which is 75% of the number of votes rounded up." : "the number of votes required for major votes"))
        html_tag_3.p(raw4_value);
      if ((!current || dirty & /*full*/
      1) && raw5_value !== (raw5_value = /*full*/
      ctx2[0] ? `Initial landing information including HQ rules and expectations. If you're a bit confused by the setup instructions there, you may want to check out the <a href="/info/quickstart">quickstart guide</a>.` : "our landing channel which contains some basic information that you should know and some HQ-specific rules"))
        html_tag_4.p(raw5_value);
      if ((!current || dirty & /*full*/
      1) && raw6_value !== (raw6_value = /*full*/
      ctx2[0] ? "This is a short-form directory of our channel structure." : "this page in embed form"))
        html_tag_5.p(raw6_value);
      if ((!current || dirty & /*full*/
      1) && raw7_value !== (raw7_value = /*full*/
      ctx2[0] ? `ELI5 stands for "Explain Like I'm 5" - this is an extremely simplified version of the TCN rules. Note that in the case of a contradiction, the full rules <a href="/info/rules">here</a> are correct and not the ELI5 version, so this is not a substitute for reading the rules, but can be good to remind you of what rules exist and where to find a specific rule.` : `the <a href="/info/rules">TCN rules</a>, summarized into ELI5 ("Explain Like I'm 5") format`))
        html_tag_6.p(raw7_value);
      if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(li7, null);
        }
      }
      if ((!current || dirty & /*full*/
      1) && raw8_value !== (raw8_value = /*full*/
      ctx2[0] ? "This is the list of TCN partners. This is not the format you should follow for your partner embeds; this is a full list including information like the server ID, character element, weapon, and region, and the council members for each." : "a full list of TCN partners and their council members"))
        html_tag_7.p(raw8_value);
      if ((!current || dirty & /*full*/
      1) && raw9_value !== (raw9_value = /*full*/
      ctx2[0] ? "Here, you can find news and updates for the network or the HQ server. You can pick up the ping role in <b>#react-roles</b> to be notified. We will ping <code>@everyone</code> when the partner embed changes to make sure everyone is aware of updates." : "important HQ news and announcements"))
        html_tag_8.p(raw9_value);
      if ((!current || dirty & /*full*/
      1) && raw10_value !== (raw10_value = /*full*/
      ctx2[0] ? "Here is where observers publish their reports for servers. Make sure you check these over and notify us of any issues you may notice. We will release the reports in advance of the vote to give some time for review and feedback." : "observation reports for applicant servers"))
        html_tag_9.p(raw10_value);
      if ((!current || dirty & /*full*/
      1) && raw11_value !== (raw11_value = /*full*/
      ctx2[0] ? "Here is where summaries for discussions are posted. If you miss any long or important discussions, check here to see if there is a summary, and if not, you can request that we make one to give the highlights of the conversation. Additionally, each week, a summary of ongoing events, the past week, and upcoming plans is posted. You can pick up the ping role in <b>#react-roles</b> to be notified when this is posted." : "summaries for important discussions as well as weekly summaries"))
        html_tag_10.p(raw11_value);
      if ((!current || dirty & /*full*/
      1) && raw12_value !== (raw12_value = /*full*/
      ctx2[0] ? "Here is where votes are posted for things like network rule changes, inductions, etc. If you are eligible to vote, you will automatically have the ping role. If you notice any issues with this system, please contact <b>HyperNeutrino#1759</b> or ping him in <b>#dev-chat</b>." : "where votes are posted"))
        html_tag_11.p(raw12_value);
      if ((!current || dirty & /*full*/
      1) && raw13_value !== (raw13_value = /*full*/
      ctx2[0] ? "Here is where your suggestions can be posted. Some things may be implemented directly following approval of the suggestion; specifically, changes that do not require formal votes such as adding new channels to HQ. Other things may go to a formal vote instead. All non-standard votes must be suggested 24 hours before the vote opens and you do not need to use the suggestion system; you can bring it up in <b>#official-business</b> or <b>#tcn-discussion</b>, but this is an easy way to gauge the council's consensus. Use <code>/suggest</code> in <b>#bot-commands</b>." : "use <code>/suggest</code> in <b>bot-commands</b> to post a suggestion"))
        html_tag_12.p(raw13_value);
      if ((!current || dirty & /*full*/
      1) && raw14_value !== (raw14_value = /*full*/
      ctx2[0] ? 'This is where election nominations and statements will be posted. See the <a href="/info/voting">voting page</a> for information.' : 'election nominations and statements are posted here (<a href="/info/voting">more info</a>)'))
        html_tag_13.p(raw14_value);
      if ((!current || dirty & /*full*/
      1) && raw15_value !== (raw15_value = /*full*/
      ctx2[0] ? 'This is the help channel for voting. The information here is more or less the same as in the voting info page <a href="/info/voting">here</a>.' : 'information on how to use the voting system (<a href="/info/voting">more info</a>)'))
        html_tag_14.p(raw15_value);
      if ((!current || dirty & /*full*/
      1) && raw16_value !== (raw16_value = /*full*/
      ctx2[0] ? 'This is where banshares are posted after being submitted to <a href="https://banshare.teyvatcollective.network">https://banshare.teyvatcollective.network</a>. See <a href="/banshares">this page</a> for how to set it up.' : 'where banshares are first posted and published from (<a href="/info/banshares">more info</a>)'))
        html_tag_15.p(raw16_value);
      if ((!current || dirty & /*full*/
      1) && raw17_value !== (raw17_value = /*full*/
      ctx2[0] ? "Here, you can discuss banshares, ask for more info on problematic users that you are contemplating bansharing, or post informal banshares that you think are not solid enough to publish across the network or that you only want to make available to council members at their discretion." : `discussion about banshares, or bringing up "unofficial" banshares that you don't want to publish`))
        html_tag_16.p(raw17_value);
      if ((!current || dirty & /*full*/
      1) && raw18_value !== (raw18_value = /*full*/
      ctx2[0] ? 'This is the help channel for banshares. The information here is more or less the same as on <a href="/info/banshares">this page</a>.' : 'how to use banshares (also see <a href="/info/banshares">this page</a>)'))
        html_tag_17.p(raw18_value);
      if ((!current || dirty & /*full*/
      1) && t41_value !== (t41_value = /*full*/
      ctx2[0] ? "T" : "t"))
        set_data(t41, t41_value);
      if ((!current || dirty & /*full*/
      1) && raw19_value !== (raw19_value = /*full*/
      ctx2[0] ? 'This is the logging channel for the TCN global chats. If you need to find purged messages or view edit history for global channels, you can find them here, no matter which server they originated from. Find more information on global channels <a href="/info/global">here</a>.' : 'edit, delete, and ban logs for global channels (<a href="/info/global">more info</a>)'))
        html_tag_18.p(raw19_value);
      if ((!current || dirty & /*full*/
      1) && raw20_value !== (raw20_value = /*full*/
      ctx2[0] ? "As the name suggests, this is the bot command channel. Feel free to spam bot commands here. You can use bot commands elsewhere when appropriate, but this channel exists for spam." : "use bot commands here"))
        html_tag_19.p(raw20_value);
      if ((!current || dirty & /*full*/
      1) && raw21_value !== (raw21_value = /*full*/
      ctx2[0] ? "This is the announcement channel for cross-promoting events. It is mandatory to have a publicly visible channel following this announcement channel in each TCN server. If you would like to promote an event involving at least one TCN server, check the pins here for a webhook URL and notify an observer to publish it. Please mention that it's ready for posting so we know you've had a chance to look over its final version and check for any errors you may have missed." : "the event feed for TCN servers' events (you must follow this in your server)"))
        html_tag_20.p(raw21_value);
      if ((!current || dirty & /*full*/
      1) && raw22_value !== (raw22_value = /*full*/
      ctx2[0] ? "This is for discussing anything event-related. Typically, it is used for pointing out issues or requesting clarifications with cross-promoted events or asking an observer to publish one, but you can also discuss potential collabs with other TCN servers here." : "discuss events posted in <b>#network-events</b>, co-ordinate with other servers, etc."))
        html_tag_21.p(raw22_value);
      if ((!current || dirty & /*full*/
      1) && raw23_value !== (raw23_value = /*full*/
      ctx2[0] ? "New applicants to the TCN will be posted here and a ping will automatically be sent for people with the New Applicant Alert role (which you can obtain from #react-roles). Please bring up any opinions or history you have regarding the server that you would like to share with the rest of the network and let an observer know if you want to start a rejection vote to deny observation to the applicant." : "applicant servers will be posted here"))
        html_tag_22.p(raw23_value);
      if ((!current || dirty & /*full*/
      1) && raw24_value !== (raw24_value = /*full*/
      ctx2[0] ? "This channel is for discussion one-on-one partnerships with non-TCN servers. If you received a partnership request and you want more information on the server, start a discussion forum post here for that server. Make sure you check if anyone else has posted about them yet and read the pinned FAQ post first." : "discuss non-TCN partnership applications or affiliations here (see the pinned FAQ)"))
        html_tag_23.p(raw24_value);
      if ((!current || dirty & /*full*/
      1) && raw25_value !== (raw25_value = /*full*/
      ctx2[0] ? "This is the primary discussion channel for things like reports (not observation reports, but reports on users), bringing up concerns, etc. Compared to <b>#tcn-discussion</b>, this is more external, but the distinction is not too important." : "official discussion channel for HQ or network things, often used for things like reports, concerns, etc."))
        html_tag_24.p(raw25_value);
      if ((!current || dirty & /*full*/
      1) && raw26_value !== (raw26_value = /*full*/
      ctx2[0] ? "This is the secondary discussion channel for things like improvements to the network or HQ, proposed changes, etc. Compared to <b>#official-business</b>, this is more internal, but the distinction is not too important. If in doubt, just post to <b>#official-business</b>, and if there is an ongoing conversation, post here as an overflow." : "official discussion channel for the TCN, often used for things like discussing TCN changes, network management, etc."))
        html_tag_25.p(raw26_value);
      if ((!current || dirty & /*full*/
      1) && raw27_value !== (raw27_value = /*full*/
      ctx2[0] ? "This channel is for discussions related to anything about development. Its primary purpose is so everyone can contribute to discussions regarding TCN dev projects such as the global bot, TCN systems like Paimon/Akasha System, the TCN management bot, the banshare system and website, etc. This includes suggestions, bug reports, updates from devs, etc. If you want to ask questions or discuss other dev projects, you may do so here, but consider using <b>#dev-chat</b> in the TCN Hub, as you may find more active developers there. For questions about using these bots or any other technical questions, <b>#ask-questions</b> is still more appropriate." : "development-related discussions/conversations; also report bugs or provide feedback for TCN dev projects here"))
        html_tag_26.p(raw27_value);
      if ((!current || dirty & /*full*/
      1) && raw28_value !== (raw28_value = /*full*/
      ctx2[0] ? "This is the public read-only observer discussion channel. The goal is to increase transparency, so when possible, observers will discuss their work here instead of privately. Feel free to bring up any questions or issues in a discussion channel." : "read-only channel for observers to transparently discuss some things"))
        html_tag_27.p(raw28_value);
      if ((!current || dirty & /*full*/
      1) && raw29_value !== (raw29_value = /*full*/
      ctx2[0] ? "This is our to-do list / task board. Ask an observer if you would like a project to be added here. Feel free to contribute to discussions and add your opinion to project threads." : "a list of projects the TCN is working on and their progress"))
        html_tag_28.p(raw29_value);
      if ((!current || dirty & /*full*/
      1) && raw30_value !== (raw30_value = /*full*/
      ctx2[0] ? "This is a general Q&A channel. You can ask for advice, information on certain users, help with TCN bots or other bots, etc." : "for asking any questions to your fellow council members"))
        html_tag_29.p(raw30_value);
      if ((!current || dirty & /*full*/
      1) && raw31_value !== (raw31_value = /*full*/
      ctx2[0] ? "This is where you can find bots, emoji, and other server resources that other council members have recommended. If you come across anything you think might interest or benefit other TCN servers, feel free to introduce it to the network here!" : "feel free to post bots, emoji, asset shops, etc. for other people to see"))
        html_tag_30.p(raw31_value);
      if ((!current || dirty & /*full*/
      1) && raw32_value !== (raw32_value = /*full*/
      ctx2[0] ? "Introduce yourself here! If you want to redo your introduction, you can edit it in-place, but if there’s important information you want everyone to see again e.g. you have changed your pronouns, you can repost it, just please delete the old version." : "feel free to introduce yourself here"))
        html_tag_31.p(raw32_value);
      if ((!current || dirty & /*full*/
      1) && raw33_value !== (raw33_value = /*full*/
      ctx2[0] ? "General chatter; there is no topic for this channel. The expectations of civility still apply, obviously, and feel free to create threads if you want to have more spammy conversations or post a bunch of images." : "main (topicless) conversation channel"))
        html_tag_32.p(raw33_value);
      if ((!current || dirty & /*full*/
      1) && raw34_value !== (raw34_value = /*full*/
      ctx2[0] ? "Channel for Honkai Impact and Honkai Star Rail. You can gain access to this channel with the access role in <b>#react-roles</b>." : "Honkai Impact + Honkai Star Rail"))
        html_tag_33.p(raw34_value);
      if ((!current || dirty & /*full*/
      1) && raw35_value !== (raw35_value = /*full*/
      ctx2[0] ? "This is the NSFW channel. You must be 18+ years of age to access this channel. You can gain access to this channel with the access role in <b>#react-roles</b>. If we find that you are accessing this channel and are not yet 18, we may be forced to ban you to enforce ToS, so don't do it." : "NSFW channel (must be 18+ to access)"))
        html_tag_34.p(raw35_value);
      if ((!current || dirty & /*full*/
      1) && raw36_value !== (raw36_value = /*full*/
      ctx2[0] ? "This is the leaks channel. Please post any leaks here and not in other channels to avoid spoiling things for others." : "leaks discussion; avoid this if you don't want spoilers or leaks"))
        html_tag_35.p(raw36_value);
      if ((!current || dirty & /*full*/
      1) && raw37_value !== (raw37_value = /*full*/
      ctx2[0] ? "Messages require 4 stars to reach the starboard." : "4 stars required"))
        html_tag_36.p(raw37_value);
      if ((!current || dirty & /*full*/
      1) && raw38_value !== (raw38_value = /*full*/
      ctx2[0] ? "No-mic channel for the voice channel(s)." : "no-mic channel"))
        html_tag_37.p(raw38_value);
      if ((!current || dirty & /*full*/
      1) && raw39_value !== (raw39_value = /*full*/
      ctx2[0] ? "Our only voice channel. If you think we need more, let us know!" : "general voice channel"))
        html_tag_38.p(raw39_value);
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
      transition_in(linkable6.$$.fragment, local);
      transition_in(linkable7.$$.fragment, local);
      transition_in(linkable8.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linkable0.$$.fragment, local);
      transition_out(linkable1.$$.fragment, local);
      transition_out(linkable2.$$.fragment, local);
      transition_out(linkable3.$$.fragment, local);
      transition_out(linkable4.$$.fragment, local);
      transition_out(linkable5.$$.fragment, local);
      transition_out(linkable6.$$.fragment, local);
      transition_out(linkable7.$$.fragment, local);
      transition_out(linkable8.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(linkable0);
      destroy_component(linkable1);
      if_block.d();
      destroy_component(linkable2);
      destroy_component(linkable3);
      destroy_component(linkable4);
      destroy_component(linkable5);
      destroy_component(linkable6);
      destroy_component(linkable7);
      destroy_component(linkable8);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let t;
  let div;
  let navigation;
  let current;
  let if_block = !/*full*/
  ctx[0] && create_if_block_1();
  navigation = new Navigation({
    props: {
      last: ["/info/hq", "HQ"],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      div = element("div");
      create_component(navigation.$$.fragment);
      this.h();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t = claim_space(nodes);
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
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div, anchor);
      mount_component(navigation, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!/*full*/
      ctx2[0]) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_1();
          if_block.c();
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      const navigation_changes = {};
      if (dirty & /*$$scope, full*/
      5) {
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
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
      destroy_component(navigation);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let full = false;
  const click_handler = () => $$invalidate(0, full = !full);
  return [full, click_handler];
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
