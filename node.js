var a=require("express");
var app=a();
var b=require("body-parser");
app.use(b.urlencoded({extended:true}))
app.set("view engine","ejs");
var names=[]
app.get("/node",function(req,res){
    res.render("index",{name:names});
})
app.post("/node/show",function(req,res){
    var c = req.body.data
    res.redirect("/node/show");
    names.push(c);
})
app.get("/node/show",function(req,res){
    res.render("show",{name:names});
})
app.listen(300,function(){
    console.log("Server has started");
})
