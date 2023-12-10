const os = require('os')             //we can use const {fun name} instead of a variable to use specific functions
const path = require('path')
const {readFileSync, writeFileSync, write} = require('fs')
const {readFile, writeFile} = require('fs')    //for async fucntions

// // os module functions
// const currUser = os.userInfo();
// console.log(currUser);
 
// // path module functions
// console.log(path.sep);
// console.log(path.resolve(__dirname, 'app.js'));

// fs module functions
// const first = readFileSync('./content/first.txt','utf-8');
// const second = readFileSync('./content/second.txt','utf-8');

// console.log(first,second);

// writeFileSync('./content/sub/test.txt', `Here is the added content and 
// ${first} and ${second}`,{flag: 'a'});           //3rd argument is the flag option 'a' used for appending

readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err + "erro in first");
        return;
    }
    const firstAsync = result;                    
    readFile('./content/second.txt','utf8',(err,result) => {
        if(err){
            console.log(err + "error in second");
            return;
        }
        const secondAsync = result;             //scope of second scope is inside the function only
        console.log(`This is the text from fitst file:- ${firstAsync} and this from second:- ${secondAsync}`);
    })
})
//similarly can define write inside the body of the second read file


/*********Callbacks
Functions which are passed as arg to other functions.
We use callback functions coz js is async.
If a function has to be executed only after the first function has done executing we use callback,
so that the if the first function takes time we can wait for it to execute then run the second(callback) function
otherwise the code will not wait for the first to end and run the second one immediately.
*/