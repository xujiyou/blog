<template>
    <div>
        <div id="page" @scroll="scroll">
            <div class="content">
                aaaaaa
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { Action } from 'vuex-class';

    @Component({
        components: {}
    })
    export default class Category extends Vue {

        @Action("saveScrollTop")
        saveScrollTop!: Function;

        scroll() {
            const page = document.querySelector("#page");
            if (page === null) return;
            this.saveScrollTop(page.scrollTop);
        }
    }
</script>

<style scoped>
    #page {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        touch-action: pan-y;
        -webkit-overflow-scrolling: touch;
        z-index: 100;
    }

    .content {
        padding-top: 120px;
        color: #fff;
        text-align: left;
        width: 100%;
    }
</style>
