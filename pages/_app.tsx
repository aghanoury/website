import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./navbar";
import Header from "./header";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const WEBSITE_TITLE = "Pooya Aghanoury";

  let [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  // setTimeout(() => {
  //   setShow(false);
  // }, 1000);

  return (
    // <div className="bg-white text-black dark:text-white dark:bg-slate-800 flex flex-col justify-center max-w-4xl mx-auto my-1 border-4 border-black p-4 text-justify">
    // <div className="lg:mx-auto mx-5 mt-1 max-w-4xl border-2 border-black rounded-lg p-10">
    <div
      className={`lg:mx-auto mx-5 mt-5 max-w-4xl font-mono
      duration-500 transform transition-all opacity-0 ease-in-out
    ${show ? "opacity-100" : "opacity-0"}`}
    >
      <title>pooya aghanoury</title>
      <Header />
      {/* <div className="border-t-0 my-0 py-0 border-b-4 border-black mb-2 "></div> */}
      <Component {...pageProps} />
      <div className="border-t-0 my-2 py-0 border-b-4 border-black mb-0 "></div>
    </div>
  );
  // return <Component {...pageProps} />
}
