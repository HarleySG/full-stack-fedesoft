const argv = require('yargs')
    .command(
        "create",
        "Crear un toDo item", {
            todo: {
                demand: true,
                value: "",
                alias: "t"
            }
        }
    )
    // .command(
    //     "list",
    //     "listar los todos los toDo", {
    //         todo: {
    //             id: "",
    //             alias: "l"
    //         }
    //     }
    // )
    .command(
        "update",
        "actualizar un ToDo item", {
            todo: {
                demand: true,
                value: "",
                id: "",
                alias: "u"
            },
            state: {
                default: true,
                value: ""
            }
        }
    )
    .help()
    .argv;

module.exports = {
    argv
}