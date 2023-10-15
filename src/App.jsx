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
import ProductBuying from './pages/ProductBuying';
import { useState,useEffect } from 'react';
import { db } from './firebaseConfig';
import {collection,query,onSnapshot} from 'firebase/firestore'
function App() {
  const [cartItems,setCartItems]=useState([]);
  const[products,setproducts]= useState([]);
  const [product,setProduct]=useState() 
  useEffect(()=>{
    const q=query(collection(db,'products'))
    onSnapshot(q,(data)=>{
    const finaldata=data.docs.map((doc)=>({id: doc.id, ...doc.data()}));
    setproducts(finaldata)
    })},[])
  
  
  return (
    <>
      <div className='App'>
        
        <Navbar/>
        <Routes>
          <Route path='/:id' element={<ProductBuying product={product} cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path='/skintypes' element={<SkinTypes/>}/>
          <Route path='/products' element={<Products products={products} setProduct={setProduct}/>}/>
          <Route path='/aboutus' element ={<AboutUs/>}/>
          <Route path='/search' element={<Search products={products} setProduct={setProduct}/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
              
      </div>
    </>
  );
}

export default App;
