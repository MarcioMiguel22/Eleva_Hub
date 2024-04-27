function toggleSize(button) {
  var serviceText = button.parentElement.nextElementSibling;
  serviceText.style.display = "block";

  // Mudar o texto do botão de "es" para "ES" e vice-versa
  var buttonText = button.querySelector('span');
  buttonText.innerText = buttonText.innerText === 'es' ? 'ES' : 'es';

  setTimeout(function() {
    serviceText.style.display = "none";
  }, 2000); // Esconder após 2 segundos
}
