import './App.css';
import DisplayCourses from './components/DisplayCourses'
import DisplayTasks from './components/DisplayTasks'
import CreateCourse from './components/CreateCourse'
import AppMenu from './components/AppMenu'
import Home from './components/Home'
//import { withAuthenticator } from 'aws-amplify-react'
import React from "react";
import Amplify, { Auth } from 'aws-amplify';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import CourseLayout from './components/CourseLayout'
import Checkout from './components/Checkout'
import CreateTask from './components/CreateTask'
import CreateComment from './components/CreateComment'
import CommentPost from './components/CommentPost'
import CourseDash from './components/CourseDash'

import CourseLayouttest from './components/CourseLayouttest'
import TaskLayout from './components/TaskLayout'
import HomePage from './components/HomePage'
import SingleTaskLayout from './components/SingleTaskLayout'
import InfoLayout from './components/InfoLayout'
import ProfileLayout from './components/ProfileLayout'

function App() {
 return (
   <div className="App">
   <Router >
       <AppMenu />
       <Switch>
           <Route path={"/CreateCourse"} exact component={CreateCourse} />
           <Route path={"/DisplayCourses"} component={DisplayCourses} />
           <Route path={"/Home"} component={Home} />
           <Route exact path={"/CourseLayout"} component={CourseLayout} />
           <Route path={"/CourseLayout/:course.id"} render={props => <CourseLayout {...props} /> } />
           <Route path={"/CourseLayout/:course.id"} component={CourseLayout} />
           <Route path={"/Checkout"} component={Checkout} />
           <Route path={"/DisplayTasks"} component={DisplayTasks} />
           <Route path={"/CourseLayout"} component={CourseLayout} />
           <Route path={"/CreateTask"} component={CreateTask} />
           <Route path={"/CommentPost"} component={CommentPost} />
           <Route path={"/CreateComment"} component={CreateComment} />
           <Route path={"/CourseLayouttest"} component={CourseLayouttest} />
           <Route path={"/CourseDash"} component={CourseDash} />
           <Route path={"/TaskLayout"} component={TaskLayout} />
           <Route path={"/SingleTaskLayout"} component={SingleTaskLayout} />
           <Route path={"/InfoLayout"} component={InfoLayout} />
           <Route path={"/ProfileLayout"} component={ProfileLayout} />
           <Route exact component={HomePage} />
       </Switch>

   </Router>
   </div>
 );
}

export default withAuthenticator(App, { includeGreetings: true});
