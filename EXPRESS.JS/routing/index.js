const express = require('express');
const app = express();

app.get('',(req,res)=>{
    // const data = ;/
    console.log("Data by Browser: ",req.query.name);
    res.send("Welcome "+ req.query.name);
})
app.listen(3000);
