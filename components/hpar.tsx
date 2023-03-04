import React from "react";

const Hpar = (props) => {
  return (
    <div
      // className={`rounded-lg p-4 bg-pink dark:bg-blue flex flex-col space-y-2`}
      className={`rounded-lg flex flex-col text-justify break-words`}
    >
      {props.children}
    </div>
  );
};

export default Hpar;
