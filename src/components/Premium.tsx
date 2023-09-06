import Image from "next/image";
import React from "react";

const Premium = () => {
  return (
    <div className="container pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative group overflow-hidden cursor-pointer">
          <img
            src="/premium (2).jpg"
            alt="Image"
            className="w-full h-auto group-hover:scale-110 transition-transform 
            duration-300 group-hover:duration-300"
          />
          <div
            className="absolute top-[50%] left-[50%] -translate-x-1/2  -translate-y-1/2 
            text-black bg-white opacity-90
              duration-300 flex flex-col justify-center items-center md:w-96 "
          >
            <h3
              className=" py-2 px-4 font-bold
                "
            >
              Complete your view
            </h3>
            <h1
              className="  px-4 text-[34px] font-bold
              relative py-1 after:absolute after:bottom-2 after:left-0
              after:w-full after:scale-x-0 group-hover:after:scale-x-100
                after:transition-all after:origin-left after:h-[1px] group-hover:duration-300 duration-300
                 after:bg-accent"
            >
              Perfect Style
            </h1>
            <p
              className=" py-3 px-4 rounded-md
                duration-300 group-hover:duration-300"
            >
              here to bring your life style to the next level
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden cursor-pointer">
          <img
            src="/premium (1).jpg"
            alt="Image"
            className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
          />
          <div
            className="absolute top-[50%] left-[50%] -translate-x-1/2  -translate-y-1/2
            text-black bg-white opacity-90
              duration-300 flex flex-col justify-center items-center md:w-96 "
          >
            <h3 className=" py-2 px-4 font-bold">
              Find Your New Favourite Clothings
            </h3>
            <h1
              className=" py-2 px-4 font-bold text-[34px]
              group-hover:before:scale-x-100 group-hover:before:origin-left 
              relative before:w-full
            before:h-[1px] before:origin-right before:transition-transform 
            before:duration-300 before:scale-x-0
            before:bg-accent before:absolute before:left-0 before:bottom-3 
            
            
            "
            >
              Premium
            </h1>
            <p className=" py-3 px-4 ">
              Contemporary, minimal and beautifully iconic{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
