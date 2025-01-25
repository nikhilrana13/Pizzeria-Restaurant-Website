


import React, { createContext, useState } from 'react'
import { Menu } from '../MenuData/MenuData';

export const MenuContext = createContext([]); 
const MenuContextProvider = ({children}) => {
    const [menudata,setMenuData] = useState(Menu)
// console.log(Menu)


   const FilterMenu = (category)=>{
    console.log("filtering for category:",category)
      
    if(category){
        const FilteredMenu  = Menu.filter(product=> product.category === category);
        if(FilteredMenu.length !== menudata.length || !FilteredMenu.every((item,index)=>item.id === menudata[index]?.id)){
            setMenuData(FilteredMenu);
        }
    } else{
        if(menudata.length !== Menu.length){
            setMenuData(Menu);
        }
    }
        
   }


    
  return (
    <MenuContext.Provider value={{menudata,FilterMenu}} >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContextProvider
