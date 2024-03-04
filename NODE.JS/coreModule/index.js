// core Module or non Global Module
const fs = require('fs');
fs.writeFileSync('abc.txt',"hello World");

// global Module 
console.log("HI, My name is Maarij");
console.log(__dirname);
console.log(__filename);