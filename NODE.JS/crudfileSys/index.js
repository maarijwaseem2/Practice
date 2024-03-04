const fs =require('fs');
const path = require('path');
const dirPath = path.join(__dirname);

fs.writeFileSync('apple.txt',"This is apple file ");
fs.readFile('apple.txt','utf8',(err,i)=>{
    console.log(i);
});
fs.appendFile('apple.txt','and file name is updated',(err,i)=>{
    if(!err){
        console.log('File is Updated');
    }
})