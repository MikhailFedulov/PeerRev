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


class SingleTaskLayout extends Component {

   state = {
       id: "",
       taskTitle: "",
       taskBody: "",
       taskcontent: "",
       questions: []
   }

   getTask = async () => {

       const url = this.props.location.pathname;
       const urlSplit = url.split("/")
       const result = await API.graphql(graphqlOperation( getTask, {id: urlSplit.pop()}))

       this.setState ({
           taskTitle: result.data.getTask.taskTitle,
           taskBody: result.data.getTask.taskBody,
           taskcontent: result.data.getTask.taskcontent,
           questions: result.data.getTask.questions.items

         })
   }

   render() {

       this.getTask()

       return (
            <div>
             <Paper className="tasks" variant="outlined" elevation={2}>
                <Table id="Task-Layout-Header">
                     <tr>Task Title: { this.state.taskTitle } </tr>
                     <tr>
                       <td>Task Body: { this.state.taskBody } </td>
                       <td>Task Content: { this.state.taskContent }</td>
                     </tr>

                     <span>
                             <CreateComment TaskId={this.state.id} />
                             { this.state.questions.length > 0 && <span style={{fontSize:"19px", color:"gray"}}>
                             Comments: </span> }
                                 {
                                     this.state.questions.map((question, index) => <CommentPost key={index} questionData={question}/>)
                             }
                      </span>
                      

                   </Table>

</Paper>
            </div>

        )
    }
}




export default SingleTaskLayout;
