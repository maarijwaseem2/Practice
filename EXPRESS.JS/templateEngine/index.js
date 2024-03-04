const express = require('express');
const app = express();

app.set('view engine','ejs');
app.get('/profile',(req,res)=>{
    const user = {
        name:"Syed Abdul Maarij",
        email:"maarijwaseem7@gmail.com",
        city:"Karachi",
        skills:['JS','php','C++','Node.js']
    }
    res.render('profile',{user});
});
app.get('/login',(req,res)=>{
    res.render('login');
});

app.listen(3000);