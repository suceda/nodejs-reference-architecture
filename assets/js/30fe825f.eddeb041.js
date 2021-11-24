"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5796],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return t?i.createElement(h,r(r({ref:n},u),{},{components:t})):i.createElement(h,r({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3434:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var i=t(7462),o=t(3366),a=(t(7294),t(3905)),r=["components"],s={sidebar_position:1},l="Building Good Containers",d={unversionedId:"development/building-good-containers",id:"development/building-good-containers",isDocsHomePage:!1,title:"Building Good Containers",description:"There are a number of recommendations based on our experience building",source:"@site/docs/development/building-good-containers.md",sourceDirName:"development",slug:"/development/building-good-containers",permalink:"/nodejs-reference-architecture/development/building-good-containers",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/development/building-good-containers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Node.js Reference Architecture",permalink:"/nodejs-reference-architecture/"},next:{title:"Code Consistency",permalink:"/nodejs-reference-architecture/development/code-consistency"}},u=[{value:"Build non-root containers",id:"build-non-root-containers",children:[]},{value:"Use multi-stage builds",id:"use-multi-stage-builds",children:[{value:"using <code>.dockerignore</code>",id:"using-dockerignore",children:[]},{value:"dependency image",id:"dependency-image",children:[]}]},{value:"Add key tools for problem determination",id:"add-key-tools-for-problem-determination",children:[]},{value:"Use a process manager",id:"use-a-process-manager",children:[]},{value:"Manage scaling outside of the container",id:"manage-scaling-outside-of-the-container",children:[]},{value:"setting memory limits",id:"setting-memory-limits",children:[]},{value:"avoiding using <code>npm</code> to start application",id:"avoiding-using-npm-to-start-application",children:[]},{value:"tooling for building containers",id:"tooling-for-building-containers",children:[]}],c={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-good-containers"},"Building Good Containers"),(0,a.kt)("p",null,"There are a number of recommendations based on our experience building\nNode.js applications in containers for deployments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"build non-root containers"),(0,a.kt)("li",{parentName:"ul"},"avoid reserved/privileged ports (i.e. 1-1023)"),(0,a.kt)("li",{parentName:"ul"},"use multi-stage builds"),(0,a.kt)("li",{parentName:"ul"},"add key tools for problem determination"),(0,a.kt)("li",{parentName:"ul"},"use a process manager"),(0,a.kt)("li",{parentName:"ul"},"setting memory limits"),(0,a.kt)("li",{parentName:"ul"},"avoiding using ",(0,a.kt)("inlineCode",{parentName:"li"},"npm")," to start application"),(0,a.kt)("li",{parentName:"ul"},"tooling for building containers")),(0,a.kt)("p",null,"This section relies of you having already chosen the base images to\nstart with. For recommendations on base images check out\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodeshift/nodejs-reference-architecture/blob/main/docs/functional-components/nodejs-versions-images.md#container-images"},"Node.js Versions and Container Images - Container images"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodeshift/nodejs-reference-architecture/blob/main/docs/functional-components/nodejs-versions-images.md#commercially-supported-containers"},"Node.js Versions and Container Images - Commercially Supported Containers"),"."),(0,a.kt)("h2",{id:"build-non-root-containers"},"Build non-root containers"),(0,a.kt)("p",null,"Running processes as root, even in containers can be a security risk,\nparticularly if external resources are mapped into the container.\nThe following is a good article which explains why:\n",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@mccode/processes-in-containers-should-not-run-as-root-2feae3f0df3b#:~:text=Containers%20are%20not%20trust%20boundaries,a%20container%20on%20your%20server"},"Processes In Containers Should Not Run As Root")),(0,a.kt)("p",null,"There are also systems which support running containers as ",(0,a.kt)("inlineCode",{parentName:"p"},"rootless"),".\nIn order to ensure that your containers can run on these system you\nwant to avoid running process as root as they may end up depending\non capabilities that are not available when they are run ",(0,a.kt)("inlineCode",{parentName:"p"},"rootless"),"."),(0,a.kt)("p",null,"When using docker/podman you can change the user with the ",(0,a.kt)("inlineCode",{parentName:"p"},"USER")," command.\nWell designed base containers will have already done this, but you should\nalways check what user will be used by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"USER 1001\nCOPY --chown=1001:0 . .\n")),(0,a.kt)("p",null,"It is recommended that you run processes as ",(0,a.kt)("inlineCode",{parentName:"p"},"non-root")," inside your containers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Avoid using trusted ports")),(0,a.kt)("p",null,"Ports below 1024 are considered ",(0,a.kt)("inlineCode",{parentName:"p"},"trusted")," and a process must have\nadditional priviledges to be able to bind to them."),(0,a.kt)("p",null,"If you respect the recommendation to build your containers as\n",(0,a.kt)("inlineCode",{parentName:"p"},"non-root")," then your process will not be able to bind to the\ntrusted ports."),(0,a.kt)("p",null,"Further, although there are ways to set capabilities on the\ncontainer to allow non root users to bind to these ports, at\nthe time of this writing doing so may cause other problems such\nas not being able use the ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_EXTRA_CA_CERTS")," environment\nvariable. You can read more about the issue\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node/pull/37727"},"here"),"."),(0,a.kt)("p",null,"Typical work arounds which include using firewall functionality to\nproxy ports most often don't work in containers as the firewall\ncapability is often not included in container distributions."),(0,a.kt)("p",null,"It is recommended that you build your containers so that internally\nonly ports 1024 and above are used."),(0,a.kt)("h2",{id:"use-multi-stage-builds"},"Use multi-stage builds"),(0,a.kt)("p",null,"While layering can reduce the size of the layer that contains\nyour Node.js application, the total size of all of the layers\nfor a container still ends up being a concern. This is\nparticularly true in Kubernetes environments where Pods and\nNodes may come/go frequently and the case were all layers\nneed to be installed is more common than might be expected."),(0,a.kt)("p",null,"Best practice is to use a two stage build where a larger\nbuild image is used to build an application and then the\nresulting artifacts are copied to a run image. The build\nimage includes all of the tools needed to build the application\n(compilers etc.) while the run image only includes what's\nneeded for the application to run. The size difference\nbetween the build and run images can often be significant."),(0,a.kt)("p",null,"There are different ways to build containers but most\nwill support using a build and run image. You read more\nabout a few examples in these references:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/develop/develop-images/multistage-build/"},"multistage-build")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.redhat.com/blog/2018/10/23/modern-web-applications-on-openshift-part-2-using-chained-builds"},"Modern web applications on OpenShift: Part 2 -- Using chained builds"))),(0,a.kt)("p",null,"It is recommended that you use multi-stage builds to minimize\ncontainer size."),(0,a.kt)("p",null,"When using multi-stage builds there are two additional\ntechniques which can make your build/development process\nmore efficient:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using ",(0,a.kt)("inlineCode",{parentName:"li"},".dockerignore")),(0,a.kt)("li",{parentName:"ul"},"image layering")),(0,a.kt)("h3",{id:"using-dockerignore"},"using ",(0,a.kt)("inlineCode",{parentName:"h3"},".dockerignore")),(0,a.kt)("p",null,"You might wonder why ",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore")," would be useful if\nyou have a multistage build and only ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY")," the required\nartifacts into the deployment image. In this case it is\nnot about keeping the final image size small, but instead\navoiding slowing down copies into the initial build\nimage."),(0,a.kt)("p",null,"As an example, it's common to run npm install locally\nto validate the package.json or test locally. If you do\nthat a COPY command which would normally copy over only\nthe files required to build (ex ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY --chown=1001:0 . ."),")\nwill end up copying the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," directory, and\ntaking a lot longer."),(0,a.kt)("p",null,"It's recommended that you use a ",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore")," file\nwhich at a minium includes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"node_modules\n.git\n.cache\n")),(0,a.kt)("h3",{id:"dependency-image"},"dependency image"),(0,a.kt)("p",null,"The dependencies for your application likely change\nless often than the code for your application. This\nmeans that if you build/install your depdencies and\napplication in the same step you'll end up building/installing\nthe depdencies even when they have not changed. Couple\nthat will the fact that it often takes much longer\nto build/install the depdencies than the application\nand the result is that your build will likely take\nlonger than needed."),(0,a.kt)("p",null,"In order to optimize your build times it is often useful\nto build a dependency image. The creation of the\ndependency image builds/installs the appliation dependencies\nto create a new image (often this is just npm install). Each\ntime you change your application you then build on top of\nthat dependency image which can often just be a ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY"),"\nof JavaScript and other static files into the\ndependency image."),(0,a.kt)("h2",{id:"add-key-tools-for-problem-determination"},"Add key tools for problem determination"),(0,a.kt)("p",null,"It can be difficult to add tooling/packages after the fact when\nissues are identified in production. Plan how you will\ninvestigate problems reported in production and include tooling\nin your containers in order to support problem determination\nworkflows."),(0,a.kt)("p",null,"This may increase the size of your containers but is worth\nthe increase in size based on our experience."),(0,a.kt)("h2",{id:"use-a-process-manager"},"Use a process manager"),(0,a.kt)("p",null,"The Node.js and npm processes do not expect to run as PID 1\nwhich is the case when run in a container. There are\nspecial expectations for the process run as PID 1 including\nreaping zombies and not meeting these expectations can lead\nto problems. You can read about the issue in:\n",(0,a.kt)("a",{parentName:"p",href:"https://blog.phusion.nl/2015/01/20/docker-and-the-pid-1-zombie-reaping-problem/"},"docker-and-the-pid-1-zombie-reaping-problem")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/krallin/tini"},"Tini")," is a process manager some of our teams have\nused successefully."),(0,a.kt)("h2",{id:"manage-scaling-outside-of-the-container"},"Manage scaling outside of the container"),(0,a.kt)("p",null,"Avoid using the cluster module and processes managers inside of the\ncontainer."),(0,a.kt)("p",null,"From our experience it as efficient or more efficient to handle\nscaling outside of the container and ensures the layer with the\nbest information can scale your application when needed."),(0,a.kt)("h2",{id:"setting-memory-limits"},"setting memory limits"),(0,a.kt)("p",null,"The Node.js runtime sets default memory limits for the heap which may not\nmatch what you want to use in production."),(0,a.kt)("p",null,"Use an environment variable in your start scripts so that you can\ntell the Node.js runtime in the container to use a limit which matches\nthe amount of memory you will provide to the container when it is run."),(0,a.kt)("p",null,"The following is an example of doing so in the start script within\n",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'"start": "if [ -z \\"$MAX_NODE_MEMORY\\" ]; then export MAX_NODE_MEMORY=2048; fi; node --max-old-space-size=$MAX_NODE_MEMORY bin/app.js",\n\n')),(0,a.kt)("p",null,"This will then allow you to conifgure the ",(0,a.kt)("inlineCode",{parentName:"p"},"max-old-space-size")," to\nalign with what you define in your kubernetes deployment files or\nset withe the --memory option in docker run commands."),(0,a.kt)("h2",{id:"avoiding-using-npm-to-start-application"},"avoiding using ",(0,a.kt)("inlineCode",{parentName:"h2"},"npm")," to start application"),(0,a.kt)("p",null,"While you will often see ",(0,a.kt)("inlineCode",{parentName:"p"},'CMD ["npm", "start"]')," in docker files\nused to build Node.js applications there are a number\nof good reasons to avoid this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One less component. You generally don't need ",(0,a.kt)("inlineCode",{parentName:"li"},"npm")," to start\nyour application. If you avoid using it in the container\nthen you will not be exposed to any security vulnerabilities\nthat might exist in that component or its dependencies."),(0,a.kt)("li",{parentName:"ul"},"One less process. Instead of running 2 process (npm and node)\nyou will only run 1."),(0,a.kt)("li",{parentName:"ul"},"There can be issues with signals and child processes. You\ncan read more about that in the Node.js docker best practices\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#cmd"},"CMD"),".")),(0,a.kt)("p",null,"Instead use a command like ",(0,a.kt)("inlineCode",{parentName:"p"},'CMD ["node","index.js"]'),","),(0,a.kt)("h2",{id:"tooling-for-building-containers"},"tooling for building containers"),(0,a.kt)("p",null,"When containers where first introduced the only way to build\nand run them was with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),". Depending on the operating\nsystem you are running on, there may be other options which\nprovide advantages and are worth considering. You can\nread more about some of these in\n",(0,a.kt)("a",{parentName:"p",href:"https://developers.redhat.com/blog/2019/02/21/podman-and-buildah-for-docker-users#what_is_buildah_and_why_would_i_use_it_-h2"},"Podman and Buildah for Docker users"),"."))}p.isMDXComponent=!0}}]);