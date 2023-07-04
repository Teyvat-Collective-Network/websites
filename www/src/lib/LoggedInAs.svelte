<script lang="ts">
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";

    export let user: any;
    export let redirect: string;
</script>

<div class="panel highlight">
    <p>
        Logged in as <b>{user.username}</b>{#if user.discriminator !== "0"}<span
                style="color: var(--text-secondary)">#{user.discriminator}</span
            >{/if}. Your user ID will be submitted with this form. Not you?
        <a href="{PUBLIC_TCN_AUTH}/logout?redirect={encodeURIComponent(redirect)}">Log Out</a>
    </p>
</div>
