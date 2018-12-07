const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log(`====================`)
    console.log(`tabla del ${base}`.inverse)
    console.log(`====================`)
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`)
    }
}

let newFile = (base, limite = 10) => {
    console.log(`${base}`.white, `${limite}`.rainbow)
    return new Promise(
        (resolve, reject) => {
            if (!Number(base)) {
                reject(`El número introducido ${base} no es un número`);
                return
            }
            let data = '';
            for (let i = 1; i <= limite; i++) {
                data += `${base} x ${i} = ${base * i}\n`;
            }

            // const data = new Uint8Array(Buffer.from('Hello Node.js'));
            fs.writeFile(`./01-console-multiplicar-app/files/tabla-${base}.txt`, data, (err) => {
                if (err) reject(err)
                else resolve(`tabla-${base}.txt`.rainbow)
            });
        }
    )
}

module.exports = {
    newFile,
    listarTabla
}
// module.exports.newFile