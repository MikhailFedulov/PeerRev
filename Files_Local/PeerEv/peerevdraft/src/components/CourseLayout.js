import React, { Component } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { getCourse } from '../graphql/queries';
import { listCourses } from '../graphql/queries'
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteCourse } from '../graphql/mutations'
import DisplayCourses from './DisplayCourses'
import * as queries from '../graphql/queries';


import Button from '@material-ui/core/Button';

class CourseLayout extends Component {

    state = {
            courseTitle: "",
            courseBody: "",
            numberofstudents: ""
        }

    getCourses = async () => {
            //const course = this.props.data
            const result = await API.graphql(graphqlOperation(getCourse), { id:'6a8d57e6-c542-4276-9303-46f55584119f' })
            //this.setState({ courses: result.data.listCourses.items})
            console.log("All One Course: ", result)
        }

            const url = this.props.location.pathname;
            const urlSplit = url.split("/")
            const result = await API.graphql(graphqlOperation(getCourse, { id: urlSplit[2]}))

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
                    <p> test </p>
                    <p>{ this.state.courseTitle } </p>
                    <p>{ this.state.courseBody } </p>
                    <p>{ this.state.numberofstudents } </p>
                  </div>
                )
            }
            }

export default CourseLayout;
