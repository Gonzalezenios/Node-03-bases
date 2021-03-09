const colors = require('colors');
const fs = require('fs');
const {logica} = require('./logica')

const multiplicar = (base, limite, visualizar) => {

    const resultado = logica(base, limite);

    if (visualizar) {
        console.log(`=================
    Tabla del ${base}
==================`.yellow); 
    console.log(resultado);
    }

    const nombreArchivo = `Tabla-del-${base}.txt`

    fs.writeFile(`tablas/tabla-del-${base}`, resultado, (err) => {
        if (err) throw err;
        console.log(`El archivo tabla-del-${nombreArchivo} fue creado`.rainbow);
    });
}

module.exports = {
    multiplicar
}