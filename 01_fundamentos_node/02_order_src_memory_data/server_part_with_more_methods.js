import http from 'node:http';

const users = [];


const server = http.createServer(async(request, response) =>{
  const { method, url }  = request
// -------------------------------------------------------------------------
  // usando conceito de stream para fazer a inscrição de usuarios

  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk)
  }

  // usando JSON.parse para transformar o buffer em um objeto
  //const body = JSON.parse(Buffer.concat(buffers).toString()); // deste jeito a gente tenta fazer tudo virar json ate mesmo quando o corpo da requisição naõ existe 
  try {
     request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch{
    request.body = null;
  } // bloco try catch para tratar erro caso a requisição não tenha corpo, geralmente estamos acostumados a usar ele para capturar erros porem podemos fazer ele rodar um fluxo diferente no catch outro caminho, uma maneira mais elegante de só usar if

  console.log(request.body)
 // -------------------------------------------------------------------------
  if ( method === 'GET' && url === '/users'){
    return response
          .setHeader('Content-Type', 'application/json')
          .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users'){
    // aqui dentro podemos fazer uma desestruturação do body para pegar os dados do usuario
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


// run npm run dev