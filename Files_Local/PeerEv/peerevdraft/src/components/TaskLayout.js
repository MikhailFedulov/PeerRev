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
import { getTask } from '../graphql/queries';
import Table from '@material-ui/core/Table';


class TaskLayout extends Component {

   state = {
       taskTitle: "",
       taskBody: "",
       taskcontent: ""
   }

   getTask = async () => {
       
       const url = this.props.location.pathname;
       const urlSplit = url.split("/")
       const result = await API.graphql(graphqlOperation( getTask, {id: urlSplit.pop()}))

       this.setState ({

           taskTitle: result.data.getTask.taskTitle,
           taskBody: result.data.getTask.taskBody,
           taskcontent: result.data.getTask.taskcontent

         })
   }

   render() {

       this.getTask()

       return (
            <div>
                <Table id="Task-Layout-Header">
                     <tr>Task Title: { this.state.taskTitle } </tr>
                     <tr>
                       <td>Task Body: { this.state.taskBody } </td>
                       <td>Task Content: { this.state.taskContent }</td>
                     </tr>

                   </Table>


            </div>

        )
    }
}




export default TaskLayout;
