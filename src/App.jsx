import React, { useState } from 'react'
import "./App.css"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Product from './pages/Product'
import Blog from './pages/Blog'
import BlogDetail from './components/blog/blogDetail/BlogDetail'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Order from './pages/Order'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SearchProduct from './pages/SearchProduct'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  const [isvisible, setIsvisible ] = useState(true)
  const [isvisible2, setIsvisible2] = useState(false)
  const [isvisiblelo, setIsvisiblelo] = useState(false)

  return (
    <div>
      <ToastContainer />
        <Header isvisible={isvisiblelo} setIsvisible={setIsvisiblelo}/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blogDetail/:name' element={<BlogDetail/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Order isvisible={isvisible} setIsvisible={setIsvisible}/>}/>
          <Route path='/search/:name' element={<SearchProduct isvisible2={isvisible2} setIsVisible={setIsvisible2}/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
          
        <Footer/>
    </div>
  )
}

export default App