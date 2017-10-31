<template lang="html">

  <div class="list-group">
    <sidearticle :articles="articles"></sidearticle>
</div>

</template>

<script>
import Sidearticle from '@/components/Sidearticle'
export default {
  props: ['articles'],
  components: {
    Sidearticle
  }
}
</script>

<style lang="css">
</style>
