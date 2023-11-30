/**
 * TinyMCE version 6.8.1 (2023-11-29)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");let t=0;const o=e=>t=>typeof t===e,n=e=>"string"===(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(o=n=e,(r=String).prototype.isPrototypeOf(o)||(null===(s=n.constructor)||void 0===s?void 0:s.name)===r.name)?"string":t;var o,n,r,s})(e),r=o("boolean"),s=e=>null==e,a=e=>!s(e),i=o("function"),d=o("number"),l=e=>()=>e,c=(e,t)=>e===t,m=l(!1);class u{constructor(e,t){this.tag=e,this.value=t}static some(e){return new u(!0,e)}static none(){return u.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?u.some(e(this.value)):u.none()}bind(e){return this.tag?e(this.value):u.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:u.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return a(e)?u.some(e):u.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}u.singletonNone=new u(!1);const g=Array.prototype.indexOf,p=(e,t)=>{return o=e,n=t,g.call(o,n)>-1;var o,n},h=(e,t)=>{const o=e.length,n=new Array(o);for(let r=0;r<o;r++){const o=e[r];n[r]=t(o,r)}return n},f=(e,t)=>{for(let o=0,n=e.length;o<n;o++)t(e[o],o)},y=Object.keys;"undefined"!=typeof window?window:Function("return this;")();const v=e=>e.dom.nodeName.toLowerCase(),w=e=>e.dom.nodeType,b=e=>t=>w(t)===e,N=b(1),T=b(3),A=b(9),C=b(11),S=(e,t,o)=>{if(!(n(o)||r(o)||d(o)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",o,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,o+"")},x=(e,t)=>{const o=e.dom.getAttribute(t);return null===o?void 0:o},E=(e,t)=>u.from(x(e,t)),D=(e,t)=>{e.dom.removeAttribute(t)},M=e=>{if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},P={fromHtml:(e,t)=>{const o=(t||document).createElement("div");if(o.innerHTML=e,!o.hasChildNodes()||o.childNodes.length>1){const t="HTML does not have a single root node";throw console.error(t,e),new Error(t)}return M(o.childNodes[0])},fromTag:(e,t)=>{const o=(t||document).createElement(e);return M(o)},fromText:(e,t)=>{const o=(t||document).createTextNode(e);return M(o)},fromDom:M,fromPoint:(e,t,o)=>u.from(e.dom.elementFromPoint(t,o)).map(M)},O=(e,t)=>{const o=e.dom;if(1!==o.nodeType)return!1;{const e=o;if(void 0!==e.matches)return e.matches(t);if(void 0!==e.msMatchesSelector)return e.msMatchesSelector(t);if(void 0!==e.webkitMatchesSelector)return e.webkitMatchesSelector(t);if(void 0!==e.mozMatchesSelector)return e.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")}},k=e=>1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType||0===e.childElementCount,B=O,R=(L=/^\s+|\s+$/g,e=>e.replace(L,""));var L;const $=e=>void 0!==e.style&&i(e.style.getPropertyValue),I=e=>A(e)?e:P.fromDom(e.dom.ownerDocument),V=e=>u.from(e.dom.parentNode).map(P.fromDom),j=e=>u.from(e.dom.nextSibling).map(P.fromDom),q=e=>h(e.dom.childNodes,P.fromDom),F=i(Element.prototype.attachShadow)&&i(Node.prototype.getRootNode)?e=>P.fromDom(e.dom.getRootNode()):I,H=e=>P.fromDom(e.dom.host),z=e=>{const t=T(e)?e.dom.parentNode:e.dom;if(null==t||null===t.ownerDocument)return!1;const o=t.ownerDocument;return(e=>{const t=F(e);return C(o=t)&&a(o.dom.host)?u.some(t):u.none();var o})(P.fromDom(t)).fold((()=>o.body.contains(t)),(n=z,r=H,e=>n(r(e))));var n,r},K=(e,t)=>$(e)?e.style.getPropertyValue(t):"",U=(e,t)=>{V(e).each((o=>{o.dom.insertBefore(t.dom,e.dom)}))},Y=(e,t)=>{j(e).fold((()=>{V(e).each((e=>{_(e,t)}))}),(e=>{U(e,t)}))},_=(e,t)=>{e.dom.appendChild(t.dom)},G=(e,t)=>{f(t,((o,n)=>{const r=0===n?e:t[n-1];Y(r,o)}))},J=(e,t)=>{let o=[];return f(q(e),(e=>{t(e)&&(o=o.concat([e])),o=o.concat(J(e,t))})),o},Q=(e,t,o)=>{let n=e.dom;const r=i(o)?o:m;for(;n.parentNode;){n=n.parentNode;const e=P.fromDom(n);if(t(e))return u.some(e);if(r(e))break}return u.none()},W=e=>{const t=e.dom;null!==t.parentNode&&t.parentNode.removeChild(t)},X=(e,t,o)=>Q(e,(e=>O(e,t)),o),Z=(e,t)=>((e,t)=>{const o=void 0===t?document:t.dom;return k(o)?u.none():u.from(o.querySelector(e)).map(P.fromDom)})(t,e),ee=((e,t)=>{const o=t=>e(t)?u.from(t.dom.nodeValue):u.none();return{get:t=>{if(!e(t))throw new Error("Can only get text value of a text node");return o(t).getOr("")},getOption:o,set:(t,o)=>{if(!e(t))throw new Error("Can only set raw text value of a text node");t.dom.nodeValue=o}}})(T);var te=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"];const oe=(e,t)=>({element:e,offset:t}),ne=(e,t,o)=>e.property().isText(t)&&0===e.property().getText(t).trim().length||e.property().isComment(t)?o(t).bind((t=>ne(e,t,o).orThunk((()=>u.some(t))))):u.none(),re=(e,t)=>e.property().isText(t)?e.property().getText(t).length:e.property().children(t).length,se=(e,t)=>{const o=ne(e,t,e.query().prevSibling).getOr(t);if(e.property().isText(o))return oe(o,re(e,o));const n=e.property().children(o);return n.length>0?se(e,n[n.length-1]):oe(o,re(e,o))},ae=se,ie={up:l({selector:X,closest:(e,t,o)=>((e,t,o,n,r)=>((e,t)=>O(e,t))(o,n)?u.some(o):i(r)&&r(o)?u.none():t(o,n,r))(0,X,e,t,o),predicate:Q,all:(e,t)=>{const o=i(t)?t:m;let n=e.dom;const r=[];for(;null!==n.parentNode&&void 0!==n.parentNode;){const e=n.parentNode,t=P.fromDom(e);if(r.push(t),!0===o(t))break;n=e}return r}}),down:l({selector:(e,t)=>((e,t)=>{const o=void 0===t?document:t.dom;return k(o)?[]:h(o.querySelectorAll(e),P.fromDom)})(t,e),predicate:J}),styles:l({get:(e,t)=>{const o=e.dom,n=window.getComputedStyle(o).getPropertyValue(t);return""!==n||z(e)?n:K(o,t)},getRaw:(e,t)=>{const o=e.dom,n=K(o,t);return u.from(n).filter((e=>e.length>0))},set:(e,t,o)=>{((e,t,o)=>{if(!n(o))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",o,":: Element ",e),new Error("CSS value must be a string: "+o);$(e)&&e.style.setProperty(t,o)})(e.dom,t,o)},remove:(e,t)=>{((e,t)=>{$(e)&&e.style.removeProperty(t)})(e.dom,t),((e,t,o=c)=>e.exists((e=>o(e,t))))(E(e,"style").map(R),"")&&D(e,"style")}}),attrs:l({get:x,set:(e,t,o)=>{S(e.dom,t,o)},remove:D,copyTo:(e,t)=>{const o=(n=e.dom.attributes,r=(e,t)=>(e[t.name]=t.value,e),s={},f(n,((e,t)=>{s=r(s,e)})),s);var n,r,s;((e,t)=>{const o=e.dom;((e,t)=>{const o=y(e);for(let n=0,r=o.length;n<r;n++){const r=o[n];t(e[r],r)}})(t,((e,t)=>{S(o,t,e)}))})(t,o)}}),insert:l({before:U,after:Y,afterAll:G,append:_,appendAll:(e,t)=>{f(t,(t=>{_(e,t)}))},prepend:(e,t)=>{(e=>((e,t)=>{const o=e.dom.childNodes;return u.from(o[0]).map(P.fromDom)})(e))(e).fold((()=>{_(e,t)}),(o=>{e.dom.insertBefore(t.dom,o.dom)}))},wrap:(e,t)=>{U(e,t),_(t,e)}}),remove:l({unwrap:e=>{const t=q(e);t.length>0&&G(e,t),W(e)},remove:W}),create:l({nu:P.fromTag,clone:e=>P.fromDom(e.dom.cloneNode(!1)),text:P.fromText}),query:l({comparePosition:(e,t)=>e.dom.compareDocumentPosition(t.dom),prevSibling:e=>u.from(e.dom.previousSibling).map(P.fromDom),nextSibling:j}),property:l({children:q,name:v,parent:V,document:e=>I(e).dom,isText:T,isComment:e=>8===w(e)||"#comment"===v(e),isElement:N,isSpecial:e=>{const t=v(e);return p(["script","noscript","iframe","noframes","noembed","title","style","textarea","xmp"],t)},getLanguage:e=>N(e)?E(e,"lang"):u.none(),getText:e=>ee.get(e),setText:(e,t)=>ee.set(e,t),isBoundary:e=>!!N(e)&&("body"===v(e)||p(te,v(e))),isEmptyTag:e=>!!N(e)&&p(["br","img","hr","input"],v(e)),isNonEditable:e=>N(e)&&"false"===x(e,"contenteditable")}),eq:(e,t)=>e.dom===t.dom,is:B},de="details",le="mce-accordion",ce="mce-accordion-summary",me="mce-accordion-body",ue="div";var ge=tinymce.util.Tools.resolve("tinymce.util.Tools");const pe=e=>"SUMMARY"===(null==e?void 0:e.nodeName),he=e=>"DETAILS"===(null==e?void 0:e.nodeName),fe=e=>e.hasAttribute("open"),ye=e=>{const t=e.selection.getNode();return pe(t)||Boolean(e.dom.getParent(t,pe))},ve=e=>!ye(e)&&e.dom.isEditable(e.selection.getNode()),we=e=>u.from(e.dom.getParent(e.selection.getNode(),he)),be=e=>(e.innerHTML='<br data-mce-bogus="1" />',e),Ne=e=>be(e.dom.create("p")),Te=e=>t=>{((e,t)=>{if(pe(null==t?void 0:t.lastChild)){const o=Ne(e);t.appendChild(o),e.selection.setCursorLocation(o,0)}})(e,t),((e,t)=>{if(!pe(null==t?void 0:t.firstChild)){const o=(e=>be(e.dom.create("summary")))(e);t.prepend(o),e.selection.setCursorLocation(o,0)}})(e,t)},Ae=(e,t)=>{const o=null!=t?t:!fe(e);return o?e.setAttribute("open","open"):e.removeAttribute("open"),o},Ce=e=>{e.addCommand("InsertAccordion",(()=>(e=>{if(!ve(e))return;const o=P.fromDom(e.getBody()),n=(e=>{const o=(new Date).getTime(),n=Math.floor(1e9*Math.random());return t++,"acc_"+n+t+String(o)})(),r=e.dom.encode(e.selection.getRng().toString()||e.translate("Accordion summary...")),s=e.dom.encode(e.translate("Accordion body...")),a=`<summary class="${ce}">${r}</summary>`,i=`<${ue} class="${me}"><p>${s}</p></${ue}>`;e.undoManager.transact((()=>{e.insertContent([`<details data-mce-id="${n}" class="${le}" open="open">`,a,i,"</details>"].join("")),Z(o,`[data-mce-id="${n}"]`).each((t=>{D(t,"data-mce-id"),Z(t,"summary").each((t=>{const o=e.dom.createRng(),n=ae(ie,t);o.setStart(n.element.dom,n.offset),o.setEnd(n.element.dom,n.offset),e.selection.setRng(o)}))}))}))})(e))),e.addCommand("ToggleAccordion",((t,o)=>((e,t)=>{we(e).each((o=>{((e,t,o)=>{e.dispatch("ToggledAccordion",{element:t,state:o})})(e,o,Ae(o,t))}))})(e,o))),e.addCommand("ToggleAllAccordions",((t,o)=>((e,t)=>{const o=Array.from(e.getBody().querySelectorAll("details"));0!==o.length&&(f(o,(e=>Ae(e,null!=t?t:!fe(e)))),((e,t,o)=>{e.dispatch("ToggledAllAccordions",{elements:t,state:o})})(e,o,t))})(e,o))),e.addCommand("RemoveAccordion",(()=>(e=>{we(e).each((t=>{const{nextSibling:o}=t;o?(e.selection.select(o,!0),e.selection.collapse(!0)):((e,t)=>{const o=Ne(e);t.insertAdjacentElement("afterend",o),e.selection.setCursorLocation(o,0)})(e,t),t.remove()}))})(e)))};var Se=tinymce.util.Tools.resolve("tinymce.html.Node");const xe=e=>{var t,o;return null!==(o=null===(t=e.attr("class"))||void 0===t?void 0:t.split(" "))&&void 0!==o?o:[]},Ee=(e,t)=>{const o=new Set([...xe(e),...t]),n=Array.from(o);n.length>0&&e.attr("class",n.join(" "))},De=(e,t)=>{const o=((e,o)=>{const n=[];for(let o=0,s=e.length;o<s;o++){const s=e[o];r=s,!t.has(r)&&n.push(s)}var r;return n})(xe(e));e.attr("class",o.length>0?o.join(" "):null)},Me=e=>e.name===de&&p(xe(e),le),Pe=e=>{const t=e.children();let o,n;const r=[];for(let e=0;e<t.length;e++){const i=t[e];"summary"===i.name&&s(o)?o=i:(a=i).name===ue&&p(xe(a),me)&&s(n)?n=i:r.push(i)}var a;return{summaryNode:o,wrapperNode:n,otherNodes:r}},Oe=e=>{const t=new Se("br",1);t.attr("data-mce-bogus","1"),e.empty(),e.append(t)};var ke=tinymce.util.Tools.resolve("tinymce.util.VK");const Be=e=>{(e=>{e.on("keydown",(t=>{(!t.shiftKey&&t.keyCode===ke.ENTER&&ye(e)||(e=>{const t=e.selection.getRng();return he(t.startContainer)&&t.collapsed&&0===t.startOffset})(e))&&(t.preventDefault(),e.execCommand("ToggleAccordion"))}))})(e),e.on("ExecCommand",(t=>{const o=t.command.toLowerCase();"delete"!==o&&"forwarddelete"!==o||!(e=>we(e).isSome())(e)||(e=>{ge.each(ge.grep(e.dom.select("details",e.getBody())),Te(e))})(e)}))};var Re=tinymce.util.Tools.resolve("tinymce.Env");const Le=e=>t=>{const o=()=>t.setEnabled(ve(e));return e.on("NodeChange",o),()=>e.off("NodeChange",o)};e.add("accordion",(e=>{(e=>{const t=()=>e.execCommand("InsertAccordion");e.ui.registry.addButton("accordion",{icon:"accordion",tooltip:"Insert accordion",onSetup:Le(e),onAction:t}),e.ui.registry.addMenuItem("accordion",{icon:"accordion",text:"Accordion",onSetup:Le(e),onAction:t}),e.ui.registry.addToggleButton("accordiontoggle",{icon:"accordion-toggle",tooltip:"Toggle accordion",onAction:()=>e.execCommand("ToggleAccordion")}),e.ui.registry.addToggleButton("accordionremove",{icon:"remove",tooltip:"Delete accordion",onAction:()=>e.execCommand("RemoveAccordion")}),e.ui.registry.addContextToolbar("accordion",{predicate:t=>e.dom.is(t,"details")&&e.getBody().contains(t)&&e.dom.isEditable(t.parentNode),items:"accordiontoggle accordionremove",scope:"node",position:"node"})})(e),Ce(e),Be(e),(e=>{e.on("PreInit",(()=>{const{serializer:t,parser:o}=e;o.addNodeFilter(de,(e=>{for(let t=0;t<e.length;t++){const o=e[t];if(Me(o)){const e=o,{summaryNode:t,wrapperNode:n,otherNodes:r}=Pe(e),i=a(t),d=i?t:new Se("summary",1);s(d.firstChild)&&Oe(d),Ee(d,[ce]),i||(a(e.firstChild)?e.insert(d,e.firstChild,!0):e.append(d));const l=a(n),c=l?n:new Se(ue,1);if(c.attr("data-mce-bogus","1"),Ee(c,[me]),r.length>0)for(let e=0;e<r.length;e++){const t=r[e];c.append(t)}if(s(c.firstChild)){const e=new Se("p",1);Oe(e),c.append(e)}l||e.append(c)}}})),t.addNodeFilter(de,(e=>{const t=new Set([ce]);for(let o=0;o<e.length;o++){const n=e[o];if(Me(n)){const e=n,{summaryNode:o,wrapperNode:r}=Pe(e);a(o)&&De(o,t),a(r)&&r.unwrap()}}}))}))})(e),(e=>{Re.browser.isSafari()&&e.on("click",(t=>{if(pe(t.target)){const o=t.target,n=e.selection.getRng();n.collapsed&&n.startContainer===o.parentNode&&0===n.startOffset&&e.selection.setCursorLocation(o,0)}}))})(e)}))}();