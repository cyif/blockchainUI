<template>
    <div class="txsChart">
        <div class="layout">
            <div class="block">
                <Card class = "span">
                    <span class="text">交易摘要</span>
                    <txs-stats></txs-stats>
                </Card>
                <txs-time></txs-time>
                <txs-num></txs-num>
                <txs-block></txs-block>
                <br>
                <confirmation></confirmation>
                <confirmed-txs></confirmed-txs>
                <br>
                <cost-txs></cost-txs>
                <cost-txs-volume></cost-txs-volume>
            </div>
        </div>
    </div>
</template>
<script>
    import txsStats from '../components/sheet/Stats_txs.vue'
    import txsTime from '../components/graph/txs_time.vue'
    import txsNum from '../components/graph/txsNum.vue'
    import txsBlock from '../components/graph/txs_Block.vue'
    import confirmation from '../components/graph/confirmationTime.vue'
    import confirmedTxs from '../components/graph/confirmedTxs.vue'
    import costTxs from '../components/graph/cost_txs.vue'
    import costTxsVolume from '../components/graph/cost_txsVolume.vue'

    export default {
        data () {
            return {
                height: 400
            }
        },
        components: {txsStats, txsTime, txsNum, txsBlock, confirmation, confirmedTxs, costTxs, costTxsVolume
        }
    }
</script>

<style scoped>
    .txsChart{
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