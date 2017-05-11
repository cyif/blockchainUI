<template>
    <div class="generalCharts">
        <div class="layout">
            <div class="block">
                <market-chart></market-chart>
            </div>
            <div class="block">
                <block-chart></block-chart>
            </div>
            <div class="block">
                <txs-chart></txs-chart>
            </div>
            <div class="block">
               <add-chart></add-chart>
            </div>
        </div>
    </div>
</template>

<script>
    import marketChart from './marketChart.vue';
    import blockChart from './blockChart.vue';
    import txsChart from './txsChart.vue';
    import addChart from './addChart.vue';

    export default {
        data () {
            return {
                height: 400
            }
        },
        components: {
            marketChart, blockChart, txsChart, addChart
        }
    }
</script>

<style scoped>
    .generalCharts{
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