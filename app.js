var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pure');

var index = require('./routes/index');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/uploads', express.static('uploads'));
// app.get('/', function (req, res) {
//     res.send('hello world')
// })

app.listen(3000, () => {
    console.log('app listen 3000...');
});
  
// module.exports = app;
  