import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pc: true,
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
        }
    },
    mutations: {
        setPc(state, result) {
            Vue.set(state,'pc', result);
        },

        setScrollTop (state, top) {
          state.scrollTop = top;
        },

    },
    modules: {}
});
