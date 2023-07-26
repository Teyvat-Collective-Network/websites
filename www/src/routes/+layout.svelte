<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_TCN_API } from "$env/static/public";
    import { onMount } from "svelte";

    const offset = new Date().getTimezoneOffset();

    onMount(async () => {
        document.addEventListener("click", (e) => {
            const target = e.target as any;

            if (!target.classList.contains("mention")) return;
            if (!target.dataset.id) return;

            navigator.clipboard.writeText(target.dataset.id);
            target.style.backgroundColor = "var(--green-callout)";
            setTimeout(() => (target.style.backgroundColor = ""), 1000);
        });

        async function update() {
            for (const element of document.querySelectorAll("span.time") as any) {
                const timestamp = parseInt(element.dataset.timestamp);
                element.innerHTML = new Date(timestamp * 1000 - offset * 60000)
                    .toISOString()
                    .replace("T", "&nbsp;&nbsp;")
                    .slice(0, -5);
            }

            const cache: Record<string, any> = {};

            for (const element of document.querySelectorAll(".guild") as any) {
                const id = element.dataset.id;

                try {
                    if (cache[id] === 1) throw 0;

                    if (!cache[id]) {
                        const request = await fetch(`${PUBLIC_TCN_API}/guilds/${id}`);
                        if (!request.ok) throw 0;

                        const response = await request.json();
                        cache[id] = response.name;
                    }

                    element.outerHTML = `<a href="/server/${id}" target="_blank"><span class="mention"><i class="material-icons">domain</i> &nbsp; ${cache[id]}</span></a>`;
                } catch {
                    cache[id] = 1;
                    element.outerHTML = `<span class="mention" data-id="${id}"><i class="material-icons">domain_disabled</i> &nbsp; <s><code class="plain" style="padding: 0">${id}</code></s></span>`;
                }
            }

            for (const element of document.querySelectorAll(".user") as any) {
                const id = element.dataset.id;

                try {
                    if (cache[id] === 1) throw 0;

                    if (!cache[id]) {
                        const request = await fetch(`/api/get-tag/${id}`);
                        if (!request.ok) throw 0;

                        const response = await request.text();

                        cache[id] = response.endsWith("#0")
                            ? `<b>${response.slice(0, -2)}</b>`
                            : `<b>${response.slice(0, -5)}</b>${response.slice(-5)}`;
                    }

                    element.outerHTML = `<span class="mention" data-id="${id}"><i class="material-icons">alternate_email</i> ${cache[id]}</span>`;
                } catch {
                    cache[id] = 1;
                    element.outerHTML = `<span class="mention" data-id="${id}"><i class="material-icons">pin</i> &nbsp; <code class="plain" style="padding: 0">${id}</code></span>`;
                }
            }
        }

        update();
        page.subscribe(() => update());
    });
</script>

<slot />
