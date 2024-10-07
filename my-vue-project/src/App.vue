<template>

  <div>
    <div class="menu">
      <a v-for="a in menus" :key="a">{{ a }}</a>
    </div>
    <!-- <div v-for="(products, i) in products" :key="i">
      <h4>{{ products[i] }}</h4>
      <p>XX 만원</p>
    </div> -->
    <div>
      <h4>{{ products[0]}}</h4>
      <p>50만원</p>
      <button @click="increase(0)">허위매물신고</button> <span>신고수 : {{reportNo[0]}} </span>
    </div>
    <div>
      <h4>{{ products[1]}}</h4>
      <p>60만원</p>
      <button @click="increase(1)">허위매물신고</button> <span>신고수 : {{reportNo[1]}}</span>
    </div>
    <div>
      <h4>{{ products[2]}}</h4>
      <p>70만원</p>
      <button @click="increase(2)">허위매물신고</button> <span>신고수 : {{reportNo[2]}} </span>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      reportNo : [0, 0, 0],
      menus : ['Home', 'Shop', 'About'],
      products: ['역삼동 원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods : {
    // 함수 만드는 공간 
    increase(index) {
      this.reportNo[index] += 1; 
    },
    
  },

  components: {
  }
}
</script>

<style>
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
