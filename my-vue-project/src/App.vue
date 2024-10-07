<template>

  <div>
  <Modal/>

    <div class="menu">
      <a v-for="a in menus" :key="a">{{ a }}</a>
    </div>
    
    <Discount/>

    <div v-for="(room, index) in onerooms" :key="index">
      <img :src="room.image" class="room-img">
      <h4 @click="modalStatus = true; clicked = index">{{ room.title }}</h4>
      <p>{{ room.price }}원</p>
    </div>

  </div>
</template>

<script>

import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';

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
    Discount : Discount,
    Modal : Modal,
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
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
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
