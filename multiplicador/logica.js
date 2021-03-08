const logica = (base) => {
    let resultado = '';

for (let index = 1; index < 10; index++) {
    resultado += `${base} * ${index} = ${base * index}\n`
}
    return resultado;
}

module.exports = {
    logica
}