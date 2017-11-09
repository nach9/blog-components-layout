<template lang="html">
  <form class="form-horizontal">
    <fieldset>
      <legend>Post New Article</legend>
      <div class="form-group">
        <label for="inputTitle" class="col-lg-2 control-label">Title</label>
        <div class="col-lg-10">
          <input class="form-control" id="inputTitle" placeholder="Title" type="text" v-model:value="title">
        </div>
      </div>
      <div class="form-group">
        <label for="textArea" class="col-lg-2 control-label">Content</label>
        <div class="col-lg-10">
          <textarea class="form-control" rows="3" id="textArea"></textarea>
        </div>
      </div>

      <div class="form-group">
        <div class="col-lg-10 col-lg-offset-2">
          <button type="reset" class="btn btn-default">Cancel</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  data(){
    return {
      newarticle: {
        title:
      }
    }
  }
}
</script>

<style lang="css">
</style>
