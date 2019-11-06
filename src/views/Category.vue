<template>
    <div>
        <div id="page" @scroll="scroll">
            <div class="content">
                <div class="category">
                    <div class="title">云原生</div>
                    <button>Docker</button>
                    <button>Kubernetes</button>
                    <button>Istio</button>
                    <button>gRPC</button>
                    <button>Prometheus</button>
                    <button>Grafana</button>
                    <button>Jaeger</button>
                    <button>Helm</button>
                </div>
                <div class="category">
                    <div class="title">大数据</div>
                    <button>HDFS</button>
                    <button>HBase</button>
                    <button>Hive</button>
                    <button>Kafka</button>
                    <button>Hue</button>
                    <button>Impala</button>
                    <button>Oozie</button>
                    <button>Solr</button>
                    <button>Spark</button>
                    <button>YARN</button>
                    <button>ZooKeeper</button>
                </div>
                <div class="category">
                    <div class="title">前端</div>
                    <button>Vue.js</button>
                    <button>Node.js</button>
                    <button>TypeScript</button>
                    <button>D3.js</button>
                    <button>HTML5&CSS3</button>
                    <button>Nuxt.js</button>
                    <button>Less&Sass</button>
                    <button>WebAssembly</button>
                    <button>Flutter</button>
                    <button>Swift</button>
                    <button>Kotlin</button>
                </div>
                <div class="category">
                    <div class="title">数据存储</div>
                    <button>MySQL</button>
                    <button>PostgreSQL</button>
                    <button>Redis</button>
                    <button>MongoDB</button>
                    <button>Neo4j</button>
                    <button>Elasticsearch</button>
                    <button>Ceph</button>
                </div>
                <div class="category">
                    <div class="title">Java</div>
                    <button>JVM</button>
                    <button>Spring</button>
                    <button>Netty</button>
                    <button>Maven</button>
                    <button>Gradle</button>
                </div>
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
        padding-left: 100px;
        padding-right: 100px;
    }

    .category {
        display: inline-block;
        vertical-align: top;
        width: 23%;
        margin-left: 1%;
        margin-right: 1%;
    }

    .title {
        font-weight: bold;
        font-size: 20px;
        width: 100%;
        padding-bottom: 12px;
        margin-bottom: 20px;
        border-bottom: 1px solid #f8f8f8;
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
        margin-bottom: 10px;
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
