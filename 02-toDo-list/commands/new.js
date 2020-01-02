const fs = require("fs");
const getDB = require("./list");

module.exports = data => {
	console.log("new toDo");
	const currentDB = getDB();
	currentDB.push(data);
	fs.writeFile("./db/toDo.json", JSON.stringify(currentDB), err => {
		if (err) throw err;
		return { status: "success" };
	});
};
