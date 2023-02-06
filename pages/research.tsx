import React from "react";
import Hpar from "../components/hpar";

const Research = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl m-5">Research</h1>
      {/* <p className="text-justify sm:p-10">Nothing to post yet...</p> */}
      <Hpar>
        My current research is aimed at finding new ways to make chiplet based
        systems more secure and efficient.{" "}
      </Hpar>
    </div>
  );
};

export default Research;
