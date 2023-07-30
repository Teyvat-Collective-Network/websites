<script lang="ts" context="module">
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
</script>

<script lang="ts">
    export let value: Date | undefined;
    export let show_date: boolean = false;
    export let show_time: boolean = false;

    let year: number | undefined = value?.getFullYear();
    let month: number | undefined = value?.getMonth();
    let date: number | undefined = value?.getDate();
    let hour: number | undefined = value?.getHours();
    let minute: number | undefined = value?.getMinutes();
    let second: number | undefined = value?.getSeconds();

    const lengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    $: (lengths[1] =
        year == undefined || (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28),
        month === 1 ? (date &&= Math.min(date, lengths[1])) : null;

    let expand_date = false;
    let level: "years" | "months" | "dates" = "dates";

    let expand_time = false;
    let stage: "hour" | "minute" | "second" = "hour";
    let hover = 0;

    let offset = 0;
    $: offset =
        year == undefined || month == undefined ? 0 : (new Date(year, month, 1).getDay() + 6) % 7;

    $: value =
        !show_date ||
        (year != undefined && month != undefined && date != undefined) ||
        !show_time ||
        (hour != undefined && minute != undefined && second != undefined)
            ? new Date(year ?? 1970, month ?? 0, date ?? 1, hour ?? 0, minute ?? 0, second ?? 0)
            : undefined;

    function jump(e: any, id: string) {
        if (e.target.value.length < 2) return;
        if (id === "hour" && (e.target.value < 1 || e.target.value > lengths[month ?? 0])) return;
        if (id === "minute" && (e.target.value < 0 || e.target.value > 23)) return;
        if (id === "second" && (e.target.value < 0 || e.target.value > 59)) return;

        document.getElementById(id)!.focus();
    }
</script>

<svelte:window on:click={() => (expand_date = expand_time = false)} />

<div class="row" style="gap: 10px">
    {#if show_date}
        <span style="position: relative" class="inline-row">
            <a
                href={"javascript:void(0)"}
                class="inline-row"
                on:click={(e) => ((expand_date = true), (expand_time = false), e.stopPropagation())}
            >
                <i class="material-icons">event</i>
            </a>
            {#if expand_date}
                <div
                    class="panel"
                    on:click={(e) => e.stopPropagation()}
                    on:keydown={() => {}}
                    style="position: absolute; background-color: var(--background-3); border: 1px solid var(--text-accent); top: 50px"
                >
                    <h5>Select&nbsp;Date</h5>
                    <a
                        href={"javascript:void(0)"}
                        class="inline-row"
                        on:click={() => {
                            const now = new Date();
                            year = now.getFullYear();
                            month = now.getMonth();
                            date = now.getDate();
                            level = "dates";
                        }}
                        style="gap: 10px"
                    >
                        <i class="material-icons">today</i> today
                    </a>
                    {#if level == "dates"}
                        {#if year != undefined && month != undefined}
                            <table>
                                <tr>
                                    <td>
                                        <a
                                            href={"javascript:void(0)"}
                                            class="row"
                                            on:click={() => (year = (year ?? 0) - 1)}
                                        >
                                            <i class="material-icons">chevron_left</i>
                                        </a>
                                    </td>
                                    <td colspan={5}>
                                        <a
                                            href={"javascript:void(0)"}
                                            on:click={() => (level = "years")}
                                        >
                                            {year}
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            href={"javascript:void(0)"}
                                            class="row"
                                            on:click={() => (year = (year ?? 0) + 1)}
                                        >
                                            <i class="material-icons">chevron_right</i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href={"javascript:void(0)"}
                                            class="row"
                                            on:click={() => (
                                                (year = month === 0 ? (year ?? 0) - 1 : year),
                                                (month = month === 0 ? 11 : (month ?? 0) - 1),
                                                (date = Math.min(date ?? 1, lengths[month]))
                                            )}
                                        >
                                            <i class="material-icons">chevron_left</i>
                                        </a>
                                    </td>
                                    <td colspan={5}>
                                        <a
                                            href={"javascript:void(0)"}
                                            on:click={() => (level = "months")}
                                        >
                                            {months[month]}
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            href={"javascript:void(0)"}
                                            class="row"
                                            on:click={() => (
                                                (year = month === 11 ? (year ?? 0) + 1 : year),
                                                (month = month === 11 ? 0 : (month ?? 0) + 1),
                                                (date = Math.min(date ?? 1, lengths[month]))
                                            )}
                                        >
                                            <i class="material-icons">chevron_right</i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    {#each new Array(offset).fill(0) as _}
                                        <td />
                                    {/each}
                                    {#each new Array(7 - offset).fill(0) as _, i}
                                        <td style="padding: 0 7px">
                                            <a
                                                href={"javascript:void(0)"}
                                                on:click={() => (
                                                    (date = i + 1), (expand_date = false)
                                                )}
                                            >
                                                <code class="plain" style="padding: 0">
                                                    {i + 1}
                                                </code>
                                            </a>
                                        </td>
                                    {/each}
                                </tr>
                                {#each new Array(5).fill(0) as _, row}
                                    {#if row * 7 + 7 <= lengths[month]}
                                        <tr>
                                            {#each new Array(7).fill(0) as _, i}
                                                <td style="padding: 0 7px">
                                                    {#if row * 7 + i + 7 <= lengths[month]}
                                                        <a
                                                            href={"javascript:void(0)"}
                                                            on:click={() => (
                                                                (date = row * 7 + i + 7),
                                                                (expand_date = false)
                                                            )}
                                                        >
                                                            <code class="plain" style="padding: 0">
                                                                {row * 7 + i + 7}
                                                            </code>
                                                        </a>
                                                    {/if}
                                                </td>
                                            {/each}
                                        </tr>
                                    {/if}
                                {/each}
                            </table>
                        {/if}
                    {:else if level == "months"}
                        <table>
                            <tr>
                                <td>
                                    <a
                                        href={"javascript:void(0)"}
                                        class="row"
                                        on:click={() => (year = (year ?? 0) - 1)}
                                    >
                                        <i class="material-icons">chevron_left</i>
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href={"javascript:void(0)"}
                                        on:click={() => (level = "years")}
                                    >
                                        {year}
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href={"javascript:void(0)"}
                                        class="row"
                                        on:click={() => (year = (year ?? 0) + 1)}
                                    >
                                        <i class="material-icons">chevron_right</i>
                                    </a>
                                </td>
                            </tr>
                            {#each [0, 1, 2, 3] as row}
                                <tr>
                                    {#each [0, 1, 2] as col}
                                        <td style="padding: 0 10px">
                                            <a
                                                href={"javascript:void(0)"}
                                                on:click={() => (
                                                    (month = row * 3 + col),
                                                    (level = "dates"),
                                                    (date = Math.min(date ?? 1, lengths[month]))
                                                )}
                                            >
                                                <code class="plain" style="padding: 0">
                                                    {months[row * 3 + col]}
                                                </code>
                                            </a>
                                        </td>
                                    {/each}
                                </tr>
                            {/each}
                        </table>
                    {:else if level == "years"}
                        <table>
                            <tr>
                                <td>
                                    <a
                                        href={"javascript:void(0)"}
                                        class="row"
                                        on:click={() => (year = (year ?? 0) - 10)}
                                    >
                                        <i class="material-icons">chevron_left</i>
                                    </a>
                                </td>
                                <td style="padding: 0; border: none">
                                    <table style="border: none">
                                        {#each [0, 1, 2] as row}
                                            <tr style="border: none">
                                                {#each [0, 1, 2, 3] as col}
                                                    {@const this_year =
                                                        (year ?? 0) -
                                                        ((year ?? 0) % 10) -
                                                        1 +
                                                        row * 4 +
                                                        col}

                                                    <td
                                                        style="{row === 0
                                                            ? 'border-top: none;'
                                                            : ''} {row === 2
                                                            ? 'border-bottom: none;'
                                                            : ''} {col === 0
                                                            ? 'border-left: none;'
                                                            : ''} {col === 3
                                                            ? 'border-right: none;'
                                                            : ''}"
                                                    >
                                                        <a
                                                            href={"javascript:void(0)"}
                                                            on:click={() => (
                                                                (year = this_year),
                                                                (level = "months")
                                                            )}
                                                        >
                                                            <code class="plain" style="padding: 0">
                                                                {this_year}
                                                            </code>
                                                        </a>
                                                    </td>
                                                {/each}
                                            </tr>
                                        {/each}
                                    </table>
                                </td>
                                <td>
                                    <a
                                        href={"javascript:void(0)"}
                                        class="row"
                                        on:click={() => (year = (year ?? 0) + 10)}
                                    >
                                        <i class="material-icons">chevron_right</i>
                                    </a>
                                </td>
                            </tr>
                        </table>
                    {/if}
                </div>
            {/if}
        </span>
        <label>
            Y:
            <input
                type="number"
                bind:value={year}
                style="width: 80px; {year == undefined ? 'outline: 2px solid var(--red-text)' : ''}"
            />
        </label>
        <label>
            M:
            <select bind:value={month}>
                {#each months as name, index}
                    <option value={index}>{name}</option>
                {/each}
            </select>
        </label>
        <label>
            D:
            <input
                type="number"
                bind:value={date}
                min={1}
                max={lengths[month ?? 0]}
                style="width: 32px; {date == undefined || date > lengths[month ?? 0]
                    ? 'outline: 2px solid var(--red-text)'
                    : ''}"
                on:input={(e) => jump(e, "hour")}
            />
        </label>
        {#if show_time}
            <span />
        {/if}
    {/if}
    {#if show_time}
        <span style="position: relative" class="inline-row">
            <a
                href={"javascript:void(0)"}
                class="inline-row"
                on:click={(e) => (
                    (expand_time = true),
                    (hover = hour ?? 0),
                    (stage = "hour"),
                    (expand_date = false),
                    e.stopPropagation()
                )}
            >
                <i class="material-icons">schedule</i>
            </a>
            {#if expand_time}
                <div
                    class="panel"
                    on:click={(e) => e.stopPropagation()}
                    on:keydown={() => {}}
                    style="position: absolute; background-color: var(--background-3); border: 1px solid var(--text-accent); top: 50px"
                >
                    <h5>Select&nbsp;Time</h5>
                    <a
                        href={"javascript:void(0)"}
                        class="inline-row"
                        on:click={() => {
                            const now = new Date();
                            hour = now.getHours();
                            minute = now.getMinutes();
                            second = now.getSeconds();
                            expand_time = false;
                        }}
                        style="gap: 10px"
                    >
                        <i class="material-icons">today</i> now
                    </a>
                    {#if stage == "hour"}
                        <div style="position: relative">
                            {#each new Array(24).fill(0) as _, h}
                                <span
                                    class="row"
                                    style="position: absolute; cursor: default; width: 40px; height: 40px; z-index: 1; justify-content: center; border-radius: 50%; top: {Math.cos(
                                        (h / 6 + 1) * Math.PI,
                                    ) *
                                        (h >= 12 ? 160 : 120) +
                                        150}px; left: {Math.sin((h / 6) * Math.PI) *
                                        (h >= 12 ? 160 : 120) +
                                        150}px; {hover === h
                                        ? 'background-color: var(--accent)'
                                        : ''}"
                                    on:mouseenter={() => (hover = h)}
                                >
                                    <a
                                        href={"javascript:void(0)"}
                                        on:click={() => (
                                            (hour = h), (hover = minute ?? 0), (stage = "minute")
                                        )}
                                    >
                                        <code class="plain" style="padding: 0">
                                            {h.toString().padStart(2, "0")}
                                        </code>
                                    </a>
                                </span>
                            {/each}
                            <hr
                                style="position: absolute; width: {hover >= 12
                                    ? 160
                                    : 120}px; top: 160px; left: 169px; border: 2px solid var(--accent); transform-origin: 0 50%; transform: rotate({((hover -
                                    3) /
                                    6) *
                                    180}deg)"
                            />
                            <span
                                class="row"
                                style="position: absolute; color: var(--text-secondary); font-size: 200%; top: 140px; left: 100px; justify-content: center; width: 140px; height: 60px"
                            >
                                <code class="plain">HOURS</code>
                            </span>
                        </div>
                    {:else}
                        <div style="position: relative">
                            {#each new Array(60).fill(0) as _, t}
                                {#if t % 5 === 0}
                                    <span
                                        class="row"
                                        style="position: absolute; cursor: default; width: 40px; height: 40px; z-index: 1; justify-content: center; border-radius: 50%; top: {Math.cos(
                                            (t / 30 + 1) * Math.PI,
                                        ) *
                                            120 +
                                            150}px; left: {Math.sin((t / 30) * Math.PI) * 120 +
                                            150}px"
                                    >
                                        <code class="plain" style="padding: 0">
                                            {t.toString().padStart(2, "0")}
                                        </code>
                                    </span>
                                {/if}
                                <span
                                    class="row"
                                    style="position: absolute; cursor: default; width: 6px; height: 20px; z-index: 1; margin-left: -1px; border-radius: 2px; top: {Math.cos(
                                        (t / 30 + 1) * Math.PI,
                                    ) *
                                        160 +
                                        160}px; left: {Math.sin((t / 30) * Math.PI) * 160 +
                                        167}px; transform: rotate({(t / 30) * 180}deg)"
                                >
                                    <a
                                        href={"javascript:void(0)"}
                                        on:click={() =>
                                            stage === "minute"
                                                ? ((minute = t),
                                                  (hover = second ?? 0),
                                                  (stage = "second"))
                                                : ((second = t), (expand_time = false))}
                                        on:mouseenter={() => (hover = t)}
                                    >
                                        <code
                                            class="plain"
                                            style="padding: 0; {t % 5 === 0
                                                ? 'font-size: 120%; margin-left: -1.5px'
                                                : ''}">|</code
                                        >
                                    </a>
                                </span>
                            {/each}
                            <hr
                                style="position: absolute; width: 160px; top: 160px; left: 169px; border: 2px solid var(--accent); transform-origin: 0 0; transform: rotate({((hover -
                                    15) /
                                    30) *
                                    180}deg)"
                            />
                            <span
                                class="row"
                                style="position: absolute; color: var(--text-secondary); font-size: 200%; top: 140px; left: 100px; justify-content: center; width: 140px; height: 60px"
                            >
                                <code class="plain">{stage.toUpperCase()}S</code>
                            </span>
                        </div>
                    {/if}
                    <div style="width: 340px; height: 360px" />
                </div>
            {/if}
        </span>
        <label>
            H:
            <input
                type="number"
                id="hour"
                bind:value={hour}
                min={0}
                max={23}
                style="width: 32px; {hour == undefined || hour < 0 || hour > 23
                    ? 'outline: 2px solid var(--red-text)'
                    : ''}"
                on:input={(e) => jump(e, "minute")}
            />
        </label>
        <label>
            M:
            <input
                type="number"
                id="minute"
                bind:value={minute}
                min={0}
                max={59}
                style="width: 32px; {minute == undefined || minute < 0 || minute > 59
                    ? 'outline: 2px solid var(--red-text)'
                    : ''}"
                on:input={(e) => jump(e, "second")}
            />
        </label>
        <label>
            S:
            <input
                type="number"
                id="second"
                bind:value={second}
                min={0}
                max={59}
                style="width: 32px; {second == undefined || second < 0 || second > 59
                    ? 'outline: 2px solid var(--red-text)'
                    : ''}"
            />
        </label>
    {/if}
    <a
        href={"javascript:void(0)"}
        class="inline-row"
        on:click={() => {
            const now = new Date();
            year = now.getFullYear();
            month = now.getMonth();
            date = now.getDate();
            hour = now.getHours();
            minute = now.getMinutes();
            second = now.getSeconds();
        }}
        style="gap: 10px"
    >
        <i class="material-icons">update</i> now
    </a>
</div>

<style lang="scss">
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }

    td {
        text-align: center;
    }

    a.row {
        justify-content: center;
    }
</style>
