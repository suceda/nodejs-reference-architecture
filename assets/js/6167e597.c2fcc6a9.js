"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1357],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},775:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:7},c="Message Queuing",l={unversionedId:"docs/functional-components/message-queuing",id:"docs/functional-components/message-queuing",isDocsHomePage:!1,title:"Message Queuing",description:"Recommended packages",source:"@site/docs/docs/functional-components/message-queuing.md",sourceDirName:"docs/functional-components",slug:"/docs/functional-components/message-queuing",permalink:"/nodejs-reference-architecture/docs/functional-components/message-queuing",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/docs/functional-components/message-queuing.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Internationalization",permalink:"/nodejs-reference-architecture/docs/functional-components/internationalization"},next:{title:"Node.js Versions and Container Images",permalink:"/nodejs-reference-architecture/docs/functional-components/nodejs-versions-images"}},d=[{value:"Recommended packages",id:"recommended-packages",children:[]},{value:"Kafka",id:"kafka",children:[{value:"Guidance",id:"guidance",children:[]}]},{value:"ActiveMQ",id:"activemq",children:[{value:"Guidance",id:"guidance-1",children:[]}]},{value:"Redis",id:"redis",children:[{value:"Guidance",id:"guidance-2",children:[]}]}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"message-queuing"},"Message Queuing"),(0,o.kt)("h2",{id:"recommended-packages"},"Recommended packages"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Server"),(0,o.kt)("th",{parentName:"tr",align:null},"Recommended client"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/node-rdkafka"},"node-rdkafka"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/tulios/kafkajs"},"KafkaJS"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ActiveMQ"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/rhea"},"rhea"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Redis"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/ioredis"},"ioredis"))))),(0,o.kt)("h2",{id:"kafka"},"Kafka"),(0,o.kt)("p",null,"It's currently difficult to make a single recommendation for a Node.js\nKafka client."),(0,o.kt)("p",null,"The team currently has the most real-world experience with\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-rdkafka"},"node-rdkafka"),". In the past it has been widely used and\nrecommended by the messaging groups within the ",(0,o.kt)("inlineCode",{parentName:"p"},"teams"),"\norganizations for performance, features, and protocol compatibility.\nOne of it's strengths is that is based on the same\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka"},"librdkafka"),", maintained\nby the Kafka project and used by most language clients. ",(0,o.kt)("strong",{parentName:"p"},"However"),"\nit is in the midst of a maintenance challenge that it does not\nseem to be pulling out of (for example at the time this was written\nnode-rdkafka does not build on Node.js version 16)."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tulios/kafkajs"},"KafkaJS")," is a newer Node.js\nKafka client which is more actively maintained and is growing in\npopularity. It's pure JavaScript implementation makes it\neasier to install and use. While we don't have past history of real-world\nexperience with the KafkaJS client, we have reviewed the features\nand usage versus node-rdkafka and it compares favorably. The one\npotential caveat is with respect to performance where node-rdkafka, likely\ndue to its use of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka"},"librdkafka"),",\ncomes out ahead. While the difference a simple benchmark is quite\nsignificant, whether that matters for a real-world application will\ndepend on the application."),(0,o.kt)("p",null,"At this point our recommendation is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you need the highest possible performance or longest track record of production use and are\nusing an older version of Node.js (14.x or earlier) and can tolerate\nthe risk on the maintenance side ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/node-rdkafka"},"node-rdkafka")," may still be\nyour best choice."),(0,o.kt)("li",{parentName:"ul"},"otherwise you should consider ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tulios/kafkajs"},"KafkaJS"),". If your application\nhas high performance requirements you should plan to validate\nthat you can meet those requirements with KafkaJS early on in your\ndevelopment lifecycle.")),(0,o.kt)("h3",{id:"guidance"},"Guidance"),(0,o.kt)("p",null,"Reuse connections. Do not write apps that connect/send/disconnect\nrepeatedly in a loop. This will result in poor performance, not only for the\nindividual application, but will also impact the Kafka cluster for other users."),(0,o.kt)("p",null,"Architect applications so that they connect and keep\nan open connection on which events are processed when they arrive."),(0,o.kt)("h2",{id:"activemq"},"ActiveMQ"),(0,o.kt)("p",null,"Recommendation is to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/rhea"},"rhea")," which supports AMQP1.0\n(one of the protocols supported by ActiveQ). This module is maintained by Red Hat and has\nhigher weekly downloads than the competing module for ActiveMQ which supports the STOMP\nprotocol (the native ActiveMQ protocol)."),(0,o.kt)("h3",{id:"guidance-1"},"Guidance"),(0,o.kt)("h2",{id:"redis"},"Redis"),(0,o.kt)("p",null,"Recommendation is to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ioredis"},"ioredis"),".\nThere are 2 good options with no clear technical winner, but IBM has experience\nin production with ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ioredis"},"ioredis")," so that is why it is recommended over ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/redis"},"redis"),"."),(0,o.kt)("h3",{id:"guidance-2"},"Guidance"),(0,o.kt)("p",null,"If you are already using redis for messaging this can provide a low cost option\nbut does not support more advanced features like High Availability. For more\nsophisticated uses cases you should consider a more complete option like Kafka."))}u.isMDXComponent=!0}}]);