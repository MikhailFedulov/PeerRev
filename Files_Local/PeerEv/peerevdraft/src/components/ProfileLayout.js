import React, { Component } from 'react'
import { listTasks } from '../graphql/queries'
import { createTask } from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import {Auth} from 'aws-amplify'
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteTask } from '../graphql/mutations'
import DisplayTasks from './DisplayTasks'
import { Link as RouterLink } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { getTask } from '../graphql/queries';
import Table from '@material-ui/core/Table';
import CreateComment from './CreateComment'
import CommentPost from './CommentPost'


class ProfileLayout extends Component {

    state ={
        courseOwnerId: "",
        courseOwnerUsername: "",

    }

    componentDidMount = async () => {
    await Auth.currentUserInfo()
         .then(user => {
             this.setState({
                   courseOwnerId: user.attributes.sub,
                   courseOwnerUsername: user.username

             })


              console.log("Curr: User: ", user.username);
              console.log("Attr.Sub: User: ", user.attributes.sub);

         })
    }


       render() {
             return (
                <div>
            <h1> User name: {this.state.courseOwnerUsername}</h1>

                 </div>

                 )
            }
        }




export default ProfileLayout;
