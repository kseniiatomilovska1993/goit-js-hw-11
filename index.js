/* empty css                      */import{a as p,S as m,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",g="YOUR_API_KEY";async function y(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(d,{params:r})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:o,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
          </a>
          <ul class="info">
            <li class="info-item">
              <p class="info-title">Likes</p>
              <p class="info-value">${t}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Views</p>
              <p class="info-value">${o}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Comments</p>
              <p class="info-value">${u}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Downloads</p>
              <p class="info-value">${f}</p>
            </li>
          </ul>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function w(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",q);async function q(i){i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}w(),S();try{const s=await y(r);if(s.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b(),i.currentTarget.reset()}}
//# sourceMappingURL=index.js.map
