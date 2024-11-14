import { Readable } from 'node:stream';
// fetch api node 18> 
// explicação de como isso se mescla com o servidor que foi criado simulando um caso real onde a função de upload de arquivos é feita
class OneToHundredStreamWithTimeout extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
      const buf = Buffer.from(String(i))
  
      this.push(buf);
      }
    }, 100)
  }
}

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStreamWithTimeout(),
  duplex: 'half'
})