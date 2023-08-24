import React from 'react'
import { NavLink } from 'react-router-dom'

const ActiveLink = ({to,children}) => {
  return (
   <NavLink 
   to={to}
   className={({isActive})=> isActive? "transition ease-in bg-secondary text-white rounded-md m-5 p-2 mt-10":"transition ease-in mt-10 m-5 p-2"}>
    {children}
   </NavLink>
  )
}

export default ActiveLink