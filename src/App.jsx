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
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import CheckOut from './pages/CheckOut';

function App() {
  const [cartItems,setCartItems]=useState([]);
  const [products,setproducts]= useState([]);
  const [product,setProduct]=useState() 
  useEffect(()=>{
    const q=query(collection(db,'products'))
    onSnapshot(q,(data)=>{
    const finaldata=data.docs.map((doc)=>({id: doc.id, ...doc.data()}));
    setproducts(finaldata)

    })},[])
  
  const handleClick = (item)=>{
   let isPresent =false;
   cartItems.forEach((prd)=>{
    if (item.id === prd.id)
    isPresent = true;
   })
    if (isPresent){
      toast.warn("this product is already in your cart")
    return;
  }

  setCartItems([...cartItems,item]);
  }

  const handleChange = (item,d) =>{
    let ind=-1;
    cartItems.forEach((data,index)=>{
      if (data.id === item.id)
      ind = index;
    });
    const tempArr = cartItems;
    tempArr[ind] +=d;
    if (tempArr[ind].amount===0)
    tempArr[ind].amount=1;
    setCartItems([...tempArr])
  }


  return (
    <>
      <div className='App'>
        
        <Navbar size={cartItems.length}/>
        <Routes>
          <Route path='/:id' element={<ProductBuying product={product} cartItems={cartItems} /* setCartItems={setCartItems} */ handleClick={handleClick}/>}/>
          <Route path='/skintypes' element={<SkinTypes/>}/>
          <Route path='/products' element={<Products products={products} setProduct={setProduct}/>}/>
          <Route path='/aboutus' element ={<AboutUs/>}/>
          <Route path='/search' element={<Search products={products} setProduct={setProduct}/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} handleChange={handleChange}/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
        <ToastContainer />
              
      </div>
    </>
  );
}

export default App;
