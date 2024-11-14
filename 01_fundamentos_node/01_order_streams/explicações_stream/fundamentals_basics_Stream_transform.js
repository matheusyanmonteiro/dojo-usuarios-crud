import { Readable, Writable, Transform } from 'node:stream';

class OneToHundredStream extends Readable {
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
    }, 1000)
  }
}
class NegativeNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const number = Number(chunk.toString());
    const resultTransform = number * -1;
    //this.push(resultTransform.toString());
    callback(null, Buffer.from(String(resultTransform)));
  }
}
class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    const number = Number(chunk.toString());
    const result = number * 10;
    console.log(result);
    callback();
  }
}

new OneToHundredStream()
  .pipe(new NegativeNumberStream())
  .pipe(new MultiplyByTenStream());


  // por fim existe a stream duplex mas não foi abordado aqui por que ela é uma mistura de readable e writable mas não necessariamente faz transformações capiche?
  