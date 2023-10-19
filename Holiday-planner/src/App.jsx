import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Tour from './components/Tour'
import Login from './components/Login'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Singlepage from './components/Singlepage'
import './App.css'
import '../src/styles/Home.css'
import '../src/styles/Footer.css'

import Layout from './components/Layout'
import Navdashboard from './components/Navdashboard'
import Dashboard from './components/Dashboard'
import Users from './components/Users'
import Booking from './components/Booking'
import Settings from './components/Settings'
import TourTable from './components/TourTable'

function App() {

  return (
    
    <BrowserRouter>
    <Routes>

      <Route  path='/'  element={<Layout/>}>
    
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/tour" element={<Tour/>} />

      <Route path="/contact" element={<Contact/>} />
      <Route path="/tour/:id" element={<Singlepage/>} />

      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />


      <Route path="/admin" element={<Navdashboard/>} >
      <Route path="/admin/dashboard" index element={<Dashboard/>}/>
      <Route path="/admin/users" element={<Users/>} /> 
      <Route path="/admin/tourtable" element={<TourTable/>} />           
      <Route path="/admin/booking" element={<Booking/>} />
      <Route path="/admin/settings" element={<Settings/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
