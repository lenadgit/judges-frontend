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
    const content = props.judge.map((judges) =>
    <div className = "result-wrapper" key={judges.id}>
      <h3>{judges.title}</h3>
      {/* <p>{judges.status}</p> */}
      <p>{judges.date}</p>
      <p>{judges.desc}</p>
      <p>{judges.author}</p>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

export default JudgesView

