<template>
    <div>
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
            _self.isLoading = true;
            _self.$webApi.getBlockRank().then(res => {
                let rankData = res.data.data;
                _self.txData = rankData.max_tx.splice(0, 10);
                _self.cddData = rankData.max_days_destroyed.splice(0, 10);
                _self.feesData = rankData.max_fees.splice(0, 10);
                _self.isLoading = false;
            })
        },
        components: {
            txRank, cddRank, feesRank
        }
    }
</script>


<style scoped>

</style>
