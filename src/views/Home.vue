<template>
    <div id="home">
        <canvas id="canvas"></canvas>
        <div id="page" @scroll="scroll">
            <Header class="top-header" :class="{'is-scroll': isScroll}"></Header>
            <div id="anchor-point">
                <div :class="{'container': true, 'container-active': active === 0}" @click="scrollTo(0)">
                    <div :class="{'circle': true, 'circle-active': active === 0}"></div>
                </div>
                <div :class="{'container': true, 'container-active': active === 1}" @click="scrollTo(1)">
                    <div :class="{'circle': true, 'circle-active': active === 1}"></div>
                </div>
                <div :class="{'container': true, 'container-active': active === 2}" @click="scrollTo(2)">
                    <div :class="{'circle': true, 'circle-active': active === 2}"></div>
                </div>
                <div :class="{'container': true, 'container-active': active === 3}" @click="scrollTo(3)">
                    <div :class="{'circle': true, 'circle-active': active === 3}"></div>
                </div>
                <div :class="{'container': true, 'container-active': active === 4}" @click="scrollTo(4)">
                     <div :class="{'circle': true, 'circle-active': active === 4}"></div>
                </div>
            </div>
            <HeaderBack class="header-back"></HeaderBack>
            <HeaderBack class="header-back"></HeaderBack>
            <HeaderBack class="header-back"></HeaderBack>
            <HeaderBack class="header-back"></HeaderBack>
            <HeaderBack class="header-back"></HeaderBack>
        </div>
    </div>
</template>

<script lang="ts">
    import canvasAnimation from './canvas/animation';
    import Header from "@/components/Header.vue";
    import HeaderBack from "@/components/HeaderBack.vue";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: { Header, HeaderBack }
    })
    export default class Home extends Vue {
        isScroll = false;

        active = 0;

        components = { Header, HeaderBack };

        mounted () {
            let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
            canvasAnimation(canvas);
        }

        scroll(e: Event) {
            const page = document.querySelector("#page");
            if (page === null) {
                return;
            }
            let navContents = document.querySelectorAll('.header-back');
            let offsetTopArr: number[] = [];
            navContents.forEach((item) => {
                let one = item as HTMLElement;
                offsetTopArr.push(one.offsetTop)
            });

            const scrollTop = page.scrollTop;
            let navIndex = 0;

            for (let n = 0; n < offsetTopArr.length; n++ ) {
                if (scrollTop >= offsetTopArr[n]) {
                    navIndex = n
                }
            }
            this.active = navIndex;

            this.isScroll = scrollTop > 76;
        }

        scrollTo (index) {
            let navContents = document.querySelectorAll('.header-back');
            let offsetTopArr: number[] = [];
            navContents.forEach((item) => {
                let one = item as HTMLElement;
                offsetTopArr.push(one.offsetTop)
            });

            const page = document.querySelector("#page");
            if (page === null) return;
            const targetOffsetTop = offsetTopArr[index];
            let scrollTop = page.scrollTop;
            const STEP = 50;
            if (scrollTop > targetOffsetTop) {
                smoothUp()
            } else {
                smoothDown()
            }

            function smoothDown() {
                if (page === null) return;
                // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
                if (scrollTop < targetOffsetTop) {
                    // 如果和目标相差距离大于等于 STEP 就跳 STEP
                    // 否则直接跳到目标点，目标是为了防止跳过了。
                    if (targetOffsetTop - scrollTop >= STEP) {
                        scrollTop += STEP
                    } else {
                        scrollTop = targetOffsetTop
                    }
                    page.scrollTop = scrollTop;
                    // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
                    requestAnimationFrame(smoothDown)
                }
            }
            // 定义往上滑函数
            function smoothUp() {
                if (page === null) return;
                if (scrollTop > targetOffsetTop) {
                    if (scrollTop - targetOffsetTop >= STEP) {
                        scrollTop -= STEP
                    } else {
                        scrollTop = targetOffsetTop
                    }
                    page.scrollTop = scrollTop;
                    requestAnimationFrame(smoothUp)
                }
            }
        }

    }
</script>

<style lang="less" scoped>
    #home {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    #canvas {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }

    #page::-webkit-scrollbar {
        display: none;
    }

    #page {
        position: absolute;
        left: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        scroll-behavior: smooth;
        width: 100%;
        height: 100%;
        border: 0;
        padding: 0;
        margin: 0;
        text-align: center;
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

    #anchor-point {
        position: fixed;
        top: 50%;
        right: 60px;
        z-index: 100;
        margin-top: -99px;
        width: 12px;
    }

    .container {
        margin-bottom: 12px;
        width: 12px;
        height: 12px;
        text-align: center;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        padding: 9px;
        border-radius: 18px;
        transform:scale(0.5);
        cursor: pointer;
    }

    .container-active {
        animation: border-change 400ms 1;
        animation-fill-mode : forwards
    }

    .circle {
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background-color: rgba(255, 255, 255, 0.6);
    }

    .circle-active {
        animation: size-color-change 400ms 1;
        animation-fill-mode : forwards
    }

    @keyframes size-color-change {
        0% {
            background-color: rgba(255, 255, 255, 0.6);
        }
        100% {
            background-color: rgba(255, 255, 255, 1);
        }
    }

    @keyframes border-change {
        0% {
            transform:scale(0.5);
            border-color: transparent;
        }
        50% {
            transform:scale(0.75);
            border-color: rgba(255, 255, 255, 0.6);
        }
        60% {
            transform:scale(0.8);
            border-color: rgba(255, 255, 255, 0.5);
        }
        70% {
            transform:scale(0.85);
            border-color: rgba(255, 255, 255, 0.4);
        }
        80% {
            transform:scale(0.90);
            border-color: rgba(255, 255, 255, 0.3);
        }
        90% {
            transform:scale(0.95);
            border-color: rgba(255, 255, 255, 0.2);
        }
        100% {
            transform:scale(1);
            border-color: transparent;
        }
    }

    .header-back {
        height: calc(100vh);
    }
</style>
