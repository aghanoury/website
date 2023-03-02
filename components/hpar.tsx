import React from "react";

const Hpar = (props) => {
  return (
    <div
      // className={`rounded-lg p-4 bg-pink dark:bg-blue flex flex-col space-y-2`}
      className={`rounded-lg p-4 flex flex-col space-y-2 break-words`}
    >
      {props.children}
    </div>
  );
};

export default Hpar;
