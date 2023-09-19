const mongoose = require('mongoose');
require('dotenv').config();

// Connecting mongoose to the MongoDB cluster and specifying the database name
mongoose.connect(process.env.Dburl,{useNewUrlParser: true,
useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function(){
    console.log('Connected to Database:: MongoDB');
});


module.exports = db;