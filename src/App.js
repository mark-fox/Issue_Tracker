import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NewIssue from "./components/newIssue";
import UpdateIssue from "./components/updateIssue";
import IssuesList from "./components/issuesList";
import DeleteIssue from "./components/deleteIssue";

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
            <Route path="/delete:id" component={DeleteIssue} />
          </div>
        </Router>
    );
  }
}

export default App;



// Resources:
// https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/
// https://www.npmjs.com/package/react-datepicker
// https://github.com/chevtek/mongoose-auto-increment
// https://stackoverflow.com/questions/40979391/mongodb-and-nodejs-insert-id-with-auto-increment
// https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box
// https://stackabuse.com/managing-environment-variables-in-node-js-with-dotenv/
// https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
// https://www.positronx.io/react-mern-stack-crud-app-tutorial/
