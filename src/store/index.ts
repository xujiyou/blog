import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pc: true,
        path: "",
        scrollTop: 0
    },
    actions: {
        judgePC ({commit}) {
            let userAgentInfo = navigator.userAgent;
            let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
            let result = true;
            for (let v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    result = false;
                    break;
                }
            }
            commit('setPc', result);
        },

        saveScrollTop ({ commit }, top) {
            commit('setScrollTop',top);
        },

        savePath  ({ commit }, path) {
            commit('setPath', path);
        },
    },
    mutations: {
        setPc(state, result) {
            Vue.set(state,'pc', result);
        },

        setScrollTop (state, top) {
          state.scrollTop = top;
        },

        setPath (state, path) {
            state.path = path;
        },
    },
    modules: {}
});
