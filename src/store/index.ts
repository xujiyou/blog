import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from './types';
import {article_store} from "@/store/module/article/article_store";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        pc: true,
        pathName: "",
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

        savePathName  ({ commit }, pathName) {
            commit('setPathName', pathName);
        },
    },
    mutations: {
        setPc(state, result) {
            Vue.set(state,'pc', result);
        },

        setScrollTop (state, top) {
            state.scrollTop = top;
        },

        setPathName (state, pathName) {
            state.pathName = pathName;
        },
    },
    modules: {
        article_store
    }
};

export default new Vuex.Store<RootState>(store);
