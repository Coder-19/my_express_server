// the code below is used to require the express module into
// the app
const express = require('express');

// the code below is used to create an instance of the express\
// module
const app = express();

// the code below is to create a property that will contain
// the port number on which the server will listen to
// the request made by the user
const portNumber = 3000;

// the code below is to use the get() method from the app
// instance for creating a get route for the user at the root "/"
// route

// the get() method will take two inputs first one is the route
// where we want to take the user and second is an anonymous 
// function that contains the code that will be executed
// when the user makes a get request at the root "/" route

// the anonymous method takes two inputs first one is the 
// req i.e. the request made by the user and the second one is
// res i.e. the response that we have to send to the user
app.get("/", function(req,res){
    // the code below is for debugging purpose to print the 
    //  the data that is present in the req instance
    console.log("The data in the req instance is:");
    console.log(req);

    // the code below is to use the send() method from the 
    // res instance for sending the response to the user when
    // the user makes a request at "/" root route
    // res.send("Hello");

    // the send() method above can also be used to send the 
    // html rather than the plain text
    res.send("<h1>Hello</h1>");
});

// the code below is to use the listen() method from the app
// instance for listening to the request made by the user
// at port 3000

// the listen() method will take two inputs first one is the
// port number at which it will listen to the request made by
// the user and second one is an anonymous functions that 
// contains the code that will be executed when the user makes
// a request at port 3000
app.listen(portNumber, function(){
    console.log("The server is up and running at port "+portNumber);
});