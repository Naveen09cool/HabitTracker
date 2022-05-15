const express = require('express');
const port = 7000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const bodyParser = require('body-parser')

// app.use(bodyParser);
app.use(express.static('./assets'));
app.use(express.urlencoded());

app.use(expressLayouts);
// extract style and script from subpages into layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine','ejs');
app.set('views', './views')

app.use('/', require('./routes/index'))



app.listen(port, function(err){
    if(err){
        console.log(`Error! connecting Port : ${err}`);
    }
    console.log(`Connected on Port : ${port}`);
})