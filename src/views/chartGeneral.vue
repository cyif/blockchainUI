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
                    <c-blocks-time></c-blocks-time>
                    <bitcoins class="v_jump"></bitcoins>
                    <c-exchange-line></c-exchange-line>
                    <exchange-volume></exchange-volume>
                    <market-cap></market-cap>

                    <block-size class="v_jump"></block-size>
                    <orphaned-blocks></orphaned-blocks>
                    <txs-block></txs-block>
                    <confirmation></confirmation>
                    <cost-txs></cost-txs>

                    <hash-rate class="v_jump"></hash-rate>
                    <block-difficult></block-difficult>
                    <miners-revenue></miners-revenue>
                    <fee-total></fee-total>

                    <unique-add class="v_jump"></unique-add>
                    <cost-txs-volume></cost-txs-volume>
                    <confirmed-txs></confirmed-txs>
                    <txs-num></txs-num>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import $ from 'jquery'

    import cBlocksTime from '../components/graph/blocks_time.vue'
    import cExchangeLine from '../components/graph/exchangeLine.vue'
    import exchangeVolume from '../components/graph/exchangeVolume.vue'

    import bitcoins from '../components/graph/bitcoins.vue'
    import marketCap from '../components/graph/marketCap.vue'

    import blockDifficult from '../components/graph/block_difficulty_time.vue'
    import blockSize from '../components/graph/blockSize.vue'
    import orphanedBlocks from '../components/graph/orphanedBlocks.vue'
    import slideNav from '../components/layout/slideNav.vue'

    import txsNum from '../components/graph/txsNum.vue'
    import txsBlock from '../components/graph/txs_Block.vue'
    import confirmation from '../components/graph/confirmationTime.vue'
    import confirmedTxs from '../components/graph/confirmedTxs.vue'
    import costTxs from '../components/graph/cost_txs.vue'
    import costTxsVolume from '../components/graph/cost_txsVolume.vue'
    import feeTotal from '../components/graph/feeTotal.vue'

    import hashRate from '../components/graph/HashRate.vue'
    import minersRevenue from '../components/graph/minersRevenue.vue'
    import uniqueAdd from '../components/graph/uniqueAddresses.vue'

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
            slideNav,
            cBlocksTime,
            bitcoins, cExchangeLine, exchangeVolume, marketCap,
            blockSize, orphanedBlocks, confirmation, costTxs, txsBlock,
            hashRate, blockDifficult, minersRevenue, feeTotal,
            uniqueAdd, confirmedTxs, costTxsVolume, txsNum
        }
    }
</script>

<style scoped>
    .generalCharts{
        min-height: 400px;
    }
</style>