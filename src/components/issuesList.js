import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const myConstants = require('../helpers/interface');
const Issue = props => (
// TODO rearrange columns as needed
    <tr>
        <td><Link to={"/update/" + props.issue._id}>{props.issue.issueNumber}</Link></td>
        <td>{props.issue.subject}</td>
        <td>{props.issue.status}</td>
        <td>{props.issue.assignedTo}</td>
        <td>{calculateOverdue(props.issue.dueDate, new Date())}</td>
        <td>{props.issue.priority}</td>
        <td>{new Date(props.issue.lastUpdated).toLocaleDateString()}</td>
        <td>{new Date(props.issue.dueDate).toLocaleDateString()}</td>
        <td>{new Date(props.issue.createdDate).toLocaleDateString()}</td>
        <td>{props.issue.createdBy}</td>
{/*TODO might not want closedDate; seems unnecessary*/}
        <td>{new Date(props.issue.closedDate).toLocaleDateString()}</td>
    </tr>
);

function calculateOverdue(date1, date2) {
// TODO figure out how to update database value or remove state from schema
    return Math.round((Date.parse(date2) - Date.parse(date1)) / (1000 * 60 *60 *24));
}

export default class IssuesList extends Component {
    constructor(props) {
        super(props);
        this.state = { allIssues: [] };
    }

    componentDidMount() {
        this.issueListCall();
    }

    componentDidUpdate() {
        this.issueListCall();
    }

    getIssueList() {
        return this.state.allIssues.map(function(currentIssue, i) {
            return <Issue issue={currentIssue} key={i} />;
        })
    }

    issueListCall() {
        axios.get(myConstants.localUrl + myConstants.serverRoute)
            .then(res => {
                this.setState({ allIssues: res.data });
            })
            .catch(function(err) {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <h3>Issues List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
{/*TODO rearrange as needed*/}
{/*TODO extract into 'enum' and loop over*/}
                        <th>Issue</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Assigned To</th>
                        <th>Overdue Days</th>
                        <th>Priority</th>
                        <th>Last Updated</th>
                        <th>Due Date</th>
                        <th>Created Date</th>
                        <th>Created By</th>
                        <th>Closed Date</th>
{/*TODO removed description since probably not needed in this part*/}
                    </tr>
                    </thead>
                    <tbody>
                    { this.getIssueList() }
                    </tbody>
                </table>
            </div>
        )
    }
}