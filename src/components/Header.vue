<template>
    <div id="header">
        <div id="title">
            许吉友
        </div>
        <div id="nav">
            <button>云原生</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({})
    export default class Header extends Vue {

    }
</script>

<style scoped>
    #header {
        height: 76px;
        line-height: 76px;
        background-color: #2c3e50;
        text-align: left;
        padding-left: 16px;
        padding-right: 16px;
        color: #fff;
    }

    #title {
        display: inline-block;
        font-size: 20px;
        margin-right: 48px;
    }

    #nav {
        display: inline-block;
    }

    #nav button {
        height: 32px;
        background-color: transparent;
        box-shadow: none;
        border: none;
        color: #fff;
        outline: none;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
    }

    #nav button:hover {
        border-bottom: 2px solid #42b983;
    }
</style>
