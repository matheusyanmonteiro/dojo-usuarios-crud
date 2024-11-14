import http from "node:http";

const server = http.createServer(async (request, response) => {
  const buffers = []

  for await (const chunk of request) {
    buffers.push(chunk)
  }
  // enquanto não foi percorrido todo o stream ele não vai rodar o codigo abaixo 

  // consulm um json aos poucos então melhor ele rodar os dados por completo para depois consulm  stream de consulmo parcial sempre com estruturas que permite isso capiche?

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)
  return response.end()

})


server.listen(3334);

// resultado final ele aguardou os 5 milisegundos para rodar 
