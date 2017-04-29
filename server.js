const express = require('express');
const app = express();
const path = require('path');
const router = require('./controllers/burgers_controller.js');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const PORT = 3000;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname,'./views/layouts')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use('/',router);

app.listen(PORT);

