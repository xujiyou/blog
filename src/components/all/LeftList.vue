<template>
    <div class="left-view">
        <h3>云原生</h3>
        <div class="item"><button>Docker</button></div>
        <div class="item"><button>Kubernetes</button></div>
        <div class="item"><button>Istio</button></div>
        <div class="item"><button>gRPC</button></div>
        <div class="item"><button>Prometheus</button></div>
        <div class="item"><button>Grafana</button></div>
        <div class="item"><button>Jaeger</button></div>
        <div class="item"><button>Helm</button></div>
        <h3>大数据</h3>
        <div class="item"><button>HDFS</button></div>
        <div class="item"><button>HBase</button></div>
        <div class="item"><button>Hive</button></div>
        <div class="item"><button>Kafka</button></div>
        <div class="item"><button>Hue</button></div>
        <div class="item"><button>Impala</button></div>
        <div class="item"><button>Oozie</button></div>
        <div class="item"><button>Solr</button></div>
        <div class="item"><button>Spark</button></div>
        <div class="item"><button>YARN</button></div>
        <div class="item"><button>ZooKeeper</button></div>
        <h3>前端</h3>
        <div class="item"><button>Vue.js</button></div>
        <div class="item"><button>Node.js</button></div>
        <div class="item"><button>TypeScript</button></div>
        <div class="item"><button>D3.js</button></div>
        <div class="item"><button>HTML5&CSS3</button></div>
        <div class="item"><button>Nuxt.js</button></div>
        <div class="item"><button>Less&Sass</button></div>
        <div class="item"><button>WebAssembly</button></div>
        <div class="item"><button>Flutter</button></div>
        <div class="item"><button>Swift</button></div>
        <div class="item"><button>Kotlin</button></div>
        <h3>数据储存</h3>
        <div class="item"><button>MySQL</button></div>
        <div class="item"><button>PostgreSQL</button></div>
        <div class="item"><button>Redis</button></div>
        <div class="item"><button>MongoDB</button></div>
        <div class="item"><button>Neo4j</button></div>
        <div class="item"><button>Elasticsearch</button></div>
        <div class="item"><button>Ceph</button></div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({})
    export default class LeftList extends Vue {

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
        animation: button-color 300ms 1;
        animation-fill-mode : forwards
    }

    @keyframes button-color {
        0% {
            background-color: transparent;
            color: #fff;
        }
        100% {
            background-color: rgba(255, 255, 255, 0.08);
            color: #17b5d2;
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
