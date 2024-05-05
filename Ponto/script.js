function calcularTotalHorasTrabalhadas() {
  var table = document.querySelector(".schedule-table");
  var totalHorasTrabalhadas = 0;
  var horasFixasTrabalho = 8; // Define o total de horas fixas para o trabalho

  // Itera sobre cada linha da tabela, começando da segunda linha (índice 1)
  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];
    // Obtém o valor da coluna "Total" na linha atual e converte em horas
    var totalCell = row.cells[3].textContent.split(":");
    var horas = parseInt(totalCell[0]);
    var minutos = parseInt(totalCell[1]) / 60;
    // Soma as horas e minutos ao total de horas trabalhadas
    totalHorasTrabalhadas += horas + minutos;
  }

  // Calcula as horas de deslocação subtraindo as horas trabalhadas do total de horas fixas para o trabalho
  var horasDeslocacao = horasFixasTrabalho - totalHorasTrabalhadas;

  // Exibe as horas de deslocação na tabela
  document.getElementById("horas-deslocacao").textContent = horasDeslocacao.toFixed(2);

  // Exibe o total de horas trabalhadas (incluindo soma de todos os totais de entrada e saída)
  document.getElementById("horas-trabalhadas").textContent = (horasFixasTrabalho - horasDeslocacao).toFixed(2);
}

function adicionarLinha() {
  // Obtém o valor do campo de tempo da manutenção
  var tempo = parseInt(document.getElementById("tempo").value);

  // Converte o tempo em minutos para horas e minutos
  var horasTrabalhadas = Math.floor(tempo / 60);
  var minutosTrabalhados = tempo % 60;

  // Obtém os valores de entrada e saída
  var entrada = document.getElementById("entrada").value;
  var saida = document.getElementById("saida").value;

  // Calcula horas trabalhadas
  var horaEntrada = new Date("2000-01-01T" + entrada + ":00");
  var horaSaida = new Date("2000-01-01T" + saida + ":00");
  var diferencaTempo = horaSaida.getTime() - horaEntrada.getTime();
  var horasTrabalhadasCalculadas = Math.floor(diferencaTempo / (1000 * 60 * 60));
  var minutosTrabalhadosCalculados = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));

  // Formata horas trabalhadas
  var totalHorasTrabalhadas = horasTrabalhadasCalculadas + ":" + minutosTrabalhadosCalculados;

  // Obtém os valores dos outros campos do formulário
  var op = document.getElementById("op").value;
  var instalacao = document.getElementById("instalacao").value;
  var rota = document.getElementById("rota").value;
  var descricao = document.getElementById("descricao").value;

  // Cria uma nova linha na tabela
  var table = document.querySelector(".schedule-table");
  var newRow = table.insertRow(-1); // -1 para inserir no final da tabela

  // Insere células na nova linha
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);

  // Preenche as células com os valores dos campos do formulário
  cell1.textContent = tempo;
  cell2.textContent = entrada;
  cell3.textContent = saida;
  cell4.textContent = totalHorasTrabalhadas;
  cell5.textContent = op;
  cell6.textContent = instalacao;
  cell7.textContent = rota;
  cell8.textContent = descricao;

  // Limpa os campos do formulário após adicionar a linha
  document.getElementById("tempo").value = "";
  document.getElementById("entrada").value = "";
  document.getElementById("saida").value = "";
  document.getElementById("op").value = "";
  document.getElementById("instalacao").value = "";
  document.getElementById("rota").value = "";
  document.getElementById("descricao").value = "";

  // Calcula e exibe o total de horas trabalhadas e as horas de deslocação
  calcularTotalHorasTrabalhadas();
}

document.addEventListener("DOMContentLoaded", function() {
  flatpickr(".flatpickr", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
  });
});
function gerarICS() {
  // Dados do evento (exemplo)
  var evento = {
      titulo: "Evento de Teste",
      descricao: "Descrição do evento de teste",
      dataInicio: "2024-05-07T10:00:00",
      dataFim: "2024-05-07T12:00:00",
      local: "Local do evento"
  };

  // Construir o conteúdo do arquivo .ics
  var conteudoICS = `BEGIN:VCALENDAR
PRODID:-//Planilha Otis//EN
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${evento.titulo}
DESCRIPTION:${evento.descricao}
LOCATION:${evento.local}
DTSTART:${evento.dataInicio}
DTEND:${evento.dataFim}
END:VEVENT
END:VCALENDAR`;

  // Criar um Blob com o conteúdo do arquivo .ics
  var blob = new Blob([conteudoICS], { type: 'text/calendar' });

  // Criar um link para download do arquivo .ics
  var linkDownload = document.createElement("a");
  linkDownload.href = window.URL.createObjectURL(blob);
  linkDownload.setAttribute("download", "evento.ics");

  // Adicionar o link ao documento e simular o clique para iniciar o download
  document.body.appendChild(linkDownload);
  linkDownload.click();

  // Remover o link após o download
  document.body.removeChild(linkDownload);
}
