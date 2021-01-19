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
import DisplayCourses from './DisplayCourses'
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




class AppMenu extends Component {

    render() {
          return (
            <div >
              <AppBar position="static" className="topbar" style={{backgroundColor: "#b3b3b3"}}>
              <Toolbar variant="dense">
                  <Grid
                    justify="space-between" // Add it here :)
                    container
                    spacing={24}
                    display="inline-block">
                    <Grid display="flex" justify-content="center">

                      <IconButton component={RouterLink} to="/DisplayCourses" edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                      </IconButton>

                      <Button component={RouterLink} to="/DisplayCourses" edge="start" color="inherit" aria-label="menu">
                         Dashboard
                      </Button>

                      <Button component={RouterLink} to="/DisplayCourses" edge="start" color="inherit" aria-label="menu">
                         People
                      </Button>

                      <Button component={RouterLink} to="/CreateCourse" edge="start" color="inherit" aria-label="menu">
                          <AddCircleOutlineIcon />
                      </Button>




                    </Grid>

                    <Grid item>
                      <div>
                      <IconButton edge="start" color="inherit" aria-label="menu">
                        <AccountCircle />
                      </IconButton>
                        <Button raised color="accent">
                          <AmplifySignOut />
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            </div>
          );
        }
    }


export default AppMenu;
