<template>
    <div>
        <add-rank :data="addData"></add-rank>
        <cdd-rank :data="cddData"></cdd-rank>
        <amount-rank :data="amountData"></amount-rank>
        <fees-rank :data="feesData"></fees-rank>
        <unspent-amount-rank :data="unspentAmountData"></unspent-amount-rank>
    </div>
</template>
<script>
    import addRank from './Rank_txs_addresses.vue'
    import cddRank from './Rank_txs_cdd.vue'
    import amountRank from './Rank_txs_amounts.vue'
    import feesRank from './Rank_txs_fees.vue'
    import unspentAmountRank from './Rank_untxs_amounts.vue'

    export default {
        data () {
            return {
                addData: [],
                cddData: [],
                feesData: [],
                amountData: [],
                unspentAmountData: []
            }
        },
        mounted () {
            let _self = this;
            _self.isLoading = true;
            _self.$webApi.getTxRank().then(res => {
                let rankData = res.data.data;
                _self.addData = rankData.max_addresses.splice(0, 10);
                _self.cddData = rankData.max_days_destroyed.splice(0, 10);
                _self.feesData = rankData.max_fees.splice(0, 10);
                _self.amountData = rankData.max_amounts_all.splice(0, 10);
                _self.unspentAmountData = rankData.max_amounts_unspent.splice(0, 10);
                _self.isLoading = false;
            })
        },
        components: {
            addRank, cddRank, amountRank, feesRank, unspentAmountRank
        }
    }
</script>

<style scoped>
    .sheet_canvas {
        margin-left: 5px;
        margin-right: 5px;
        background: transparent;
        border-radius: 8px;
    }
    .title{
        margin-left: 35px;
        font-size: medium;
        font-weight: 800;
        text-align: left;
        vertical-align: bottom;
        margin-bottom: 5px;
    }
    .block {
        margin: 10px;
    }
    .rank {
        height : 100%;
        margin : 10px;
        padding-bottom: 20px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
</style>
