import http from 'node:http'

const server = http.createServer((request, response) =>{
  const { method, url } = request 
  console.log(method, url)

  if (method === 'GET' && url === '/users'){
    return response.end('Listagem de usuários')
  } 

   
  if (method === 'POST' && url === '/users'){
    return response.end('Criação de usuários')
  }

 
  return response.end('Hello World')
}) 

server.listen(3333)
