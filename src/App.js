import React from 'react';
import './App.css';
import Pages from './Pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Category from './Components/Category';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>

  )
}
