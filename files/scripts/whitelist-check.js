const whitelist = [
	"703785252463837234", // Vako
	"876286395348561951", // Shy
	"602303260572778516", // Nashi
];

function whitelistCheck(usuario) {
	if(whitelist.includes(usuario))
		return true;
	else
		return false;
};

module.exports.whitelistCheck = whitelistCheck;