import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRouteError } from 'react-router-dom'


const Errorpage = () => {
    const error = useRouteError();
  return (
    <div>
    <h1>OOps! An error occured</h1>
    {error && <p>{error.data}</p>}
    <NavLink to='/'>
    <button>Go Home</button>
    </NavLink>
</div>
  )
}

export default Errorpage
