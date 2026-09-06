/* empty css                      */import{a as p,S as m,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",g="YOUR_API_KEY";async function y(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(d,{params:r})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
          </a>
          <ul class="info">
            <li class="info-item">
              <p class="info-title">Likes</p>
              <p class="info-value">${t}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Views</p>
              <p class="info-value">${n}</p>
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
      `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function S(){l.innerHTML=""}function b(){c.classList.remove("is-hidden")}function v(){c.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",P);function P(i){i.preventDefault();const r=i.currentTarget,s=r.elements["search-text"].value.trim();if(!s){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}S(),b(),y(s).then(o=>{if(o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(()=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{v(),r.reset()})}
//# sourceMappingURL=index.js.map
