(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&v.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var o=i[r];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=i[0]))}return t}var n={},r={app:0},a={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+".js"}function c(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(t){var e=[],i={"chunk-3f6465b8":1};r[t]?e.push(r[t]):0!==r[t]&&i[t]&&e.push(r[t]=new Promise((function(e,i){for(var n="css/"+({}[t]||t)+".css",a=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return e()}var v=document.getElementsByTagName("style");for(o=0;o<v.length;o++){l=v[o],u=l.getAttribute("data-href");if(u===n||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],d.parentNode.removeChild(d),i(s)},d.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){r[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,i){n=a[t]=[e,i]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var v=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var i=a[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;v.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",v.name="ChunkLoadError",v.type=n,v.request=r,i[1](v)}a[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(i,n,function(e){return t[e]}.bind(null,n));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="dist/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var v=0;v<l.length;v++)e(l[v]);var d=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"00ca":function(t,e,i){t.exports=i.p+"img/jaeger.png"},"0418":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("div",{attrs:{id:"first"}},[n("img",{attrs:{src:i("4302"),id:"logo-img"}}),n("div",{attrs:{id:"title"},on:{click:function(e){return t.$router.push("/")}}},[n("div",{staticClass:"small"},[t._v("生命不息")]),n("div",{staticClass:"big"},[t._v("折腾不止")])])]),n("div",{attrs:{id:"nav"}},[n("button",{on:{click:function(e){return t.$router.push("/")}}},[t._v("首页")]),n("button",[t._v("分类")]),n("button",{on:{click:function(e){return t.$router.push("/all")}}},[t._v("文章")]),n("button",[t._v("项目")]),n("button",[t._v("时间轴")])]),t._m(0)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"footer"}},[i("button",[t._v("关于")])])}],a=i("ace7"),s=i("d11d"),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a["b"](e,t),e.prototype.mounted=function(){},e=a["a"]([Object(s["a"])({})],e),e}(s["b"]),c=o,l=c,u=(i("75a7"),i("6691")),v=Object(u["a"])(l,n,r,!1,null,"0ed4aa8a",null);e["a"]=v.exports},"0b8c":function(t,e,i){},1364:function(t,e,i){"use strict";var n=i("b3e0"),r=i.n(n);r.a},1394:function(t,e,i){t.exports=i.p+"img/istio.png"},1772:function(t,e){t.exports=function(t){let e=t.getContext("2d"),i=t.width=window.innerWidth,n=t.height=window.innerHeight,r=217,a=[],s=0,o=1300,c=document.createElement("canvas"),l=c.getContext("2d");if(c.width=100,c.height=100,null==l)return;let u=c.width/2,v=l.createRadialGradient(u,u,0,u,u,u);function d(t,e){if(arguments.length<2&&(e=t,t=0),t>e){let i=e;e=t,t=i}return Math.floor(Math.random()*(e-t+1))+t}function b(t,e){let i=Math.max(t,e),n=Math.round(Math.sqrt(i*i+i*i));return n/2}v.addColorStop(.025,"#CCC"),v.addColorStop(.1,"hsl("+r+", 61%, 33%)"),v.addColorStop(.25,"hsl("+r+", 64%, 6%)"),v.addColorStop(1,"transparent"),l.fillStyle=v,l.beginPath(),l.arc(u,u,u,0,2*Math.PI),l.fill();let f=function(){this.orbitRadius=d(b(i,n)),this.radius=d(60,this.orbitRadius)/8,this.orbitX=i/2,this.orbitY=n/2,this.timePassed=d(0,o),this.speed=d(this.orbitRadius)/5e4,this.alpha=d(2,10)/10,s++,a[s]=this};f.prototype.draw=function(){let t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,i=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,n=d(10);1===n&&this.alpha>0?this.alpha-=.05:2===n&&this.alpha<1&&(this.alpha+=.05),e.globalAlpha=this.alpha,e.drawImage(c,t-this.radius/2,i-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(let h=0;h<o;h++)new f;function p(){e.globalCompositeOperation="source-over",e.globalAlpha=.5,e.fillStyle="hsla("+r+", 64%, 6%, 2)",e.fillRect(0,0,i,n),e.globalCompositeOperation="lighter";for(let t=1,e=a.length;t<e;t++)a[t].draw();window.requestAnimationFrame(p)}p()}},1887:function(t,e,i){t.exports=i.p+"img/grpc.png"},"2f84":function(t,e){t.exports="data:image/png;base64,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"},4302:function(t,e){t.exports="data:image/jpeg;base64,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"},"46b4":function(t,e,i){},5119:function(t,e,i){t.exports=i.p+"img/grafana.png"},"5c0b":function(t,e,i){"use strict";var n=i("f675"),r=i.n(n);r.a},"5e43":function(t,e,i){},"6c62":function(t,e,i){t.exports=i.p+"img/k8s.png"},"6e42":function(t,e,i){"use strict";var n=i("ed39"),r=i.n(n);r.a},"75a7":function(t,e,i){"use strict";var n=i("8a1a"),r=i.n(n);r.a},"8a1a":function(t,e,i){},"969d":function(t,e,i){},"9fbd":function(t,e,i){"use strict";var n=i("0b8c"),r=i.n(n);r.a},a133:function(t,e,i){"use strict";var n=i("969d"),r=i.n(n);r.a},a35a:function(t,e,i){"use strict";var n=i("5e43"),r=i.n(n);r.a},ad26:function(t,e,i){"use strict";var n=i("46b4"),r=i.n(n);r.a},b2f9:function(t,e,i){t.exports=i.p+"img/prometheus.png"},b3e0:function(t,e,i){},bcb8:function(t,e,i){t.exports=i.p+"img/docker.png"},cd49:function(t,e,i){"use strict";i.r(e);var n=i("6e6d"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("canvas",{attrs:{id:"canvas"}}),i("router-view",{attrs:{id:"router-view"}})],1)},a=[],s=i("ace7"),o=i("1772"),c=i.n(o),l=i("d11d"),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s["b"](e,t),e.prototype.mounted=function(){var t=document.querySelector("#canvas");c()(t)},e=s["a"]([Object(l["a"])({})],e),e}(l["b"]),v=u,d=v,b=(i("5c0b"),i("6691")),f=Object(b["a"])(d,r,a,!1,null,null,null),p=f.exports,h=i("c478"),A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"page"},on:{scroll:t.scroll}},[i("Header",{staticClass:"top-header",class:{"is-scroll":t.isScroll}}),i("div",{attrs:{id:"anchor-point"}},[i("div",{class:{container:!0,"container-active":0===t.active},on:{click:function(e){return t.scrollTo(0)}}},[i("div",{class:{circle:!0,"circle-active":0===t.active}})]),i("div",{class:{container:!0,"container-active":1===t.active},on:{click:function(e){return t.scrollTo(1)}}},[i("div",{class:{circle:!0,"circle-active":1===t.active}})]),i("div",{class:{container:!0,"container-active":2===t.active},on:{click:function(e){return t.scrollTo(2)}}},[i("div",{class:{circle:!0,"circle-active":2===t.active}})]),i("div",{class:{container:!0,"container-active":3===t.active},on:{click:function(e){return t.scrollTo(3)}}},[i("div",{class:{circle:!0,"circle-active":3===t.active}})]),i("div",{class:{container:!0,"container-active":4===t.active},on:{click:function(e){return t.scrollTo(4)}}},[i("div",{class:{circle:!0,"circle-active":4===t.active}})]),i("div",{class:{container:!0,"container-active":5===t.active},on:{click:function(e){return t.scrollTo(5)}}},[i("div",{class:{circle:!0,"circle-active":5===t.active}})])]),i("HeaderBack",{staticClass:"header-back"}),i("CloudNative",{staticClass:"header-back"}),i("BigData",{staticClass:"header-back"}),i("DataBaseAndStore",{staticClass:"header-back"}),i("BigFront",{staticClass:"header-back"}),i("Footer",{staticClass:"header-back"})],1)])},E=[],R=i("0418"),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"header-back"}},[t._m(0),t._m(1),i("div",{staticClass:"content"},[t._v(" 生命不息，折腾不止"),i("br"),i("br"),i("button",{on:{click:t.gotoThisProject}},[t._v("本项目代码")]),i("button",{on:{click:t.gotoGithub}},[t._v("Github")]),i("button",{on:{click:t.gotoZhihu}},[t._v("知乎")]),i("button",{on:{click:function(e){return t.$router.push("/all")}}},[t._v("本站全部文章")])])])},m=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("b",[t._v("Overview")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._v(" 本站用于整理总结一些日常使用到的技术，包括但不限于："),i("br"),t._v(" 大前端，Java，传统运维，云原生和大数据。"),i("br"),t._v(" 希望以此来激励自己学得更多更好。"),i("br"),t._v(" 本站采用 Vue.js + TypeScript + Github Pages 构建。"),i("br")])}],B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s["b"](e,t),e.prototype.gotoThisProject=function(){window.open("https://github.com/xujiyou/blog")},e.prototype.gotoGithub=function(){window.open("https://github.com/xujiyou")},e.prototype.gotoZhihu=function(){window.open("https://www.zhihu.com/people/yumugede/posts")},e=s["a"]([Object(l["a"])({})],e),e}(l["b"]),C=B,y=C,k=(i("6e42"),Object(b["a"])(y,g,m,!1,null,"01f66588",null)),w=k.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cloud-native"}},[n("div",{staticClass:"title"},[n("b",[t._v("云原生 · Cloud Native")])]),n("div",{staticClass:"content"},[n("div",{staticClass:"desc"},[t._v(" 依托于 Kubernetes ，整合了 DevOps , CI/DI , 微服务架构。"),n("br"),t._v(" 让项目轻松实现高可用，分布式。"),n("br"),t._v(" 还有高速、安全、可视化、故障隔离、容错、自动恢复、弹性扩展等好处。"),n("br"),n("br"),n("button",[t._v("云原生系列文章")])]),n("div",{staticClass:"skill-list"},[n("div",{staticClass:"card"},[n("img",{attrs:{src:i("bcb8"),alt:"k8s"}}),n("br"),n("div",{staticClass:"skill-title"},[t._v("Docker")]),t._v(" Docker 让应用程序布署在软件容器下的工作可以自动化进行。 ")]),n("div",{staticClass:"card"},[n("img",{attrs:{src:i("6c62"),alt:"k8s"}}),n("br"),n("div",{staticClass:"skill-title"},[t._v("Kubernetes")]),t._v(" 用于自动部署、扩展和管理容器化应用程序的开源系统。 ")]),n("div",{staticClass:"card"},[n("img",{attrs:{src:i("1394"),alt:"k8s"}}),n("br"),n("div",{staticClass:"skill-title"},[t._v("Istio")]),t._v(" Istio 用于统一集成微服务、管理跨微服务的流量、实施策略和聚合遥测数据。 ")]),n("div",{staticClass:"card"},[n("img",{attrs:{src:i("1887"),alt:"k8s"}}),n("br"),n("div",{staticClass:"skill-title"},[t._v("gRPC")]),t._v(" 高性能、开源、通用的RPC框架。"),n("br"),n("br")]),n("div",{staticClass:"card"},[n("img",{attrs:{src:i("b2f9"),alt:"k8s"}}),n("br"),n("div",{staticClass:"skill-title"},[t._v("Prometheus")]),t._v(" 一套开源的系统、服务监控工具，在给定时间间隔内收集指标、校验条件触发警报。 ")]),n("div",{staticClass:"card"},[n("img",{attrs:{src:i("5119"),alt:"k8s"}}),n("br"),n("div",{staticClass:"skill-title"},[t._v("Grafana")]),t._v(" 用于 Graphite、InfluxDB 和 Prometheus 等数据源的监控、度量分析和仪表板的工具。 ")]),n("div",{staticClass:"card"},[n("img",{attrs:{src:i("00ca"),alt:"k8s"}}),n("br"),n("div",{staticClass:"skill-title"},[t._v("Jaeger")]),t._v(" 开源的故障追踪系统，开放分布式追踪规范 OpenTracing 的一种实现。 ")]),n("div",{staticClass:"card"},[n("img",{attrs:{src:i("2f84"),alt:"k8s"}}),n("br"),n("div",{staticClass:"skill-title"},[t._v("Helm")]),t._v(" 一个 Kubernetes 的包管理工具，用来简化 Kubernetes 应用的部署和管理 ")])])])])}],O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s["b"](e,t),e=s["a"]([Object(l["a"])({})],e),e}(l["b"]),P=O,x=P,I=(i("1364"),Object(b["a"])(x,_,j,!1,null,"15fb4a06",null)),Q=I.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"big-front"}},[i("div",{staticClass:"title"},[i("b",[t._v("大前端")])]),i("div",{staticClass:"content"},[i("div",{staticClass:"desc"},[t._v(" 包括但不限于 Web前端、iOS APP、安卓APP、桌面客户端、各种小程序。"),i("br"),t._v(" 也可以理解为所有 UI 层，游戏除外。"),i("br"),i("br"),i("br"),i("button",[t._v("前端系列文章")])]),i("div",{staticClass:"skill-list"},[i("div",{staticStyle:{"font-size":"20px","padding-bottom":"10px"}},[i("b",[t._v("Web 前端")])]),i("div",[i("b",[t._v("Vue.js")]),t._v(" : 超顺手的前端组件化框架。")]),i("div",[i("b",[t._v("Node.js")]),t._v(" : JS 编译器，相当于 JDK ，用于在机器上运行JS代码，包含 node、npm、npx 等工具。")]),i("div",[i("b",[t._v("TypeScript")]),t._v(" : JS 的强类型版本语言，在编译期编译为 JS 。强类型有利于项目维护。")]),i("div",[i("b",[t._v("D3.js")]),t._v(" : 数据可视化神器，可定制化很强，学起来也很难。")]),i("div",[i("b",[t._v("HTML5&CSS3")]),t._v(" : 很多强大的功能，比如 Canvas，动画等。")]),i("div",[i("b",[t._v("打包工具")]),t._v(" : 包括 Webpack、Gulp.js、Grunt 。")]),i("div",[i("b",[t._v("Nuxt.js")]),t._v(" : 帮助 Vue 做 SEO 的框架。")]),i("div",[i("b",[t._v("Less&Sass")]),t._v(" : CSS 预处理器，帮助维护样式代码。")]),i("div",[i("b",[t._v("WebAssembly")]),t._v(" : 浏览器字节码技术，提升速度，未来比较有前途。")]),i("div",{staticStyle:{"font-size":"20px","padding-bottom":"10px","padding-top":"10px"}},[i("b",[t._v("APP")])]),i("div",[i("b",[t._v("Flutter")]),t._v(" : 跨平台框架，非常好用，简单。")]),i("div",[i("b",[t._v("Swift")]),t._v(" : 一门很不错的语言，主要用于开发iOS APP，底层用的LLVM。")]),i("div",[i("b",[t._v("Kotlin")]),t._v(" : 简化Java的语言，可以基于JVM，也可以基于LLVM。")])])])])}],H=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s["b"](e,t),e=s["a"]([Object(l["a"])({})],e),e}(l["b"]),q=H,F=q,M=(i("a133"),Object(b["a"])(F,S,D,!1,null,"aaa224ec",null)),G=M.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"big-data"}},[i("div",{staticClass:"title"},[i("b",[t._v("大数据")])]),i("div",{staticClass:"content"},[i("div",{staticClass:"desc"},[t._v(" 主要学习 CDH 中的各种组件。"),i("br"),t._v(" 通过 CM 安装 CDH 简单快捷，极大的降低了学习成本。"),i("br"),i("br"),i("br"),i("button",[t._v("大数据系列文章")])]),i("div",{staticClass:"skill-list"},[i("div",[i("b",[t._v("HDFS")]),t._v(" : 分布式文件系统。")]),i("div",[i("b",[t._v("HBase")]),t._v(" : 列数据库。")]),i("div",[i("b",[t._v("Hive")]),t._v(" : 数据提取加载工具。")]),i("div",[i("b",[t._v("Kafka")]),t._v(" : 消息中间件。")]),i("div",[i("b",[t._v("Hue")]),t._v(" : Hadoop 的可视化展示系统。")]),i("div",[i("b",[t._v("Impala")]),t._v(" : 跟Hive的功能差不多，但性能更好。")]),i("div",[i("b",[t._v("Oozie")]),t._v(" : 用于工作流调度，跟进程调度差不多一个意思。")]),i("div",[i("b",[t._v("Solr")]),t._v(" : 搜索引擎，跟 Elasticsearch 一样，都是基于 Lucene。")]),i("div",[i("b",[t._v("Spark")]),t._v(" : 数据计算框架。")]),i("div",[i("b",[t._v("YARN")]),t._v(" : 统一管理各个节点的资源。")]),i("div",[i("b",[t._v("ZooKeeper")]),t._v(" : 配置维护、域名服务、分布式同步、组服务等。")])])])])}],N=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s["b"](e,t),e=s["a"]([Object(l["a"])({})],e),e}(l["b"]),L=N,J=L,Y=(i("a35a"),Object(b["a"])(J,T,W,!1,null,"1fe80882",null)),z=Y.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"store"}},[i("div",{staticClass:"title"},[i("b",[t._v("数据库及存储技术")])]),i("div",{staticClass:"content"},[i("div",{staticClass:"desc"},[t._v(" 数据存储是比较重要的一块。"),i("br"),t._v(" 存储格式包括关系型和非关系型，非关系型又分为文档、键值对、图、列等格式。"),i("br"),t._v(" 另外还有一些分布式储存技术和对象储存技术。"),i("br"),i("br"),i("br"),i("button",[t._v("数据库及存储技术系列文章")])]),i("div",{staticClass:"skill-list"},[i("div",[i("b",[t._v("MySQL")]),t._v(" : 比较传统的关系型数据库。")]),i("div",[i("b",[t._v("PostgreSQL")]),t._v(" : 结合了关系型和非关系型特点的数据库。")]),i("div",[i("b",[t._v("Redis")]),t._v(" : 基于内存的键值对储存，主要用于缓存。")]),i("div",[i("b",[t._v("MongoDB")]),t._v(" : 文档型数据库，存 JSON 的")]),i("div",[i("b",[t._v("Neo4j")]),t._v(" : 图数据库，存节点与关系")]),i("div",[i("b",[t._v("HBase")]),t._v(" : 列数据库")]),i("div",[i("b",[t._v("Elasticsearch")]),t._v(" : 文档型数据库，有强大的全文索引，适合实时搜索数据。")]),i("div",[i("b",[t._v("HDFS")]),t._v(" : 分布式文件系统，大数据的基石，适合离线批量处理大数据")]),i("div",[i("b",[t._v("Ceph")]),t._v(" : 分布式文件系统，对象储存，实时存储系统。")])])])])}],U=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s["b"](e,t),e=s["a"]([Object(l["a"])({})],e),e}(l["b"]),V=U,Z=V,$=(i("9fbd"),Object(b["a"])(Z,X,K,!1,null,"29e83bf8",null)),tt=$.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("div",{staticClass:"top"},[n("img",{attrs:{src:i("4302"),id:"logo-img",alt:"xu"}}),n("br"),n("div",{attrs:{id:"title"}},[n("div",{staticClass:"small"},[t._v("生命不息")]),n("div",{staticClass:"big"},[t._v("折腾不止")])]),n("button",[t._v("本站全部文章")])]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"link"},[n("h3",[t._v("联系方式")]),n("div",[t._v("QQ & WX : 552003271")]),n("div",[t._v("Github : 552003271")]),n("div",[t._v("知乎 : 552003271")]),n("div",{staticClass:"copyright"},[t._v(" © 2019 许吉友 ")])]),n("div",{attrs:{id:"nav"}},[n("button",[t._v("云原生")]),n("button",[t._v("运维")]),n("button",[t._v("大数据")]),n("button",[t._v("大前端")]),n("button",[t._v("更多")])])])])}],nt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s["b"](e,t),e=s["a"]([Object(l["a"])({})],e),e}(l["b"]),rt=nt,at=rt,st=(i("db4a"),Object(b["a"])(at,et,it,!1,null,"60764956",null)),ot=st.exports,ct=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isScroll=!1,e.active=0,e}return s["b"](e,t),e.prototype.scroll=function(){var t=document.querySelector("#page");if(null!==t){var e=document.querySelectorAll(".header-back"),i=[];e.forEach((function(t){var e=t;i.push(e.offsetTop)}));for(var n=t.scrollTop+i[1]/3*2,r=0,a=0;a<i.length;a++)n>=i[a]&&(r=a);this.active=r,this.isScroll=n>i[1]/3*2+100}},e.prototype.scrollTo=function(t){var e=document.querySelectorAll(".header-back"),i=[];e.forEach((function(t){var e=t;i.push(e.offsetTop)}));var n=document.querySelector("#page");if(null!==n){var r=i[t],a=n.scrollTop,s=50;a>r?c():o()}function o(){null!==n&&a<r&&(r-a>=s?a+=s:a=r,n.scrollTop=a,requestAnimationFrame(o))}function c(){null!==n&&a>r&&(a-r>=s?a-=s:a=r,n.scrollTop=a,requestAnimationFrame(c))}},e=s["a"]([Object(l["a"])({components:{Header:R["a"],HeaderBack:w,CloudNative:Q,BigFront:G,BigData:z,DataBaseAndStore:tt,Footer:ot}})],e),e}(l["b"]),lt=ct,ut=lt,vt=(i("ad26"),Object(b["a"])(ut,A,E,!1,null,"91f31db6",null)),dt=vt.exports;n["a"].use(h["a"]);var bt=[{path:"/",name:"home",component:dt},{path:"/about",name:"about",component:function(){return i.e("chunk-2d22d746").then(i.bind(null,"f820"))}},{path:"/all",name:"all",component:function(){return i.e("chunk-3f6465b8").then(i.bind(null,"cf5b"))}}],ft=new h["a"]({base:"dist/",routes:bt}),pt=ft,ht=i("591a");n["a"].use(ht["a"]);var At=new ht["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Et=i("e1bc");Object(Et["a"])("dist/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({router:pt,store:At,render:function(t){return t(p)}}).$mount("#app")},db4a:function(t,e,i){"use strict";var n=i("f40b"),r=i.n(n);r.a},ed39:function(t,e,i){},f40b:function(t,e,i){},f675:function(t,e,i){}});
//# sourceMappingURL=app.js.map