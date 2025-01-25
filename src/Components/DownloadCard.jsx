



import React from 'react';
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import appdownload from '../../src/assets/pizzeria-template-mobile-app-mockup.png';

const DownloadCard = () => {
  return (
    <div className="pt-[3rem] border-none md:px-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 bg-[#F7F6F2]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-1/2 gap-8">
        <div className="flex flex-col gap-5 text-center md:text-left w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Free delivery!
          </h2>
          <p className="text-3xl sm:text-[2rem] md:text-5xl font-bold text-gray-800">
            Download the App now!
          </p>
          <p className="font-medium text-gray-700">
            Malesuada dignissim non, aliquam id tincidunt amet in sed et gravida
            <br />
            pulvinar ipsum mauris etiam mattis nisl.
          </p>
          <div className="flex gap-10 items-center justify-center md:justify-start flex-wrap">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 border-[1px] border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-500 transition duration-300 w-full sm:w-auto"
            >
              <FaAppStore className="text-2xl" />
              <span className="hidden sm:block">App Store</span>
            </a>


            
            {/* Play Store Button */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 border-red-600 border-[1px] text-red-600 font-bold rounded-lg hover:bg-red-400  transition duration-300 w-full sm:w-auto"
            >
              <IoLogoGooglePlaystore className="text-2xl" />
              <span className="hidden sm:block">Play Store</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end ">
        <img src={appdownload} alt="App Download Mockup" className=" max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
      </div>
    </div>
  );
};

export default DownloadCard;

