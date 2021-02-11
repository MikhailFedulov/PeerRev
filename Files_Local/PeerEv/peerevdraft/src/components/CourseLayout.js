import React, { Component } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { getCourse } from '../graphql/queries';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteCourse } from '../graphql/mutations'
import DisplayCourses from './DisplayCourses'
import * as queries from '../graphql/queries';
import TaskLayout from './TaskLayout.js';
<<<<<<< HEAD
=======
import CreateTask from './CreateTask'
>>>>>>> Michael

import Button from '@material-ui/core/Button';
import DisplayTasks from './DisplayTasks';
import Table from '@material-ui/core/Table';

class CourseLayout extends Component {

<<<<<<< HEAD
    state = {
            courseTitle: "",
            courseBody: "",
            numberofstudents: ""
        }

    getCourses = async () => {

            const url = this.props.location.pathname;
            const urlSplit = url.split("/")
            const result = await API.graphql(graphqlOperation(getCourse, { id: urlSplit.pop()}))

            this.setState ({

              courseTitle: result.data.getCourse.courseTitle,
              courseBody: result.data.getCourse.courseBody,
              numberofstudents: result.data.getCourse.numberofstudents

            })

            }

            render() {

              this.getCourses();

                return (
                  <div>
                    <p>{ this.state.courseTitle } </p>
                    <p>{ this.state.courseBody } </p>
                    <p>{ this.state.numberofstudents } </p>
                    {/* <TaskLayout /> */}
                  </div>
                )
            }
            }
=======
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
                   <Table id="Course-Layout-Header">
                     <tr>{ this.state.courseTitle } </tr>
                     <tr>
                       <td>{ this.state.courseBody } </td>
                       <td>{ this.state.numberofstudents }</td>
                     </tr>
                   </Table>
                   <CreateTask courseId={this.state.courseId} />
                   <DisplayTasks />
                 </div>
               )
           }
           }
>>>>>>> Michael

export default CourseLayout;