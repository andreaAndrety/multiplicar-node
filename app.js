// siempre al inicio se van a poner los requierds que necesitemos 
//vamos a hacer una destructuracion
const { crearArchivo, listarTabla } = require('./multiplicacion/multiplicar');

const argv = require('./config/yargs').argv;





//console.log(argv);
console.log(argv);
console.log(argv.limite);
//en la consola captura 3 parametros  (1)nodemon (2)app (3)--base=5
//estoy haciendo referencia al arreglo de la consoloa con el nombre _ guion bajo ,y quiero ver la
//el dato en la posicion 0 
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'borrar':
        console.log(comando);
        break;
    default:
        console.log('No se reconoce el comando');
}