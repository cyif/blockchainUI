<template>
    <div class = "graph_canvas">
        <row class = "block">
            <i-col span = "16">
                <div class = "graph">
                    <div id = "diff_interval" class = "chart"></div>
                </div>
            </i-col>
            <i-col span = "8">
                <div class = graph_info>
                    <p> "信息" </p>
                    <p> {{data}}</p>
                </div>
            </i-col>
        </row>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import ICol from "../../../node_modules/iview/src/components/grid/col";

    export default {
        props: ['data'],
        components: {ICol},
        data() {
            return {
                myChart: {},
                category: [],
                dottedBase: +new Date()
            }
        },
        created() {
            let dottedBase = new Date();
            for (let i = 0; i <= 30; i++) {
                let date = new Date(dottedBase);
                this.category.unshift([
                    date.getFullYear(),
                    date.getMonth() + 1,
                    date.getDate()
                ].join('-'));
                dottedBase -= 1000 * 3600 * 24
            }
        },
        methods: {
            _init() {
                window.addEventListener('resize', function () {
                    this.echarts.resize()
                }.bind(this));
            }
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
        background: #f5f7f9;
        border-radius: 8px;
    }
    .graph_info {
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 8px;
        padding-top: 10%;
        padding-bottom: 10%;
    }
    .graph {
        height : 350px;
        margin : 10px;
    }
    .chart {
        width : 100%;
        height : calc(100% - 20px);
        margin : 10px;
    }
</style>