import React from "react";
import ComponnentC from "./ComponnentC";

function ComponnentB({user}) {
  return (
    <div className="box">
      ComponnentB
      <ComponnentC user={user}/>
    </div>
  );
}

export default ComponnentB;
