import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateIssue extends Component {
    constructor(props) {
        super(props);

        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeAssignedTo = this.onChangeAssignedTo.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // issueNumber: 0,
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
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/issuesroute/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    subject: res.data.subject,
                    priority: res.data.priority,
                    assignedTo: res.data.priority,
                    description: res.data.description,
                    closed: res.data.closed
                })
            })
            .catch(function(err) {
                console.log(err);
            })
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
        const obj = {
// TODO not sure if need to update all values here
            subject: this.state.subject,
            priority: this.state.priority,
            assignedTo: this.state.assignedTo,
            description: this.state.description,
            lastUpdated: new Date(),
            closed: this.state.closed
        };
        axios.post('http://localhost:4000/issuesroute/edit' + this.props.match.params.id, obj)
            .then(function(res) {
                console.log(res.data)
            });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Issue</h3>
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
                        <input type="submit" value="Update Issue" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}