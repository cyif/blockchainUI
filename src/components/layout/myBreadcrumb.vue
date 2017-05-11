<template>
    <Breadcrumb>
        <Breadcrumb-item href="/" v-show="data.showFirst">{{names.first[data.firstData]}}</Breadcrumb-item>
        <Breadcrumb-item :href="data.secondUrl" v-show="data.showSecond">{{names.second[data.secondData]}}</Breadcrumb-item>
        <Breadcrumb-item v-show="data.showThird">{{data.thirdData}}</Breadcrumb-item>
    </Breadcrumb>
</template>

<script>
    export default {
        props: ['url'],
        data () {
            return {
                names: {
                    first: {
                        home: '首页'
                    },
                    second: {
                        timeLine: '时间轴',
                        charts: '可视化',
                        overview: '总览',
                        blockchain: '区块链',
                        block: '区块',
                        txs: '交易',
                        address: '地址',
                        addChart: '钱包摘要',
                        blockChart: '区块总览',
                        txsChart: '交易摘要',
                        marketChart: '市场总览'
                    }
                }
            }
        },
        computed : {
            data: function () {
                let data = {
                    showFirst: false,
                    showSecond: false,
                    showThird: false,
                    firstUrl: '/',
                    secondUrl: '/',
                };
                let paths = this.url.split('/');
                data.showFirst = true;
                data.firstUrl = '/';
                data.firstData = 'home';
                if (paths.length > 1 && paths[1] !== '') {
                    data.showSecond = true;
                    data.secondUrl = '/' + paths[1];
                    data.secondData = paths[1];
                }
                if (paths.length > 3) {
                    data.showThird = true;
                    data.thirdData = paths[3];
                }
                return data;
            }
        }
    }
</script>