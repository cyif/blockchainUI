<template>
    <div class="blockChart">
        <div class="layout">
            <div class="block">
                <Card class = "span">
                    <span class="text">区块总览</span>
                    <block-stats></block-stats>
                </Card>
                <block-size></block-size>
                <orphaned-blocks></orphaned-blocks>
                <br>
                <blocks-time></blocks-time>
                <block-difficulty></block-difficulty>
                <block-time-gap></block-time-gap>
            </div>
        </div>
    </div>
</template>
<script>
    import blockStats from '../components/sheet/Stats_block.vue';

    import blockSize from '../components/graph/blockSize.vue';
    import orphanedBlocks from '../components/graph/orphanedBlocks.vue';

    import blocksTime from '../components/graph/blocks_time.vue';
    import blockTimeGap from '../components/graph/blockTimeGap.vue';


    export default {
        data () {
            return {
                height: 400
            }
        },
        components: {blockStats, blockSize, orphanedBlocks, blocksTime, blockTimeGap,
        }
    }
</script>

<style scoped>
    .blockChart{
        min-height: 400px;
    }

    .span{
        width: 100%;
        background-color: #1784cd;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .text{
        font-size: 20px;
        margin-left: 45%;
        font-weight: 500;
        color: #f1f2f0;
    }
</style>