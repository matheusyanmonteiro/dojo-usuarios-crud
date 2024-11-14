import http from 'node:http'; // node pede para quando formos usar algo do proprio framwork do node usar antes node: para diferenciar de importações externas 
// substituto para o const http = require("http"); -> common js

const server = http.createServer((request, response) =>{
  const { method, url } = request // desestruturação do metodo request pegando method e url
  console.log(method, url)

  if (method === 'GET' && url === '/users'){
    return response.end('Listagem de usuários')
  } 

   
  if (method === 'POST' && url === '/users'){
    return response.end('Criação de usuários')
  }

  //  verificação dos verbos para a rapazeada entender a diferença 
  return response.end('Hello World')
}) // criando um servidor http request recebe as informações da requisição, response é a resposta do servidor

server.listen(3333)

//post com curl 
//curl -X POST http://localhost:3333/users

/**
 * Criar usuarios
 * Listagem de usuarios
 * edição de usuarios
 * remoção de usuarios 
 * 
 * 
 * HTTP 
 * metodo http
 * URL
 * 
 * VERBOS 
 * GET -> BUSCAR UMA INFORMAÇÃO DENTRO DO SERVIDOR
 * POST -> CRIAR UMA INFORMAÇÃO NO SERVIDOR
 * PUT -> ALTERAR UMA INFORMAÇÃO NO SERVIDOR
 * PATCH -> ALTERAR UMA INFORMAÇÃO ESPECIFICA
 * DELETE -> DELETAR UMA INFORMAÇÃO NO SERVIDOR
 * 
 */