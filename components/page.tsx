// import React from "react";

// const Hpar = (props) => {
//   return (

// <div className="flex flex-col items-center">
// <h1 className="text-xl m-4 p-2 rounded-lg">About</h1>
// <div className="text-justify break-words sm:p-10 flex flex-col space-y-2">

import React from "react";

const Page = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-xl my-10 rounded-lg">{props.title}</h1>
        <div className="flex flex-col space-y-3 my-5">{props.children}</div>
      </div>
    </>
  );
};

export default Page;
