const argv = require('yargs')

        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla multiplicar'
        })

        .check((argv, options) => {
            if (isNaN(argv.b)) {
                throw new Error("La base tiene que ser un número.")
            }
            return true
        })

        .help()
        .version()

        .argv;

const {multiplicar} = require("./multiplicador/index")


multiplicar (argv.b);

