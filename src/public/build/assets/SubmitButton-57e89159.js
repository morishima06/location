import{r as o,C as f,j as n,F as u,a as m}from"./app-bc6b9f11.js";import{G as p}from"./iconBase-80b019e4.js";function h(){return typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"}function b(t){const e=o.useContext(f);if(!e)throw new Error("Missing <CookiesProvider>");const[r,s]=o.useState(()=>e.getAll());h()&&o.useLayoutEffect(()=>{function i(){const c=e.getAll({doNotUpdate:!0});C(t||null,c,r)&&s(c)}return e.addChangeListener(i),()=>{e.removeChangeListener(i)}},[e,r]);const a=o.useMemo(()=>e.set.bind(e),[e]),l=o.useMemo(()=>e.remove.bind(e),[e]),d=o.useMemo(()=>e.update.bind(e),[e]);return[r,a,l,d]}function C(t,e,r){if(!t)return!0;for(let s of t)if(e[s]!==r[s])return!0;return!1}const g=()=>n(u,{children:n("footer",{children:n("div",{className:"mb-4 mt-8 flex justify-center",children:n("p",{className:"font-semibold",children:"copyright2023"})})})});function k(t){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(t)}const y=({handleSubmit:t})=>n(u,{children:n("form",{onSubmit:t,className:"flex w-full justify-center",id:"form1",children:m("button",{type:"submit",className:" block  h-[40px]  w-full  cursor-pointer py-2 text-sm font-semibold text-white sm:h-[45px]",children:[" ","検索"]})})});export{k as A,g as F,y as S,b as u};
