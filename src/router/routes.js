const express = require('express')
const todoSchema = require('../models/todoSchema')
const router =express.Router();


router.post("/todos",(req,res)=>(
    console.log("posting my todos")
))


module.exports=router;






