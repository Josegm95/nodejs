const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const restful = require('express-method-override')('_method');
const routes = require('./routes/cars-router');

const app = express();

app.set('port', 3000);

app.use(favicon(path.join(__dirname, 'public/img/favicon.png')));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(restful);
app.use(routes);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
