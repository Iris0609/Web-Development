var express=require("express");
var app=express();

//Route

// "/" =>"Hi There!"
app.get("/",function(req,res){
    res.send("Hi There!");
});
// "bye" =>"Goodbye!"
app.get("/bye",function(req,res){
    res.send("Goodbye!");
});
// "dog"=>"Mellow"
app.get("/dog",function(req,res){
    console.log("Someone made a request to /dog!");
    res.send("Meow!");
});
//Tell Express to listen for request
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server started!")
});