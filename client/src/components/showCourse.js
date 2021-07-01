import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ShowCourse() {
  const classes = useStyles();
  const [coursesList, setCourseList]=useState([])
  const deleteStudent=(id) => {
    axios.delete(`http://localhost:5000/api/courses/${id}`).then( ()=> {
      window.location.reload(false);
    })
  }

  //react hook calls itself whennever the page reloads

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses').then((allCourses)=>{
      setCourseList(allCourses.data);
    })
},[])


  /*useEffect(() => {
      axios.get('http://localhost:5000/api/courses'+`/${1100}`).then((allCourses)=>{
        setCourseList(allCourses.data);
      })
  },[])*/

  //var x=[coursesList]
  

  return (
    <>
    <h2>
        All Courses
    </h2>  
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Major</TableCell>
            <TableCell align="center">Semester</TableCell>
            <TableCell align="center">Credit Hours</TableCell>
            <TableCell align="center">Remove Course</TableCell>
            
            
          </TableRow>
          

          
        </TableHead>
        <TableBody>
          {coursesList.map((course,key) => (
            <TableRow key={key}>
              
              <TableCell component="th" scope="row">
                {course._id}
              </TableCell>
              <TableCell align="center">{course.name}</TableCell>
              <TableCell align="center">{course.major}</TableCell>
              <TableCell align="center">{course.semester}</TableCell>
              <TableCell align="center">{course.hours}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteStudent(course._id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
                </TableCell>
             

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
