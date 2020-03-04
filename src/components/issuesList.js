import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Issue = props => (
    <tr>
{/*TODO add Link here for issue number*/}
{/*        <Link to={"/update/" + props.issue._id}>{props.issue.issueNumber}</Link>*/}
        <td>{props.issue.subject}</td>
        <td>{props.issue.priority}</td>
        <td>{props.issue.assignedTo}</td>
        <td>{props.issue.description}</td>
    </tr>
);

export default class IssuesList extends Component {
    constructor(props) {
        super(props);
        this.state = { allIssues: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/issuesroute/')
            .then(res => {
                this.setState({ allIssues: res.data });
            })
            .catch(function(err) {
                console.log(err);
            })
    }

    componentDidUpdate() {
// TODO extract into method since same as componentDidMount
        axios.get('http://localhost:4000/issuesroute/')
            .then(res => {
                this.setState({ allIssues: res.data });
            })
            .catch(function(err) {
                console.log(err);
            })
    }

    getIssueList() {
        return this.state.allIssues.map(function(currentIssue, i) {
            return <Issue issue={currentIssue} key={i} />;
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