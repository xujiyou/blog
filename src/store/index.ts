import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      scrollTop: 0
    },
    actions: {
        saveScrollTop ({ commit }, top) {
            commit('setScrollTop',top);
        }
    },
    mutations: {
      setScrollTop (state, top) {
          state.scrollTop = top;
      }
    },
    modules: {}
});
