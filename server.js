const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3500;
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const router=require(path.join(__dirname,'routes','thisRout.js'));
app.set('views','./views');
app.set('view engine','ejs');

app.use('/',router);

// Start the server
app.listen(3500, () => {
    console.log(`Server is running on port ${port}`);
});
