import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "./navbar";
import { Transition } from "@headlessui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // set a variable true after 1 second

  return (
    <>
      <h1 className="text-xl"></h1>
      <div className="text-justify">
        <div
          className={`relative container w-60 mx-auto sm:mx-5 my-5 
        aspect-square max-w-sm sm:float-right`}
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
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          unde tempora soluta quidem repellendus adipisci rerum, sapiente itaque
          fugiat voluptate officiis quisquam quos nam tenetur accusamus dolorem
          quas voluptatem sint. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt unde tempora soluta quidem repellendus
          adipisci rerum, sapiente itaque fugiat voluptate officiis quisquam
          quos nam tenetur accusamus dolorem quas voluptatem sint. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt unde tempora
          soluta quidem repellendus adipisci rerum, sapiente itaque fugiat
          voluptate officiis quisquam quos nam tenetur accusamus dolorem quas
          voluptatem sint. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Nesciunt unde tempora soluta quidem repellendus adipisci rerum,
          sapiente itaque fugiat voluptate officiis quisquam quos nam tenetur
          accusamus dolorem quas voluptatem sint.
        </p>
        <p className="my-2">Another paragraph</p>
        <p className="my-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          unde tempora soluta quidem repellendus adipisci rerum, sapiente itaque
          fugiat voluptate officiis quisquam quos nam tenetur accusamus dolorem
          quas voluptatem sint.
        </p>
        <p className="my-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          unde tempora soluta quidem repellendus adipisci rerum, sapiente itaque
          fugiat voluptate officiis quisquam quos nam tenetur accusamus dolorem
          quas voluptatem sint.
        </p>
      </div>
    </>
  );
}
