<template>
    <div class="sheet_canvas">
        <coins-rank :data="coinsData"></coins-rank>
        <txs-rank :data="txsData"></txs-rank>
    </div>
</template>

<script>
    import coinsRank from './Rank_add_coins.vue'
    import txsRank from './Rank_add_txs.vue'

    export default {
        data () {
            return {
                coinsData: [],
                txsData: [],
            }
        },
        components: {
            coinsRank, txsRank
        },
        mounted () {
            let _self = this;
            _self.$Loading.start();
            _self.$webApi.getAddressRank()
                .then(res => {
                    let rankData = res.data.data;
                    _self.coinsData = rankData.max_balance.splice(0, 10);
                    _self.txsData = rankData.max_txs.splice(0, 10);
                    _self.coinsData.forEach(data => {
                        data.last_tx_time_utc = data.last_tx.time_utc;
                        data.last_tx_hash = data.last_tx.hash;
                    })
                    _self.$Loading.finish();
                })
                .catch(err => {
                    console.log(err);
                    _self.$Loading.error();
                });
        },
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