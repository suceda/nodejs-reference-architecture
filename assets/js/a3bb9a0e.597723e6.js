"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6896],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6323:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="Distributed Tracing",c={unversionedId:"operations/distributed-tracing",id:"operations/distributed-tracing",isDocsHomePage:!1,title:"Distributed Tracing",description:"Recommended Components",source:"@site/docs/operations/distributed-tracing.md",sourceDirName:"operations",slug:"/operations/distributed-tracing",permalink:"/nodejs-reference-architecture/operations/distributed-tracing",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/operations/distributed-tracing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Web Framework",permalink:"/nodejs-reference-architecture/functional-components/webframework"},next:{title:"Fault Tolerance",permalink:"/nodejs-reference-architecture/operations/failurehandling"}},u=[{value:"Recommended Components",id:"recommended-components",children:[]},{value:"Guidance",id:"guidance",children:[{value:"Infrastructure",id:"infrastructure",children:[]},{value:"Integration suggestions",id:"integration-suggestions",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"distributed-tracing"},"Distributed Tracing"),(0,r.kt)("h2",{id:"recommended-components"},"Recommended Components"),(0,r.kt)("p",null,"Distributed tracing typically requires a mechanism for collecting traces (instrumentation)\nand a separate mechanism for reporting and visualizing those traces."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://opentelemetry.io/"},"OpenTelemetry")," provides instrumentation in multiple languages\nincluding Node. OpenTelemetry is not yet released as a final stable version and is in Beta.\nOpenTelemetry replaces both OpenTracing and OpenCensus, neither of which are actively being\ndeveloped (security fixes only).")),(0,r.kt)("p",null,"For adding instrumentation to Node applications and services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@opentelemetry/node"},"@opentelemetry/node")," - See the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-js/blob/master/getting-started/README.md"},"Getting Started Guide"))),(0,r.kt)("p",null,"Reasons for choosing OpenTelemetry:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the open source tracing library that's replacing both OpenCensus and OpenTracing"),(0,r.kt)("li",{parentName:"ul"},"handles basic use cases really well, includes good default configuration for most use cases"),(0,r.kt)("li",{parentName:"ul"},"includes support for newer efficient Node implementation for correlating outbound traffic\nto incoming requests"),(0,r.kt)("li",{parentName:"ul"},"supports multiple languages for tracing (not just Node) with a consistent API.")),(0,r.kt)("h2",{id:"guidance"},"Guidance"),(0,r.kt)("p",null,"There is significant value in collecting distributed tracing as it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"allows easy identification of performance critical services and code"),(0,r.kt)("li",{parentName:"ul"},'allows quick navigation to failing calls that are "buried" deep in the system'),(0,r.kt)("li",{parentName:"ul"},"allows a clearer understanding of the interdependencies of complicated systems")),(0,r.kt)("p",null,"These benefits come at a cost in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adding instrumentation to each application and the related negligible application overhead"),(0,r.kt)("li",{parentName:"ul"},"significant additional network and storage utilization"),(0,r.kt)("li",{parentName:"ul"},"additional services, and the related administration (Jaeger/ElasticSearch, etc.)")),(0,r.kt)("p",null,"For non-trivial systems the benefits are typically worth the costs, especially when investigating\nproblems."),(0,r.kt)("p",null,"OpenTelemetry allows the ability to sample a subset of traces to reduce the storage and network\nutilization of the tracing data. The guidance here is that, where possible, sampling should be disabled\nsuch that all traces are recorded. If sampling is enabled, it is inevitable that the trace data is\nmissing when trying to investigate some critical failure."),(0,r.kt)("p",null,"Be aware that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"some error conditions that do not trigger network traffic are not traced (e.g. DNS lookup\nfailures, etc.)"),(0,r.kt)("li",{parentName:"ul"},"existing instrumentation libraries are not customizable (no hooks, or extension points -\nnot able to extend instrumentation to add additional data without reimplementing them)"),(0,r.kt)("li",{parentName:"ul"},"you are not able to post process traces from instrumentation prior to exporting them"),(0,r.kt)("li",{parentName:"ul"},"you are not able to easily change configuration options dynamically (enabling/disabling tracing)")),(0,r.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jaegertracing.io/"},"Jaeger")," provides visualization of distributed traces."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.elastic.co/elastic-stack"},"ElasticSearch & Kibana")," provides storage for persisting\nthe data behind Jaeger as well as alternate mechanisms in Kibana to search, visualize, and manage\nthat data."),(0,r.kt)("li",{parentName:"ul"},"An alternate for Jaeger is ",(0,r.kt)("a",{parentName:"li",href:"https://zipkin.io/"},"Zipkin")," which is also directly supported by\nOpenTelemetry for visualizing distributed traces. The instrumentation in Node is not impacted\nby the selection of the visualization tool. Both Jaeger and Zipkin can be used concurrently if\nstorage space is available. If using Zipkin, ",(0,r.kt)("a",{parentName:"li",href:"https://cassandra.apache.org/"},"Cassandra")," may be used\ninstead of ElasticSearch.")),(0,r.kt)("h3",{id:"integration-suggestions"},"Integration suggestions"),(0,r.kt)("p",null,"Data management becomes a critical aspect of distributed tracing. Consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"expiring data as it ages out and is no longer relevant"),(0,r.kt)("li",{parentName:"ul"},"volumes and network traffic can become excessive"),(0,r.kt)("li",{parentName:"ul"},"storage costs can be large.")),(0,r.kt)("p",null,"OpenTelemetry by default installs instrumentation patches for many communication protocols\n(HTTP, HTTPS, GPRC, etc.). Configure OpenTelemetry to install just those patches for protocols that are\nactively used in your applications."),(0,r.kt)("p",null,"OpenTelemetry can be installed in container-based systems like Kubernetes. When used in conjunction with\nIstio care needs to be taken to ensure that either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Istio distributed tracing is disabled"),(0,r.kt)("li",{parentName:"ul"},"Istio distributed tracing is enabled and also exports all trace data to the same systems as OpenTelemetry.\nAdditionally, since Istio is typically the entry point for new connections, it is what sets the\nsampling conditions for traces, and not OpenTelemetry. Ensure sampling in Istio is correctly configured.\nIf Istio distributed tracing is enabled, but not exported to the same systems as OpenTelemetry, it\nwill cause gaps and orphans in the tracing hierarchies.")))}d.isMDXComponent=!0}}]);