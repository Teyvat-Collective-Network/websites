<script lang="ts">
    import { goto } from "$app/navigation";
    import ListButtons from "$lib/ListButtons.svelte";
    import { Textarea } from "@daedalus-discord/webkit";

    export let data: { testimonials: { image: string; name: string; content: string }[] };

    let button: any;
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.key === "s" && e.ctrlKey) {
            button.click();
            e.preventDefault();
        }
    }}
/>

<div class="container">
    <h2>Editing Testimonials</h2>
    {#each data.testimonials as testimonial, index}
        <div class="panel">
            <h3>{testimonial.name}</h3>
            <div class="inputs">
                <span>Name</span>
                <input type="text" bind:value={testimonial.name} />
                <span>Image</span>
                <input type="text" bind:value={testimonial.image} />
                <span>Content</span>
                <Textarea bind:value={testimonial.content} />
            </div>
            <br />
            <div class="row" style="gap: 10px">
                <ListButtons bind:array={data.testimonials} {index} />
                <a
                    href={"javascript:void(0)"}
                    style="background-color: transparent; color: var(--green-text)"
                    on:click={() => (
                        data.testimonials.splice(index, 0, structuredClone(testimonial)),
                        (data = data)
                    )}
                >
                    <i class="material-icons">content_copy</i>
                </a>
            </div>
        </div>
    {/each}
    <div class="row" style="gap: 10px">
        <button
            style="background-color: var(--green-button)"
            on:click={() =>
                (data.testimonials = [...data.testimonials, { image: "", name: "", content: "" }])}
        >
            <i class="material-icons">add</i> Add Testimonial
        </button>
        <button
            bind:this={button}
            style="background-color: transparent; color: var(--blue-text)"
            on:click={() =>
                fetch("/api/testimonials", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data.testimonials),
                }).then((res) => (res.ok ? goto("/") : alert("An error occurred!")))}
        >
            <i class="material-icons">save</i> Save
        </button>
    </div>
</div>

<style lang="scss">
    .inputs {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 5px 20px;
    }

    h3 {
        margin: 0.2em 0 0.8em 0;
        padding: 0;
    }

    span {
        padding-top: 3px;
    }
</style>
