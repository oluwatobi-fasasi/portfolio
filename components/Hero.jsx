import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div
      name="hero"
      className="w-full h-screen bg-[url('/banner.jpg')] bg-center bg-cover"
    >
      <div className="max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center">
        <p className="text-[#ececec]">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ececec] ">
          Abdulwasii Fasasi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ececec]">
          I&apos;m Frontend Developer
        </h2>
        <p className="text-[#ececec] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          tempora veniam expedita sapiente quaerat nam perferendis minima iusto
          odio quasi ratione, commodi laboriosam, sed atque aspernatur accusamus
          saepe cupiditate veritatis consectetur assumenda quod. Et consectetur
          suscipit sed soluta vel distinctio, nesciunt maxime nobis optio sit
          dolore, nulla impedit molestias eveniet!
        </p>
        <div>
          <button className="bg-teal-600 text-white rounded-full border-2 px-6 py-3 my-2 group flex items-center hover:bg-teal-600 hover:border-teal-600">
            View Works
            <span className="duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
