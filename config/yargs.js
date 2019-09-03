const opcion = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opcion)
    .command('crear', 'Crea el archivo la tabla de multiplicar', opcion)
    .argv;

module.exports = {
    argv
};