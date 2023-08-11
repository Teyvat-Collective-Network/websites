<script lang="ts">
    import { PUBLIC_TCN_AUTH } from "$env/static/public";
    import UserMention from "./UserMention.svelte";
    import type { LocalsDataUser } from "./types";

    export let user: LocalsDataUser;
    export let redirect: string;
</script>

<div class="panel highlight">
    <p>
        Logged in as <UserMention id={user.id} />. Your user ID will be submitted with this form. Not you?
        <a href="{PUBLIC_TCN_AUTH}/logout?redirect={encodeURIComponent(redirect)}">Log Out</a>
    </p>
</div>
