import React from 'react';
import { Container,AppBar, Typography,Grow,Grid} from '@material-ui/core'; 
import CreateSchedule from '../components/CreateSchedule'
//import Create from './components/CreateScheduleFix/CreateScheduleFix.js'
import useStyles from '../stylesSched';
import ReactNotification from 'react-notifications-component';


export default function ScheduleClient() {
    const classes=useStyles();
    return(
        <div className="ScheduleClient">
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit" >
            <Typography className={classes.heading} variant="h2" align="center"> Create Schedules </Typography>
          </AppBar>
  
          <Grow in>
            <Container>
              <Grid container justify= "space-between" alignItems="stretch">
                
                <Grid item xs ={12} sm={12}>
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <CreateSchedule />
                    <ReactNotification />
                  </AppBar>
                </Grid>

              </Grid>
            </Container>
          </Grow>
           </Container>
      </div>
    );
}

