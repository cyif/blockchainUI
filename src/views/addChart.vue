<template>
    <div class="addChart">
        <div class="layout">
            <div class="block">
                <Card class = "span">
                    <span class="text">钱包总览</span>
                    <txs-stats></txs-stats>
                </Card>
                <unique-add></unique-add>
                <br>
                <txs-address></txs-address>
                <br>
                <relation></relation>
            </div>
        </div>
    </div>
</template>
<script>
    import txsStats from '../components/sheet/Stats_txs.vue'
    import uniqueAdd from '../components/graph/uniqueAddresses.vue';
    import txsAddress from '../components/graph/txs_address.vue'
    import relation from '../components/graph/adddressRelationship.vue'

    export default {
        data () {
            return {
                height: 400
            }
        },
        components: {uniqueAdd, txsAddress, relation
        }
    }
</script>

<style scoped>
    .addChart{
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