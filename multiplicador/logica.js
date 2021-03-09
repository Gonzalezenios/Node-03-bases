const logica = (base, limite) => {
    let resultado = '';

for (let index = 1; index < limite; index++) {
    resultado += `${base} * ${index} = ${base * index}\n`
}
    return resultado;
}

module.exports = {
    logica
}