const prompts = require("prompts");
const writeDB = require("./writeDB");

/**
 *
 */
async function getToDosForConsult(messageConsole) {
	const toDoDB = $.db;
	let questions = [
		{
			type: "autocomplete",
			name: "toDoID",
			message: messageConsole,
			choices: []
		},
		{
			type: "toggle",
			name: "confirm",
			message: "Can you confirm?",
			initial: true,
			active: "yes",
			inactive: "no"
		}
	];
	if (toDoDB.length > 0) {
		questions[0].choices = toDoDB.reduce((ac, c) => {
			ac.push({ title: c.description, value: c.id });
			return ac;
		}, []);
		return questions;
	} else {
		return false;
	}
}
async function selectToDoOf(list) {
	const baz = await prompts(list);
	return baz;
}
function deleteToDoBy(params) {
	const toDoDB = $.db;
	const { toDoID, confirm } = params;
	if (confirm) {
		const newTodoList = toDoDB.filter(todo => {
			if (todo.id != toDoID) {
				return todo;
			}
		});
		writeDB("./db/toDo.json", newTodoList);
	} else {
		toDoDB.filter(todo => {
			if (todo.id == toDoID) {
				console.log("Canceled delete toDo:", todo.description);
				return todo.description;
			}
		});
	}
}
module.exports = async () => {
	const toDoList = await getToDosForConsult(
		'Pick the "to Do" do you want delete:'
	);
	if (toDoList) {
		const promptResult = await selectToDoOf(toDoList);
		deleteToDoBy(promptResult);
	} else {
		console.log('There is no "to do" in the list.');
	}
};
