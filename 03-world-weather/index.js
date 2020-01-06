const { argv } = require("./config");
const { http } = require("./tools");

global.$ = {
	API: "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
	HOST: "",
	KEYs: [
		"x-rapidapi-key",
		"4210f9688amsha5f4d40b9ec1809p11702ejsnb66bd378456f"
	],
	QUERYs: {
		get: name => {
			return {
				method: "get",
				baseURL: `${$.API}?location=${name}`,
				headers: { [$.KEYs[0]]: $.KEYs[1] }
			};
		}
	}
};

switch (argv._[0]) {
	case "city":
		console.log(argv.city);
		const QUERY = $.QUERYs.get(argv.city);
		http.queryBy(QUERY).then(res => {
			try {
				const { headers, status, data } = res;
				if (status >= 200 && status < 300) {
					const colombiaCities = data["Results"].filter(
						city => city.c == "CO"
					);
					console.log(headers, status, colombiaCities);
				}
			} catch (error) {
				console.error(error);
			}
		});
		break;
	default:
		console.log(`Comando ${argv} no conocido`);
		break;
}
