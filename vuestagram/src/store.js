import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      name : 'kim', // state 보관
      age : 20,
      likes : 30,
      likesState : false,
    }
  },
  mutations :{
    likesClick (state) {
      if (state.likesState == false) {
        state.likes++
        state.likesState = true;
      } else {
        state.likes--
        state.likesState = false;
      }
    },
  }
})

export default store