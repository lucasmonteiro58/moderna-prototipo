import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    light: true
  },
  mutations: {
    changeLight(state, newState) {
      state.light = newState;
    }
  },
  actions: {},
  modules: {}
});
