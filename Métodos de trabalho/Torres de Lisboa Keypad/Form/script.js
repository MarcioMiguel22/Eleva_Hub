function gerarIP() {
  var andar = parseInt(document.getElementById("andarInput").value);
  var tipoKeypad = document.querySelector('input[name="keypad"]:checked').value;

  var pisos = {
    "-4": { "A/B": "192.168.01.01", "C/D": "192.168.01.02" },
    "-3": { "A/B": "192.168.01.03", "C/D": "192.168.01.04" },
    "-2": { "A/B": "192.168.01.05", "C/D": "192.168.01.06" },
    "-1": { "A/B": "192.168.01.07", "C/D": "192.168.01.08" },
    "0": {
      "A/B": "192.168.01.09",
      "C/D": "192.168.01.10",
      "Extra": "192.168.01.11"
    },
    "1": { "A/B": "192.168.01.12", "C/D": "192.168.01.13" },
    "2": { "A/B": "192.168.01.14", "C/D": "192.168.01.15" },
    "3": { "A/B": "192.168.01.16", "C/D": "192.168.01.17" },
    "4": { "A/B": "192.168.01.18", "C/D": "192.168.01.19" },
    "5": { "A/B": "192.168.01.20", "C/D": "192.168.01.21" },
    "6": { "A/B": "192.168.01.22", "C/D": "192.168.01.23" },
    "7": { "A/B": "192.168.01.24", "C/D": "192.168.01.25" },
    "8": { "A/B": "192.168.01.26", "C/D": "192.168.01.27" },
    "9": { "A/B": "192.168.01.28", "C/D": "192.168.01.29" },
    "10": { "A/B": "192.168.01.30", "C/D": "192.168.01.31" },
    "11": { "A/B": "192.168.01.32", "C/D": "192.168.01.33" },
    "12": { "A/B": "192.168.01.34", "C/D": "192.168.01.35" },
    "13": { "A/B": "192.168.01.36", "C/D": "192.168.01.37" },
    "14": { "A/B": "192.168.01.38", "C/D": "192.168.01.39" },
    "15": { "A/B": "192.168.01.40", "C/D": "192.168.01.41" }
  };

  var ip;
  var respostaDiv = document.getElementById("resposta"); // Inicializa respostaDiv
  if (andar >= -4 && andar <= 15) {
    if (andar === 0 && tipoKeypad === "Entrada") {
      ip = pisos["0"]["Extra"];
    } else {
      ip = pisos[andar.toString()][tipoKeypad];
    }
    if (ip) {
      respostaDiv.innerHTML = "O IP do keypad para o andar " + andar + " é: " + ip;
    } else {
      respostaDiv.innerHTML = "Tipo de keypad inválido para o andar " + andar + ".Só funciona no andar 0";
    }
  } else {
    respostaDiv.innerHTML = "Andar inválido.";
  }
}
