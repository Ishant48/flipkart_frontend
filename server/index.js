const express = require('express');
const defaultData = require('./default');
require("./database/db")();
const app = express();

const PORT = 8000

app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`);
});

defaultData();