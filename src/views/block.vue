<template>
  <div>
    <c-block-trivia></c-block-trivia>
    <c-block-rank></c-block-rank>
  </div>
</template>

<script>
  import cBlockTrivia from '../components/sheet/blockTrivia';
  import cBlockRank from '../components/sheet/blockRank';

  export default {
    name: "block",
    components: {
      cBlockTrivia, cBlockRank
    }
  }
</script>

<style scoped>
</style>
