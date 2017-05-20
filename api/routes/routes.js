'use strict';

module.exports = app => {
  const workouts = require('../controllers/controller');

  // workout Routes
  app.route('/workouts/:workoutId')
    .get(workouts.read_a_workout)
    .put(workouts.update_a_workout)
    .delete(workouts.delete_a_workout);

  app.route('/workouts')
    .get(workouts.list_all_workouts)
    .post(workouts.create_a_workout);
};