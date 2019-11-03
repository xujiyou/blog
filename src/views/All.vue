<template>
    <div>
        <div id="page" @scroll="scroll">
            <Header class="top-header" :class="{'is-scroll': isScroll}"></Header>
            <div class="content">
                <LeftList class="left-list"></LeftList>
                <ArticleList class="article-title"></ArticleList>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Header from "@/components/Header.vue";
    import LeftList from "@/components/all/LeftList.vue";
    import ArticleList from "@/components/all/ArticleList.vue";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: { Header, LeftList, ArticleList }
    })
    export default class All extends Vue {
        isScroll = false;

        scroll() {
            const page = document.querySelector("#page");
            if (page === null) {
                return;
            }
            this.isScroll = page.scrollTop > 100;
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

    .top-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;

        height: 76px;
        line-height: 76px;
        text-align: left;
        padding: 0 32px 0 32px;

        background-color: transparent;
        color: #fff;
        /deep/ button {
            color: #fff;
            border-color: #fff;
        }
        /deep/ #nav button::after {
            background: #fff;
        }

        /deep/ #footer button:hover {
            animation: button-bg-color 600ms 1;
            animation-fill-mode : forwards
        }
    }

    .is-scroll {
        animation: bg-change 600ms 1;
        animation-fill-mode : forwards;

        color: #2c3e50;
        /deep/ button {
            color: #2c3e50;
            border-color: #2c3e50;
        }
        /deep/ #nav button::after {
            background: #2c3e50;
        }

        /deep/ #footer button:hover {
            animation: new-button-bg-color 600ms 1;
            animation-fill-mode : forwards
        }
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

    @keyframes new-button-bg-color {
        0% {
            background-color: transparent;
        }
        100% {
            background-color: #2c3e50;
            color: #fff;
        }
    }

    @keyframes bg-change {
        0% {
            background-color: transparent;
        }
        100% {
            background-color: rgba(255, 255, 255, 0.8);
        }
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
