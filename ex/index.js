const Express = require("express");
var app = Express();


app.get("/", (req,res)=>{
    valor = Math.random() * (99999 - 10000) + 10000;
    res.send(""+Math.round(valor));
})



app.listen(3000, ()=> { 
    console.log("Up 3000")});