'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  values: {
    type: Array,
  },
  user_id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Exercises', ExerciseSchema);