const mongoose =require('mongoose')
//mongoose helps us to connect node js to mongo db
const express =require('express')
const routers= require("./router/routes")
const app =express()

const link="mongodb+srv://RebeccaMitchelle:<10Expected09end>@cluster0.xnyz8tp.mongodb.net/test"


const port = 8080;
app.get('/', (req,res) => {
    res.status(200).send({
        "message":"welcome to server"
    })
})

app.use('/',routers)
mongoose.connect(link,() => {
    app.listen(port,() => {
console.log(`server is running at port ${port}`)
    })
}).catch(error=>console.log(error))
