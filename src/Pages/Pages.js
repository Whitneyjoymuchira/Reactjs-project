import React from 'react'
import Home from './Home'
import Popular from '../Components/Popular'
import Vegan from '../Components/Vegan'
import { Route,Routes, } from 'react-router-dom'
import Cuisines from './Cuisine'
function Pages() {
  return (
   
    <Routes>
  <Route path= "/" element={<Home />} />
  <Route path= "/cuisine/:type" element={<Cuisines />} />
  

    </Routes>
  )
}

export default Pages