import React, { Component } from 'react'
import { listCourses } from '../graphql/queries'
import { createCourse } from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import {Auth} from 'aws-amplify'
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteCourse } from '../graphql/mutations'
import { getCourse } from '../graphql/queries'
import DisplayCourses from './DisplayCourses'
import { Link as RouterLink } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Button from '@material-ui/core/Button';


class CourseLayout extends Component {


    handlegetCourses = async courseId => {
        const input ={
            id: courseId
        }
        await API.graphql(graphqlOperation(getCourse, {input}))
    }


    render() {
           console.log(this.props.data)
           const course = this.props.data
           return (
               <div>
               <p> {this.props.courseTitle}</p>
               </div>
           )
       }
   }



export default CourseLayout;
