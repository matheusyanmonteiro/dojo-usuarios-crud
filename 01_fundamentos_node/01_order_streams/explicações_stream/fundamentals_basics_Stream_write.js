import { Readable, Writable } from 'node:stream';

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

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    const number = Number(chunk.toString());
    const result = number * 10;
    console.log(result);
    callback();
  }
}

new OneToHundredStream().pipe(new MultiplyByTenStream());