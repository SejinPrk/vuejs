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

    <button @click="priceSort">가격 순 정렬</button>
    <button @click="priceSortDesc">가격 역순 정렬</button>
    <button @click="sortBack">되돌리기</button>


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
      oneroomsOriginal: [...data], // 보존할 원본 데이터: array/object 데이터의 사본을 만든다
      object : { name : 'kim', age : 20},
      clicked: 0,
      onerooms: data, // 조작할 데이터
      modalStatus : false,
      reportNo : [0, 0, 0],
      menus : ['Home', 'Shop', 'About'],
    }
  },
  methods : {
    increase(index) {
      this.reportNo[index] += 1; 
    },
    priceSort() {
      this.onerooms.sort(function(a, b) {
        // return a - b; // sort 함수는 문자열 정렬 -> 숫자를 정렬하려면 안에 function 필요: a - b < 0이면 a을 왼쪽으로 
        // 그러나 원룸들은 Object이기 때문에 object끼리의 뺼셈식이 안먹힘 -> price를 비교해야 한다
        return a.price - b.price;
      });
    },
    priceSortDesc() {
      this.onerooms.sort(function(a, b) {
        return b.price - a.price; // 가격 역순 정렬
      });
    },
    sortBack() { 
      // sort 함수는 원본을 변형시켜버림. map()이나 filter()함수를 사용해야 원본 데이터 유지 가능
      // this.onerooms = this.oneroomsOriginal; // 등호는 값을 공유한다는 의미가 되어 어느 순간 되돌리기 버튼이 작동하지 않음
      this.onerooms = [...this.oneroomsOriginal]; // 별개의 사본을 만들어야 함
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
