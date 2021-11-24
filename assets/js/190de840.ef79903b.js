"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2972],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6802:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Code Consistency",c={unversionedId:"development/code-consistency",id:"development/code-consistency",isDocsHomePage:!1,title:"Code Consistency",description:"It is important to the efficiency of teams working",source:"@site/docs/development/code-consistency.md",sourceDirName:"development",slug:"/development/code-consistency",permalink:"/nodejs-reference-architecture/development/code-consistency",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/development/code-consistency.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Building Good Containers",permalink:"/nodejs-reference-architecture/development/building-good-containers"},next:{title:"Npm Proxy / Internal Registry",permalink:"/nodejs-reference-architecture/development/npm-proxy"}},p=[{value:"Recommended Components",id:"recommended-components",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"code-consistency"},"Code Consistency"),(0,i.kt)("p",null,"It is important to the efficiency of teams working\non JavaScript (and other languages) to have consistency\nin formatting within the projects managed by their team."),(0,i.kt)("p",null,"Not having a consistent coding style documented or enforcing\nconsistency manually as part of code reviews or\nother manual techniques is error prone, potentially\nharmful to relationships between team members,\nis a barrier to attracting external contributions and can\nresult in bugs because the is harder to understand and spot\nrepeating patterns."),(0,i.kt)("p",null,"Consistency should be enforced through automated tooling\nwhich is well integrated into the process of landing\nPull Requests (or equivalent)."),(0,i.kt)("p",null,"There are benefits to consistency across an organization but\nit is also important that teams are empowered to do what is\nright for their projects. We recommend starting with an\norganizational standard and then adjusting based on the\nneeds of the team."),(0,i.kt)("h2",{id:"recommended-components"},"Recommended Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ESLint - ",(0,i.kt)("a",{parentName:"li",href:"https://eslint.org/"},"https://eslint.org/"))),(0,i.kt)("p",null,"ESLint is broadly used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"teams")," organizations and has broad usage\nacross the JavaScript ecosystem with > 11 million weekly downloads.\nIt can be configured to reflect the coding style followed by most\nif not all teams."),(0,i.kt)("h1",{id:"guidance"},"Guidance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use one of the pre-existing ESLint shareable configurations. There are a number\nof pre-existing configurations and re-using one of these has a number\nof benefits:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"minimizing what can be potentially divisive discussions to agree\non the style to be followed."),(0,i.kt)("li",{parentName:"ul"},"leveraging the experience of what has worked for other teams."),(0,i.kt)("li",{parentName:"ul"},"increasing the likelihood of familiarity for new team members.")),(0,i.kt)("p",{parentName:"li"},"Examples include:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"eslint-config-airbnb-standard - ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/eslint-config-airbnb-standard"},"https://www.npmjs.com/package/eslint-config-airbnb-standard")),(0,i.kt)("li",{parentName:"ul"},"eslint-config-semistandard - ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/eslint-config-semistandard"},"https://www.npmjs.com/package/eslint-config-semistandard")),(0,i.kt)("li",{parentName:"ul"},"eslint-config-standard - ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/eslint-config-standard"},"https://www.npmjs.com/package/eslint-config-standard")),(0,i.kt)("li",{parentName:"ul"},"eslint-config-prettier - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/prettier/prettier-eslint"},"https://github.com/prettier/prettier-eslint"))),(0,i.kt)("p",{parentName:"li"},"with a complete list available through this query: ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=eslint-config-&ranking=popularity"},"https://www.npmjs.com/search?q=eslint-config-&ranking=popularity"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Integrate eslint into your package.json so that it runs before scripts. For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n      "pretest": "eslint --ignore-path .gitignore ."\n  }\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"set your project to extend your chosen eslint-config-X by populating an eslintrc.json file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'  echo \'{"extends": "X"}\' > .eslintrc.json\n')),(0,i.kt)("p",{parentName:"li"},"substituting X with your chosen config. You can also get started by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npx eslint --init")," which\nwill ask you a number of interactive questions and then create your ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.json")," file and add\nthe required dependencies into your package.json.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ensure you have a gitignore file so derived files do not get linted. A minimal one can be\ncreated with:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"echo node_modules/ >> .gitignore\n")),(0,i.kt)("p",{parentName:"li"},"Some additional useful suggestions are available in this\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7"},"article"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When adopting a pre-existing shareable config it is important to understand that these\nconfigs can change over time. Include time in your regular workflow to review these changes\nand update your code base appropriately.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configure hooks to run eslint before committing code, but ensure that this pre-commit check does not take too long to execute which may cause complaints from developers."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/typicode/husky"},"husky")," to configure scripts to run before git commits and git pushes.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"These checks can be skipped by a developer when needed via ",(0,i.kt)("inlineCode",{parentName:"li"},"git commit --no-verify")))),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/okonet/lint-staged"},"lint-staged")," to reduce amount of code to be linted. This speeds up linting step before commit/push.\nThese can be integrated into package.json as follows:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"lint-staged": {\n  "**/*.js": "eslint"\n},\n"husky": {\n  "hooks": {\n    "pre-commit": "lint-staged"\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Always ensure CI/CD is running linting regardless of hooks."))))}u.isMDXComponent=!0}}]);