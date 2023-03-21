import React from "react";
import arrow from "../assets/arrow.svg";
const Navbar = () => {
  return (
    <div className=" bg-[#1E1E1E] flex justify-center pt-[58px] h-[410px] ">
      <div className="  w-[1137px]">
        <div className="flex  justify-between items-center mb-[77px] ">
          <div className="text-white w-[101px] font-bold text-lg">
            The Breakdance
          </div>
          <div className="text-white text-base w-[464px] font-medium flex justify-between">
            <a href="">Home</a>
            <a href="">Service</a>
            <a href="">About us</a>
            <a href="">Room</a>
            <a href="">Contact</a>
          </div>
          <button className="text-white border-2 border-solid border-white  font-semibold w-[172px] h-[47px]">
            Book Now
          </button>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold w-[545px] text-[50px] h-[134px] leading-[67px] ">
            Open the door for a spacious living -
          </h1>
          <div className="">
            <div className=" flex items-center justify-between w-[234px]   text-white">
              <p className="text-white">Book a hotel service</p>
              <img className="w-1" src={arrow} alt="" />
            </div>
            <div className="h-[1px] bg-white w-[234px] mb-4 "></div>
            <div className=" flex items-center justify-between w-[234px]  text-white">
              <p className="text-white">Book a hotel service</p>
              <img className="w-1" src={arrow} alt="" />
            </div>
            <div className="h-[1px] bg-white w-[234px] mb-4 "></div>

            <div className=" flex items-center justify-between w-[234px]  text-white">
              <p className="text-white">Book a hotel service</p>
              <img className="w-1" src={arrow} alt="" />
            </div>
            <div className="h-[1px] bg-white w-[234px] mb-4 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
