const mongoose = require('mongoose')
const schema =mongoose.schema

const todoSchema = new schema({
firstname:{
type:String,
required:true
},
lastname:{
    type:String
    required:true
},


email:{
    type:String
required:true}

    })

    const Todo = mongoose.model("model",todoSchema)
    module.exports = Todo;