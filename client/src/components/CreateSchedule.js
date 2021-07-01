import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CreateSchedule() {
  const classes = useStyles();

  const [schedule, setSchedule] = useState({
    _id: 0,

    sat1: "",
    sat2: "",
    sat3: "",
    sat4: "",
    sat5: "",

    sun1: "",
    sun2: "",
    sun3: "",
    sun4: "",
    sun5: "",

    mon1: "",
    mon2: "",
    mon3: "",
    mon4: "",
    mon5: "",

    tue1: "",
    tue2: "",
    tue3: "",
    tue4: "",
    tue5: "",

    wed1: "",
    wed2: "",
    wed3: "",
    wed4: "",
    wed5: "",

    thu1: "",
    thu2: "",
    thu3: "",
    thu4: "",
    thu5: "",
  });

  const Create = () => {
    axios.post("http://localhost:5000/api/schedules", schedule).then(() => {
      store.addNotification({
        title: "The schedule has been created successfully",
        message: "Created for student ID:" + `${schedule._id}`,
        type: "success",
        container: "top-right",
        insert: "top",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 6000,
        },
      });
    });
  };

  return (
    <>
      <h2>Student's Id</h2>
      <form className={classes.root} noValidate autoComplete="off"></form>
      <TextField
        id="outlined-basic"
        label="Student's ID"
        variant="outlined"
        onChange={(event) => {
          setSchedule({ ...schedule, _id: event.target.value });
        }}
      />
      <form />
      <h2>Saturday</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Slot 1"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, sat1: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 2"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, sat2: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 3"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, sat3: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 4"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, sat4: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 5"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, sat5: event.target.value });
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setSchedule({
              ...schedule,
              sat1: "free",
              sat2: "free",
              sat3: "free",
              sat4: "free",
              sat5: "free",
            });
          }}
        >
          free
        </Button>
      </form>
      <h2>Sunday</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Slot 1"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, sun1: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 2"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, sun2: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 3"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, sun3: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 4"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, sun4: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 5"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, sun5: event.target.value });
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setSchedule({
              ...schedule,
              sun1: "free",
              sun2: "free",
              sun3: "free",
              sun4: "free",
              sun5: "free",
            });
          }}
        >
          free
        </Button>
      </form>
      <h2>Monday</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Slot 1"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, mon1: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 2"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, mon2: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 3"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, mon3: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 4"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, mon4: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 5"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, mon5: event.target.value });
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setSchedule({
              ...schedule,
              mon1: "free",
              mon2: "free",
              mon3: "free",
              mon4: "free",
              mon5: "free",
            });
          }}
        >
          free
        </Button>
      </form>
      <h2>Tuesday</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Slot 1"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, tue1: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 2"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, tue2: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 3"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, tue3: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 4"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, tue4: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 5"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, tue5: event.target.value });
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setSchedule({
              ...schedule,
              tue1: "free",
              tue2: "free",
              tue3: "free",
              tue4: "free",
              tue5: "free",
            });
          }}
        >
          free
        </Button>
      </form>
      <h2>Wednesday</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Slot 1"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, wed1: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 2"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, wed2: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 3"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, wed3: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 4"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, wed4: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 5"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, wed5: event.target.value });
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setSchedule({
              ...schedule,
              wed1: "free",
              wed2: "free",
              wed3: "free",
              wed4: "free",
              wed5: "free",
            });
          }}
        >
          free
        </Button>
      </form>
      <h2>Thursday</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Slot 1"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, thu1: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 2"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, thu2: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 3"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, thu3: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 4"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, thu4: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Slot 5"
          variant="outlined"
          onChange={(event) => {
            setSchedule({ ...schedule, thu5: event.target.value });
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setSchedule({
              ...schedule,
              thu1: "free",
              thu2: "free",
              thu3: "free",
              thu4: "free",
              thu5: "free",
            });
          }}
        >
          free
        </Button>
      </form>
      <h2>Submit the schedule</h2>
      <form>
        <Button variant="contained" color="primary" onClick={Create}>
          Submit
        </Button>
      </form>
      <h2></h2>
    </>
  );
}
