<script lang="ts" context="module">
    const styles = {
        green: { icon: "check", color: "var(--green-callout)" },
        info: { icon: "info", color: "var(--blue-callout)" },
        warn: { icon: "warning", color: "var(--yellow-callout)" },
        red: { icon: "report", color: "var(--red-callout)" },
    };
</script>

<script lang="ts">
    export let style: keyof typeof styles | null = null;
    export let color: string | null = null;
    export let icon: string | null = null;
</script>

<div style="background-color: {color ?? styles[style ?? 'info'].color}">
    <i class="material-icons">{icon ?? styles[style ?? "info"].icon}</i>
    <span><slot /></span>
</div>

<style lang="scss">
    div {
        padding: 1em;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
    }

    i {
        padding-top: 1.05em;
        padding-right: 1em;
    }
</style>
