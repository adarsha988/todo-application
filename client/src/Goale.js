import React from "react";

function Goal() {
  return <> Goal.......</>;
}
function Missed() {
  return <>Missed.......</>;
}

function GoalResult({ isGoal }) {
  return (
    <div>
      <p>
        <b>conditon rendering</b>
      </p>
      {isGoal ? <Goal /> : <Missed />}
    </div>
  );
}

export default GoalResult;
