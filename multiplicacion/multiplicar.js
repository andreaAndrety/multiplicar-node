const fs = require('fs');

let listarTabla = (base, limite) => {
    for (i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
};


let data = '';
//tabla de multipliar
//creamo una funcion para hacer la tabla de multiplicacion
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un numero , intente de nuevo`);
            //se agrega el return apra que se detenga la ejecucion de codigo
            return;
        }



        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += `${base} * ${i} = ${resultado} \n`;
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
                // console.log('el Archivo ha sido creado!');
        });
    });

};
//esto lo usamos para que la funcion este disponible par ausarla desde otro archivo
module.exports = {
    crearArchivo,
    listarTabla
};