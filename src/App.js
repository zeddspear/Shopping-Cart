import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Item from './Components/Item/Item';
import CartDataContext from './Helper/CartDataContext';

function App() {


  return (
    <CartDataContext>
    <div className="App">
     <Router>
     <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/shop' element={<Shop/>}  />
        <Route path='/cart' element={<ShoppingCart/>}  />
        <Route path='/shop/:itemId' element={<Item/>} />
      </Routes>
      <Footer/>
     </Router>
    </div>
    </CartDataContext>
  );
}

export default App;
