<template lang="html">
  <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">JEBlog</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li>
              <router-link to="/blog">Blog</router-link>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/blog">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
