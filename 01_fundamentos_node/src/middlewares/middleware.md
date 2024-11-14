Middleware em JavaScript, especialmente em frameworks como Express.js, é um termo usado para descrever funções que têm acesso ao objeto de requisição (request), ao objeto de resposta (response) e à próxima função de middleware na cadeia de execução.

Conceito Simplificado:
O que é Middleware?

Middleware é uma função que atua como um intermediário em uma aplicação web. Ele pode processar requisições, modificar dados, ou realizar ações antes que a requisição chegue ao manipulador final (ou "handler").
Como Funciona?

Quando uma requisição chega ao servidor, ela passa por uma série de funções de middleware, uma após a outra. Cada uma pode fazer algo e decidir se deve passar a requisição para a próxima função.
Usos Comuns:

Autenticação: Verificar se o usuário está logado.
Log: Registrar informações sobre a requisição.
Tratamento de Erros: Capturar e lidar com erros de forma centralizada.
Modificação de Requisições ou Respostas: Adicionar informações ou modificar dados antes que sejam processados.
Exemplo Simples:
Aqui está um exemplo básico de middleware em Express.js:

javascript
Copiar código
const express = require('express');
const app = express();

// Middleware que loga as requisições
app.use((req, res, next) => {
  console.log(`Recebida uma requisição para: ${req.url}`);
  next(); // Passa para o próximo middleware
});

// Rota principal
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
Resumo:
Middleware é uma função intermediária em uma aplicação web que pode processar ou modificar requisições e respostas.
Permite adicionar funcionalidades como autenticação, logging e tratamento de erros de forma modular.
Ajuda a manter o código organizado e facilita a manutenção e a escalabilidade da aplicação.