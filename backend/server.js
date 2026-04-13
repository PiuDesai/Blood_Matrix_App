const express = require('express');
const Database = require('./config/db');
require('dotenv').config(); 

const app =  express();

//Middleware
app.use(express.json());

//Database
Database();

//Routes
app.get('/',(req,res) => {
   res.send('Hello from server..!');
    
});

//server start
const PORT = process.env.PORT || 5007 ;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});