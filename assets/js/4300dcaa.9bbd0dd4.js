"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[103],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(a),c=l,h=k["".concat(d,".").concat(c)]||k[c]||u[c]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={},i="Markdown Cheat Sheet",o={permalink:"/blog/markdown-cheat-sheet",source:"@site/blog/markdown-cheat-sheet.md",title:"Markdown Cheat Sheet",description:"Thanks for visiting The Markdown Guide!",date:"2023-04-24T21:33:53.000Z",formattedDate:"April 24, 2023",tags:[],readingTime:1.335,hasTruncateMarker:!1,authors:[],frontMatter:{}},d={authorsImageUrls:[]},s=[{value:"Basic Syntax",id:"basic-syntax",level:2},{value:"Heading",id:"heading",level:3},{value:"H2",id:"h2",level:2},{value:"H3",id:"h3",level:3},{value:"Bold",id:"bold",level:3},{value:"Italic",id:"italic",level:3},{value:"Blockquote",id:"blockquote",level:3},{value:"Ordered List",id:"ordered-list",level:3},{value:"Unordered List",id:"unordered-list",level:3},{value:"Code",id:"code",level:3},{value:"Horizontal Rule",id:"horizontal-rule",level:3},{value:"Link",id:"link",level:3},{value:"Image",id:"image",level:3},{value:"Extended Syntax",id:"extended-syntax",level:2},{value:"Table",id:"table",level:3},{value:"Fenced Code Block",id:"fenced-code-block",level:3},{value:"Footnote",id:"footnote",level:3},{value:"Heading ID",id:"heading-id",level:3},{value:"My Great Heading",id:"custom-id",level:3},{value:"Definition List",id:"definition-list",level:3},{value:"Strikethrough",id:"strikethrough",level:3},{value:"Task List",id:"task-list",level:3},{value:"Emoji",id:"emoji",level:3},{value:"Highlight",id:"highlight",level:3},{value:"Subscript",id:"subscript",level:3},{value:"Superscript",id:"superscript",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Thanks for visiting ",(0,l.kt)("a",{parentName:"p",href:"https://www.markdownguide.org"},"The Markdown Guide"),"!"),(0,l.kt)("p",null,"This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can\u2019t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for ",(0,l.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax"},"basic syntax")," and ",(0,l.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax"},"extended syntax"),"."),(0,l.kt)("h2",{id:"basic-syntax"},"Basic Syntax"),(0,l.kt)("p",null,"These are the elements outlined in John Gruber\u2019s original design document. All Markdown applications support these elements."),(0,l.kt)("h3",{id:"heading"},"Heading"),(0,l.kt)("h1",{id:"h1"},"H1"),(0,l.kt)("h2",{id:"h2"},"H2"),(0,l.kt)("h3",{id:"h3"},"H3"),(0,l.kt)("h3",{id:"bold"},"Bold"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"bold text")),(0,l.kt)("h3",{id:"italic"},"Italic"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"italicized text")),(0,l.kt)("h3",{id:"blockquote"},"Blockquote"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"blockquote")),(0,l.kt)("h3",{id:"ordered-list"},"Ordered List"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"First item"),(0,l.kt)("li",{parentName:"ol"},"Second item"),(0,l.kt)("li",{parentName:"ol"},"Third item")),(0,l.kt)("h3",{id:"unordered-list"},"Unordered List"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"First item"),(0,l.kt)("li",{parentName:"ul"},"Second item"),(0,l.kt)("li",{parentName:"ul"},"Third item")),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"code")),(0,l.kt)("h3",{id:"horizontal-rule"},"Horizontal Rule"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"link"},"Link"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.markdownguide.org"},"Markdown Guide")),(0,l.kt)("h3",{id:"image"},"Image"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.markdownguide.org/assets/images/tux.png",alt:"alt text"})),(0,l.kt)("h2",{id:"extended-syntax"},"Extended Syntax"),(0,l.kt)("p",null,"These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements."),(0,l.kt)("h3",{id:"table"},"Table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Header"),(0,l.kt)("td",{parentName:"tr",align:null},"Title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Paragraph"),(0,l.kt)("td",{parentName:"tr",align:null},"Text")))),(0,l.kt)("h3",{id:"fenced-code-block"},"Fenced Code Block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "firstName": "John",\n  "lastName": "Smith",\n  "age": 25\n}\n')),(0,l.kt)("h3",{id:"footnote"},"Footnote"),(0,l.kt)("p",null,"Here's a sentence with a footnote. ",(0,l.kt)("sup",{parentName:"p",id:"fnref-1-242d5a"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1-242d5a",className:"footnote-ref"},"1"))),(0,l.kt)("h3",{id:"heading-id"},"Heading ID"),(0,l.kt)("h3",{id:"custom-id"},"My Great Heading"),(0,l.kt)("h3",{id:"definition-list"},"Definition List"),(0,l.kt)("p",null,"term\n: definition"),(0,l.kt)("h3",{id:"strikethrough"},"Strikethrough"),(0,l.kt)("p",null,(0,l.kt)("del",{parentName:"p"},"The world is flat.")),(0,l.kt)("h3",{id:"task-list"},"Task List"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Write the press release"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update the website"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Contact the media")),(0,l.kt)("h3",{id:"emoji"},"Emoji"),(0,l.kt)("p",null,"That is so funny! \ud83d\ude02"),(0,l.kt)("p",null,"(See also ",(0,l.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji"},"Copying and Pasting Emoji"),")"),(0,l.kt)("h3",{id:"highlight"},"Highlight"),(0,l.kt)("p",null,"I need to highlight these ==very important words==."),(0,l.kt)("h3",{id:"subscript"},"Subscript"),(0,l.kt)("p",null,"H~2~O"),(0,l.kt)("h3",{id:"superscript"},"Superscript"),(0,l.kt)("p",null,"X^2^"),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1-242d5a"},"This is the footnote.",(0,l.kt)("a",{parentName:"li",href:"#fnref-1-242d5a",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);