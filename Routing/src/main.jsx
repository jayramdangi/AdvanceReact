import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { BrowserRouter } from 'react-router'
import Home from './Components/Home'
import { Routes, Route } from 'react-router'
import Shorts from './Components/Shorts'
import All from './Components/All'
import About from './Components/About'

function App()
{
   return(
    <>
      <BrowserRouter>
      <Navbar/>
      <div className='flex'>

    <Sidebar></Sidebar>
    <Routes>
      <Route path='/home' element={<Home/>}>
      <Route path="about" element={<About/>}></Route>
      <Route path='all' element={<All/>}></Route>
      
      </Route>
      <Route path='/shorts' element={<Shorts/>}></Route>



    </Routes></div>


    </BrowserRouter>
      
       
    </>
   )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)