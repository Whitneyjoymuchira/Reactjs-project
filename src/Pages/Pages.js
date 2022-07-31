import React from 'react'
import Home from './Home'
import Popular from '../Components/Popular'
import Vegan from '../Components/Vegan'
import { Route,Routes, } from 'react-router-dom'
import Cuisines from './Cuisine'
import Searched from './Searched'
import Recipe from "/home/whitney/Development/code/phase-2/project/src/Pages/Recipe.js"
import ContactUs from './ContactUs'
function Pages() {
  return (
   
    <Routes>
  <Route path= "/" element={<Home />} />
  <Route path= "/cuisine/:type" element={<Cuisines />} />
  <Route path= "/searched/:search" element={<Searched />} />
   <Route path= "/recipe/:name" element={<Recipe />} />
   <Route path= "/contact/" element={<ContactUs/>} />

    </Routes>
  )
}

export default Pages