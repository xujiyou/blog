<template>
    <div>
        <div id="page" @scroll="scroll">
            <div class="content">
                <LeftList class="left-list"></LeftList>
                <ArticleList class="article-title"></ArticleList>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import LeftList from "@/components/all/LeftList.vue";
    import ArticleList from "@/components/all/ArticleList.vue";
    import { Component, Vue } from "vue-property-decorator";
    import { Action } from 'vuex-class';

    @Component({
        components: { LeftList, ArticleList }
    })
    export default class Article extends Vue {

        @Action("saveScrollTop")
        saveScrollTop!: Function;

        scroll() {
            const page = document.querySelector("#page");
            if (page === null) return;
            this.saveScrollTop(page.scrollTop);
        }
    }
</script>

<style scoped lang="less">
    #page {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        touch-action: pan-y;
        -webkit-overflow-scrolling: touch;
        z-index: 100;
    }

    .content {
        padding-top: 120px;
        color: #fff;
        text-align: left;
        width: 100%;
    }

    .left-list {
        display: inline-block;
        vertical-align: top;
        padding-left: 100px;
        width: 200px;
        height: 100%;
    }

    .article-title {
        display: inline-block;
        vertical-align: top;
        padding-right: 100px;
        width: calc(100% - 400px);
        height: 100%;
    }
</style>
