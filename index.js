const express = require('express');
const port = 7000;
const app = express();
const db = require('./config/mongoose');

app.use(express.static('./assets'));
app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views', './views')

app.use('/', require('./routes/index'))

app.listen(port, function(err){
    if(err){
        console.log(`Error! connecting Port : ${err}`);
    }
    console.log(`Connected on Port : ${port}`);
})