<template>
    <div>
        <div id="page" @scroll="scroll">
            <div id="anchor-point" :style="pc ? 'right: 60px' : 'right: 24px'">
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
                <div :class="{'container': true, 'container-active': active === 5}" @click="scrollTo(5)">
                    <div :class="{'circle': true, 'circle-active': active === 5}"></div>
                </div>
            </div>
            <HeaderBack class="header-back"></HeaderBack>
            <CloudNative class="header-back"></CloudNative>
            <BigData class="header-back"></BigData>
            <DataBaseAndStore class="header-back"></DataBaseAndStore>
            <BigFront class="header-back"></BigFront>
            <Footer class="header-back"></Footer>
        </div>
    </div>
</template>

<script lang="ts">
    import HeaderBack from "@/components/home/HeaderBack.vue";
    import CloudNative from "@/components/home/CloudNative.vue";
    import BigFront from "@/components/home/BigFront.vue";
    import BigData from "@/components/home/BigData.vue";
    import DataBaseAndStore from "@/components/home/DataBaseAndStore.vue";
    import Footer from "@/components/Footer.vue";
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';

    @Component({
        components: { HeaderBack, CloudNative, BigFront, BigData, DataBaseAndStore, Footer }
    })
    export default class Home extends Vue {
        active = 0;

        @State("pc")
        pc!: number;

        @Action("saveScrollTop")
        saveScrollTop!: Function;

        scroll() {
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

            const scrollTop = page.scrollTop + offsetTopArr[1] / 3 * 2;
            let navIndex = 0;

            for (let n = 0; n < offsetTopArr.length; n++ ) {
                if (scrollTop >= offsetTopArr[n]) {
                    navIndex = n
                }
            }
            this.active = navIndex;
            this.saveScrollTop(scrollTop - offsetTopArr[1] / 3 * 2);
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

<style scoped lang="less">
    #page {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        touch-action: pan-y;
        -webkit-overflow-scrolling: touch;
        z-index: 100;
    }

    #anchor-point {
        position: fixed;
        top: 50%;
        z-index: 100;
        margin-top: -120px;
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
        /*height: calc(100vh);*/
    }
</style>
