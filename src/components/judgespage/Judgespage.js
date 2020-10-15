import React from "react";
import Checkbox from "../../components/filterpanel/Checkbox";
import Autocomplete from "../../components/filterpanel/Autocomplete";
import JudgesView from "../../components/judgesview/Judgesview";
import SearchField from "../../components/filterpanel/Search.js";
import {parserForm} from "../../utils/utils";
import useApi from "../../hooks/useFetch";

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
        <h3>Пошук по прізвищу</h3>
      <SearchField />
    </div>
  <button type = "submit">Подивитись результати</button>
    </form>
    <div>
      <JudgesView />
    </div>
     
    </div>
  );
}
