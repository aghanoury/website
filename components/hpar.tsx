import React from "react";

const Hpar = (props) => {
  return (
    <div
      className={`rounded-lg p-4 bg-pink dark:bg-blue flex flex-col space-y-2`}
    >
      {props.children}
    </div>
  );
};

export default Hpar;
