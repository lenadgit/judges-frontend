// import React from "react";
// import "./Judgesview.css";
// import JudgeItem from "../../components/judgesitems/Judgeitem";


// export default function JudgesView(props) {


//   return (
//     <div className = "result-wrapper">
//         Результати
//         <JudgeItem />
//     </div>
//   );
// }

import React from 'react';
import "./Judgesview.css";

const JudgesView = (props) => {
    
  const content = props.judge.map((judges) => {

    const status = judges.status === 'fired' ? 'Звільнений' : 'Попередження';
    const author = (judges.author === "" || judges.author === undefined) ? null : `Автор подання: ${judges.author}`;

    return (
      <div className = "result-wrapper" key={judges.id}>
        <h3>ПІБ судді: {judges.title}</h3>
        <p>Статус: {status}</p>
        <p>Дата попередження/звільнення: {judges.date}</p>
        <p>{judges.desc}</p>
        <p>{author}</p>
      </div>
      );
    });

  return (
    <div>
      {content}
    </div>
  );
}

export default JudgesView

