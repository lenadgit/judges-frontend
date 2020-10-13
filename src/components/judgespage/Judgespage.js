import React from "react";
import Checkbox from "../../components/filterpanel/Checkbox";
import Autocomplete from "../../components/filterpanel/Autocomplete";
import JudgesView from "../../components/judgesview/Judgesview";
import SearchField from "../../components/filterpanel/Search.js";


export default function JudgesPage(props) {


  return (
    <div className = "judges-wrapper">
    <div>
        <Autocomplete />
        <Checkbox />
        <h3>Пошук по прізвищу</h3>
      <SearchField />
    </div>
    <div>
      <JudgesView />
    </div>
    </div>
  );
}
