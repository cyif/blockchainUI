<template>
    <div class="sheet_canvas">
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
            _self.$Loading.start();
            _self.$webApi.getTxRank()
                .then(res => {
                    let rankData = res.data.data;
                    _self.addData = rankData.max_addresses.splice(0, 10);
                    _self.cddData = rankData.max_days_destroyed.splice(0, 10);
                    _self.feesData = rankData.max_fees.splice(0, 10);
                    _self.amountData = rankData.max_amounts_all.splice(0, 10);
                    _self.unspentAmountData = rankData.max_amounts_unspent.splice(0, 10);
                    _self.$Loading.finish();
                })
                .catch(err => {
                    console.log(err);
                    _self.$Loading.error();
                });
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
        font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;
    }
</style>
