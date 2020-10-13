/* eslint-disable no-use-before-define */
import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { region } from "../content-data/region.json";
import { district } from "../content-data/district.json";
import { town } from "../content-data/town.json";
import { judge } from "../content-data/judge.json";

const useStyles = makeStyles({
  root: {
    margin: 20,
  },
});

export default function ComboBox() {
  const classes = useStyles();
  return (
    <div>
      <Autocomplete
        className={classes.root}
        id="combo-box-demo"
        options={region}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Область" variant="outlined" />
        )}
      />

      <Autocomplete
        className={classes.root}
        id="combo-box-demo"
        options={district}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Район" variant="outlined" />
        )}
      />

      <Autocomplete
        className={classes.root}
        id="combo-box-demo"
        options={town}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Місто" variant="outlined" />
        )}
      />

      <Autocomplete
        className={classes.root}
        id="name-judge"
        options={judge}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Суддя" variant="outlined" />
        )}
      />
    </div>
  );
}
