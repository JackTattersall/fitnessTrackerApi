'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Date,
        default: null
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    workout_type: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ''
        }
    },
    exercises: [{
        name: {
            type: String,
            required: true
        },
        values: [{
            name: {
                type: String,
                required: true
            },
            value: {
                type: Number,
                default: 0
            }
        }]
    }]
});

module.exports = mongoose.model('Workouts', WorkoutSchema);