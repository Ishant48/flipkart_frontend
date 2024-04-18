const express = require('express');
const defaultData = require('./default');
const cors = require('cors');
const bodyParser= require('body-parser')
const router = require('./routes/route');
require("./database/db")();
const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router)
const PORT = 8000

app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`);
});

defaultData();