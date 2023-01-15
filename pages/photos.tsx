import React, { useState } from "react";
import Image from "next/image";
import { setConstantValue } from "typescript";

const IMGS = [
  {
    name: "img1",
    src: "/gallery/no_doseqs.jpg",
    alt: "bike",
    width: 200,
    height: 1,
    aspect: "md:aspect-auto",
    span: "md:row-span-2 md:row-end-auto",
    caption: "the most interesting man",
  },
  {
    name: "img2",
    src: "/gallery/bird-bath.jpg",
    alt: "",
    width: 200,
    height: 1,
    aspect: "md:aspect-[2/1]",
    span: "md:col-span-2 md:col-end-auto",
    caption: "the birds are taking a bath",
  },
  {
    name: "img3",
    src: "/gallery/random-mirror.jpg",
    alt: "",
    width: 200,
    height: 1,
    aspect: "aspect-square",
    caption: "found some mirrors in sf",
  },
  {
    name: "img4",
    src: "/gallery/mountain.jpg",
    alt: "",
    width: 200,
    height: 1,
    aspect: "aspect-square",
    caption: "mountain valley, co",
  },
  {
    name: "img5",
    src: "/gallery/cam_peak.JPG",
    alt: "",
    width: 200,
    height: 1,
    aspect: "aspect-square",
    caption: "cam peak, co",
  },
];

// const imgs = require.context("../public/gallery", true, /\.(png|jpe?g|svg)$/);

const photos = () => {
  const [imgs, setImg] = useState(IMGS);
  // const [flip, setFlip] = useState([]);
  // map image names to flip states
  const [flip, setFlip] = useState(imgs.map((img) => false));

  // preprocess the images
  return (
    <>
      random photos
      <div className="relative container mx-auto z-0">
        {/* <div className="grid gap-3 grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2"> */}
        <div className="grid gap-2 grid-cols-16 grid-rows-16">
          {imgs.map((img, index) => (
            <button
              key={img.name}
              className={`group relative aspect-square ${img.span} ${
                img.aspect
              } rounded-xl
              ${flip[index] ? "shadow-2xl scale-105 z-10" : ""}
              sm:hover:shadow-2xl sm:hover:scale-105 sm:hover:z-10
              ease-in-out duration-500 focus:outline-2 outline-black`}
              onClick={() => {
                // flip.set(img, !flip.get(img));
                // if screen size is small, flip the image

                if (window.innerWidth < 640) {
                  const old = flip[index];
                  const newd = flip.slice(index);
                  // set all of newd to false
                  for (let i = 0; i < newd.length; i++) {
                    newd[i] = false;
                  }
                  newd[index] = !old;
                  setFlip(newd);
                } else {
                  const newd = flip.slice(index);
                  // set all of newd to false
                  for (let i = 0; i < newd.length; i++) {
                    newd[i] = false;
                  }
                  setFlip(newd);
                }
                // console.log(flip[index]);
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes=""
                className={`z-0 flex object-cover rounded-xl shadow-xl sm:group-hover:brightness-50 ${
                  flip[index] ? "max-sm:brightness-50" : "max-sm:brightness-100"
                }`}
              />
              <p
                className={`flex absolute inset-0 p-10 z-10
                opacity-0 justify-center items-center 
                sm:group-hover:opacity-100
                ${flip[index] ? "opacity-100" : ""}
                duration-500 ease-in-out text-white`}
              >
                {img.caption ? img.caption : "caption"}
              </p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default photos;
