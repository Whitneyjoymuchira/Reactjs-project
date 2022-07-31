import React from 'react';
import './App.css';
import Pages from './Pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Category from './Components/Category';
import Search from './Components/Search';
import ContactUs from './Pages/ContactUs';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>

  )
}
