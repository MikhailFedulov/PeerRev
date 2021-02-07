import React, { Component } from 'react'
import { listCourses } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { onCreateCourse } from '../graphql/subscriptions'
import {Auth} from 'aws-amplify'
import Amplify from "aws-amplify";
import EditCourse from './EditCourse'
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
import CourseLayout from './CourseLayout'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';



class DisplayCourses extends Component {

    state = {
        courses: []
    }

componentDidMount = async () => {
    this.getCourses()

    this.createCourseListener = API.graphql(graphqlOperation(onCreateCourse))
             .subscribe({
                 next: courseData => {
                      const newCourse = courseData.value.data.onCreateCourse
                      const prevCourse = this.state.courses.filter( course => course.id !== newCourse.id)

                      const updatedCourses = [newCourse, ...prevCourse]

                      this.setState({ courses: updatedCourses})
                 }
             })

}

componentWillUnmount() {
    this.createCourseListener.unsubscribe()
}

getCourses = async () => {
        const result = await API.graphql(graphqlOperation(listCourses))
        this.setState({ courses: result.data.listCourses.items})
        console.log("All Courses: ", result.data.listCourses.items)
    }



    render() {
        const { courses } = this.state

        return courses.map(( course ) => {

            return (

                <div>
                <Paper className="courses" variant="outlined" elevation={2}>

                <Table striped bordered hover key={course.id}>
                  <thead>
                    <tr>
                      <th>Course Name</th>
                      <th>Facilitator</th>
                      <th>Date Created</th>
                      <th>Describtion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <td>{course.courseTitle } </td>
                      <td>{course.courseOwnerUsername}</td>
                      <td><time style={{fontStyle: "italic"}}>
                          { " "}
                              { new Date(course.createdAt).toDateString()}
                      </time></td>
                      <td><p> { course.courseBody } </p></td>
                      <td><EditCourse {...course} /></td>
                      <td><Button component={RouterLink} to={`/CourseLayout/${course.id}`}>Test</Button></td>
                    </tr>
                  </tbody>
                </Table>
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


export default DisplayCourses;
