<template>
  <div>

    <div v-if="step == 0">
      <PostIG :postings="postings[i]" v-for="(a, i) in postings" :key="i" />
    </div>
  </div>

  <!-- 필터선택페이지 -->
  <div  v-if="step == 1">
    <div class="upload-image"></div>
    <div class="filters">
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div class="upload-image"></div>
    <div class="write">
      <textarea class="write-box">write!</textarea>
    </div>
  </div>
  
</template>

<script>
import PostIG from './PostIG.vue';

export default {
  components: {
      PostIG,
  },
  props : {
    postings: Array,
    step: Number
  }
}
</script>

<style>

</style>