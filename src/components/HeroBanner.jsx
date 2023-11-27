import React from "react";
import Banner from "../assets/images/banner.png";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="relative flex justify-center lg:justify-start lg:ml-20 text-center h-screen md:text-start">
      <div>
        <p className="text-red-800 my-40 font-semibold text-[22px] mb-8">
          Fitness Club
        </p>
        <p className="text-[27px] font-bold mb-8">
          Sweet, Smile
          <br />
          And Repeat
        </p>

        <p className="max-w-sm md leading-loose md:max-w-xl">
          Check out most effective exercises personalized to you
        </p>
        <br />
        <br />
        <a href="#exercise">
          <button className="bg-red-700 hover:bg-transparent hover:border-red-700 border hover:text-red-700 text-white p-3 transition-all rounded-sm">
            Explore exercise
          </button>
        </a>
        <div className="absolute top-[280px] -z-20">
          <p className="text-[200px] hidden lg:block text-focus-in opacity-30 text-red-200 ab">
            Exercises
          </p>
        </div>
      </div>
      <div className="hidden lg:block ">
        <img src={Banner} className="absolute -top-16 right-0 h-screen" />
      </div>
    </div>
  );
};

export default HeroBanner;
