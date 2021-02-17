import React, { Component } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { getCourse } from '../graphql/queries';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteCourse } from '../graphql/mutations'
import DisplayCourses from './DisplayCourses'
import * as queries from '../graphql/queries';
import TaskLayout from './TaskLayout.js';
import CreateTask from './CreateTask'

import Button from '@material-ui/core/Button';
import DisplayTasks from './DisplayTasks';
import Table from '@material-ui/core/Table';

class CourseLayout extends Component {

   state = {
           courseId: "",
           courseTitle: "",
           courseBody: "",
           numberofstudents: ""
       }

   getCourses = async () => {

           const url = this.props.location.pathname;
           const urlSplit = url.split("/")
           const result = await API.graphql(graphqlOperation(getCourse, { id: urlSplit.pop()}))

           this.setState ({
             courseId: urlSplit[2],
             courseTitle: result.data.getCourse.courseTitle,
             courseBody: result.data.getCourse.courseBody,
             numberofstudents: result.data.getCourse.numberofstudents

           })

           }

           render() {

             this.getCourses();

               return (
                 <div>
                   <Table id="Header">
                     <tr class="Row" id="Course-Task-Name">Course Name: { this.state.courseTitle } </tr>
                     <tr class="Row" id="Course-Task-Description"> Description: { this.state.courseBody } </tr>
                   </Table>
                   <CreateTask courseId={this.state.courseId} />
                   <DisplayTasks />
                 </div>
               )
           }
           }

export default CourseLayout;