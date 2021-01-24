import React, { Component } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { getCourse } from '../graphql/queries';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteCourse } from '../graphql/mutations'
import DisplayCourses from './DisplayCourses'
import * as queries from '../graphql/queries';


import Button from '@material-ui/core/Button';

class CourseLayout extends Component {
/*
    state = {
            courseTitle: "",
            courseBody: "",
            numberofstudents: ""
        }
*/
    getCourses = async () => {


            //const result = await API.graphql({ query: queries.getCourse, variables: { courseresult }});
            const result = await API.graphql(graphqlOperation(getCourse, { id: '6a8d57e6-c542-4276-9303-46f55584119f' }))
            console.log('blog successfully fetched', result)
            //this.setState({ state: result.data.getCourse.items})
            //console.log("All Courses: ", result.data.getCourse.items)
            }

            /*
            getBlog = async () => {
              const data = await API.graphql(graphqlOperation(GetBlog, { id: this.props.blogId }))
              console.log('blog successfully fetched', data)
            }
          */

            render() {

                return (
                    <div>
                    <p> test </p>
                    </div>
                )
            }
            }

export default CourseLayout;
