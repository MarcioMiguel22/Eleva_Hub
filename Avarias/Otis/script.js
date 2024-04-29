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
