<template>
    <div id="app">
        <canvas id="canvas"></canvas>
        <router-view id="router-view"></router-view>
        <Header class="top-header" :class="{'is-scroll': scrollTop >= 100}"></Header>
    </div>
</template>

<script lang="ts">
    import canvasAnimation from './views/canvas/animation';
    import Header from "@/components/Header.vue";
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';

    @Component({
        components: { Header }
    })
    export default class App extends Vue {

        @State("scrollTop")
        scrollTop!: number;

        @Action("judgePC")
        judgePC!: Function;

        mounted () {
            this.judgePC();
            let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
            canvasAnimation(canvas);
        }
    }
</script>

<style lang="less">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        border: 0;

        position: relative;
        overflow: hidden;
    }

    #canvas {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10;
    }

    #router-view {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 20;
        overflow-x: hidden;
        overflow-y: scroll;
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
        padding: 0;

        background-color: transparent;
        color: #fff;
        ::v-deep button {
            color: #fff;
            border-color: #fff;
        }
        ::v-deep .nav button::after {
            background: #fff;
        }

        ::v-deep .footer button:hover {
            animation: button-bg-color 600ms 1;
            animation-fill-mode : forwards
        }
    }

    .is-scroll {
        animation: bg-change 600ms 1;
        animation-fill-mode : forwards;

        color: #2c3e50;
        ::v-deep button {
            color: #2c3e50;
            border-color: #2c3e50;
        }
        ::v-deep .nav button::after {
            background: #2c3e50;
        }

        ::v-deep .mobile-nav {
            background: rgba(255, 255, 255, 0.8);
            border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        }

        ::v-deep .footer button:hover {
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
</style>
