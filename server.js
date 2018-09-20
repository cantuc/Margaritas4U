const express = require('express');
const path = require('path');
const router = require('./server/config/routes.js');

const app = express();

router(app);

app.use(express.static(path.join(__dirname, './angular/dist/angular' ))); 



app.all("*", (req, res)=>res.sendFile(path.join(__dirname, './angular/dist/angular/index.html')));

app.listen(8000, function(req, res){
    console.log("Listening on port 8000")
})









