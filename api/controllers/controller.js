'use strict';

const mongoose = require('mongoose'),
  Workout = mongoose.model('Workouts');

// Workouts controllers

exports.list_all_workouts = (req, res) => {
  var query = {};
  var projections = {};
  var options = {sort: {completed: -1 }};

  if (req.query['exercise_name'])
    query = {'exercises.name': req.query['exercise_name']};

  if (req.query['user_id'])
    query = {'user_id': req.query['user_id']};

  Workout.find(query, projections, options, (err, workout) => {
    if (err)
      res.send(err);
    res.json(workout);
  });
};

exports.create_a_workout = (req, res) => {
  const new_workout = new Workout(req.body);
  new_workout.save((err, workout) => {
    if (err)
      res.send(err);
    res.json(workout);
  });
};

exports.read_a_workout = (req, res) => {
  Workout.findById(req.params.workoutId, (err, workout) => {
    if (err)
      res.send(err);
    res.json(workout);
  });
};

exports.update_a_workout = (req, res) => {
  Workout.findOneAndUpdate(req.params.workoutId, req.body, {new: true}, (err, workout) => {
    if (err)
      res.send(err);
    res.json(workout);
  });
};

exports.delete_a_workout = (req, res) => {
  Workout.remove({
    _id: req.params.workoutId
  }, (err, workout) => {
    if (err)
      res.send(err);
    res.json({ message: 'Workout successfully deleted' });
  });
};