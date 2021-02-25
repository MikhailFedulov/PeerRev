import React, { Component } from 'react'
import { listTasks } from '../graphql/queries'
import { createTask } from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import {Auth} from 'aws-amplify'
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteTask } from '../graphql/mutations'
import DisplayTasks from './DisplayTasks'
import { Link as RouterLink } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { getTask } from '../graphql/queries';
import Table from '@material-ui/core/Table';
import CreateComment from './CreateComment'
import CommentPost from './CommentPost'


class InfoLayout extends Component {




       render() {
             return (
                <div>
                 <h1 id="FAQHeader">FAQ</h1>
                 <Paper className="courses" variant="outlined" elevation={2}>
                 <h2>How to create a new project?</h2>
                 <a>To create a new project please navigate to the menu at the top and click on the "+" button. Once clicked the PeerEv will redirect you to a new page with the create course form. Please fill in the form answering all the questions.</a>
                 </Paper>
                 <Paper className="courses" variant="outlined" elevation={2}>
                 <h2>How to create a new task?</h2>
                 <a>To create a new task, please navigate and select a course you would like the task to be a part of. Once the course selected, please find "Add Task" button on the bottom right corner. A new menu will appear with all required fields to be completed for a new task creation. Please fill in all the required fields and click "Create".</a>
                 </Paper>
                 <Paper className="courses" variant="outlined" elevation={2}>
                 <h2>How to create a new Question?</h2>
                 <a>To create a new question within a task, please navigate and select a course and then a task you would like the question to be a part of. Once on the Task page please enter your question and click "Add Question" button.</a>
                 </Paper>
                 <Paper className="courses" variant="outlined" elevation={2}>
                 <h2>How to edit Course?</h2>
                 <a>To edit a course please first navigate to "Dashboard". Once the dashboard is loaded you will see a list of course. Next to each course name, please find "Edit" button. By clicking on this button you will be able to modify the course existing information such as name and description.</a>
                 </Paper>
                 <Paper className="courses" variant="outlined" elevation={2}>
                 <h2>How to edit Task?</h2>
                 <a>To edit a task, please first select the course that your task is a part of. The application will laod a list of tasks. Each task has an "Edit" button next to its name. By clicking on it you will be able to edit the task details such as task name and describtion.</a>
                 </Paper>

                 </div>

                 )
            }
        }




export default InfoLayout;
