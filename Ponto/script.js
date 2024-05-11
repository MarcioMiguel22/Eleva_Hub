document.addEventListener("DOMContentLoaded", function () {
  flatpickr(".flatpickr", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
  });
});

function adicionarLinha() {
  // Coleta os dados do formulário, sem "descrição" ou "Localização"
  var tempo = new Date().toLocaleTimeString(); // Pode usar a hora atual como tempo
  var entrada = document.getElementById("entrada").value;
  var saida = document.getElementById("saida").value;
  var operacao = document.getElementById("operacao-select").value;
  var instalacao = document.getElementById("instalacao").value;
  var rota = document.getElementById("rota-select").value;

  var novoHorario = { tempo, entrada, saida, operacao, instalacao, rota };

  // Recupera os horários existentes ou inicializa um novo array
  var horarios = JSON.parse(localStorage.getItem("horarios")) || [];
  horarios.push(novoHorario);

  // Atualiza o localStorage com o novo conjunto de horários
  localStorage.setItem("horarios", JSON.stringify(horarios));

  // Redireciona para a página de visualização da tabela
  window.location.href = "tabela.html";
}


function selecionarOperacao() {
  var operacao = document.getElementById("operacao-select").value;
  var caixaProgramavel = document.getElementById("caixa-programavel");

  // Mostra ou esconde a caixa programável dependendo da operação selecionada
  if (operacao === "inserirManualmente") {
    caixaProgramavel.style.display = "inline-block";
  } else {
    caixaProgramavel.style.display = "none";
  }
}
