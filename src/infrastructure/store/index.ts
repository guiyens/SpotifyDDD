import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastSearch: null,
    authInfo: null
  },
  mutations: {
    setLastSearch (state, newSearch) {
      state.lastSearch = newSearch
    },
    setAuthInfo (state, newAuthInfo) {
      state.authInfo = newAuthInfo
    }
  },
  getters: {
    getLastSearch: state => {
      return state.lastSearch
    },
    getAuthInfo: state => {
      return state.authInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
