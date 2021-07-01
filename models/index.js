// Require Mongoose Package
const mongoose = require('mongoose')
require ('dotenv').config()

const connect = () => {
    // Define Atlas URI
const uri = process.env.ATLAS_URI

    // Connect Mongoose to Atlas
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    const db = mongoose.connection

    db.once('open', () => {
        console.log(`⛓ mongoDB connected on $(db.host):$(db.port)`)
    })

    db.on('error', err => {
        console.log(`🔥 Oh no! The database burned down!\. ${err}`)
    })
    }

    // Define Atlas URI
    const uri = process.env.ATLAS_URI

    // Connect Mongoose to Atlas
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    const db = mongoose.connection

    db.once('open', () => {
        console.log(`⛓ mongoDB connected on $(db.host):$(db.port)`)
    })

    db.on('error', err => {
        console.log(`🔥 Oh no! The database burned down!\. ${err}`)
})

// Export function to Connect
    module.exports = {
        connect,
        Drink: mongoose.model('Drink', require('./Drink.js'))
    }