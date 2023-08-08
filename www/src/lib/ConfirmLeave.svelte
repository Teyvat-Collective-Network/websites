<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { selectall } from "./html";

    function update() {
        for (const element of selectall<HTMLAnchorElement>("a:not([target=_blank]):not(.confirm-leave-class)")) {
            if (element.href === "javascript:void(0)") continue;
            element.onclick = (e) =>
                e.ctrlKey ||
                e.shiftKey ||
                (confirm("Are you sure you want to leave this page? Unsaved changes may be lost.") &&
                    goto(element.href));
            element.classList.add("confirm-leave-class");
        }
    }

    onMount(() => {
        update();
        page.subscribe(() => update());
    });
</script>

<svelte:window on:beforeunload={(e) => e.preventDefault()} />
