<script lang="ts">
    import { onMount } from "svelte";
    import Callout from "$lib/Callout.svelte";
    import Invite from "$lib/Invite.svelte";
    import Linkable from "$lib/Linkable.svelte";
</script>

<div class="container">
    <div id="main">
        <h1>Contact us</h1>
        <Linkable id="hub" e="h2" value="TCN Hub" />
        <p>
            Join the TCN Hub to contact observers and other server staff and ask questions or give
            feedback about the TCN!
        </p>
        <br />
        <Invite
            banner="https://i.imgur.com/DXyVcRR.png"
            icon="/favicon.png"
            title="TCN Hub"
            code="FG2wpbywSx"
        />
        <Linkable id="observers" e="h2" value="Observers" />
        <div>
            {#await new Promise((r) => onMount(() => r(null)))}
                <p>Loading observers...</p>
            {:then _}
                {#await fetch("/api/observers")}
                    <p>Loading observers...</p>
                {:then response}
                    {#await response.json()}
                        <p>Loading observers...</p>
                    {:then [observers, error]}
                        {#if error}
                            <Callout style="red">
                                <p>{error}</p>
                            </Callout>
                        {/if}
                        {#if observers}
                            <ul>
                                {#each observers as observer}
                                    <li>
                                        <a href="https://discord.com/users/{observer.id}"
                                            >{observer.tag}</a
                                        >
                                        - <code>{observer.id}</code>
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                    {/await}
                {:catch _}
                    <Callout style="red">
                        <p>Fetching observers failed; please check your internet connection.</p>
                    </Callout>
                {/await}
            {/await}
        </div>
    </div>
</div>
