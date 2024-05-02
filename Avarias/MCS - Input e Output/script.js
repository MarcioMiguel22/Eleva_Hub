function toggleSize(message) {
  var display = document.querySelector(".display");
  var existingMessage = display.querySelector(".message[data-content='" + message + "']");
  if (existingMessage) {
    display.removeChild(existingMessage);
  } else {
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("message");
    messageElement.setAttribute("data-content", message);
    display.appendChild(messageElement);
  }
}
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('clicked'); // Alternar entre adicionar e remover a classe "clicked"
  });
});
document.getElementById('searchBar').addEventListener('input', function() {
  var searchTerm = this.value.toLowerCase(); // Obtém o valor da barra de pesquisa em minúsculas

  // Percorre todos os botões
  document.querySelectorAll('.button').forEach(button => {
    var buttonText = button.querySelector('span').textContent.toLowerCase(); // Obtém o texto dentro do span em minúsculas

    // Verifica se o texto do botão contém o termo de pesquisa
    if (buttonText.includes(searchTerm)) {
      button.style.display = 'inline-block'; // Mostra o botão se corresponder ao termo de pesquisa
    } else {
      button.style.display = 'none'; // Esconde o botão se não corresponder ao termo de pesquisa
    }
  });
});
