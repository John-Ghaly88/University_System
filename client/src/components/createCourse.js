import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

//BasicTextFields
export default function Create() {
  const classes = useStyles();
  
  const [course,setCourse]= useState({
     
    _id:0,
    name:'',
    major:'',
    semester:0,
    hours:0,
    hasPrerequisite:false



  });

  const createCourse= () => {
    axios.post('http://localhost:5000/api/courses',course).then(() => {
      window.location.reload(false);
    })
  }

  return (
    <>
    <h2>
        Create a Course
    </h2>  
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Course ID" variant="outlined"  onChange={(event) => {
       setCourse({ ...course,_id:event.target.value})   
      }} />
      <TextField id="outlined-basic" label="Course Name" variant="outlined"  onChange={(event) => {
       setCourse({ ...course,name:event.target.value})   
      }} />
      <TextField id="outlined-basic" label="Major" variant="outlined"  onChange={(event) => {
       setCourse({ ...course,major:event.target.value})   
      }} />
      <TextField id="outlined-basic" label="Semester No." variant="outlined"  onChange={(event) => {
       setCourse({ ...course,semester:event.target.value})   
      }} />
      <TextField id="outlined-basic" label="Credit Hours" variant="outlined"  onChange={(event) => {
       setCourse({ ...course,hours:event.target.value})   
      }} />
      
      <Button variant="contained" color="primary" onClick={createCourse}>
        Create
      </Button>
    </form>
    </>
  );
}
