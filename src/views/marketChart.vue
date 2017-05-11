<template>
    <div class="marketChart">
        <div class="layout">
            <div class="block">
                <Card class = "span">
                    <span class="text">市场总览</span>
                    <market-stats></market-stats>
                </Card>
                <bitcoins></bitcoins>
                <c-exchange-line></c-exchange-line>
                <market-cap></market-cap>
                <exchange-volume></exchange-volume>
                <cdd-time></cdd-time>
            </div>
        </div>
    </div>
</template>

<script>
    import marketStats from '../components/sheet/Stats_Market.vue';
    import bitcoins from '../components/graph/bitcoins.vue';
    import cExchangeLine from '../components/graph/exchangeLine.vue';
    import marketCap from '../components/graph/marketCap.vue';
    import exchangeVolume from '../components/graph/exchangeVolume.vue';
    import cddTime from '../components/graph/cdd_AcgSum_time.vue'

    export default {
        data () {
            return {
                height: 400
            }
        },
        components: {
            marketStats, bitcoins, cExchangeLine, marketCap, exchangeVolume, cddTime,
        }
    }
</script>

<style scoped>
    .marketChart{
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