// http core module m node.js or server ki request ko accept krne k kaam ata h 
const http = require('http');

// function 
http.createServer((req,res)=>{
    res.write("<h1>Hello, My Name is Maarij</h1>");
    res.end();
}).listen(3000); 
