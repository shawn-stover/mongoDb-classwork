// Require the mongoose package
const mongoose = require('mongoose')

// Define a mongoose schema
const DrinkSchema = new mongoose.Schema({
    name: {
        type: String
    },
    rating: {
        type: Number
    }
}, {
    timestamps: true
})

// Build a model from the schema or export the schema

module.exports = DrinkSchema