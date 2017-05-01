//home page

<template>
  <div class="dashboard">
    <c-exchange-line></c-exchange-line>
    <c-search-Top></c-search-Top>
    <c-blockRank></c-blockRank>
<<<<<<< HEAD
=======
    <c-relationship></c-relationship>
>>>>>>> 2fac712bd089a937fd3fac25d682e54db918fad5
  </div>
</template>

<script>
  import cCalendar from '../components/graph/calendar.vue'
  import cLine from '../components/graph/line.vue'
  import cExchangeLine from '../components/graph/exchangeLine.vue'
  import cSearchTop from '../components/layout/searchTop.vue'
  import cBlockRank from '../components/sheet/blockRank.vue'
  import cBlocksTime from '../components/graph/blocks_time.vue'
  import cBitcoin from '../components/graph/bitcoin.vue'
  import cRelationship from '../components/graph/relationship.vue'

  export default {
    name: "dashboard",
    components: {
      cCalendar, cLine, cExchangeLine, cSearchTop, cBlockRank, cBlocksTime, cBitcoin, cRelationship
    }
  }
</script>

<style scoped>
  .dashboard{
    min-height: 90%;
    font-family: shadows;
  }
</style>
