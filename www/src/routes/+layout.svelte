<script lang="ts" context="module">
    const offset = new Date().getTimezoneOffset();

    export async function update() {
        try {
            document;
        } catch {
            return;
        }

        for (const element of selectall<HTMLSpanElement>("span.time")) {
            try {
                const timestamp = parseInt(element.dataset.timestamp!);
                const isostring = new Date(timestamp * 1000 - offset * 60000).toISOString();

                element.innerHTML = (
                    element.classList.contains("short")
                        ? isostring.split("T")[1]
                        : isostring.replace("T", "&nbsp;&nbsp;")
                ).slice(0, -5);
            } catch {}
        }

        const cache: Record<string, string | 1> = {};
        const real = new Set<string>();

        if (select(".guild")) {
            for (const entry of await TCN.guilds()) {
                cache[entry.id] = entry.name;
                real.add(entry.id);
            }

            for (const entry of await API.guild_names()) {
                cache[entry.id] = entry.name;
            }
        }

        for (const element of selectall<DatasetElement>(".guild")) {
            const { id } = element.dataset;

            if (id === PUBLIC_HQ || id === PUBLIC_HUB) {
                element.outerHTML = `<a href="/about#organization" target="_blank"><span class="mention"><i class="material-icons">domain</i> &nbsp; ${
                    id === PUBLIC_HQ ? "TCN HQ" : "TCN Hub"
                }</span></a>`;
            } else if (cache[id] && real.has(id)) {
                element.outerHTML = `<a href="/server/${id}" target="_blank"><span class="mention"><i class="material-icons">domain</i> &nbsp; ${cache[id]}</span></a>`;
            } else {
                element.outerHTML = `<span class="mention" data-id="${id}"><i class="material-icons">domain_disabled</i> &nbsp; <s>${
                    cache[id] ? cache[id] : `<code class="plain" style="padding: 0">${id}</code>`
                }</s></span>`;
            }
        }

        if (document.querySelector(".user")) {
            (await API.get_all_tags()).forEach(
                (x: any) =>
                    (cache[x.id] = x.fake
                        ? `<s>${x.tag}</s>`
                        : x.tag.endsWith("#0")
                        ? `<b>${x.tag.slice(0, -2)}</b>`
                        : `<b>${x.tag.slice(0, -5)}</b>${x.tag.slice(-5)}`),
            );
        }

        function sync_users() {
            for (const element of document.querySelectorAll(".user") as any) {
                const id = element.dataset.id;

                if (cache[id] === 1)
                    element.outerHTML = `<span class="mention" data-id="${id}"><i class="material-icons">pin</i> &nbsp; <code class="plain" style="padding: 0">${id}</code></span>`;
                else if (cache[id])
                    element.outerHTML = `<span class="mention" data-id=${id}><i class="material-icons">alternate_email</i> &nbsp; ${cache[id]}</span>`;
            }
        }

        sync_users();

        let element: any;

        while ((element = document.querySelector(".user"))) {
            const id = element.dataset.id;

            if (cache[id]) return;

            try {
                const tag = await API.get_tag(id || "0");

                cache[id] = tag.endsWith("#0")
                    ? `<b>${tag.slice(0, -2)}</b>`
                    : `<b>${tag.slice(0, -5)}</b>${tag.slice(-5)}`;
            } catch {
                cache[id] = 1;
            }

            sync_users();
        }
    }
</script>

<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_HQ, PUBLIC_HUB, PUBLIC_TCN_API } from "$env/static/public";
    import { API, TCN } from "$lib/api";
    import { select, selectall } from "$lib/html";
    import type { DatasetElement } from "$lib/types";
    import { onMount } from "svelte";

    onMount(async () => {
        document.addEventListener("click", (e) => {
            const target = e.target as any;

            if (!target.classList.contains("mention")) return;
            if (!target.dataset.id) return;

            navigator.clipboard.writeText(target.dataset.id);
            target.style.backgroundColor = "var(--green-callout)";
            setTimeout(() => (target.style.backgroundColor = ""), 1000);
        });

        update();
        page.subscribe(() => update());
    });
</script>

<slot />
