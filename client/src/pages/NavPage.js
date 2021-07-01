import React from "react";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { Container,AppBar, Typography,Grow,Grid} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      maxWidth: 250,
    },
  });

function NavPage() {
    const classes = useStyles();
    return(
        
        <>
        <AppBar className={classes.appBar} position="static" color="inherit" >
        <h2 align="left">
        Browse
    </h2> 

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        
          <TableBody>
          <TableRow>
          <TableCell align="center">
              <li>
                <Link to="/CourseClient">Course Management</Link>
            </li>
            </TableCell>
          <TableCell align="center">
            <li>
                <Link to="/ScheduleClient">Create Scedule</Link>

            </li>
         </TableCell>

         <TableCell align="center">
         <li>
                <Link to="/CourseInfo">Course Info</Link>

            </li>
         </TableCell>


          </TableRow>



          </TableBody>
          </Table>
    </TableContainer>

    </AppBar>

          </>
    )

}

export default NavPage;
