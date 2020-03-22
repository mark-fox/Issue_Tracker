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
        this.onCancel = this.onCancel.bind(this);

        this.state = myConstants.cleanState
        //     {
        //     // issueNumber: 0,
        //     subject: "",
        //     status: "",
        //     priority: "",
        //     assignedTo: "",
        //     overdueDays: 0,
        //     description: "",
        //     lastUpdated: null,
        //     dueDate: new Date(),
        //     createdDate: null,
        //     closedDate: null,
        //     closed: false
        // }
    }

    onChangeSubject(e) {
        this.setState({subject: e.target.value});
    }

    onChangePriority(e) {
        this.setState({priority: e.target.value});
        console.log('priority: ' + e.target.value);
    }

    onChangeAssignedTo(e) {
        this.setState({assignedTo: e.target.value});
        console.log('assignedTo: ' + e.target.value);
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

        console.log('what is passed onsubmit:');
        // console.log(e.target.value);
        console.log(e.target);
        console.log(e.target.elements);

        const newIssue = {
            issueNumber: this.state.issueNumber,
            subject: this.state.subject,
            status: myConstants.statusList[0].value,
            priority: this.state.priority,
            assignedTo: this.state.assignedTo,
// TODO might need to calculate beforehand
            overdueDays: this.state.overdueDays,
            description: this.state.description,
            lastUpdated: new Date(),
            dueDate: this.state.dueDate,
            createdDate: new Date(),
// TODO retrieve user once login system is implemented
            createdBy: 'TheCreator', // this.state.createdBy,
            closed: this.state.closed,
            closedDate: null
        };

// TODO uncomment once done testing updating all states on submit
        // axios.post(myConstants.localUrl + myConstants.serverRoute + myConstants.serverRouteAdd, newIssue)
        //     .then(function(res) {
        //         console.log(res.data);
        console.log('newIssue:');
                console.log(newIssue);
        //     });

        this.setState(myConstants.cleanState)
    }

    onCancel(e) {
// TODO replace with Redirect
        this.props.history.push('/');
    }

    render() {
        return (
// TODO modify the size (width) of fields
            <div style={{marginTop: 10}}>
                <h3>New Issue</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Subject: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.subject}
                               onChange={this.onChangeSubject}
                               required
                        />
                    </div>

                    <div className="form-group">
                        <label>Priority: </label>
{/*TODO add bootstrap and test*/}
                        <select value={this.state.priority} onChange={this.onChangePriority} required>
                            <option disabled value="">Select...</option>
                            {myConstants.priorityList.map(({value, label}) =>
                                <option value = {value}>{label}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Assign To: </label>
{/*TODO query all users and add this here*/}
                        <select value={this.state.assignedTo}
                                onChange={this.onChangeAssignedTo}
                            required>
                            <option disabled value="">Select...</option>
                            <option>TestUser</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <textarea className="form-control"
                                  value={this.state.description}
                                  onChange={this.onChangeDescription}
                                  required> </textarea>
                    </div>

                    <div className="form-group">
                        <label>Due Date: </label>
                        <DatePicker
                            selected={new Date()}
                            onChange={this.onChangeDueDate}
                            minDate={new Date()}
                            defaultValue={new Date()}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create New Issue" className="btn btn-primary" />
                        <button onClick={this.onCancel} value="Cancel" className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}