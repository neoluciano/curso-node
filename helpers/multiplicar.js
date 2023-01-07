const fs = require('fs');
const colors = require('colors');

const crearArchivoAA = async(base = 1, listar = false, hasta) =>{
try {
    let salida = '';
    let archivo = '';

    for(let i=1;i<=hasta;i++){
        salida += `${colors.green(base)} X ${i} = ${colors.red(base * i)}\n`;
        archivo += `${base} X ${i} = ${base * i}\n`;
    }
    if (listar){
        console.log(salida);
    }
    

    fs.writeFileSync(`./salida/tabla-${base}.txt`, archivo);

    return `Se creo el archivo tabla-${base}.txt correctamente`;
} catch (error) {
    throw error;
}
}

const crearArchivo  = (base = 1) => {

    let salida = '';

    for(let i=1;i<11;i++){
        salida += `${base} X ${i} = ${base * i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida)

    console.log(`Se creo el archivo tabla-${base}.txt correctamente`);
}

module.exports = {
    crearArchivoAA
}