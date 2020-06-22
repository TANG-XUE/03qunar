import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    letter:'',
    city:localStorage.getItem('city') || '深圳'
  },
  mutations:{
    changeCity(state,city){
      state.city = city
      localStorage.setItem('city',city)
    },
    changLetter(state,letter){
      state.letter = letter
    }
  }
})
