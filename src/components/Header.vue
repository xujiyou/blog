<template>
    <div>
        <div v-if="pc">
            <div class="first">
                <img src="../../public/xu.jpeg" class="logo-img" alt="xu">
                <div class="title" v-on:click="$router.push('/')">
                    <div class="small">生命不息</div>
                    <div class="big">折腾不止</div>
                </div>
            </div>
            <div class="nav">
                <button v-on:click="push('/')" :style="path === '/' ? 'color: #17b5d2' : ''">首页</button>
                <button v-on:click="push('/category')" :style="path === '/category' ? 'color: #17b5d2' : ''">分类</button>
                <button v-on:click="push('/all')" :style="path === '/all' ? 'color: #17b5d2' : ''">文章</button>
                <button>项目</button>
                <button>时间轴</button>
            </div>
            <div class="footer">
                <button>关于</button>
            </div>
        </div>
        <div v-else class="mobile-header">
            <div class="mobile-first">
                <img src="../../public/xu.jpeg" class="mobile-logo-img">
                <div class="mobile-title" v-on:click="$router.push('/')">
                    生命不息，折腾不止
                </div>
                <div class="menu" @click="expand = !expand">
                    <i class="iconfont icon-menu"></i>
                </div>
            </div>

            <div :class="{'mobile-nav': true, 'expand-menu': expand}">
                <button v-on:click="$router.push('/')">首页</button>
                <button>分类</button>
                <button v-on:click="$router.push('/all')">文章</button>
                <button>项目</button>
                <button>时间轴</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';

    @Component({})
    export default class Header extends Vue {

        @State("pc")
        pc!: number;

        @State("path")
        path!: string;

        expand = false;

        @Action("savePath")
        savePath!:Function;

        mounted() {
            this.savePath(this.$route.path);
        }

        push(value) {
            if (this.path !== value) {
                this.savePath(value);
                this.$router.push(value);
            }
        }
    }
</script>

<style scoped>
    .first {
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        padding-left: 32px;
    }

    .logo-img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        vertical-align: middle;
    }

    .title {
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        margin-right: 40px;
        text-align: center;
    }

    .small {
        font-size: 12px;
        line-height: 20px;
    }

    .big {
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
    }

    .nav {
        display: inline-block;
    }

    .nav button {
        height: 32px;
        background-color: transparent;
        box-shadow: none;
        border: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        padding: 0;
        margin-left: 16px;
        margin-right: 16px;
    }

    .nav button::after {
        content:'';
        display:block;
        width: 100%;
        height: 2px;
        margin-top: 4px;
        transition:all 0.3s ease-in-out;
        transform: scale3d(0,1,1);
        transform-origin: 50% 0;
    }

    .nav button:hover::after {
        transform: scale3d(1,1,1);
    }

    .footer {
        display: inline-block;
        float: right;
        padding-right: 32px;
    }

    .footer button {
        box-shadow: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        padding: 4px 12px 4px 12px;
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
    }

    /*手机端样式*/

    .mobile-header {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .mobile-first {
        text-align: center;
    }

    .mobile-logo-img {
        width: 36px;
        height: 36px;
        border-radius: 18px;
        vertical-align: middle;
    }

    .mobile-title {
        display: inline-block;
        vertical-align: middle;
        margin-left: 6px;
    }

    .menu {
        position: fixed;
        right: 12px;
        top: 0;
    }

    .mobile-nav {
        text-align: center;
        line-height: 46px;
        transition:all 0.3s ease-in-out;
        height: 0;
        overflow-y: hidden;
    }

    .expand-menu {
        animation: height-change 300ms 1;
        animation-fill-mode : forwards
    }

    @keyframes height-change {
        0% {
            height: 0;
        }
        100% {
            height: 230px;
        }
    }

    .mobile-nav button {
        text-align: left;
        width: 100%;
        height: 46px;
        background-color: transparent;
        box-shadow: none;
        border: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        padding: 0 0 0 16px;
        /*border-bottom: 1px solid rgba(255, 255, 255, 0.4);*/
        margin: 0;
    }

    .all-button {

    }
</style>
