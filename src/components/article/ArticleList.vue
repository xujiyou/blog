<template>
    <div>
        <div v-for="article in articleState.articleList" v-bind:key="article['_id']['$oid']">
            <div class="card">
                <div class="title">{{article.title}}</div>
                <div class="date">{{article.create_date}}</div>
                <div class="introduce">
                    {{article.introduce}}{{article.introduce}}
                </div>
                <div class="category">
                    <span>{{article.category}}</span> -  <span>{{article.technology}}</span>
                    <span class="tags">
                        <span class="tag" v-for="tag in article.tags" v-bind:key="tag">
                            {{tag}}
                        </span>
                    </span>
                </div>

                <button v-on:click="push(article.category, article.technology, article.title)">阅读全文</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';
    import { ArticleState } from "@/store/module/article/types";
    const namespace: string = 'article_store';

    @Component({})
    export default class ArticleList extends Vue {

        @State("article_store")
        articleState!: ArticleState;

        @Action("findArticleList", {namespace})
        findArticleList!: Function;

        @Action("savePathName")
        savePathName!: Function;

        async mounted() {
            let category = this.$route.params["category"];
            let technology = this.$route.params["technology"];
            this.findArticleList({
                category: category,
                technology: technology
            });
        }

        push (category, technology, filename) {
            this.savePathName("signal");
            this.$router.push(`/signal/${category}/${technology}/${filename}`);
        }
    }
</script>

<style scoped>
    .card {
        background-color: rgba(20, 20, 20, 0.4);
        color: #fff;
        margin: 32px;
        padding: 16px 32px;
        border-radius: 8px;
        border: 1px solid rgba(200, 200, 200, 0.6);
    }

    .title {
        font-size: 24px;
        font-weight: bold;
    }

    .date {
        margin-top: 12px;
        font-size: 12px;
    }

    .introduce {
        margin-top: 20px;
        text-align: justify;
        line-height: 2.0;
    }

    .category {
        margin-top: 12px;
        font-size: 12px;
    }

    .tags {
        margin-left: 20px;
        font-size: 12px;
    }

    .tag {
        margin-left: 6px;
    }

    button {
        margin-top: 20px;
        box-shadow: none;
        outline: none;
        font-size: 14px;
        cursor: pointer;
        padding: 4px 12px 4px 12px;
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        border-color: #fff;
        color: #fff;
        height: 38px;
        margin-right: 12px;
        margin-bottom: 10px;
    }

    button:hover {
        animation: button-bg-color 600ms 1;
        animation-fill-mode : forwards
    }

    @keyframes button-bg-color {
        0% {
            background-color: transparent;
        }
        100% {
            background-color: #fff;
            color: #2c3e50;
        }
    }
</style>
