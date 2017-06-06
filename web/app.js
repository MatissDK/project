var express = require('express');
var path = require('path');
var app = express();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'main', layoutsDir:__dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 3000);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res)
{
    res.render('index', {title: 'BACKBONE', condition: false, anyArray : [1,2,3]});   // this is the important part
});

app.post('/', function (req, res) {
    console.log(req.body);
    res.json(req.body);
});

app.get('/body', function(req, res)
{
    res.render('body');
});

app.get('/june', function(req, res)
{
    res.render('june');
});


app.listen(app.get('port'),  function () {
    console.log('Hello express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});