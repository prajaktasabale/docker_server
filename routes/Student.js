var express=require("express");
var mysql=require("mysql");
var router=express();
var connection=mysql.createConnection(
    {
        host:'172.18.5.30',
        user:'root',
        database:'mydb',
        password:'manager',
        port:9909
    }
);
router.use(express.json());
router.get("/",(request,response)=>{
var query='select * from Student';
connection.query(query,(err,result)=>{
    if(err==null)
    {
        response.send(JSON.stringify(result));
    }
    else{
        response.send(JSON.stringify(err));
    }
})
})

module.exports=router;
