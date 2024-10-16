import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim' // state 보관
    }
  },
})

export default store