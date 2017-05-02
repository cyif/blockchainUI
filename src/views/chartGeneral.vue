<template>
    <div class="generalCharts">
        <Row>
            <i-col span="2">
                <div style="min-height:400px">
                    <Affix :offset-top="200">
                        <slideNav></slideNav>
                    </Affix>
                </div>
            </i-col>
            <i-col span="22">
                <div>
                    <block-size></block-size>
                    <block-difficult></block-difficult>
                    <orphaned-blocks></orphaned-blocks>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import cBlocksTime from '../components/graph/blocks_time.vue'
    import cExchangeLine from '../components/graph/exchangeLine.vue'

    import blockDifficult from '../components/graph/block_difficulty_time.vue'
    import blockSize from '../components/graph/blockSize.vue'
    import orphanedBlocks from '../components/graph/orphanedBlocks.vue'
    import slideNav from '../components/layout/slideNav.vue'


    export default {
        data () {
            return {
                addresses_over_time: [],
                blocks_over_time: [],
                txs_per_address: [],
                blocksNb: [],
                height: 400
            }
        },
        components: {
            cBlocksTime, cExchangeLine,
            blockDifficult, blockSize, orphanedBlocks, slideNav
        }
    }
</script>

<style scoped>
    .generalCharts{
        min-height: 400px;
    }
</style>