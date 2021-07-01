import React from 'react';
import { Container,AppBar, Typography,Grow,Grid} from '@material-ui/core'; 
import ShowCourse from '../components/showCourse';
import Create from '../components/createCourse';
import useStyles from '../stylesSched';
import EditCourse from '../components/EditCourse';


export default function CourseClient() {
    const classes=useStyles();
    return (
      <div className="CourseClient">
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit" >
            <Typography className={classes.heading} variant="h2" align="center"> Courses Management </Typography>
          </AppBar>
  
          <Grow in>
            <Container>
              <Grid container justify= "space-between" alignItems="stretch">
                <Grid item xs ={12} sm={4}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Create />
                  </AppBar>
  
                </Grid>

                <Grid item xs ={12} sm={4}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <EditCourse />
                  </AppBar>
  
                </Grid>
                <Grid item xs ={12} sm={7}>
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <ShowCourse />
                  </AppBar>
                </Grid>
  
              </Grid>
  
  
            </Container>
          </Grow>
           </Container>
      </div>
    );
  }


