import React from 'react';
import './App.css';
import Pages from './Pages/Pages';
import Categories from './Components/Categories';


export default function App() {
  return (
    <div className='App'>
      <Categories/>
      <Pages/>
    </div>

  )
}
