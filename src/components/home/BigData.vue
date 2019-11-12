<template>
    <div>
        <div id="big-data" v-if="pc">
            <div class="title"><b>大数据</b></div>
            <div class="content">
                <div class="desc">
                    主要学习 CDH 中的各种组件。<br/>
                    通过 CM 安装 CDH 简单快捷，极大的降低了学习成本。<br/><br/><br/>
                    <button @click="push('/article/大数据', 'article')">大数据系列文章</button>
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
        <div id="mobile-big-data" v-else>
            <div class="title"><b>大数据</b></div>
            <div class="mobile-content">
                <div class="mobile-desc">
                    主要学习 CDH 中的各种组件。<br/>
                    通过 CM 安装 CDH 简单快捷，极大的降低了学习成本。<br/><br/>
                </div>
                <div class="mobile-skill-list">
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
                <div class="mobile-button">
                    <button @click="push('/article/大数据', 'article')">大数据系列文章</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';

    @Component({})
    export default class BigData extends Vue {
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
    #big-data {
        height: calc(100vh);
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

    /* 手机端样式 */
    #mobile-big-data {
        width: 100%;
        padding-left: 16px;
        color: #fff;
        text-align: left;
    }

    .mobile-content {
        font-size: 18px;
        line-height: 36px;
        margin-bottom: 30px;
        width: 100%;
        margin-right: 48px;
    }

    .mobile-desc {
        margin-right: 48px;
    }

    .mobile-skill-list {
        margin-right: 48px;
    }

    .mobile-button {
        margin-top: 20px;
    }
</style>
