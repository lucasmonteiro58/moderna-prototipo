import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    light: true,
    som: true,
    contraste: false,
    landscape: false
  },
  mutations: {
    changeLight(state, newState) {
      state.light = newState;
    },
    changeSom(state, newState) {
      state.som = newState;
    },
    changeContraste(state, newState) {
      state.contraste = newState;
    },
    changeLandscape(state, newState) {
      state.landscape = newState;
    }
  },
  actions: {},
  modules: {}
});
