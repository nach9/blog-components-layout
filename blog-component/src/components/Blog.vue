<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <sidenav></sidenav>
      </div>
      <div class="col-md-9">
        <router-view/>
      </div>
    </div>
  </div>

</template>

<script>
import Sidenav from '@/components/Sidenav'

export default {
  components: {
    Sidenav
  }
}
</script>

<style lang="css">
</style>
