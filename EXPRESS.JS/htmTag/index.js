const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send(`
    <input type="text" placeholder="Username"/>
    <button>Click Me</button>  
    `)
})

app.listen(3000);