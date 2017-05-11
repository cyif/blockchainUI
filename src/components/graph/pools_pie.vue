饼图  7days

<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "pools_pie" class = "chart"></div>
                </div>
            </i-col>
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    export default {
        components: {ICol},
        data() {
            return {
                myChart: {},
            }
        },
        methods: {
            _init() {
                window.addEventListener('resize', function () {
                    if (this.$route.name === 'charts') {
                        this.drawChart()
                    }
                }.bind(this));
            },
        },
        mounted(){
            let myChart = this.$echarts.init(document.getElementById('pools_pie'));
            myChart.setOption({
                title: {
                    text: '几个较大矿池之间的哈希率分布估计',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x: 'center',
                    y: 'bottom',
                    data: ["Bitcoin.com",
                        "BTC.TOP",
                        "Bitcoin India",
                        "Bixin",
                        "shawnp0wers",
                        "Solo CKPool",
                        "CANOE",
                        "1Hash",
                        "Eligius",
                        "Unknown",
                        "BitClub Network",
                        "BCMonster",
                        "BATPOOL",
                        "GBMiners",
                        "SlushPool",
                        "Kano CKPool",
                        "BTCC Pool",
                        "BitFury",
                        "AntPool",
                        "F2Pool",
                        "ConnectBTC",
                        "ViaBTC",
                        "BW.COM",
                        "GoGreenLight",
                        "BTC.com",
                        "PHash.IO"]
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                series: [
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [30, 220],
                        center: ['50%', '50%'],
                        roseType: 'radius',
                        data: [
                            {value: 29, name: "Bitcoin.com"},
                            {value: 98, name: "BTC.TOP"},
                            {value: 1, name: "Bitcoin India"},
                            {value: 86, name: "Bixin"},
                            {value: 3, name: "shawnp0wers"},
                            {value: 1, name: "Solo CKPool"},
                            {value: 13, name: "CANOE"},
                            {value: 33, name: "1Hash"},
                            {value: 1, name: "Eligius"},
                            {value: 20, name: "Unknown"},
                            {value: 41, name: "BitClub Network"},
                            {value: 1, name: "BCMonster"},
                            {value: 8, name: "BATPOOL"},
                            {value: 13, name: "GBMiners"},
                            {value: 60, name: "SlushPool"},
                            {value: 16, name: "Kano CKPool"},
                            {value: 100, name: "BTCC Pool"},
                            {value: 95, name: "BitFury"},
                            {value: 162, name: "AntPool"},
                            {value: 110, name: "F2Pool"},
                            {value: 3, name: "ConnectBTC"},
                            {value: 51, name: "ViaBTC"},
                            {value: 54, name: "BW.COM"},
                            {value: 3, name: "GoGreenLight"},
                            {value: 53, name: "BTC.com"},
                            {value: 1, name: "PHash.IO"},
                        ]
                    }
                ],

            });
        }
    }
</script>

<style scoped>
    .block {
        margin: 10px;
    }
    .graph_canvas {
        margin-left: 5px;
        margin-right: 5px;
        background: #f1f2f0;
        border-radius: 8px;
    }

    .graph {
        height : 800px;
        margin : 10px;
    }
    .chart {
        width : 100%;
        height : calc(100% - 20px);
        margin : 10px;
    }
</style>