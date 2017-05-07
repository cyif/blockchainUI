<template>
    <div class="sheet_canvas">
        <tx-rank :data="txData"></tx-rank>
        <cdd-rank :data="cddData"></cdd-rank>
        <fees-rank :data="feesData"></fees-rank>
    </div>
</template>
<script>
    import txRank from './Rank_block_txs'
    import cddRank from './Rank_block_cdd'
    import feesRank from './Rank_block_fees'
    export default {
        data () {
            return {
                txData: [],
                cddData: [],
                feesData: []
            }
        },
        mounted () {
            let _self = this;
            _self.$Loading.start();
            _self.$webApi.getBlockRank()
                .then(res => {
                    let rankData = res.data.data;
                    _self.txData = rankData.max_tx.splice(0, 10);
                    _self.cddData = rankData.max_days_destroyed.splice(0, 10);
                    _self.feesData = rankData.max_fees.splice(0, 10);
                    _self.$Loading.finish();
                })
                .catch(err => {
                    console.log(err);
                    _self.$Loading.error();
                });
        },
        components: {
            txRank, cddRank, feesRank
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
</style>
