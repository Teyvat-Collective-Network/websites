<script lang="ts">
    import Linkable from "./Linkable.svelte";

    export let name: string;
    export let code: string = name.toUpperCase().replaceAll(/\s+/g, "_");
    export let bit: number;
    export let open: boolean;
</script>

<Linkable
    e="h5"
    {id}
    value="{name} (<code>{code}</code>){open ? ` - <code>1 << ${bit} = ${2 ** bit}</code>` : ''}"
/>
