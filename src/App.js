import React from 'react';
import './App.css';
import Pages from './Pages/Pages';
import Categories from './Components/Categories';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Categories/>
      <Pages/>
      </BrowserRouter>
    </div>

  )
}
