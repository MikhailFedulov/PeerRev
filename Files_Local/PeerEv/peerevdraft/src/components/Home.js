import React, { Component } from 'react'
import DisplayCourses from './DisplayCourses'
import CreateCourse from './CreateCourse'
import AppMenu from './AppMenu'
//import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import {Switch, Link, Route, BrowserRouter as Router} from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div className="App">
                <DisplayCourses />
            </div>
      );
    }
}

export default Home;
