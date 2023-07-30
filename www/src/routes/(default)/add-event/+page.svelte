<script lang="ts">
    import { goto } from "$app/navigation";
    import DatetimePicker from "$lib/DatetimePicker.svelte";
    import { Modal, Textarea } from "@daedalus-discord/webkit";
    import { marked as parse } from "marked";
    import { hex } from "wcag-contrast";

    let data: any = { start: new Date(), end: new Date(new Date().getTime() + 86400000) };
    let button: any;

    async function submit() {
        if (!data.start || !data.end || !data.title || !data.body)
            return alert("All fields except invites are required.");

        button.disabled = true;

        const request = await fetch("/add-event/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data, start: data.start.getTime(), end: data.end.getTime() }),
        });

        if (!request.ok) {
            alert(await request.text());
        } else {
            goto("/calendar");
        }

        button.disabled = false;
    }

    let open: boolean = false;

    let light_contrast: number;
    let dark_contrast: number;

    $: light_contrast = Math.round(hex("#141619", `#${data.light || "c3c5ce"}`) * 100) / 100;
    $: dark_contrast = Math.round(hex("#ebe9e6", `#${data.dark || "303136"}`) * 100) / 100;
</script>

<div class="container">
    <h2>Dates</h2>

    <h4>Start</h4>
    <DatetimePicker bind:value={data.start} show_date show_time />
    <h4>End</h4>
    <DatetimePicker bind:value={data.end} show_date show_time />

    <h2>Display</h2>

    <p>
        You can use <a
            href="https://colors-picker.com/hex-color-picker/"
            target="_blank"
            rel="noreferrer">https://colors-picker.com/hex-color-picker/</a
        > to pick out your colors. Make sure you copy the 6-digit hex code.
    </p>

    <div class="row" style="gap: 10px">
        <input type="text" bind:value={data.light} placeholder="Light Mode Background" />
        <input type="text" bind:value={data.dark} placeholder="Dark Mode Background" />
    </div>
    <br />

    <div class="row" style="gap: 10px">
        <div class="col no-center preview light-mode">
            <b>Calendar Background</b>
            <div style="background-color: #{data.light || 'c3c5ce'}">
                <h3>Event Title</h3>
            </div>
            <span>
                Text &amp; Background Contrast:
                {light_contrast}
            </span>
            {#if light_contrast < 4.5}
                <b>WARNING: Contrast should be at least 4.5</b>
            {/if}
            {#if !data.light?.match(/^([0-9A-Fa-f]{3}){1,2}$/)}
                <span>Input should be a 3- or 6-digit hex code. The preview may be invalid.</span>
            {/if}
        </div>
        <div class="col no-center preview dark-mode">
            <b>Calendar Background</b>
            <div style="background-color: #{data.dark || '303136'}">
                <h3>Event Title</h3>
            </div>
            <span>
                Text &amp; Background Contrast:
                {dark_contrast}
            </span>
            {#if dark_contrast < 4.5}
                <b>WARNING: Contrast should be at least 4.5</b>
            {/if}
            {#if !data.dark?.match(/^([0-9A-Fa-f]{3}){1,2}$/)}
                <span>Input should be a 3- or 6-digit hex code. The preview may be invalid.</span>
            {/if}
        </div>
    </div>

    <h2>Content</h2>

    <input type="text" bind:value={data.title} placeholder="Event Title" />
    <br /><br />
    <Textarea bind:value={data.body} placeholder="Body (Markdown)" />
    <br /><br />
    <button on:click={() => (open = true)}>Preview</button>

    <Modal
        bind:open
        background_color="var(--background-1)"
        overlay_color="rgb(var(--pure-rgb), 80%)"
    >
        <h2>{data.title ?? ""}</h2>
        {@html parse(data.body ?? "")}
    </Modal>

    <h2>Invites</h2>

    <input
        type="text"
        bind:value={data.invites}
        placeholder="Server Invites (space-separated codes, not links)"
    />

    <br /><br />
    <button bind:this={button} on:click={submit}>Submit</button>
</div>

<style lang="scss">
    .preview {
        gap: 20px;
        padding: 50px;
        border-radius: 5px;
        width: 100%;

        div {
            padding: 20px;
            border-radius: 5px;
        }
    }

    .light-mode {
        background-color: #c3c5ce;
        color: #141619;
    }

    .dark-mode {
        background-color: #303136;
        color: #ebe9e6;
    }
</style>
