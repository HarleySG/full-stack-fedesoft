const writeDB = require("./writeDB");

module.exports = data => {
	console.log("new toDo");
	const currentDB = $.db;
	currentDB.push(data);
	writeDB("./db/toDo.json", currentDB);
	return { status: "success" };
};
