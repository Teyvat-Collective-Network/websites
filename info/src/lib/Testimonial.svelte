<script lang="ts">
    export let image: string;
    export let name: string;
</script>

<div id="testimonial">
    <img src={image} alt="{name} Icon" />
    <div id="right">
        <span>{name}</span>
        <div><slot /></div>
    </div>
</div>

<style lang="scss">
    #testimonial {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        width: 500px;
        height: 200px;
        background-color: var(--background-2);
        border-radius: 5px;
    }

    img {
        padding: 15px;
        width: 120px;
    }

    #right {
        display: inline-flex;
        flex-direction: column;
    }

    span {
        font-size: 150%;
        font-weight: 400;
        width: 320px;
        height: 20px;
        margin: 15px;
    }

    #right > div {
        display: inline-block;
        width: 320px;
        height: 5.25em;
        margin: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
    }
</style>
