<script lang="ts">
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";

    export let user: any;
</script>

<div class="panel highlight">
    <p>
        Logged in as <b>{user.username}</b><span style="color: var(--text-secondary)"
            >#{user.discriminator}</span
        >. Your user ID will be submitted with this form. Not you?
        <a href="{PUBLIC_TCN_AUTH}/logout?redirect={encodeURIComponent(`${PUBLIC_DOMAIN}/apply`)}"
            >Log Out</a
        >
    </p>
</div>
