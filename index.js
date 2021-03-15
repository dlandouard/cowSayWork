let cowsay = require("cowsay");
const myInformation = require('./information.js');
let wilderName = myInformation.fullName;
let wilderCampus = myInformation.campus;

console.log(cowsay.say({
	text : `I am ${wilderName} from ${wilderCampus}.`,
	e : "oO",
	T : "U "
}));

