const express = require("express");
const logger = require("morgan");
const app = express();

const products = [{name:"iphone",price:40000},
{name:"samsung s9",price:50000}]

app.use(logger());
app.use(express.static('public'));


app.get("/",function(req,res){
    console.log(req.query);
    res.json({name:"hello"})
})

app.get("/search",function(req,res){

   let name = req.query.q;
   for(let i=0;i<products.length;i++){
       if(products[i].name==name){
           res.json(products[i])
       }
   }


})

app.post("/home",function(req,res){
    res.send("post");
})

app.listen(8080,function(){
    console.log("server started");
})
