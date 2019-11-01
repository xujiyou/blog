<template>
    <div id="big-data">
        <div class="title"><b>大数据</b></div>
        <div class="content">
            <div class="desc">
                主要学习 CDH 中的各种组件。<br/>
                通过 CM 安装 CDH 简单快捷，极大的降低了学习成本。<br/><br/><br/>
                <button>大数据系列文章</button>
            </div>
            <div class="skill-list">
                <div><b>HDFS</b> : 分布式文件系统。</div>
                <div><b>HBase</b> : 列数据库。</div>
                <div><b>Hive</b> : 数据提取加载工具。</div>
                <div><b>Kafka</b> : 消息中间件。</div>
                <div><b>Hue</b> : Hadoop 的可视化展示系统。</div>
                <div><b>Impala</b> : 跟Hive的功能差不多，但性能更好。</div>
                <div><b>Oozie</b> : 用于工作流调度，跟进程调度差不多一个意思。</div>
                <div><b>Solr</b> : 搜索引擎，跟 Elasticsearch 一样，都是基于 Lucene。</div>
                <div><b>Spark</b> : 数据计算框架。</div>
                <div><b>YARN</b> : 统一管理各个节点的资源。</div>
                <div><b>ZooKeeper</b> : 配置维护、域名服务、分布式同步、组服务等。</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({})
    export default class BigData extends Vue {

    }
</script>

<style scoped>
    #big-data {
        width: 100%;
        padding-left: 96px;
        padding-right: 100px;
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
        width: 100%;
    }

    .desc {
        display: inline-block;
        width: 30%;
        vertical-align: top;
    }

    .skill-list {
        display: inline-block;
        width: 66%;
        padding-left: 4%;
        vertical-align: top;
    }

    .card {
        display: inline-block;
        margin-left: 1%;
        margin-right: 1%;
        margin-bottom: 12px;
        width: 23%;
        text-align: center;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 1);
        padding: 12px;
        color: #2c3e50;
        font-size: 12px;
        line-height: 20px;
        vertical-align: top;
    }

    .card img {
        width: 50px;
        height: 50px;
        margin-bottom: 6px;
    }

    .card .skill-title {
        font-size: 18px;
        line-height: 26px;
        font-weight: bold;
        margin-bottom: 6px;
    }

    button {
        box-shadow: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        padding: 4px 12px 4px 12px;
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        color: #fff;
        height: 38px;
        margin-right: 12px;
    }

    button:hover {
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
</style>
