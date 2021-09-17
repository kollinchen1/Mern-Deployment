const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate Name must be present"]
    },
    imgUrl : {
        type: String,
        required: [true, "Image URL must be present"]
    },
    numChest : {
        type: Number,
        required: [true, "Enter the Number of Treasure Chests you found!"]
    },
    catchPhrase : {
        type: String,
        required: [true, "What's your pirate's catch phrase"]
    },
    position:{
        type: String,
        required: [true, "{PATH} must be present"]
    },
    pegleg : {
        type: Boolean,
        default: true
    },
    eyePatch : {
        type: Boolean,
        default: true
    },
    hookHand : {
        type: Boolean,
        default: true
    }
},{timestamps: true});


// make the schema and export
const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate;