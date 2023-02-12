<script lang="ts">
    import Navigation from "../../lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation last={["/join", "Joining the TCN"]} next={["/quickstart", "Quickstart"]}>
        <div id="main">
            <h1>HQ</h1>
            <ul>
                <li><a href="/directory">Directory</a></li>
            </ul>
            <ul>
                <li><a href="/voting">Voting</a></li>
            </ul>
            <ul>
                <li><a href="/procedures">Procedures</a></li>
            </ul>
            <ul>
                <li><a href="/akasha">Akasha System</a></li>
            </ul>
        </div>
    </Navigation>
</div>
