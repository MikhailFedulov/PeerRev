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
                taskCourseId: this.props.courseId,
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
        
        openForm() {
          document.getElementById("add-post").style.display = "block";
        }
        
        closeForm() {
          document.getElementById("add-post").style.display = "none";
        }

     render() {
             return (

              <div>
                  <button class="open-button" onClick={this.openForm}>Add Task</button>

                  <div>
                  <form id="add-post" className="add-post" onSubmit={this.handleAddTask}>
                  <Paper className="courses" variant="outlined" elevation={2}>
                      <Typography variant="h6" gutterBottom>
                        Create Task
                      </Typography>

                      <input style={{ font: '19px'}} type="text" placeholder="Task Name" name="taskTitle" onChange={this.handleChangeTask}/>

                      <input style={{ font: '19px'}} type="text" placeholder="Task Description" name="taskBody" onChange={this.handleChangeTask}/>

                      <input style={{ font: '19px'}} type="text" placeholder="Task Content" name="taskcontent" onChange={this.handleChangeTask}/>

                      <div style= { {
                        display: 'inline'
                      }}>
                        <input type="submit" className="btn" style={{ fontSize: '19ps', width: '100px', backgroundColor: '#ff9933'}}/>
                        <button className="btn-button" style={{ 
                          color: 'white',
                          fontSize: '19ps', 
                          width: '100px', 
                          height: '44px',
                          backgroundColor: '#ff9933',
                          borderRadius: '5px',
                          border: 'none',
                          margin: '30px'
                          }}  onClick={this.closeForm}>Close</button>
                      </div>
                      
                    
                    </Paper>
                    </form>
                  </div>
              </div>

                 )
               }


     }

     export default CreateTask;
