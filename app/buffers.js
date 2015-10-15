/**
 * Created by priyanga on 10/15/15.
 */
var buf1 = new Buffer(10);
var buf2 = new Buffer([10, 20, 30, 40, 50]);
var buf3 = new Buffer("Simply Easy Learning", "utf-8");


var buf = new Buffer(256);
len = buf.write("Simply Easy Learning");
//console.log(buf);
console.log("Octets written : "+  len);


//Reading from Buffers
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
	buf[i] = i + 97;
}
//console.log(buf);
console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde


//Convert Buffer to JSON
var buf4 = new Buffer('Simply Easy Learning');
var json = buf4.toJSON(buf4);
console.log(json);


//Concatenate Buffers
var buffer1 = new Buffer('Hello ');
var buffer2 = new Buffer('World!');
var buffer3 = Buffer.concat([buffer1,buffer2], [9]);
console.log("buffer3 content: " + buffer3.toString());


//Compare Buffers
var buffer1 = new Buffer('ABCD');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
	console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
	console.log(buffer1 +" is same as " + buffer2);
}else {
	console.log(buffer1 +" comes after " + buffer2);
}

