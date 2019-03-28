console.time('Program runtime');

const fs = require('fs');

const buf = fs.readFileSync('test-data');

console.time('Data manipulation');
for (let i = 0; i < buf.length; i++) {
    buf[i] *= 2;
}
console.timeEnd('Data manipulation');

fs.writeFileSync('test-data-modified', buf);

console.timeEnd('Program runtime');
