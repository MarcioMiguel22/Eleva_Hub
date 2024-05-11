document.addEventListener("DOMContentLoaded", function () {
  var horarios = JSON.parse(localStorage.getItem("horarios")) || [];
  var totalAcumulado = 0;
  var tableBody = document.getElementById("table-body");

  // Contadores para diferentes tipos de operações
  var tempos = {
    "Manutenção": 0,
    "Avarias": 0,
    "Afinação": 0,
    "Reparação": 0,
    "Improdutivo": 0,
    "Pessoas Presas": 0
  };

  // Processa cada horário e acumula os tempos
  horarios.forEach(function (horario) {
    var entrada = new Date("2024-05-11T" + horario.entrada);
    var saida = new Date("2024-05-11T" + horario.saida);
    var diferencaMinutos = (saida - entrada) / 60000; // Convertendo milissegundos para minutos
    totalAcumulado += diferencaMinutos;
    tempos[horario.operacao] += diferencaMinutos;

    var newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${horario.tempo}</td>
      <td>${horario.entrada}</td>
      <td>${horario.saida}</td>
      <td>${diferencaMinutos.toFixed(2)} min</td>
      <td>${horario.operacao}</td>
      <td>${horario.instalacao}</td>
      <td>${horario.rota}</td>
      <td class="descricao-cell" title="${horario.descricao}">${horario.descricao}</td>
    `;
  });

  // Função para converter minutos em horas e minutos
  function convertToHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    return `${hours}h ${minutes}m`;
  }

  // Adicionar a linha de total acumulado ao HTML
  var totalHoursAndMinutes = convertToHoursAndMinutes(totalAcumulado);
  var rowTotal = tableBody.insertRow();
  rowTotal.innerHTML = `<td colspan="3">Total Acumulado</td><td colspan="5">${totalAcumulado.toFixed(2)} min (${totalHoursAndMinutes})</td>`;

  // Cria a tabela de tempos por operação
  var operationsContainer = document.createElement("div");
  operationsContainer.className = "operations-container";
  operationsContainer.innerHTML = '<h2>Tempos por Operação</h2>';

  var operationsTable = document.createElement("table");
  operationsTable.className = "operations-table";
  operationsTable.innerHTML = '<tr><th>Operação</th><th>Tempo Total (min e h)</th></tr>';

  Object.keys(tempos).forEach(function (key) {
    if (tempos[key] > 0) {
      var totalHoras = convertToHoursAndMinutes(tempos[key]);
      var operationRow = operationsTable.insertRow();
      operationRow.innerHTML = `<td>${key}</td><td>${tempos[key].toFixed(2)} min (${totalHoras})</td>`;
    }
  });

  operationsContainer.appendChild(operationsTable);
  document.body.appendChild(operationsContainer);

  // Event listeners para os botões
  document.getElementById("resetBtn").addEventListener("click", resetTable);
  document.getElementById("downloadBtn").addEventListener("click", downloadTable);
});

function resetTable() {
  localStorage.removeItem("horarios");
  location.reload();
}

// Função para fazer download da tabela em PDF

function downloadTable() {
  // Primeiro capturamos a tabela principal
  html2canvas(document.querySelector(".schedule-table")).then(canvas => {
    const mainTableImg = canvas.toDataURL('image/png');
    const pdf = new jspdf.jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: 'a4'
    });

    const title = "Horário de Trabalho";
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    pdf.setFontSize(18);
    pdf.text(title, pdf.internal.pageSize.getWidth() / 2, 40, { align: 'center' });
    pdf.setFontSize(12);
    pdf.text(`Data da Tabela: ${formattedDate}`, pdf.internal.pageSize.getWidth() / 2, 60, { align: 'center' });

    addImageToPDF(pdf, mainTableImg, 80, function(newPosition) {
      // Captura a segunda tabela de operações
      html2canvas(document.querySelector(".operations-table")).then(operationsCanvas => {
        const operationsTableImg = operationsCanvas.toDataURL('image/png');
        // Adiciona a segunda tabela ao PDF
        addImageToPDF(pdf, operationsTableImg, newPosition, function() {
          pdf.save("planilha_horarios.pdf");
        });
      });
    });
  });
}

function addImageToPDF(pdf, imageData, startPosition, callback) {
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const imgProps = pdf.getImageProperties(imageData);
  const imgWidth = pdfWidth - 40; // Margens de 20pt de cada lado
  const imgHeight = imgProps.height * imgWidth / imgProps.width;
  let position = startPosition;
  let heightLeft = imgHeight;

  while (heightLeft > 0) {
    pdf.addImage(imageData, 'PNG', 20, position, imgWidth, imgHeight);
    heightLeft -= (pdfHeight - position);
    if (heightLeft > 0) {
      pdf.addPage();
      position = 20; // Reinicia no topo da nova página
    } else {
      position += imgHeight; // Atualiza a posição para a próxima imagem
    }
  }
  callback(position);
}
