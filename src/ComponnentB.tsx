import React from "react";
import ComponnentC from "./ComponnentC";

function ComponnentB(props) {
  return (
    <div className="box">
      ComponnentB
      <h1>{props.user}</h1>
      <ComponnentC user={props.user}/>
    </div>
  );
}

export default ComponnentB;
