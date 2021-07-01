import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    maxWidth: 1200,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 30,
  },
}))(TableCell);

function HomeTA() {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <h2 align="center">TAs' Portal</h2>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              <TableRow>
                <StyledTableCell align="center">
                  <li>
                    <Link to="/ta-home">Grades Management</Link>
                  </li>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <li>
                    <Link to="/view-groups">My Classes</Link>
                  </li>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <li>
                    <Link to="/change-password">Change Password </Link>
                  </li>
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </AppBar>
    </>
  );
}
export default HomeTA;
