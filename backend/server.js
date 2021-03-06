const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const issueRoutes = express.Router();
require('dotenv').config();
const PORT = 4000;

const hostTest = process.env.HOST;
const portTest = process.env.PORT;
console.log('host is: ' + hostTest + ' and port is ' + portTest);

app.use(cors());
app.use(bodyParser.json());

// issues is database table name
mongoose.connect('mongodb://127.0.0.1:27017/issues', {useNewUrlParser: true });
let connection = mongoose.connection;

connection.once('open', function() {
    console.log("mongodb connection established");
});

let Issue = require('./issueModel');

issueRoutes.route('/').get(function(req, res) {
    Issue.find(function(err, issues) {
        if (err) {
            console.log(err);
        } else {
            res.json(issues);
        }
    });
});

issueRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Issue.findById(id, function(err, issue) {
        res.json(issue);
    });
});

issueRoutes.route('/edit/:id').post(function(req, res) {
    Issue.findById(req.params.id, function(err, issue) {
        if (!issue) {
            res.status(404).send("data is not found");
        } else {
            issue.subject = req.body.subject;
            issue.status = req.body.status;
            issue.priority = req.body.priority;
            issue.assignedTo = req.body.assignedTo;
            issue.overdueDays = req.body.overdueDays;
            issue.description = req.body.description;
            issue.lastUpdated = req.body.lastUpdated;
            issue.dueDate = req.body.dueDate;
            issue.closedDate = req.body.closedDate;
            issue.closed = req.body.closed;

            issue.save().then(function(issue) {
                res.json('Issue updated');
            })
                .catch(function(err) {
                    res.status(400).send("Update not possible");
                });
        }
    });
});

issueRoutes.route('/add').post(function(req, res) {
    let issue = new Issue(req.body);
    issue.save().then(function(issue) {
        res.status(200).json({'issue': 'issue added successfully'});
    })
        .catch(function(err) {
            res.status(400).send('adding new issue failed');
        });
});

issueRoutes.route('/delete/:id').delete(function(req, res, next) {
    Issue.findByIdAndRemove(req.params.id, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

app.use('/issuesroute', issueRoutes);

app.listen(PORT, function() {
    console.log("Server running on port " + PORT);
});