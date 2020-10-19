import React from "react";
import Checkbox from "../../components/filterpanel/Checkbox";
import Autocomplete from "../../components/filterpanel/Autocomplete";
import JudgesView from "../../components/judgesview/Judgesview";
import SearchField from "../../components/filterpanel/Search.js";
import Button from "../../components/filterpanel/Button"
import {parserForm} from "../../utils/utils";
import useApi from "../../hooks/useFetch";
import { judge } from "../content-data/judge.json";

export default function JudgesPage(props) {
const[data, setFetch] = useApi("/api/judges");

const handlerSubmit = (e) => {
  e.preventDefault();
  const fieldName = ["region", "district", "city", "judge", "searchname" ];
  const param = parserForm(e.target, fieldName);
  setFetch(param);
};
console.log("data", data);
  return (
    <div className = "judges-wrapper">
      <form onSubmit = {handlerSubmit}>
    <div>
        <Autocomplete />
        <Checkbox />
        <SearchField />
    </div>
    <Button/>
    </form>
    <div>
      <JudgesView judge={judge}/>
    </div>
     
    </div>
  );
}
