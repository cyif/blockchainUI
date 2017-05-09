//home page

<template>
  <div class="dashboard">
    <c-overview></c-overview>
    <c-search-Top></c-search-Top>
    <c-blockRank></c-blockRank>
  </div>
</template>

<script>

  import cSearchTop from '../components/layout/searchTop.vue'
  import cBlockRank from '../components/sheet/blockRank.vue'
  import cOverview from '../components/graph/overview.vue'

  export default {
    name: "dashboard",
    components: {
      cSearchTop, cBlockRank, cOverview
    }
  }
</script>

<style scoped>
  .dashboard{
    min-height: 90%;
    font-family: shadows;
  }
</style>
