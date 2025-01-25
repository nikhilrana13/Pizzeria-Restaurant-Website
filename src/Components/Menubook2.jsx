import React from 'react'
import pasta from '../../src/assets/pizzeria-template-menu-pasta-img.png'
import pizza from '../../src/assets/pizzeria-template-menu-pizza-img.png'
import desert from '../../src/assets/pizzeria-template-menu-dessert-img.png'

const Menubook2 = () => {
  return (
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
  )
}

export default Menubook2
