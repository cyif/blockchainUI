<template>
    <div class="generalCharts">
        <c-blocksTime v-if="blocksNb.length > 0" :data="blocksNb"></c-blocksTime>
        <c-bitcoin></c-bitcoin>
    </div>
</template>

<script>
    import cBlocksTime from '../components/graph/blocks_time.vue'
    import cBitcoin from '../components/graph/bitcoin.vue'

    export default {
        data () {
            return {
                addresses_over_time: [],
                blocks_over_time: [],
                txs_per_address: [],
                blocksNb: []
            }
        },
        components: {
            cBlocksTime, cBitcoin
        },
        mounted() {
            let _self = this;
            _self.$Loading.start();
            _self.$webApi.getChartData(30)
                .then(res => {
                    _self.$Loading.finish();
                    let chartData = res.data.data;
                    _self.addresses_over_time = chartData.addresses_over_time;
                    _self.blocks_over_time = chartData.blocks_over_time;
                    _self.txs_per_address = chartData.txs_per_address;

                    for (let i = 0; i < _self.blocks_over_time.length; i++) {
                        let blockInfo = _self.blocks_over_time[i];
                        _self.blocksNb.push(blockInfo.nb_blocks);
                    }
                    console.log(_self.blocksNb);
                })
                .catch(err => {
                    _self.$Loading.error();
                })
        }
    }
</script>