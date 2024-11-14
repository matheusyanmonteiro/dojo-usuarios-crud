import http from "node:http";
import { Transform } from "node:stream";

class NegativeNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const number = Number(chunk.toString());
    const resultTransform = number * -1;
    //this.push(resultTransform.toString());

    //console.log(resultTransform); // para fim didaticamente vamos logar o resultado da transformação
    callback(null, Buffer.from(String(resultTransform)));
  }
}

const server = http.createServer((request, response) => {
  
  return request
    .pipe(new NegativeNumberStream())
    .pipe(response);
})


server.listen(3334);