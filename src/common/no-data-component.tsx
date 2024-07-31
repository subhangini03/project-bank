import React from "react";

let NoDataComponent = (props: any) => {
  return <div className="no-data-css">{props.message}</div>;
};

export default NoDataComponent;
