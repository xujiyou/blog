<template>
    <div id="header-back">
        <div class="title">此剑之势 愈斩愈烈</div>
        <div class="content">
            蠢货是无药可治的!<br/>
            灭亡之路 短的超乎你的想象。<br/>
            宁日安在 无人能云。<br/>
            且随疾风前行 身后一许流星。<br/>
            无罪之人 方可安睡。<br/>
        </div>
        <div class="content">
            仁义道德 也是一种奢侈
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({})
    export default class HeaderBack extends Vue {

    }
</script>

<style scoped>
    #header-back {
        width: 100%;
        padding-left: 96px;
        color: #fff;
        text-align: left;
    }

    .title {
        padding-top: calc(20vh);
        margin-bottom: 60px;
        font-size: 32px;
    }

    .content {
        font-size: 18px;
        line-height: 36px;
        margin-bottom: 60px;
    }
</style>
