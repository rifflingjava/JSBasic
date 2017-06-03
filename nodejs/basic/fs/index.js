var fs = require("fs");
var fileName = "test.txt2";

// /Read synchronously
//var data1 = fs.readFileSync(fileName);
//console.log("File content: \n" + data1.toString());

// Read asynchronously
console.log("Read asynchronously");
var t = function(err, data) {
    
    if(err){
        //code,errno,message,path,stack,syscall,constructor,__proto__
        console.log(err.errno)
        return console.error(err);
    }
    console.log(data.toString());
};
var data2 = fs.readFile(fileName, t);