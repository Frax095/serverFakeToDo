var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var todos = require('./routes/todos');
app.use('/todos', todos);

app.listen(3001);
module.exports = app;