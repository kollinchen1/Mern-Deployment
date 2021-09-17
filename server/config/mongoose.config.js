// 1. import mongoose
const mongoose = require("mongoose");
const DB = "pirate_db";

// 2. connect mongoose to MongoDB
mongoose.connect('mongodb://localhost/'+ DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${DB} database`))
    .catch(err => console.log(`Something went wrong when connecting to the ${DB} database `, err));
