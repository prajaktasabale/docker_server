var express=require("express");
var mysql=require("mysql");
var app=express();
var StudentRouter=require("./routes/Student")


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/Student",StudentRouter);
app.get("/",(request,response)=>{
    response.send("Welcome to my backend");
})

app.listen(8888,()=>{
    console.log("server started on port 8888");
})