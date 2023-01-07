const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base que se va a tomar para multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'Lista el resultado de la tabla por consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: false,
                default: 10,
                describe: 'Limite hasta donde va a llegar la tabla. Por defecto, contara hasta 10.'
            })
            .check((argv, options)=>{
                if (isNaN(argv.b)){
                    throw 'La base debe ser un numero'
                }
                return true;
            })
            .argv;

module.exports = argv;