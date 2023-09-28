var express = require("express");
const SERVER_PORT = 8082;
var app = express();


app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
});


app.get("/user", (req, res) => {
    if(req.query.firstname == undefined || req.query.lastname == undefined){
        res.send("<h1>Please send first name or/and last name as query parameter(s)</h1>")
    }
    res.send(JSON.stringify(req.query));
    }
);


app.post("/user/:firstname/:lastname", (req, res) => {

    const person = {
        firstname: req.params.firstname,
        lastname: req.params.lastname
    }
    res.send(JSON.stringify(person))
    }
)


app.listen(SERVER_PORT, () => {
    console.log("server is running");
})