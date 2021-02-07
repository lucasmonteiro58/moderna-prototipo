import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    light: true,
    som: true
  },
  mutations: {
    changeLight(state, newState) {
      state.light = newState;
    },
    changeSom(state, newState) {
      state.som = newState;
    }
  },
  actions: {},
  modules: {}
});
