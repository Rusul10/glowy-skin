import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import SkinTypes from './pages/SkinTypes';
import AboutUs from './pages/AboutUs';
import Search from './pages/Search';
import Account from './pages/Account';
import Cart from './pages/Cart';
import { ProductContextProvider } from './ProductContext';
import ProductBuying from './pages/ProductBuying';



function App() {
  return (
    <>
      <div className='App'>
        <ProductContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/skintypes' element={<SkinTypes/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/ProductBuying/:id' element={<ProductBuying />}/>
          <Route path='/aboutus' element ={<AboutUs/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </ProductContextProvider>       
      </div>
    </>
  );
}

export default App;
