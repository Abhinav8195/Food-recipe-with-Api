import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './Components/Navgbar/Navbar';
import Details from './Pages/Details/Details';
import Favourites from './Pages/Favourite/Favourites';
import Index from './Pages/Home/Index';

function App() {
  return (
    <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/fav' element={<Favourites />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
