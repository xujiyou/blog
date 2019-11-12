<template>
    <div>
        <div id="header-back" v-if="pc">
            <div class="title"><b>Overview</b></div>
            <div class="content">
                本站用于整理总结一些日常使用到的技术，包括但不限于：<br/>
                大前端，Java，传统运维，云原生和大数据。<br/>
                希望以此来激励自己学得更多更好。<br/>
                本站采用 Vue.js + TypeScript + Github Pages 构建。<br/>
            </div>
            <div class="content">
                生命不息，折腾不止<br/><br/>
                <button @click="gotoThisProject">本项目代码</button>
                <button @click="gotoGithub">Github</button>
                <button @click="gotoZhihu">知乎</button>
                <button @click="push('/article', 'article')">本站全部文章</button>
            </div>
        </div>
        <div id="mobile-header-back" v-else>
            <div class="mobile-title"><b>Overview</b></div>
            <div class="mobile-content">
                本站用于整理总结一些日常使用到的技术，包括但不限于：<br/>
                大前端，Java，传统运维，云原生和大数据。<br/>
                希望以此来激励自己学得更多更好。<br/>
                本站采用 Vue.js + TypeScript + Github Pages 构建。<br/>
            </div>
            <div class="mobile-content">
                生命不息，折腾不止<br/><br/>
                <button @click="gotoThisProject">本项目代码</button>
                <button @click="gotoGithub">Github</button>
                <button @click="gotoZhihu">知乎</button>
                <button @click="push('/article', 'article')">本站全部文章</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';

    @Component({})
    export default class HeaderBack extends Vue {

        @State("pc")
        pc!: number;

        @Action("savePathName")
        savePathName!:Function;

        gotoThisProject () {
            window.open("https://github.com/xujiyou/blog")
        }

        gotoGithub () {
            window.open("https://github.com/xujiyou")
        }

        gotoZhihu () {
            window.open("https://www.zhihu.com/people/yumugede/posts")
        }

        push (value, name) {
            this.savePathName(name);
            this.$router.push(value);
        }
    }
</script>

<style scoped>
    #header-back {
        height: calc(100vh);
        width: 100%;
        padding-left: 96px;
        color: #fff;
        text-align: left;
    }

    .title {
        padding-top: calc(20vh);
        margin-bottom: 60px;
        font-size: 32px;
    }

    .content {
        font-size: 18px;
        line-height: 36px;
        margin-bottom: 60px;
    }

    button {
        box-shadow: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        padding: 4px 12px 4px 12px;
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
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

    /* 手机端样式 */
    #mobile-header-back {
        width: 100%;
        padding-left: 16px;
        color: #fff;
        text-align: left;
    }

    .mobile-title {
        padding-top: calc(20vh);
        margin-bottom: 30px;
        font-size: 32px;
    }

    .mobile-content {
        font-size: 18px;
        line-height: 32px;
        margin-bottom: 20px;
        margin-right: 48px;
    }
</style>
