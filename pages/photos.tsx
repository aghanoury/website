import React, { useState } from "react";
import Image from "next/image";

const IMGS = [
  {
    name: "img1",
    src: "/gallery/no_doseqs.jpg",
    aspect: "md:aspect-auto",
    span: "md:row-span-2 md:row-end-auto",
    alt: "the most interesting man, some bar in new orleans",
  },
  {
    name: "img2",
    src: "/gallery/bird-bath.jpg",
    aspect: "md:aspect-[2/1]",
    span: "md:col-span-2 md:col-end-auto",
    alt: "the birds took a bath",
  },
  {
    name: "img3",
    src: "/gallery/random-mirror.jpg",
    aspect: "aspect-square",
    alt: "found some mirrors in sf",
  },
  {
    name: "lacy girl",
    src: "/gallery/lacybnw.jpg",
    aspect: "md:aspect-square",
    alt: "lacy girl after dinner",
  },
  {
    name: "img4",
    src: "/gallery/mountain.jpg",
    aspect: "aspect-square",
    alt: "mountain valley, co",
  },
  {
    name: "img5",
    src: "/gallery/cam_peak.JPG",
    aspect: "aspect-square",
    alt: "cam peak, co",
  },
  // {
  //   name: "img6",
  //   src: "/gallery/drama.jpg",
  //   aspect: "md:aspect-[2/1]",
  //   span: "md:col-span-2 md:col-end-auto",
  //   alt: "missed the shot",
  // },
  {
    name: "fire",
    src: "/gallery/fire.jpg",
    aspect: "md:aspect-square",
    alt: "calwood fire, october 2020",
  },
  {
    name: "greyrock",
    src: "/gallery/greyrock.jpg",
    aspect: "md:aspect-square",
    alt: "greyrock mountain, co",
  },
  {
    name: "greyrock_view",
    src: "/gallery/greyrock_view.jpg",
    aspect: "md:aspect-[2/1]",
    span: "md:col-span-2 md:col-end-auto",
    alt: "view from greyrock",
  },
  {
    name: "moose",
    src: "/gallery/moose.jpg",
    aspect: "md:aspect-square",
    alt: "moose in the water",
  },
  {
    name: "meadowc1",
    src: "/gallery/meadow_creek1.jpg",
    aspect: "md:aspect-square",
    alt: "meadow creek, co",
  },
  {
    name: "blizzard",
    src: "/gallery/glenwood_springs_blizzard.jpg",
    aspect: "md:aspect-square",
    alt: "blizzard in glenwood springs",
  },
  {
    name: "meadowc2",
    src: "/gallery/meadow_creek2.jpg",
    aspect: "md:aspect-[3/1]",
    span: "md:col-span-3 md:col-end-auto",
    alt: "the ducks of meadow creek",
  },
  {
    name: "chief mountain",
    src: "/gallery/chief_mountain.jpg",
    aspect: "md:aspect-auto",
    span: "md:row-span-2 md:row-end-auto",
    alt: "view from cheif mountain, co",
  },
  {
    name: "some mountain",
    src: "/gallery/some_mountain.jpg",
    aspect: "md:aspect-square",
    alt: "some snowy mountain",
  },
  {
    name: "taco classic closeup",
    src: "/gallery/taco_closeup.jpg",
    aspect: "md:aspect-square",
    alt: "taco 💕",
  },
  {
    name: "port of sf",
    src: "/gallery/port_of_sf.jpg",
    aspect: "md:aspect-[2/1]",
    span: "md:col-span-2 md:col-end-auto",
    alt: "port of sf",
  },
  {
    name: "airplane window",
    src: "/gallery/airplane_window1.jpg",
    aspect: "md:aspect-square",
    alt: "east bay from the sky",
  },
  {
    name: "taco chain",
    src: "/gallery/taco_chain.jpg",
    aspect: "md:aspect-square",
    alt: "taco's gold chain",
  },
];

// const imgs = require.context("../public/gallery", true, /\.(png|jpe?g|svg)$/);

const Photos = () => {
  const [imgs, setImg] = useState(IMGS);
  // const [selected, setselected] = useState([]);
  // map image names to selected states
  const [selected, setselected] = useState(imgs.map((img) => false));

  // preprocess the images
  return (
    <>
      <div className="flex justify-center m-5">
        Random photos from 2021 and 2022
      </div>
      <div className="relative container mx-auto z-0">
        {/* <div className="grid gap-3 grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2"> */}
        <div className="grid gap-2 grid-cols-16 grid-rows-16">
          {imgs.map((img, index) => (
            <button
              key={img.name}
              className={`group relative aspect-square ${img.span} ${img.aspect}
              ${selected[index] ? "shadow-2xl scale-105 z-10" : ""}
              sm:hover:shadow-2xl sm:hover:scale-105 sm:hover:z-10
              ease-in-out duration-500 focus:outline-2 outline-black`}
              onClick={() => {
                // selected.set(img, !selected.get(img));
                // if screen size is small, selected the image

                if (window.innerWidth < 640) {
                  const old = selected[index];
                  const newd = selected.slice(index);
                  // set all of newd to false
                  for (let i = 0; i < newd.length; i++) {
                    newd[i] = false;
                  }
                  newd[index] = !old;
                  setselected(newd);
                } else {
                  const newd = selected.slice(index);
                  // set all of newd to false
                  for (let i = 0; i < newd.length; i++) {
                    newd[i] = false;
                  }
                  setselected(newd);
                }
                // console.log(selected[index]);
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                className={`z-0 flex object-cover rounded-lg shadow-xl sm:group-hover:brightness-50 ${
                  selected[index]
                    ? "max-sm:brightness-50"
                    : "max-sm:brightness-100"
                }`}
              />
              <p
                className={`flex absolute inset-0 p-10 z-10
                opacity-0 justify-center items-center 
                sm:group-hover:opacity-100
                ${selected[index] ? "opacity-100" : ""}
                duration-500 ease-in-out text-white`}
              >
                {img.alt ? img.alt : "some sick ass photo"}
              </p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Photos;
