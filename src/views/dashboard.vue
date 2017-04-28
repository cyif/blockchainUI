<template>
  <div class="dashboard">
    <c-exchange-line></c-exchange-line>
    <c-search></c-search>
  </div>
</template>

<script>
  import cCalendar from '../components/graph/calendar.vue'
  import cLine from '../components/graph/line.vue'
  import cExchangeLine from '../components/graph/exchangeLine.vue'
  import cSearch from '../components/layout/search.vue'


  export default {
    name: "dashboard",
    components: {
      cCalendar, cLine, cExchangeLine, cSearch
    }
  }
</script>

<style scoped>
  .dashboard{
    min-height: 90%;
    font-family: shadows;
  }
</style>
