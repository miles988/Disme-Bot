module.exports.config = {
	name: "اختر",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "☯️",
	description: "الاختيار بين امرين",
	commandCategory: "other",
	usages: "[Option 1] | [Option 2]",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"return": "%1 phù hợp với bạn hơn, tôi nghĩ vậy :thinking:"
	},
	"en": {
		"return": "%1 افضل برأيي"
	}
}

module.exports.run = async ({ api, event, args, getText }) => {
	const { threadID, messageID } = event;

	var input = args.join(" ").trim();
	if (!input) return global.utils.throwError(this.config.name, threadID, messageID);
	var array = input.split(" | ");
	return api.sendMessage(getText("return", array[Math.floor(Math.random() * array.length)]),threadID, messageID);
}