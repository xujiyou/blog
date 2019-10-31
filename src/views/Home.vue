<template>
    <div id="home">
        <div id="page">
            <Header id="header"></Header>
        </div>
    </div>
</template>

<script lang="ts">
    import Header from "@/components/Header.vue";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: {Header}
    })
    export default class Home extends Vue {
        components = { Header }

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
        position: relative;
        top: 0;
        left: 0;
        right: 0;
    }
</style>
