import{a as g,S as h,i as c}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const b=async(t,s=1)=>(await g({url:"https://pixabay.com/api/",params:{key:"43468244-0e08b5bd3673b3a8f95726aef",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data,x=t=>t.map(({webformatURL:s,largeImageURL:a,tags:l,likes:e,views:r,comments:o,downloads:f})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${a}">
                <img
                class="gallery-image"
                src="${s}"
                alt="${l}"
                />
            </a>
            <ul class="gallery-txt-list">
                <li class="gallery-txt-item">
                    <p class="txt-title">Likes</p>
                    <p class="txt-value">${e}</p>
                </li>
                <li class="gallery-txt-item">
                    <p class="txt-title">Views</p>
                    <p class="txt-value">${r}</p>
                </li>
                <li class="gallery-txt-item">
                    <p class="txt-title">Comments</p>
                    <p class="txt-value">${o}</p>
                </li>
                <li class="gallery-txt-item">
                    <p class="txt-title">Downloads</p>
                    <p class="txt-value">${f}</p>
                </li>
            </ul>
        </li>`).join(""),v=document.querySelector(".search-form"),m=document.querySelector(".gallery"),L=new h(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250}),y=document.querySelector(".loader"),i=document.querySelector(".more-btn"),S=document.querySelector(".search-input");y.style.display="none";i.style.display="none";let p="",n=1;v.addEventListener("submit",t=>{t.preventDefault(),p=t.target.elements.search.value.trim(),p!==""&&(y.style.display="block",m.innerHTML="",n=1,d(n))});i.addEventListener("click",()=>{n++,d(n)});S.addEventListener("click",t=>{t.target.value=""});function d(t){b(p,t).then(s=>{s.total==0&&c.show(u()),m.insertAdjacentHTML("beforeend",x(s.hits)),L.refresh(),i.style.display="block",w(),Math.floor(s.totalHits/t)<15&&(c.show(u("We're sorry, but you've reached the end of search results.")),i.style.display="none")}).catch(s=>{c.show(u(s.message))}).finally(()=>{y.style.display="none"})}function u(t=""){return{message:t==""?"Sorry, there are no images matching your search query. Please try again!":t,messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"}}function w(){document.querySelector(".gallery-item"),window.scrollBy({top:250*2+24*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
