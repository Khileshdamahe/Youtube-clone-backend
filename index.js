const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());
require('./Connection/conn')

const AuthRoutes = require('./Routes/user');

app.use('/auth', AuthRoutes);

app.listen(port, () => {
    console.log("Our backend project is running on port 5000 ")
})