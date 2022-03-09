
// Import Files and Libraries
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


const jsonData= require('./vanresjson.json'); 
//console.log(jsonData.courses);

for (let index = 0; index < jsonData.courses.length; index++) {

    console.log(jsonData.courses[index]);
    
}

// define location of static files
app.use(express.static("public"));

// set the get and post routes and request and response
app.get("/", function (req, res) {
    res.render('index');
});

app.get("/courses", function (req, res) {
    res.render('courses',{
        courseList: jsonData.courses
      });
});

app.get("/contact", function (req, res) {
    res.render('contact');
});

var email = ""; // I want to hold email outside post method 

//post function to get email and return thank you
app.post("/", function (req, res) {
    email = req.body.email;

    res.render('thanks',{
        email: email});
});

// set up the server, log the start
app.listen(3000, function() {
    console.log("Server running on port 3000.");
  });
