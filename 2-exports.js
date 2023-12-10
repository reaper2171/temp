//Module is used to modularize the code
//Make code base smaller and provide as min as possible

const names = require('./3-utils.js');      //importing variables as an names object; can also do this {kumar, singh} to map 1-1

const printName = (name) => {     //assigning a arrow function which take a name parameter to variable "printName"
    console.log(`${name}`);       //so that we can use that reference for calling it later
}


printName('Aman');
printName(names.kumar);
printName(names.singh);