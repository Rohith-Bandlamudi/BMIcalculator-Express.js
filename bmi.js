const Express = require("express");
const bodyParser = require("body-parser");
const app = Express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
    
})
app.post("/",(req,res)=>{
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi = (weight/(height*height));
    res.send("Your BMI is "+bmi);
})
app.listen(5000,function(){
    console.log("server started at port 5000");
})
