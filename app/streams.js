/**
 * Created by priyanga on 10/15/15.
 */
var fs = require("fs");
var data = '';


//Type 1 Stream
//Reading from stream
// Create a readable stream
var readerStream = fs.createReadStream('data/input.txt');

// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
	data += chunk;
});

readerStream.on('end',function(){
	console.log("1 " + data);
});

readerStream.on('error', function(err){
	console.log(err.stack);
});

console.log("Read Program Ended");


//Type 2 Stream
//Writing to stream
var fs = require("fs");
var data2 = 'ohhh yeah Write stream works ..!';

// Create a writable stream
var writerStream = fs.createWriteStream('data/output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data2,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
	console.log("Write completed.");
});

writerStream.on('error', function(err){
	console.log(err.stack);
});

console.log("Write Program Ended");


//Type 3 Stream
//Piping streams
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('data/input2.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('data/output2.txt');

// Pipe the read and write operations
// read data/input.txt and write data to data/output.txt
readerStream.pipe(writerStream);

console.log("Pipe Program Ended");

//Type 4 Stream
//Chaining streams -Transform
var fs = require("fs");
var zlib = require('zlib');

// Compress the file data/input.txt to data/input.txt.gz
fs.createReadStream('data/input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input-input.txt.gz'));

console.log("File Compressed.");


var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input-input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input-input.txt'));

console.log("File Decompressed.");