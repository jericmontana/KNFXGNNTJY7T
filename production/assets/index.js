!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();!function(){document.addEventListener("DOMContentLoaded",(()=>{console.log("✨ DOM Content Loaded.")}));class e extends HTMLElement{constructor(){super(),this.header=this,this.currentScrollTop=0,this.sticky=!1,window.addEventListener("scroll",this.onScroll.bind(this),!1)}onScroll(){const e=window.pageYOffset||document.documentElement.scrollTop;e<this.currentScrollTop&&!this.sticky&&(this.header.classList.add("site-header-sticky"),this.header.classList.remove("site-header-hidden"),console.log(this.header)),e>this.currentScrollTop&&this.sticky&&(this.header.classList.add("site-header-sticky"),this.header.classList.add("site-header-hidden")),e<this.currentScrollTop&&(this.sticky=!0),e>this.currentScrollTop&&(this.sticky=!1),this.currentScrollTop=e}}customElements.define("sticky-header",e);class t extends HTMLElement{constructor(){super(),this.body=document.querySelector("body"),this.toggle=this.querySelector("summary"),this.toggle.addEventListener("click",this.toggleClickHandler.bind(this))}toggleClickHandler(){this.body.classList.toggle("no-scroll--mobile-tablet")}}customElements.define("header-drawer",t)}();
