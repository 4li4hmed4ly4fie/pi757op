//<![CDATA[
"use strict";
/*!
* manga-reader.js v1.0
* copyright 2020 Mint Web
* Developed by Hussein Farg (imintweb.com)
* Licensed under MIT
*/!function(){const e=pages,r=document.querySelector(".reader-pages"),n=document.querySelector(".reader-nav #prev"),t=document.querySelector(".reader-nav #next"),c=document.querySelector(".reader-state #current-page"),d=document.querySelector(".reader-state #total-page"),a=e=>{let r=document.createElement("img");return r.src=e,r};r.appendChild(a(e[0])),d.innerHTML=e.length,(()=>{let d=0;n.addEventListener("click",()=>{d>0&&(d--,r.innerHTML="",r.appendChild(a(e[d])),c.innerHTML=d+1)}),t.addEventListener("click",()=>{d<e.length-1&&(d++,r.innerHTML="",r.appendChild(a(e[d])),c.innerHTML=d+1)})})()}();
//]]>
