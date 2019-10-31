<template>
    <div id="home">
        <div id="page" @scroll="scroll">
            <Header class="top-header" :class="{'is-scroll': isScroll}"></Header>
            <div id="anchor-point">
                <div :class="{'container': true, 'container-active': active === 0}">
                    <div :class="{'circle': true, 'circle-active': active === 0}"></div>
                </div>
                <div :class="{'container': true, 'container-active': active === 1}">
                    <div :class="{'circle': true, 'circle-active': active === 1}"></div>
                </div>
                <div :class="{'container': true, 'container-active': active === 2}">
                    <div :class="{'circle': true, 'circle-active': active === 2}"></div>
                </div>
                <div :class="{'container': true, 'container-active': active === 3}">
                    <div :class="{'circle': true, 'circle-active': active === 3}"></div>
                </div>
                <div :class="{'container': true, 'container-active': active === 4}">
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

        scroll(e: Event) {
            const page = document.querySelector("#page");
            if (page === null) {
                return;
            }
            let navContents = document.querySelectorAll('.header-back');
            let offsetTopArr: number[] = [];
            navContents.forEach((item) => {
                let one = <HTMLElement> item;
                offsetTopArr.push(one.offsetTop)
            });

            const scrollTop = page.scrollTop;
            let navIndex = 0;
            for (let n = 0; n < offsetTopArr.length; n++) {
                if (scrollTop >= offsetTopArr[n]) {
                    navIndex = n
                }
            }
            this.active = navIndex;

            if (scrollTop > 76) {
                this.isScroll = true;
            } else {
                this.isScroll = false;
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
        background-size: cover;
        background-image: url("../assets/red.jpeg");
        background-color: #2c3e50;
        background-repeat: no-repeat;
        border: 0;
        padding: 0 0 0 0;
        margin: 0;
        text-align: center;
        touch-action: pan-y;
        -webkit-overflow-scrolling: touch;
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
