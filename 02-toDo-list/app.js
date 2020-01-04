const { green } = require("colors");
const argv = require("./config/yargs").argv;
const { del, add, update } = require("./commands");

let comando = argv._[0];
global.$ = {
	db: require("./db/toDo.json")
};

switch (comando) {
	case "new":
		add({
			id: Date.now(),
			description: argv.description,
			status: argv.status
		});
		break;

	case "list":
		const dbList = $.db;
		for (const toDO of dbList) {
			console.log("============ToDo==========".green);
			console.log(toDO.description);
			console.log("status", toDO.status);
			console.log("==========================".green);
		}
		break;

	case "delete":
		del();
		break;

	case "update":
		update();
		break;

	default:
		console.log("Comando no reconocido");
		break;
}
