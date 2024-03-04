const fs = require('fs');
const path =require('path');
const dirPath = path.join(__dirname,'files');

// console.log(dirPath)

for(let i=1;i<6;i++){
    fs.writeFileSync(`${dirPath}/hello${i}.txt`,"This is a simple file");
}
fs.readdir(dirPath,(err,file)=>{
    file.forEach((i)=>{
        console.log(i);
    })
})