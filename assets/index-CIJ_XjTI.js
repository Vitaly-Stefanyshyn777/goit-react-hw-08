const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-DJd0NIpV.js","assets/react-JG7DZguw.js","assets/exenv-BTN8Bl8p.js","assets/DocumentTitle-DGBMJYsn.js","assets/react-helmet-async-Cy8LYCv1.js","assets/invariant--TR4x_JN.js","assets/shallowequal-DxoHqyI3.js","assets/prop-types-IU01hjff.js","assets/@mui-Djcfd9KG.js","assets/clsx-B-dksMZM.js","assets/react-dom-rRzr_mU3.js","assets/scheduler-CzFDRTuY.js","assets/@emotion-KyolEqcV.js","assets/hoist-non-react-statics-BE0XjIkh.js","assets/@babel-CF3RwP-h.js","assets/stylis-YPZU7XtI.js","assets/RegistrationPage-CT_Yu-ib.js","assets/formik-CfGcpTwB.js","assets/deepmerge-DhIoniG1.js","assets/lodash-es-dVqQl90_.js","assets/react-fast-compare-DQYrHu-Y.js","assets/yup-C3UbQlk0.js","assets/property-expr-DEi1ZLzV.js","assets/tiny-case-BJ7jYKNY.js","assets/toposort-DEsGJkNe.js","assets/react-redux-C1ORDFMe.js","assets/use-sync-external-store-7_HN8JUD.js","assets/react-hot-toast-DsJE6WWk.js","assets/goober-np-fLvOt.js","assets/react-router-Bx1AX-mG.js","assets/@remix-run-BZffl5ES.js","assets/react-router-dom-D6Rafzb1.js","assets/redux-persist-Cr_cIafU.js","assets/redux-DITMfSWq.js","assets/@reduxjs-DF9IRoxF.js","assets/immer-DqxjFn0G.js","assets/redux-thunk-ClJT1hhx.js","assets/axios-upsvKRUO.js","assets/reselect-NCCDNIWx.js","assets/RegistrationPage-B6AvbNfF.css","assets/modern-normalize-LprV1Gou.css","assets/LoginPage-r5DwHMkk.js","assets/LoginPage-BLsVQy9W.css","assets/ContactsPage-BNUh84Sa.js","assets/react-icons-C6Z5BmmQ.js","assets/react-modal-FTYKBgkq.js","assets/warning-BwjNEfsz.js","assets/react-lifecycles-compat-DsJokh4A.js","assets/ContactsPage-CgJ_HwoB.css"])))=>i.map(i=>d[i]);
import{j as s,r as h,a as X}from"./react-JG7DZguw.js";import{c as Z}from"./react-dom-rRzr_mU3.js";import{H as ee}from"./react-helmet-async-Cy8LYCv1.js";import{u as f,a as M,P as te}from"./react-redux-C1ORDFMe.js";import{_ as C,I as V}from"./react-hot-toast-DsJE6WWk.js";import{N as S,B as se}from"./react-router-dom-D6Rafzb1.js";import{p as H,d as W,F as re,R as ne,P as oe,a as ae,b as ie,c as ce,e as le,f as de}from"./redux-persist-Cr_cIafU.js";import{c as m,a as b,i as g,b as ue}from"./@reduxjs-DF9IRoxF.js";import{a as he}from"./axios-upsvKRUO.js";/* empty css                         */import{c as fe}from"./reselect-NCCDNIWx.js";import{P as me}from"./prop-types-IU01hjff.js";import{B as pe,C as ge,T as _e,a as je}from"./@mui-Djcfd9KG.js";import{O as xe,e as D,f as ye,g as p}from"./react-router-Bx1AX-mG.js";import"./exenv-BTN8Bl8p.js";import"./scheduler-CzFDRTuY.js";import"./invariant--TR4x_JN.js";import"./shallowequal-DxoHqyI3.js";import"./use-sync-external-store-7_HN8JUD.js";import"./goober-np-fLvOt.js";import"./@remix-run-BZffl5ES.js";import"./redux-DITMfSWq.js";import"./immer-DqxjFn0G.js";import"./redux-thunk-ClJT1hhx.js";import"./clsx-B-dksMZM.js";import"./@emotion-KyolEqcV.js";import"./hoist-non-react-statics-BE0XjIkh.js";import"./@babel-CF3RwP-h.js";import"./stylis-YPZU7XtI.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const c=he.create({baseURL:"https://connections-api.goit.global/"}),O=t=>{c.defaults.headers.common.Authorization=`Bearer ${t}`},ve=()=>{c.defaults.headers.common.Authorization=""},w=m("auth/register",async(t,e)=>{var r,o;try{const n=await c.post("/users/signup",t);return O(n.data.token),C.success("Registration successful!"),n.data}catch(n){const a=((o=(r=n.response)==null?void 0:r.data)==null?void 0:o.message)||"Registration failed!";return C.error(a),e.rejectWithValue(a)}}),E=m("auth/login",async(t,e)=>{try{console.log("Sending data:",t);const r=await c.post("/users/login",t);return O(r.data.token),C.success("Login successful!"),r.data}catch(r){return C.error("Login failed!"),e.rejectWithValue(r.message)}}),T=m("auth/logout",async(t,e)=>{try{await c.post("/users/logout"),ve()}catch(r){return e.rejectWithValue(r.message)}}),R=m("auth/refresh",async(t,e)=>{const o=e.getState().auth.token;if(o===null)return e.rejectWithValue("Unable to fetch user");try{return O(o),(await c.get("/users/current")).data}catch(n){return e.rejectWithValue(n.message)}}),B={user:{name:null,email:null},token:null,isLoggedIn:!1,isRefreshing:!1,isLoading:!1,error:null},Le={key:"auth",storage:W,whitelist:["token"]},Re=t=>{t.isLoading=!0,t.error=null},Ce=(t,e)=>{t.isLoading=!1,t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0},Se=(t,e)=>{t.isLoading=!1,t.error=e.payload||"An error occurred"},ke=b({name:"auth",initialState:B,reducers:{},extraReducers:t=>{t.addCase(R.fulfilled,(e,r)=>{e.user=r.payload,e.isRefreshing=!1,e.isLoggedIn=!0}).addCase(R.pending,e=>{e.isRefreshing=!0}).addCase(R.rejected,e=>{e.isRefreshing=!1}).addCase(T.fulfilled,()=>B).addMatcher(g(E.pending,w.pending),Re).addMatcher(g(E.fulfilled,w.fulfilled),Ce).addMatcher(g(E.rejected,w.rejected),Se)}}),Pe=H(Le,ke.reducer),k=(t,e)=>{var r,o;return e.rejectWithValue(((o=(r=t.response)==null?void 0:r.data)==null?void 0:o.message)||t.message)},x=m("contacts/fetchAll",async(t,e)=>{try{const{data:r}=await c.get("/contacts");return r}catch(r){return k(r,e)}}),y=m("contacts/add",async(t,e)=>{try{const{data:r}=await c.post("/contacts",t);return r}catch(r){return k(r,e)}}),v=m("contacts/delete",async(t,e)=>{try{const{data:r}=await c.delete(`/contacts/${t}`);return r}catch(r){return k(r,e)}});m("contacts/edit",async({id:t,name:e,number:r},o)=>{try{const{data:n}=await c.patch(`/contacts/${t}`,{name:e,number:r});return n}catch(n){return k(n,o)}});const I={items:[],isLoading:!1,error:null,isContactsFetched:!1},we=b({name:"contacts",initialState:I,extraReducers:t=>{t.addCase(x.fulfilled,(e,{payload:r})=>{e.items=r,e.isContactsFetched=!0}).addCase(y.fulfilled,(e,{payload:r})=>{e.items.push(r)}).addCase(v.fulfilled,(e,{payload:r})=>{e.items=e.items.filter(o=>o.id!==r.id)}).addCase(T.fulfilled,()=>I).addMatcher(g(x.pending,y.pending,v.pending),e=>{e.isLoading=!0,e.error=null}).addMatcher(g(x.rejected,y.rejected,v.rejected),(e,{payload:r})=>{e.isLoading=!1,e.error=r||"Something went wrong"}).addMatcher(g(x.fulfilled,y.fulfilled,v.fulfilled),e=>{e.isLoading=!1,e.error=null})}}),Ee=we.reducer,Ae={name:""},q=b({name:"filters",initialState:Ae,reducers:{changeFilter(t,e){t.name=e.payload}}}),{changeFilter:Wt}=q.actions,Ne=q.reducer,Dt=t=>{var e;return((e=t.filters)==null?void 0:e.name)??""},be={key:"auth",storage:W,whitelist:["token"]},G=ue({reducer:{auth:H(be,Pe),contacts:Ee,filters:Ne},middleware:t=>t({serializableCheck:{ignoredActions:[re,ne,oe,ae,ie,ce]}}),devTools:!1}),Oe=le(G),Te="modulepreload",$e=function(t){return"/"+t},U={},P=function(e,r,o){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(r.map(d=>{if(d=$e(d),d in U)return;U[d]=!0;const j=d.endsWith(".css"),Y=j?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${Y}`))return;const u=document.createElement("link");if(u.rel=j?"stylesheet":Te,j||(u.as="script"),u.crossOrigin="",u.href=d,l&&u.setAttribute("nonce",l),document.head.appendChild(u),j)return new Promise((J,Q)=>{u.addEventListener("load",J),u.addEventListener("error",()=>Q(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return n.then(i=>{for(const l of i||[])l.status==="rejected"&&a(l.reason);return e().catch(a)})},$=t=>t.auth,ze=t=>{var e;return((e=$(t))==null?void 0:e.user)??null},Be=t=>{var e;return((e=$(t))==null?void 0:e.token)??null},z=t=>{var e;return((e=$(t))==null?void 0:e.isRefreshing)??!1},_=fe([Be,z],(t,e)=>!!t&&!e),Ie="_link_vtrbw_1",Ue="_active_vtrbw_19",Fe="_nav_vtrbw_32",A={link:Ie,active:Ue,nav:Fe},Me=()=>{const t=f(_);return s.jsxs("nav",{className:A.nav,children:[s.jsx(S,{className:A.link,to:"/",children:"Home"}),t&&s.jsx(S,{className:A.link,to:"/contacts",children:"Contacts"})]})},Ve="_wrapper_1hfl7_1",He="_username_1hfl7_7",N={wrapper:Ve,username:He},We=()=>{const t=M(),e=f(ze),r=f(_),o=()=>{t(T())};return r?s.jsxs("div",{className:N.wrapper,children:[s.jsxs("p",{className:N.username,children:["Welcome, ",e.name]}),s.jsx("button",{type:"button",className:N.logoutBtn,onClick:o,children:"Logout"})]}):s.jsx("p",{children:"Loading user data..."})},De="_authNavCon_ljwas_1",qe="_authLink_ljwas_8",Ge="_active_ljwas_27",L={authNavCon:De,authLink:qe,active:Ge},Ke=()=>{const t=({isActive:e})=>e?`${L.link} ${L.authLink}`:L.link;return s.jsxs("div",{className:L.authNavCon,children:[s.jsx(S,{to:"/register",className:t,children:"Register"}),s.jsx(S,{to:"/login",className:t,children:"Login"})]})},Ye=h.memo(Ke),Je="_headerBar_276oz_1",Qe="_logo_276oz_14",Xe="_navContainer_276oz_28",Ze="_navLink_276oz_34",et="_active_276oz_45",tt="_userMenu_276oz_50",st="_username_276oz_56",rt="_logoutBtn_276oz_62",nt={headerBar:Je,logo:Qe,navContainer:Xe,navLink:Ze,active:et,userMenu:tt,username:st,logoutBtn:rt},ot=()=>{const t=f(_);return s.jsxs("header",{className:nt.headerBar,children:[s.jsx(Me,{}),t?s.jsx(We,{}):s.jsx(Ye,{})]})},K=({message:t="Loading..."})=>s.jsxs(pe,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",children:[s.jsx(ge,{color:"primary"}),s.jsx(_e,{variant:"h6",mt:2,children:t})]});K.propTypes={message:me.string};const at="_layout_110yy_1",it={layout:at},ct=()=>s.jsxs("div",{className:it.layout,children:[s.jsx(ot,{}),s.jsx(V,{position:"top-right",reverseOrder:!1,toastOptions:{duration:2e3,style:{background:"#333",color:"#fff",fontSize:"14px"}}}),s.jsx(h.Suspense,{fallback:s.jsx(K,{message:"Loading page..."}),children:s.jsx(xe,{})})]}),lt=({children:t,redirectTo:e="/login"})=>f(_)?t:s.jsx(D,{to:e,replace:!0}),F=({children:t,redirectTo:e="/contacts"})=>{const r=f(_);return f(z)?s.jsx("div",{children:"Loading..."}):r?s.jsx(D,{to:e}):t},dt=h.lazy(()=>P(()=>import("./HomePage-DJd0NIpV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))),ut=h.lazy(()=>P(()=>import("./RegistrationPage-CT_Yu-ib.js"),__vite__mapDeps([16,1,2,3,4,5,6,7,17,18,19,20,13,21,22,23,24,25,26,27,28,29,30,8,9,10,11,12,14,15,31,32,33,34,35,36,37,38,39,40]))),ht=h.lazy(()=>P(()=>import("./LoginPage-r5DwHMkk.js"),__vite__mapDeps([41,1,2,3,4,5,6,7,17,18,19,20,13,25,26,29,30,8,9,10,11,12,14,15,27,28,31,32,33,34,35,36,37,38,42,40]))),ft=h.lazy(()=>P(()=>import("./ContactsPage-BNUh84Sa.js"),__vite__mapDeps([43,1,2,25,26,3,4,5,6,7,38,17,18,19,20,13,21,22,23,24,27,28,44,45,10,11,46,47,31,29,30,32,33,34,35,36,37,8,9,12,14,15,48,40]))),mt=()=>{const t=M(),e=f(z);return h.useEffect(()=>{t(R())},[t]),e?s.jsx("p",{children:"Refreshing user..."}):s.jsx(h.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsxs(ye,{children:[s.jsxs(p,{path:"/",element:s.jsx(ct,{}),children:[s.jsx(p,{index:!0,element:s.jsx(dt,{})}),s.jsx(p,{path:"contacts",element:s.jsx(lt,{redirectTo:"/login",children:s.jsx(ft,{})})}),s.jsx(p,{path:"register",element:s.jsx(F,{redirectTo:"/contacts",children:s.jsx(ut,{})})}),s.jsx(p,{path:"login",element:s.jsx(F,{redirectTo:"/contacts",children:s.jsx(ht,{})})})]}),s.jsx(p,{path:"*",element:s.jsx("p",{children:"404: Page Not Found"})})]})})};Z(document.getElementById("root")).render(s.jsx(X.StrictMode,{children:s.jsx(te,{store:G,children:s.jsx(de,{loading:s.jsx("div",{children:"Loading..."}),persistor:Oe,children:s.jsx(se,{children:s.jsxs(ee,{children:[s.jsx(je,{}),s.jsx(mt,{}),s.jsx(V,{position:"top-right",reverseOrder:!1,toastOptions:{duration:2e3,style:{background:"#333",color:"#fff",fontSize:"16px"}}})]})})})})}));export{y as a,Dt as b,Wt as c,v as d,x as f,E as l,w as r,_ as s};