import React, { Component } from 'react';
import axios from 'axios';

const myConstants = require('../helpers/interface');

export default class DeleteIssue extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
// TODO add alert box
        axios.delete(myConstants.localUrl + myConstants.serverRoute +
            myConstants.serverRouteDelete + this.props.match.params.id)
            .then((res) => {
                console.log('issue deleted: ' + this.props.match.params.id)
        }).catch((err) => {
            console.log(err);
        });
        this.props.history.push('/');
    }

    render () {
        return null
    }
}