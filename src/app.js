const express = require('express');
const port = 8080;
const app = express();

app.get("/", (req,res) => {
res.status(200).send({
    "message": "Welcome to server"
});
})


app.listen(port,()=> {
    console.log("listening on port "+ port);
})


