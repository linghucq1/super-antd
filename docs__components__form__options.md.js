(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"+pnj":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("dEAq"),o={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,a=e.export,c=Object(r["useApiData"])(t),i=Object(n["useContext"])(r["context"]),u=i.locale,d=/^zh|cn$/i.test(u)?o["zh-CN"]:o["en-US"];return l.a.createElement(l.a.Fragment,null,c&&l.a.createElement("table",{style:{marginTop:24}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,d.name),l.a.createElement("th",null,d.description),l.a.createElement("th",null,d.type),l.a.createElement("th",null,d.default))),l.a.createElement("tbody",null,c[a].map((function(e){return l.a.createElement("tr",{key:e.identifier},l.a.createElement("td",null,e.identifier),l.a.createElement("td",null,e.description||"--"),l.a.createElement("td",null,l.a.createElement("code",null,e.type)),l.a.createElement("td",null,l.a.createElement("code",null,e.default||e.required&&d.required||"--")))})))))}},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},JDdx:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),o=a("+pnj"),c=a("Zxc8"),i=a("Rsk4"),u=l.a.memo(i["default"]["options-obj_arr"].component),d=l.a.memo(i["default"]["options-common_arr"].component),m=l.a.memo(i["default"]["options-api"].component),s=l.a.memo(i["default"]["options-optionsprop"].component),p=l.a.memo(i["default"]["options-linkage"].component),E=l.a.memo(i["default"]["options-clear_value"].component);t["default"]=e=>(l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"options-\u9009\u9879\u5217\u8868"},l.a.createElement(r["AnchorLink"],{to:"#options-\u9009\u9879\u5217\u8868","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Options \u9009\u9879\u5217\u8868"),l.a.createElement("p",null,"\u56e0\u4e3a ",l.a.createElement("code",null,"SuperSelect"),"\u3001",l.a.createElement("code",null,"SuperCheckbox")," \u548c ",l.a.createElement("code",null,"SuperRadio")," \u7b49\u90fd\u6709 ",l.a.createElement("code",null,"options")," \u9009\u9879\uff0c\u6240\u4ee5\u8fd9\u91cc\u5355\u72ec\u62bd\u79bb\u51fa\u6765\u8bb2\u89e3\u3002"),l.a.createElement("h2",{id:"options-\u53c2\u6570\u7c7b\u578b"},l.a.createElement(r["AnchorLink"],{to:"#options-\u53c2\u6570\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Options \u53c2\u6570\u7c7b\u578b"),l.a.createElement("h3",{id:"\u5bf9\u8c61\u6570\u7ec4"},l.a.createElement(r["AnchorLink"],{to:"#\u5bf9\u8c61\u6570\u7ec4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5bf9\u8c61\u6570\u7ec4"),l.a.createElement("p",null,"options \u652f\u6301\u666e\u901a\u7684 ",l.a.createElement("code",null,"{","label: string, value: any","}")," \u7684\u6570\u7ec4\u3002")),l.a.createElement(c["default"],i["default"]["options-obj_arr"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u666e\u901a\u6570\u7ec4"},l.a.createElement(r["AnchorLink"],{to:"#\u666e\u901a\u6570\u7ec4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u666e\u901a\u6570\u7ec4"),l.a.createElement("p",null,"options \u652f\u6301\u7c7b\u4f3c ",l.a.createElement("code",null,"['Go', 'Javascript', ","{"," label: 'Python', value: 'Python' ","}","]")," \u8fd9\u6837\u7684\u6570\u7ec4\uff0c\u5176\u4e2d ",l.a.createElement("code",null,"string")," \u548c ",l.a.createElement("code",null,"number")," \u7c7b\u578b\u7684\u503c\u4f1a\u88ab\u8f6c\u6362 ",l.a.createElement("code",null,"label")," \u548c ",l.a.createElement("code",null,"value")," \u76f8\u540c\u7684\u503c\u7684\u5bf9\u8c61\uff0c\u4f8b\u5982 ",l.a.createElement("code",null,"Go")," \u4f1a\u88ab\u8f6c\u4e3a ",l.a.createElement("code",null,"{",' label: "Go", value: "Go" ',"}"),"\u3002")),l.a.createElement(c["default"],i["default"]["options-common_arr"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"api-\u7c7b\u578b"},l.a.createElement(r["AnchorLink"],{to:"#api-\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API \u7c7b\u578b"),l.a.createElement("p",null,"options \u6700\u5927\u7684\u7279\u70b9\u662f\u652f\u6301 API \u7c7b\u578b\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u76f4\u63a5\u8bf7\u6c42\u670d\u52a1\u7aef\u6570\u636e\uff0c\u800c API \u7c7b\u578b\u53c8\u5206\u4e3a API ",l.a.createElement("strong",null,"\u5b57\u7b26\u4e32"),"\u3001",l.a.createElement("strong",null,"\u5bf9\u8c61"),"\u548c",l.a.createElement("strong",null,"\u51fd\u6570"),"\uff0c\u5177\u4f53\u53ef\u4ee5\u770b ",l.a.createElement(r["Link"],{to:"/guide/concept/api"},"API \u8bf7\u6c42")," \u7ae0\u8282\u3002")),l.a.createElement(c["default"],i["default"]["options-api"].previewerProps,l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"optionsprop-key-\u6620\u5c04"},l.a.createElement(r["AnchorLink"],{to:"#optionsprop-key-\u6620\u5c04","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"optionsProp Key \u6620\u5c04"),l.a.createElement("p",null,"\u6211\u4eec\u4ece\u670d\u52a1\u7aef\u83b7\u53d6\u5230\u7684\u6570\u636e\u901a\u5e38\u662f\u9700\u8981\u505a\u4e00\u6b21 ",l.a.createElement("code",null,"map")," \u8f6c\u6362\u7684\uff0c\u4f8b\u5982\u4ece\u8fdc\u7a0b\u83b7\u53d6\u5230\u7684\u6570\u636e\u4e3a ",l.a.createElement("code",null,"[","{"," id: 1, name: '\u9a6c\u514b' ","}",", ","{"," id: 2, name: '\u5189\u51b0' ","}","]")," \u6211\u4eec\u9700\u8981\u8f6c\u4e3a ",l.a.createElement("code",null,"[","{","value: 1, label: '\u9a6c\u514b'","}",", ","{","value: 2, label: '\u5189\u51b0'","}","]"),"\uff0c\u5e78\u8fd0\u7684\u662f\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u66f4\u52a0\u7b80\u5355\u7684\u5904\u7406\u65b9\u5f0f\uff0c\u53ea\u9700\u8981\u6307\u5b9a ",l.a.createElement("code",null,"optionsProp")," \u4e3a ",l.a.createElement("code",null,"{"," labelKey: 'name', valueKey: 'id' ","}")," \u5373\u53ef\u3002")),l.a.createElement(c["default"],i["default"]["options-optionsprop"].previewerProps,l.a.createElement(s,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u8054\u52a8"},l.a.createElement(r["AnchorLink"],{to:"#\u8054\u52a8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8054\u52a8"),l.a.createElement("p",null,"options \u540c\u6837\u652f\u6301\u8868\u5355\u4e4b\u95f4\u7684\u8054\u52a8\uff0c\u4f8b\u5982\uff0c\u7701\u4efd\u5217\u8868\u4f1a\u5bfc\u81f4\u57ce\u5e02\u5217\u8868\u7684\u91cd\u65b0\u83b7\u53d6\u3002"),l.a.createElement("h3",{id:"\u57fa\u7840\u8054\u52a8"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u8054\u52a8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u8054\u52a8")),l.a.createElement(c["default"],i["default"]["options-linkage"].previewerProps,l.a.createElement(p,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u8054\u52a8\u9690\u85cf\u540e\u6e05\u9664\u503c"},l.a.createElement(r["AnchorLink"],{to:"#\u8054\u52a8\u9690\u85cf\u540e\u6e05\u9664\u503c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8054\u52a8\u9690\u85cf\u540e\u6e05\u9664\u503c"),l.a.createElement("p",null,"\u5f53\u9009\u9879\u91cd\u65b0\u83b7\u53d6\u540e\uff0c\u6211\u4eec\u53d1\u73b0\u4ee5\u9009\u62e9\u7684\u503c\u5e76\u975e\u53d1\u751f\u53d8\u5316\uff0c\u8fd9\u901a\u5e38\u662f\u4e0d\u7b26\u5408\u5b9e\u9645\u9700\u6c42\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",l.a.createElement("code",null,"clearValueAfterOptionsChange")," \u5728 options \u6539\u53d8\u540e\u6e05\u7a7a\u5f53\u524d\u8868\u5355\u9879\u7684\u503c\u3002")),l.a.createElement(c["default"],i["default"]["options-clear_value"].previewerProps,l.a.createElement(E,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],{src:"./__demos__/options/types.tsx",identifier:"types",export:"default"})))))},RZMt:function(e,t,a){},Zxc8:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("k3GJ"),o=a("9kvl"),c=a("dEAq"),i=a("H1Ra");a("RZMt");function u(e,t){return E(e)||p(e,t)||m(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function p(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],o=!0,c=!1;try{for(a=a.call(e);!(o=(n=a.next()).done);o=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){c=!0,l=i}finally{try{o||null==a["return"]||a["return"]()}finally{if(c)throw l}}return r}}function E(e){if(Array.isArray(e))return e}function f(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var b=function(e){var t,a,d,m=Object(n["useRef"])(),s=Object(n["useContext"])(c["context"]),p=s.locale,E=Object(c["useLocaleProps"])(p,e),b=Object(c["useDemoUrl"])(E.identifier),v=E.demoUrl||b,h=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(E.identifier),k=1===Object.keys(E.sources).length,y=Object(c["useCodeSandbox"])((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),_=Object(c["useRiddle"])((null===(a=E.hideActions)||void 0===a?void 0:a.includes("RIDDLE"))?null:E),g=Object(c["useMotions"])(E.motions||[],m.current),w=u(g,2),N=w[0],x=w[1],A=Object(c["useCopy"])(),j=u(A,2),O=j[0],I=j[1],C=Object(n["useState"])("_"),S=u(C,2),P=S[0],L=S[1],R=Object(n["useState"])(f(P,E.sources[P])),q=u(R,2),T=q[0],M=q[1],D=Object(n["useState"])(Boolean(E.defaultShowCode)),G=u(D,2),U=G[0],J=G[1],$=Object(n["useState"])(Math.random()),F=u($,2),K=F[0],Z=F[1],z=E.sources[P][T]||E.sources[P].content,B=Object(c["useTSPlaygroundUrl"])(p,z),H=Object(n["useRef"])(),X=Object(c["usePrefersColor"])(),V=u(X,1),Y=V[0];function Q(e){L(e),M(f(e,E.sources[e]))}return Object(n["useEffect"])((function(){Z(Math.random())}),[Y]),l.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&l.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),l.a.createElement("div",{ref:m,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?l.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:K,src:v,ref:H}):E.children),l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&l.a.createElement(c["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},y&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),_&&l.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:_}),E.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:x,onClick:function(){return N()}}),E.iframe&&l.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return Z(Math.random())}}),!(null===(d=E.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&l.a.createElement(c["Link"],{target:"_blank",to:v},l.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),l.a.createElement("span",null),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":I,onClick:function(){return O(z)}}),"tsx"===T&&U&&l.a.createElement(c["Link"],{target:"_blank",to:B},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),l.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(U?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return J(!U)}})),U&&l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!k&&l.a.createElement(r["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:P,onChange:Q},Object.keys(E.sources).map((function(e){return l.a.createElement(r["a"],{tab:"_"===e?"index.".concat(f(e,E.sources[e])):e,key:e})}))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(i["a"],{code:z,lang:T,showCopy:!1}))))};t["default"]=b}}]);