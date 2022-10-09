import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import { CartContext } from './CartContext'
import { useEffect, useState } from 'react';
import { getCart, storeCart } from './helpers';

const App = () => {
const [ cart, setCart ] = useState({});
// Fetch cart from local storage
useEffect(() => {
  getCart().then(cart => {
    setCart(JSON.parse(cart));
  });
}, []);

useEffect(() => {
    storeCart(JSON.stringify(cart));
}, [cart]);

    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Navigation />
                    <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/products"  element={<ProductsPage/>} />
                            <Route path="/products/:_id" element={<SingleProduct/>} />
                            <Route path="/cart" element={Cart} />
                    </Routes>
               </CartContext.Provider>
            </Router>
        </>
    )
}

export default App;