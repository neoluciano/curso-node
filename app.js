
const {crearArchivoAA} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');

console.clear();


// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

crearArchivoAA(base, listar, hasta)
    .then(msg => {console.log(msg)})
    .catch(err => {console.log(err)});

