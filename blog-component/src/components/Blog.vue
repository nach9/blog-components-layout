<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <sidenav :articles="articles"></sidenav>
      </div>
      <div class="col-md-9">
        <router-view :articles="articles"></router-view>
      </div>
    </div>
  </div>

</template>

<script>
import Sidenav from '@/components/Sidenav'

export default {
  components: {
    Sidenav
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      this.$http.get('http://localhost:3000/api/articles')
      .then(({data}) => {
        this.articles = data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<style lang="css">
</style>
