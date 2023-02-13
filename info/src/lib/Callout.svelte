<script lang="ts" context="module">
    const styles = {
        green: { icon: "lightbulb", color: "var(--green-callout)" },
        info: { icon: "info", color: "var(--blue-callout)" },
        warn: { icon: "warning", color: "var(--yellow-callout)" },
        red: { icon: "report", color: "var(--red-callout)" }
    };
</script>

<script lang="ts">
    export let style: keyof typeof styles;
</script>

<div style="background-color: {styles[style].color}">
    <i class="material-icons">{styles[style].icon}</i>
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
