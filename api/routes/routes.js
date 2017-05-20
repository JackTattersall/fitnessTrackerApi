'use strict';

module.exports = app => {
  const workouts = require('../controllers/workout_controller');
  const exercises = require('../controllers/exercise_controller');
  const users = require('../controllers/user_controller');

  // workout Routes
  app.route('/workouts/:workoutId')
    .get(workouts.read_a_workout)
    .put(workouts.update_a_workout)
    .delete(workouts.delete_a_workout);

  app.route('/workouts')
    .get(workouts.list_all_workouts)
    .post(workouts.create_a_workout);

  // exercise Routes
  app.route('/exercises/:exerciseId')
    .get(exercises.read_a_exercise)
    .put(exercises.update_a_exercise)
    .delete(exercises.delete_a_exercise);

  app.route('/exercises')
    .get(exercises.list_all_exercises)
    .post(exercises.create_a_exercise);

  // user Routes
  app.route('/users/:userId')
    .get(users.read_a_user)
    .put(users.update_a_user)
    .delete(users.delete_a_user);

  app.route('/users')
    .get(users.list_all_users)
    .post(users.create_a_user);
};