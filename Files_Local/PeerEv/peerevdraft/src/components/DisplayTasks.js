import React, { Component } from 'react'
import { listTasks } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { onCreateTask, onCreateQuestion } from '../graphql/subscriptions'
import {Auth} from 'aws-amplify'
import Amplify from "aws-amplify";
import EditTask from './EditTask'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import {AmplifyAuthenticator} from "@aws-amplify/ui-react";
import { Link as RouterLink } from 'react-router-dom';
import TaskLayout from './TaskLayout'
import CreateComment from './CreateComment'
import CourseDash from './CourseDash'
import CommentPost from './CommentPost'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';




class DisplayTasks extends Component {

    state = {
        tasks: []
    }

componentDidMount = async () => {
    this.getTasks()

    this.createTaskListener = API.graphql(graphqlOperation(onCreateTask))
             .subscribe({
                 next: taskData => {
                      const newTask = taskData.value.data.onCreateTask
                      const prevTask = this.state.tasks.filter( task => task.id !== newTask.id)

                      const updatedTasks = [newTask, ...prevTask]

                      this.setState({ tasks: updatedTasks})
                 }
             })



}

componentWillUnmount() {
    this.createTaskListener.unsubscribe()
}

getTasks = async () => {
        const result = await API.graphql(graphqlOperation(listTasks))
        this.setState({ tasks: result.data.listTasks.items})
        //console.log("All Tasks: ", result.data.listTasks.items)
    }



    render() {

        const { tasks } = this.state

        return tasks.map(( task ) => {

            return (

                <div>
                <CourseDash />

                <Paper className="tasks" variant="outlined" elevation={2}>

                <Table striped bordered hover key={task.id}>
                  <thead>
                    <tr>
                      <th>Task Name</th>
                      <th>Date Created</th>
                      <th>Describtion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <td><Button component={RouterLink} to="/TaskLayout" edge="start" color="inherit" aria-label="menu" > {task.taskTitle } </Button></td>
                      <td><time style={{fontStyle: "italic"}}>
                          { " "}
                              { new Date(task.createdAt).toDateString()}
                      </time></td>
                      <td><p> { task.taskBody } </p></td>
                      <td><EditTask {...task} /></td>
                      <td><Button component={RouterLink} to={`/TaskLayout/${task.id}`}>Test</Button></td>
                    </tr>
                  </tbody>
                </Table>
                <span>
                        <CreateComment TaskId={task.id} />
                        { task.questions.items.length > 0 && <span style={{fontSize:"19px", color:"gray"}}>
                         Comments: </span>}
                             {
                                  task.questions.items.map((question, index) => <CommentPost key={index} questionData={question}/>)
                         }
                    </span>
                </Paper>

                </div>


            )
        })
    }

}


const rowStyle={
    background: '#f4f4f4',
    padding: '10px',
    border: '1px #ccc dotted',
    margin: '14px'
}


export default DisplayTasks;
