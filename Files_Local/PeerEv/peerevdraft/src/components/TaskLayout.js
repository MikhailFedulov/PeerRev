import React, { Component } from 'react'
import { getTask } from '../graphql/queries'
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


class TaskLayout extends Component {

    state = {
            taskTitle: "",
            taskBody: ""
        }

    getTasks = async () => {

            const url = this.props.location.pathname;
            const urlSplit = url.split("/")
            const result = await API.graphql(graphqlOperation(getTask, { id: urlSplit[2]}))

            this.setState ({

              taskTitle: result.data.getCourse.courseTitle,
              tasksBody: result.data.getCourse.courseBody

            })

            }

            render() {

              this.getTasks();

                return (
                  <div>
                    <p> test </p>
                    <p>{ this.state.taskTitle } </p>
                    <p>{ this.state.taskBody } </p>
                  </div>
                )
            }
            }

export default TaskLayout;
