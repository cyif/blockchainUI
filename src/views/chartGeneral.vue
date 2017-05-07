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
                <div class="layout">
                    <div class="block">
                        <Card class = "span">
                            <span class="text">货币信息</span>
                        </Card>
                        <bitcoins class="v_jump"></bitcoins>
                        <c-exchange-line></c-exchange-line>
                        <market-cap></market-cap>
                        <exchange-volume></exchange-volume>
                        <cdd-time></cdd-time>
                        <br>
                        <br>
                    </div>
                    <div class="block">
                        
                        <Card class="span" >
                            <span class="text">区块信息</span>
                        </Card>
                        <block-size class="v_jump"></block-size>
                        <c-blocks-time></c-blocks-time>
                        <orphaned-blocks></orphaned-blocks>
                        <txs-block></txs-block>
                        <txs-time></txs-time>
                        <confirmation></confirmation>
                        <br>
                        <br>
                    </div>
                    <div class="block">
                        <Card class="span" >
                            <span class="text">采矿信息</span>
                        </Card>
                        <hash-rate class="v_jump"></hash-rate>
                        <block-difficult></block-difficult>
                        <block-time-gap></block-time-gap>
                        <miners-revenue></miners-revenue>
                        <fee-total></fee-total>
                        <cost-txs-volume></cost-txs-volume>
                        <cost-txs></cost-txs>
                        <br>
                        <br>
                    </div>
                    <div class="block">
                        <Card class="span" >
                            <span class="text">比特币网络信息</span>
                        </Card>
                        <unique-add class="v_jump"></unique-add>
                        <txs-address></txs-address>
                        <confirmed-txs></confirmed-txs>
                        <txs-num></txs-num>
                        <br>
                        <br>
                    </div>
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
    import blockTimeGap from '../components/graph/blockTimeGap.vue'
    import blockSize from '../components/graph/blockSize.vue'
    import orphanedBlocks from '../components/graph/orphanedBlocks.vue'
    import slideNav from '../components/layout/slideNav.vue'

    import txsTime from '../components/graph/txs_time.vue'
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
    import cddTime from '../components/graph/cdd_AcgSum_time.vue'
    import txsAddress from '../components/graph/txs_address.vue'

    export default {
        data () {
            return {
                height: 400
            }
        },
        components: {
            slideNav,
            cBlocksTime,
            bitcoins, cExchangeLine, exchangeVolume, marketCap,
            blockSize, orphanedBlocks, confirmation, costTxs, txsBlock, blockTimeGap,
            hashRate, blockDifficult, minersRevenue, feeTotal,
            uniqueAdd, confirmedTxs, costTxsVolume, txsNum, txsTime, cddTime, txsAddress
        }
    }
</script>

<style scoped>
    .generalCharts{
        min-height: 400px;
    }

    .span{
        width: 100%;
        background-color: #37bbe4;
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