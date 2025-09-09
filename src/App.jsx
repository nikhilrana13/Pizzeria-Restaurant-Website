import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import Contact from "./Pages/Contact"
import Applayout from "./Components/Layout/Applayout"
import Errorpage from "./Pages/Errorpage"
import MenuContextProvider from "./Context/MenuContext"




const router = createBrowserRouter([
  {
    path: "/",
    element:<Applayout/>,
    errorElement:<Errorpage/> ,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/menu",
        element: <Menu/>
      },
      {
        path: "/menu/:category",
        element: <Menu/>
      }
    ]
  }
])

function App() {

  

  return (
    <MenuContextProvider>
    <RouterProvider router={router} />
    </MenuContextProvider>
     
  )
}

export default App
