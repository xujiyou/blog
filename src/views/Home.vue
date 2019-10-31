<template>
    <div class="home">
        <Header id="header"></Header>
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
    #header {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
    }
</style>
