const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const userData = require('./user.json');

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, '/home.html'));
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  res.send(userData);
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  password is valid then send response as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If password is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/

router.get('/login', (req,res) => {
  var status = true;
  var message = "User is valid";
  
  if(req.query.username != "bret"){
    status = false;
    message = "User Name is invalid"
  }
  if(req.query.password != "bret@123"){
    status = false;
    message = "Password is invalid"
  }
  res.send({"status": status, "message": message});  
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  const {username} = req.params;
  if(req.params.username === userData.username){
    res.send(`<b>${username} successfully logout.</b>`);
  }else{
    res.send("Something wrong...");
  }
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));