<template>
    <div id="header">
        <div id="first">
            <img src="../../public/xu.jpeg" id="logo-img">
            <div id="title" v-on:click="$router.push('/')">
                <div class="small">生命不息</div>
                <div class="big">折腾不止</div>
            </div>
        </div>
        <div id="nav">
            <button v-on:click="$router.push('/')">首页</button>
            <button>分类</button>
            <button v-on:click="$router.push('/all')">文章</button>
            <button>项目</button>
            <button>时间轴</button>
        </div>
        <div id="footer">
            <button>关于</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({})
    export default class Header extends Vue {
        mounted() {

        }
    }
</script>

<style scoped>
    #header {}

    #first {
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
    }

    #logo-img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        vertical-align: middle;
    }

    #title {
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

    #nav {
        display: inline-block;
    }

    #nav button {
        height: 32px;
        background-color: transparent;
        box-shadow: none;
        border: none;
        /*color: #fff;*/
        outline: none;
        font-size: 16px;
        cursor: pointer;
        padding: 0;
        margin-left: 16px;
        margin-right: 16px;
    }

    #nav button::after {
        content:'';
        display:block;
        width: 100%;
        height: 2px;
        margin-top: 4px;
        transition:all 0.3s ease-in-out;
        transform: scale3d(0,1,1);
        transform-origin:50% 0;
    }

    #nav button:hover::after {
        transform: scale3d(1,1,1);
    }

    #footer {
        display: inline-block;
        float: right;
    }

    #footer button {
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

    #footer button:hover {

    }



</style>
