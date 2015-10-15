var fs = require("fs");

// Asynchronous read
fs.readFile('data/input.txt', function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("Asynchronous read1: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('data/input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");


// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('data/input.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log("File opened successfully!");
});


//Get File information
console.log("Going to get file info!");
fs.stat('data/input.txt', function (err, stats) {
	if (err) {
		return console.error(err);
	}
	console.log(stats);
	console.log("Got file info successfully!");

	// Check file type
	console.log("isFile ? " + stats.isFile());
	console.log("isDirectory ? " + stats.isDirectory());
});


//Writing File
console.log("Going to write into existing file");
fs.writeFile('data/input.txt', 'Simply Easy Learning!',  function(err) {
	if (err) {
		return console.error(err);
	}
	console.log("Data written successfully!");
	console.log("Let's read newly written data");
	fs.readFile('data/input.txt', function (err, data) {
		if (err) {
			return console.error(err);
		}
		console.log("Asynchronous read2: " + data.toString());
	});
});


//Reading & Close File
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('data/input.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log("File opened successfully!");
	console.log("Going to read the file");
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
		if (err){
			console.log(err);
		}

		// Print only read bytes to avoid junk.
		if(bytes > 0){
			console.log(buf.slice(0, bytes).toString());
		}

		// Close the opened file.
		fs.close(fd, function(err){
			if (err){
				console.log(err);
			}
			console.log("File closed successfully.");
		});
	});
});


//Read directory
console.log("Going to read directory /app");
fs.readdir("../app/",function(err, files){
	if (err) {
		return console.error(err);
	}
	files.forEach( function (file){
		console.log( file );
	});
});