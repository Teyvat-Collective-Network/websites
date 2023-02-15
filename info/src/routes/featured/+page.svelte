<template lang="pug">
    .container
        #main
            h1 Featured Content
            .announcement.highlight
                div
                    i.material-icons campaign
                    span New Banshare System
                div
                    p We are rolling out our new banshare system over the next few weeks. Instead of just publishing them through an announcement channel, it will now be posted by a bot. This lets us ensure banshares are only being used in TCN servers but also allows for automated actions. Servers can now set a threshold to automatically ban users or have a button to execute a banshare with one simple click.
                    p To get started, go to <a href="/info/banshares">the banshare help page</a>.
</template>

<style lang="scss">
    .announcement {
        display: flex;
        flex-direction: column;
        padding: 1.5em;
        border-radius: 5px;

        div:first-of-type {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1em;

            span {
                font-weight: 400;
                font-size: 120%;
            }
        }

        &:not(.highlight) {
            background-color: var(--background-2);
        }

        &.highlight {
            background-color: var(--accent-less);
        }
    }
</style>
