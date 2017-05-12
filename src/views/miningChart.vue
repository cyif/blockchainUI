<template>
    <div class="blockChart">
        <div class="layout">
            <div class="block">
                <Card class = "span">
                    <span class="text">挖矿总览</span>
                    <mining-stats></mining-stats>
                </Card>
                <online-map></online-map>
                <br>
                <miners-revenue></miners-revenue>
                <fee-total></fee-total>
                <br>
                <difficulty></difficulty>
                <hash-rate></hash-rate>
                <pools-pie></pools-pie>
            </div>
        </div>
    </div>
</template>
<script>
    import miningStats from '../components/sheet/Stats_mining.vue';

    import minersRevenue from '../components/graph/minersRevenue.vue';
    import feeTotal from '../components/graph/feeTotal.vue';

    import difficulty from '../components/graph/block_difficulty_time.vue';
    import hashRate from '../components/graph/HashRate.vue';
    import poolsPie from '../components/graph/pools_pie.vue';

    import onlineMap from '../components/graph/onlineMap.vue';

    export default {
        data () {
            return {
                height: 400
            }
        },
        components: { minersRevenue, feeTotal, difficulty,
            hashRate, poolsPie, miningStats,
            onlineMap
        }
    }
</script>

<style scoped>
    .blockChart{
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