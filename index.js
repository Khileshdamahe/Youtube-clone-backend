const express = require("express");

const app = express();
const port = 4000;
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser()); 
require('./Connection/conn')

const AuthRoutes = require('./Routes/user');
const VideoRoutes = require('./Routes/video');

app.use('/auth', AuthRoutes);
app.use('/api', VideoRoutes);

app.get('/test', (req, res) => {
    console.log("khilesh")
    res.send('khilesh');
})

app.listen(port, () => {
    console.log("Our backend project is running on port 4000 ")
})