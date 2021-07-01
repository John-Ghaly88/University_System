import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ChooseMajor(props) {
  const classes = useStyles();

  //INCS BSAD ENG DSTH
  const onMajorChange = (event) => {
    const value = event.target.value;
    props.setMajor(value);
  };

  const onSemesterChange = (event) => {
    const value = event.target.value;
    props.setSemester(value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Choose Major</InputLabel>
        <Select
          native
          //defaultValue=""
          id="grouped-native-select"
          value={props.major}
          onChange={onMajorChange}
        >
          <option value="INCS">Computer Science</option>
          <option value="ENG">Engineering</option>
          <option value="BSAD">Business Administration</option>
          <option value="DSTH">Design</option>
        </Select>
      </FormControl>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Choose Semester"
          variant="outlined"
          value={props.sem}
          type="number"
          onChange={onSemesterChange}
        />
      </form>
      <h2>
          
        </h2>
    </div>
  );
}
