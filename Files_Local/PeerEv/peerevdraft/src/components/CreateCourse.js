import React, { Component } from 'react'
import { listCourses } from '../graphql/queries'
import { createCourse } from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import {Auth} from 'aws-amplify'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import {AmplifyAuthenticator} from "@aws-amplify/ui-react";

class CreateCourse extends Component {


        state ={
            courseOwnerId: "",
            courseOwnerUsername: "",
            courseTitle: "",
            courseBody: "",
            numberofstudents: "",
            courseStart: "",
            courseEnd: ""

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


        handleChangeCourse = event => this.setState({
            [event.target.name] : event.target.value
        })


        handleAddCourse = async event =>  {
            event.preventDefault()

            const input ={
                courseOwnerId: this.state.courseOwnerId,
                courseOwnerUsername: this.state.courseOwnerUsername,
                courseTitle: this.state.courseTitle,
                courseBody: this.state.courseBody,
                numberofstudents: this.state.numberofstudents,
                createdAt: new Date().toISOString(),
                courseStart: this.state.courseStart,
                courseEnd: this.state.courseStart
        }

            await API.graphql(graphqlOperation(createCourse, { input }))

            this.setState({ courseTitle: "", courseBody: "", numberofstudents: "", courseStart: "", courseEnd: ""})
        }

     render() {
             return (
                 <Paper className="courses" variant="outlined" elevation={2}>
                   <Typography variant="h6" gutterBottom>
                     Create Course
                   </Typography>
                 <form className="add-post" onSubmit={this.handleAddCourse}>

                 <input style={{ font: '19px'}} type="text" placeholder="Project Name:" name="courseTitle" required value={this.state.courseTitle} onChange={this.handleChangeCourse}/>

                  <input style={{ font: '19px'}} type="text" placeholder="Project Description" name="courseBody" required value={this.state.courseBody} onChange={this.handleChangeCourse}/>

                 <input style={{ font: '19px'}} type="text" placeholder="Max number of collaborators: " name="numberofstudents" required value={this.state.numberofstudents} onChange={this.handleChangeCourse}/>

                 <input style={{ font: '19px'}} type="text" placeholder="Project Start Date" name="courseStart" required value={this.state.courseStart} onChange={this.handleChangeCourse}/>

                 <input style={{ font: '19px'}} type="text" placeholder="Project End Date" name="courseEnd" required value={this.state.courseEnd} onChange={this.handleChangeCourse}/>
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

     export default CreateCourse;
