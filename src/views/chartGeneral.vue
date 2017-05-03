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
                    <bitcoins class="v_jump"></bitcoins>  //1-1
                    <c-exchange-line></c-exchange-line>   //1-2
                    <market-cap></market-cap>   //1-3
                    <exchange-volume></exchange-volume> //1-4
                    <br>
                    <br>
                    <hr>
                    <br>
                    <br>
                    <block-size class="v_jump"></block-size>  //2-1
                    <orphaned-blocks></orphaned-blocks> //2-2
                    <txs-block></txs-block> //2-3
                    <confirmation></confirmation> //2-4
                    <br>
                    <br>
                    <hr>
                    <br>
                    <br>
                    <hash-rate class="v_jump"></hash-rate> //3-1
                    <block-difficult></block-difficult>  //3-2 3-3
                    <miners-revenue></miners-revenue>  //3-4
                    <fee-total></fee-total>  <!--//3-5 3-6-->
                    <cost-txs-volume></cost-txs-volume>  //3-7
                    <cost-txs></cost-txs>  //3-8
                    <br>
                    <br>
                    <hr>
                    <br>
                    <br>
                    <unique-add class="v_jump"></unique-add> //4-1
                    <confirmed-txs></confirmed-txs> // 4-2 每天得到确认的交易数
                    <txs-num></txs-num>  // 4-3记忆池所有交易数 记忆池大小一起
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