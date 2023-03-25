// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryItemsImages = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`).join("");

gallery.insertAdjacentHTML('beforeend', galleryItemsImages);

gallery.addEventListener('click', openImgBigFoto);

function openImgBigFoto(e) {
    e.preventDefault();

    const img = e.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${img}" width="800" height="600" />`);
    instance.show()

    window.addEventListener('keydown', e => {
        if (e.code === "Escape") {
            instance.close();
        }
    })
};
