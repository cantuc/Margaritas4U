const express = require('express');
const path = require('path');
const router = require('./server/config/routes.js');
const bodyParser = require('body-parser');//nodemailer
const nodemailer = require('nodemailer');//nodemailer

const app = express();
app.use(bodyParser.json())//nodemailer
app.use(bodyParser.urlencoded({ extended: false })); //nodemailer

router(app);

app.use(express.static(path.join(__dirname, './angular/dist/angular' ))); 



app.all("*", (req, res)=>res.sendFile(path.join(__dirname, './angular/dist/angular/index.html')));



// var express = require('express');
// var path = require('path');
// var app = express();
// var nodemailer = require("nodemailer");
// var smtpTransport = require('nodemailer-smtp-transport');



// app.set('port', 3000);

// app.use(express.static(path.join(__dirname, 'public')));

// var server = app.listen(app.get('port'), function() {
//     var port = server.address().port;
//     console.log('Magic happens on port ' + port);
// });

// var smtpTransport = nodemailer.createTransport(smtpTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'testing1.test2.testing3@gmail.com',
//         pass: 'Testing123!@#'
//     }
// }));

// app.post('/send-email', function(req, res) {
//     var mailOptions = {
//         from: '"Testing_Name" <testing1.test2.testing3@gmail.com>', // sender address
//         to: "testing1.test2.testing3@gmail.com", // list of receivers
//         subject: 'Request ', // Subject line
//         text: req.body.to // plaintext body
        
//     };
//     smtpTransport.sendMail(mailOptions, function(error, info) {
//         if (error) {
//             return console.log(error);
//         }
//          console.log('Message sent: ' + info.response);
//         });
        
//         res.redirect("/index.html");
//     });
    
    

    
    
app.listen(8000, function(req, res){
    console.log("Listening on port 8000")
})
