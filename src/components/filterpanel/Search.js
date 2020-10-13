import React from "react";
import SearchBar from "material-ui-search-bar";

export default function SearchField(props) {


    return (
        <SearchBar
          onChange={(newValue) => this.setState({ value: newValue })}          
        />
      );
    }