import React from "react";

const Example = (props) => {
  if (props.data) {
    return <span className="Meaning-example">example: "{props.data}"</span>;
  } else {
    return null;
  }
};
export default Example;
