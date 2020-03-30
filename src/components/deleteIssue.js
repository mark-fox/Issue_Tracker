import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const myConstants = require('../helpers/interface');

export default class DeleteIssue extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('before axios delete call');
        console.log(this.props.match.params.id);
            axios.delete(myConstants.localUrl + myConstants.serverRoute +
                myConstants.serverRouteDelete + this.props.match.params.id)
                .then((res) => {
// TODO add alert box
                    console.log('issue deleted: ' + this.props.match.params.id)
            }).catch((err) => {
                console.log(err);
            });
            this.props.history.push('/');
    }

    // deleteIssue() {
    //     console.log('before axios delete call');
    //     console.log(this.props.issue);
    //     // console.log('id: ' + this.props.issue._id);
    //     // axios.delete(myConstants.localUrl + myConstants.serverRoute + myConstants.serverRouteDelete + this.props.issue._id)
    //     //     .then((res) => {
    //     //         console.log('issue deleted: ' + this.props.issue._id)
    //     // }).catch((err) => {
    //     //     console.log(err);
    //     // });
    //     this.props.history.push('/');
    // }

    render () {
        // this.deleteIssue();
        return null
    }
}