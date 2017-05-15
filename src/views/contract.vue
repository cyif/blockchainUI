<template>
    <Card class="txsChart">
        <div class="layout">
            <div class="block">
                <contract></contract>
            </div>
        </div>
    </Card>
</template>
<script>
    import contract from '../components/graph/contract.vue'

    export default {
        data () {
            return {
                height: 400
            }
        },
        components: {contract
        }
    }
</script>

<style scoped>
    .txsChart{
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