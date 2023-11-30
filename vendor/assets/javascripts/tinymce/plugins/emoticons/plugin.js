/**
 * TinyMCE version 6.8.1 (2023-11-29)
 */
!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const e=t=>e=>t===e,o=e(null),n=e(void 0),s=()=>{},r=()=>!1;class a{constructor(t,e){this.tag=t,this.value=e}static some(t){return new a(!0,t)}static none(){return a.singletonNone}fold(t,e){return this.tag?e(this.value):t()}isSome(){return this.tag}isNone(){return!this.tag}map(t){return this.tag?a.some(t(this.value)):a.none()}bind(t){return this.tag?t(this.value):a.none()}exists(t){return this.tag&&t(this.value)}forall(t){return!this.tag||t(this.value)}filter(t){return!this.tag||t(this.value)?this:a.none()}getOr(t){return this.tag?this.value:t}or(t){return this.tag?this:t}getOrThunk(t){return this.tag?this.value:t()}orThunk(t){return this.tag?this:t()}getOrDie(t){if(this.tag)return this.value;throw new Error(null!=t?t:"Called getOrDie on None")}static from(t){return null==t?a.none():a.some(t)}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(t){this.tag&&t(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}a.singletonNone=new a(!1);const i=(t,e)=>{const o=t.length,n=new Array(o);for(let s=0;s<o;s++){const o=t[s];n[s]=e(o,s)}return n},l=t=>{let e=t;return{get:()=>e,set:t=>{e=t}}},c=Object.keys,u=Object.hasOwnProperty,g=(t,e)=>{const o=c(t);for(let n=0,s=o.length;n<s;n++){const s=o[n];e(t[s],s)}},m=(t,e)=>u.call(t,e),d=(h=(t,e)=>e,(...t)=>{if(0===t.length)throw new Error("Can't merge zero objects");const e={};for(let o=0;o<t.length;o++){const n=t[o];for(const t in n)m(n,t)&&(e[t]=h(e[t],n[t]))}return e});var h;const p=()=>{const t=(t=>{const e=l(a.none()),o=()=>e.get().each(t);return{clear:()=>{o(),e.set(a.none())},isSet:()=>e.get().isSome(),get:()=>e.get(),set:t=>{o(),e.set(a.some(t))}}})(s);return{...t,on:e=>t.get().each(e)}},v=(t,e,o=0,s)=>{const r=t.indexOf(e,o);return-1!==r&&(!!n(s)||r+e.length<=s)};var y=tinymce.util.Tools.resolve("tinymce.Resource");const f=t=>e=>e.options.get(t),b=f("emoticons_database"),w=f("emoticons_database_url"),C=f("emoticons_database_id"),_=f("emoticons_append"),j=f("emoticons_images_url"),k="All",A={symbols:"Symbols",people:"People",animals_and_nature:"Animals and Nature",food_and_drink:"Food and Drink",activity:"Activity",travel_and_places:"Travel and Places",objects:"Objects",flags:"Flags",user:"User Defined"},O=(t,e)=>m(t,e)?t[e]:e,x=t=>{const e=_(t);return o=t=>({keywords:[],category:"user",...t}),((t,e)=>{const o={};return g(t,((t,n)=>{const s=e(t,n);o[s.k]=s.v})),o})(e,((t,e)=>({k:e,v:o(t)})));var o},E=(t,e)=>v(t.title.toLowerCase(),e)||((t,o)=>{for(let o=0,s=t.length;o<s;o++)if(n=t[o],v(n.toLowerCase(),e))return!0;var n;return!1})(t.keywords),S=(t,e,o)=>{const n=[],s=e.toLowerCase(),a=o.fold((()=>r),(t=>e=>e>=t));for(let o=0;o<t.length&&(0!==e.length&&!E(t[o],s)||(n.push({value:t[o].char,text:t[o].title,icon:t[o].char}),!a(n.length)));o++);return n},L="pattern",N=(t,e)=>{const n={pattern:"",results:S(e.listAll(),"",a.some(300))},s=l(k),r=((t,e)=>{let n=null;const s=()=>{o(n)||(clearTimeout(n),n=null)};return{cancel:s,throttle:(...e)=>{s(),n=setTimeout((()=>{n=null,t.apply(null,e)}),200)}}})((t=>{(t=>{const o=t.getData(),n=s.get(),r=e.listCategory(n),i=S(r,o[L],n===k?a.some(300):a.none());t.setData({results:i})})(t)})),c={label:"Search",type:"input",name:L},u={type:"collection",name:"results"},g=()=>({title:"Emojis",size:"normal",body:{type:"tabpanel",tabs:i(e.listCategories(),(t=>({title:t,name:t,items:[c,u]})))},initialData:n,onTabChange:(t,e)=>{s.set(e.newTabName),r.throttle(t)},onChange:r.throttle,onAction:(e,o)=>{"results"===o.name&&(((t,e)=>{t.insertContent(e)})(t,o.value),e.close())},buttons:[{type:"cancel",text:"Close",primary:!0}]}),m=t.windowManager.open(g());m.focus(L),e.hasLoaded()||(m.block("Loading emojis..."),e.waitForLoad().then((()=>{m.redial(g()),r.throttle(m),m.focus(L),m.unblock()})).catch((t=>{m.redial({title:"Emojis",body:{type:"panel",items:[{type:"alertbanner",level:"error",icon:"warning",text:"Could not load emojis"}]},buttons:[{type:"cancel",text:"Close",primary:!0}],initialData:{pattern:"",results:[]}}),m.focus(L),m.unblock()})))},T=t=>e=>{const o=()=>{e.setEnabled(t.selection.isEditable())};return t.on("NodeChange",o),o(),()=>{t.off("NodeChange",o)}};t.add("emoticons",((t,e)=>{((t,e)=>{const o=t.options.register;o("emoticons_database",{processor:"string",default:"emojis"}),o("emoticons_database_url",{processor:"string",default:`${e}/js/${b(t)}${t.suffix}.js`}),o("emoticons_database_id",{processor:"string",default:"tinymce.plugins.emoticons"}),o("emoticons_append",{processor:"object",default:{}}),o("emoticons_images_url",{processor:"string",default:"https://twemoji.maxcdn.com/v/13.0.1/72x72/"})})(t,e);const o=((t,e,o)=>{const n=p(),s=p(),r=j(t),i=t=>{return o="<img",(e=t.char).length>=4&&e.substr(0,4)===o?t.char.replace(/src="([^"]+)"/,((t,e)=>`src="${r}${e}"`)):t.char;var e,o};t.on("init",(()=>{y.load(o,e).then((e=>{const o=x(t);(t=>{const e={},o=[];g(t,((t,n)=>{const s={title:n,keywords:t.keywords,char:i(t),category:O(A,t.category)},r=void 0!==e[s.category]?e[s.category]:[];e[s.category]=r.concat([s]),o.push(s)})),n.set(e),s.set(o)})(d(e,o))}),(t=>{console.log(`Failed to load emojis: ${t}`),n.set({}),s.set([])}))}));const l=()=>s.get().getOr([]),u=()=>n.isSet()&&s.isSet();return{listCategories:()=>[k].concat(c(n.get().getOr({}))),hasLoaded:u,waitForLoad:()=>u()?Promise.resolve(!0):new Promise(((t,o)=>{let n=15;const s=setInterval((()=>{u()?(clearInterval(s),t(!0)):(n--,n<0&&(console.log("Could not load emojis from url: "+e),clearInterval(s),o(!1)))}),100)})),listAll:l,listCategory:t=>t===k?l():n.get().bind((e=>a.from(e[t]))).getOr([])}})(t,w(t),C(t));((t,e)=>{t.addCommand("mceEmoticons",(()=>N(t,e)))})(t,o),(t=>{const e=()=>t.execCommand("mceEmoticons");t.ui.registry.addButton("emoticons",{tooltip:"Emojis",icon:"emoji",onAction:e,onSetup:T(t)}),t.ui.registry.addMenuItem("emoticons",{text:"Emojis...",icon:"emoji",onAction:e,onSetup:T(t)})})(t),((t,e)=>{t.ui.registry.addAutocompleter("emoticons",{trigger:":",columns:"auto",minChars:2,fetch:(t,o)=>e.waitForLoad().then((()=>{const n=e.listAll();return S(n,t,a.some(o))})),onAction:(e,o,n)=>{t.selection.setRng(o),t.insertContent(n),e.hide()}})})(t,o),(t=>{t.on("PreInit",(()=>{t.parser.addAttributeFilter("data-emoticon",(t=>{((t,e)=>{for(let e=0,n=t.length;e<n;e++)(o=t[e]).attr("data-mce-resize","false"),o.attr("data-mce-placeholder","1");var o})(t)}))}))})(t)}))}();