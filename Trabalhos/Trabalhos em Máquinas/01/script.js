function openLightbox(imageUrl) {
  document.getElementById('lightboxImage').src = imageUrl;
  document.querySelector('.lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.querySelector('.lightbox').style.display = 'none';
}
