import React from "react";
import "../App.css";
import Reveal from "./Reveal";
import {motion} from "framer-motion"
const Page = () => {
  return (
    <div className="page bg-black relative">
    
  
      <div class="relative ">
        <img
          src="/4.jpg"
          alt="Background Image"
          class="absolute inset-0 object-cover h-full w-full z-0"
        />
        <div class="z-10 text-white font-extrabold pl-20 md:pl-40  relative container flex flex-col items-start px-4 py-40">
          <Reveal>
          <p class="text-4xl md:text-6xl mb-4">
            Grow your game with
            <span class="bg-gradient-to-r from-pink-500 to-blue-900 text-6xl px-10  text-white  py-2 rounded-md text-transparent bg-clip-text">
              Aadi
            </span>
          </p>
          </Reveal>
          
          <p class="text-xl md:text-3xl font-bold">
            More Users, More Engagement, More Revenue
          </p>
          <button
            type="button"
            class="text-2xl md:ml-40 mt-6 relative animation-pulse focus:outline-none"
          >
            Get Started
          </button>

          <motion.div
  whileHover={{ scale: 1.2, rotate: 90 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
/>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row ">
        <div className="text-container  text-white px-20 flex-grow">
          <p className="text-3xl  mt-40 mb-4">
            The Secret Ingredient to Finding Success
          </p>
          <br />
          <p className="text-xl">
            Target the right audience, engaged and loyal.
            <br /> Aadi offers a suite of products that powers games to acquire
            engaged, high value users at a fraction of the cost!
          </p>
        </div>
        <div className="image-container w-full pt-20 md:p-40">
          <img src="/2.jpg" className="inset-0 object-cover w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default Page;
