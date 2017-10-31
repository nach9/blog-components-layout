<template lang="html">

  <!-- <Blogn :articles='articles'></Blogn> -->
  <div class="">
    <div class="panel panel-primary" v-for="(article,index) in articles" :key="index">
      <div class="panel-heading">{{article.title}}</div>
      <div class="panel-body">
        <div class="col-md-4 imageblog" >
          <div class="">
            <img :src="article.imgUrl" class="img-responsive" alt="">
          </div>
          <div class="buttondetail">
            <router-link :to="'/blog/' + index" class="btn btn-warning">Detail</router-link>
          </div>
        </div>
        <div class="col-md-8">
          <p>{{article.content}}</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['articles']

}
</script>

<style lang="css">
.buttondetail{
  text-align: center;
  padding-top: 10px;
}
 /*.imageblog img{
  height: 150px;
}*/
</style>
