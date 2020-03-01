import React, { Component } from 'react';
import axios from 'axios';

export default class NewIssue extends Component {
    constructor(props) {
        super(props);

        // Bind functions to this class.
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeAssignedTo = this.onChangeAssignedTo.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            subject: "",
            priority: "",
            assignedTo: "",
            description: "",
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

    onSubmit(e) {
        e.preventDefault();

        const newIssue = {
            subject: this.state.subject,
            priority: this.state.priority,
            assignedTo: this.state.assignedTo,
            description: this.state.description,
            closed: this.state.closed
        };

        axios.post('http://localhost:4000/issuesroute/add', newIssue)
            .then(function(res) {
                console.log(res.data);
            });

        this.setState({
            subject: "",
            priority: "",
            assignedTo: "",
            description: "",
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
                        <input type="submit" value="Create New Issue" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}