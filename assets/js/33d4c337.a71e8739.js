"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7180],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2615:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:2},s="Data Caching",l={unversionedId:"functional-components/data-caching",id:"functional-components/data-caching",isDocsHomePage:!1,title:"Data Caching",description:"There are two main types of caching used within Node.js applications. These include:",source:"@site/docs/functional-components/data-caching.md",sourceDirName:"functional-components",slug:"/functional-components/data-caching",permalink:"/nodejs-reference-architecture/functional-components/data-caching",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/functional-components/data-caching.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/nodejs-reference-architecture/functional-components/auth"},next:{title:"Databases",permalink:"/nodejs-reference-architecture/functional-components/databases"}},p=[{value:"Recommended packages",id:"recommended-packages",children:[{value:"In process",id:"in-process",children:[]},{value:"Cluster wide",id:"cluster-wide",children:[]}]},{value:"Guidance",id:"guidance",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-caching"},"Data Caching"),(0,i.kt)("p",null,"There are two main types of caching used within Node.js applications. These include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in-process"),(0,i.kt)("li",{parentName:"ul"},"cluster wide")),(0,i.kt)("h2",{id:"recommended-packages"},"Recommended packages"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Caching type"),(0,i.kt)("th",{parentName:"tr",align:null},"Recommended client"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"in process"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/lru-cache"},"lru-cache"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cluster wide"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/ioredis"},"ioredis"))))),(0,i.kt)("h3",{id:"in-process"},"In process"),(0,i.kt)("p",null,"Recommendation is to use ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/lru-cache"},"lru-cache")," which is broadly used within the\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"teams")," organizations and in the JavaScript ecosystem with > 28 million weekly\ndownloads."),(0,i.kt)("h3",{id:"cluster-wide"},"Cluster wide"),(0,i.kt)("p",null,"For cluster wide caching with Redis, the recommendation is to use ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ioredis"},"ioredis"),".\nThere are 2 good options with no clear technical winner for redis, but the ",(0,i.kt)("inlineCode",{parentName:"p"},"teams"),"\norganizations have experience in production with ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ioredis"},"ioredis")," so\nthat is why it is recommended over ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/redis"},"redis"),". Depending on the server you are\nusing there may be features which are only available in a server specific client and\nif you need those features then using the specific client makes sense insteda of ioredis."),(0,i.kt)("h2",{id:"guidance"},"Guidance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consider your call behaviour to ensure you need to cache a specific piece of data at all"),(0,i.kt)("li",{parentName:"ul"},"For cluster wide caching, include a version prefix as part of keys from the start, otherwise you\nwill encouter problems when you try to update the caching schema")))}d.isMDXComponent=!0}}]);