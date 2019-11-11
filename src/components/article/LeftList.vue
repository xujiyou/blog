<template>
    <div class="left-view">
        <h3>云原生</h3>
        <div class="item"><button v-on:click="push('/云原生/Docker')">Docker</button></div>
        <div class="item"><button v-on:click="push('/云原生/Kubernetes')">Kubernetes</button></div>
        <div class="item"><button v-on:click="push('/云原生/Istio')">Istio</button></div>
        <div class="item"><button v-on:click="push('/云原生/gRPC')">gRPC</button></div>
        <div class="item"><button v-on:click="push('/云原生/Prometheus')">Prometheus</button></div>
        <div class="item"><button v-on:click="push('/云原生/Grafana')">Grafana</button></div>
        <div class="item"><button v-on:click="push('/云原生/Jaeger')">Jaeger</button></div>
        <div class="item"><button v-on:click="push('/云原生/Helm')">Helm</button></div>
        <h3>大数据</h3>
        <div class="item"><button v-on:click="push('/大数据/HDFS')">HDFS</button></div>
        <div class="item"><button v-on:click="push('/大数据/HBase')">HBase</button></div>
        <div class="item"><button v-on:click="push('/大数据/Hive')">Hive</button></div>
        <div class="item"><button v-on:click="push('/大数据/Kafka')">Kafka</button></div>
        <div class="item"><button v-on:click="push('/大数据/Hue')">Hue</button></div>
        <div class="item"><button v-on:click="push('/大数据/Impala')">Impala</button></div>
        <div class="item"><button v-on:click="push('/大数据/Oozie')">Oozie</button></div>
        <div class="item"><button v-on:click="push('/大数据/Solr')">Solr</button></div>
        <div class="item"><button v-on:click="push('/大数据/Spark')">Spark</button></div>
        <div class="item"><button v-on:click="push('/大数据/YARN')">YARN</button></div>
        <div class="item"><button v-on:click="push('/大数据/ZooKeeper')">ZooKeeper</button></div>
        <h3>前端</h3>
        <div class="item"><button v-on:click="push('/前端/Vue.js')">Vue.js</button></div>
        <div class="item"><button v-on:click="push('/前端/Node.js')">Node.js</button></div>
        <div class="item"><button v-on:click="push('/前端/TypeScript')">TypeScript</button></div>
        <div class="item"><button v-on:click="push('/前端/D3.js')">D3.js</button></div>
        <div class="item"><button v-on:click="push('/前端/HTML5&CSS3')">HTML5&CSS3</button></div>
        <div class="item"><button v-on:click="push('/前端/Nuxt.js')">Nuxt.js</button></div>
        <div class="item"><button v-on:click="push('/前端/Less&Sass')">Less&Sass</button></div>
        <div class="item"><button v-on:click="push('/前端/WebAssembly')">WebAssembly</button></div>
        <div class="item"><button v-on:click="push('/前端/Flutter')">Flutter</button></div>
        <div class="item"><button v-on:click="push('/前端/Swift')">Swift</button></div>
        <div class="item"><button v-on:click="push('/前端/Kotlin')">Kotlin</button></div>
        <h3>数据储存</h3>
        <div class="item"><button v-on:click="push('/数据储存/MySQL')">MySQL</button></div>
        <div class="item"><button v-on:click="push('/数据储存/PostgreSQL')">PostgreSQL</button></div>
        <div class="item"><button v-on:click="push('/数据储存/Redis')">Redis</button></div>
        <div class="item"><button v-on:click="push('/数据储存/MongoDB')">MongoDB</button></div>
        <div class="item"><button v-on:click="push('/数据储存/Neo4j')">Neo4j</button></div>
        <div class="item"><button v-on:click="push('/数据储存/Elasticsearch')">Elasticsearch</button></div>
        <div class="item"><button v-on:click="push('/数据储存/Ceph')">Ceph</button></div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';
    const namespace: string = 'article_store';

    @Component({})
    export default class LeftList extends Vue {

        @Action("findArticleList", {namespace})
        findArticleList!: Function;

        push(path) {
            this.$router.push("/article" + path);
            let category = this.$route.params["category"];
            let technology = this.$route.params["technology"];
            this.findArticleList({
                category: category,
                technology: technology
            });
        }
    }
</script>

<style scoped>
    .left-view {
        padding-bottom: 200px;
        height: 400px;
        overflow-y: scroll;
    }

    h3 {
        padding-left: 12px;
        margin-bottom: 20px;
        margin-top: 20px;
        color: #17b5d2;
    }

    button {
        height: 48px;
        background-color: transparent;
        text-align: left;
        width: 100%;
        box-shadow: none;
        padding: 0 12px 0 12px;
        margin: 0;
        border: none;
        outline: none;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
    }

    button:hover {
        animation: button-color 600ms 1;
        animation-fill-mode : forwards
    }

    @keyframes button-color {
        0% {
            background-color: transparent;
        }
        100% {
            background-color: rgba(255, 255, 255, 0.06);
        }
    }

    .item {
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        padding: 0;
        margin: 0 0 0 0;
    }

    .item::after {
        content:'';
        display:block;
        width: 100%;
        height: 1px;
        transition:all 0.3s ease-in-out;
        transform: scale3d(0,1,1);
        transform-origin:50% 0;
        background-color: #fff;
    }

    .item:hover::after {
        transform: scale3d(1,1,1);
    }
</style>
