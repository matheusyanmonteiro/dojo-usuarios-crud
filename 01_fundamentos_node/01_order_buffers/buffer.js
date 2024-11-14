// representação do espaço da memoria do computador
// typedarray -> lib que pode ser trabalhada com dados na memoria do pc 

const buf = Buffer.from('hello world', 'utf-8');

console.log(buf); // exadecimal
console.log(buf.toJSON()); // decimal 

// <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>  exadecimal de cada letra da string