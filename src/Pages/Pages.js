import React from 'react'
import Home from './Home'
import Popular from '../Components/Popular'
import Veggies from '../Components/Veggies'
import { Route,Routes, } from 'react-router-dom'
import Cuisine from './Cuisine'
function Pages() {
  return (
   
    <Routes>
  <Route path= "/" element={<Home />} />
  <Route path= "/cuisine/:type" element={<Cuisine />} />
  

    </Routes>
  )
}

export default Pages