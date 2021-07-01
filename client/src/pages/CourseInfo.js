import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import ChooseMajor from "../components/ChooseMajor";
import ViewInfo from "../components/ViewInfo";
import useStyles from "../stylesSched";
import { useState } from "react";

function CourseInfo() {
  const classes = useStyles();
  const [sem, setSemester] = useState("");
  const [major, setMajor] = useState("INCS");

  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Courses Information
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
                  <ViewInfo sem={sem} major={major} />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                >
                  <ChooseMajor
                    sem={sem}
                    setSemester={setSemester}
                    major={major}
                    setMajor={setMajor}
                  />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default CourseInfo;
