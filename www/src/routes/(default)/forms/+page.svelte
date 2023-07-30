<script lang="ts">
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";
    import Callout from "$lib/Callout.svelte";
    import Redirect from "$lib/Redirect.svelte";

    export let data: any;
</script>

<div class="container">
    <div id="main">
        {#if !data.user}
            <Redirect
                to="{PUBLIC_TCN_AUTH}?redirect={encodeURIComponent(`${PUBLIC_DOMAIN}/forms`)}"
            />
        {:else if !data.council}
            <Callout style="red">
                <p>You are not authorized to use the TCN Forms feature!</p>
            </Callout>
        {:else}
            <h1>Forms</h1>
            <p>
                Council members can create forms here, which feature Discord authentication, easy
                Discord webhook output, answer-based flow, and input validation.
            </p>
            <h2>Your Forms</h2>
            {#if data.forms?.length}
                <ul>
                    {#each data.forms ?? [] as { id, name }}
                        <li>
                            <a href="/forms/edit/{id}" style="color: var(--blue-text)">[edit]</a>
                            <a href="/form/{id}">{name}</a>
                        </li>
                    {/each}
                </ul>
            {:else}
                <p>You haven't created any forms yet.</p>
            {/if}
            <br />
            <a href="/forms/edit/new" class="button">New Form</a>
        {/if}
    </div>
</div>
