function toggleSize(button) {
  // Verifica se o botão clicado tem o texto "Es" ou "dfc"
  if (button.textContent.trim() === "Es" || button.textContent.trim() === "dfc") {
    // Verifica se a mensagem correspondente já está sendo exibida
    var message = document.querySelector(".service-message-" + button.textContent.trim());
    if (!message) {
      // Cria um elemento de parágrafo para exibir a mensagem
      message = document.createElement("p");
      message.textContent = button.textContent.trim() + " - Seguranças ativadas";
      // Adiciona uma classe específica para identificar a mensagem
      message.classList.add("service-message-" + button.textContent.trim());
      // Selecione o elemento onde a mensagem deve ser exibida
      var serviceTool = document.querySelector(".service-tool");
      // Insere a mensagem abaixo do elemento .service-tool
      serviceTool.parentNode.insertBefore(message, serviceTool.nextSibling);
    } else {
      // Remove a mensagem se já estiver sendo exibida
      message.parentNode.removeChild(message);
    }
  }
}
