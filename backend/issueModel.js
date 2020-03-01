const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Issue = new Schema({
    subject: {
        type: String
    },
    priority: {
        type: String
    },
    assignedTo: {
        type: String
    },
    description: {
        type: String
    },
    closed: {
        type: Boolean
    }
});

module.exports = mongoose.model("Issue", Issue);