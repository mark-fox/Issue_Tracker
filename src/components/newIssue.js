import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker/es";

import 'react-datepicker/dist/react-datepicker.css';

const myConstants = require('../helpers/interface');

export default class NewIssue extends Component {
    constructor(props) {
        super(props);

        // Bind functions to this class.
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeAssignedTo = this.onChangeAssignedTo.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDueDate = this.onChangeDueDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            issueNumber: 0,
            subject: "",
            status: "",
            priority: "",
            assignedTo: "",
            overdueDays: 0,
            description: "",
            lastUpdated: null,
            dueDate: new Date(),
            createdDate: null,
            closedDate: null,
            closed: false
        }
    }

    onChangeSubject(e) {
        this.setState({subject: e.target.value});
    }

    onChangePriority(e) {
        this.setState({priority: e.target.value});
    }

    onChangeAssignedTo(e) {
        this.setState({assignedTo: e.target.value});
    }

    onChangeDescription(e) {
        this.setState({description: e.target.value});
    }

    onChangeDueDate(e) {
        this.setState({dueDate: e});
        console.log(this.state.dueDate);
    }

    onSubmit(e) {
        e.preventDefault();
// TODO add check for past dates either here or onChange
        const newIssue = {
// TODO implement issue number
            issueNumber: 5,
            subject: this.state.subject,
            status: this.state.status,
            priority: this.state.priority,
            assignedTo: this.state.assignedTo,
// TODO might need to calculate beforehand
            overdueDays: this.state.overdueDays,
            description: this.state.description,
            lastUpdated: new Date(),
            dueDate: this.state.dueDate,
            createdDate: new Date(),
            closed: this.state.closed
        };

        axios.post(myConstants.localUrl + myConstants.serverRouteAdd, newIssue)
        // axios.post('http://localhost:4000/issuesroute/add', newIssue)
            .then(function(res) {
                console.log(res.data);
            });

        this.setState({
// TODO extract object to interface
            issueNumber: 0,
            subject: "",
            status: "",
            priority: "",
            assignedTo: "",
            overdueDays: 0,
            description: "",
            lastUpdated: null,
            dueDate: null,
            createdDate: null,
            closedDate: null,
            closed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>New Issue</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Subject: </label>
                        <input type="text" className="form-control" value={this.state.subject} onChange={this.onChangeSubject}/>
                    </div>
                    <div className="form-group">
                        <label>Priority: </label>
{/*TODO add bootstrap and test*/}
                        <select value={this.state.priority} onChange={this.onChangePriority}>
                            <option>Test</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Assign To: </label>
{/*TODO query all users and add this here*/}
                        <select value={this.state.assignedTo} onChange={this.onChangeAssignedTo}>
                            <option>TestUser</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea className="form-control" value={this.state.description} onChange={this.onChangeDescription}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Due Date: </label>
                        <DatePicker
                            selected={this.state.dueDate}
                            onChange={this.onChangeDueDate}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create New Issue" className="btn btn-primary" />
                    </div>
{/*TODO add a cancel button*/}
                </form>
            </div>
        )
    }
}