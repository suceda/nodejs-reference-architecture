"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9862],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:5},l="Internationalization",p={unversionedId:"functional-components/internationalization",id:"functional-components/internationalization",isDocsHomePage:!1,title:"Internationalization",description:"Recommended Components",source:"@site/docs/functional-components/internationalization.md",sourceDirName:"functional-components",slug:"/functional-components/internationalization",permalink:"/nodejs-reference-architecture/functional-components/internationalization",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/functional-components/internationalization.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"GraphQL Development",permalink:"/nodejs-reference-architecture/functional-components/graphql"},next:{title:"Message Queuing",permalink:"/nodejs-reference-architecture/functional-components/message-queuing"}},c=[{value:"Recommended Components",id:"recommended-components",children:[]},{value:"Guidance",id:"guidance",children:[{value:"When to internationalize",id:"when-to-internationalize",children:[]},{value:"Logging",id:"logging",children:[]}]}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"internationalization"},"Internationalization"),(0,o.kt)("h2",{id:"recommended-components"},"Recommended Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Built in to JavaScript")),(0,o.kt)("p",null,"Ecma-402/Ecma-262 support for ",(0,o.kt)("inlineCode",{parentName:"p"},"Intl")," object and related functionality such as String.localeCompare ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node/blob/master/doc/api/intl.md"},"Node Intl.html")," . Widely supported, growing feature set. Use the API when possible. (Also available on all major browsers.) These functions, in general, accept a Locale string (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"en-CA")," for English in Canada) to specify which language and cultural preference should be used."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Collation: language-sensitive comparison and sorting"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Always use ",(0,o.kt)("inlineCode",{parentName:"li"},"String.localeCompare()")," to compare textual content from users."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Date/Time and Number formatting: language-aware output of dates/times and numbers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Upper/Lower casing and normalization: converting strings to a normalized or cased form\u2026 In many languages, there are multiple representations of the same character which will not compare as equal with ",(0,o.kt)("inlineCode",{parentName:"p"},"===")," unless they are normalized. In Turkish, the uppercase of ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"\u0130")," (with a dot), not ",(0,o.kt)("inlineCode",{parentName:"p"},"I")," (without a dot)."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Language data use by the above functions is bundled into the Node.js runtime As of Node.js 13. For versions prior to Node.js 13\nthis data must be installed separately and configured as outlined in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodejs/node/blob/master/doc/api/intl.md#providing-icu-data-at-runtime"},"providing icu data at runtime"),". We recommend using the ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/full-icu"},"full-icu")," module to install this data when needed.")),(0,o.kt)("p",null,"The built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Intl")," does not currently support some of the functionality that may be required for an internationalized user experience. For example, a common requirement is to present a translated version of a message such as ",(0,o.kt)("inlineCode",{parentName:"p"},"You have ${count} messages.")," Two components are required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Resource Loading: A way to load the translated version of this message. The application must be able to find a suitable fallback if the user\u2019s specific language and region is not available, possibly falling back to a different language if the message has not been translated yet. Other types of resources, such as images, may need to be loaded as well.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Message Format: Once a message is loaded, a library must be called to format this string, along with the parameter data, to produce the final string to display to the user."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"English (Canada): ",(0,o.kt)("inlineCode",{parentName:"li"},"You have ${count} messages.")," -> ",(0,o.kt)("strong",{parentName:"li"},"You have 1,234 messages.")),(0,o.kt)("li",{parentName:"ul"},"Spanish (Spain): ",(0,o.kt)("inlineCode",{parentName:"li"},"Tienes ${count} mensajes.")," -> ",(0,o.kt)("strong",{parentName:"li"},"Tienes 1.234 mensajes.")),(0,o.kt)("li",{parentName:"ul"},"Note: that translation may require a re-ordering of the substituted components, and is also affected by specific plural rules in a particular language.")))),(0,o.kt)("p",null,"For Resource Loading and Message Format, we recommend ",(0,o.kt)("a",{parentName:"p",href:"https://www.i18next.com/"},"i18next")," -- With >500,000 downloads a month, i18next is one of the most popular internationalization framework for Node.js.\nIt provides the capabilities needed to manage strings within your application so that they can be\ndisplayed in the locale appropriate for the end user. It is also supported on the browser."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We recommend using i18next with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/i18next-icu"},"i18next-icu")," module so that ICU MessageFormat syntax is used. There is industry wide work to standardize on the MessageFormat syntax. For more details you can read about current progress ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/unicode-org/message-format-wg"},"https://github.com/unicode-org/message-format-wg"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For loading localized content, we recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/i18next-fs-backend"},"i18next-fs-backend")," which is a backend that allows you to load translated resources as JSON files from the filesystem.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are using express or a web framework that supports express middleware, ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/i18next-http-middleware"},"i18next-http-middleware"),"\nprovides support for language detection/management when using i18next."))),(0,o.kt)("p",null,"Translated Language and Region Names: Applications which display a list of languages or countries/regions to users often must translate that list into many other languages according to their ISO code. Using the industry-standard vetted ",(0,o.kt)("a",{parentName:"p",href:"https://unicode.org/cldr"},"CLDR")," data will avoid the need to manually maintain and translate such a list. We recommend that you use this data via its ",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.com/package/cldr-localenames-full"},"NPM module"),'. For example, to fetch the name of "French" in "Spanish". Note that this is a large package, containing data for over 500 locales.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm i cldr-localenames-full\n$ node -p \"require('cldr-localenames-full/main/es/languages').main.es.localeDisplayNames.languages['fr']\"\nfranc\xe9s\n")),(0,o.kt)("p",null,"Also Note that there is ongoing active work to move the above features into JavaScript. To see details or even to influence the priorities, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals/blob/master/ecma402/README.md#active-proposals"},"github.com/tc39/ecma402"),"."),(0,o.kt)("h2",{id:"guidance"},"Guidance"),(0,o.kt)("h3",{id:"when-to-internationalize"},"When to internationalize"),(0,o.kt)("p",null,"Internationalizing your application will require some extra work. If your company supports their applications across geographies it's beneficial\nto build in the internationalization components from the start. In addition, if it's a case of when the application will go into production\nversus if, it is also beneficial to build internationalization in from the start."),(0,o.kt)("p",null,"On the other hand, for initial proof of concepts or limited releases where time to delivery is critical, the additional cost could prevent the project\nfrom being successful and it's accepted that hard coding strings is ok. The same is also often true for one-off demos and other\nsimilar short lived assets."),(0,o.kt)("h3",{id:"logging"},"Logging"),(0,o.kt)("p",null,"It is not recommended to translate low-level error and status messages.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/nodejs-reference-architecture/operations/logging"},"logging")," for additional guidance."))}m.isMDXComponent=!0}}]);