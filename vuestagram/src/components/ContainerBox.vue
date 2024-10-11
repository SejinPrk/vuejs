<template>
  <div>
    <PostIG :postings="postings[i]" v-for="(a, i) in postings" :key="i" />
  </div>
</template>

<script>
import PostIG from './PostIG.vue';

export default {
  components: {
      PostIG,
  },
  props : {
    postings: Array
  }
}
</script>

<style>

</style>