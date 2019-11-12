<template>
    <div>
        <div id="store" v-if="pc">
            <div class="title"><b>数据库及存储技术</b></div>
            <div class="content">
                <div class="desc">
                    数据存储是比较重要的一块。<br/>
                    存储格式包括关系型和非关系型，非关系型又分为文档、键值对、图、列等格式。<br/>
                    另外还有一些分布式储存技术和对象储存技术。<br/>
                    <br/><br/>
                    <button @click="push('/article/数据存储', 'article')">数据库及存储技术系列文章</button>
                </div>
                <div class="skill-list">
                    <div><b>MySQL</b> : 比较传统的关系型数据库。</div>
                    <div><b>PostgreSQL</b> : 结合了关系型和非关系型特点的数据库。</div>
                    <div><b>Redis</b> : 基于内存的键值对储存，主要用于缓存。</div>
                    <div><b>MongoDB</b> : 文档型数据库，存 JSON 的</div>
                    <div><b>Neo4j</b> : 图数据库，存节点与关系</div>
                    <div><b>HBase</b> : 列数据库</div>
                    <div><b>Elasticsearch</b> : 文档型数据库，有强大的全文索引，适合实时搜索数据。</div>
                    <div><b>HDFS</b> : 分布式文件系统，大数据的基石，适合离线批量处理大数据</div>
                    <div><b>Ceph</b> : 分布式文件系统，对象储存，实时存储系统。</div>
                </div>
            </div>
        </div>
        <div id="mobile-store" v-else>
            <div class="title"><b>数据库及存储技术</b></div>
            <div class="mobile-content">
                <div class="mobile-desc">
                    数据存储是比较重要的一块。<br/>
                    存储格式包括关系型和非关系型，非关系型又分为文档、键值对、图、列等格式。<br/>
                    另外还有一些分布式储存技术和对象储存技术。<br/>
                    <br/><br/>
                </div>
                <div class="mobile-skill-list">
                    <div><b>MySQL</b> : 比较传统的关系型数据库。</div>
                    <div><b>PostgreSQL</b> : 结合了关系型和非关系型特点的数据库。</div>
                    <div><b>Redis</b> : 基于内存的键值对储存，主要用于缓存。</div>
                    <div><b>MongoDB</b> : 文档型数据库，存 JSON 的</div>
                    <div><b>Neo4j</b> : 图数据库，存节点与关系</div>
                    <div><b>HBase</b> : 列数据库</div>
                    <div><b>Elasticsearch</b> : 文档型数据库，有强大的全文索引，适合实时搜索数据。</div>
                    <div><b>HDFS</b> : 分布式文件系统，大数据的基石，适合离线批量处理大数据</div>
                    <div><b>Ceph</b> : 分布式文件系统，对象储存，实时存储系统。</div>
                </div>
                <div class="mobile-button">
                    <button @click="push('/article/数据存储', 'article')">数据库及存储技术系列文章</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';

    @Component({})
    export default class DataBaseAndStore extends Vue {
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
    #store {
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

    /* 手机端样式 */
    #mobile-store {
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
