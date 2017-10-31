<template lang="html">
  <div class="panel-body" >
    <router-link  class="list-group-item"  v-for="(article,index) in articles" :to="'/blog/' + index" :key="index" >{{article.title}}</router-link>
  </div>
</template>

<script>
export default {
  props: ['articles']
}
</script>

<style lang="css">
</style>
