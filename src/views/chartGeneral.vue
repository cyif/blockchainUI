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
                    <bitcoins class="v_jump"></bitcoins>
                    <c-exchange-line></c-exchange-line>
                    <block-size class="v_jump"></block-size>
                    <block-difficult></block-difficult>
                    <orphaned-blocks></orphaned-blocks>
                    <hr>
                    <confirmed-txs class="v_jump"></confirmed-txs>
                    <confirmation></confirmation>
                    <cost-txs></cost-txs>
                    <cost-txs-volume></cost-txs-volume>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import cBlocksTime from '../components/graph/blocks_time.vue'
    import cExchangeLine from '../components/graph/exchangeLine.vue'

    import bitcoins from '../components/graph/bitcoins.vue'

    import blockDifficult from '../components/graph/block_difficulty_time.vue'
    import blockSize from '../components/graph/blockSize.vue'
    import orphanedBlocks from '../components/graph/orphanedBlocks.vue'
    import slideNav from '../components/layout/slideNav.vue'

    import txsNum from '../components/graph/txsNum.vue'
    import confirmation from '../components/graph/confirmationTime.vue'
    import confirmedTxs from '../components/graph/confirmedTxs.vue'
    import costTxs from '../components/graph/cost_txs.vue'
    import costTxsVolume from '../components/graph/cost_txsVolume.vue'

    import $ from 'jquery'

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
            bitcoins, cExchangeLine,
            blockDifficult, blockSize, orphanedBlocks, slideNav,
            confirmation, confirmedTxs, costTxs, costTxsVolume
        }
    }
</script>

<style scoped>
    .generalCharts{
        min-height: 400px;
    }
</style>