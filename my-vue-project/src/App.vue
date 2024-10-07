<template>

<div v-if="1 == 23">
  안녕하세요
</div>
<div v-else-if="1 == 3">
  안녕하세요2
</div>

  <div>
    <div class="black-bg" v-if="modalStatus == true">
      <div class="white-bg">
        <h4>{{ onerooms[clicked].title }}</h4>
        <p>{{상세페이지내용}}</p>
        <button @click="modalStatus = false">닫기</button>
      </div>
    </div>


    <div class="menu">
      <a v-for="a in menus" :key="a">{{ a }}</a>
    </div>
    
    <div v-for="(room, index) in onerooms" :key="index">
      <img :src="room.image" class="room-img">
      <h4 @click="modalStatus = true; clicked = index">{{ room.title }}</h4>
      <p>{{ room.price }}원</p>
    </div>

  </div>
</template>

<script>

import data from './assets/oneroom.js';

export default {
  name: 'App',
  data() {
    return {
      clicked: 0,
      onerooms: data,
      modalStatus : false,
      reportNo : [0, 0, 0],
      menus : ['Home', 'Shop', 'About'],
      products : ['1', '2', '3'],
    }
  },
  methods : {
    increase(index) {
      this.reportNo[index] += 1; 
    },
    
  },

  components: {
  }
}
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

</style>
