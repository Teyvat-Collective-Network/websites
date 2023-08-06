<script lang="ts">
    import { onMount } from "svelte";
    import Callout from "$lib/Callout.svelte";
    import Invite from "$lib/Invite.svelte";
    import Linkable from "$lib/Linkable.svelte";

    export let data: any;
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
            <ul>
                {#each data.observers as observer}
                    <li>
                        <span class="mention user" data-id={observer}>
                            <i class="material-icons">pending</i> &nbsp; Loading User...
                        </span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
