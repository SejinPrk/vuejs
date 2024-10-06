<template>

  <div>
    <div class="menu">
      <a v-for="a in menus" :key="a">{{ a }}</a>
    </div>
    <div v-for="(products, i) in products" :key="i">
      <h4>{{ products }}</h4>
      <p>XX 만원</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menus : ['Home', 'Shop', 'About'],
      products: ['역삼동 원룸', '천호동원룸', '마포구원룸'],
    }
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
