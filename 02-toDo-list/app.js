const fs = require("fs");
const { green } = require("colors");
const argv = require("./config/yargs").argv;
const prompts = require("prompts");

(async () => {
	const response = await prompts({
		type: "number",
		name: "value",
		message: "How old are you?",
		validate: value => (value < 18 ? `Nightclub is 18+ only` : true)
	});

	console.log(response); // => { value: 24 }
})();
let comando = argv._[0];
const getDB = () => require("./db/toDo.json");

const setDB = data => {
	const currentDB = getDB();
	currentDB.push(data);
	fs.writeFile("./db/toDo.json", JSON.stringify(currentDB), err => {
		if (err) throw err;
		return { status: "success" };
	});
};
switch (comando) {
	case "new":
		console.log("new toDo");
		setDB({
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
		console.log("delete toDo");
		break;

	case "update":
		console.log("update toDo");
		break;

	// default:
	// 	console.log("Comando no reconocido");
	// 	break;
}
