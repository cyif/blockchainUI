<template>
    <div>
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
            _self.$webApi.getAddressRank().then(res => {
                let rankData = res.data.data;
                _self.coinsData = rankData.max_balance.splice(0, 10);
                _self.txsData = rankData.max_txs.splice(0, 10);
                _self.coinsData.forEach(data => {
                    data.last_tx_time_utc = data.last_tx.time_utc;
                    data.last_tx_hash = data.last_tx.hash;
                })
            })
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