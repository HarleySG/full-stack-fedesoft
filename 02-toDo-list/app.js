const argv = require('./config/yargs').argv;

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'create':
        console.log('new todo')
        break;

    case 'list':
        console.log('list todo')
        break;

    case 'update':
        console.log('update todo')
        break;

    default:
        console.log('Comando no reconocido')
        break;
}