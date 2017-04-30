<template>
    <div class="sheet_canvas">
        <block-info></block-info>
    </div>
</template>

<script>
    import blockInfo from '../components/sheet/Info_block.vue'

    export default {
        data () {
            return {}
        },

        components : {
            blockInfo
        }
    }
</script>

<style>
    .sheet_canvas {
        margin-left: 5px;
        margin-right: 5px;
        background: transparent;
        border-radius: 8px;
        min-height: 350px;
        font-family: flamenco;
    }
</style>