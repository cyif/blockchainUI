<template>
    <div class="generalCharts">
        <block-size></block-size>
        <block-difficult></block-difficult>
        <orphaned-blocks></orphaned-blocks>
        <hr>
        <txs-num></txs-num>
        <confirmed-txs></confirmed-txs>
        <confirmation class="v_jump"></confirmation>
        <cost-txs></cost-txs>
        <cost-txs-volume></cost-txs-volume>
    </div>
</template>

<script>
    import cBlocksTime from '../components/graph/blocks_time.vue'
    import cExchangeLine from '../components/graph/exchangeLine.vue'

    import blockDifficult from '../components/graph/block_difficulty_time.vue'
    import blockSize from '../components/graph/blockSize.vue'
    import orphanedBlocks from '../components/graph/orphanedBlocks.vue'

    import txsNum from '../components/graph/txsNum.vue'
    import confirmation from '../components/graph/confirmationTime.vue'
    import confirmedTxs from '../components/graph/confirmedTxs.vue'
    import costTxs from '../components/graph/cost_txs.vue'
    import costTxsVolume from '../components/graph/cost_txsVolume.vue'

    import $ from 'jquery'

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
            cBlocksTime, cExchangeLine,
            blockDifficult, blockSize, orphanedBlocks,
            confirmation, confirmedTxs, costTxs, costTxsVolume, txsNum
        },
        methods: {
            jump (index) {
                let jump = document.querySelectorAll('.v_jump');
                // 获取需要滚动的距离
                let total = jump[index].offsetTop;
                $('html body').animate({scrollTop: total}, 500);
            }
        }
    }
</script>