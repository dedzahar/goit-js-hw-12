import{S as f,i as n}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const y=r=>{const s="43468244-0e08b5bd3673b3a8f95726aef",l="https://pixabay.com/api/",a=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${l}?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},m=r=>r.map(({webformatURL:s,largeImageURL:l,tags:a,likes:e,views:t,comments:o,downloads:p})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${l}">
                <img
                class="gallery-image"
                src="${s}"
                alt="${a}"
                />
            </a>
            <ul class="gallery-txt-list">
                <li class="gallery-txt-item">
                    <p class="txt-title">Likes</p>
                    <p class="txt-value">${e}</p>
                </li>
                <li class="gallery-txt-item">
                    <p class="txt-title">Views</p>
                    <p class="txt-value">${t}</p>
                </li>
                <li class="gallery-txt-item">
                    <p class="txt-title">Comments</p>
                    <p class="txt-value">${o}</p>
                </li>
                <li class="gallery-txt-item">
                    <p class="txt-title">Downloads</p>
                    <p class="txt-value">${p}</p>
                </li>
            </ul>
        </li>`).join(""),d=document.querySelector(".search-form"),c=document.querySelector(".gallery"),g=new f(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250}),i=document.querySelector(".loader");i.style.display="none";d.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.search.value.trim();s!==""&&(i.style.display="block",c.innerHTML="",i.style,y(s).then(l=>{l.total==0&&n.show(u()),c.insertAdjacentHTML("beforeend",m(l.hits)),g.refresh(),r.target.reset()}).catch(l=>{n.show(u(l.message))}).finally(()=>{i.style.display="none"}))});function u(r=""){return{message:r==""?"Sorry, there are no images matching your search query. Please try again!":r,messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"}}
//# sourceMappingURL=commonHelpers.js.map
