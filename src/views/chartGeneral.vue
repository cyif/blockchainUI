<template>
    <div class="generalCharts">
        <block-size></block-size>
        <block-difficult></block-difficult>
        <orphaned-blocks></orphaned-blocks>
    </div>
</template>

<script>
    import cBlocksTime from '../components/graph/blocks_time.vue'
    import cExchangeLine from '../components/graph/exchangeLine.vue'

    import blockDifficult from '../components/graph/block_difficulty_time.vue'
    import blockSize from '../components/graph/blockSize.vue'
    import orphanedBlocks from '../components/graph/orphanedBlocks.vue'


    export default {
        data () {
            return {
                addresses_over_time: [],
                blocks_over_time: [],
                txs_per_address: [],
                blocksNb: []
            }
        },
        components: {
            cBlocksTime, cExchangeLine,
            blockDifficult, blockSize, orphanedBlocks,
        }
    }
</script>