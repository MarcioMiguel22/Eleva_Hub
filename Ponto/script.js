function adicionarLinha() {
  var tempo = ''; // Você precisa implementar a lógica para obter o tempo
  var entrada = document.getElementById("entrada").value;
  var saida = document.getElementById("saida").value;
  var operacao = document.getElementById("operacao-select").value;
  var instalacao = document.getElementById("instalacao").value;
  var rota = document.getElementById("rota-select").value;
  var descricao = document.getElementById("descricao").value;

  var table = document.querySelector(".schedule-table");
  var newRow = table.insertRow(-1);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);

  cell1.textContent = tempo;
  cell2.textContent = entrada;
  cell3.textContent = saida;
  cell4.textContent = ""; // Este campo será preenchido posteriormente
  cell5.textContent = operacao;
  cell6.textContent = instalacao;
  cell7.textContent = rota;
  cell8.textContent = descricao;

  // Limpeza dos campos do formulário
  document.getElementById("entrada").value = "";
  document.getElementById("saida").value = "";
  document.getElementById("operacao-select").value = "";
  document.getElementById("instalacao").value = "";
  document.getElementById("rota-select").value = "";
  document.getElementById("descricao").value = "";

  // Chamada para calcular e exibir o total de horas trabalhadas e as horas de deslocação
  calcularTotalHorasTrabalhadas();
}

function calcularTotalHorasTrabalhadas() {
  var table = document.querySelector(".schedule-table");
  var totalHorasTrabalhadas = 0;

  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];
    var totalCell = row.cells[3].textContent.split(":");
    var horas = parseInt(totalCell[0]);
    var minutos = parseInt(totalCell[1]) / 60;
    totalHorasTrabalhadas += horas + minutos;
  }

  var horasDeslocacao = 8 - totalHorasTrabalhadas;
  document.getElementById("horas-deslocacao").textContent = horasDeslocacao.toFixed(2);
  document.getElementById("horas-trabalhadas").textContent = (8 - horasDeslocacao).toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
  flatpickr(".flatpickr", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
  });
});

function obterLocalizacao() {
  // Verifica se o navegador suporta a API de Geolocalização
  if ("geolocation" in navigator) {
    // Obter a localização do usuário
    navigator.geolocation.getCurrentPosition(function(position) {
      // Obter as coordenadas de latitude e longitude
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      // Exibir as coordenadas na caixa de texto
      var inputLocal = document.getElementById("caixa-programavel");
      inputLocal.value = "Latitude " + latitude + ", Longitude " + longitude;
    }, function(error) {
      // Em caso de erro ao obter a localização
      console.error("Erro ao obter localização:", error);
      var divMensagem = document.getElementById("mensagem");
      divMensagem.textContent = "Erro ao obter localização: " + error.message;
    });
  } else {
    // Navegador não suporta a API de Geolocalização
    console.error("Geolocalização não suportada pelo navegador.");
    var divMensagem = document.getElementById("mensagem");
    divMensagem.textContent = "Geolocalização não suportada pelo navegador.";
  }
}

function selecionarOperacao() {
  var operacao = document.getElementById("operacao").value;
  var caixaProgramavel = document.getElementById("caixa-programavel");

  if (operacao === "obterLocalizacao") {
    caixaProgramavel.style.display = "none";
  } else if (operacao === "inserirManualmente") {
    caixaProgramavel.style.display = "inline-block";
  }
}
function redirecionarParaOutraPagina() {
  // Substitua "outra_pagina.html" pelo caminho da sua outra página
  window.location.href = "Planilha/planilha.html";
}
