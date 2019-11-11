import { Module, ActionTree } from 'vuex';
import { RootState } from "@/store/types";
import { ArticleState } from './types';
import { ArticleApi } from "@/api/article_api";

const articleApi: ArticleApi = new ArticleApi();

export const state: ArticleState = {
    category: undefined,
    technology: undefined,
    articleList: [{
        _id: {$oid: ""},
        title: "",
        category: "",
        technology: "",
        create_date: "",
        tags: [""],
        view_count: 0,
        introduce: ""
    }]
};

export const actions: ActionTree<ArticleState, RootState> = {

    async findArticleList({ commit }, param) {
        let category = param["category"];
        let technology = param["technology"];
        if (category === state.category && technology === state.technology) {
            if (state.articleList.length !== 1 || state.articleList[0]["_id"]["$oid"] !== "") {
                return;
            }
        }
        state.category = category;
        state.technology = technology;
        state.articleList  = await articleApi.findAllArticle(category, technology);
    },

    async viewArticleDetail({ commit }, param) {
        return await articleApi.viewArticleDetail(param["category"], param["technology"], param["title"] + ".md");
    }
};

const namespaced: boolean = true;
export const article_store: Module<ArticleState, RootState> = {
    namespaced,
    state,
    actions
};
