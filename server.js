const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Workout = require('./api/models/workouts'),
  User = require('./api/models/users'),
  Exercise = require('./api/models/exercises'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('fitness tracker RESTful API server started on: ' + port);
