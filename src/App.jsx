import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Shooter from './Pages/Shooter';
import Strategy from './Pages/Strategy';
import Racing from './Pages/Racing';
import GameDetails from './Pages/GameDetails';
import Footer from './Components/Footer';
import Cart from './Pages/Cart';
import CartProvider from './Components/Context/CartProvider';
import Contact from './Pages/Contact';
import './App.css'
import SearchResult from './Pages/SearchResult';
import SearchProvider from './Components/Context/SearchProvider';
import Login from './Pages/Login';
import Register from './Pages/Register';
function App() {
  const [count, setCount] = useState(0);
  const [logIn, setLogIn] = useState(false)
  return (
    <div className="App">
      <CartProvider>
      <SearchProvider >
        <Router>
          <Navbar logIn = {logIn} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/searchResult' element = {<SearchResult />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shooter" element={<Shooter />} />
              <Route path="/strategy" element={<Strategy />} />
              <Route path="/racing" element={<Racing />} />
              <Route path="/game/:gameId" element={<GameDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/login' element = {<Login setLogIn = {setLogIn}/>} />
              <Route path='/register' element = {<Register/>}/>
            </Routes>
          </div>
          <Footer />
        </Router>
        </SearchProvider>
      </CartProvider>
    </div>
  );
}

export default App;
