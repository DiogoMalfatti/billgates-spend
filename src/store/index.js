import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    spend: 100000000000,
  },

  mutations: {
    SET_SPEND(state, payload) {
      state.spend = payload
    },
  },

  actions: {
    addSell({ state, commit }, value) {
      const newSpend = state.spend + value

      commit('SET_SPEND', newSpend)
    },
    addBuy({ state, commit }, value) {
      const newSpend = state.spend - value

      commit('SET_SPEND', newSpend)
    },
  },

  getters: {
    getSpend(state) {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL',
      })

      return formatter.format(state.spend)
    },
  },

  modules: {},
})
