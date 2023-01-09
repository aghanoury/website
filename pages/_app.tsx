import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./navbar";
import Header from "./header";

export default function App({ Component, pageProps }: AppProps) {
  const WEBSITE_TITLE = "Pooya Aghanoury";

  return (
    // <div className="bg-white text-black dark:text-white dark:bg-slate-800 flex flex-col justify-center max-w-4xl mx-auto my-1 border-4 border-black p-4 text-justify">
    // <div className="lg:mx-auto mx-5 mt-1 max-w-4xl border-2 border-black rounded-lg p-10">
    <div className="lg:mx-auto mx-5 mt-5 max-w-4xl font-mono">
      <title>headass</title>
      <Header title={WEBSITE_TITLE} />
      <div className="border-t-0 my-0 py-0 border-b-4 border-black mb-2 "></div>
      <Component {...pageProps} />
      <div className="border-t-0 my-2 py-0 border-b-4 border-black mb-0 "></div>
    </div>
  );
  // return <Component {...pageProps} />
}
