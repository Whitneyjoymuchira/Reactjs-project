import React from 'react'
import Home from './Home'
import Popular from '../Components/Popular'
import Veggies from '../Components/Veggies'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Cuisine from './Cuisine'
function Pages() {
  return (
    <BrowserRouter>
    <Routes>
  <Route path= "/" element={<Home />} />
  <Route path= "/cuisines" element={<Cuisine />} />
  

    </Routes>
    </BrowserRouter>
  )
}

export default Pages