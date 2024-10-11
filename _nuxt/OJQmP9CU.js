import{_ as N}from"./V_saszGX.js";import{i as U,o as m,g as v,w as x,r as k,R as w,S as C,q as y,Q as $,a as j,U as T,V as K,W as H,k as S,X as g,m as I,Y as R,Z as V}from"./B_j0l1yd.js";import{_ as D}from"./DlAUqK2U.js";const A=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function B(t,i){i?i={...A,...i}:i=A;const a=F(i);return a.dispatch(t),a.toString()}const M=Object.freeze(["prototype","__proto__","constructor"]);function F(t){let i="",a=new Map;const r=e=>{i+=e};return{toString(){return i},getContext(){return a},dispatch(e){return t.replacer&&(e=t.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let o="";const c=n.length;c<10?o="unknown:["+n+"]":o=n.slice(8,c-1),o=o.toLowerCase();let u=null;if((u=a.get(e))===void 0)a.set(e,a.size);else return this.dispatch("[CIRCULAR:"+u+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return r("buffer:"),r(e.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](e):t.ignoreUnknown||this.unkown(e,o);else{let s=Object.keys(e);t.unorderedObjects&&(s=s.sort());let d=[];t.respectType!==!1&&!q(e)&&(d=M),t.excludeKeys&&(s=s.filter(l=>!t.excludeKeys(l)),d=d.filter(l=>!t.excludeKeys(l))),r("object:"+(s.length+d.length)+":");const f=l=>{this.dispatch(l),r(":"),t.excludeValues||this.dispatch(e[l]),r(",")};for(const l of s)f(l);for(const l of d)f(l)}},array(e,n){if(n=n===void 0?t.unorderedArrays!==!1:n,r("array:"+e.length+":"),!n||e.length<=1){for(const u of e)this.dispatch(u);return}const o=new Map,c=e.map(u=>{const s=F(t);s.dispatch(u);for(const[d,f]of s.getContext())o.set(d,f);return s.toString()});return a=o,c.sort(),this.array(c,!1)},date(e){return r("date:"+e.toJSON())},symbol(e){return r("symbol:"+e.toString())},unkown(e,n){if(r(n),!!e&&(r(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return r("error:"+e.toString())},boolean(e){return r("bool:"+e)},string(e){r("string:"+e.length+":"),r(e)},function(e){r("fn:"),q(e)?this.dispatch("[native]"):this.dispatch(e.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),t.respectFunctionProperties&&this.object(e)},number(e){return r("number:"+e)},xml(e){return r("xml:"+e.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(e){return r("regex:"+e.toString())},uint8array(e){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return r("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return r("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return r("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return r("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return r("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return r("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return r("url:"+e.toString())},map(e){r("map:");const n=[...e];return this.array(n,t.unorderedSets!==!1)},set(e){r("set:");const n=[...e];return this.array(n,t.unorderedSets!==!1)},file(e){return r("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(e){return r("bigint:"+e.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const O="[native code] }",Q=O.length;function q(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-Q)===O}function J(t,i,a={}){return t===i||B(t,a)===B(i,a)}const b={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},_={as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},ee=t=>Object.keys(b).reduce((a,r)=>(t[r]!==void 0&&(a[r]=t[r]),a),{}),te=t=>[...Object.keys(b),...Object.keys(_),"ariaLabel","title"].reduce((a,r)=>(t[r]!==void 0&&(a[r]=t[r]),a),{}),W=U({inheritAttrs:!1,props:{...b,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(t){function i(a,r,{isActive:e,isExactActive:n}){return t.exactQuery&&!J(a.query,r.query)||t.exactHash&&a.hash!==r.hash?t.inactiveClass:t.exact&&n||!t.exact&&e?t.activeClass:t.inactiveClass}return{resolveLinkClass:i}}}),E=["href","aria-disabled","role","rel","target","tabindex","onClick"];function X(t,i,a,r,e,n){const o=N;return t.to?(m(),v(o,y({key:1},t.$props,{custom:""}),{default:x(({route:c,href:u,target:s,rel:d,navigate:f,isActive:l,isExactActive:h,isExternal:L})=>[j("a",y(t.$attrs,{href:t.disabled?void 0:u,"aria-disabled":t.disabled?"true":void 0,role:t.disabled?"link":void 0,rel:d,target:s,class:t.active!==void 0?t.active?t.activeClass:t.inactiveClass:t.resolveLinkClass(c,t._.provides[T]||t.$route,{isActive:l,isExactActive:h}),tabindex:t.disabled?-1:void 0,onClick:P=>!L&&!t.disabled&&f(P)}),[k(t.$slots,"default",w(C({isActive:t.active!==void 0?t.active:t.exact?h:l})))],16,E)]),_:3},16)):(m(),v($(t.as),y({key:0,type:t.type,disabled:t.disabled},t.$attrs,{class:t.active?t.activeClass:t.inactiveClass}),{default:x(()=>[k(t.$slots,"default",w(C({isActive:t.active})))]),_:3},16,["type","disabled","class"]))}const re=D(W,[["render",X]]),ae=(t,i,a,r,e=!1)=>{const n=K(),o=H(),c=S(()=>{var l;const s=g(i),d=g(a),f=g(r);return I((s==null?void 0:s.strategy)||((l=o.ui)==null?void 0:l.strategy),f?{wrapper:f}:{},s||{},e?R(o.ui,t,{}):{},d||{})}),u=S(()=>V(n,["class"]));return{ui:c,attrs:u}},p={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"};({...p});const z={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...p,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...z,option:{...z.option},arrow:{...p}});({...p});export{re as _,p as a,ee as b,te as g,b as n,ae as u};
