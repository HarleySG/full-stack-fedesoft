const prompts = require("prompts");
const getDB = require("./list");

/* (async () => {
	const response = await prompts({
		type: "number",
		name: "value",
		message: "How old are you?",
		validate: value => (value < 18 ? `Nightclub is 18+ only` : true)
	});

	console.log(response); // => { value: 24 }
})(); */

const questions = [
	{
		type: "text",
		name: "username",
		message: "What is your GitHub username?"
	},
	{
		type: "number",
		name: "age",
		message: "How old are you?"
	},
	{
		type: "text",
		name: "about",
		message: "Tell something about yourself",
		initial: "Why should I?"
	},
	{
		type: "select",
		name: "color",
		message: "Pick a color",
		choices: [
			{
				title: "Red",
				description: "This option has a description",
				value: "#ff0000"
			},
			{ title: "Green", value: "#00ff00", disabled: true },
			{ title: "Blue", value: "#0000ff" }
		],
		initial: 1
	},
	{
		type: "autocomplete",
		name: "actor",
		message: "Pick your favorite actor",
		choices: [
			{ title: "Cage" },
			{ title: "Clooney", value: "silver-fox" },
			{ title: "Gyllenhaal" },
			{ title: "Gibson" },
			{ title: "Grant" }
		]
	}
];

/**
 *
 */
module.exports = async data => {
	console.log("delete toDo");
	const info = getDB();
	const foo = await prompts(questions);
	console.log("TCL: foo -> foo", foo, info, data);
};
