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


    //const child = ({ match }) => ({match.params.id})


    componentDidMount = async () => {
        this.getCourses()
    }

    componentWillUnmount() {

    }

    getCourses = async () => {
            //const course = this.props.data
            const result = await API.graphql(graphqlOperation(getCourse), { id:'6a8d57e6-c542-4276-9303-46f55584119f' })
            //this.setState({ courses: result.data.listCourses.items})
            console.log("All One Course: ", result)
        }

getCourses2 = async () => {
        const result = await API.graphql(graphqlOperation(listCourses))
        //this.setState({ courses: result.data.listCourses.items})
        console.log("Step 1")
    }


            /*
            getBlog = async () => {
              const data = await API.graphql(graphqlOperation(GetBlog, { id: this.props.blogId }))
              console.log('blog successfully fetched', data)
            }
          */

            render() {
                //const course = this.props.data
                //console.log("All Courses 2: ", this.props.data)
                return (
                    <div>
                        <p>  test </p>
                    </div>
                )
            }
            }

export default CourseLayout;
