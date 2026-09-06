import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <ul class="info">
            <li class="info-item">
              <p class="info-title">Likes</p>
              <p class="info-value">${likes}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Views</p>
              <p class="info-value">${views}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Comments</p>
              <p class="info-value">${comments}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Downloads</p>
              <p class="info-value">${downloads}</p>
            </li>
          </ul>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}
