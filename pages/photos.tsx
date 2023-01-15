import React from "react";
import Image from "next/image";

const imgs = [
  {
    name: "img1",
    src: "/gallery/no_doseqs.jpg",
    alt: "bike",
    width: 200,
    height: 1,
    aspect: "aspect-",
    span: "sm:row-span-2 sm:row-end-auto",
    caption: "the most interesting man",
  },
  {
    name: "img2",
    src: "/gallery/bird-bath.jpg",
    alt: "",
    width: 200,
    height: 1,
    aspect: "aspect-[2/1]",
    span: "sm:col-span-2 sm:col-end-auto",
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
  // preprocess the images
  // imgs.map((img) => {
  //   // if aspect ratio is 2/3, then set span to 2 rows
  //   if (img.aspect === "aspect-[2/3]") {
  //     img.span = "row-start-2 row-end-1";
  //   }
  // });
  return (
    <>
      This is the photos page. Useless stuff.
      <div className="container mx-auto">
        {/* <div className="grid gap-3 grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2"> */}
        <div className="grid gap-2 grid-cols-16 ">
          {imgs.map((img) => (
            <button
              key={img.name}
              // if the aspect ration is 2/3, then set span to 2 rows

              className={`group flex relative ${img.span} ${img.aspect}  rounded-xl 
              hover:shadow-2xl hover:scale-105 hover:backdrop-blur-xl hover:z-40
              ease-in-out duration-500 focus:outline-2 outline-black`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                // width="400"
                // height={img.height}
                fill
                sizes=""
                className="relative object-cover overflow-hidden rounded-xl shadow-xl group-hover:brightness-50"
              />
              <p className="flex absolute inset-0 p-10 z-50 opacity-0 justify-center items-center group-hover:opacity-100 group-hover:brightness-100 duration-500 text-white ">
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
