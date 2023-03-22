import React from "react";
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import pic1 from "../assets/pic1.png";
const Stats = () => {
  return (
    <div className="w-full flex justify-between ">
      <div className="w-[475px] ml-[150px]">
        <div className="mb-[60px]">
          <div className="h-[50px] w-[50px] mb-[15px] rounded-full bg-[#ff7500] flex justify-center items-center text-white">
            1
          </div>
          <h1 className="font-bold text-[24px] mb-[14px]">
            Provide the best choice of Room.{" "}
          </h1>
          <p className="text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat.
          </p>
        </div>

        <div className="mb-[60px]">
          <div className="h-[50px] w-[50px] mb-[15px] rounded-full bg-[#FF7500] flex justify-center items-center text-white">
            1
          </div>
          <h1 className="font-bold text-[24px] mb-[14px]">
            Low price with Best Quality{" "}
          </h1>
          <p className="text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat.
          </p>
        </div>

        <div className="mb-[60px]">
          <div className="h-[50px] w-[50px] mb-[15px] rounded-full bg-[#FF7500] flex justify-center items-center text-white">
            1
          </div>
          <h1 className="font-bold text-[24px] mb-[14px]">
            Restaurant Service{" "}
          </h1>
          <p className="text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat.
          </p>
        </div>
      </div>
      <div className="relative w-[600px]  ">
        <div className=" relative">
          <img className="w-full h-full object-contain relative" src={A1} alt="" />
          <div className="w-[215px] h-[61px] flex justify-start rounded-md shadow absolute bg-[#ffffff] left-28 top-[-30px] ">
            <img className="ml-2" src={pic1} alt="" />
            <div className="ml-2">
              <h1>Cody Fisher</h1>
              <p>give rating <span>4.5</span></p>
            </div>
          </div>
        </div>
        <div className="absolute  top-[249px] left-[-222px] ">
          <img src={A2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
