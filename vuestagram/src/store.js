import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      name : 'kim', // state 보관
      age : 20
    }
  },
  mutations :{
    changeName (state) {
      state.name = 'park'
    },
    changeAge (state) {
      state.age ++;
    }
  }
})

export default store