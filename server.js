var express = require("express");
 
var app = express();

app.use(express.static('public'));
var port =process.env.PORT;

app.get("/", (req, res) => {
  res.sendFile("index.html")
})


app.listen(port, function(){
    //const port = server.address().port;
    console.log(`server running on port ${port}`);
      });