import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NewIssue from "./components/newIssue";
import UpdateIssue from "./components/updateIssue";
import IssuesList from "./components/issuesList";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">Issue Tracker App</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Issues</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/new" className="nav-link">New Issue</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br/>

            <Route path="/" exact component={IssuesList} />
            <Route path="/update:id" component={UpdateIssue} />
            <Route path="/new" component={NewIssue} />
          </div>
        </Router>
    );
  }
}

export default App;



// Resources:
// https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/
// https://www.npmjs.com/package/react-datepicker