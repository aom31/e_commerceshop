const { route } = require('./user');

const router = require('express').Router();
const User = require("../models/User")
//register 
route.post("/register", (req,res)=> {
    const newUser = new User({
        username : req.body.username,
        email: req.body.email,
        password : req.body.password,
    
    })
})
module.exports = router;