//GLOBALS
/*
__dirname = path to current directory
__filename = name of the file
require = function to use modules(commonJS lib)
module = info about the current module(file)
process = info about the env where the program is being executed
*/

console.log(__dirname);
console.log(__filename);
console.log(require);

setInterval(() => {                         //Takes a function as the first parametere and 2nd the interval
    console.log("hello world")
},1000);

setTimeout(() => {                          //Takes a function which will execute after the given interval
    console.log("SUIIIIII")       
},5000)