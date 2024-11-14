import http from 'node:http';
import { json } from './middlewares/json.js';
//dados em memoria 
const users = [];

// fragmentando o src/server.js para organizarmos o codigo e entender como o paradigma funcional se aplica.

const server = http.createServer(async(request, response) =>{
  const { method, url }  = request

  await json(request, response)

  if ( method === 'GET' && url === '/users'){
    return response
          .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users'){
    const {name, email} = request.body;

      users.push({
        id: 1,
        name,
        email,
      })

      return response.writeHead(201).end()
  }
  
  return response.writeHead(404).end()
}) 

server.listen(3333)
