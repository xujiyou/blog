<template>
    <div id="home">
        <div id="page">
            <Header id="header"></Header>
            <HeaderBack id="header-back"></HeaderBack>
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
        components = { Header, HeaderBack }

    }
</script>

<style>
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
        position: absolute; left: 0;
        overflow-x: hidden;
        overflow-y: scroll;
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
        line-height: 100%;
        touch-action: pan-y;
        -webkit-overflow-scrolling: touch;
    }

    #header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }

    #header-back {
        height: calc(100vh);
    }
</style>
