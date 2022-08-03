import React from 'react';
import '/home/whitney/Development/code/phase-2/project/src/App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/Landing';
import Addrecipe from './Addrecipe';
import Recipeitems from './Pages/Recipeitems';
import ContactUs from './Pages/ContactUs';
export default function App() {
  return (
    <div className='App'>
       <Navbar />
 
       <Routes>
      <Route exact path='/' element={<LandingPage />}></Route>
      <Route exact path='/add' element={<Addrecipe />} ></Route>
      <Route exact path='/recipes' element={<Recipeitems />} ></Route>
      <Route exact path='/contact' element={<ContactUs/>}></Route>
    </Routes>

  </div >
    
  )
}
