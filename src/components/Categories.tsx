import React from "react";

const Categories = () => {
  return (
    <div className="container pt-10 px-4">
      <h2 className="font-medium text-2xl pb-4">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="relative group overflow-hidden cursor-pointer">
          <img
            src="/categories/shoe.jpg"
            alt="Image"
            className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
          />
          <div
            className="absolute inset-0
         
              duration-300 flex justify-center items-center"
          >
            <button
              className="group-hover:text-black group-hover:bg-white py-2 px-4 rounded-md
               bg-accent text-white duration-300 group-hover:duration-300"
            >
              Shoes
            </button>
          </div>
        </div>
        <div className="relative group overflow-hidden cursor-pointer">
          <img
            src="/categories/women.webp"
            alt="Image"
            className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
          />
          <div
            className="absolute inset-0
         
              duration-300 flex justify-center items-center"
          >
            <button
              className="group-hover:text-black group-hover:bg-white py-2 px-4 rounded-md
               bg-accent text-white duration-300 group-hover:duration-300"
            >
              Woman
            </button>
          </div>
        </div>
        <div className="relative group overflow-hidden cursor-pointer">
          <img
            src="/categories/sweter.webp"
            alt="Image"
            className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
          />
          <div
            className="absolute inset-0
         
              duration-300 flex justify-center items-center"
          >
            <button
              className="group-hover:text-black group-hover:bg-white py-2 px-4 rounded-md
               bg-accent text-white duration-300 group-hover:duration-300"
            >
              Sell
            </button>
          </div>
        </div>
        <div className="relative group overflow-hidden cursor-pointer">
          <img
            src="/categories/men.jpg"
            alt="Image"
            className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
          />
          <div
            className="absolute inset-0
         
              duration-300 flex justify-center items-center"
          >
            <button
              className="group-hover:text-black group-hover:bg-white py-2 px-4 rounded-md
               bg-accent text-white duration-300 group-hover:duration-300"
            >
              Men
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
