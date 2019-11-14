const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const expressHandlebars = require('express-handlebars');
const hbs = require('hbs');
const port = process.env.PORT || 9000;
const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('src'));

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.listen(port, () => {
  console.log('Server listening on http://localhost:' + port);
});

app.get('/', (req, res) => {
  res.render('index.html');
});