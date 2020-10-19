// import React from "react";
// import SearchBar from "material-ui-search-bar";
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles({
//   root: {
//     margin: 20,
//   },
// });

// export default function SearchField(props) {
//   const classes = useStyles();


//     return (
//         <SearchBar  
//           className={classes.root}
//           onChange={(newValue) => this.setState({ value: newValue })} 
//           name = "searchname"                
//         />
//       );
//     }

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { judge } from "../content-data/judge.json";

export default function FreeSolo() {
  return (
    <div style={{ width: 300, margin: 18 }}>
    <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={judge.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Пошук по прізвищу"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}
