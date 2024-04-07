// Array contendo as perguntas do questionário
const questions = [
  { pergunta: "Rua:", certificacao: "--", categoria: "edifício" },
  { pergunta: "Elevador:", certificacao: "--", categoria: "edifício" },
  { pergunta: "Instalação:", certificacao: "--", categoria: "edifício" },
  { pergunta: "Administração", certificacao: "--", categoria: "edifício" },
  {
    pergunta: "Qual o Modelo do Elevador ou Marca?",
    certificacao: "--",
    categoria: "edifício",
  },
  {
    pergunta:
      "Qual é a directiva 513/70 , 295/98 ,320/200 , 939/2008 ,176/2008",
    certificacao: "--",
    categoria: "edifício",
  },
  {
    pergunta: "Nome do técnico - Pré-inspeção?",
    certificacao: "--",
    categoria: "edifício",
  },
  {
    pergunta: "Machine Roomless Elevator – MRL?",
    certificacao: "--",
    categoria: "edifício",
  },
  {
    pergunta: "Acesso a casa das máquinas iluminado?",
    certificacao: "C3",
    categoria: "cliente",
  },
  {
    pergunta: "Etiqueta da casa das máquinas?",
    certificacao: "C3",
    categoria: "cliente",
  },
  {
    pergunta: "Quadro elétrico não metálico?",
    certificacao: "C3",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Os disjuntores estão identificados?",
    certificacao: "C3",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Diferencial principal dispara?",
    certificacao: "C2",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Diferencial principal – Amperes?",
    certificacao: "C2",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Diferencial de iluminação de luz de cabina dispara?",
    certificacao: "C2",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Diferencial de iluminação de luz de cabina é monofásico?",
    certificacao: "C2",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Diferencial de iluminação de luz de cabina - amperes?",
    certificacao: "C2",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Diferencial de Tomadas e casa da máquina dispara?",
    certificacao: "C2",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Diferencial de Tomadas e casa da máquina é monofásico?",
    certificacao: "C2",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Diferencial de tomadas e casa da máquina – ampere?",
    certificacao: "C2",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Sinalizador de fases?",
    certificacao: "C2",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta:
      "Na possibilidade de alterações ou implementações no quadro de entrada tem espaço?",
    certificacao: "--",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Iluminação de emergência da casa das Máquinas?",
    certificacao: "C2",
    categoria: "cliente",
    subcategoria: "cliente",
  },
  {
    pergunta: "Balaustradas da casa das máquinas ligadas a terra?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Quadro de comando é metálico?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Tem etiqueta de picagem MOB?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Tem chave de emergência?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Tem instruções para resgate?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Tem térmico de casa das máquinas?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Tem variador de frequência?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "A Máquina tem fugas de óleo?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Proteção de roda de tração?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Proteção de cabos?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Proteção de rodas de desvio?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Os buracos na Lage estão protegidos?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Retificação da roda de tração 2cm Max?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Sentido da rotação do motor?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Chave de travão?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Quadro de comando térmico?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Rele inversor de fases?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Fusíveis reforçados?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Comunicação com a cabina pelo telefone 220off?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  { pergunta: "BUP?", certificacao: "C2", categoria: "casa das máquinas" },
  {
    pergunta: "Fim de curso superior?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Policiar na roda superior?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Artigo 68?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Sistema de paraquedas descida?",
    certificacao: "C1",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Sistema de para subidas?",
    certificacao: "C1",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Contacto de grifes na cabina?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Fim de curso inferior?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  {
    pergunta: "Policiar na roda inferior?",
    certificacao: "C2",
    categoria: "casa das máquinas",
  },
  { pergunta: "Artigo 68?", certificacao: "C1" },
  {
    pergunta: "Sistema de paraquedas descida?",
    certificacao: "C2",
    categoria: "quadro eléctrico",
  },
  {
    pergunta: "Sistema de para subidas?",
    certificacao: "C2",
    categoria: "quadro eléctrico",
  },
  {
    pergunta: "Contacto de grifes na cabina?",
    certificacao: "C2",
    categoria: "quadro eléctrico",
  },
  {
    pergunta: "Fim de curso inferior?",
    certificacao: "C2",
    categoria: "quadro eléctrico",
  },
  {
    pergunta: "Policiar na roda inferior?",
    certificacao: "C2",
    categoria: "quadro eléctrico",
  },
  {
    pergunta: "Iluminação de emergência da cabina?",
    certificacao: "C2",
    categoria: "interior da cabina",
  },
  {
    pergunta: "Alarme de cabina 220off?",
    certificacao: "C2",
    categoria: "interior da cabina",
  },
  {
    pergunta: "Botões partidos?",
    certificacao: "C2",
    categoria: "interior da cabina",
  },
  {
    pergunta: "Display ok?",
    certificacao: "C2",
    categoria: "interior da cabina",
  },
  {
    pergunta: "Espalhos?",
    certificacao: "C2",
    categoria: "interior da cabina",
  },
  { pergunta: "Tapetes?", certificacao: "C2", categoria: "interior da cabina" },
  {
    pergunta: "Corrimões?",
    certificacao: "C2",
    categoria: "interior da cabina",
  },
  {
    pergunta: "Botão de abrir portas?",
    certificacao: "C2",
    categoria: "interior da cabina",
  },
  {
    pergunta: "Anti-entalamento?",
    certificacao: "C2",
    categoria: "interior da cabina",
  },
  {
    pergunta: "Saliências na parede no interior da caixa?",
    certificacao: "C2",
    categoria: "caixa do elevador",
  },
  {
    pergunta: "Revisão botões e stop?",
    certificacao: "C2",
    categoria: "caixa do elevador",
  },
  {
    pergunta: "Nylons superiores da cabina?",
    certificacao: "C2",
    categoria: "caixa do elevador",
  },
  {
    pergunta: "Cabos de aço?",
    certificacao: "C2",
    categoria: "caixa do elevador",
  },
  { pergunta: "Molas?", certificacao: "C2", categoria: "caixa do elevador" },
  { pergunta: "Tirantes?", certificacao: "C2", categoria: "caixa do elevador" },
  {
    pergunta: "Cerra cabos?",
    certificacao: "C2",
    categoria: "caixa do elevador",
  },
  {
    pergunta: "Lâmpadas na caixa?",
    certificacao: "C2",
    categoria: "caixa do elevador",
  },
  { pergunta: "6LS?", certificacao: "C2", categoria: "caixa do elevador" },
  { pergunta: "PORTAS?", certificacao: "C2", categoria: "caixa do elevador" },
  {
    pergunta: "Nylons de contrapeso?",
    certificacao: "C2",
    categoria: "caixa do elevador",
  },
  {
    pergunta: "Bloqueadores de pesos?",
    certificacao: "C2",
    categoria: "caixa do elevador",
  },
  {
    pergunta: "Pesos partidos?",
    certificacao: "C2",
    categoria: "caixa do elevador",
  },
  { pergunta: "5Ls?", certificacao: "C2", categoria: "caixa do elevador" },
  {
    pergunta: "Pessa cargas?",
    certificacao: "C2",
    categoria: "caixa do elevador",
  },
  { pergunta: "Stop do poço?", certificacao: "C2", categoria: "poço" },
  { pergunta: "Roda tensora?", certificacao: "C2", categoria: "poço" },
  { pergunta: "Macacos hidráulicos?", certificacao: "C2", categoria: "poço" },
];

// Variável para rastrear o índice da pergunta atual
let currentQuestion = 0;
// Objeto para armazenar as respostas do usuário
const answerData = {};
// Referência ao elemento HTML onde as perguntas serão exibidas
const questionElement = document.getElementById("question");
// Referência ao elemento HTML onde o usuário pode inserir suas respostas
const answerElement = document.getElementById("answer");
// Referência ao botão HTML usado para avançar para a próxima pergunta
const nextButton = document.getElementById("next-btn");
// Referência ao botão HTML usado para voltar para a pergunta anterior
const backButton = document.getElementById("back-btn");
// Referência ao elemento HTML onde as respostas serão exibidas após o questionário ser concluído
const answersContainer = document.getElementById("answers-container");
// Esconde o botão de download
document.getElementById("button_download").style.display = "none";
// Define uma função chamada showQuestion
function showQuestion() {
  questionElement.textContent = questions[currentQuestion].pergunta; // Acesso à propriedade 'pergunta'
}

// Esta função salva a resposta fornecida pelo usuário para a pergunta atual
function saveAnswer() {
  const answer = answerElement.value;
  answerData[currentQuestion] = answer;
}

// Esta função é chamada quando o usuário deseja retroceder para a pergunta anterior no questionário
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--; // Retrocede para a pergunta anterior
    showQuestion(); // Mostra a pergunta anterior
    answerElement.value = answerData[currentQuestion] || ""; // Preenche a resposta anterior, se existir
  }
}
// Esta função é chamada quando o usuário deseja avançar para a próxima pergunta no questionário
function nextQuestion() {
  // Verifica se a pergunta atual não é a última pergunta
  if (currentQuestion < questions.length - 1) {
    saveAnswer(); // Salva a resposta para a pergunta atual
    currentQuestion++; // Avança para a próxima pergunta incrementando o índice da pergunta atual
    showQuestion(); // Mostra a próxima pergunta na interface
    answerElement.value = ""; // Limpa a caixa de resposta para a próxima pergunta
  } else {
    saveAnswer(); // Salva a resposta para a última pergunta
    showAnswers(); // Exibe todas as respostas quando o questionário estiver concluído
  }
}

answerElement.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    // Verifica se a tecla pressionada é "Enter"
    event.preventDefault(); // Impede o comportamento padrão do "Enter" (submeter o formulário)
    // Adiciona um atraso antes de avançar para a próxima pergunta
    setTimeout(function () {
      nextQuestion(); // Avança para a próxima pergunta após 2 segundos (2000 milissegundos)
    }, 300);
  }
});

function showAnswers() {
  let naoAplicavelHTML = ""; // HTML para respostas "Não Aplicável"
  let simHTML = ""; // HTML para respostas "Sim"
  let naoHTML = ""; // HTML para respostas "Não"
  let naoRespondidoHTML = ""; // HTML para respostas não respondidas
  let outrasRespostasHTML = ""; // HTML para outras respostas

  // Loop através de todas as perguntas e respostas
  for (let i = 0; i < questions.length; i++) {
    // Verifica se há resposta para a pergunta
    if (answerData[i]) {
      // Verifica se a resposta é "Sim", "Não", "Não Aplicável" ou outras e adiciona à variável correspondente
      if (answerData[i] === "Não Aplicável") {
        // Se a resposta for "Não Aplicável", adiciona à variável naoAplicavelHTML com a formatação correta
        naoAplicavelHTML += `<p><strong>${questions[i].certificacao} ${questions[i].pergunta}</strong>: <span class="yellow-text">${answerData[i]}</span></p>`;
      } else if (answerData[i] === "Sim") {
        // Se a resposta for "Sim", adiciona à variável simHTML com a formatação correta
        simHTML += `<p><strong>${questions[i].certificacao} ${questions[i].pergunta}</strong>: <span class="green-text">${answerData[i]}</span></p>`;
      } else if (answerData[i] === "Não") {
        // Se a resposta for "Não", verifica se a certificação é C1, C2 ou C3 e atribui a classe de cor correspondente
        if (questions[i].certificacao === "C1") {
          naoHTML += `<p><strong><span class="c1-text">${questions[i].certificacao}</span> ${questions[i].pergunta}</strong>: <span class="c1-text">${answerData[i]}</span></p>`;
        } else if (questions[i].certificacao === "C2") {
          naoHTML += `<p><strong><span class="c2-text">${questions[i].certificacao}</span> ${questions[i].pergunta}</strong>: <span class="c2-text">${answerData[i]}</span></p>`;
        } else if (questions[i].certificacao === "C3") {
          naoHTML += `<p><strong><span class="c3-text">${questions[i].certificacao}</span> ${questions[i].pergunta}</strong>: <span class="c3-text">${answerData[i]}</span></p>`;
        } else {
          // Se não for C1, C2 ou C3, adiciona à variável outrasRespostasHTML com a formatação correta e verifica se a certificação é C1, C2 ou C3 e atribui a classe de cor correspondente
          outrasRespostasHTML += `<p><strong>${questions[i].certificacao} ${questions[i].pergunta}</strong>: <span>${answerData[i]}</span></p>`;
        }
      } else {
        // Se a resposta for outra coisa, verifica se a certificação é C1, C2 ou C3 e atribui a classe de cor correspondente
        if (questions[i].certificacao === "C1") {
          outrasRespostasHTML += `<p><strong><span class="c1-text">${questions[i].certificacao}</span> ${questions[i].pergunta}</strong>: <span class="c1-text">${answerData[i]}</span></p>`;
        } else if (questions[i].certificacao === "C2") {
          outrasRespostasHTML += `<p><strong><span class="c2-text">${questions[i].certificacao}</span> ${questions[i].pergunta}</strong>: <span class="c2-text">${answerData[i]}</span></p>`;
        } else if (questions[i].certificacao === "C3") {
          outrasRespostasHTML += `<p><strong><span class="c3-text">${questions[i].certificacao}</span> ${questions[i].pergunta}</strong>: <span class="c3-text">${answerData[i]}</span></p>`;
        } else {
          outrasRespostasHTML += `<p><strong>${questions[i].certificacao} ${questions[i].pergunta}</strong>: <span>${answerData[i]}</span></p>`;
        }
      }
    } else {
      // Se não houver resposta, adiciona "Ainda sem resposta" na seção correspondente e verifica se a certificação é C1, C2 ou C3 e atribui a classe de cor correspondente
      if (questions[i].certificacao === "C1") {
        naoRespondidoHTML += `<p><strong><span class="c1-text">${questions[i].certificacao}</span> ${questions[i].pergunta}</strong>: <span class="yellow-text">Ainda sem resposta</span></p>`;
      } else if (questions[i].certificacao === "C2") {
        naoRespondidoHTML += `<p><strong><span class="c2-text">${questions[i].certificacao}</span> ${questions[i].pergunta}</strong>: <span class="yellow-text">Ainda sem resposta</span></p>`;
      } else if (questions[i].certificacao === "C3") {
        naoRespondidoHTML += `<p><strong><span class="c3-text">${questions[i].certificacao}</span> ${questions[i].pergunta}</strong>: <span class="yellow-text">Ainda sem resposta</span></p>`;
      } else {
        naoRespondidoHTML += `<p><strong>${questions[i].certificacao} ${questions[i].pergunta}</strong>: <span class="yellow-text">Ainda sem resposta</span></p>`;
      }
    }
  }

  // Constrói o HTML final juntando todas as seções na ordem correta
  let answersHTML = `
  <h2>Respostas:</h2>
  ${outrasRespostasHTML}
  ${naoHTML}
  ${naoRespondidoHTML}

  `;

  // Define o HTML na seção de contêiner de respostas
  answersContainer.innerHTML = answersHTML;

  // Concatena todas as respostas em um texto completo
  let fullText = outrasRespostasHTML + naoHTML + naoRespondidoHTML;

  // Copiar texto para área de transferência
  navigator.clipboard
    .writeText(fullText)
    .then(() => {
      console.log("Texto copiado para a área de transferência com sucesso!");
    })
    .catch((error) => {
      console.error(
        "Erro ao copiar texto para a área de transferência:",
        error,
      );
    });

  // Exibe o botão de download
  document.getElementById("button_download").style.display = "block";

  // Esconde a caixa de texto de resposta e os botões
  answerElement.style.display = "none";
  questionElement.style.display = "none";
  backButton.style.display = "none";
  nextButton.style.display = "none";
  yesButton.style.display = "none";
  noButton.style.display = "none";
  noaptButton.style.display = "none";
  additionalButtonsContainer.style.display = "none";
}
// Adiciona um ouvinte de evento ao botão de avanço para chamar a função nextQuestion() quando o botão for clicado
nextButton.addEventListener("click", nextQuestion);
// Adiciona um ouvinte de evento ao botão de retrocesso para chamar a função previousQuestion() quando o botão for clicado
backButton.addEventListener("click", previousQuestion);

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--; // Retrocede para a pergunta anterior
    showQuestion(); // Mostra a pergunta anterior
    answerElement.value = answerData[currentQuestion] || ""; // Preenche a resposta anterior, se existir
  }
}

showQuestion();
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const noaptButton = document.getElementById("noapt-btn");

function saveYesNoAnswer(answer) {
  answerElement.value = answer; // Preencher a resposta na caixa de texto
  answerData[currentQuestion] = answer; // Salvar a resposta
  nextQuestion(); // Avançar para a próxima pergunta
}

function showAnswerText(text) {
  answerElement.value = text; // Define o texto na caixa de resposta
  answerElement.focus(); // Coloca o foco na caixa de resposta para que o texto seja visível imediatamente
  setTimeout(function () {
    answerElement.value = ""; // Limpa a caixa de resposta após um intervalo de tempo
  }, 300); // Intervalo de 300 milissegundos
}

yesButton.addEventListener("click", function () {
  showAnswerText("Sim");
  setTimeout(function () {
    saveYesNoAnswer("Sim"); // Avança para a próxima pergunta após 300 milissegundos
    const answerBox = document.getElementById("answer");
    answerBox.style.borderColor = "darkgreen"; // Muda a cor da borda para verde
    // Define um temporizador para remover a cor da borda depois de 300 milissegundos
    setTimeout(function () {
      answerBox.style.borderColor = "#ffffff"; // Cor da borda inicial
    }, 300);
  }, 300);
});

noButton.addEventListener("click", function () {
  showAnswerText("Não");
  setTimeout(function () {
    saveYesNoAnswer("Não"); // Avança para a próxima pergunta após 300 milissegundos
    const answerBox = document.getElementById("answer");
    answerBox.style.borderColor = "red"; // Muda a cor da borda para vermelho
    // Define um temporizador para remover a cor da borda depois de 300 milissegundos
    setTimeout(function () {
      answerBox.style.borderColor = "#ffffff"; // Cor da borda inicial
    }, 300);
  }, 300);
});

noaptButton.addEventListener("click", function () {
  showAnswerText("Não Aplicável");
  setTimeout(function () {
    saveYesNoAnswer("Não Aplicável"); // Avança para a próxima pergunta após 300 milissegundos
    const answerBox = document.getElementById("answer");
    answerBox.style.borderColor = "darkorange"; // Muda a cor da borda para laranja
    // Define um temporizador para remover a cor da borda depois de 300 milissegundos
    setTimeout(function () {
      answerBox.style.borderColor = "#ffffff"; // Cor da borda inicial
    }, 300);
  }, 300);
});

document
  .getElementById("button_download")
  .addEventListener("click", function () {
    // Obter a data atual
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("pt-BR"); // Formatar a data conforme necessário

    // Obter a primeira resposta (Rua) e a terceira resposta (Instalação)
    const firstAnswer = answerData[0] || "Ainda sem resposta";
    const secondAnswer = answerData[1] || "Ainda sem resposta";
    const thirdAnswer = answerData[2] || "Ainda sem resposta";
    const fourthAnswer = answerData[3] || "Ainda sem resposta";
    const fifthAnswer = answerData[4] || "Ainda sem resposta";
    const seventhAnswer = answerData[6] || "Ainda sem resposta";
    const eighthAnswer = answerData[7] || "Ainda sem resposta";
    const ninthAnswer = answerData[8] || "Ainda sem resposta";

    const initialText = `Projeto de Formulários - Relatório de Inspeção de Elevadores
Projeto criado por Márcio Miguel em 03/2004
-------------------------------------------------------------------------
Rua: ${firstAnswer}
Elevador: ${secondAnswer}
Instalação: ${thirdAnswer}
-------------------------------------------------------------------------
Data do Questionário: ${formattedDate}
-------------------------------------------------------------------------
Este questionário foi criado para coletar informações relacionadas à segurança do Elevador.
-------------------------------------------------------------------------
Nome do técnico Pré-inspeção: ${eighthAnswer}
-------------------------------------------------------------------------
Administração: ${fourthAnswer}
Qual o Modelo do Elevador ou Marca?: ${fifthAnswer}
Qual é a directiva 513/70, 295/98, 320/200, 939/2008, 176/2008?: ${seventhAnswer}
Tem casa das Máquinas?: ${eighthAnswer}
Machine Roomless Elevator – MRL?: ${ninthAnswer}`;

    // Adiciona outras perguntas obtidas

    // Converte os dados das respostas em texto separado por categoria
    let naoAplicavelText = "";
    let simText = "";
    let naoText = "";
    let naoRespondidoText = ""; // Novo texto para respostas não respondidas
    let outrosText = ""; // Texto para outras respostas

    // Loop através de todas as perguntas e respostas
    Object.keys(answerData).forEach((key) => {
      const question = questions[key];
      const answer = answerData[key];
      const categoria = question.categoria; // Adiciona a categoria da pergunta
      const certificacao = question.certificacao; // Adiciona a certificação da pergunta

      // Verifica se há resposta para a pergunta
      if (answer) {
        // Verifica se a resposta é "Sim", "Não", "Não Aplicável" ou outra e adiciona à variável correspondente
        if (categoria !== "edifício" && certificacao !== undefined) {
          if (answer === "Não Aplicável") {
            naoAplicavelText += `(${certificacao}) ${question.pergunta}: ${answer} ---- ${categoria}\n`;
          } else if (answer === "Sim") {
            simText += `(${certificacao}) ${question.pergunta}: ${answer} ---- ${categoria}\n`;
          } else if (answer === "Não") {
            naoText += `(${certificacao}) ${question.pergunta}: ${answer} ---- ${categoria}\n`;
          } else {
            outrosText += `(${certificacao}) ${question.pergunta}: ${answer} ---- ${categoria}\n`; // Adiciona outras respostas aqui
          }
        }
      } else {
        // Se não houver resposta, adiciona "Não Respondidas" na seção correspondente
        naoRespondidoText += `(${certificacao}) ${question.pergunta}: Não Respondidas ---- ${categoria}\n`;
      }
    });

    // Texto de orientação para revisão
    const promptText =
      "\n\nhttps://dre.tretas.org/dre/16638/decreto-513-70-de-30-de-outubro , \n";

    const fullText =
      initialText +
      "\n" +
      "-------------------------------------------------------------------------\n" +
      "Outras Respostas:\n" +
      "-------------------------------------------------------------------------\n" +
      outrosText +
      "\n" +
      "-------------------------------------------------------------------------\n" +
      "Respostas Não:\n" +
      "-------------------------------------------------------------------------\n" +
      naoText +
      "\n" +
      "-------------------------------------------------------------------------\n" +
      "Respostas Não Respondidas:\n" +
      "-------------------------------------------------------------------------\n" +
      naoRespondidoText +
      "\n" +
      "-------------------------------------------------------------------------\n" +
      "Respostas Sim:\n" +
      "-------------------------------------------------------------------------\n" +
      simText +
      "\n" +
      "-------------------------------------------------------------------------\n" +
      "Respostas Não Aplicáveis:\n" +
      "-------------------------------------------------------------------------\n" +
      naoAplicavelText +
      "\n" +
      promptText;

    // Cria um objeto Blob com os dados de texto
    const blob = new Blob([fullText], { type: "text/plain" });

    // Cria um objeto URL temporário para o Blob
    const url = window.URL.createObjectURL(blob);

    // Cria um elemento 'a' temporário para realizar o download do arquivo
    const link = document.createElement("a");
    const filename = `Formu_${thirdAnswer.toLowerCase().replace(/\s/g, "_")}_${firstAnswer.toLowerCase().replace(/\s/g, "_")}_${formattedDate.replace(/\//g, "_")}.txt`;
    link.href = url;
    link.download = filename;

    // Adiciona o elemento 'a' ao documento e simula um clique
    document.body.appendChild(link);
    link.click();

    // Remove o elemento 'a' do documento
    document.body.removeChild(link);

    // Revoga o objeto URL para liberar recursos
    window.URL.revokeObjectURL(url);

    // Perguntando ao usuário se deseja abrir a nova aba
    const userConfirmation = confirm(
      "O download já foi feito com sucesso. Deseja abrir uma nova aba com o conteúdo do relatório?",
    );

    // Verificando se o usuário confirmou a abertura da nova aba
    if (userConfirmation) {
      // Criando uma nova aba e exibindo o conteúdo do relatório
      const newTab = window.open("", "_blank");

      // Verificando se a nova aba foi criada com sucesso
      if (newTab) {
        // Verificando se o conteúdo está presente e não é vazio
        if (fullText.trim() !== "") {
          // Escrevendo o conteúdo na nova aba
          newTab.document.write("<pre>" + fullText + "</pre>");
        } else {
          // Se o conteúdo estiver vazio, exibir uma mensagem de erro na nova aba
          newTab.document.write("<h1>O conteúdo está vazio</h1>");
        }
      } else {
        // Se a nova aba não foi criada com sucesso, exibir uma mensagem de erro
        console.error("Não foi possível abrir uma nova aba.");
      }
    } else {
      // Se o usuário cancelar, exibir uma mensagem de cancelamento
      console.log("O usuário cancelou a abertura da nova aba.");
    }
  });
