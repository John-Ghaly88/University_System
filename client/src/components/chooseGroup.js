import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function ChooseGroupNo(props) {
  const classes = useStyles();

  return (
    <>
      <h2> Choose the tutorial group number </h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Group number"
          variant="outlined"
          value={props.tut}
          type="number"
          onChange={(event) => {
            props.setGroupNo(parseInt(event.target.value));
          }}
        />
      </form>
    </>
  );
}
