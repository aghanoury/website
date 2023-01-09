import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="text-justify">
        <h1 className="text-xl"></h1>
        <p className="my-2">
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
