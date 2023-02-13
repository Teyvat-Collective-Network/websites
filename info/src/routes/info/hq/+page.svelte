<script lang="ts">
    import Navigation from "../../../lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation
        last={["/info/definitions-organization", "Definitions & Organization"]}
        next={["/info/quickstart", "Quickstart"]}
    >
        <div id="main">
            <h1>HQ</h1>
            <ul>
                <li><a href="/info/directory">Directory</a></li>
            </ul>
            <ul>
                <li><a href="/info/voting">Voting</a></li>
            </ul>
            <ul>
                <li><a href="/info/procedures">Procedures</a></li>
            </ul>
            <ul>
                <li><a href="/info/akasha">Akasha System</a></li>
            </ul>
        </div>
    </Navigation>
</div>
