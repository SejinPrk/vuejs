<template>
  <div>

    <transition name="fade">
      <Modal 
        @closeModal="modalStatus = false" 
        :onerooms="onerooms" :clicked="clicked" 
        :modalStatus="modalStatus" 
      />
    </transition>

    <div class="menu">
      <a v-for="a in menus" :key="a">{{ a }}</a>
    </div>
    
    <Discount :name="object.name" :age="object.age" />

    <Card 
      @openModal="modalStatus = true; clicked=index;" 

      :room="onerooms[index]" 
      v-for="(a, index) in onerooms" :key="a" 
    />

  </div>
</template>

<script>

import data from './assets/oneroom.js';
import Card from './Card.vue';
import Discount from './Discount.vue';
import Modal from './Modal.vue';

export default {
  name: 'App',
  data() {
    return {
      object : { name : 'kim', age : 20},
      clicked: 0,
      onerooms: data,
      modalStatus : false,
      reportNo : [0, 0, 0],
      menus : ['Home', 'Shop', 'About'],
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
    Card : Card,
  }
}
</script>


<style>
.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

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
