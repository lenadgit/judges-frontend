import React from "react";
import Checkbox from "../../components/filterpanel/Checkbox";
import Autocomplete from "../../components/filterpanel/Autocomplete";
import JudgesView from "../../components/judgesview/Judgesview";


export default function JudgesPage(props) {


  return (
    <div className = "judges-wrapper">
    <div>
        <Autocomplete />
        <Checkbox />
    </div>
    <div>
      <JudgesView />
    </div>
    </div>
  );
}
