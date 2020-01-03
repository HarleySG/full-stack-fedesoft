const prompts = require("prompts");
const getDB = require("./list");

/**
 *
 */
async function getToDosForDelete() {
	const info = getDB();
	let questions = [
		{
			type: "autocomplete",
			name: "toDoID",
			message: 'Pick the "to Do" do you want delete:',
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
	if (info.length > 0) {
		questions[0].choices = info.reduce((ac, c) => {
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
	if (params.confirm) {
		console.log("TCL: params", params);
	} else {
		console.log("Canceled delete:", params.toDoID);
	}
}
module.exports = async () => {
	const toDoList = await getToDosForDelete();
	if (toDoList) {
		const promptResult = await selectToDoOf(toDoList);
		deleteToDoBy(promptResult);
	} else {
		console.log('There is no "to do" in the list.');
	}
};
