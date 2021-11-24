"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1374],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9958:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],p={sidebar_position:6},s="Typescript",c={unversionedId:"docs/development/typescript",id:"docs/development/typescript",isDocsHomePage:!1,title:"Typescript",description:"TypeScript is a language that compiles to JavaScript and provides static typing by extending the JavaScript syntax. It is worth considering for larger projects as it can bring the following benefits:",source:"@site/docs/docs/development/typescript.md",sourceDirName:"docs/development",slug:"/docs/development/typescript",permalink:"/nodejs-reference-architecture/docs/development/typescript",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/docs/development/typescript.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/nodejs-reference-architecture/docs/development/testing"},next:{title:"Code Coverage",permalink:"/nodejs-reference-architecture/docs/development/code-coverage"}},l=[{value:"Transpilers",id:"transpilers",children:[]},{value:"Transpiling in development",id:"transpiling-in-development",children:[]},{value:"Ship JavaScript not TypeScript for deployment",id:"ship-javascript-not-typescript-for-deployment",children:[]},{value:"Recommended configuration",id:"recommended-configuration",children:[]},{value:"Hierarchical TypeScript Configuration",id:"hierarchical-typescript-configuration",children:[]},{value:"Sharing types with npm modules",id:"sharing-types-with-npm-modules",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript"},"Typescript"),(0,a.kt)("p",null,"TypeScript is a language that compiles to JavaScript and provides static typing by extending the JavaScript syntax. It is worth considering for larger projects as it can bring the following benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Error detection"),": certain classes of errors can be caught at compile time rather than causing a runtime error, e.g. reading a property from an object that may be undefined.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Contextual help in code editors"),": for supported editors, TypeScript enables rich code completion both for project code and imported modules via the ",(0,a.kt)("a",{parentName:"p",href:"https://definitelytyped.org/"},"DefinitelyTyped")," project.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Refactoring support"),": changing the signature of a function or structure of an object in an incompatible way will cause compilation errors where it is used. TypeScript also enables automated refactorings such as renaming variables across multiple files and extracting methods.  "))),(0,a.kt)("p",null,"TypeScript does ",(0,a.kt)("em",{parentName:"p"},"not")," provide any runtime type checking. To validate data at runtime, use a library such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv"},"ajv")," in combination with TypeScript."),(0,a.kt)("h2",{id:"transpilers"},"Transpilers"),(0,a.kt)("p",null,"Node.js does not support running TypeScript natively, so it must first be transpiled to JavaScript. We recommend the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," transpiler that is shipped with ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/typescript"},"typescript"),". This supports both type checking and transpilation to JavaScript."),(0,a.kt)("p",null,"For front end development, sometimes ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io"},(0,a.kt)("inlineCode",{parentName:"a"},"babel"))," is used with the ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-typescript"},(0,a.kt)("inlineCode",{parentName:"a"},"@babel/preset-typescript"))," preset for transpilation, but this does ",(0,a.kt)("em",{parentName:"p"},"not")," support type checking and we do not recommend it for Node.js. More information on choosing a transpiler can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html"},"typescript documentation"),"."),(0,a.kt)("p",null,"Avoid mixing transpilers on the same project as this can lead to inconsistencies. Sometimes projects unintentially use ",(0,a.kt)("inlineCode",{parentName:"p"},"babel")," for their jest tests as it the ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/getting-started#using-typescript"},"default"),"."),(0,a.kt)("h2",{id:"transpiling-in-development"},"Transpiling in development"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," compiler provides a useful watch mode, activated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"-w")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--watch")," flag. This will automatically re-transpile source files when they change. If you want to also restart a Node.js server process when this happens, you can use this in combination with ",(0,a.kt)("a",{parentName:"p",href:"https://nodemon.io"},"nodemon")," using a module such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/concurrently"},"concurrently"),". An example script for ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev": "concurrently -n tsc,node \'tsc -w\' \'nodemon -w dist dist/server.js\'"\n  }\n}\n\n')),(0,a.kt)("p",null,"If you're using ",(0,a.kt)("inlineCode",{parentName:"p"},"babel")," which does not perform type checking, it is a good idea to run ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc --noEmit")," periodically to check the entire codebase, e.g. as a git pre-push hook."),(0,a.kt)("h2",{id:"ship-javascript-not-typescript-for-deployment"},"Ship JavaScript not TypeScript for deployment"),(0,a.kt)("p",null,"It's best practice to run the transpilation step as part of your deployment pipeline rather than dynamically in production, for the follow reasons:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Type errors will get caught before code is deployed"),(0,a.kt)("li",{parentName:"ol"},"The application will start up more quickly as there is no need to transpile"),(0,a.kt)("li",{parentName:"ol"},"You can ship a smaller container as it doesn't need to include the transpiler")),(0,a.kt)("h2",{id:"recommended-configuration"},"Recommended configuration"),(0,a.kt)("p",null,"The typescript community have produced a series of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tsconfig/bases/"},"recommended base configurations for various versions of node"),". Using an up to date version means typescript will not polyfill capabilities that are natively supported by node, which can improve runtime performance."),(0,a.kt)("p",null,"In addition to the above, we recommend setting the following in the ",(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions")," section of the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"isolatedModules": true\n')),(0,a.kt)("p",null,"This flag enables compatibility with Babel and other transpilers that process a project a single file at a time. Some TypeScript features such as ",(0,a.kt)("inlineCode",{parentName:"p"},"const enums")," are not compatible with isolated modules, see the ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#isolatedModules"},"TypeScript documentation")," for more details. Turning on this flag will produce warnings if those features are used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"strict": true\n')),(0,a.kt)("p",null,"Strict mode turns on a ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#strict"},"number of other flags")," which can help prevent bugs in your code. If you're migrating an existing project to typescript it might be difficult to turn this on, but for new projects it is recommended."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"esModuleInterop": true\n')),(0,a.kt)("p",null,"This improves TypeScript's ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#esModuleInterop"},"interoperability with with CommonJS/AMD/UMD modules"),", particularly with regard to how default imports are handled. It is automatically enabled in the Node.js base configurations (see above)."),(0,a.kt)("h2",{id:"hierarchical-typescript-configuration"},"Hierarchical TypeScript Configuration"),(0,a.kt)("p",null,"If you want to maintain consistency across several components (e.g. microservices) it is a good idea to create a standard base configuration which specifies appropriate and then have every component inherit from it. This can be done by publishing the base configuration as a versioned npm module and then referencing it in a ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"extends": "@yourproject/projectbase/tsconfig.json"\n')),(0,a.kt)("p",null,"Multiple levels of inheritance are possible, so the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectbase")," configuration could inherit from one of the recommended base configurations described above."),(0,a.kt)("h2",{id:"sharing-types-with-npm-modules"},"Sharing types with npm modules"),(0,a.kt)("p",null,"If you are publishing a library code rather than an application it is good practice to publish types for that module alongside the compiled code. There are 2 steps required to enable this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Turn on ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#declaration"},"declaration generation")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "declaration": true\n  }\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reference the main declaration file in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  "types": "./lib/index.d.ts"\n}\n```\n')),(0,a.kt)("p",{parentName:"li"},"You should also ensure you include dependencies for the types of modules that you depend on, see the ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html"},"TypeScript documentation")," for further details."))))}u.isMDXComponent=!0}}]);