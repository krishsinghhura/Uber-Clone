//db.js: Connects to MongoDB using mongoose. It fetches the URI from .env.
const mongoose = require("mongoose");

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT).then(() => {
        console.log("Connected to db");
    });
}

module.exports = connectToDb;