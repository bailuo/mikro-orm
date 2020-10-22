(window.webpackJsonp=window.webpackJsonp||[]).push([[546],{603:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),c=(r(0),r(803)),o={id:"exceptionconverter",title:"Class: ExceptionConverter",sidebar_label:"ExceptionConverter"},i={unversionedId:"api/classes/exceptionconverter",id:"api/classes/exceptionconverter",isDocsHomePage:!1,title:"Class: ExceptionConverter",description:"Hierarchy",source:"@site/docs/api/classes/exceptionconverter.md",slug:"/api/classes/exceptionconverter",permalink:"/docs/next/api/classes/exceptionconverter",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/exceptionconverter.md",version:"current",sidebar_label:"ExceptionConverter",sidebar:"API",previous:{title:"Class: EventManager",permalink:"/docs/next/api/classes/eventmanager"},next:{title:"Class: FileCacheAdapter",permalink:"/docs/next/api/classes/filecacheadapter"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"convertException",id:"convertexception",children:[]}]}],s={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ExceptionConverter"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"convertexception"},"convertException"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"convertException"),"(",Object(c.b)("inlineCode",{parentName:"p"},"exception"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/driverexception#error"}),"Error")," & ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary"),"): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/driverexception"}),"DriverException")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/bf3acf9/packages/core/src/platforms/ExceptionConverter.ts#L7"}),"packages/core/src/platforms/ExceptionConverter.ts:7"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"exception")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/driverexception#error"}),"Error")," & ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#dictionary"}),"Dictionary"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/driverexception"}),"DriverException")))}b.isMDXComponent=!0},803:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(r),u=n,m=l["".concat(o,".").concat(u)]||l[u]||d[u]||c;return r?a.a.createElement(m,i(i({ref:t},s),{},{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);