import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllDrinks } from './redux/action';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Drinks from './components/Drinks.jsx';
import Drink from './components/Drink.jsx';
import About from './components/About.jsx';
import NavBarComponent from './components/NavBar.jsx';
import estilo from './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDrinks())
  }, []);

  return (
    <div className='containerApp'>
      <NavBarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/drinks/:id" element={<Drink />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
