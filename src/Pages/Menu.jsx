import React, { useContext } from 'react'
import Menubook2 from '../Components/Menubook2'
import { MenuContext } from '../Context/MenuContext'
import { MenuCategories } from '../MenuData/MenuData'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'






const Menu = () => {
  const {menudata} = useContext(MenuContext)
  const location = useLocation();
  

 


  if (!menudata || menudata.length === 0) {
    return <p>Loading...</p>; 
  }

  return (
    <div className='w-full  flex flex-col gap-5 py-12 px-8 md:px-16 lg:px-24 bg-[#F7F6F2]'>
      <div className='flex flex-col items-center mt-5 mb-5 gap-5'>
            <h1 className='text-[4rem] font-[700] text-red-600 text-center'>Our Menu</h1>
          <div>
            <Menubook2 />
          </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col  gap-5 md:flex-row  justify-between py-12 px-8 md:px-16 lg:px-24'>
        <h1 className=' md:text-2xl lg:text-4xl font-bold text-red-600'> Choose Your Favourite</h1>
           
           <div className='flex  items-center px-5 py-5  gap-5'>

             {
              MenuCategories.map((category)=>{
                const isActive = location.pathname === `/menu/${category.value}`;
                return(
                  <li key={category.value} 
                  className={`flex p-[1rem]  bg-[#F7F6F2] px-5 py-5 w-50 items-center h-10  border rounded-[50px]
                    ${isActive ? 'bg-red-600 text-white' : ''}`}>
                    <NavLink to={`/menu/${category.value}`} className="text-[1.1rem] font-[500] ">{category.label}</NavLink>
                   
                    </li>

                )
              })
             }
        
           </div>
           
     
            </div>
      </div>
      <div className='flex'>
           <div className='Cards px-5 py-5 flex flex-wrap gap-5  '>
             {
              menudata.map((item)=>{
                return(
                  <div key={item.id} class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
              <div class="min-h-[250px]">
               <img src={item.image} class="w-full" />
               </div>

      <div class="p-6 gap-5 flex flex-col">
        <h3 class="text-gray-800 text-xl font-bold">{item.name}</h3>
        <p class="mt-4 text-sm text-gray-500 leading-relaxed">{item.description}
        </p>
         <p className='text-red-600'>Price:{item.price}</p>
      </div>
             
              
                 
                     </div>

                )
              })
             }
             </div>
    </div>
    </div>
  )
}

export default Menu



