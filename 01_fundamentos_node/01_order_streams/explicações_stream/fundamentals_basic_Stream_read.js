import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    if (i > 100) {
      this.push(null);
    } else {
    const buf = Buffer.from(String(i))

    this.push(buf);
    }
  }
}

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

// a string pode trabalhar com dados antes de serem enviados para o terminal ou seja podemos trabalhar com dados antes de estar completos


new OneToHundredStreamWithTimeout().pipe(process.stdout);