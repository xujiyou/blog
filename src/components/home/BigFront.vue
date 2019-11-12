<template>
    <div>
        <div id="big-front" v-if="pc">
            <div class="title"><b>前端</b></div>
            <div class="content">
                <div class="desc">
                    包括但不限于 Web前端、iOS APP、安卓APP、桌面客户端、各种小程序。<br/>
                    也可以理解为所有 UI 层，游戏除外。<br/><br/><br/>
                    <button @click="push('/article/前端', 'article')">前端系列文章</button>
                </div>
                <div class="skill-list">
                    <div style="font-size: 20px; padding-bottom: 10px"><b>Web 前端</b></div>
                    <div><b>Vue.js</b> : 超顺手的前端组件化框架。</div>
                    <div><b>Node.js</b> : JS 编译器，相当于 JDK ，用于在机器上运行JS代码，包含 node、npm、npx 等工具。</div>
                    <div><b>TypeScript</b> : JS 的强类型版本语言，在编译期编译为 JS 。强类型有利于项目维护。</div>
                    <div><b>D3.js</b> : 数据可视化神器，可定制化很强，学起来也很难。</div>
                    <div><b>HTML5&CSS3</b> : 很多强大的功能，比如 Canvas，动画等。</div>
                    <div><b>打包工具</b> : 包括 Webpack、Gulp.js、Grunt 。</div>
                    <div><b>Nuxt.js</b> : 帮助 Vue 做 SEO 的框架。</div>
                    <div><b>Less&Sass</b> : CSS 预处理器，帮助维护样式代码。</div>
                    <div><b>WebAssembly</b> : 浏览器字节码技术，提升速度，未来比较有前途。</div>
                    <div style="font-size: 20px; padding-bottom: 10px;padding-top: 10px"><b>APP</b></div>
                    <div><b>Flutter</b> : 跨平台框架，非常好用，简单。</div>
                    <div><b>Swift</b> : 一门很不错的语言，主要用于开发iOS APP，底层用的LLVM。</div>
                    <div><b>Kotlin</b> : 简化Java的语言，可以基于JVM，也可以基于LLVM。</div>
                </div>
            </div>
        </div>
        <div id="mobile-big-front" v-else>
            <div class="title"><b>前端</b></div>
            <div class="mobile-content">
                <div class="mobile-desc">
                    包括但不限于 Web前端、iOS APP、安卓APP、桌面客户端、各种小程序。<br/>
                    也可以理解为所有 UI 层，游戏除外。<br/><br/><br/>
                </div>
                <div class="mobile-skill-list">
                    <div style="font-size: 20px; padding-bottom: 10px"><b>Web 前端</b></div>
                    <div><b>Vue.js</b> : 超顺手的前端组件化框架。</div>
                    <div><b>Node.js</b> : JS 编译器，相当于 JDK ，用于在机器上运行JS代码，包含 node、npm、npx 等工具。</div>
                    <div><b>TypeScript</b> : JS 的强类型版本语言，在编译期编译为 JS 。强类型有利于项目维护。</div>
                    <div><b>D3.js</b> : 数据可视化神器，可定制化很强，学起来也很难。</div>
                    <div><b>HTML5&CSS3</b> : 很多强大的功能，比如 Canvas，动画等。</div>
                    <div><b>打包工具</b> : 包括 Webpack、Gulp.js、Grunt 。</div>
                    <div><b>Nuxt.js</b> : 帮助 Vue 做 SEO 的框架。</div>
                    <div><b>Less&Sass</b> : CSS 预处理器，帮助维护样式代码。</div>
                    <div><b>WebAssembly</b> : 浏览器字节码技术，提升速度，未来比较有前途。</div>
                    <div style="font-size: 20px; padding-bottom: 10px;padding-top: 10px"><b>APP</b></div>
                    <div><b>Flutter</b> : 跨平台框架，非常好用，简单。</div>
                    <div><b>Swift</b> : 一门很不错的语言，主要用于开发iOS APP，底层用的LLVM。</div>
                    <div><b>Kotlin</b> : 简化Java的语言，可以基于JVM，也可以基于LLVM。</div>
                </div>
                <div class="mobile-button">
                    <button @click="push('/article/前端', 'article')">前端系列文章</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';

    @Component({})
    export default class BigFront extends Vue {

        @State("pc")
        pc!: number;

        @Action("savePathName")
        savePathName!:Function;

        push (value, name) {
            this.savePathName(name);
            this.$router.push(value);
        }
    }
</script>

<style scoped>
    #big-front {
        height: calc(100vh);
        width: 100%;
        padding-left: 96px;
        padding-right: 100px;
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
        width: 100%;
    }

    .desc {
        display: inline-block;
        width: 30%;
        vertical-align: top;
    }

    .skill-list {
        display: inline-block;
        width: 66%;
        padding-left: 4%;
        vertical-align: top;
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
    #mobile-big-front {
        width: 100%;
        padding-left: 16px;
        color: #fff;
        text-align: left;
    }

    .mobile-content {
        font-size: 18px;
        line-height: 36px;
        margin-bottom: 30px;
        width: 100%;
        margin-right: 48px;
    }

    .mobile-desc {
        margin-right: 48px;
    }

    .mobile-skill-list {
        margin-right: 48px;
    }

    .mobile-button {
        margin-top: 20px;
    }
</style>
