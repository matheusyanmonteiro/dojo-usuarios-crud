# streams no node é o responsavel pela resolução dos problemas hoje em dia
node trouxe streams com tanta simplicidade e perfomance por isso usamos 

streams podem ser comparados a aplicativos de stream 


caso de teste
Importação de clientes via csv (execel)

arquivo de 1gb 

se não usar o conceito de stream  ele vai usar a rota normal 
ou seja o node vai ler totalmente o arquivo de 1 gb e depois vai fazer as gravações 
sem o conceito de streams vai demorar 100 segundos aproximadamente tornando não muito perfomatico

Streams no Node.js são uma forma eficiente de lidar com a leitura e a gravação de dados. Em vez de carregar tudo de uma vez na memória, as streams permitem processar dados em pedaços, o que é especialmente útil para trabalhar com arquivos grandes ou dados que chegam em tempo real, como dados de uma rede.

Conceitos Básicos:
O que são Streams?

Imagine que você está lendo um livro. Em vez de tentar ler todas as páginas de uma vez, você lê uma página de cada vez. Streams funcionam da mesma forma: em vez de carregar um arquivo inteiro, você lê ou escreve dados em pequenas partes (ou "chunks").
Tipos de Streams:

Readable Streams: Streams de leitura que permitem ler dados. Por exemplo, quando você lê um arquivo ou recebe dados de uma API.
Writable Streams: Streams de escrita que permitem gravar dados. Por exemplo, quando você escreve em um arquivo ou envia dados para um cliente.
Duplex Streams: Podem ler e escrever ao mesmo tempo. Um exemplo seria uma conexão de rede.
Transform Streams: Transformam dados enquanto estão sendo lidos ou escritos. Por exemplo, compactar dados enquanto são enviados.
Por que usar Streams?

Eficiência: Reduz o uso de memória, pois não é necessário carregar tudo de uma vez.
Desempenho: Permite que você comece a processar dados assim que eles estão disponíveis, em vez de esperar que tudo seja carregado.
Facilidade: Simplifica o trabalho com grandes quantidades de dados ou dados que vêm em tempo real.
Exemplo Simples:
Vamos supor que você queira ler um arquivo grande. Em vez de usar:

javascript
Copiar código
const fs = require('fs');

const data = fs.readFileSync('grande-arquivo.txt'); // Lê tudo de uma vez
console.log(data);
Você pode usar uma stream:

javascript
Copiar código
const fs = require('fs');

const readStream = fs.createReadStream('grande-arquivo.txt');

readStream.on('data', (chunk) => {
    console.log('Lendo um pedaço de dados:', chunk.toString());
});

readStream.on('end', () => {
    console.log('Leitura completa!');
});
Aqui, a leitura é feita em pedaços, e você pode processar cada pedaço assim que ele estiver disponível.

Resumo
Streams são uma maneira poderosa e eficiente de lidar com dados no Node.js. Elas permitem ler e escrever dados em partes, tornando seu código mais rápido e menos exigente em termos de memória. Se você trabalha com grandes arquivos ou dados em tempo real, streams são uma ferramenta essencial a se considerar!

req e response são streams do node 