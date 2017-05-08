//home page

<template>
  <div class="dashboard">
    <relation></relation>
    <c-exchange-line></c-exchange-line>
    <c-search-Top></c-search-Top>
    <c-blockRank></c-blockRank>
    <c-bitcoins></c-bitcoins>
  </div>
</template>

<script>
  import cCalendar from '../components/graph/calendar.vue'
  import cLine from '../components/graph/line.vue'
  import cExchangeLine from '../components/graph/exchangeLine.vue'
  import cSearchTop from '../components/layout/searchTop.vue'
  import cBlockRank from '../components/sheet/blockRank.vue'
  import cBlocksTime from '../components/graph/blocks_time.vue'
  import cRelationship from '../components/graph/relationship.vue'
  import cDiffInternal from '../components/graph/block_difficulty_time.vue'
  import cBitcoins from '../components/graph/bitcoins.vue'
  import relation from '../components/graph/adddressRelationship.vue'
  export default {
    name: "dashboard",
    components: {
      cCalendar, cLine, cExchangeLine, cSearchTop, cBlockRank, cBlocksTime, cRelationship, cDiffInternal, cBitcoins
      ,relation
    }
  }
</script>

<style scoped>
  .dashboard{
    min-height: 90%;
    font-family: shadows;
  }
</style>
