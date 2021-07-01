import React, { useEffect, useState } from 'react';
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

export default function EditCourse(){

    const classes = useStyles();

    

    const [courseEd, getCourse]=useState([]);

    const [course,setCourse]= useState({
     
        _id:courseEd._id,
        name:courseEd.name,
        major:courseEd.major,
        semester:courseEd.semester,
        hours:courseEd.hours,
        hasPrerequisite:courseEd.hours
    
    
    
      });

      

    
    const Get = (id)=>{useEffect(() => {
        axios.get('http://localhost:5000/api/courses'+`/${id}`).then((myCourse)=>{
            getCourse(myCourse.data);
        })
    },[])}

    const edit=(id) => {
        axios.put(`http://localhost:5000/api/courses/${id}`,course).then( ()=> {
          window.location.reload(false);
        })
      }

      return (
        <>
        <h2>
            Edit a Course
        </h2>  
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Course ID" variant="outlined"  onChange={(event) => { Get(event.target.value)
              
          }} onChange={(event) =>{setCourse({ ...course,_id:event.target.value})} }  />
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
          
          <Button variant="contained" color="primary" onClick={() => edit(course._id)}>
            Edit
          </Button>
        </form>
        </>
      );



}

