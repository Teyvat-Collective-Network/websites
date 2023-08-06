<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    function update() {
        for (const element of document.querySelectorAll(
            "a:not([target=_blank]):not(.confirm-leave-class)",
        ) as NodeListOf<HTMLAnchorElement>) {
            if (element.href === "javascript:void(0)") continue;
            element.onclick = (e) =>
                e.ctrlKey ||
                e.shiftKey ||
                (confirm(
                    "Are you sure you want to leave this page? Unsaved changes may be lost.",
                ) &&
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
