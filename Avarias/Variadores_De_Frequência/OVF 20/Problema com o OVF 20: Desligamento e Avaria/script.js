document.addEventListener('DOMContentLoaded', function() {
  var image = document.querySelector('img');
  if (image) {
    image.addEventListener('click', function() {
      history.back();
    });
  }
});
var isDragging = false;
var startX, startY, imageLeft, imageTop;

function startDragging(event) {
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
  var image = document.getElementById('lightboxImage');
  var imageRect = image.getBoundingClientRect();
  imageLeft = imageRect.left;
  imageTop = imageRect.top;
  document.body.style.overflow = 'hidden'; // Impede o scroll da página enquanto estiver arrastando a imagem
  event.preventDefault(); // Impede o comportamento padrão do navegador, como o scroll da página
}

function stopDragging() {
  isDragging = false;

}

function drag(event) {
  if (!isDragging) return;
  var image = document.getElementById('lightboxImage');
  var deltaX = event.clientX - startX;
  var deltaY = event.clientY - startY;
  image.style.left = imageLeft + deltaX + 'px';
  image.style.top = imageTop + deltaY + 'px';

}

// Adiciona event listeners para os eventos de mouse
document.querySelector('.image-container').addEventListener('mousedown', startDragging);
document.addEventListener('mouseup', stopDragging);
document.addEventListener('mousemove', drag);
