<template lang="html">

  <div class="panel panel-primary">
  <div class="panel-heading">{{article.title}}</div>
  <div class="panel-body ">
        <div class="col-md-12 articledetail" >
          <img :src="article.imgUrl" class="img-responsive" alt="" align="middle">
        </div>
        <div class="col-md-12">
          <div class="">
              {{article.content}}
          </div>
        </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['id'],
  data: function () {
    return {
      article: {}
    }
  },
  methods: {
    getDetail (id) {
      this.$http.get(`http://localhost:3000/api/articles/` + id)
      .then(({data}) => {
        console.log(data)
        this.article = data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getDetail(this.id)
  },
  watch: {
    id (newID) {
      this.getDetail(newID)
    }
  }
}
</script>

<style lang="css">
.articledetail{
  /*text-align: center;*/

  padding-bottom: 10px;
}


</style>
