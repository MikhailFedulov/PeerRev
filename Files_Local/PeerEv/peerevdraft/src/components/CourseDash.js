import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import { AmplifySignOut} from '@aws-amplify/ui-react';
import CreateCourse from './CreateCourse'
import CreateTask from './CreateTask'
import DisplayCourses from './DisplayCourses'
import DisplayTasks from './DisplayTasks'
import Home from './Home'
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
//import {Switch, Link, Route, BrowserRouter as Router} from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import SearchBar from "material-ui-search-bar";


class CourseDash extends Component {

    render() {
          return (
            <div >
            <nav class="menu" tabindex="0">
            	<div class="smartphone-menu-trigger"></div>
            	<ul class="no-bullets">
                <li>
                    <Button component={RouterLink} to="/DisplayCourses" edge="start" color="inherit" aria-label="menu">
                       Dashboard
                    </Button>
                </li>
                <li>
                    <Button component={RouterLink} to="/" edge="start" color="inherit" aria-label="menu">
                       Groups
                    </Button>
                </li>
                <li>
                    <Button component={RouterLink} to="/DisplayTasks" edge="start" color="inherit" aria-label="menu">
                       Tasks
                    </Button>
                </li>
              </ul>
            </nav>



            </div>
          );
        }
    }

//    <main>
//      <div class="helper">
//        RESIZE THE WINDOW
//            <span>Breakpoints on 900px and 400px</span>
//      </div>
//    </main>

export default CourseDash;
