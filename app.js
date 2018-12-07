/**
 * Tipos de require
 * Nativos en node
 * Expansiones
 * Creados por nosotros ('./<foo>')
 */

const argv = require('./config/yargs').argv;

const { newFile, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limit)
        break;

    case 'crear':
        newFile(argv.base, argv.limit)
            .then(file => console.log(file))
            .catch(err => console.error(err))
        break;

    default:
        console.log('Comando no reconocido')
        break;
}
