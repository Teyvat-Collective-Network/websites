<script lang="ts">
    import Callout from "$lib/Callout.svelte";
    import Image from "$lib/Image.svelte";
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation last={["/info/discord#permissions", "Discord Help"]}>
        <div id="main">
            <h1>Permissions</h1>
            <Linkable id="introduction" e="h2" value="Introduction" />
            <p>
                Permissions are the way you control what users are able and not able to do on your
                server. Managing permissions correctly is extremely important to prevent abuse while
                giving your members an optimal experience.
            </p>
            <p>
                However, it can be difficult to manage them correctly, and even small exploits that
                do not cause major issues can still make the server appear disorganized and poorly
                operated.
            </p>
            <p>
                In this guide, we explain the details behind how permissions interact and are
                calculated. Additionally, there are often multiple ways to technically obtain the
                same effect, but some are much harder to maintain and can cause restrictions later
                on, so we give recommendations for how you may want to set things up.
            </p>
            <Linkable id="mechanics" e="h2" value="Mechanics" />
            <p>
                Certain actions like deleting messages apply in a specific channel, and the
                permissions that allow those can be set at a channel level. Categories can have
                these permissions set, but they do not actually give the permissions in their child
                channels, it just determines what overrides new channels in the category have, and
                synced channels (children with the exact same overrides) will be updated when the
                category's overrides are edited.
            </p>
            <p>The priority order of permissions and overrides is as follows:</p>
            <ul>
                <li>
                    If the user is the owner or has a role with the
                    <a href="/info/discord/permission-list#ADMINISTRATOR">Administrator</a> permission,
                    they are allowed.
                </li>
                <li>
                    If the user is timed out or has not passed membership screening and the
                    permission is not
                    <a href="/info/discord/permission-list#VIEW_CHANNEL">View Channel</a>
                    or
                    <a href="/info/discord/permission-list#READ_MESSAGE_HISTORY">
                        Read Message History
                    </a>, they are denied.
                </li>
                <li>If the user has a user-level override, it applies.<sup>&dagger;</sup></li>
                <li>
                    If the user has a role that has a role-level override that allows that
                    permission, they are allowed.<sup>&dagger;</sup>
                </li>
                <li>
                    If the user has a role that has a role-level override that denies that
                    permission, they are denied.<sup>&dagger;</sup>
                </li>
                <li>
                    If there is an <code>@everyone</code>-level override, it applies.
                    <sup>&dagger;</sup>
                </li>
                <li>
                    If the user has a role that has that permission globally (including
                    <code>@everyone</code>), they are allowed.
                </li>
                <li>If all fail, they are denied.</li>
            </ul>
            <p>
                <sup>&dagger;</sup> If the permission is not channel-level, e.g.
                <a href="/info/discord/permission-list#BAN_MEMBERS">Ban Members</a>, this does not
                apply.
            </p>
            <Callout style="red">
                <p>
                    Role-level allow overrides <b>always</b> take priority over deny overrides. Role
                    hierarchy does <b>not</b> matter here. If you allow an access role permission to
                    send messages, your mute role will no longer work. See the
                    <a href="#how-to">how-to</a> section for guides on common permission patterns and
                    how to set them up correctly.
                </p>
            </Callout>
            <br />
            <Callout style="info">
                <p>
                    Some permissions are dependent on other permissions. For example,
                    <a href="/info/discord/permission-list#SEND_MESSAGES">Send Messages</a> only matters
                    if the user can see the channel; if they can't, they can't send messages, even through
                    manual API calls.
                </p>
            </Callout>
            <Linkable id="how-to" e="h2" value="How To" />
            <Linkable id="introduction" e="h3" value="Introduction" />
            <p>
                Due to the way permissions are calculated (allow role-level overrides always
                overrule deny role-level overrides regardless of hierarchy), you want to grant as
                few allow overrides as possible. Note that allow <code>@everyone</code>-level
                overrides are not an issue as role-level overrides take priority.
            </p>
            <p>
                In the following sections, we cover many common patterns, the best way to set them
                up to optimize maintainability, and common pitfalls to watch out for.
            </p>
            <Linkable id="verification-role" e="h3" value="How do I set up a verification role?" />
            <p>
                Most servers have a role that is granted by clicking on the verification prompt to
                confirm that they have read the rules (as a weak filter against bots). Typically,
                channels are only visible to verified users except landing channels. Due to the way
                permissions are calculated, giving the verified role allow overrides will prevent
                you from denying them on other roles. For example, giving it
                <a href="/info/discord/permission-list#SEND_MESSAGES">Send Messages</a> via an override
                will stop mute roles from working.
            </p>
            <p>
                Before you set one up, consider using Discord's built-in member verification. This
                is stronger than verification roles, as a user who has not passed membership
                screening cannot DM server members. It automatically disables all interaction,
                including clicking buttons or adding to existing reactions. Verification roles are
                already a weak filter against bots, and allowing <code>@everyone</code> to see all public
                channels does not actually create any tangible threat.
            </p>
            <p>
                If you've decided to do this anyway, the best way to set it up is to deny
                <code>@everyone</code>
                and grant your verification role
                <a href="/info/discord/permission-list#VIEW_CHANNEL">View Channel</a>
                at a base level. All channels are now automatically visible only to verified users. Then,
                just allow <code>@everyone</code> permission to see your landing channels via
                overrides (remember that allow <code>@everyone</code>-level overrides are not an
                issue).
            </p>
            <Image src="https://i.imgur.com/VnnTrfc.png" alt="everyone permission" />
            <Image src="https://i.imgur.com/x3yJTJ1.png" alt="verified permission" />
            <Image src="https://i.imgur.com/ZacXV9M.png" alt="everyone overrides" />
            <p>
                In addition to not using unnecessary allow overrides, this is actually easier as you
                will only need to set up overrides on your landing channels. A common way to do this
                is to use a deny <code>@everyone</code>-level and allow role-level override on all
                non-landing channels, which is not only harder but also introduces allow role-level
                overrides.
            </p>
            <p>
                If you want a public channel that <code>@everyone</code> can see but only verified
                users can send messages in, just disable
                <a href="/info/discord/permission-list#SEND_MESSAGES">Send Messages</a>
                for <code>@everyone</code> and enable it for the verified role. If you then need a
                channel that <code>@everyone</code> can send messages in, just enable that via an override.
            </p>
            <Image src="https://i.imgur.com/CTf2yxh.png" alt="everyone permission" />
            <Image src="https://i.imgur.com/YVdwg1W.png" alt="verified permission" />
            <Image src="https://i.imgur.com/yu3QZgx.png" alt="everyone overrides" />
            <Linkable id="access-roles" e="h3" value="How do I set up access roles" />
            <p>
                You may want to lock some channels behind access roles such as reaction roles, or
                staff channels for staff roles. For example, you might want to restrict your leaks
                channel behind a self-assignable role. In this case, you will need to use an allow
                role-level override. It is unavoidable, but this is acceptable because usually you
                don't need to set deny role-level overrides just for viewing the channel.
            </p>
            <p>
                Firstly, add a deny <code>@everyone</code>-level override for
                <a href="/info/discord/permission-list#VIEW_CHANNEL">View Channel</a>. Then, add
                allow role-level overrides for any roles you want to grant access.
            </p>
            <p>
                Importantly, do not enable any permissions other than View Channel like sending
                messages. If a user cannot see a channel, they cannot take any actions relating to
                the channel.
            </p>
            <Linkable
                id="public-staff-channels"
                e="h3"
                value="What about public channels that only staff can send messages in?"
            />
            <p>
                For this, you will need to grant an allow role-level override. However, if it's
                going to staff, it is fine. The reason you want to avoid allow role-level overrides
                is that it stops you from disabling it per role via things like mute roles. However,
                you should not need to mute your staff members. Also, you have the option to use
                timeouts if needed.
            </p>
            <Linkable id="mute-role" e="h3" value="How do I set up a mute role?" />
            <p>
                Before you read this, consider if you want to use mute roles. Discord now has
                timeouts which are very similar but built into the system. There are several
                advantages - it makes it obvious to the user that they are timed out, lets
                moderators easily identify that they are timed out without letting other users be
                able to know, and shows a countdown to the user in the client.
            </p>
            <p>
                There are a few disadvantages as well - it can only last up to 28 days, and it
                disables all permissions except view channel and read message history. In fact, they
                cannot even react, even to reactions that already exist, and cannot interact with
                buttons either. This prevents them from using reaction roles.
            </p>
            <p>
                If you have decided that you want to use a mute role instead, you will want to set
                an override in every channel (where the mute role matters) that denies permissions
                you want muted users to be unable to use. We recommend Send Messages, Send Messages
                in Threads, Add Reactions, Connect, and Use Application Commands. If you allow your
                members to create threads, you should deny that to the mute role as well.
            </p>
        </div>
    </Navigation>
</div>
