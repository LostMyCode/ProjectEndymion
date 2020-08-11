export default function browserRequire(module) {
	if (module.startsWith("./")) { // dumb
		return require(`./${module.slice(2)}`);
	}/* else if(module.startsWith("../")) {
		return require(`../${module.slice(3)}`);
	}*/ else if (module === "events" || module.toLowerCase() === "eventemitter") { // dumb too
		return require("events");
	}
}
