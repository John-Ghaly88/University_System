import React, { useEffect, useState } from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


export default function ViewInfo(props)  {
  const classes = useStyles();
  const [coursesList, setCoursesList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/${props.major}/${props.sem}`).then((allCourses)=>{
      setCoursesList(allCourses.data);
    })
}, [props.sem, props.major])
  
  return (
    <>
    <h2>
        Courses
    </h2>  
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Credit Hours</TableCell>
            <TableCell align="center">Major</TableCell>
            <TableCell align="center">Semester</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coursesList.map((course,key) => (
            <TableRow key={key}> 
              <TableCell align="center">{course.name}</TableCell>
              <TableCell align="center">{course.hours}</TableCell>
              <TableCell align="center">{course.major}</TableCell>
              <TableCell align="center">{course.semester}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
