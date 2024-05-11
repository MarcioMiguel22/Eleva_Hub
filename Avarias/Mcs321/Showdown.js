// Texto em Markdown
const markdownText = `
# Service Tool



<pre>
Programaçao/
├── RCB II/
│   └──OCSS 1
|           └──Setup 3
|                    └──Install 1
|                               └── Seguranças 6
|                                               └──EPO Rescue Pos
|                                               Programação 06 ablitado
|                                               Programaçao 255 para desablitar
|   ├──MCSS 2
|           └──

</pre>
`;

// Criando um objeto Showdown Converter
const converter = new showdown.Converter();

// Convertendo Markdown em HTML
const html = converter.makeHtml(markdownText);

// Inserindo o HTML gerado em um elemento na página
document.getElementById('markdown-content').innerHTML = html;
