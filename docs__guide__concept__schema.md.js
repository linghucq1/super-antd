(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"9kvl":function(e,a,t){"use strict";var n=t("FfOG");t.d(a,"a",(function(){return n["b"]}));t("bCY9")},RZMt:function(e,a,t){},Zxc8:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("k3GJ"),c=t("9kvl"),o=t("dEAq"),i=t("H1Ra");t("RZMt");function m(e,a){return h(e)||E(e,a)||s(e,a)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,a){if(e){if("string"===typeof e)return u(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,a):void 0}}function u(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function E(e,a){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,l,r=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(n=t.next()).done);c=!0)if(r.push(n.value),a&&r.length===a)break}catch(i){o=!0,l=i}finally{try{c||null==t["return"]||t["return"]()}finally{if(o)throw l}}return r}}function h(e){if(Array.isArray(e))return e}function p(e,a){var t,n=null===(t=e.match(/\.(\w+)$/))||void 0===t?void 0:t[1];return n||(n=a.tsx?"tsx":"jsx"),n}var f=function(e){var a,t,d,s=Object(n["useRef"])(),u=Object(n["useContext"])(o["context"]),E=u.locale,h=Object(o["useLocaleProps"])(E,e),f=Object(o["useDemoUrl"])(h.identifier),b=h.demoUrl||f,k=(null===c["a"]||void 0===c["a"]?void 0:c["a"].location.hash)==="#".concat(h.identifier),v=1===Object.keys(h.sources).length,_=Object(o["useCodeSandbox"])((null===(a=h.hideActions)||void 0===a?void 0:a.includes("CSB"))?null:h),g=Object(o["useRiddle"])((null===(t=h.hideActions)||void 0===t?void 0:t.includes("RIDDLE"))?null:h),w=Object(o["useMotions"])(h.motions||[],s.current),A=m(w,2),N=A[0],y=A[1],L=Object(o["useCopy"])(),x=m(L,2),S=x[0],j=x[1],O=Object(n["useState"])("_"),I=m(O,2),C=I[0],R=I[1],P=Object(n["useState"])(p(C,h.sources[C])),B=m(P,2),T=B[0],M=B[1],F=Object(n["useState"])(Boolean(h.defaultShowCode)),U=m(F,2),J=U[0],q=U[1],Z=Object(n["useState"])(Math.random()),$=m(Z,2),D=$[0],G=$[1],V=h.sources[C][T]||h.sources[C].content,H=Object(o["useTSPlaygroundUrl"])(E,V),X=Object(n["useRef"])(),K=Object(o["usePrefersColor"])(),Y=m(K,1),z=Y[0];function Q(e){R(e),M(p(e,h.sources[e]))}return Object(n["useEffect"])((function(){G(Math.random())}),[z]),l.a.createElement("div",{style:h.style,className:[h.className,"__dumi-default-previewer",k?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:h.identifier,"data-debug":h.debug||void 0,"data-iframe":h.iframe||void 0},h.iframe&&l.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),l.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:h.transform?"translate(0, 0)":void 0,padding:h.compact||h.iframe&&!1!==h.compact?"0":void 0,background:h.background}},h.iframe?l.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(h.iframe).replace(/(\d)$/,"$1px")},key:D,src:b,ref:X}):h.children),l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":h.title},h.title&&l.a.createElement(o["AnchorLink"],{to:"#".concat(h.identifier)},h.title),h.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:h.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},_&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),g&&l.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),h.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:y,onClick:function(){return N()}}),h.iframe&&l.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return G(Math.random())}}),!(null===(d=h.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&l.a.createElement(o["Link"],{target:"_blank",to:b},l.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),l.a.createElement("span",null),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":j,onClick:function(){return S(V)}}),"tsx"===T&&J&&l.a.createElement(o["Link"],{target:"_blank",to:H},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),l.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(J?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return q(!J)}})),J&&l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!v&&l.a.createElement(r["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:C,onChange:Q},Object.keys(h.sources).map((function(e){return l.a.createElement(r["a"],{tab:"_"===e?"index.".concat(p(e,h.sources[e])):e,key:e})}))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(i["a"],{code:V,lang:T,showCopy:!1}))))};a["default"]=f},rP6J:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("dEAq"),c=t("Zxc8"),o=t("Rsk4"),i=l.a.memo(o["default"]["schema-schema"].component),m=l.a.memo(o["default"]["schema-basic"].component),d=l.a.memo(o["default"]["schema-remote"].component),s=l.a.memo(o["default"]["schema-attrs"].component),u=l.a.memo(o["default"]["schema-classname"].component);a["default"]=e=>(l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u6570\u636e\u9a71\u52a8"},l.a.createElement(r["AnchorLink"],{to:"#\u6570\u636e\u9a71\u52a8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6570\u636e\u9a71\u52a8"),l.a.createElement("p",null,l.a.createElement("code",null,"super-antd")," \u4f5c\u4e3a\u6570\u636e\u9a71\u52a8\u53cb\u597d\u3001\u4f4e\u4ee3\u7801\u53cb\u597d\u7684\u7ec4\u4ef6\u5e93\uff0c\u652f\u6301\u901a\u8fc7 ",l.a.createElement("code",null,"schema")," \u7684\u65b9\u5f0f\u53bb\u6e32\u67d3\u7ec4\u4ef6\u5185\u5bb9\u3002"),l.a.createElement("h2",{id:"\u4ecb\u7ecd"},l.a.createElement(r["AnchorLink"],{to:"#\u4ecb\u7ecd","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ecb\u7ecd"),l.a.createElement("h3",{id:"\u4ec0\u4e48\u662f-schema\uff1f"},l.a.createElement(r["AnchorLink"],{to:"#\u4ec0\u4e48\u662f-schema\uff1f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ec0\u4e48\u662f Schema\uff1f"),l.a.createElement("p",null,l.a.createElement("code",null,"Schema")," \u5bf9\u8c61\u5176\u5b9e\u5c31\u662f\u666e\u901a JS \u5bf9\u8c61\uff0c\u4f46\u662f\u6709\u4e00\u5b9a\u7684\u7ea6\u675f\uff0c\u5176\u548c\u5177\u4f53\u7684\u524d\u7aef\u6846\u67b6\u65e0\u5173\uff0c\u65e0\u8bba\u662f ",l.a.createElement("code",null,"React")," \u8fd8\u662f ",l.a.createElement("code",null,"Vue")," \u90fd\u662f\u53ef\u4ee5\u5b9e\u73b0\u7684\u3002"),l.a.createElement("h3",{id:"\u4ec0\u4e48\u662f\u6570\u636e\u9a71\u52a8\uff1f"},l.a.createElement(r["AnchorLink"],{to:"#\u4ec0\u4e48\u662f\u6570\u636e\u9a71\u52a8\uff1f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ec0\u4e48\u662f\u6570\u636e\u9a71\u52a8\uff1f"),l.a.createElement("p",null,"\u6240\u8c13\u6570\u636e\u9a71\u52a8\u5c31\u662f\u5c06 ",l.a.createElement("code",null,"Schema")," \u5bf9\u8c61\u8f6c\u4e3a ",l.a.createElement("code",null,"React")," \u7ec4\u4ef6\uff08\u5982\u679c\u662f Vue \u7684\u5b9e\u73b0\uff0c\u5c31\u8f6c\u4e3a Vue \u7ec4\u4ef6\uff09\u3002"),l.a.createElement("h3",{id:"\u4ec0\u4e48\u662f\u6570\u636e\u9a71\u52a8\u53cb\u597d\u3001\u4f4e\u4ee3\u7801\u53cb\u597d\uff1f"},l.a.createElement(r["AnchorLink"],{to:"#\u4ec0\u4e48\u662f\u6570\u636e\u9a71\u52a8\u53cb\u597d\u3001\u4f4e\u4ee3\u7801\u53cb\u597d\uff1f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ec0\u4e48\u662f\u6570\u636e\u9a71\u52a8\u53cb\u597d\u3001\u4f4e\u4ee3\u7801\u53cb\u597d\uff1f"),l.a.createElement("p",null,"\u6240\u8c13\u6570\u636e\u9a71\u52a8\u53cb\u597d\u6307\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6570\u636e\u901a\u4fe1\u5c5e\u6027\u5316\uff1a\u901a\u8fc7\u7ec4\u4ef6\u5c01\u88c5\uff0c\u4ee5\u5c5e\u6027\u7684\u65b9\u5f0f\u63a7\u5236\u7ec4\u4ef6\u95f4\u7684\u901a\u4fe1\uff0c\u800c\u4e0d\u662f\u4e00\u5806\u4ee3\u7801\u903b\u8f91"),l.a.createElement("li",null,"\u51cf\u5c11\u51fd\u6570\u7c7b\u578b\u5c5e\u6027\uff1a\u901a\u8fc7\u5c01\u88c5\u51cf\u5c11\u51fd\u6570\u7c7b\u578b\u7684\u5c5e\u6027\u503c\uff0c\u6bd5\u7adf\u5728\u914d\u7f6e\u754c\u9762\u4e0a\u5199\u51fd\u6570\u662f\u5f88\u7cdf\u7cd5\u7684\u4f53\u9a8c"),l.a.createElement("li",null,"\u884c\u4e3a\u5c5e\u6027\u5316\uff1a\u901a\u8fc7\u5c01\u88c5\u51cf\u5c11\u7ec4\u4ef6\u884c\u4e3a\u7684\u4ee3\u7801\u903b\u8f91\uff0c\u6bd4\u5982\u5237\u65b0\u9875\u9762\u3001\u8bf7\u6c42\u63a5\u53e3\u3001\u8df3\u8f6c\u7b49")),l.a.createElement("p",null,"\u56e0\u4e3a\u5728\u6570\u636e\u9a71\u52a8\u7684\u573a\u666f\u4e0b\uff0c\u901a\u5e38\u9700\u8981\u5c06\u8fd9\u4e9b\u6570\u636e\u5b58\u50a8\u5230\u6570\u636e\u5e93\uff0c\u800c\u51fd\u6570\u7c7b\u578b\u7684\u503c\u5e76\u4e0d\u5229\u4e8e\u5b58\u50a8\u548c\u5e94\u7528\uff0c\u800c\u4e14\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u662f\u901a\u8fc7\u754c\u9762\u914d\u7f6e\u5b9e\u73b0\u7ec4\u4ef6\u7684\u529f\u80fd\uff0c\u8fd9\u5c31\u8981\u6c42\u4e86\u5982\u679c\u60f3\u8981\u505a\u597d\uff0c\u505a\u7075\u6d3b\uff0c\u5c31\u9700\u8981\u5c3d\u53ef\u80fd\u5b9e\u73b0\u4e0a\u8ff0\u4e09\u8005\u3002"),l.a.createElement("p",null,"\u4f8b\u5982 ",l.a.createElement("code",null,"SuperForm")," \u7ec4\u4ef6\uff0c\u5728\u70b9\u51fb ",l.a.createElement("strong",null,"\u8bf7\u6c42\u6570\u636e")," \u6210\u529f\u540e\u9700\u8981\u8fdb\u884c ",l.a.createElement("strong",null,"\u8df3\u8f6c")," \u9875\u9762\u7684\u64cd\u4f5c\uff0c\u8fd9\u91cc\u7684 ",l.a.createElement("strong",null,"\u8bf7\u6c42\u6570\u636e")," \u548c ",l.a.createElement("strong",null,"\u8df3\u8f6c\u9875\u9762"),"\uff0c\u5728\u6211\u4eec\u4f7f\u7528\u5176\u4ed6\u7ec4\u4ef6\u5e93\u65f6\uff0c\u5c31\u9700\u8981\u4e66\u5199\u4e0d\u5c11\u4ee3\u7801\uff0c\u4f46\u662f\u5728 ",l.a.createElement("code",null,"SuperForm")," \u4e2d\u6211\u4eec\u4ec5\u9700\u8981\u6267\u884c ",l.a.createElement("code",null,"api")," \u5c5e\u6027\u548c ",l.a.createElement("code",null,"redirect")," \u5c5e\u6027\u5373\u53ef\uff1a")),l.a.createElement(c["default"],o["default"]["schema-schema"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u5982\u4f55\u5b9e\u73b0\uff1f"},l.a.createElement(r["AnchorLink"],{to:"#\u5982\u4f55\u5b9e\u73b0\uff1f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4f55\u5b9e\u73b0\uff1f"),l.a.createElement("p",null,l.a.createElement("code",null,"super-antd")," \u7684\u5b9e\u73b0\u6570\u636e\u9a71\u52a8\u7684\u80fd\u529b\uff0c\u5176\u5b9e\u5c31\u662f ",l.a.createElement(r["Link"],{to:"https://dream2023.gitee.io/react-schema-render"},"react-schema-render")," \u57fa\u7840\u4e0a\u6269\u5c55\u4e86 ",l.a.createElement(r["AnchorLink"],{to:"#%E6%94%AF%E6%8C%81%E9%BB%98%E8%AE%A4%E5%B1%9E%E6%80%A7"},"\u9ed8\u8ba4\u503c\u63d2\u4ef6"),"\u3001",l.a.createElement(r["AnchorLink"],{to:"#%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93%E5%86%85%E5%AE%B9"},"\u8fdc\u7a0b\u52a0\u8f7d"),"\u548c ",l.a.createElement(r["AnchorLink"],{to:"#classname"},"className \u589e\u5f3a")," \u7684\u80fd\u529b\uff0c\u540c\u65f6\u56e0\u4e3a ",l.a.createElement("code",null,"super-antd")," \u662f\u4e00\u4e2a\u6570\u636e\u9a71\u52a8\u53cb\u597d\u7684 UI \u5e93\uff0c\u6240\u4ee5\u4e24\u8005\u53ef\u4ee5\u5b9e\u73b0\u5b8c\u7f8e\u7684\u878d\u5408\u3002"),l.a.createElement("h3",{id:"react-schema-render-\u4ecb\u7ecd"},l.a.createElement(r["AnchorLink"],{to:"#react-schema-render-\u4ecb\u7ecd","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"react-schema-render \u4ecb\u7ecd"),l.a.createElement("p",null,l.a.createElement("code",null,"react-schema-render")," \u662f\u4e00\u4e2a\u901a\u7528\u578b schema \u8f6c React \u7684\u5de5\u5177\u7ec4\u4ef6\uff0c\u5176\u9075\u5b88 ",l.a.createElement(r["Link"],{to:"https://dream2023.gitee.io/react-schema-render/standard"},"Schema To React \u89c4\u8303"),"\u3002"),l.a.createElement("p",null,"\u5b83\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4f53\u79ef\u5c0f\uff1a\u4ec5 3kb\uff1b"),l.a.createElement("li",null,"\u529f\u80fd\u5f3a\uff1a\u652f\u6301",l.a.createElement(r["Link"],{to:"https://dream2023.gitee.io/react-schema-render/usage"},"\u6570\u7ec4\u89e3\u6790\u3001\u6df1\u5ea6\u5d4c\u5957\u3001\u6df7\u5408\u6e32\u67d3"),"\u7b49\uff1b"),l.a.createElement("li",null,"\u6269\u5c55\u6027\u9ad8\uff1a\u652f\u6301\u81ea\u5b9a\u4e49",l.a.createElement(r["Link"],{to:"https://dream2023.gitee.io/react-schema-render/parser"},"\u89e3\u6790\u5668"),"\u3001",l.a.createElement(r["Link"],{to:"https://dream2023.gitee.io/react-schema-render/decorator"},"\u88c5\u9970\u5668"),"\uff1b"),l.a.createElement("li",null,"\u4fb5\u5165\u6027\u4f4e\uff1a\u65e0\u9700\u5bf9\u5df2\u6709\u7ec4\u4ef6\u505a\u4efb\u4f55\u66f4\u6539\u5373\u53ef\u63a5\u5165\uff1b"),l.a.createElement("li",null,"\u7a33\u5b9a\u6027\u9ad8\uff1a\u6d4b\u8bd5\u8986\u76d6\u7387 100%\u3002")),l.a.createElement("p",null,"\u66f4\u591a\u4ecb\u7ecd\u53ef\u4ee5\u67e5\u770b\u5176 ",l.a.createElement(r["Link"],{to:"https://dream2023.gitee.io/react-schema-render/"},"\u5b98\u65b9\u6587\u6863")," \u548c ",l.a.createElement(r["Link"],{to:"https://dream2023.gitee.io/react-schema-render/standard"},"Schema To React \u89c4\u8303"),"\u3002"),l.a.createElement("h2",{id:"\u5982\u4f55\u4f7f\u7528\u7684\uff1f"},l.a.createElement(r["AnchorLink"],{to:"#\u5982\u4f55\u4f7f\u7528\u7684\uff1f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4f55\u4f7f\u7528\u7684\uff1f"),l.a.createElement("h3",{id:"\u57fa\u672c\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528")),l.a.createElement(c["default"],o["default"]["schema-basic"].previewerProps,l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u52a8\u6001\u6e32\u67d3\u5185\u5bb9"},l.a.createElement(r["AnchorLink"],{to:"#\u52a8\u6001\u6e32\u67d3\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u6001\u6e32\u67d3\u5185\u5bb9"),l.a.createElement("p",null,l.a.createElement("code",null,"SuperRender")," \u76f8\u5bf9\u4e8e ",l.a.createElement("code",null,"react-schema-render")," \u589e\u52a0\u4e86\u652f\u6301\u901a\u8fc7\u63a5\u53e3\u52a0\u8f7d ",l.a.createElement("code",null,"schema \u5bf9\u8c61"),"\uff0c\u7136\u540e\u518d\u6e32\u67d3\u6210\u7ec4\u4ef6\uff0c\u4f8b\u5982\u8fdc\u7a0b\u52a0\u8f7d ",l.a.createElement(r["Link"],{to:"https://www.fastmock.site/mock/3bff4788a9dad8a803681a2bca5f9cae/api/form"},"form \u8868\u5355"))),l.a.createElement(c["default"],o["default"]["schema-remote"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null,"\u6700\u540e\u9700\u8981\u8bf4\u660e\u7684\u662f ",l.a.createElement("code",null,"schemaApi")," \u548c ",l.a.createElement("code",null,"children")," \u5c5e\u6027\u4e0d\u80fd\u591f\u5e76\u5b58\uff0c\u5982\u679c\u5e76\u5b58\uff0c",l.a.createElement("code",null,"schemaApi")," \u4f1a ",l.a.createElement("strong",null,"\u8986\u76d6")," ",l.a.createElement("code",null,"children")," \u5c5e\u6027\u3002"),l.a.createElement("h3",{id:"\u652f\u6301\u9ed8\u8ba4\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u652f\u6301\u9ed8\u8ba4\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u652f\u6301\u9ed8\u8ba4\u5c5e\u6027"),l.a.createElement("p",null,"\u5bf9\u4e8e\u67d0\u4e9b\u7ec4\u4ef6\uff0c\u4f8b\u5982 ",l.a.createElement("code",null,"Upload")," \u7ec4\u4ef6\uff0c\u5176\u4e0a\u4f20\u5730\u5740\uff0c\u4e5f\u5c31\u662f ",l.a.createElement("code",null,"action")," \u5c5e\u6027\u5728\u4e00\u4e2a\u516c\u53f8\u4e00\u822c\u662f\u7edf\u4e00\u7684\uff0c\u6211\u4eec\u6ca1\u5fc5\u8981\u91cd\u590d\u8bbe\u7f6e\u76f8\u540c\u53c2\u6570\uff0c\u6240\u4ee5\u624d\u8bde\u751f\u4e86\u6b64\u529f\u80fd\u3002"),l.a.createElement("p",null,"\u4e3a\u4e86\u66f4\u76f4\u89c2\u7684\u6f14\u793a\uff0c\u6211\u4eec\u4ee5 ",l.a.createElement("code",null,"SuperNumber")," \u7ec4\u4ef6\u4e3a\u4f8b\uff0c\u5168\u5c40\u8bbe\u7f6e\u5176\u6700\u5c0f\u503c\u4e3a ",l.a.createElement("code",null,"0"),"\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a")),l.a.createElement(c["default"],o["default"]["schema-attrs"].previewerProps,l.a.createElement(s,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"classname"},l.a.createElement(r["AnchorLink"],{to:"#classname","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"className"),l.a.createElement("p",null,"react \u4e2d className \u4ec5\u652f\u6301\u5b57\u7b26\u4e32\uff0c\u4f46\u662f\u5728 ",l.a.createElement("code",null,"SuperRender")," \u4e2d\uff0c\u901a\u8fc7\u81ea\u5b9a\u4e49\u89e3\u6790\u5668\u548c ",l.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/classnames"},"classnames")," \u5e93\uff0c\u8ba9\u5176\u80fd\u4e66\u5199\u5bf9\u8c61\u6216\u8005\u6570\u7ec4\u3002")),l.a.createElement(c["default"],o["default"]["schema-classname"].previewerProps,l.a.createElement(u,null)))))}}]);