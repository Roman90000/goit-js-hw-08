import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
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
};

const lightbox = new SimpleLightbox('.gallery a');

