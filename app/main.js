/**
 * Created by priyanga on 10/14/15.
 */
var fs = require("fs");

//Blocking Code Example
//var data = fs.readFileSync('input.txt');
//console.log(data.toString());

//Non-Blocking Code Example
fs.readFile('input.txt', function (err, data) {
	if (err) return console.error(err);
	console.log(data.toString());
});

console.log("Program Ended");