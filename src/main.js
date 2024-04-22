import makeFetch from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import makeGallery from "./js/render-functions";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".search-form");
const galleryContainer = document.querySelector(".gallery");
const lightbox = new SimpleLightbox(".gallery a", { 
    overlayOpacity: 0.8,
    captionsData: "alt",
    captionDelay: 250
});
const loader = document.querySelector(".loader");
const moreBtn = document.querySelector(".more-btn");
const searchInput = document.querySelector(".search-input");
loader.style.display = "none";
moreBtn.style.display = "none";
let searchString = "";
let page = 1;

form.addEventListener("submit", event => {
    event.preventDefault();
    searchString = event.target.elements.search.value.trim();
    if (searchString === "") {
        return;
    }
    loader.style.display = "block";
    galleryContainer.innerHTML = "";
    page = 1;
    makeAndRefresh(page);
})

moreBtn.addEventListener("click", () => {
    page++;
    makeAndRefresh(page);
})

searchInput.addEventListener("click", event => {
    event.target.value = "";
})

function makeAndRefresh(page) {
    makeFetch(searchString, page)
        .then(data => {
            if (data.total == 0) {
                iziToast.show(createMsg());
            }
            galleryContainer.insertAdjacentHTML('beforeend', makeGallery(data.hits));
            lightbox.refresh();
            scroll();
            if (Math.floor(data.totalHits / page) < 15) {
                iziToast.show(createMsg("We're sorry, but you've reached the end of search results."));
                moreBtn.style.display = "none";
            } else {
                moreBtn.style.display = "block";
            }
        })
        .catch(error => {
            iziToast.show(createMsg(error.message));
        })
        .finally(() => {
            loader.style.display = "none";
        });
}

function createMsg(msg = "") {
    return {
        message: msg == "" ? "Sorry, there are no images matching your search query. Please try again!" : msg,
        messageColor: '#fff',
        backgroundColor: '#EF4040',
        position: 'topRight',
    }
}

function scroll() {
    const item = document.querySelector(".gallery-item");
    window.scrollBy({
        top: 250 * 2 + 24 * 2,
        left: 0,
        behavior: "smooth",
    });
}
