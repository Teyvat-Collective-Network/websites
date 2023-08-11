<script lang="ts">
    import { goto } from "$app/navigation";
    import Icon from "$lib/Icon.svelte";
    import ListButtons from "$lib/ListButtons.svelte";
    import { API } from "$lib/api";
    import type { Testimonial } from "$lib/types";
    import { Textarea } from "@daedalus-discord/webkit";

    export let data: { testimonials: Testimonial[] };

    function save() {
        API.post_testimonials(data.testimonials)
            .then(() => goto("/"))
            .catch(() => alert("An error occurred!"));
    }
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.key === "s" && e.ctrlKey) {
            save();
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
                    on:click={() => (data.testimonials.splice(index, 0, structuredClone(testimonial)), (data = data))}
                >
                    <Icon icon="content_copy" />
                </a>
            </div>
        </div>
    {/each}
    <div class="row" style="gap: 10px">
        <button
            style="background-color: var(--green-button)"
            on:click={() => (data.testimonials = [...data.testimonials, { image: "", name: "", content: "" }])}
        >
            <Icon icon="add" /> Add Testimonial
        </button>
        <button style="background-color: transparent; color: var(--blue-text)" on:click={save}>
            <Icon icon="save" /> Save
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
