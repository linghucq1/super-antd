(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"+NKi":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),i=n("+pnj");n("Rsk4");t["default"]=e=>(r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"superprovider-\u5168\u5c40\u914d\u7f6e"},r.a.createElement(l["AnchorLink"],{to:"#superprovider-\u5168\u5c40\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"SuperProvider \u5168\u5c40\u914d\u7f6e"),r.a.createElement("p",null,"SuperProvider \u7528\u6cd5\u5728\u6307\u5357 ",r.a.createElement(l["Link"],{to:"/guide/concept/config"},"\u5168\u5c40\u914d\u7f6e")," \u7ae0\u8282\u5df2\u6709\u8be6\u7ec6\u63cf\u8ff0\u3002"),r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(i["a"],{src:"./__demos__/provider.tsx",identifier:"provider",export:"default"}))))},"+pnj":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("dEAq"),i={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,n=e.export,c=Object(l["useApiData"])(t),o=Object(a["useContext"])(l["context"]),d=o.locale,u=/^zh|cn$/i.test(d)?i["zh-CN"]:i["en-US"];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("table",{style:{marginTop:24}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,u.name),r.a.createElement("th",null,u.description),r.a.createElement("th",null,u.type),r.a.createElement("th",null,u.default))),r.a.createElement("tbody",null,c[n].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e.default||e.required&&u.required||"--")))})))))}},"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n}}]);