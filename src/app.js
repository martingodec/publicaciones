const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

//---Exportamos rutas---

const indexRouter = require('./router/indexRoute');

app.listen(3002, ()=>{
    console.log("App on port 3002");
});


app.use('/', indexRouter);

