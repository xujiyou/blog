<template>
    <div>
        <div id="cloud-native" v-if="pc">
            <div class="title"><b>云原生 · Cloud Native</b></div>
            <div class="content">
                <div class="desc">
                    依托于 Kubernetes ，整合了 DevOps , CI/DI , 微服务架构。<br/>
                    让项目轻松实现高可用，分布式。<br/>
                    还有高速、安全、可视化、故障隔离、容错、自动恢复、弹性扩展等好处。<br/><br/>
                    <button @click="push('/article/云原生', 'article')">云原生系列文章</button>
                </div>
                <div class="skill-list">
                    <div class="card">
                        <img src="../../assets/docker.png" alt="k8s"><br/>
                        <div class="skill-title">Docker</div>
                        Docker 让应用程序布署在软件容器下的工作可以自动化进行。
                    </div>
                    <div class="card">
                        <img src="../../assets/k8s.png" alt="k8s"><br/>
                        <div class="skill-title">Kubernetes</div>
                        用于自动部署、扩展和管理容器化应用程序的开源系统。
                    </div>
                    <div class="card">
                        <img src="../../assets/istio.png" alt="k8s"><br/>
                        <div class="skill-title">Istio</div>
                        Istio 用于统一集成微服务、管理跨微服务的流量、实施策略和聚合遥测数据。
                    </div>
                    <div class="card">
                        <img src="../../assets/grpc.png" alt="k8s"><br/>
                        <div class="skill-title">gRPC</div>
                        高性能、开源、通用的RPC框架。<br/><br/>
                    </div>
                    <div class="card">
                        <img src="../../assets/prometheus.png" alt="k8s"><br/>
                        <div class="skill-title">Prometheus</div>
                        一套开源的系统、服务监控工具，在给定时间间隔内收集指标、校验条件触发警报。
                    </div>
                    <div class="card">
                        <img src="../../assets/grafana.png" alt="k8s"><br/>
                        <div class="skill-title">Grafana</div>
                        用于 Graphite、InfluxDB 和 Prometheus 等数据源的监控、度量分析和仪表板的工具。
                    </div>
                    <div class="card">
                        <img src="../../assets/jaeger.png" alt="k8s"><br/>
                        <div class="skill-title">Jaeger</div>
                        开源的故障追踪系统，开放分布式追踪规范 OpenTracing 的一种实现。
                    </div>
                    <div class="card">
                        <img src="../../assets/helm.png" alt="k8s"><br/>
                        <div class="skill-title">Helm</div>
                        一个 Kubernetes 的包管理工具，用来简化 Kubernetes 应用的部署和管理
                    </div>
                </div>
            </div>
        </div>
        <div id="mobile-cloud-native" v-else>
            <div class="mobile-title"><b>云原生 · Cloud Native</b></div>
            <div class="content">
                <div class="mobile-desc">
                    依托于 Kubernetes ，整合了 DevOps , CI/DI , 微服务架构。<br/>
                    让项目轻松实现高可用，分布式。<br/>
                    还有高速、安全、可视化、故障隔离、容错、自动恢复、弹性扩展等好处。<br/><br/>
                </div>
                <div class="mobile-skill-list">
                    <div class="mobile-card">
                        <img src="../../assets/docker.png" alt="k8s"><br/>
                        <div class="skill-title">Docker</div>
                        Docker 让应用程序布署在软件容器下的工作可以自动化进行。
                    </div>
                    <div class="mobile-card">
                        <img src="../../assets/k8s.png" alt="k8s"><br/>
                        <div class="skill-title">Kubernetes</div>
                        用于自动部署、扩展和管理容器化应用程序的开源系统。
                    </div>
                    <div class="mobile-card">
                        <img src="../../assets/istio.png" alt="k8s"><br/>
                        <div class="skill-title">Istio</div>
                        Istio 用于统一集成微服务、管理跨微服务的流量、实施策略和聚合遥测数据。
                    </div>
                    <div class="mobile-card">
                        <img src="../../assets/grpc.png" alt="k8s"><br/>
                        <div class="skill-title">gRPC</div>
                        高性能、开源、通用的RPC框架。<br/><br/>
                    </div>
                    <div class="mobile-card">
                        <img src="../../assets/prometheus.png" alt="k8s"><br/>
                        <div class="skill-title">Prometheus</div>
                        一套开源的系统、服务监控工具，在给定时间间隔内收集指标、校验条件触发警报。
                    </div>
                    <div class="mobile-card">
                        <img src="../../assets/grafana.png" alt="k8s"><br/>
                        <div class="skill-title">Grafana</div>
                        用于 Graphite、InfluxDB 和 Prometheus 等数据源的监控、度量分析和仪表板的工具。
                    </div>
                    <div class="mobile-card">
                        <img src="../../assets/jaeger.png" alt="k8s"><br/>
                        <div class="skill-title">Jaeger</div>
                        开源的故障追踪系统，开放分布式追踪规范 OpenTracing 的一种实现。
                    </div>
                    <div class="mobile-card">
                        <img src="../../assets/helm.png" alt="k8s"><br/>
                        <div class="skill-title">Helm</div>
                        一个 Kubernetes 的包管理工具，用来简化 Kubernetes 应用的部署和管理
                    </div>
                </div>
                <div class="mobile-button">
                    <button @click="push('/article/云原生', 'article')">云原生系列文章</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';

    @Component({})
    export default class CloudNative extends Vue {

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
    #cloud-native {
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

    img {
        width: 50px;
        height: 50px;
        margin-bottom: 6px;
    }

    .skill-title {
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

    /* 手机端样式 */
    #mobile-cloud-native {
        width: 100%;
        padding-left: 16px;
        padding-right: 48px;
        color: #fff;
        text-align: left;
    }

    .mobile-title {
        padding-top: calc(20vh);
        margin-bottom: 30px;
        font-size: 28px;
    }

    .mobile-desc {
        margin-right: 48px;
    }

    .mobile-skill-list {
        margin-right: 48px;
    }

    .mobile-card {
        display: inline-block;
        margin-right: 1%;
        margin-left: 1%;
        width: 40%;
        margin-bottom: 12px;
        text-align: center;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 1);
        padding: 12px;
        color: #2c3e50;
        font-size: 12px;
        line-height: 20px;
        vertical-align: top;
    }

    .mobile-button {
        margin-top: 20px;
    }
</style>
