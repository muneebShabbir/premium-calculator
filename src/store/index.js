import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userForm: {},
    totalPremium: 0
  },
  getters: {
    userForm (state) {
      return state.userForm
    },
    totalPremium (state) {
      return state.totalPremium
    }
  },
  mutations: {
    updateUserForm (state, requestedForm) {
      state.userForm = requestedForm
    },
    updateTotalPremium (state, premium) {
      state.totalPremium = premium
    }
    
  },
  actions: {
    saveUserData ({ commit }, {requestForm, totalPremium}) {
      commit('updateUserForm', requestForm)
      commit('updateTotalPremium', totalPremium)
    },
    clearUserData ({ commit }) {
      commit('updateUserForm', {})
      commit('updateTotalPremium', 0)
    }
  },
  // modules: {
  // }
})
