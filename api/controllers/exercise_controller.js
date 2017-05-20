'use strict';

const mongoose = require('mongoose'),
  Exercise = mongoose.model('Exercises');


exports.list_all_exercises = (req, res) => {
  var query = {};
  var projections = {};
  var options = {sort: {name: 1 }};

  if (req.query['user_id'])
    query = {'user_id': req.query['user_id']};

  Exercise.find(query, projections, options, (err, exercise) => {
    if (err)
      res.send(err);
    res.json(exercise);
  });
};

exports.create_a_exercise = (req, res) => {
  const new_exercise = new Exercise(req.body);
  new_exercise.save((err, exercise) => {
    if (err)
      res.send(err);
    res.json(exercise);
  });
};

exports.read_a_exercise = (req, res) => {
  Exercise.findById(req.params.exerciseId, (err, exercise) => {
    if (err)
      res.send(err);
    res.json(exercise);
  });
};

exports.update_a_exercise = (req, res) => {
  Exercise.findOneAndUpdate(req.params.exerciseId, req.body, {new: true}, (err, exercise) => {
    if (err)
      res.send(err);
    res.json(exercise);
  });
};

exports.delete_a_exercise = (req, res) => {
  Exercise.remove({
    _id: req.params.exerciseId
  }, (err, exercise) => {
    if (err)
      res.send(err);
    res.json({ message: 'Exercise successfully deleted' });
  });
};