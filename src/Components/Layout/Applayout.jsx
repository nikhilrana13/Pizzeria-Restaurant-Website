import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { Outlet, useFetcher } from 'react-router-dom'
import DownloadCard from '../DownloadCard'
import Footer from '../Footer/Footer'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MenuContext } from '../../Context/MenuContext'




const Applayout = () => {
    const {FilterMenu} = useContext(MenuContext);
    const {category} = useParams();
  
    useEffect(()=>{
      console.log("Category from useParams:", category);
      FilterMenu(category);
    },[category,FilterMenu]);
  
 

  return (
    <>
     <Header/>
     <Outlet />
     <DownloadCard />
     <Footer />
    </>
    
  )
}

export default Applayout
