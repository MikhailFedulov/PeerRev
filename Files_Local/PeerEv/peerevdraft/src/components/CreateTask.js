import React, { Component } from 'react'
import { listTasks } from '../graphql/queries'
import { createTask } from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import {Auth} from 'aws-amplify'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import {AmplifyAuthenticator} from "@aws-amplify/ui-react";

class CreateTask extends Component {

        state ={
            taskOwnerId: "",
            taskOwnerUsername: "",
            taskTitle: "",
            taskBody: "",
            taskcontent: "",
            createdAt: ""

        }

        componentDidMount = async () => {
        await Auth.currentUserInfo()
             .then(user => {
                 this.setState({
                       taskOwnerId: user.attributes.sub,
                       taskOwnerUsername: user.username

                 })


                  console.log("Curr: User: ", user.username);
                  console.log("Attr.Sub: User: ", user.attributes.sub);

             })
     }


        handleChangeTask = event => this.setState({
            [event.target.name] : event.target.value
        })


        handleAddTask = async event =>  {
            event.preventDefault()

            const input ={
                taskOwnerId: this.state.taskOwnerId,
                taskOwnerUsername: this.state.taskOwnerUsername,
                taskTitle: this.state.taskTitle,
                taskBody: this.state.taskBody,
                taskcontent: this.state.taskcontent,
                createdAt: new Date().toISOString(),
        }

            await API.graphql(graphqlOperation(createTask, { input }))

            this.setState({ taskTitle: "", taskBody: "", taskcontent: ""})
        }

     render() {
             return (
                 <Paper className="courses" variant="outlined" elevation={2}>
                   <Typography variant="h6" gutterBottom>
                     Create Task
                   </Typography>
                 <form className="add-post" onSubmit={this.handleAddTask}>

                 <input style={{ font: '19px'}} type="text" placeholder="Task Name:" name="taskTitle" required value={this.state.taskTitle} onChange={this.handleChangeTask}/>

                  <input style={{ font: '19px'}} type="text" placeholder="Task Description" name="taskBody" required value={this.state.taskBody} onChange={this.handleChangeTask}/>

                 <input style={{ font: '19px'}} type="text" placeholder="Task Content: " name="taskcontent" required value={this.state.taskcontent} onChange={this.handleChangeTask}/>

                 <FormControlLabel
                   control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                   label="I agree with Terms and Conditions"
                 />

                 <input type="submit" className="btn" style={{ fontSize: '19ps', width: '100px', backgroundColor: '#ff9933'}}/>

                 </form>

                   </Paper>
                 );
               }


     }

     export default CreateTask;
