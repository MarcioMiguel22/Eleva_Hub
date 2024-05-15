document.addEventListener("DOMContentLoaded", function () {
  flatpickr(".flatpickr", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
  });
});

function adicionarLinha() {
  var dataAtual = new Date();
  var registoData = dataAtual.toLocaleDateString('pt-BR');
  var registoHora = dataAtual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  var registo = `${registoData} ${registoHora}`;

  var data = document.getElementById("data").value;
  var entrada = document.getElementById("entrada").value;
  var saida = document.getElementById("saida").value;
  var operacao = document.getElementById("operacao-select").value;
  var instalacao = document.getElementById("instalacao").value;
  var rota = document.getElementById("rota-select").value;

  var errorMessage = document.getElementById("error-message");

  if (!data || !entrada || !saida) {
    errorMessage.textContent = "Por favor, preencha todos os campos.";
    errorMessage.style.color = "red";
    return;
  }

  var novoHorario = { registo, data, entrada, saida, operacao, instalacao, rota };

  var horarios = JSON.parse(localStorage.getItem("horarios")) || [];
  horarios.push(novoHorario);

  localStorage.setItem("horarios", JSON.stringify(horarios));

  window.location.href = "tabela.html";
}
