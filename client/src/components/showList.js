import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
    minWidth: 600,
  },
});

export default function ShowList(props) {
  const classes = useStyles();
  const [studentsList, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tutGroups/'+props.tut).then((allStudents) =>{
      setList(allStudents.data);
    })
  }, [props.tut])

  return (
    <>
    <h2> Students' List </h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Tutorial Group</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student) => (
            <StyledTableRow>
              <StyledTableCell align="center">{student.SID}</StyledTableCell>
              <StyledTableCell align="center">{student.Sname}</StyledTableCell>
              <StyledTableCell align="center">{student.TutNo}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
