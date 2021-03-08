const fs = require('fs');
const {logica} = require('./logica')

const multiplicar = (base) => {
    console.log(`=================
    Tabla del ${base}
==================`);

    const resultado = logica(base);

    console.log(resultado);
    const nombreArchivo = `Tabla-del-${base}`

    fs.writeFile(`tablas/tabla-del-${base}`, resultado, (err) => {
        if (err) throw err;
        console.log(`El archivo tabla-del-${nombreArchivo} fue creado`);
    });
}

module.exports = {
    multiplicar
}