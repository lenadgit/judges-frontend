import React from "react";
import "./Judgesview.css";
import JudgeItem from "../../components/judgesitems/Judgeitem";


export default function JudgesView(props) {


  return (
    <div className = "result-wrapper">
        Результати
        <JudgeItem />
    </div>
  );
}