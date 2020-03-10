const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

let Issue = new Schema({
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

autoIncrement.initialize(mongoose.connection);
Issue.plugin(autoIncrement.plugin, {
    model: 'Issue',
    field: 'issueNumber',
    startAt: 1000
});


module.exports = mongoose.model("Issue", Issue);