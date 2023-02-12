<script lang="ts">
    import Navigation from "../../lib/Navigation.svelte";
    import Card from "../../lib/Card.svelte";
    import Linkable from "../../lib/Linkable.svelte";
</script>

<div class="container">
    <Navigation
        last={["/definitions-organization", "Definitions & Organization"]}
        next={["/hq", "HQ"]}
    >
        <div id="main">
            <h1>Joining the TCN</h1>
            <p>
                Only character mains servers (servers dedicated to a specific Genshin Impact
                character with resources and channels for that character) may join the TCN. To join,
                you must first apply. Then, we will review your server over a period of 28 days to
                ensure servers meet our quality standards for a safe environment and provide
                feedback on structure and organization.
            </p>
            <p>
                <b
                    ><a
                        href="https://docs.google.com/forms/d/1BtV0mZvS9LX46rIhH-hVg1X8payfcswEfoHpeIejXl0"
                        >Apply Here!</a
                    ></b
                >
            </p>
            <Linkable e="h2" id="observation-faq" value="Observation FAQ" />
            <p>Read more about the observation process <a href="/observation-faq">here</a>.</p>
            <Linkable e="h2" id="induction-process" value="Induction Process" />
            <p>Click a card to learn more.</p>
            <div class="cards">
                <Card icon="checklist" title="Application" expandable>
                    <p>
                        The first step is to apply. Fill out the <a
                            href="https://forms.gle/dwLytyEyAsG51WGH7">application form</a
                        >. 3 days will be given for anyone to raise any potential concerns, and if
                        none occur, we will assign an observer.
                    </p>
                    <p>
                        This may take a bit longer than 3 days, but if there are significant delays,
                        we will reach out to you to expain the situation and give you a timeline.
                    </p>
                </Card>
                <Card icon="visibility" title="Observation" expandable>
                    <p>
                        For 28 days, the assigned observer will look over your server and its
                        operations. They must be given view access to all channels and audit logs,
                        but you do not need to grant them any other permissions, including write
                        access.
                    </p>
                </Card>
                <Card icon="assignment" title="Report" expandable>
                    <p>
                        The observer will create a report to summarize their findings from the
                        observation and share it with you to review. You may give it to your staff
                        team if you would like, and we will work with you to ensure everything is
                        accurately summarized and we have presented your server in a fair light.
                    </p>
                </Card>
                <Card icon="how_to_vote" title="Voting" expandable>
                    <p>
                        Finally, the report is published to the HQ, and your server will be accepted
                        or rejected. In rare cases, there isn't enough information gathered and we
                        will need to extend the observation period, but this is very uncommon.
                    </p>
                    <p>
                        For servers whose character is not confirmed as playable by Hoyoverse yet,
                        we may pre-approve your server but not accept it immediately, in which case,
                        your server will be accepted once the character is confirmed.
                    </p>
                    <p>
                        If more than two months passed between your approval and induction for
                        whatever reason (including awaiting character confirmation), we may request
                        a 14-day observation to update our information.
                    </p>
                </Card>
            </div>
            <Linkable e="h2" id="tcn-requirements" value="What does the TCN require of me?" />
            <p>
                Not much. Observation is usually very smooth and few servers get rejected. As long
                as you have a civil environment, you will probably pass observation, as we do not
                have activity requirements (we recommend 300 members just so we know that your
                server is stable and will not suddenly change or collapse, as we have seen that
                happen often).
            </p>
            <p>
                Once you have joined, we only expect you to maintain a civil relationship with other
                TCN servers. You do not have to be friends with anyone, as long as you are civil
                (and this extends to other servers; trash-talking or slandering other servers or
                people is also considered inappropriate conduct).
            </p>
            <p>
                Additionally, we require that you keep an updated list of TCN servers in your server
                and follow our <b>#network-events</b> channel, as cross-promotion is a part of our benefits.
                Otherwise, all other features like global chat, banshares, etc. are completely optional.
            </p>
            <p>
                We do not place restrictions on how you should run your server or force you to
                follow a particular structure (in fact, we do not <i>have</i> a "TCN structure" for servers).
                Obviously, breaking network rules or failing to meet the rules and expectations may result
                in removal.
            </p>
            <Linkable
                e="h2"
                id="why-reject"
                value="What are some reasons a server would be rejected?"
            />
            <p>
                Servers may be rejected after or during observation or denied observation altogether
                for a variety of reasons. These are some common reasons, but this is not an
                exhaustive list. We may tell you what the reason is if we believe you can fix it and
                would be happy to reconsider later, but sometimes we keep the reason private and may
                not reconsider.
            </p>
            <p>Click a card to learn more.</p>
            <div class="cards">
                <Card icon="report_problem" title="Problematic Behavior" expandable>
                    <p>
                        Problematic behavior from the community that is unchecked or from the staff
                        themselves (inciting raids, permitting toxicity, etc.), including if the
                        staff are causing trouble in other servers and this is known by management
                        and nothing is done.
                    </p>
                </Card>
                <Card icon="remove_moderator" title="Insufficient Moderation" expandable>
                    <p>
                        Insufficient moderation (lack of staff or lack of activity from staff). We
                        are not looking for mods to be talking in chat every day, just that rules
                        are enforced and mods are watching chat and responding to pings enough that
                        the server remains a safe environment.
                    </p>
                </Card>
                <Card icon="account_tree" title="Inadequate Structure" expandable>
                    <p>
                        Inadequate server structure (broken permissions, lack of moderation logs,
                        lack of tools for moderators, etc.). If we believe you have potential but
                        need help with your structure or moderation policies or workflows, we may
                        offer to help and induct you even if there are problems, if you demonstrate
                        willingness to improve.
                    </p>
                    <p>
                        Note that we will never force you to follow a particular structure, just
                        offer help so you can achieve your vision of an ideal environment for your
                        server.
                    </p>
                </Card>
            </div>
        </div>
    </Navigation>
</div>
