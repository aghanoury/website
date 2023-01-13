import React from "react";
import Image from "next/image";

const imgs = [
  {
    src: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80",
    alt: "",
    width: 200,
    height: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    alt: "",
    width: 200,
    height: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    alt: "",
    width: 200,
    height: 1,
    ratio: "4/3",
  },
  // {
  //   src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  //   alt: "",
  //   width: 200,
  //   height: 1,
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  //   alt: "",
  //   width: 200,
  //   height: 1,
  // },
];

const photos = () => {
  return (
    <>
      work in progress...
      <div className="container mx-auto">
        <div className="grid gap-3 grid-cols-3">
          {imgs.map((img) => (
            <button className="relative aspect-[4/3] hover:shadow-2xl hover:scale-105 hover:backdrop-blur-xl ease-in-out duration-200 focus:outline-2 outline-black">
              <Image
                src={img.src}
                alt={img.alt}
                // width="400"
                // height={img.height}
                fill
                className="relative aspect-square object-cover overflow-hidden "
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default photos;
