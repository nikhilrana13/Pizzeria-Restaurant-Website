



import React from 'react';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { CgOpenCollective } from "react-icons/cg";
import { FaPizzaSlice } from "react-icons/fa";

const BookCard = () => {
  return (
    <div>
      <div className='w-full flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-[5rem] py-[2rem] sm:py-[3rem] md:py-[5rem]'>

        <div className='flex flex-col px-5 py-5 gap-5'>
          <h1 className='text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold text-white'>
            Bringing <br /> Happiness <br /> To You
          </h1>
          <p className='text-[1rem] sm:text-[1.2rem] font-semibold text-white'>
            Tellus id nisl quis at sollicitudin nisl nisi <br /> tincidunt purus.
          </p>
        </div>

        
        <div className='flex flex-col items-center px-5 py-5 gap-5'>
          <div className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] flex justify-center items-center bg-red-700 rounded-full'>
            <MdOutlinePhoneAndroid className='text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] text-white' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-[1.5rem] sm:text-[2rem] font-bold py-3 text-white'>Online Delivery</p>
            <p className='flex gap-3 sm:gap-5 justify-center text-[1rem] sm:text-[1.2rem] font-bold cursor-pointer text-white'>
              ORDER ONLINE <FaLongArrowAltRight className='text-[1.2rem] sm:text-[1.5rem]' />
            </p>
          </div>
        </div>

       
        <div className='flex flex-col items-center px-5 py-5 gap-5'>
          <div className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] flex justify-center items-center bg-red-700 rounded-full'>
            <CgOpenCollective className='text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] text-white' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-[1.5rem] sm:text-[2rem] font-bold py-3 text-white'>Click & Collect</p>
            <p className='flex gap-3 sm:gap-5 justify-center text-[1rem] sm:text-[1.2rem] font-bold cursor-pointer text-white'>
              TAKEOUT ORDER <FaLongArrowAltRight className='text-[1.2rem] sm:text-[1.5rem]' />
            </p>
          </div>
        </div>

        
        <div className='flex flex-col items-center px-5 py-5 gap-5'>
          <div className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] flex justify-center items-center bg-red-700 rounded-full'>
            <FaPizzaSlice className='text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] text-white' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-[1.5rem] sm:text-[2rem] font-bold py-3 text-white'>Restaurant Dining</p>
            <p className='flex gap-3 sm:gap-5 justify-center text-[1rem] sm:text-[1.2rem] font-bold cursor-pointer text-white'>
              BOOK A TABLE <FaLongArrowAltRight className='text-[1.2rem] sm:text-[1.5rem]' />
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BookCard;
