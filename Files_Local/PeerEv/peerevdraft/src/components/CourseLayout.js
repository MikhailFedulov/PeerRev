import React, { Component } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { getCourse } from '../graphql/queries';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteCourse } from '../graphql/mutations'
import DisplayCourses from './DisplayCourses'
import CreateTask from './CreateTask'
import * as queries from '../graphql/queries';
import { Link as RouterLink } from 'react-router-dom';


import Button from '@material-ui/core/Button';


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
            const result = await API.graphql(graphqlOperation(getCourse, { id: urlSplit[2]}))

            this.setState ({
              courseId: urlSplit[2],
              courseTitle: result.data.getCourse.courseTitle,
              courseBody: result.data.getCourse.courseBody,
              numberofstudents: result.data.getCourse.numberofstudents

            })

            }

            render() {

              this.getCourses();


             // console.log("Course ID:", this.course.id)
                return (
                  <div>
                    <h1> Task:  </h1>
                    <Button component={RouterLink} to="/CreateTask" edge="start" color="inherit" aria-label="menu">
                     Add Task
                    </Button>
                    <CreateTask courseId={this.state.courseId} />
                    <p>{ this.state.courseTitle } </p>
                    <p>{ this.state.courseBody } </p>
                    <p>{ this.state.numberofstudents } </p>
                  </div>
                )
            }
            }

export default CourseLayout;
