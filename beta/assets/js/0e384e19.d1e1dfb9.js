"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>c});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(o),p=r,c=m["".concat(l,".").concat(p)]||m[p]||h[p]||a;return o?n.createElement(c,i(i({ref:t},u),{},{components:o})):n.createElement(c,i({ref:t},u))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},59881:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const a={sidebar_position:-1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"This website is a new service and your feedback will help improve it. In the mean time, you might want to refer to the current documentation.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Cmdr/beta/docs/intro",draft:!1,editUrl:"https://github.com/evaera/cmdr/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1},sidebar:"defaultSidebar",next:{title:"Installation",permalink:"/Cmdr/beta/docs/installation"}},l={},d=[{value:"What is Cmdr and who is it for?",id:"what-is-cmdr-and-who-is-it-for",level:2},{value:"Why should I use it?",id:"why-should-i-use-it",level:2},{value:"Why <em>shouldn&#39;t</em> I use it?",id:"why-shouldnt-i-use-it",level:2},{value:"How do I get started?",id:"how-do-i-get-started",level:2},{value:"How do I get help with Cmdr?",id:"how-do-i-get-help-with-cmdr",level:2}],u={toc:d},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("admonition",{title:"Beta",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This website is a new service and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evaera/Cmdr/issues/new?assignees=&labels=scope%3Aixp&projects=&template=websitefeedback.md"},"your feedback")," will help improve it. In the mean time, you might want to refer to ",(0,r.kt)("a",{parentName:"p",href:"https://eryn.io/Cmdr"},"the current documentation"),".")),(0,r.kt)("h2",{id:"what-is-cmdr-and-who-is-it-for"},"What is Cmdr and who is it for?"),(0,r.kt)("p",null,"Cmdr is a console built for the Roblox platform. It's designed to make it easy for developers to write commands and easy for users to run those commands."),(0,r.kt)("p",null,"While originally made to help developers with debugging, Cmdr has been popularised as a general console and command system due to its powerful features and extensible nature. Of course, this doesn't mean that you have to use it for debugging or administration; Cmdr can be used in whatever way works for you."),(0,r.kt)("h2",{id:"why-should-i-use-it"},"Why should I use it?"),(0,r.kt)("p",null,"Cmdr is exceptionally user friendly thanks to type-safety and intelligent, context-aware auto-complete. This makes a user made aware of typos and mistakes before they even hit enter. Plus, a developer's command implementations doesn't have to check or transform types, you get exactly what you ask for."),(0,r.kt)("p",null,"Unlike other \"admin commands\" systems on Roblox, Cmdr quietly integrates with your game rather than getting in the way. This makes it super easy to write your own commands or types which 'plug into' your existing code. Plus, Cmdr is incredibly snappy and will do as much work as possible on the client; providing users, especially those with limited connections, quick feedback."),(0,r.kt)("p",null,"Cmdr provides a number of helpful commands and a range of powerful types out of the box, but of course you don't have to use them. We're also working on creating a ",(0,r.kt)("a",{parentName:"p",href:"/docs/community/cookbook"},"Cookbook")," which'll showcase even more helpful commands and cool things you can do with Cmdr."),(0,r.kt)("p",null,"Cmdr also provides ",(0,r.kt)("a",{parentName:"p",href:"/docs/metacommands"},"meta-commands"),", empowering users to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create aliases and/or chain commands together"),(0,r.kt)("li",{parentName:"ul"},"bind commands to inputs (like key presses)"),(0,r.kt)("li",{parentName:"ul"},"run commands when you join the game (which, in turn, can do the above!)")),(0,r.kt)("p",null,"Cmdr has been around for over five years and while it's been continuously improved since, it's stood the test of time and is trusted in games with billions of visits earning millions of dollars worth of revenue. For many developers, Cmdr is their go-to when they need a console system, saving them the potentially hundreds of hours of time it would take to develop their own."),(0,r.kt)("h2",{id:"why-shouldnt-i-use-it"},"Why ",(0,r.kt)("em",{parentName:"h2"},"shouldn't")," I use it?"),(0,r.kt)("p",null,"While we think Cmdr is amazing, it may not be right for you if:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You have limited Luau knowledge.")),(0,r.kt)("p",null,"While Cmdr isn't super complex, it may be difficult for beginners and those with limited programming experience."),(0,r.kt)("p",null,"You'll need to write your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/commands"},"command implementations")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/hooks"},"permissions")," yourself; take a look at the ",(0,r.kt)("a",{parentName:"p",href:"#how-do-i-get-help-with-cmdr"},"How do I get help with Cmdr?")," section below for more details. Similarly, any features which Cmdr doesn't provide (like bespoke types or logging) you'll also need to write yourself."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'You want a large set of pre-made ("plug and play") commands.')),(0,r.kt)("p",null,'While Cmdr has a set of built-in commands, these are fairly limited. There are plenty of open source "admin commands" systems which, while we can\'t comment on their quality, do provide a large number of diverse commands coupled with easy set-up.'),(0,r.kt)("p",null,"You may find our ",(0,r.kt)("a",{parentName:"p",href:"/docs/community/cookbook"},"Cookbook")," helpful but it's still fairly limited and you'll need to make the bulk of commands yourself."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mobile support is mission-critical.")),(0,r.kt)("p",null,"Cmdr's mobile support isn't perfect and is lacking in some areas. Also, you'll need to add some way for mobile and other non-keyboard users to be able to open the console."),(0,r.kt)("p",null,"First and foremost, Cmdr is a keyboard experience and it has been designed with this in mind. Although, if you think there's any areas that could be improved ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evaera/cmdr/issues"},"feel free to open an Issue ticket"),"."),(0,r.kt)("h2",{id:"how-do-i-get-started"},"How do I get started?"),(0,r.kt)("admonition",{title:"Do not modify the source code",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Please ",(0,r.kt)("strong",{parentName:"p"},"do not")," modify the source code of Cmdr for your game. Instead, use its API to customise the behaviour you want. Modifying the source code makes it much harder for you to receive future updates."),(0,r.kt)("p",{parentName:"admonition"},"There shouldn't be any reason why you need to modify the source code of Cmdr (unless you're ",(0,r.kt)("a",{parentName:"p",href:"/docs/contribute"},"adding a new feature or fixing a bug"),"). If there's something you think we're missing, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evaera/cmdr/issues"},"open an issue"),".")),(0,r.kt)("p",null,"Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation guide"),", you can then continue through our documentation from there."),(0,r.kt)("p",null,"You can also read through the ",(0,r.kt)("a",{parentName:"p",href:"/api/Cmdr"},"API reference"),". While we recommend reading the API reference to get a full understanding of Cmdr, it's not required."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We recommend against following any tutorials, particularly on YouTube or the DevForum, to set up Cmdr.")," These tend to be incorrect or outdated. Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"#how-do-i-get-help-with-cmdr"},"How do I get help with Cmdr?")," section below for more details on how to get support and what resources are available."),(0,r.kt)("h2",{id:"how-do-i-get-help-with-cmdr"},"How do I get help with Cmdr?"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Luau knowledge \u2014 ",(0,r.kt)("u",null,"please read!")),(0,r.kt)("p",{parentName:"admonition"},"If you don't know how to program with ",(0,r.kt)("a",{parentName:"p",href:"https://luau-lang.org"},"Luau")," then we recommend you don't use Cmdr. Cmdr is targeted towards those with experience in the Luau language and you will run into bigger problems down the road if you don't know what you're doing."),(0,r.kt)("p",{parentName:"admonition"},"We unfortunately can't 'hand hold' you through things. Setup is a huge, crucial step to determine if you should be using Cmdr or not. It may be a bit frustrating now, but later on if something breaks the frustration will exponentially increase. This is the reason why we tell those who need to touch up on their Luau or programming skills to do so beforehand."),(0,r.kt)("p",{parentName:"admonition"},"Our support channels exist to provide help with Cmdr-specific things, like our ",(0,r.kt)("a",{parentName:"p",href:"/api"},"API"),'. We cannot answer general Luau questions or help you with a specific command implementation (e.g. "how do I make a fly command?"), although you may find our ',(0,r.kt)("a",{parentName:"p",href:"/docs/community/cookbook"},"Cookbook")," helpful.")),(0,r.kt)("p",null,"There are plenty of resources available to help you with Cmdr, such as this website and our Discord server, but we've been made aware of a number of DevForum guides and YouTube videos which provide incorrect or outdated instructions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We recommend you stick to our official resources, especially if you're new to Cmdr.")," If you decide to use unofficial resources, then the level of support we can provide (for instance in our Discord server) is limited."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/g5PdMxh"},"Cmdr Discord server")," has a dedicated ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/425800792679645204/564621492432666654"},(0,r.kt)("inlineCode",{parentName:"a"},"cmdr-help"))," channel, which is where we recommend you go to get any support you need."))}h.isMDXComponent=!0}}]);