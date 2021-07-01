import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import TAHome from './pages/TAHome'
import StudentHome from './pages/StudentHome'
import ChangePassword from './pages/ChangePassword'
import Basic_Information from './pages/Basic_Information';
import Program_Selection from './pages/Program_Selection';
import Contact_Information from './pages/Contact_information';
import Header from './pages/Header';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import { store, persistor } from './store/store'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Schedule from './components/viewSchedule.js';
import Tut from "./components/chooseGroup.js";
import List from "./components/showList.js";
import useStyles from './stylesSched';
import NavPage from './pages/NavPage';
import CourseClient from './pages/CourseClient';
import ScheduleClient from './pages/ScheduleClient';
import CourseInfo from './pages/CourseInfo';
import Home from './pages/Home'
import Admin from './pages/Admin'
import HomePage from './pages/HomePage'
import Button from '@material-ui/core/Button';

import ToHome from './pages/ToHome'
import Student from './pages/Student';
import TA from './pages/TA';


const App = () => {
  const [user, setUser] = useState({});
  const [tut, setGroupNo] = useState("");

  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  const resetUser = () => {
    setUser({});
  };
  const classes = useStyles();

  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
          <ToHome />
            <Switch>
              
              <Route path="/view-schedule" component={Schedule}>
                <Container maxWidth='false'>
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">
                      View Schedule
                    </Typography>
                  </AppBar>
                  <Grow in>
                    <Container maxwidth="100%">
                      <Grid container justify='space-between' alignItems="stretch" maxWidth="100%">
                        <Grid item xs={12} >
                          <AppBar className={classes.appBar} position="static" color="inherit">
                            <Schedule />
                          </AppBar>
                        </Grid>
                      </Grid>
                    </Container>
                  </Grow>
                </Container>
              </Route>
              <Route path="/view-groups">
                <Container maxWidth="lg">
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">
                      Tutorial Groups
                    </Typography>
                  </AppBar>
                  <Grow in>
                    <Container>
                      <Grid container justify="space-between" alignItems="strect">
                        <Grid item xs={12} sm={7}>
                          <AppBar
                            className={classes.appBar}
                            position="static"
                            color="inherit"
                          >
                            <List tut={tut} />
                          </AppBar>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <AppBar
                            className={classes.appBar}
                            position="static"
                            color="inherit"
                          >
                            <Tut tut={tut} setGroupNo={setGroupNo} />
                          </AppBar>
                        </Grid>
                      </Grid>
                    </Container>
                  </Grow>
                </Container>
              </Route>
              <Route path="/login" component={Login} />
              <Route path="/ta-home" component={TAHome} />
              <Route path="/student-home" component={StudentHome} />
              <Route path="/change-password" component={ChangePassword} />
              <Route exact path="/CourseClient" component={CourseClient} />
              <Route exact path="/ScheduleClient" component={ScheduleClient} />
              <Route exact path="/CourseInfo" component={CourseInfo} />
              <Route exact path="/Admin" component={Admin} />
              <Route exact path="/Student" component={Student} />
              <Route exact path="/TA" component={TA} />
              <Route exact path="/Home" component={HomePage} />
              <Route
                render={(props) => (
                  <Basic_Information {...props} user={user} updateUser={updateUser} />
                )}
                path="/first"
                exact={true}
              />
              <Route
                render={(props) => (
                  <Program_Selection {...props} user={user} updateUser={updateUser} />
                )}
                path="/second"
              />
              <Route
                render={(props) => (
                  <Contact_Information {...props} user={user} updateUser={updateUser} resetUser={resetUser} />
                )}
                path="/third"
              />
            </Switch>

          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
