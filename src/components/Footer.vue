<template>
    <div id="footer">
        <div class="top">
            <img src="../../public/xu.jpeg" id="logo-img" alt="xu">
            <br/>
            <div id="title">
                <div class="small">生命不息</div>
                <div class="big">折腾不止</div>
            </div>
            <button @click="push('/article', 'article')">本站全部文章</button>
        </div>

        <div class="bottom" v-if="pc">
            <div class="link">
                <h3>联系方式</h3>
                <div>QQ & WX : 552003271</div>
                <div>Github : 552003271</div>
                <div>知乎 : 552003271</div>
                <div class="copyright">
                    © 2019 许吉友
                </div>
            </div>
            <div class="nav">
                <button v-on:click="$router.push('/')">首页</button>
                <button>分类</button>
                <button v-on:click="$router.push('/article')">文章</button>
                <button>项目</button>
                <button>时间轴</button>
            </div>
        </div>
        <div class="mobile-bottom" v-else>
            <div class="mobile-link">
                <h3>联系方式</h3>
                <div>QQ & WX : 552003271</div>
                <div>Github : 552003271</div>
                <div>知乎 : 552003271</div>
                <div class="copyright">
                    © 2019 许吉友
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';

    @Component({})
    export default class Footer extends Vue {
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
    #footer {
        width: 100%;
        color: #fff;
        text-align: center;
    }

    .top {
        margin-left: 100px;
        margin-right: 100px;
        padding-top: calc(20vh);
        height: calc(80vh - 200px);
        font-size: 32px;
    }

    #logo-img {
        width: 120px;
        height: 120px;
        border-radius: 60px;
    }

    #title {
        margin-top: 12px;
        margin-bottom: 32px;
        text-align: center;
    }

    .small {
        font-size: 16px;
    }

    .big {
        margin-top: 6px;
        font-size: 24px;
        font-weight: bold;
    }

    .top button {
        box-shadow: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        padding: 4px 32px 4px 32px;
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        color: #fff;
        height: 38px;
        margin-right: 12px;
    }

    .top button:hover {
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

    .bottom {
        background-color: rgba(255, 255, 255, 0.6);
        height: 200px;
        width: 100%;
        text-align: left;
        color: #000;
    }

    .link {
        padding-left: 100px;
        display: inline-block;
        width: calc(24% - 100px);
        vertical-align: top;
        height: 100%;
    }

    .nav {
        padding-top: 20px;
        display: inline-block;
        width: 56%;
        vertical-align: top;
    }

    .nav button {
        height: 32px;
        background-color: transparent;
        box-shadow: none;
        border: none;
        color: #000;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        padding: 0;
        margin-left: 16px;
        margin-right: 16px;
    }

    .nav button::after {
        content:'';
        background-color: #000;
        display:block;
        width: 100%;
        height: 2px;
        margin-top: 4px;
        transition:all 0.3s ease-in-out;
        transform: scale3d(0,1,1);
        transform-origin:50% 0;
    }

    .nav button:hover::after {
        transform: scale3d(1,1,1);
    }

    .copyright {
        padding-top: 20px;
        font-size: 14px;
    }

    /* 手机端样式 */
    .mobile-bottom {
        background-color: rgba(255, 255, 255, 0.6);
        height: 200px;
        width: 100%;
        text-align: left;
        color: #000;
    }

    .mobile-link {
        padding-left: 16px;
        height: 100%;
    }

    .mobile-link h3 {
        padding-top: 10px;
    }
</style>
