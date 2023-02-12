<script lang="ts" context="module">
    const styles = {
        green: { icon: "lightbulb", color: "#243" },
        info: { icon: "info", color: "#234" },
        warn: { icon: "warning", color: "#861" },
        red: { icon: "report", color: "#522" }
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
