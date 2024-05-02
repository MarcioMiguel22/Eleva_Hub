function adicionarLinha() {
  // Obter os valores dos campos do formulário
  var entrada = document.getElementById("entrada").value;
  var saida = document.getElementById("saida").value;
  var op = document.getElementById("op").value;
  var instalacao = document.getElementById("instalacao").value;
  var rota = document.getElementById("rota").value;
  var descricao = document.getElementById("descricao").value;

  // Converter os valores de entrada e saída para objetos de data do JavaScript
  var horaEntrada = new Date("2000-01-01T" + entrada + ":00");
  var horaSaida = new Date("2000-01-01T" + saida + ":00");

  // Calcular a diferença de tempo entre a entrada e a saída
  var diferencaTempo = horaSaida.getTime() - horaEntrada.getTime();

  // Calcular as horas e minutos da diferença de tempo
  var horasTrabalhadas = Math.floor(diferencaTempo / (1000 * 60 * 60));
  var minutosTrabalhados = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));

  // Formatar o total de horas trabalhadas
  var totalHoras = horasTrabalhadas + ":" + minutosTrabalhados;

  // Criar uma nova linha na tabela
  var table = document.querySelector("table");
  var newRow = table.insertRow(-1); // -1 para inserir no final da tabela

  // Inserir células na nova linha
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);

  // Preencher as células com os valores dos campos do formulário
  cell1.innerHTML = entrada;
  cell2.innerHTML = saida;
  cell3.innerHTML = op;
  cell4.innerHTML = instalacao;
  cell5.innerHTML = rota;
  cell6.innerHTML = descricao;
  cell7.innerHTML = totalHoras;

  // Limpar os campos do formulário após adicionar a linha
  document.getElementById("entrada").value = "";
  document.getElementById("saida").value = "";
  document.getElementById("op").value = "";
  document.getElementById("instalacao").value = "";
  document.getElementById("rota").value = "";
  document.getElementById("descricao").value = "";
}
