
import React from 'react';
import Navbar from './Navbar';
import bgimage from '../../assets/pizzeria-template-hero-bg-img.jpg';

const Header = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat w-full h-[60rem] sm:h-[50rem]" style={{ backgroundImage: `url(${bgimage})` }}>
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      
      <div className="z-10 relative">
        <Navbar />
        
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-4 justify-center mx-auto py-[10rem] sm:py-15 md:py-32">
          <h1 className="text-white text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] font-bold text-center">
            Authentic Italian Pizzeria
          </h1>
          <p className="text-white text-center text-[1rem] sm:text-[1.2rem] lg:text-[1.2rem] px-4">
            Et praesent nulla urna consequat dui arcu cursus diam fringilla libero risus, aliquam diam 
            aliquam ullamcorper urna pulvinar <br /> velit
             suspendisse aliquam lacus sollicitudin
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-5">
            <button
              type="button"
              className="py-3 px-8 text-sm sm:text-base font-medium text-white bg-red-600 rounded-lg border-none hover:bg-red-400"
            >
              BOOK TABLE
            </button>
            <button
              type="button"
              className="py-3 px-8 text-sm sm:text-base font-medium text-white bg-transparent rounded-lg border-2 border-white hover:bg-white hover:text-black"
            >
              TAKE AWAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
