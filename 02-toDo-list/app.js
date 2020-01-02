const { green } = require("colors");
const argv = require("./config/yargs").argv;
const { del, add, getDB } = require("./commands");

let comando = argv._[0];

switch (comando) {
	case "new":
		add({
			id: 3,
			description: argv.description,
			status: argv.status
		});
		break;

	case "list":
		const dbList = getDB();
		for (const toDO of dbList) {
			console.log("============ToDo==========".green);
			console.log(toDO.description);
			console.log("status", toDO.status);
			console.log("==========================".green);
		}
		console.log("TCL: db", dbList);
		console.log("list toDo");
		break;

	case "delete":
		del({ title: "foo" });
		break;

	case "update":
		console.log("update toDo");
		break;

	default:
		console.log("Comando no reconocido");
		break;
}
