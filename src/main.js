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
loader.style.display = "none";

form.addEventListener("submit", event => {
    event.preventDefault();
    const searchString = event.target.elements.search.value.trim();
    if (searchString === "") {
        return;
    }
    loader.style.display = "block";
    galleryContainer.innerHTML = "";
    loader.style
    makeFetch(searchString)
        .then(data => {
            if (data.total == 0) {
                iziToast.show(createMsg());
            }
            galleryContainer.insertAdjacentHTML('beforeend', makeGallery(data.hits));
            lightbox.refresh();
            event.target.reset();
        })
        .catch(error => {
            iziToast.show(createMsg(error.message));
        })
        .finally(() => {
            loader.style.display = "none";
        });
})

function createMsg(msg = "") {
    return {
        message: msg == "" ? "Sorry, there are no images matching your search query. Please try again!" : msg,
        messageColor: '#fff',
        backgroundColor: '#EF4040',
        position: 'topRight',
    }
}
