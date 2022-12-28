// import React from "react";
import React, { Component } from "react";
import Image from "next/image";
import pic from '../public/gallery/banana.jpeg'

const Photos = () => {
    const photolist = [
    //   {
    //     url: "https://images.unsplash.com/photo-1573765727997-e02883182ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1656&q=80",
    //     type: "card",
    //   },
    {
        src:"/gallery/test.jpg",
        alt:"test",
        width:500,
        height:500,
    },
    {
        src:"/gallery/banana.jpeg",
        alt:"banana",
        width:500,
        height:500,
    },

    ];
    return (
        <>
        <h1>Photos</h1>
        <p>some random stuff</p>
        <div className="photo-grid">
          {/* {photolist.map((item, index) => {
            return (
            <Image 
                src={item.src}
                alt={item.alt}

            />
            );
          })} */}
          <Image src={pic} width="200" />
        </div>
        {/* <section className="photo-grid">
        </section> */}
        </>
    );
  };
  export default Photos;