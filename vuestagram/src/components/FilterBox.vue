<template>
  <div @click="fire" :class="filter + ' filter-item'" :style="`background-image:url(${image})`">
    <div class="filter-name">
      <slot></slot>
    </div>
  </div> 
</template>

<script>

export default {
    name : 'filter-box',
    methods : {
      fire() {
        this.emitter.emit('boxClicked', this.filter);
      }
    },
    props : {
        image : String,
        filter: String,
    },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}

.filter-name {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  text-align: center;
}
</style>        