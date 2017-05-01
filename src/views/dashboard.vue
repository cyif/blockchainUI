//home page

<template>
  <div class="dashboard">
    <c-exchange-line></c-exchange-line>
    <c-search-Top></c-search-Top>
    <c-blockRank></c-blockRank>
  </div>
</template>

<script>
  import cCalendar from '../components/graph/calendar.vue'
  import cLine from '../components/graph/line.vue'
  import cExchangeLine from '../components/graph/exchangeLine.vue'
  import cSearchTop from '../components/layout/searchTop.vue'
  import cBlockRank from '../components/sheet/blockRank.vue'

  export default {
    name: "dashboard",
    components: {
      cCalendar, cLine, cExchangeLine, cSearchTop, cBlockRank
    }
  }
</script>

<style scoped>
  .dashboard{
    min-height: 90%;
    font-family: shadows;
  }
</style>
