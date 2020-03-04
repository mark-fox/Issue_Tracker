const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Issue = new Schema({
    issueNumber: {
        type: Number
    },
    subject: {
        type: String
    },
    status: {
        type: String
    },
    priority: {
        type: String
    },
    assignedTo: {
        type: String
    },
    overdueDays: {
        type: Number
    },
    description: {
        type: String
    },
    lastUpdated: {
        type: Date
    },
    dueDate: {
        type: Date
    },
    createdDate: {
        type: Date
    },
    createdBy: {
        type: String
    },
    closedDate: {
        type: Date
    },
    closed: {
        type: Boolean
    }
});

module.exports = mongoose.model("Issue", Issue);