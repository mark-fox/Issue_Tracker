import React, { Component } from 'react';
import axios from 'axios';

const myConstants = require('../helpers/interface');

export default class UpdateIssue extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        // console.log('update constructor reached');
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeAssignedTo = this.onChangeAssignedTo.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDueDate = this.onChangeDueDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = myConstants.cleanState
    }

    componentDidMount() {
        this._isMounted = true;
        // console.log('update before axios get');
        axios.get(myConstants.localUrl + myConstants.serverRoute
        + this.props.match.params.id)
            .then(res => {
                if (this._isMounted) {
                    this.setState({
                        issueNumber: res.data.issueNumber,
                        subject: res.data.subject,
                        status: res.data.status,
                        priority: res.data.priority,
                        assignedTo: res.data.priority,
// TODO create helper file with shared functions
// TODO implement overdueDays function
                        overdueDays: res.data.overdueDays,
                        description: res.data.description,
                        lastUpdated: res.data.lastUpdated,
                        dueDate: res.data.dueDate,
                        createdDate: res.data.createdDate,
                        createdBy: res.data.createdBy,
                        closedDate: res.data.closedDate,
                        closed: res.data.closed
                    })
                }
            })
            .catch(function(err) {
                console.log(err);
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onChangeSubject(e) {
        this.setState({subject: e.target.value});
    }

    onChangeStatus(e) {
        this.setState({status: e.target.value});
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
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('status: ' + this.state.status);
        console.log('constant: ' + myConstants.statusList[1].value);
        console.log('t/f: ' + (this.state.status === myConstants.statusList[1].value));

        if (this.state.status === myConstants.statusList[1].value) {
            console.log('true statement');
            // this.setState({
            //     closedDate: new Date(),
            //     closed: true
            // });
            this.state.closedDate = new Date();
            this.state.closed = true;
        }
        const obj = {
// TODO not sure if need to update all values here
// TODO test whether leaving state out (createdDate) becomes null or causes error
            subject: this.state.subject,
            status: this.state.status,
            priority: this.state.priority,
            assignedTo: this.state.assignedTo,
            overdueDays: this.state.overdueDays,
            description: this.state.description,
            dueDate: this.state.dueDate,
            lastUpdated: new Date(),
            closedDate: this.state.closedDate,
            closed: this.state.closed
        };
        console.log('update obj:');
        console.log(obj);
        axios.post(myConstants.localUrl + myConstants.serverRoute + myConstants.serverRouteEdit
            // 'http://localhost:4000/issuesroute/edit'
            + this.props.match.params.id, obj)
            .then(function(res) {
                console.log(res.data)
            });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Issue</h3>
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
                        <label>Status: </label>
                        <select value={this.state.status}
                                onChange={this.onChangeStatus}
                                required>
                            {myConstants.statusList.map(({value, label}) =>
                                <option value = {value}>{label}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Priority: </label>
{/*TODO add bootstrap and test*/}
                        <select value={this.state.priority}
                                onChange={this.onChangePriority}
                                required>
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
                            <option>TestUser</option>
                        </select>
                    </div>

{/*TODO test whether field needs value instead (or both)*/}
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea className="form-control"
                                  value={this.state.description}
                                  onChange={this.onChangeDescription}> </textarea>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Update Issue" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}