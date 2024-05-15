document.addEventListener("DOMContentLoaded", function () {
  var horarios = JSON.parse(localStorage.getItem("horarios")) || [];
  var tableBody = document.getElementById("table-body");
  var isEditing = false;

  var tempos = {};

  // Função para ordenar por data e depois por hora de entrada
  horarios.sort(function(a, b) {
    var dateA = new Date(a.data + 'T' + a.entrada);
    var dateB = new Date(a.data + 'T' + b.entrada);
    return dateA - dateB;
  });

  var dailyTotals = {};
  var weeklyTotals = {};
  var overallTotalAcumulado = 0;

  // Função para obter o número da semana de uma data
  function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
  }

  // Processa cada entrada de horário
  horarios.forEach(function (horario, index) {
    var entrada = new Date(horario.data + 'T' + horario.entrada);
    var saida = new Date(horario.data + 'T' + horario.saida);
    var diferencaMinutos = (saida - entrada) / 60000; // Calcula a diferença em minutos
    overallTotalAcumulado += diferencaMinutos; // Adiciona ao total geral

    var weekNumber = getWeekNumber(new Date(horario.data));

    // Rastreamento dos totais diários e semanais, além dos tempos de operação individuais
    if (!dailyTotals[horario.data]) {
      dailyTotals[horario.data] = {
        total: 0,
        deslocacao: 0,
        entries: []
      };
    }
    dailyTotals[horario.data].total += diferencaMinutos; // Adiciona ao total diário
    dailyTotals[horario.data].entries.push(horario);

    if (!weeklyTotals[weekNumber]) {
      weeklyTotals[weekNumber] = {
        total: 0,
        days: new Set()
      };
    }
    weeklyTotals[weekNumber].total += diferencaMinutos; // Adiciona ao total semanal
    weeklyTotals[weekNumber].days.add(horario.data);

    if (!tempos[horario.data]) {
      tempos[horario.data] = {};
    }
    if (!tempos[horario.data][horario.operacao]) {
      tempos[horario.data][horario.operacao] = 0;
    }
    tempos[horario.data][horario.operacao] += diferencaMinutos; // Rastreamento do tempo de operação
  });

  // Função para converter minutos em horas e minutos
  function convertToHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    return `${hours}h ${minutes}m`;
  }

  // Exibe entradas e total acumulado para cada dia
  for (var data in dailyTotals) {
    dailyTotals[data].entries.forEach(function (horario, index) {
      var entrada = new Date(horario.data + 'T' + horario.entrada);
      var saida = new Date(horario.data + 'T' + horario.saida);
      var diferencaMinutos = (saida - entrada) / 60000;

      var newRow = tableBody.insertRow();
      newRow.innerHTML = `
        <td data-key="registo" data-index="${index}">${horario.registo}</td>
        <td data-key="data" data-index="${index}">${horario.data}</td>
        <td data-key="entrada" data-index="${index}">${horario.entrada}</td>
        <td data-key="saida" data-index="${index}">${horario.saida}</td>
        <td>${diferencaMinutos.toFixed(2)} min</td>
        <td data-key="operacao" data-index="${index}">${horario.operacao}</td>
        <td data-key="instalacao" data-index="${index}">${horario.instalacao}</td>
        <td data-key="rota" data-index="${index}">${horario.rota}</td>
      `;
    });

    // Calcula e exibe deslocação para o dia
    var dailyTotalMinutes = dailyTotals[data].total;
    var deslocacaoMinutos = Math.max(0, 480 - dailyTotalMinutes); // 480 minutos = 8 horas
    if (deslocacaoMinutos > 0) {
      var deslocacaoHoras = convertToHoursAndMinutes(deslocacaoMinutos);
      if (!tempos[data]) {
        tempos[data] = {};
      }
      if (!tempos[data]["Deslocação"]) {
        tempos[data]["Deslocação"] = 0;
      }
      tempos[data]["Deslocação"] += deslocacaoMinutos;
    }

    // Exibe total acumulado para o dia
    var totalHoursAndMinutes = convertToHoursAndMinutes(dailyTotalMinutes);
    var rowTotal = tableBody.insertRow();
    rowTotal.innerHTML = `<td colspan="2">Total Acumulado - ${data}</td><td colspan="6">${dailyTotalMinutes.toFixed(2)} min (${totalHoursAndMinutes})</td>`;
  }

  var operationsContainer = document.getElementById("operations-container");
  operationsContainer.innerHTML = '<h2>Tempos por Operação</h2>';

  var operationsTable = document.createElement("table");
  operationsTable.className = "operations-table";
  operationsTable.innerHTML = '<tr><th>Operação</th><th>Data</th><th>Tempo Total (min e h)</th></tr>';

  for (var date in tempos) {
    var dailyOperationTotal = 0;
    var weekNumber = getWeekNumber(new Date(date));
    for (var operation in tempos[date]) {
      var totalHoras = convertToHoursAndMinutes(tempos[date][operation]);
      var operationRow = operationsTable.insertRow();
      operationRow.innerHTML = `<td>${operation}</td><td>${date}</td><td>${tempos[date][operation].toFixed(2)} min (${totalHoras})</td>`;
      dailyOperationTotal += tempos[date][operation];
    }

    // Exibe deslocação calculada para o dia, se aplicável
    var deslocacaoMinutos = Math.max(0, 480 - dailyOperationTotal); // 480 minutos = 8 horas
    if (deslocacaoMinutos > 0) {
      var deslocacaoHoras = convertToHoursAndMinutes(deslocacaoMinutos);
      var deslocacaoRow = operationsTable.insertRow();
      var deslocacaoClass = deslocacaoMinutos > 70 ? 'red-text' : '';
      console.log(`Deslocação para ${date}: ${deslocacaoMinutos.toFixed(2)} min (${deslocacaoHoras}) - Classe: ${deslocacaoClass}`);
      deslocacaoRow.innerHTML = `
        <td class="${deslocacaoClass}">Deslocação</td>
        <td class="${deslocacaoClass}">${date}</td>
        <td class="${deslocacaoClass}">${deslocacaoMinutos.toFixed(2)} min (${deslocacaoHoras})</td>
      `;
    }

    // Exibe total acumulado para as operações do dia
    var dailyTotalHoras = convertToHoursAndMinutes(dailyOperationTotal);
    var dailyTotalRow = operationsTable.insertRow();
    dailyTotalRow.innerHTML = `<td colspan="2"><strong>Total Acumulado - ${date}</strong></td><td><strong>${dailyOperationTotal.toFixed(2)} min (${dailyTotalHoras})</strong></td>`;

    // Verifica se é o último dia da semana para exibir o total acumulado da semana
    if (weeklyTotals[weekNumber].days.size > 0 && [...weeklyTotals[weekNumber].days].includes(date)) {
      weeklyTotals[weekNumber].days.delete(date);
      if (weeklyTotals[weekNumber].days.size === 0) {
        var totalHoursAndMinutes = convertToHoursAndMinutes(weeklyTotals[weekNumber].total);
        var weekTotalRow = operationsTable.insertRow();
        weekTotalRow.innerHTML = `<td colspan="2"><strong>Total Acumulado da semana ${weekNumber}</strong></td><td><strong>${weeklyTotals[weekNumber].total.toFixed(2)} min (${totalHoursAndMinutes})</strong></td>`;
      }
    }

    // Adiciona uma linha em branco para espaçamento entre os dias diferentes
    var nextDateIndex = Object.keys(tempos).indexOf(date) + 1;
    if (nextDateIndex < Object.keys(tempos).length) {
      var nextDate = Object.keys(tempos)[nextDateIndex];
      if (getWeekNumber(new Date(nextDate)) !== weekNumber || nextDate !== date) {
        var blankRow = operationsTable.insertRow();
        blankRow.innerHTML = `<td colspan="3" style="height: 10px;"></td>`;
      }
    }
  }

  operationsContainer.appendChild(operationsTable);

  document.getElementById("resetBtn").addEventListener("click", resetTable);
  document.getElementById("downloadBtn").addEventListener("click", downloadTable);
  document.getElementById("editBtn").addEventListener("click", toggleEditMode);

  function toggleEditMode() {
    isEditing = !isEditing;
    document.getElementById("editBtn").textContent = isEditing ? "Salvar" : "Editar";
    document.querySelectorAll("[data-key]").forEach(function (cell) {
      if (isEditing) {
        cell.setAttribute("contenteditable", "true");
        cell.classList.add("editable");
      } else {
        cell.removeAttribute("contenteditable");
        cell.classList.remove("editable");
        var key = cell.getAttribute("data-key");
        var index = cell.getAttribute("data-index");
        horarios[index][key] = cell.textContent.trim();
      }
    });
    if (!isEditing) {
      localStorage.setItem("horarios", JSON.stringify(horarios));
      alert("Alterações salvas com sucesso!");
    }
  }

  function resetTable() {
    localStorage.removeItem("horarios");
    location.reload();
  }

  function downloadTable() {
    html2canvas(document.querySelector(".schedule-table"), {
      scale: 0.90
    }).then(canvas => {
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

      pdf.setFontSize(14);
      pdf.text(title, pdf.internal.pageSize.getWidth() / 2, 30, { align: 'center' });
      pdf.text(`Data da Tabela: ${formattedDate}`, pdf.internal.pageSize.getWidth() / 2, 50, { align: 'center' });

      let imageHeight = canvas.height * 0.91;
      let imageWidth = canvas.width * 0.91;
      let startY = 81;

      pdf.addImage(mainTableImg, 'PNG', 20, startY, imageWidth, imageHeight);

      html2canvas(document.querySelector(".operations-table"), {
        scale: 0.85
      }).then(operationsCanvas => {
        const operationsTableImg = operationsCanvas.toDataURL('image/png');
        let operationsImageHeight = operationsCanvas.height * 1;
        let operationsImageWidth = operationsCanvas.width * 1;
        let operationsStartY = startY + imageHeight + 20;

        pdf.addImage(operationsTableImg, 'PNG', 20, operationsStartY, operationsImageWidth, operationsImageHeight);

        const dynamicFileName = `Ponto_${formattedDate.replace(/\//g, '-')}.pdf`;

        pdf.save(dynamicFileName);
      });
    });
  }
});
