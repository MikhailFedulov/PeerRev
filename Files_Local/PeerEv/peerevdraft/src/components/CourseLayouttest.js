import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import awsconfig from '../aws-exports';
import { listCourses } from '../graphql/queries';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteCourse } from '../graphql/mutations'

import Button from '@material-ui/core/Button';

class CourseLayouttest extends Component {

    handleDeletePost = async courseId => {
        const input ={
            id: courseId
        }
        await API.graphql(graphqlOperation(deleteCourse, {input}))
    }
        render() {
            const course = this.props.data
            return (
                    <button onClick= { () => this.handleDeletePost(course.id)}>Delete</button>
            )
        }
    }



export default CourseLayouttest;
