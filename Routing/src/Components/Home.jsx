import React from 'react'
import { NavLink, Outlet } from 'react-router'
const Home = () => {
  return (
    <div>
 
      <div>This is Home Component</div>
      <NavLink className={({isActive})=>`
          text-pink-300 ${isActive?"bg-black text-white":""}
      `} to="all">
          ALL
      </NavLink>
      <NavLink to="about">
        About
      </NavLink>
      <Outlet/>


      
    </div>
  )
}

export default Home
