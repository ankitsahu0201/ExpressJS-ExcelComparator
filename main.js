const express = require("express");
const app = express();
const bodyParser = require("body-Parser");

app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/landingPage.html")
})

app.listen(3001, function(){
  console.log("Server started on port 3001.");
})
