const argv = require("yargs")
	.command("new", "Crear un toDo item", {
		description: {
			demand: true,
			alias: "d",
			desc: "Nueva tarea por hacer"
		},
		status: {
			default: "false",
			desc: "Estado por default de la nueva tarea"
		}
	})
	.command("delete", "Elimina un toDo item segun su ID", {
		description: {
			demand: true,
			alias: "d",
			desc: "Identificador del toDO a eliminar"
		}
	})
	.command("list", "Mostrar todos los toDo", {
		list: {
			alias: "l",
			desc: "Lista todos los toDo's"
		},
		status: {
			default: "false"
		}
	})
	.command("update", "actualizar un ToDo item segun su ID", {
		todoID: {
			demand: true,
			alias: "i"
		},
		description: {
			demand: true,
			alias: "d"
		},
		state: {
			default: true,
			alias: "s"
		}
	})
	.help().argv;

module.exports = {
	argv
};
