import React from 'react'
import pizzacenter from '../../src//assets/pizzeria-template-header-pizza-img.png'
import freshint from '../../src//assets/pizzeria-template-fresh-ingredients-img.jpg'
import mozeralla from '../../src//assets/pizzeria-template-homemade-mozarella.jpg'
import sauce from '../..//src//assets/pizzeria-template-secret-recipe-sauce-img.jpg'
import BookCard from '../Components/BookCard'
import Menubook from '../Components/menubook'



const Home = () => {
  return (
    <>
      <div className='w-full flex flex-col border  bg-[#F7F6F2]'>
      <div className=' relative  flex flex-col justify-center w-full h-[100%]'>
      <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img src={pizzacenter} alt=""  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"  />
      </div>
      
    </div>
       
     <div className=' w-full mt-[12rem] mb-[5rem]  flex items-center justify-center gap-8 flex-wrap'> 
     <div className=' px-4 py-4  flex flex-col items-center gap-5'>
         <img src={freshint} alt='' className='rounded-[50%] w-full max-w-[200px] sm:max-w-[200px] md:max-w-[250px]' />
         <div className='flex flex-col gap-5'>
             <h1 className='text-[2rem] font-[700] text-red-600 text-center'>Fresh Ingredients</h1>
             <p className='text-[1rem] font-[500] text-center text-gray-800'>Risus egestas felis, purus ultricies tortor feugiat <br></br> aliquam euismod senectus sed amet felis <br></br> viverra mi bibendum.</p>
         </div>

     </div>
      
     <div className=' px-4 py-4 mt-[8rem] flex flex-col items-center gap-5'>
         <img src={mozeralla} alt='' className='rounded-[50%] w-full max-w-[200px] sm:max-w-[200px] md:max-w-[250px]' />
         <div className='flex flex-col gap-5'>
             <h1 className='text-[2rem] font-[700] text-red-600 text-center'>Handmade Mozarella
             </h1>
             <p className='text-[1rem] font-[500] text-center text-gray-800'>Risus egestas felis, purus ultricies tortor feugiat <br></br> aliquam euismod senectus sed amet felis <br></br> viverra mi bibendum.</p>
         </div>

     </div>
     <div className=' px-4 py-4   flex flex-col items-center gap-5'>
         <img src={sauce} alt='' className='rounded-[50%] w-full max-w-[200px] sm:max-w-[200px] md:max-w-[250px]' />
         <div className='flex flex-col gap-5'>
             <h1 className='text-[2rem] font-[700] text-red-600 text-center'>"Secret Recipe" Sauce</h1>
             <p className='text-[1rem] font-[500] text-center text-gray-800'>Risus egestas felis, purus ultricies tortor feugiat <br></br> aliquam euismod senectus sed amet felis <br></br> viverra mi bibendum.</p>
         </div>

     </div>

      </div>

      <div className=' border-none bg-black '>
         <BookCard />
      </div>
      <div className='bg-[#F7F6F2]'>
        <Menubook />
      </div>
         
         
       
      </div>
    </>

    
    
  )
}

export default Home
