<template>
    <div class="blockChart">
        <div class="layout">
            <div class="block">
                <Card class = "span">
                    <span class="text">区块总结</span>
                    <block-stats></block-stats>
                </Card>
                <block-size></block-size>
                <txs-block></txs-block>
                <br>
                <blocks-time></blocks-time>
                <block-difficulty></block-difficulty>
                <block-time-gap></block-time-gap>
                <br>
                <miners-revenue></miners-revenue>
                <fee-total></fee-total>
                <br>
                <orphaned-blocks></orphaned-blocks>
                <hash-rate></hash-rate>
                <pools-pie></pools-pie>
            </div>
        </div>
    </div>
</template>
<script>
    import blockStats from '../components/sheet/Stats_block.vue';

    import blockSize from '../components/graph/blockSize.vue';
    import txsBlock from '../components/graph/txs_Block.vue'

    import blocksTime from '../components/graph/blocks_time.vue';
    import blockDifficulty from '../components/graph/block_difficulty_time.vue';
    import blockTimeGap from '../components/graph/blockTimeGap.vue';

    import minersRevenue from '../components/graph/minersRevenue.vue';
    import feeTotal from '../components/graph/feeTotal.vue';

    import orphanedBlocks from '../components/graph/orphanedBlocks.vue';

    import hashRate from '../components/graph/HashRate.vue';
    import poolsPie from '../components/graph/pools_pie.vue';

    export default {
        data () {
            return {
                height: 400
            }
        },
        components: {blockStats, blockSize, txsBlock, blocksTime, blockDifficulty, blockTimeGap, minersRevenue, feeTotal, orphanedBlocks, hashRate, poolsPie,
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