const express = require("express");

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send({
        message: "Hi we have started our backend project"
    })
})

app.listen(port,()=>{
    console.log("Our backend project is running on port 5000 ")
})