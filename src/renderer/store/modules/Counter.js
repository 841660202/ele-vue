const state = {
  main: 0
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    console.log('DECREMENT_MAIN_COUNTER')
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    console.log('INCREMENT_MAIN_COUNTER')
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },
  dec ({ commit }) {
    // do something async
    console.log('dec')

    commit('DECREMENT_MAIN_COUNTER')
  },
  inc ({ commit }) {
    // do something async
    console.log('inc')

    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  namespaces: true,
  state,
  mutations,
  actions
}
