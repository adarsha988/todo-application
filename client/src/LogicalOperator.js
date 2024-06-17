import React from "react";

function LogicalOperator(props) {
  const { cars } = props;

  return (
  <div>
    {cars && cars.length > 0 && <>i  have cars</>}</div>);
}

export default LogicalOperator;
