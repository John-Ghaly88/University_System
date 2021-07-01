import React, {useEffect, useState} from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'; 

const useStyles = makeStyles({
  table: {
    maxWidth: 2000, 
  },
});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white
  },
  body: {
   
  }
}))(TableCell);
const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);



export default function Schedule() {
  const classes = useStyles();
  const column = useStyles(); 
  const [scheduleView , setSchedule] = useState([])

 
 /* useEffect(() => {
    axios.get('http://localhost:5000/api/schedules').then((myschedule)=>{
        setSchedule(myschedule.data);
        
    })
},[])*/

 

useEffect(() => {
    axios.get('http://localhost:5000/api/schedules/${id}').then((myschedule)=>{
        setSchedule(myschedule.data);
    })
},[])
var x=[scheduleView];
  return (
      <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow >
          <TableCell key={column.id} align="center"> </TableCell>
            <StyledTableCell key={column.id} align="center"> Slot1 </StyledTableCell>
            <StyledTableCell key={column.id} align="center">Slot2</StyledTableCell>
            <StyledTableCell key={column.id} align="center">Slot3</StyledTableCell>
            <StyledTableCell key={column.id} align="center">Slot4</StyledTableCell>
            <StyledTableCell key={column.id} align="center">Slot5</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {x.map((schedule,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row"  align="center">
                Saturday
              </TableCell>
              <TableCell key={column.id} align="center">{schedule?.sat1}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.sat2}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.sat3}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.sat4}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.sat5}</TableCell>
            </TableRow>
          ))}

{x.map((schedule,key) => (
            <TableRow key={key}>
             <TableCell component="th" scope="row"  align="center">
                Sunday
              </TableCell>
              <TableCell key={column.id} align="center">{schedule?.sun1}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.sun2}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.sun3}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.sun4}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.sun5}</TableCell>
            </TableRow>
          ))}

{x.map((schedule,key) => (
            <TableRow key={key}>
             <TableCell component="th" scope="row"  align="center">
                Monday 
              </TableCell>
              <TableCell key={column.id} align="center">{schedule?.mon1}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.mon2}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.mon3}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.mon4}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.mon5}</TableCell>
              
            </TableRow>
            
            
          ))}

{x.map((schedule,key) => (
            <TableRow key={key}>
             <TableCell component="th" scope="row"  align="center">
                Tuesday 
              </TableCell>
              <TableCell key={column.id} align="center">{schedule?.tue1}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.tue2}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.tue3}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.tue4}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.tue5}</TableCell>
              
            </TableRow>
            
            
          ))}



{x.map((schedule,key) => (
            <TableRow key={key}>
             <TableCell component="th" scope="row"  align="center">
                Wednesday 
              </TableCell>
              <TableCell key={column.id} align="center">{schedule?.wed1}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.wed2}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.wed3}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.wed4}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.wed5}</TableCell>
              
            </TableRow>
            
))}

{x.map((schedule,key) => (
            <TableRow key={key}>
             <TableCell component="th" scope="row"  align="center">
                Thursday 
              </TableCell>
              <TableCell key={column.id} align="center">{schedule?.thu1}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.thu2}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.thu3}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.thu4}</TableCell>
              <TableCell key={column.id} align="center">{schedule?.thu5}</TableCell>
              
            </TableRow>
            
))}

        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}