

import React from 'react';
import pasta from '../../src/assets/pizzeria-template-menu-pasta-img.png';
import pizza from '../../src/assets/pizzeria-template-menu-pizza-img.png';
import desert from '../../src/assets/pizzeria-template-menu-dessert-img.png';
import { Link } from 'react-router-dom';

const Menubook = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-5 py-12 px-8 md:px-16 lg:px-24">
      <div className=" flex flex-col justify-center gap-5 items-center text-center px-6 py-8 sm:px-12 lg:px-16">
        <h5 className="text-xl text-red-700 font-semibold">Choose your Flavor</h5>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Food that brings people together!
        </h1>
        <p className="font-medium text-gray-700 ">
          Cursus ultricies in maecenas pulvinar ultrices integer quam amet, semper dictumst
          <br />
          sit interdum ut venenatis pellentesque nunc.
        </p>
        <Link 
          to="/menu"
          type="button"
          className="py-2.5 px-8 mt-4 text-sm font-medium text-white focus:outline-none bg-red-600 rounded-lg border-none hover:text-white dark:hover:bg-red-400"
        >
          VIEW ALL MENU
        </Link>
      </div>
      <div className="">
        <div className="w-full flex items-center justify-center gap-10 flex-wrap">
          
          <div className="px-4 py-4 flex flex-col items-center gap-5">
            <img
              src={pasta}
              alt=""
              className="rounded-[50%] w-full max-w-[300px] sm:max-w-[300px] md:max-w-[300px] transition-transform transform hover:scale-110 hover:animate-bounce"
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-[2rem] font-[700] text-red-600 text-center">Pasta</h1>
            </div>
          </div>

          
          <div className="px-4 py-4 mt-[8rem] flex flex-col items-center gap-5">
            <img
              src={pizza}
              alt=""
              className="rounded-[50%] w-full max-w-[300px] sm:max-w-[300px] md:max-w-[300px] transition-transform transform hover:scale-110 hover:animate-bounce"
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-[2rem] font-[700] text-red-600 text-center">Pizza</h1>
            </div>
          </div>

         
          <div className="px-4 py-4 flex flex-col items-center gap-5">
            <img
              src={desert}
              alt=""
              className="rounded-[50%] w-full max-w-[300px] sm:max-w-[300px] md:max-w-[300px] transition-transform transform hover:scale-110 hover:animate-bounce"
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-[2rem] font-[700] text-red-600 text-center">Dessert</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubook;

