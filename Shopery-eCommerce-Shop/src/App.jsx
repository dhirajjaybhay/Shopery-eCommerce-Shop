import { Routes, Route } from 'react-router-dom'
import './App.css'
import React from 'react'
import Index from './layouts/Index'
import Home from './layouts/Home'
import AboutUS from './pages/AboutUS'
import Shop from './pages/Shop'
import ContactUS from './pages/ContactUS'

function App() {

  return (
    <>
      <Routes>
       <Route path='/' element={<Index />}>
        <Route index element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/aboutus' element={<AboutUS />}/>
        <Route path='/contactus' element={<ContactUS />}/>
       </Route>


      </Routes>
    </>
  )
}

export default App
