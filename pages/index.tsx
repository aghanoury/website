import Head from "next/head";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Transition } from "@headlessui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Developer. Engineer. Researcher.");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout = 100;
    if (index < fullText.length) {
      if (index > 0) {
        if (fullText[index - 1] === ".") {
          timeout = 500;
        }
      }
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, timeout);
    }
  }, [index]);

  return (
    <>
      <h1 className="text-xl"></h1>
      <div className="text-justify items-center flex justify-center">
        <div
          className={`relative container w-60 mx-auto sm:mx-5 my-5 
        aspect-square max-w-sm border-blue dark:border-white border-4 rounded-full
        `}
        >
          <Image
            src="/gallery/profile.jpg"
            alt="Picture of the author"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            className="rounded-full absolute transition"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-lg text-center">
          {text}
          <span className="block-cursor absolute mt-1 ml-1" />
        </p>
      </div>
    </>
  );
}
